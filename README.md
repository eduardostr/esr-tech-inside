# ESR Tech Inside — Landing Page

Projeto **React 18 + Vite + Tailwind CSS v3** com envio de formulário via **EmailJS**.

---

## Estrutura

```
esr-tech-inside/
├── index.html                  ← Entry point (Vite)
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
├── .env                        ← Credenciais EmailJS (não commitar!)
├── .gitignore
└── src/
    ├── main.jsx                ← Entry React
    ├── App.jsx
    ├── index.css               ← Tailwind + CSS variables (shadcn/ui)
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── Reveal.jsx          ← Hook de animação scroll
        ├── Sobre.jsx
        ├── Servicos.jsx
        ├── Processo.jsx
        ├── Nichos.jsx
        ├── CtaBanner.jsx
        ├── Contato.jsx         ← Formulário com EmailJS
        └── Footer.jsx
```

---

## Como rodar

```bash
# 1. Instalar dependências
npm install

# 2. Rodar em desenvolvimento
npm run dev

# 3. Build de produção
npm run build

# 4. Preview da build
npm run preview
```

---

## EmailJS — Configuração do Template

No painel do EmailJS (https://dashboard.emailjs.com), abra seu template `template_67iy27l` e configure as variáveis para corresponder aos campos do formulário:

| Variável no template | Campo do formulário |
|----------------------|---------------------|
| `{{from_name}}`      | Nome completo       |
| `{{from_email}}`     | E-mail do remetente |
| `{{subject}}`        | Assunto             |
| `{{message}}`        | Mensagem            |

Exemplo de corpo do template:
```
Novo contato via ESR Tech Inside!

Nome: {{from_name}}
E-mail: {{from_email}}
Assunto: {{subject}}

Mensagem:
{{message}}
```

---

## Variáveis de ambiente (.env)

```env
VITE_EMAILJS_SERVICE_ID=service_w3l7125
VITE_EMAILJS_TEMPLATE_ID=template_67iy27l
VITE_EMAILJS_PUBLIC_KEY=2bt5FwgF5BAMCZl-g
```

> ⚠️ O arquivo `.env` está no `.gitignore` — nunca o commite no repositório.

---

## Tecnologias

- [Vite 5](https://vitejs.dev/)
- [React 18](https://react.dev/)
- [Tailwind CSS 3](https://tailwindcss.com/)
- [EmailJS](https://www.emailjs.com/)
- Fontes: **Playfair Display** + **Outfit** (Google Fonts)
