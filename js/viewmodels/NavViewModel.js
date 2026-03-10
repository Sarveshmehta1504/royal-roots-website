// js/viewmodels/NavViewModel.js

export class NavViewModel {
  constructor() {
    this.state = {
      isMobileMenuOpen: false,
      isScrolled: false,
      activeRoute: window.location.pathname
    };
    this.listeners = [];
  }

  subscribe(listener) {
    this.listeners.push(listener);
    listener(this.state);
  }

  notify() {
    this.listeners.forEach(listener => listener(this.state));
  }

  toggleMobileMenu() {
    this.state.isMobileMenuOpen = !this.state.isMobileMenuOpen;
    this.notify();
  }

  setMobileMenuOpen(isOpen) {
    if (this.state.isMobileMenuOpen !== isOpen) {
      this.state.isMobileMenuOpen = isOpen;
      this.notify();
    }
  }

  setScrolled(isScrolled) {
    if (this.state.isScrolled !== isScrolled) {
      this.state.isScrolled = isScrolled;
      this.notify();
    }
  }

  setActiveRoute(route) {
    if (this.state.activeRoute !== route) {
      this.state.activeRoute = route;
      this.notify();
    }
  }
}
