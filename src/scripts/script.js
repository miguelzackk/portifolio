function toggleMenu() {
  const sideMenu = document.getElementById("sideMenu");
  const hamburger = document.querySelector(".hamburger");

  sideMenu.classList.toggle("active");
  hamburger.classList.toggle("active");
}
