document.addEventListener("DOMContentLoaded", function () {
  const toggles = document.querySelectorAll(".has-submenu > .toggle");

  // Accordion behavior: only one submenu open per level
  toggles.forEach(toggle => {
    toggle.addEventListener("click", function () {
      const parent = this.parentElement;
      const siblingSubmenus = parent.parentElement.querySelectorAll(":scope > .has-submenu");

      siblingSubmenus.forEach(sibling => {
        if (sibling !== parent) {
          sibling.classList.remove("open");
        }
      });

      parent.classList.toggle("open");
    });
  });

  // Auto-expand based on current page URL
  const currentPath = window.location.pathname;
  const links = document.querySelectorAll(".sidebar-list a");

  links.forEach(link => {
    const href = link.getAttribute("href");
    if (href && currentPath.includes(href)) {
      // Expand its parent menus
      let parent = link.closest(".has-submenu");
      while (parent) {
        parent.classList.add("open");
        parent = parent.parentElement.closest(".has-submenu");
      }
    }
  });
});
