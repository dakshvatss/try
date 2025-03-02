document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;
    const items = document.querySelectorAll(".item");
    const totalItems = items.length;
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    const paginationContainer = document.querySelector(".pagination");
    
    // Create pagination dots
    for (let i = 0; i < totalItems; i++) {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        if (i === 0) dot.classList.add("active");
        dot.addEventListener("click", () => {
            goToSlide(i);
        });
        paginationContainer.appendChild(dot);
    }
    
    const dots = document.querySelectorAll(".dot");
    
    function updateSlider() {
        // Update slides
        items.forEach((item) => {
            item.classList.remove("active");
        });
        items[currentIndex].classList.add("active");
        
        // Update dots
        dots.forEach((dot) => {
            dot.classList.remove("active");
        });
        dots[currentIndex].classList.add("active");
    }
    
    function goToSlide(index) {
        currentIndex = index;
        updateSlider();
    }
    
    function prevSlide() {
        currentIndex = (currentIndex === 0) ? totalItems - 1 : currentIndex - 1;
        updateSlider();
    }
    
    function nextSlide() {
        currentIndex = (currentIndex === totalItems - 1) ? 0 : currentIndex + 1;
        updateSlider();
    }
    
    prevButton.addEventListener("click", function (e) {
        e.preventDefault();
        prevSlide();
    });
    
    nextButton.addEventListener("click", function (e) {
        e.preventDefault();
        nextSlide();
    });
    
    // Add keyboard navigation
    document.addEventListener("keydown", function(e) {
        if (e.key === "ArrowLeft") {
            prevSlide();
        } else if (e.key === "ArrowRight") {
            nextSlide();
        }
    });
    
    // Auto-slide every 5 seconds
    setInterval(() => {
        nextSlide();
    }, 5000);
});