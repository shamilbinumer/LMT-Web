// document.addEventListener("scroll", function() {
//     var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//     var heroContent = document.querySelector(".hero-content");
//     heroContent.style.transform = "translateY(" + (scrollTop * -0.5) + "px)";
// });
document.addEventListener("scroll", function() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var bgImage = document.querySelector(".sec-section-bg-image");
    bgImage.style.backgroundPositionY = -(scrollTop * 0.2) + "px";
});