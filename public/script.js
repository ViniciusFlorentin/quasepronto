// Rotating text functionality (replaces React RotatingText component)
function initRotatingText() {
    const texts = [
        "criadores de conteúdo",
        "grandes marcas", 
        "criatividade e resultado",
        "influência e estratégia",
        "conteúdo e audiência",
    ];

    const rotatingTextElement = document.getElementById('rotating-text');
    
    if (!rotatingTextElement) return;

    let currentIndex = 0;

    function updateText() {
        rotatingTextElement.textContent = texts[currentIndex];
        currentIndex = (currentIndex + 1) % texts.length;
    }

    // Start the rotation
    setInterval(updateText, 2000);
}

// Carousel functionality for agency cards
function initCarousel() {
    const carouselContainer = document.getElementById('carousel-container');
    const leftButton = document.getElementById('carousel-left');
    const rightButton = document.getElementById('carousel-right');

    if (!carouselContainer || !leftButton || !rightButton) return;

    const scrollAmount = 516; // Width of one card plus gap

    leftButton.addEventListener('click', () => {
        carouselContainer.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });

    rightButton.addEventListener('click', () => {
        carouselContainer.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });
}

// Mobile menu functionality (for future implementation)
function initMobileMenu() {
    // This can be expanded later if a mobile menu is needed
    // For now, the navigation is hidden on mobile as per the original design
}

// Smooth scroll for anchor links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Button interaction effects
function initButtonEffects() {
    // Add click effects to buttons
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', function(e) {
            // Add ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.height, rect.width);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                background-color: rgba(255, 255, 255, 0.3);
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

// Add CSS for ripple animation
function addRippleCSS() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Form handling (for quote requests)
function initFormHandling() {
    // Handle quote request buttons
    const quoteButtons = document.querySelectorAll('button');
    
    quoteButtons.forEach(button => {
        if (button.textContent.includes('Solicitar orçamento') || 
            button.textContent.includes('Agende uma call')) {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                // Here you would typically open a contact form modal or redirect to a contact page
                alert('Funcionalidade de contato será implementada em breve!');
            });
        }
    });
}

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initRotatingText();
    initCarousel();
    initMobileMenu();
    initSmoothScroll();
    initButtonEffects();
    addRippleCSS();
    initFormHandling();
    
    // Add loading animation fadeout
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.3s ease-in-out';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Handle window resize for responsive behavior
window.addEventListener('resize', function() {
    // Adjust carousel behavior on window resize if needed
    // This ensures the carousel works properly on different screen sizes
});

// Add intersection observer for scroll animations (optional enhancement)
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe sections for scroll animations
    document.querySelectorAll('section').forEach((section, index) => {
        if (index > 0) { // Skip the hero section
            section.style.opacity = '0';
            section.style.transform = 'translateY(20px)';
            section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
            observer.observe(section);
        }
    });
}

// Call scroll animations after DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(initScrollAnimations, 500);
});
