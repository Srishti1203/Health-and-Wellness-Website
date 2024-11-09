// Smooth Scrolling Effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animate Elements on Scroll
const animatedElements = document.querySelectorAll('.animate-on-scroll');
const animateOnScroll = () => {
    const windowHeight = window.innerHeight;
    animatedElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            element.classList.add('fade-in');
        } else {
            element.classList.remove('fade-in');
        }
    });
};
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Dynamic Button Hover Effect
const buttons = document.querySelectorAll('.cta-button, .signup-button');
buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.2)';
        button.style.transition = 'transform 0.3s ease';
    });
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
    });
});

// Add a Typing Effect to the Hero Text
const heroText = document.querySelector('.hero-text h1');
const text = heroText.textContent;
heroText.textContent = '';
let index = 0;
const typeText = () => {
    if (index < text.length) {
        heroText.textContent += text.charAt(index);
        index++;
        setTimeout(typeText, 100); // Adjust typing speed here
    }
};
window.addEventListener('load', typeText);

// Reveal Elements on Load
window.addEventListener('load', () => {
    document.querySelectorAll('.reveal-on-load').forEach(element => {
        element.classList.add('fade-in');
    });
});

// Carousel Functionality
let currentSlide = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

const showSlide = (index) => {
    items.forEach((item, idx) => {
        item.classList.remove('active');
        if (idx === index) {
            item.classList.add('active');
        }
    });
};

const changeSlide = (direction) => {
    currentSlide = (currentSlide + direction + totalItems) % totalItems;
    showSlide(currentSlide);
};

document.querySelector('.prev').addEventListener('click', () => changeSlide(-1));
document.querySelector('.next').addEventListener('click', () => changeSlide(1));

document.addEventListener('DOMContentLoaded', () => showSlide(currentSlide));

// Fade In Animation Class
const styles = document.createElement('style');
styles.innerHTML = `
    .fade-in {
        opacity: 1;
        transition: opacity 1s ease-in-out;
    }
    .animate-on-scroll, .reveal-on-load {
        opacity: 0;
    }
`;
document.head.appendChild(styles);
