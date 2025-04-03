function onToggleMenu(e) {
  const menuList = document.querySelector(".menulist");
  e.src = e.src.includes("menu.svg") ? "images/close.svg" : "images/menu.svg";
  menuList.classList.toggle("open");
}
