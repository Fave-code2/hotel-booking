const menuOpen = document.querySelector(".menu-open");
const menuClose = document.querySelector(".close");
const menu = document.querySelector("aside");

menuOpen.addEventListener("click", () => {
  menu.classList.remove("hidden");
  document.documentElement.style.overflow = "hidden";
});

menuClose.addEventListener("click", () => {
  menu.classList.add("hidden");
  document.documentElement.style.overflow = "";
});
