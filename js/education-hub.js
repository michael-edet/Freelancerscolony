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