  //scroll
window.addEventListener('scroll', function() {
    let scrollPosition = window.scrollY;
    let parallaxSpeed = 0.2; 
    document.querySelector('.hero-content').style.transform = `translateY(-${scrollPosition * parallaxSpeed}px)`;
});
