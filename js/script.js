document.addEventListener('DOMContentLoaded', function() {
  // Mobile Menu Toggle
  const menuIcon = document.getElementById('menuIcon');
  const mobileMenu = document.getElementById('mobileMenu');
  
  menuIcon.addEventListener('click', function() {
    mobileMenu.classList.toggle('active');
  });
  
  // Close mobile menu when clicking on a link
  const mobileLinks = mobileMenu.querySelectorAll('a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', function() {
      mobileMenu.classList.remove('active');
    });
  });
  
  // Header scroll effect
  const header = document.querySelector('.fixed-header');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
  
  // Education Hub Tabs
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');
  
  tabBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      // Remove active class from all buttons and contents
      tabBtns.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));
      
      // Add active class to clicked button
      this.classList.add('active');
      
      // Show corresponding content
      const tabId = this.getAttribute('data-tab');
      document.getElementById(tabId).classList.add('active');
    });
  });
  
  // Content Creation Tabs
  const contentTabBtns = document.querySelectorAll('.content-tab-btn');
  const contentTabContents = document.querySelectorAll('.content-tab-content');
  
  contentTabBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      // Remove active class from all buttons and contents
      contentTabBtns.forEach(btn => btn.classList.remove('active'));
      contentTabContents.forEach(content => content.classList.remove('active'));
      
      // Add active class to clicked button
      this.classList.add('active');
      
      // Show corresponding content
      const tabId = this.getAttribute('data-content-tab');
      document.getElementById(tabId).classList.add('active');
    });
  });
  
  // Smooth Scrolling for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Set current year in footer
  document.getElementById('year').textContent = new Date().getFullYear();
  
  // Newsletter Form Submission
  const newsletterForm = document.querySelector('.newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const emailInput = this.querySelector('input[type="email"]');
      alert('Thank you for subscribing to our newsletter!');
      emailInput.value = '';
    });
  }
  
  // Contact Form Submission
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thank you for your message! We will get back to you soon.');
      this.reset();
    });
  }
  
  // Course Enrollment Buttons
  const enrollBtns = document.querySelectorAll('.course-card .btn');
  enrollBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const courseTitle = this.closest('.course-card').querySelector('h3').textContent;
      alert(`You have enrolled in "${courseTitle}". Check your email for access details.`);
    });
  });
  
  // Product Add to Cart Buttons
  const addToCartBtns = document.querySelectorAll('.product-card .btn');
  addToCartBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const productName = this.closest('.product-card').querySelector('h3').textContent;
      alert(`"${productName}" has been added to your cart.`);
    });
  });
  
  // Community Join Button
  const joinBtn = document.querySelector('.community-info .btn');
  if (joinBtn) {
    joinBtn.addEventListener('click', function(e) {
      e.preventDefault();
      alert('Welcome to Freelancer\'s Colony community! You will receive an email with access instructions.');
    });
  }
});
// Add this to your JavaScript file if you want any specific functionality
document.querySelectorAll('.extra-services .btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        if (this.getAttribute('href') === '#contact') {
            e.preventDefault();
            const serviceName = this.closest('.service-card').querySelector('h3').textContent;
            document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
            
            // Optional: Auto-fill the contact form subject
            const subjectInput = document.querySelector('.contact-form input[type="text"]');
            if (subjectInput) {
                subjectInput.value = `Inquiry about ${serviceName} service`;
            }
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
  // Mobile Menu Toggle
  const menuIcon = document.getElementById('menuIcon');
  const mobileMenu = document.getElementById('mobileMenu');
  
  menuIcon.addEventListener('click', function() {
    mobileMenu.classList.toggle('active');
  });
  
  // Close mobile menu when clicking on a link
  const mobileLinks = mobileMenu.querySelectorAll('a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', function() {
      mobileMenu.classList.remove('active');
    });
  });
  
  // Header scroll effect
  const header = document.querySelector('.fixed-header');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
  
  // Education Hub Tabs
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');
  
  tabBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      // Remove active class from all buttons and contents
      tabBtns.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));
      
      // Add active class to clicked button
      this.classList.add('active');
      
      // Show corresponding content
      const tabId = this.getAttribute('data-tab');
      document.getElementById(tabId).classList.add('active');
    });
  });
  
  // Smooth Scrolling for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Set current year in footer
  document.getElementById('year').textContent = new Date().getFullYear();
  
  // Course Enrollment Buttons
  const enrollBtns = document.querySelectorAll('.course-card .btn, .workshop-card .btn');
  enrollBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const itemTitle = this.closest('.course-card, .workshop-card').querySelector('h3').textContent;
      alert(`You have enrolled in "${itemTitle}". Check your email for access details.`);
    });
  });
  
  // Tutorial Play Buttons
  const playBtns = document.querySelectorAll('.tutorial-card .btn');
  playBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const tutorialTitle = this.closest('.tutorial-card').querySelector('h3').textContent;
      alert(`Now playing: "${tutorialTitle}"`);
    });
  });
  
  // Newsletter Form Submission
  const newsletterForm = document.querySelector('.newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const emailInput = this.querySelector('input[type="email"]');
      alert('Thank you for subscribing to our newsletter!');
      emailInput.value = '';
    });
  }
  
  // Search Box Submission
  const searchBox = document.querySelector('.search-box');
  if (searchBox) {
    searchBox.addEventListener('submit', function(e) {
      e.preventDefault();
      const searchInput = this.querySelector('input[type="text"]');
      alert(`Searching for: "${searchInput.value}"`);
      searchInput.value = '';
    });
  }
});