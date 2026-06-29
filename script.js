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

const copyBtn = document.querySelector(".wifi-password-copy button");
const textToCopy = document.querySelector(".wifi-password-copy p");

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(textToCopy.textContent).then(() => {
    copyBtn.textContent = "Copied!";
    setTimeout(() => {
      copyBtn.textContent = "Copy";
    }, 2000);
  });
});
