document.addEventListener("DOMContentLoaded", function () {
    let images = document.querySelectorAll(".image-container img");
    let dots = document.querySelectorAll(".dot");
    let prevButton = document.getElementById("prev");
    let nextButton = document.getElementById("next");
    let currentIndex = 0;

    function showSlide(index) {
        images.forEach((img, i) => {
            img.classList.remove("active");
            dots[i].classList.remove("active");
            if (i === index) {
                img.classList.add("active");
                dots[i].classList.add("active");
            }
        });
        
        prevButton.classList.toggle("disabled", index === 0);
        nextButton.classList.toggle("disabled", index === images.length - 1);
    }

    function prevSlide() {
        if (currentIndex > 0) {
            currentIndex--;
            showSlide(currentIndex);
        }
    }

    function nextSlide() {
        if (currentIndex < images.length - 1) {
            currentIndex++;
            showSlide(currentIndex);
        }
    }

    prevButton.addEventListener("click", prevSlide);
    nextButton.addEventListener("click", nextSlide);

    dots.forEach(dot => {
        dot.addEventListener("click", function () {
            currentIndex = parseInt(this.getAttribute("data-index"));
            showSlide(currentIndex);
        });
    });

    showSlide(currentIndex);
});