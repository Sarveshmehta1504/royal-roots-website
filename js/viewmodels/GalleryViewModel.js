// js/viewmodels/GalleryViewModel.js

import { GalleryModel } from '../models/GalleryModel.js';

export class GalleryViewModel {
  constructor() {
    this.model = new GalleryModel();
    this.allItems = this.model.getAllItems();
    this.state = {
      activeFilter: 'all',
      filteredItems: [...this.allItems],
      lightboxItem: null // null if closed, or the item object if open
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
      this.notify();
    }
  }

  openLightbox(itemId) {
    const item = this.allItems.find(i => i.id === itemId);
    if (item) {
      this.state.lightboxItem = item;
      this.notify();
    }
  }

  closeLightbox() {
    if (this.state.lightboxItem !== null) {
      this.state.lightboxItem = null;
      this.notify();
    }
  }
}
