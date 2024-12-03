function toggleMenu() {
    const sideMenu = document.getElementById("sideMenu");
    const hamburger = document.querySelector(".hamburger");

    // Ativa/desativa o menu
    sideMenu.classList.toggle("active");
    hamburger.classList.toggle("active");
  }
