document.addEventListener('DOMContentLoaded', function () {
    const imageWrapper = document.querySelector('.you-will-like-right .image-wrapper');

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    window.addEventListener('scroll', function () {
        if (isInViewport(imageWrapper)) {
            imageWrapper.parentElement.classList.add('in-view');
        }
    });

    if (isInViewport(imageWrapper)) {
        imageWrapper.parentElement.classList.add('in-view');
    }
});


// document.addEventListener("DOMContentLoaded", () => {
//     const videoBg = document.getElementById('video-bg');
    
//     window.addEventListener('scroll', () => {
//         const scrollY = window.scrollY;
//         const videoHeight = videoBg.clientHeight;
        
//         const translateY = scrollY * 0.3;

//         if (translateY <= videoHeight) {
//             videoBg.style.transform = `translateY(-${translateY}px)`;
//         }
//     });
// });
window.addEventListener('scroll', function() {
    const aboutBannerVedio = document.getElementById('about-banner-vedio');
    const scrollPosition = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = scrollPosition / maxScroll;

    // Calculate new width from 90% to 100% based on scroll, but do not exceed 100%
    const newWidth = Math.min(90 + (scrollPercent * 90), 100);

    // Debugging: Log values to check if they are correct
    console.log('Scroll Position:', scrollPosition);
    console.log('Max Scroll:', maxScroll);
    console.log('Scroll Percent:', scrollPercent);
    console.log('New Width:', newWidth + '%');

    // Set new width
    aboutBannerVedio.style.width = newWidth + '%';
});

  window.addEventListener('scroll', function() {
        const videoBg = document.getElementById('video-bg');
        const scrollPosition = window.scrollY;
        const maxScroll = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = scrollPosition / maxScroll;

        // Calculate new scale from 1.5 (zoomed in) to 0 (zoomed out)
        const newScale = 1.5 - (scrollPercent * 1.5);

        // Ensure the scale does not go below 0
        const clampedScale = Math.max(newScale, 0);

        // Debugging: Log values to check if they are correct
        console.log('Scroll Position:', scrollPosition);
        console.log('Max Scroll:', maxScroll);
        console.log('Scroll Percent:', scrollPercent);
        console.log('New Scale:', clampedScale);

        // Set new scale
        videoBg.style.transform = `scale(${clampedScale})`;
    });

const headings = document.querySelectorAll('.dsgn-build-market-head h1');

  function changeColor() {
    const currentIndex = Array.from(headings).findIndex(heading => heading.classList.contains('gradient-text'));
    const nextIndex = (currentIndex + 1) % headings.length;

    headings.forEach(heading => heading.classList.remove('gradient-text')); 
    headings[nextIndex].classList.add('gradient-text'); 
  }

  headings[0].classList.add('gradient-text');

  setInterval(changeColor, 2000);