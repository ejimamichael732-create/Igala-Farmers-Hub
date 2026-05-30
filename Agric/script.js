// script.js for Igala Farmers Hub
// Vanilla JavaScript for interactive features

// Mobile hamburger menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking a link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
});

// Like button functionality
document.addEventListener('DOMContentLoaded', function() {
    const likeButtons = document.querySelectorAll('.like-btn');
    
    likeButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Toggle liked state
            this.classList.toggle('liked');
            
            // Find the like count element
            const countSpan = this.querySelector('.like-count');
            if (countSpan) {
                let count = parseInt(countSpan.textContent);
                if (isNaN(count)) {
                    count = 0;
                }
                
                if (this.classList.contains('liked')) {
                    countSpan.textContent = count + 1;
                    this.innerHTML = '<i class="fas fa-thumbs-up"></i> Liked';
                } else {
                    countSpan.textContent = Math.max(0, count - 1);
                    this.innerHTML = '<i class="fas fa-thumbs-up"></i> Like';
                }
            } else {
                // Fallback if no count span exists
                if (this.classList.contains('liked')) {
                    this.textContent = 'Liked';
                } else {
                    this.textContent = 'Like';
                }
            }
        });
    });
});

// Simple comment box show/hide
document.addEventListener('DOMContentLoaded', function() {
    const commentButtons = document.querySelectorAll('.comment-btn');
    
    commentButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Find the associated comment box
            const commentBox = this.parentElement.querySelector('.comment-box');
            if (commentBox) {
                // Toggle visibility
                if (commentBox.style.display === 'none' || commentBox.style.display === '') {
                    commentBox.style.display = 'block';
                    this.textContent = 'Hide Comment';
                } else {
                    commentBox.style.display = 'none';
                    this.textContent = 'Comment';
                }
            }
        });
    });
});

// Optional: Add smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80, // Offset for fixed header
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});