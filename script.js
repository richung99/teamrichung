document.addEventListener("wheel", (event) => {
    event.preventDefault();
    const sections = document.querySelectorAll("header, section, footer");
    const direction = event.deltaY > 0 ? 1 : -1;
    const currentSection = Math.round(window.scrollY / window.innerHeight);
    const nextSectionIndex = Math.min(Math.max(currentSection + direction, 0), sections.length - 1);

    sections[nextSectionIndex].scrollIntoView({ behavior: "smooth" });
});

document.querySelectorAll(".scroll-link").forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
    });
});

// // Sidebar toggle functionality
// const sidebarToggle = document.getElementById("sidebar-toggle");
// const sidebar = document.getElementById("sidebar");

// sidebarToggle.addEventListener("click", () => {
//     sidebar.classList.toggle("collapsed");
// });

// JavaScript to toggle the collapse functionality
function toggleCollapse() {
  var sidebar = document.getElementById("sidebar");
  var button = document.getElementById("sidebar-toggle");
  
  // Toggle the collapsed class for sidebar and button
  sidebar.classList.toggle('collapsed');
  button.classList.toggle('collapsed');
  
  // Change button icon when sidebar is collapsed or expanded
  // if (sidebar.classList.contains('collapsed')) {
  //   button.innerHTML = "→";  // Change button icon to expand
  // } else {
  //   button.innerHTML = "←";  // Change button icon back to collapse
  // }
}

// Floating contact section toggle functionality
const contactToggle = document.getElementById("contact-toggle");
const contactSection = document.getElementById("contact");

contactToggle.addEventListener("click", () => {
    contactSection.classList.toggle("collapsed");
});