"use strict";
// Toggle Nav bar
function toggleMenu(){
    const menu=document.querySelector('.menu-links');
    const icon=document.querySelector('.hamburger-icon');
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Animations

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const observerOptions = {
        threshold: 0.25
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                switch (entry.target.id) {
                    case 'profile':
                        entry.target.classList.add('fade-in-profile');
                        break;
                    case 'about':
                        entry.target.classList.add('fade-in-about');
                        break;
                    case 'skills':
                        entry.target.classList.add('fade-in-skills');
                        break;
                    case 'projects':
                        entry.target.classList.add('fade-in-projects');
                        break;
                    case 'contact':
                        entry.target.classList.add('fade-in-contact');
                        break;
                    default:
                        entry.target.classList.add('fade-in');
                }
            } else {
                entry.target.classList.remove('fade-in', 'fade-in-profile', 'fade-in-about', 'fade-in-skills', 'fade-in-projects', 'fade-in-contact');
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});


