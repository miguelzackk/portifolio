const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.redirect-header');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('open');  // Mostra ou esconde o menu
  hamburger.classList.toggle('active');  // Altera o estilo do botão
});
