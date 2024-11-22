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
