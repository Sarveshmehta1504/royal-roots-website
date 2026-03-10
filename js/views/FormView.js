// js/views/FormView.js

export class FormView {
  constructor(viewModel, containerEl) {
    this.viewModel = viewModel;
    this.container = containerEl;
    
    this.initRender();
    this.bindEvents();
    this.viewModel.subscribe(this.render.bind(this));
  }

  initRender() {
    this.container.innerHTML = `
      <form id="lead-form" class="lead-form" novalidate>
        
        <div class="form-group" id="group-name">
          <label class="form-label" for="lead-name">Name</label>
          <input type="text" id="lead-name" class="form-control" placeholder="Your Name" required>
          <span class="form-message" id="error-name"></span>
        </div>
        
        <div class="form-group" id="group-phone">
          <label class="form-label" for="lead-phone">Phone Number</label>
          <div class="form-phone-wrapper">
            <span class="form-phone-prefix">+91</span>
            <input type="tel" id="lead-phone" class="form-control" placeholder="98765 43210" required>
          </div>
          <span class="form-message" id="error-phone"></span>
        </div>
        
        <div class="form-group" id="group-email">
          <label class="form-label" for="lead-email">Email (Optional)</label>
          <input type="email" id="lead-email" class="form-control" placeholder="your@email.com">
        </div>

        <div class="form-group">
          <label class="form-label">I'm interested in</label>
          <div class="form-pills">
            <label class="form-pill-label">
              <input type="checkbox" value="plywood" class="interest-pill">
              <span class="form-pill-text">Plywood</span>
            </label>
            <label class="form-pill-label">
              <input type="checkbox" value="laminates" class="interest-pill">
              <span class="form-pill-text">Laminates</span>
            </label>
            <label class="form-pill-label">
              <input type="checkbox" value="acrylic" class="interest-pill">
              <span class="form-pill-text">Acrylic Sheets</span>
            </label>
            <label class="form-pill-label">
              <input type="checkbox" value="veneer" class="interest-pill">
              <span class="form-pill-text">Veneers</span>
            </label>
            <label class="form-pill-label">
              <input type="checkbox" value="louvers" class="interest-pill">
              <span class="form-pill-text">Louvers</span>
            </label>
          </div>
        </div>
        
        <div class="form-group">
          <label class="form-label" for="lead-message">Message</label>
          <textarea id="lead-message" class="form-control" placeholder="Any specific requirements?"></textarea>
        </div>
        
        <div id="general-error" class="form-message error mb-4" style="display: none;"></div>

        <button type="submit" id="btn-submit" class="btn btn-dark btn-full">Submit Inquiry</button>
      </form>
    `;

    // Cache elements
    this.form = document.getElementById('lead-form');
    this.nameInput = document.getElementById('lead-name');
    this.phoneInput = document.getElementById('lead-phone');
    this.emailInput = document.getElementById('lead-email');
    this.messageInput = document.getElementById('lead-message');
    this.interestPills = document.querySelectorAll('.interest-pill');
    this.submitBtn = document.getElementById('btn-submit');
    this.generalError = document.getElementById('general-error');
  }

  bindEvents() {
    this.nameInput.addEventListener('input', (e) => this.viewModel.updateField('name', e.target.value));
    this.phoneInput.addEventListener('input', (e) => this.viewModel.updateField('phone', e.target.value));
    this.emailInput.addEventListener('input', (e) => this.viewModel.updateField('email', e.target.value));
    this.messageInput.addEventListener('input', (e) => this.viewModel.updateField('message', e.target.value));

    this.interestPills.forEach(pill => {
      pill.addEventListener('change', (e) => {
        this.viewModel.toggleInterest(e.target.value);
      });
    });

    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.viewModel.submit();
    });
  }

  render(state) {
    if (state.isSuccess) {
      // Immediate DOM swap for success message (no animation)
      this.container.innerHTML = `
        <div class="card card-testimonial" style="text-align: center; border-left: none; padding: var(--spacing-8);">
          <div style="color: #28a745; margin-bottom: var(--spacing-4);">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm-1.999 14.413-3.713-3.705L7.7 11.292l2.299 2.295 5.294-5.294 1.414 1.414-6.706 6.706z"/>
            </svg>
          </div>
          <h3 style="margin-bottom: var(--spacing-2);">Thank You!</h3>
          <p style="color: var(--color-text-secondary);">Your inquiry has been submitted successfully. Our team will contact you shortly.</p>
        </div>
      `;
      return;
    }

    // Button states
    if (state.isSubmitting) {
      this.submitBtn.textContent = 'Submitting...';
      this.submitBtn.disabled = true;
    } else {
      this.submitBtn.textContent = 'Submit Inquiry';
      this.submitBtn.disabled = false;
    }

    // General Error
    if (state.generalError) {
      this.generalError.textContent = state.generalError;
      this.generalError.style.display = 'block';
    } else {
      this.generalError.style.display = 'none';
      this.generalError.textContent = '';
    }

    // Field Errors
    const updateFieldError = (fieldId, errorMsg) => {
      const groupEl = document.getElementById(`group-${fieldId}`);
      const errorEl = document.getElementById(`error-${fieldId}`);
      if (groupEl && errorEl) {
        if (errorMsg) {
          groupEl.classList.add('has-error');
          errorEl.textContent = errorMsg;
          errorEl.classList.add('error');
        } else {
          groupEl.classList.remove('has-error');
          errorEl.textContent = '';
          errorEl.classList.remove('error');
        }
      }
    };

    updateFieldError('name', state.errors.name);
    updateFieldError('phone', state.errors.phone);
  }
}
