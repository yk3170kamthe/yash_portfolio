// ================================
// LOADER (SMOOTH FADE OUT FIX)
// ================================

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    if (loader) {
        loader.style.opacity = "0";
        loader.style.transition = "0.6s ease";

        setTimeout(() => {
            loader.style.display = "none";
        }, 600);
    }
});


// ================================
// TYPING ANIMATION (SMOOTH + FIXED)
// ================================

const words = [
    "AI & ML Student",
    "Web Developer",
    "Python Programmer",
    "Future AI Engineer"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const typing = document.querySelector(".typing");
    if (!typing) return;

    const currentWord = words[wordIndex];

    if (isDeleting) {
        typing.textContent = currentWord.substring(0, charIndex--);
    } else {
        typing.textContent = currentWord.substring(0, charIndex++);
    }

    let speed = isDeleting ? 60 : 120;

    if (!isDeleting && charIndex === currentWord.length) {
        speed = 1200;
        isDeleting = true;
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        speed = 300;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();


// ================================
// SMOOTH SCROLL (SAFE VERSION)
// ================================

document.querySelectorAll("nav a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});


// ================================
// ACTIVE NAVIGATION (FIXED + SAFE)
// ================================

window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav ul li a");

    let scrollPos = window.scrollY + 160;

    sections.forEach(section => {
        const id = section.getAttribute("id");
        const offsetTop = section.offsetTop;
        const offsetHeight = section.offsetHeight;

        const link = document.querySelector(`nav a[href="#${id}"]`);

        if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            navLinks.forEach(a => a.classList.remove("active"));
            if (link) link.classList.add("active");
        }
    });
});


// ================================
// SCROLL TO TOP BUTTON (CLEAN)
// ================================

const topBtn = document.createElement("button");
topBtn.innerHTML = "↑";
topBtn.id = "topBtn";
document.body.appendChild(topBtn);

// styling kept same (you can move to CSS later)
topBtn.style.cssText = `
position:fixed;
bottom:25px;
right:25px;
width:50px;
height:50px;
border:none;
border-radius:50%;
background:linear-gradient(90deg,#d4af37,#ffdf70);
color:#000;
font-size:20px;
cursor:pointer;
display:none;
box-shadow:0 0 20px rgba(212,175,55,0.6);
z-index:999;
transition:0.3s;
`;

window.addEventListener("scroll", () => {
    topBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


// ================================
// HERO IMAGE ANIMATION (SMOOTH FIX)
// ================================

const heroImage = document.querySelector(".hero-image img");

if (heroImage) {
    heroImage.addEventListener("mouseenter", () => {
        heroImage.style.transform = "scale(1.08) rotate(2deg)";
        heroImage.style.transition = "0.4s ease";
    });

    heroImage.addEventListener("mouseleave", () => {
        heroImage.style.transform = "scale(1) rotate(0deg)";
        heroImage.style.transition = "0.4s ease";
    });
}