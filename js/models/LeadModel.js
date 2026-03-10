// js/models/LeadModel.js

export class LeadModel {
  constructor() {
    this.data = {
      name: '',
      phone: '',
      email: '',
      interests: [], // e.g. ['plywood', 'laminates']
      message: ''
    };
    this.errors = {};
  }

  updateField(field, value) {
    this.data[field] = value;
    if (this.errors[field]) {
      delete this.errors[field];
    }
  }

  toggleInterest(interest) {
    const index = this.data.interests.indexOf(interest);
    if (index > -1) {
      this.data.interests.splice(index, 1);
    } else {
      this.data.interests.push(interest);
    }
  }

  validate() {
    this.errors = {};
    let isValid = true;

    // Validate Name (at least 2 chars)
    if (!this.data.name || this.data.name.trim().length < 2) {
      this.errors.name = 'Name must be at least 2 characters.';
      isValid = false;
    }

    // Validate Phone (10 digit Indian number)
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!this.data.phone || !phoneRegex.test(this.data.phone.trim())) {
      this.errors.phone = 'Please enter a valid 10-digit mobile number.';
      isValid = false;
    }

    return isValid;
  }

  async submit() {
    if (!this.validate()) {
      return { success: false, errors: this.errors };
    }

    // Form submission to Formspree
    // Replace 'YOUR_FORMSPREE_CODE' with actual code when deploying
    try {
      const response = await fetch('https://formspree.io/f/xvgzgzyy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.data)
      });

      if (response.ok) {
        return { success: true };
      } else {
        return { success: false, message: 'There was a problem submitting your form.' };
      }
    } catch (error) {
      return { success: false, message: 'Network error occurred. Please try again later.' };
    }
  }
}
