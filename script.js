document.addEventListener("DOMContentLoaded", () => {
  const stageTabs = document.querySelectorAll(".stage-tab");
  const sectionMap = {
    research: document.getElementById("research"),
    define: document.getElementById("define"),
    ideate: document.getElementById("ideate"),
    structure: document.getElementById("structure"),
    design: document.getElementById("design"),
    test: document.getElementById("test"),
    output: document.getElementById("output")
  };

  // Scroll-based tab activation
  const activateButton = (sectionKey) => {
    stageTabs.forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.section === sectionKey);
    });
  };

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY + 200; // offset to trigger early
    let current = "research";

    for (const [key, section] of Object.entries(sectionMap)) {
      if (section && section.offsetTop <= scrollY) {
        current = key;
      }
    }

    activateButton(current);
  });

  // Scroll to section on click
  stageTabs.forEach(btn => {
    btn.addEventListener("click", () => {
      const sectionId = btn.dataset.section;
      const targetSection = document.getElementById(sectionId);
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 100,
          behavior: "smooth"
        });
      }
    });
  });

  // Set year in footer
  document.getElementById("year").textContent = new Date().getFullYear();
});

// Optional toggle content for collapsibles (if used)
function toggleContent(button) {
  const content = button.nextElementSibling;
  const isOpen = content.classList.toggle("open");
  button.textContent = isOpen ? "▲ Hide Details" : "▼ Show Details";
}
