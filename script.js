// JavaScript for interactive animations and particle background

// Initialize particles.js background effect
particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 80,  // Reduced particle number for better performance
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#00ff99"
        },
        "shape": {
            "type": "circle"
        },
        "opacity": {
            "value": 0.5,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 1,
                "opacity_min": 0.1
            }
        },
        "size": {
            "value": 3,
            "random": true
        },
        "move": {
            "enable": true,
            "speed": 1,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out"
        }
    },
    "interactivity": {
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            }
        }
    }
});

// Scroll-based animation (optimized with requestAnimationFrame)
document.addEventListener("DOMContentLoaded", function () {
    const shortTermGoals = document.getElementById("short-term-goals");
    const longTermGoals = document.getElementById("long-term-goals");

    let isScrolling = false;

    // Debounced scroll function to improve performance
    window.addEventListener("scroll", function () {
        if (!isScrolling) {
            window.requestAnimationFrame(function () {
                checkScrollPosition();
                isScrolling = false;
            });
            isScrolling = true;
        }
    });

    function checkScrollPosition() {
        let scrollPosition = window.scrollY;

        // Short term goals fade-in effect
        if (scrollPosition > shortTermGoals.offsetTop - window.innerHeight + 100) {
            shortTermGoals.querySelector(".content p").style.opacity = 1;
            shortTermGoals.querySelector(".content p").style.animation = "fadeIn 2s ease-out forwards";
        }

        // Long term goals fade-in effect
        if (scrollPosition > longTermGoals.offsetTop - window.innerHeight + 100) {
            longTermGoals.querySelector(".content p").style.opacity = 1;
            longTermGoals.querySelector(".content p").style.animation = "fadeIn 2s ease-out forwards";
        }
    }

    // Social share buttons functionality
    document.getElementById("twitter-share").addEventListener("click", function () {
        window.open("https://twitter.com/intent/tweet?text=梦想宣言&url=" + window.location.href, "_blank");
        alert('感谢分享！');
    });

    document.getElementById("facebook-share").addEventListener("click", function () {
        window.open("https://www.facebook.com/sharer/sharer.php?u=" + window.location.href, "_blank");
        alert('感谢分享！');
    });
});
