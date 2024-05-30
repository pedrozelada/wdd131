document.addEventListener("DOMContentLoaded", function() {
    
    if (localStorage.getItem("reviewCount")) {
        let reviewCount = parseInt(localStorage.getItem("reviewCount"));
        reviewCount++;
        localStorage.setItem("reviewCount", reviewCount);
    } else {
        localStorage.setItem("reviewCount", 1);
    }

    const reviewCountDisplay = document.getElementById("reviewCountDisplay");
    reviewCountDisplay.textContent = localStorage.getItem("reviewCount");
});