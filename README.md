# Portfólio — Natalia Lugão

Recriação do portfólio pessoal desenvolvido em **Angular 19**, com foco em boas práticas modernas do framework.

---

## Tecnologias utilizadas

- [Angular 19](https://angular.io/)
- TypeScript
- HTML5 & CSS3
- Font Awesome (ícones de redes sociais)
- Devicons (ícones de tecnologias)

---

## Estrutura de componentes

```
src/app/components/
├── navbar/       → Barra de navegação fixa com links para redes sociais
├── home/         → Apresentação com efeito de digitação animado
├── about/        → Sobre mim com foto e descrição
├── skills/       → Grade de habilidades técnicas
├── experience/   → Experiências profissionais e projetos com seleção dinâmica
└── footer/       → Rodapé com créditos
```

---

## Funcionalidades

- Efeito de digitação animado (typing effect) em cada seção
- Seleção dinâmica de projetos e experiências profissionais
- Layout totalmente responsivo para mobile e desktop
- Navbar fixa com links para YouTube, LinkedIn e GitHub
- Seções organizadas com scroll contínuo

---

## Como rodar o projeto

**Pré-requisitos:** Node.js e Angular CLI instalados.

```bash
# Clone o repositório
git clone https://github.com/seuusuario/portfolio.git

# Entre na pasta
cd portfolio

# Instale as dependências
npm install

# Rode o servidor de desenvolvimento
ng serve
```

Acesse em: [http://localhost:4200](http://localhost:4200)

---

## Dependências externas

```bash
# Ícones Font Awesome
npm install @fortawesome/fontawesome-free
```

No `styles.css`:
```css
@import '@fortawesome/fontawesome-free/css/all.min.css';
@import url('https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css');
```

---
