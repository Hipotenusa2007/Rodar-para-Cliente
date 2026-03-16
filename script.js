const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const trigger = window.innerHeight * 0.88;

  revealElements.forEach((element) => {
    const top = element.getBoundingClientRect().top;

    if (top < trigger) {
      element.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

const btnPedido = document.getElementById("btnPedido");

if (btnPedido) {
  btnPedido.addEventListener("click", () => {
    const nome = document.getElementById("nome").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const pedido = document.getElementById("pedido").value.trim();
    const endereco = document.getElementById("endereco").value.trim();
    const observacoes = document.getElementById("observacoes").value.trim();

    const mensagem =
      `Olá, quero fazer um pedido.%0A%0A` +
      `Nome: ${nome}%0A` +
      `Telefone: ${telefone}%0A` +
      `Pedido: ${pedido}%0A` +
      `Endereço: ${endereco}%0A` +
      `Observações: ${observacoes}`;

    const numero = "5591993975707";
    const link = `https://wa.me/${numero}?text=${mensagem}`;

    window.open(link, "_blank");
  });
}
