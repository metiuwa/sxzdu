document.addEventListener('scroll', function () {
    const scrollPos = window.scrollY;
    const heroSection = document.querySelector('.hero-section');

    if (scrollPos > 50) {
        heroSection.style.opacity = 0.8;
    } else {
        heroSection.style.opacity = 1;
    }
});

// Yavaşça aşağı kaydırma fonksiyonu
function smoothScroll(target) {
    const targetElement = document.querySelector(target);
    const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 800; // Kaydırma süresi (ms)
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        window.scrollTo(0, startPosition + distance * progress);

        if (timeElapsed < duration) {
            requestAnimationFrame(animation);
        }
    }

    requestAnimationFrame(animation);
}

document.querySelector('.audereus').addEventListener('click', function () {
    smoothScroll('#music');
});


document.querySelector('.btn-primary').addEventListener('click', function () {
    smoothScroll('#music'); 
});

document.getElementById("mc-embedded-subscribe-form").addEventListener("submit", function(event) {
    var emailInput = document.getElementById("mce-EMAIL");
    var successMessage = document.getElementById("mce-success-response");
    
    if (!emailInput.value) {
        event.preventDefault();
        document.getElementById("mce-error-response").innerText = "Please enter an email address.";
    } else {
        event.preventDefault();
        successMessage.innerText = "Thank you for subscribing!";
        successMessage.style.display = "block";
        setTimeout(function() {
            successMessage.style.display = "none";
        }, 3000);
    }
});
