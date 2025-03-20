
document.addEventListener("DOMContentLoaded", function () {
    const texts = [
        "Hi, I'm John Neil Aying",
        "A Bachelor's Degree Holder in Information Technology",
        "Passionate About Web Development & Innovation"
    ];
    
    let textIndex = 0;
    let charIndex = 0;
    const typingSpeed = 80;
    const delayBetweenTexts = 5000; // Pause before the next text
    const h2Element = document.getElementById("typing-text");

    function typeEffect() {
        if (charIndex < texts[textIndex].length) {
            h2Element.textContent += texts[textIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeEffect, typingSpeed);
        } else {
            setTimeout(eraseEffect, delayBetweenTexts);
        }
    }

    function eraseEffect() {
        if (charIndex > 0) {
            h2Element.textContent = texts[textIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(eraseEffect, typingSpeed / 2);
        } else {
            textIndex = (textIndex + 1) % texts.length; // Cycle through texts
            setTimeout(typeEffect, typingSpeed);
        }
    }

    typeEffect();
});
   
    document.addEventListener("DOMContentLoaded", function () {
        const scrollToTopBtn = document.getElementById("scrollToTop");

        window.addEventListener("scroll", function () {
            if (window.scrollY > 100) {
                scrollToTopBtn.style.display = "block"; // Show button when not at top
            } else {
                scrollToTopBtn.style.display = "none"; // Hide button when at the top
            }
        });

        scrollToTopBtn.addEventListener("click", function () {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    });

    document.addEventListener("DOMContentLoaded", function () {
        const cursorShadow = document.querySelector(".cursor-shadow");
    
        document.addEventListener("mousemove", (e) => {
            cursorShadow.style.left = `${e.clientX}px`;
            cursorShadow.style.top = `${e.clientY}px`;
        });
    });
    

 