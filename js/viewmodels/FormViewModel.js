// js/viewmodels/FormViewModel.js

import { LeadModel } from '../models/LeadModel.js';

export class FormViewModel {
  constructor() {
    this.model = new LeadModel();
    this.state = {
      isSubmitting: false,
      isSuccess: false,
      generalError: null,
      formData: this.model.data,
      errors: this.model.errors
    };
    this.listeners = [];
  }

  subscribe(listener) {
    this.listeners.push(listener);
    listener(this.state);
  }

  notify() {
    this.state.formData = this.model.data;
    this.state.errors = this.model.errors;
    this.listeners.forEach(listener => listener(this.state));
  }

  updateField(field, value) {
    this.model.updateField(field, value);
    this.notify();
  }

  toggleInterest(interest) {
    this.model.toggleInterest(interest);
    this.notify();
  }

  async submit() {
    this.state.isSubmitting = true;
    this.state.generalError = null;
    this.notify();

    const result = await this.model.submit();

    this.state.isSubmitting = false;
    
    if (result.success) {
      this.state.isSuccess = true;
    } else {
      if (result.message) {
        this.state.generalError = result.message;
      }
    }
    this.notify();
  }
}
