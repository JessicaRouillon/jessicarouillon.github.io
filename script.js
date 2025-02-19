document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function(event) {
            event.preventDefault();
            const sectionId = this.getAttribute("href").substring(1);
            document.getElementById(sectionId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Dynamic project data
    const projects = [
        { title: "Project 1", image: "project1.jpg", description: "Description of project 1", link: "#" },
        { title: "Project 2", image: "project2.jpg", description: "Description of project 2", link: "#" },
        { title: "Project 3", image: "project3.jpg", description: "Description of project 3", link: "#" }
    ];

    const projectContainer = document.querySelector(".project-list");
    
    projects.forEach(project => {
        const projectCard = document.createElement("div");
        projectCard.classList.add("project-card");
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">View Project</a>
        `;
        projectContainer.appendChild(projectCard);
    });

    // Contact form submission (dummy example)
    const contactForm = document.querySelector("#contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", (event) => {
            event.preventDefault();
            alert("Thank you for reaching out! I'll get back to you soon.");
            contactForm.reset();
        });
    }
});