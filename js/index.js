
//youwill like  
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


