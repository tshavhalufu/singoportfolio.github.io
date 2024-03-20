document.addEventListener("DOMContentLoaded", () => {
  let sections = document.querySelectorAll("section");
  let navbarLinks = document.querySelectorAll(
    ".navbar nav .linkListTitle li a"
  );

  window.onscroll = () => {
    sections.forEach((section) => {
      let top = window.scrollY;
      let offset = section.offsetTop - 100;
      let height = section.offsetHeight;
      let id = section.getAttribute("id");

      if (top >= offset && top < offset + height) {
        navbarLinks.forEach((link) => {
          link.classList.remove("active");
          document
            .querySelector(".navbar nav .linkListTitle li a#" + id + "Link")
            .classList.add("active");
        });
      }
    });
  };
});
