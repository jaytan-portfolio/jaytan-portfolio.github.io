// SCROLL REVEAL ANIMATION
function revealOnScroll() {
    const reveals = document.querySelectorAll(".reveal");
    const revealItems = document.querySelectorAll(".reveal-item");

    const windowHeight = window.innerHeight;

    reveals.forEach(section => {
        const elementTop = section.getBoundingClientRect().top;
        const elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
            section.classList.add("active");
        }
    });

    revealItems.forEach((item, index) => {
        const elementTop = item.getBoundingClientRect().top;
        const elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
            setTimeout(() => {
                item.classList.add("active");
            }, index * 120); // stagger delay
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();