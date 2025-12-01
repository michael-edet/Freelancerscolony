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
  
  // Content Tabs
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
  
  // Blog Read More Buttons
  const readMoreBtns = document.querySelectorAll('.read-more');
  readMoreBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const blogTitle = this.closest('.blog-card').querySelector('h3').textContent;
      alert(`Now reading: "${blogTitle}"`);
    });
  });
  
  // Video Play Buttons
  const videoPlayBtns = document.querySelectorAll('.video-card .btn');
  videoPlayBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const videoTitle = this.closest('.video-card').querySelector('h3').textContent;
      alert(`Now playing: "${videoTitle}"`);
    });
  });
  
  // Podcast Play Buttons
  const podcastPlayBtns = document.querySelectorAll('.podcast-actions .btn:first-child');
  podcastPlayBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const podcastTitle = this.closest('.podcast-card').querySelector('h3').textContent;
      alert(`Now playing: "${podcastTitle}"`);
    });
  });
  
  // Podcast Download Buttons
  const podcastDownloadBtns = document.querySelectorAll('.podcast-actions .btn-outline');
  podcastDownloadBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const podcastTitle = this.closest('.podcast-card').querySelector('h3').textContent;
      alert(`Downloading: "${podcastTitle}"`);
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