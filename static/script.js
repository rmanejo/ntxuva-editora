document.addEventListener('DOMContentLoaded', function() {

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }

            // Fecha o menu mobile após o clique
            document.querySelector('nav').classList.remove('active');
            document.querySelector('.mobile-menu').classList.remove('active');
        });
    });

    // Scroll effect header
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Toggle menu
    const menuBtn = document.querySelector('.mobile-menu');
    const nav = document.querySelector('nav');
    menuBtn.addEventListener('click', () => {
        nav.classList.toggle('active');
        menuBtn.classList.toggle('active');
    });

    // Fecha o menu ao clicar em qualquer lugar fora dele
    document.addEventListener('click', (event) => {
        const isClickInsideNav = nav.contains(event.target);
        const isClickOnButton = menuBtn.contains(event.target);

        if (nav.classList.contains('active') && !isClickInsideNav && !isClickOnButton) {
            nav.classList.remove('active');
            menuBtn.classList.remove('active');
        }
    });

    // Dynamic Copyright Year
    document.getElementById('copyright-year').textContent = new Date().getFullYear();
});