````markdown
# MARASMO

Site de demonstração da MARASMO, uma marca de streetwear inspirada pelo litoral de Santa Catarina, pelo surf, skate e pelo ritmo mais lento do verão.

A proposta do projeto é criar uma experiência visual simples, marcante e fácil de evoluir, mantendo uma identidade própria entre o litoral e a cultura streetwear.

---

## Sobre o projeto

MARASMO nasceu do lado parado do verão.

A marca parte da ideia de que nem todo momento precisa ser urgente. O site acompanha esse conceito através de uma estética inspirada em:

- litoral de Santa Catarina
- surf
- skate
- streetwear
- verão
- concreto
- maré
- areia
- vida costeira
- estética vintage
- cultura dos anos 90

O projeto foi desenvolvido inicialmente de forma simples, utilizando apenas HTML, CSS e JavaScript.

A ideia é manter uma base fácil de entender para que novas funcionalidades possam ser adicionadas conforme o projeto evolui.

---

## Tecnologias

O projeto utiliza:

- HTML5
- CSS3
- JavaScript
- Google Fonts, quando necessário
- Imagens próprias da marca

Não existem frameworks ou bibliotecas obrigatórias.

---

## Estrutura do projeto

```text
marasmo/
│
├── index.html
├── style.css
├── script.js
│
├── imagens/
│   ├── camiseta-01.jpg
│   ├── camiseta-02.jpg
│   ├── camiseta-03.jpg
│   └── sobre.jpg
│
└── README.md
````

---

## Arquivos

### `index.html`

É a estrutura principal do site.

É onde ficam:

* cabeçalho
* menu
* página inicial
* coleção
* produtos
* seção sobre
* destaque
* contato
* rodapé

Alterações de textos, produtos e estrutura das seções devem ser feitas principalmente neste arquivo.

---

### `style.css`

Responsável pelo visual do site.

É onde ficam:

* cores
* tamanhos
* espaçamentos
* tipografia
* grid
* imagens
* botões
* efeitos
* responsividade
* comportamento visual no celular

A identidade visual da MARASMO deve ser construída principalmente aqui.

---

### `script.js`

Responsável pelas interações do site.

Atualmente o JavaScript controla:

* rolagem suave
* animações de entrada
* comportamento do cabeçalho durante a rolagem

Novas funcionalidades podem ser adicionadas aqui futuramente.

---

## Identidade visual

A identidade visual do site segue uma direção inspirada no litoral e na cultura streetwear.

### Cores

A paleta inicial utiliza tons desaturados:

```text
Off-white
#E8E2D6

Marrom escuro
#292720

Areia
#D6D0C3

Verde desbotado
#7B857B

Cinza esverdeado
#B7BBB4
```

A intenção é evitar cores muito vibrantes e manter uma aparência envelhecida e natural.

---

## Direção visual

O site busca combinar:

**Litoral**

Mar, areia, maré, horizonte e paisagens da costa de Santa Catarina.

**Surf**

Referências de surfwear vintage e cultura costeira.

**Skate**

Tipografia forte, composição mais urbana e elementos inspirados em concreto e rua.

**Streetwear**

Layouts grandes, bastante espaço vazio, tipografia marcante e composição editorial.

**Vintage**

Cores lavadas, baixo contraste e referências visuais dos anos 90.

---

## Página inicial

A página inicial apresenta:

* nome MARASMO em grande escala
* frase da marca
* botão para a coleção
* elemento circular inspirado no movimento da água

A intenção é que a primeira tela seja simples e tenha bastante espaço negativo.

---

## Coleção

A seção de coleção apresenta os produtos da marca.

Cada produto possui:

* imagem
* nome
* preço

Exemplo:

```html
<article class="produto">
    <img src="imagens/camiseta-01.jpg" alt="Camiseta MARASMO">
    <h3>Camiseta 01</h3>
    <p>R$ 149,90</p>
</article>
```

Para adicionar um novo produto, basta duplicar esse bloco e alterar as informações.

---

## Imagens

As imagens ficam dentro da pasta:

```text
imagens/
```

Os caminhos utilizados no HTML devem corresponder exatamente aos nomes dos arquivos.

Exemplo:

```html
<img src="imagens/camiseta-01.jpg" alt="Camiseta MARASMO">
```

Se o arquivo for:

```text
camiseta-01.png
```

o HTML também precisa utilizar `.png`:

```html
<img src="imagens/camiseta-01.png" alt="Camiseta MARASMO">
```

Os nomes dos arquivos diferenciam maiúsculas e minúsculas em alguns servidores.

---

## Como executar

Como o projeto utiliza apenas HTML, CSS e JavaScript, não é necessário instalar dependências.

Basta abrir o arquivo:

```text
index.html
```

diretamente no navegador.

Para desenvolver de forma mais confortável, é recomendado utilizar o VS Code com a extensão Live Server.

---

## Desenvolvimento

Depois de abrir o projeto no VS Code:

1. Abra a pasta `marasmo`.
2. Abra o arquivo `index.html`.
3. Execute com o Live Server.
4. O site será aberto automaticamente no navegador.
5. Faça alterações no HTML ou CSS.
6. Salve o arquivo e veja as mudanças no navegador.

---

## Responsividade

O site possui uma estrutura responsiva para telas menores.

O CSS possui uma media query:

```css
@media (max-width: 800px) {
}
```

Dentro dela são ajustados:

* tamanho das fontes
* espaçamento
* quantidade de colunas
* tamanho das imagens
* organização do rodapé
* estrutura das seções

---

## JavaScript

O JavaScript atual possui três funções principais.

### Navegação suave

Links internos utilizam rolagem suave:

```html
<a href="#colecao">Coleção</a>
```

---

### Animações

Alguns elementos aparecem conforme entram na tela.

O JavaScript utiliza:

```javascript
IntersectionObserver
```

para detectar quando um elemento aparece na área visível.

---

### Cabeçalho

Durante a rolagem da página, o cabeçalho recebe uma classe:

```text
header-scroll
```

Isso permite alterar sua aparência através do CSS.

---

## Organização futura

O projeto pode evoluir gradualmente sem precisar ser reconstruído.

Algumas funcionalidades que podem ser adicionadas futuramente:

* página individual de produto
* seleção de tamanho
* seleção de quantidade
* carrinho
* checkout
* integração com pagamento
* catálogo completo
* filtros de produtos
* busca
* menu mobile
* Instagram
* newsletter
* animações
* transições entre páginas
* integração com banco de dados
* painel administrativo

---

## Produtos

A coleção pode futuramente deixar de ser escrita diretamente no HTML.

Uma possível evolução seria utilizar JavaScript para carregar os produtos de uma estrutura como:

```javascript
const produtos = [
    {
        nome: "Camiseta Baleias",
        preco: 149.90,
        imagem: "imagens/baleias.jpg"
    },
    {
        nome: "Camiseta Farol",
        preco: 149.90,
        imagem: "imagens/farol.jpg"
    }
];
```

Isso permitiria adicionar produtos sem precisar repetir manualmente toda a estrutura HTML.

---

## Git

O projeto utiliza Git para controle de versão.

Para iniciar o repositório:

```bash
git init
```

Adicionar os arquivos:

```bash
git add .
```

Criar o primeiro commit:

```bash
git commit -m "feat: cria estrutura inicial do site"
```

Verificar os arquivos modificados:

```bash
git status
```

Ver histórico de commits:

```bash
git log --oneline
```

---

## Commits

Os commits devem ser objetivos e explicar o que foi alterado.

Exemplos:

```bash
git commit -m "feat: adiciona seção de produtos"
```

```bash
git commit -m "style: cria identidade visual da página inicial"
```

```bash
git commit -m "style: ajusta layout para dispositivos móveis"
```

```bash
git commit -m "fix: corrige carregamento das imagens"
```

```bash
git commit -m "feat: adiciona animações de entrada"
```

---

## Objetivo do projeto

O objetivo não é criar apenas uma loja virtual.

O site deve funcionar como uma extensão da identidade da MARASMO.

A experiência deve transmitir:

> Nada urgente.
> Sem pressa pra acabar.

A estética deve permanecer simples, costeira, urbana e autoral, evitando elementos genéricos de marcas de surf ou layouts comuns de lojas virtuais.

---

## Status

Projeto em desenvolvimento.

A estrutura atual representa a primeira base do site e pode ser expandida conforme novos produtos, páginas e funcionalidades forem desenvolvidos.

---

## MARASMO

Do lado parado do verão.

Santa Catarina, Brasil.

© 2026 MARASMO

```

Eu deixaria esse README como a **documentação inicial do projeto**. Conforme você for adicionando carrinho, páginas de produto, banco de dados ou alguma API, dá para ir atualizando a seção de tecnologias e a estrutura sem precisar reescrever tudo.
```
