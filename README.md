# Expert em Mechas — Veronica Fernandes

Landing page responsiva em HTML, CSS e JavaScript. Sem dependências ou build.

## Visualizar

Abra `index.html` no navegador com um duplo clique. As fontes são carregadas do Google Fonts quando há internet; o conteúdo também funciona sem elas.

## Arquivos principais

- `index.html`: estrutura, copy e placeholders.
- `styles.css`: identidade visual, componentes e responsividade.
- `content.js`: fotos, links e informações editáveis.
- `app.js`: aplicação da configuração, carregamento das fotos e comportamento do checkout.
- `assets/paper-grain.svg`: textura suave de papel acetinado, aplicada em todos os fundos. Preserve este arquivo ao publicar. A intensidade é ajustável em `styles.css` pelos tokens `--texture-opacity` e `--texture-dark-opacity`.

## Substituir as fotos

Crie uma pasta `assets` e coloque nela as fotos reais. Em `content.js`, preencha `images`:

```js
teacher: {
  src: 'assets/veronica.webp',
  alt: 'Veronica Fernandes, professora do Expert em Mechas',
  position: '50% 30%'
}
```

Os espaços têm tamanho definido para preservar o layout. `position` ajusta o enquadramento da foto. Uma imagem com caminho inválido mantém o placeholder original.

Fotos necessárias: hero, detalhe de mechas, Veronica ensinando, retrato da professora, seis resultados, mockup do curso e background final. Para cada resultado, preencha também `caption` com a legenda real. O background final recebe uma camada escura para preservar a leitura.

Fotos já aplicadas: `banner hero desktop.png` no hero acima de 800px, `banner hero mobile.png` no hero até 800px e `imagem sobre a profissional.png` na seção da professora. No mobile, o texto fica na parte inferior, abaixo da área da foto. Os três arquivos ficam na raiz do projeto e devem ser publicados junto com a página, mantendo seus nomes. `imagem hero.png` permanece preservada, mas não é usada no hero atual.
Selo já aplicado: `Selo Premium 7 Dias Garantia.png`, também na raiz. Preserve esse arquivo na publicação. A copy informa 7 dias de garantia, conforme confirmado pelo usuário.

Logo aplicada: `logo produto fundo escuro.png` no header, footer, apresentação da oferta e CTA final. Na oferta, a logo aparece diretamente sobre o fundo escuro, sem card ou placeholder. `logo produto fundo claro.png` permanece disponível para futuras áreas claras. Os arquivos ficam na raiz; publique a logo usada com seu nome original. O CSS enquadra as margens transparentes sem distorcer ou modificar os arquivos.

## Preencher textos e links

Em `content.js`, preencha `text` com strings simples. Não é necessário HTML. Campos vazios mantêm o texto original entre colchetes. Os nomes dos campos correspondem aos respectivos conteúdos: `bio`, `testimonial1`, `module1`, `bonus1`, `price`, `installments`, `guaranteeTitle`, `faq1` etc.

- `checkoutUrl`: URL HTTPS do checkout oficial. O CTA de compra fica indisponível enquanto esse campo estiver vazio.
- `links.instagram` e `links.whatsapp`: URLs HTTPS reais.
- `links.terms` e `links.privacy`: URLs HTTPS ou caminhos locais de documentos existentes.
- `text.installments`: condição completa de parcelamento, conforme a oferta oficial.
- `includedBonus1`, `includedBonus2`, `includedBonus3`: nomes dos bônus no resumo da oferta.

Se não houver certificado, suporte, bônus ou preço anterior, remova a respectiva linha de `index.html`. A estrutura contém seis módulos e três bônus reservados; ajuste a quantidade conforme o conteúdo oficial.

## Conteúdo pendente

Demais fotos, biografia, estatísticas, depoimentos, nomes e descrições dos módulos, bônus, condições de pagamento, prazo de acesso, formato das aulas, certificado, suporte, checkout, contatos e documentos legais. Preço de R$ 197,00 e garantia de 7 dias já foram confirmados e aplicados.

## Publicar

Na Vercel, `vercel.json` executa `node scripts/build.cjs` e publica apenas a pasta `public/`. O script copia a página e seus assets; não requer instalação de dependências. Capturas de teste e documentação de desenvolvimento ficam fora da saída publicada. `public/` é gerada automaticamente e não deve ser versionada.

Publique `index.html`, `styles.css`, `content.js`, `app.js` e a pasta `assets` em uma hospedagem estática, mantendo a estrutura de caminhos. Os arquivos `.impeccable`, `PRODUCT.md`, `DESIGN.md` e este README são documentação de desenvolvimento e não precisam ser publicados.

## Verificação realizada

Sintaxe do JavaScript; renderização no Chrome em 1440, 768, 390 e 320px; ausência de overflow horizontal; âncoras internas; chaves de configuração; FAQ; checkout pendente e configurado; rejeição de URLs `javascript:`; aplicação dos preços; carregamento de imagem e overlay do bloco final. Capturas desktop/mobile estão em `.impeccable/review`.

O script de verificação usa o Chrome instalado no caminho padrão do Windows e Node 22 ou posterior:

```powershell
node .impeccable/review/verify.cjs
```
