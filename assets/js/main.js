/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute("id");

    const navMenuLink = document.querySelector(
      ".nav__menu a[href*=" + sectionId + "]"
    );
    if (navMenuLink) {
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navMenuLink.classList.add("active");
      } else {
        navMenuLink.classList.remove("active");
      }
    }
  });
}
window.addEventListener("scroll", scrollActive);

var typed = new Typed("#typed", {
  stringsElement: "#typed-strings",
  typeSpeed: 30,
  backSpeed: 30,
  loop: true,
});

var typed = new Typed("#type", {
  stringsElement: "#typed-string",
  typeSpeed: 30,
  backSpeed: 30,
  loop: true,
});

var typed = new Typed("#types", {
  stringsElement: "#type-string",
  typeSpeed: 30,
  backSpeed: 30,
  loop: true,
});

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2000,
  delay: 200,
  // reset: true
});

sr.reveal(".home__data, .about__img, .skills__subtitle, .skills__text", {});
sr.reveal(".home__img, .about__subtitle, .about__text, .skills__img", {
  delay: 400,
});
sr.reveal(".home__social-icon", { interval: 200 });
sr.reveal(".skills__data, .work__img, .contact__input", { interval: 200 });
