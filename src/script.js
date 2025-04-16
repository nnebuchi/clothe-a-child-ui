document.addEventListener("DOMContentLoaded", function () {
  const hero = document.getElementById("hero");
  const heroLeft = document.getElementById("heroLeft");
  const heroRight = document.getElementById("heroRight");
  const navLinks = document.querySelectorAll(".nav-link");

  function updateNavColor() {
    const heroMidpoint = hero.offsetWidth / 2;

    navLinks.forEach((link) => {
      const underline = link.querySelector(".underline-indicator");
      const linkRect = link.getBoundingClientRect();
      const linkCenter = linkRect.left + linkRect.width / 2;
      const isOnBlueSide = linkCenter > heroMidpoint;

      // Remove existing active styling first
      link.classList.remove("nav-active");

      // Check if this is the current page
      const isCurrentPage =
        window.location.pathname === new URL(link.href).pathname;

      if (isOnBlueSide) {
        // Blue background
        link.style.color = isCurrentPage ? "white" : "white";
        underline.classList.remove("bg-blue");
        underline.classList.add("bg-white");

        link.onmouseenter = () => (link.style.color = "white");
        link.onmouseleave = () =>
          (link.style.color = isCurrentPage ? "white" : "white");
        link.onfocus = () => (link.style.color = "white");

        if (isCurrentPage) {
          link.classList.add("nav-active");
          underline.classList.add("scale-x-100");
        }
      } else {
        // White background
        link.style.color = isCurrentPage
          ? "var(--color-blue)"
          : "var(--color-text)";
        underline.classList.remove("bg-white");
        underline.classList.add("bg-blue");

        link.onmouseenter = () => (link.style.color = "var(--color-blue)");
        link.onmouseleave = () =>
          (link.style.color = isCurrentPage
            ? "var(--color-blue)"
            : "var(--color-text)");
        link.onfocus = () => (link.style.color = "var(--color-blue)");

        if (isCurrentPage) {
          link.classList.add("nav-active");
          underline.classList.add("scale-x-100");
        }
      }
    });
  }

  updateNavColor();

  window.addEventListener("resize", updateNavColor);
});

// window.addEventListener("scroll", function () {
//   const header = document.querySelector("header");
//   const offset = window.pageYOffset;
//   const blurAmount = Math.min(8, offset / 20);
//   header.style.background = `linear-gradient(to right, white 50%, var(--color-blue) 50%)`;
//   header.style.backdropFilter = `blur(${blurAmount}px)`;
// });

// mobilemenu
// Get the menu button and the menu itself
const menuBtn = document.getElementById("menuBtn");
const menu = document.querySelector("menu");
const closeBtn = document.getElementById("closeBtn");

// Add an event listener to the menu button to toggle the menu's visibility
menuBtn.addEventListener("click", () => {
  if (
    menu.classList?.contains("animate-exit") ||
    menu.classList?.contains("hidden")
  ) {
    menu.classList?.remove("animate-exit");
    menu.classList?.toggle("hidden");
    menu.classList?.toggle("animate-entrance");
  } else {
    menu.classList?.toggle("hidden");
  }
});

// Add an event listener to the close button to toggle the menu's visibility
closeBtn.addEventListener("click", () => {
  if (menu.classList?.contains("animate-entrance")) {
    menu.classList?.remove("animate-entrance");
    menu.classList?.toggle("animate-exit");
    menu.classList?.toggle("hidden");
  } else {
    menu.classList?.toggle("hidden");
  }
});

// Tab
document.addEventListener("DOMContentLoaded", () => {
  const tabLists = document.querySelectorAll("[data-tabs-toggle]");

  tabLists.forEach((parentUl) => {
    const tabs = parentUl.querySelectorAll('[role="tab"]');
    const tabContentContainer = document.querySelector(
      parentUl.dataset.tabsToggle
    );
    const activeClasses = parentUl.dataset.tabsActiveClasses?.split(" ") || [];
    const inactiveClasses =
      parentUl.dataset.tabsInactiveClasses?.split(" ") || [];

    function activateTab(tab) {
      // Deactivate all tabs
      tabs.forEach((t) => {
        t.setAttribute("aria-selected", "false");
        t.classList.remove(...activeClasses, "active"); // 👈 REMOVE 'active' class
        t.classList.add(...inactiveClasses);
      });

      // Hide all panels
      tabContentContainer
        .querySelectorAll('[role="tabpanel"]')
        .forEach((panel) => {
          panel.classList.add("hidden");
        });

      // Activate the clicked tab
      tab.setAttribute("aria-selected", "true");
      tab.classList.remove(...inactiveClasses);
      tab.classList.add(...activeClasses, "active"); // 👈 ADD 'active' class here

      // Show the corresponding panel
      const targetPanel = document.querySelector(tab.dataset.tabsTarget);
      targetPanel.classList.remove("hidden");
    }

    // Set default active tab (first one)
    if (tabs.length > 0) {
      activateTab(tabs[0]);
    }

    // Add click events
    tabs.forEach((tab) => {
      tab.addEventListener("click", () => activateTab(tab));
    });
  });
});
