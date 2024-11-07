// Active Menu Script
const currentPage = window.location.pathname;
const menuLinks = document.querySelectorAll(".menu-link");

menuLinks.forEach((link) => {
  const href = link.getAttribute("href");

  if (href && currentPage.includes(href)) {
    link.parentElement.classList.add("active");

    const parentMenu = link.closest(".menu-accordion");
    if (parentMenu) {
      const accordionParent = parentMenu.closest(".menu-item");
      accordionParent.classList.add("show", "menu-item-accordion");
    }
  }
});
