
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
    
    document.addEventListener("DOMContentLoaded", function() {
        const badge = document.getElementById("verified-badge");
        const popup = document.getElementById("verified-popup");
    
        badge.addEventListener("click", function(event) {
            event.stopPropagation(); // Prevents immediate closing when clicking the badge
            popup.classList.toggle("active");
        });
    
        document.addEventListener("click", function(event) {
            if (!popup.contains(event.target) && event.target !== badge) {
                popup.classList.remove("active");
            }
        });
    });

    document.addEventListener("DOMContentLoaded", () => {
        const bg = document.querySelector(".animated-bg");
        const maxIcons = 3; // Limit the number of icons at a time
    
        setInterval(() => {
            if (bg.children.length < maxIcons) { // Check if within limit
                const icon = document.createElement("i");
                icon.className = "fas fa-code icon";
                Object.assign(icon.style, {
                    left: `${Math.random() * 100}vw`,
                    top: "100vh",
                    animationDuration: `${Math.random() * 3 + 3}s`
                });
                bg.appendChild(icon);
                setTimeout(() => icon.remove(), parseFloat(icon.style.animationDuration) * 1000);
            }
        }, 500);
    });
    
    
    
    
    

 