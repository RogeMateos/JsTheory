document.addEventListener("DOMContentLoaded", () => {
  const content = document.getElementById("content");
  const links = document.querySelectorAll("nav a");
  const categories = document.querySelectorAll(".categories > li > h3");

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const section = e.target.getAttribute("data-section");
      loadContent(section);
    });
  });

  categories.forEach((category) => {
    category.addEventListener("click", () => {
      const subMenu = category.nextElementSibling;
      subMenu.style.display =
        subMenu.style.display === "block" ? "none" : "block";
    });
  });

  function loadContent(section) {
    fetch(`sections/${section}.html`)
      .then((response) => response.text())
      .then((html) => {
        content.innerHTML = html;
        Prism.highlightAll(); // Apply syntax highlighting
      })
      .catch((error) => {
        console.error("Error loading content:", error);
      });
  }
});
