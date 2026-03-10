// js/views/NavView.js

export class NavView {
  constructor(viewModel) {
    this.viewModel = viewModel;
    
    // DOM Elements
    this.header = document.getElementById('site-header');
    this.mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    this.mobileMenu = document.getElementById('mobile-menu');
    this.navLinks = document.querySelectorAll('.nav-link');
    this.mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    
    // Bind Events
    this.bindEvents();
    
    // Subscribe to ViewModel
    this.viewModel.subscribe(this.render.bind(this));
  }

  bindEvents() {
    if (this.mobileMenuToggle) {
      this.mobileMenuToggle.addEventListener('click', () => {
        this.viewModel.toggleMobileMenu();
      });
    }

    // Close mobile menu when clicking a link
    this.mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        this.viewModel.setMobileMenuOpen(false);
      });
    });
  }

  render(state) {
    // 1. Scrolled State
    if (this.header) {
      if (state.isScrolled) {
        this.header.classList.add('scrolled');
      } else {
        this.header.classList.remove('scrolled');
      }
    }

    // 2. Mobile Menu State
    if (this.mobileMenuToggle && this.mobileMenu) {
      if (state.isMobileMenuOpen) {
        this.mobileMenuToggle.classList.add('is-active');
        this.mobileMenuToggle.setAttribute('aria-expanded', 'true');
        this.mobileMenu.classList.add('is-active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
      } else {
        this.mobileMenuToggle.classList.remove('is-active');
        this.mobileMenuToggle.setAttribute('aria-expanded', 'false');
        this.mobileMenu.classList.remove('is-active');
        document.body.style.overflow = '';
      }
    }

    // 3. Active Route Mapping
    const updateActiveLink = (links) => {
      links.forEach(link => {
        // Simple check, in a real SPA this would use a router
        if (link.getAttribute('href') === state.activeRoute) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    };

    updateActiveLink(this.navLinks);
    updateActiveLink(this.mobileNavLinks);
  }
}
