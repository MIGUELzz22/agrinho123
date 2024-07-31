// script.js

// Função para adicionar evento de clique ao botão "Conheça nossos produtos"
document.addEventListener("DOMContentLoaded", function() {
  const btnProdutos = document.querySelector("button");
  btnProdutos.addEventListener("click", function() {
    const produtosSection = document.querySelector("#produtos");
    produtosSection.scrollIntoView({ behavior: "smooth" });
  });
});

// Função para adicionar evento de envio ao formulário de contato
document.addEventListener("DOMContentLoaded", function() {
  const formContato = document.querySelector("form");
  formContato.addEventListener("submit", function(event) {
    event.preventDefault();
    const nome = document.querySelector("#nome").value;
    const email = document.querySelector("#email").value;
    const mensagem = document.querySelector("#mensagem").value;
    alert(`Obrigado pelo contato, ${nome}!`);
    // Aqui você pode adicionar a lógica para enviar o formulário para um servidor ou serviço de e-mail
  });
});

// Função para adicionar efeito de hover aos links do menu
document.addEventListener("DOMContentLoaded", function() {
  const links = document.querySelectorAll("nav a");
  links.forEach(function(link) {
    link.addEventListener("mouseover", function() {
      link.style.color = "#ccc";
    });
    link.addEventListener("mouseout", function() {
      link.style.color = "#fff";
    });
  });
});
