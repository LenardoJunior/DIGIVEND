// Seleciona o botão e o sidebar
const menuToggle = document.querySelector(".menu-toggle");
const sidebar = document.querySelector(".sidebar");

// Adiciona evento de clique no botão
menuToggle.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});
