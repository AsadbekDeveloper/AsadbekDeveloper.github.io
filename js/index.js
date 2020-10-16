const menuToggler = document.getElementById("menu-toggle");
const menuLinks = document.querySelectorAll(".home__links");

const toggleHandler = () => {
  menuToggler.classList.toggle("open");
  document.body.classList.toggle("nav-active");
};

menuToggler.addEventListener("click", toggleHandler);

menuLinks.forEach((link) => {
  link.addEventListener("click", toggleHandler);
});

// Home links hover effect

document.querySelectorAll(".home__links").forEach((elem) => {
  elem.onmouseenter = elem.onmouseleave = (e) => {
    const tolerance = 10;

    const left = 0;
    const right = elem.clientWidth;

    let x = e.pageX - elem.offsetLeft;

    if (x - tolerance < left) x = left;
    if (x + tolerance > right) x = right;

    elem.style.setProperty("--x", `${x}px`);
  };
});
