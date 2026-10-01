(() => {
  'use strict';
  const content = window.EXPERT_CONTENT || {};
  const text = content.text || {};
  const hasText = value => typeof value === 'string' && value.trim().length > 0;

  document.querySelectorAll('[data-text]').forEach(element => {
    const value = text[element.dataset.text];
    if (hasText(value)) element.textContent = value;
  });

  document.querySelectorAll('[data-image]').forEach(slot => {
    const imageData = (content.images || {})[slot.dataset.image];
    if (!imageData || !hasText(imageData.src)) return;
    const image = new Image();
    image.alt = imageData.alt || '';
    image.decoding = 'async';
    image.loading = slot.dataset.image === 'hero' ? 'eager' : 'lazy';
    if (slot.dataset.image === 'hero') image.fetchPriority = 'high';
    if (hasText(imageData.position)) image.style.objectPosition = imageData.position;

    // Mantém o espaço original visível se o caminho da foto estiver errado.
    const fallback = Array.from(slot.childNodes);
    slot.append(image);
    image.addEventListener('load', () => {
      fallback.forEach(node => node.remove());
      slot.classList.add('has-image');
      if (slot.dataset.image.startsWith('result')) {
        const caption = slot.parentElement.querySelector('figcaption');
        if (caption) caption.textContent = imageData.caption || imageData.alt || 'Trabalho de Veronica Fernandes';
      }
    }, { once: true });
    image.addEventListener('error', () => image.remove(), { once: true });
    image.src = imageData.src;
  });

  function safeLink(value, allowLocal = false) {
    if (!hasText(value)) return null;
    try {
      const url = new URL(value, window.location.href);
      if (url.protocol === 'https:') return url.href;
      if (allowLocal && !/^[a-z][a-z\d+.-]*:/i.test(value) && !value.startsWith('//')) return value;
    } catch { return null; }
    return null;
  }

  const checkout = document.getElementById('checkout');
  const status = document.getElementById('checkout-status');
  const checkoutUrl = safeLink(content.checkoutUrl);
  if (checkoutUrl) {
    checkout.href = checkoutUrl;
    checkout.removeAttribute('aria-disabled');
    checkout.removeAttribute('role');
    checkout.removeAttribute('tabindex');
    status.textContent = 'Você será direcionada ao checkout oficial.';
  } else {
    const explainPending = event => {
      event.preventDefault();
      status.textContent = 'A inscrição ainda não está disponível nesta página. O link oficial precisa ser configurado.';
    };
    checkout.addEventListener('click', explainPending);
    checkout.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') explainPending(event);
    });
  }

  const linkLabels = { instagram: 'Instagram', whatsapp: 'WhatsApp / suporte', terms: 'Termos de uso', privacy: 'Política de privacidade' };
  document.querySelectorAll('[data-link]').forEach(element => {
    const key = element.dataset.link;
    const url = safeLink((content.links || {})[key], key === 'terms' || key === 'privacy');
    if (!url) return;
    const link = document.createElement('a');
    link.href = url;
    link.textContent = linkLabels[key];
    element.replaceWith(link);
  });

  if (hasText(text.price)) {
    document.querySelector('.old-price').hidden = !hasText(text.oldPrice);
    document.querySelector('.installments').hidden = !hasText(text.installments);
    document.getElementById('price-pending').textContent = 'Condições de pagamento aguardam confirmação.';
    if (hasText(text.installments)) document.getElementById('price-pending').hidden = true;
  }
  if (hasText(text.bio) && hasText(text.years) && hasText(text.clients) && hasText(text.students)) {
    document.querySelector('.teacher .pending-note').hidden = true;
  }
  document.getElementById('year').textContent = new Date().getFullYear();
})();
