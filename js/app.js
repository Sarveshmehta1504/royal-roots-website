// js/app.js

import { NavViewModel } from './viewmodels/NavViewModel.js';
import { NavView } from './views/NavView.js';
import { FormViewModel } from './viewmodels/FormViewModel.js';
import { FormView } from './views/FormView.js';
import { attachWhatsAppButton } from './components/whatsapp.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Navigation
  const navViewModel = new NavViewModel();
  const navView = new NavView(navViewModel);
  
  // 2. Setup Passive Scroll Listener to update Nav scrolled state
  window.addEventListener('scroll', () => {
    let currentScroll = window.scrollY || document.documentElement.scrollTop;
    // Pass scrolled state to VM (true if > 80px)
    navViewModel.setScrolled(currentScroll > 80);
  }, { passive: true });
  
  // Initial check
  navViewModel.setScrolled((window.scrollY || document.documentElement.scrollTop) > 80);

  // 3. Initialize WhatsApp floating button
  attachWhatsAppButton();

  // 4. Initialize Lead Form if it exists on page
  const formElement = document.getElementById('lead-form-container');
  if (formElement) {
    const formViewModel = new FormViewModel();
    const formView = new FormView(formViewModel, formElement);
  }
});
