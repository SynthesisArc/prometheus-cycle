// ============================================
// PROMETHEUS CYCLE - Apple/IBM Design System
// Version 2.0 - December 2025
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================
    // SMOOTH SCROLLING FOR ANCHOR LINKS
    // ============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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
    
    // ============================================
    // NAVBAR SCROLL EFFECT (Apple-style)
    // ============================================
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // ============================================
    // INTERSECTION OBSERVER FOR FADE-IN ANIMATIONS
    // ============================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe all animatable elements
    document.querySelectorAll('.feature-card, .example-card, .phase-card, .fade-in').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
    
    // ============================================
    // STATS COUNTER ANIMATION
    // ============================================
    const stats = document.querySelectorAll('.stat-number');
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                entry.target.classList.add('counted');
                animateValue(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    stats.forEach(stat => statsObserver.observe(stat));
    
    function animateValue(element) {
        const target = element.textContent.trim();
        const isPercent = target.includes('%');
        const numericValue = parseInt(target.replace(/[^0-9,]/g, '').replace(',', ''));
        
        if (isNaN(numericValue) || numericValue === 0) return;
        
        const duration = 1500;
        const steps = 60;
        const increment = numericValue / steps;
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= numericValue) {
                if (numericValue >= 1000) {
                    element.textContent = numericValue.toLocaleString();
                } else {
                    element.textContent = numericValue + (isPercent ? '%' : '');
                }
                clearInterval(timer);
            } else {
                const displayValue = Math.floor(current);
                if (displayValue >= 1000) {
                    element.textContent = displayValue.toLocaleString();
                } else {
                    element.textContent = displayValue + (isPercent ? '%' : '');
                }
            }
        }, duration / steps);
    }
    
    // ============================================
    // COPY CODE BLOCKS ON CLICK
    // ============================================
    document.querySelectorAll('code').forEach(code => {
        code.style.cursor = 'pointer';
        code.title = 'Click to copy';
        
        code.addEventListener('click', function() {
            const text = this.textContent;
            navigator.clipboard.writeText(text).then(() => {
                const originalText = this.textContent;
                const originalColor = this.style.color;
                
                this.textContent = 'Copied!';
                this.style.color = '#00D4FF';
                
                setTimeout(() => {
                    this.textContent = originalText;
                    this.style.color = originalColor;
                }, 1500);
            }).catch(err => {
                console.error('Failed to copy:', err);
            });
        });
    });
    
    // ============================================
    // MOBILE MENU TOGGLE (if needed)
    // ============================================
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuToggle && navLinks) {
        mobileMenuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            this.classList.toggle('active');
        });
    }
    
    // ============================================
    // CONSOLE BRANDING
    // ============================================
    console.log('%cPROMETHEUS CYCLE', 'color: #00D4FF; font-size: 24px; font-weight: 700; font-family: -apple-system, BlinkMacSystemFont, sans-serif;');
    console.log('%cProfessional Prompt Engineering Framework', 'color: #6B7280; font-size: 14px; font-family: -apple-system, BlinkMacSystemFont, sans-serif;');
    console.log('%cBuilt by SynthesisArc | https://synthesisarc.com', 'color: #9CA3AF; font-size: 12px; font-family: -apple-system, BlinkMacSystemFont, sans-serif;');
});
