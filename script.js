// Smooth scroll reveal effect (can expand later)
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
  
    const reveal = (entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
      }
    };
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(reveal);
    }, { threshold: 0.2 });
  
    sections.forEach(section => {
      section.style.opacity = 0;
      section.style.transform = "translateY(50px)";
      section.style.transition = "all 0.6s ease-out";
      observer.observe(section);
    });
  });