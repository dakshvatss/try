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

// Add this to your try.js file or in a script tag at the end of your HTML
document.addEventListener('DOMContentLoaded', function() {
    const langToggle = document.getElementById('langToggle');
    let currentLang = 'english'; // Default language
    
    langToggle.addEventListener('click', function() {
        if (currentLang === 'english') {
            currentLang = 'kannada';
            langToggle.classList.remove('english');
            langToggle.classList.add('kannada');
            // Here you would add code to change website text to Kannada
            // translateToKannada();
        } else {
            currentLang = 'english';
            langToggle.classList.remove('kannada');
            langToggle.classList.add('english');
            // Here you would add code to change website text to English
            // translateToEnglish();
        }
    });
    
    // Initialize with English as active
    langToggle.classList.add('english');
});

// Note: You'll need to implement the actual translation functions
// translateToKannada() and translateToEnglish() based on your requirements
    // Simple tab functionality
    document.addEventListener('DOMContentLoaded', function() {
        const tabButtons = document.querySelectorAll('.tab-button');
        const classCards = document.querySelectorAll('.class-card');
        
        tabButtons.forEach((button, index) => {
          button.addEventListener('click', () => {
            // Update active tab
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Show appropriate cards
            classCards.forEach(card => {
              card.style.display = 'none';
            });
            
            if (index === 0) { // Online Classes
              classCards[0].style.display = 'flex';
              classCards[1].style.display = 'flex';
              classCards[2].style.display = 'flex';
            } else { // In-Person Classes
              classCards[3].style.display = 'flex';
              classCards[4].style.display = 'flex';
              classCards[5].style.display = 'flex';
            }
          });
        });
      });

      