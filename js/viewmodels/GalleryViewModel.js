// js/viewmodels/GalleryViewModel.js

import { GalleryModel } from '../models/GalleryModel.js';

export class GalleryViewModel {
  constructor() {
    this.model = new GalleryModel();
    this.allItems = this.model.getAllItems();
    this.state = {
      activeFilter: 'all',
      filteredItems: [...this.allItems],
      lightboxItem: null, // null if closed, or the item object if open
      lightboxIndex: -1
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

  setFilter(category) {
    if (this.state.activeFilter !== category) {
      this.state.activeFilter = category;
      if (category === 'all') {
        this.state.filteredItems = [...this.allItems];
      } else {
        this.state.filteredItems = this.allItems.filter(item => item.category === category);
      }
      // Reset lightbox if filtering changes while it's somehow open (edge case)
      this.state.lightboxItem = null;
      this.state.lightboxIndex = -1;
      this.notify();
    }
  }

  openLightbox(itemId) {
    const idx = this.state.filteredItems.findIndex(i => i.id === itemId);
    if (idx !== -1) {
      this.state.lightboxItem = this.state.filteredItems[idx];
      this.state.lightboxIndex = idx;
      this.notify();
    }
  }

  nextLightbox() {
    if (this.state.lightboxItem !== null && this.state.filteredItems.length > 0) {
      this.state.lightboxIndex = (this.state.lightboxIndex + 1) % this.state.filteredItems.length;
      this.state.lightboxItem = this.state.filteredItems[this.state.lightboxIndex];
      this.notify();
    }
  }

  prevLightbox() {
    if (this.state.lightboxItem !== null && this.state.filteredItems.length > 0) {
      this.state.lightboxIndex = (this.state.lightboxIndex - 1 + this.state.filteredItems.length) % this.state.filteredItems.length;
      this.state.lightboxItem = this.state.filteredItems[this.state.lightboxIndex];
      this.notify();
    }
  }

  closeLightbox() {
    if (this.state.lightboxItem !== null) {
      this.state.lightboxItem = null;
      this.state.lightboxIndex = -1;
      this.notify();
    }
  }
}
