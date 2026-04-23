let lastScrollTop = 0;

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let nav = document.querySelector('nav');

    if (scrollTop > lastScrollTop && scrollTop > 100) {
        // Scrolling down and not at the very top
        nav.classList.add('nav-hidden');
    } else {
        // Scrolling up or at the top
        nav.classList.remove('nav-hidden');
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
});