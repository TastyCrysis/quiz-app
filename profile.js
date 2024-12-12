const themeToggle = document.querySelector('[data-js="theme-switch"]');

themeToggle.checked = true;

themeToggle.addEventListener("change", function () {
  if (this.checked) {
    document.documentElement.removeAttribute("data-theme");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
});
