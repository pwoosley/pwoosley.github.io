document.addEventListener("DOMContentLoaded", function() {
  // Handle collapsible buttons
  var collapsibles = document.querySelectorAll(".collapsible");
  collapsibles.forEach(function(button) {
    button.addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      content.classList.toggle("show");
    });
  });

  // Auto-expand the correct unit based on current page URL
  var currentPath = window.location.pathname;
  var sidebarLinks = document.querySelectorAll(".sidebar-list a");

  sidebarLinks.forEach(function(link) {
    if (link.getAttribute("href") && currentPath.includes(link.getAttribute("href"))) {
      // Find the closest collapsible section
      var collapsible = link.closest(".content-collapsible");
      if (collapsible) {
        collapsible.classList.add("show");
        var button = collapsible.previousElementSibling;
        if (button && button.classList.contains("collapsible")) {
          button.classList.add("active");
        }
      }
    }
  });
});

// Mobile toggle function
function toggleSidebar() {
  document.querySelector(".sidebar").classList.toggle("show-menu");
}
