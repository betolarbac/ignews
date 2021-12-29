<h1 align="center">
    <img alt="Ignite" title="Ignite" src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F2fbacb7a-e460-44a3-8fc5-e66f96dae148%2Fcover-reactjs.png?table=block&id=4571541e-7f8c-4799-bd19-1b6cfb53802c&spaceId=08f749ff-d06d-49a8-a488-9846e081b224&width=2000&userId=3f7c4943-ee12-45fb-8999-c4f226c86a4a&cache=v2" />
</h1>

<h2 align="center">Ig.news</h2>

</br>

<p align="center">
    <img widht="460" height="300" src=".github/ignews.gif" alt="">
</p>

<p align="center">
  <a href="#-tecnologias">Introdução</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Conteúdo Técnico</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologias">Observações</a>&nbsp;&nbsp;&nbsp;
</p>

## 📦 Introdução

Ig.news é uma plataforma que mostra as noticias sobre a linguagem de programação React.JS, onde é oferecido um plano de assinatura mensal
de $9.90 para ter acesso a todas as portagens.

## 📦 Tecnologias

- Next.Js
- NextAuth.js
- Sass
- Stripe
- FaunaDB
- Prismic

## 📦 Conteúdo Técnico

Falando sobre o conteúdo técnico, o sistema foi desenvolvido com Next.Js, utilizando NextAuth.js para autenticação dos usuários através de uma conta no Github, FaunaDB como banco de dados e Stripe para trabalhar com a forma de pagamento

## 📦 Observações

- Para rodar a aplicação é preciso ter uma conta no github
- É necessário configurar as variáveis de ambiente dentro de um arquivo na raiz do projeto `.env.local`
- É obrigatório ter a CLI do Stripe na maquina para poder, apos isso é só rodar o comando no terminal `stripe listen --forward-to localhost:3000/api/webhooks`
