// Form Validation
const contactForm = document.querySelector(".contact-form");
const formAlert = document.querySelector("#formAlert");

contactForm.addEventListener("submit", (e) => {
    // Validate inputs
    const firstName = document.querySelector("#firstName").value;
    const lastName = document.querySelector("#lastName").value;
    const email = document.querySelector("#email").value;
    const message = document.querySelector("#message").value;

    if (!firstName || !lastName || !email || !message) {
        e.preventDefault();
        formAlert.style.opacity = 1;
    }
});

// Close Alert Handler
const closeIcon = document.querySelector(".close-icon");

closeIcon.addEventListener("click", () => {
    formAlert.style.opacity = 0;
});

// GSAP Load In Animation
gsap.from(".navbar", { opacity: 0, duration: 0.75, y: -50 });
gsap.from(".anim1", {
    opacity: 0,
    duration: 1,
    stagger: 0.25,
    y: -30,
    delay: 0.5,
    top: 0,
});

// Button Scroll Animations
document.querySelector("#projects").addEventListener("click", () => {
    gsap.to(window, { duration: 1, scrollTo: "#projects" });
});

document.querySelector("#skills").addEventListener("click", () => {
    gsap.to(window, { duration: 1, scrollTo: "#skills" });
});

document.querySelector("#about").addEventListener("click", () => {
    gsap.to(window, { duration: 1, scrollTo: "#about" });
});

document.querySelector("#contact").addEventListener("click", () => {
    gsap.to(window, { duration: 1, scrollTo: "#contact" });
});

// Nav link animations
document.querySelectorAll(".nav-link").forEach((link, index) => {
    link.addEventListener("click", () => {
        gsap.to(window, {
            duration: (index + 1) * 0.75,
            scrollTo: link.getAttribute("data-location"),
        });
    });
});

// GSAP Scroll Triggered Animations
const fadeAnimation = (element) => {
    gsap.from(element, {
        duration: 1,
        y: -50,
        opacity: 0,
        scrollTrigger: element,
        top: 0,
    });
};

document.querySelectorAll(".fade").forEach(fadeAnimation);
document.querySelectorAll(".section-end-btn").forEach(fadeAnimation);
document.querySelectorAll(".project").forEach((el) => {
    gsap.from(el, {
        duration: 1,
        x: -50,
        opacity: 0,
        scrollTrigger: el,
    });
});

gsap.from(".skill-group", {
    scrollTrigger: ".skills-grid",
    duration: 0.75,
    x: -50,
    opacity: 0,
    stagger: 0.3,
});

gsap.from(".about-img", {
    scrollTrigger: ".about-img",
    duration: 1,
    x: -50,
    opacity: 0,
});

gsap.from("#about .content", {
    scrollTrigger: ".about-img",
    duration: 1,
    x: 50,
    opacity: 0,
});

// Input Animation
const inputAnim = {
    scrollTrigger: ".contact-form",
    duration: 1,
    x: -50,
    y: -50,
    opacity: 0,
    stagger: 0.3,
};

gsap.from(".input", inputAnim);
gsap.from("label", inputAnim);
gsap.from(".contact-form .btn", inputAnim);
