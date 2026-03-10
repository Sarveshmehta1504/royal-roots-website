// js/views/GalleryView.js

export class GalleryView {
  constructor(viewModel) {
    this.viewModel = viewModel;
    
    // Bind to DOM elements
    this.filtersContainer = document.getElementById('gallery-filters');
    this.countContainer = document.getElementById('gallery-count');
    this.grid = document.getElementById('gallery-grid');
    this.lightboxContainer = document.getElementById('lightbox-container');
    
    this.bindEvents();
    this.viewModel.subscribe(this.render.bind(this));
  }

  bindEvents() {
    // Filter click delegation
    if (this.filtersContainer) {
      this.filtersContainer.addEventListener('click', (e) => {
        const btn = e.target.closest('.filter-btn');
        if (btn) {
          this.viewModel.setFilter(btn.dataset.filter);
        }
      });
    }

    // Grid click delegation
    if (this.grid) {
      this.grid.addEventListener('click', (e) => {
        const tile = e.target.closest('.gallery-tile');
        if (tile) {
          this.viewModel.openLightbox(parseInt(tile.dataset.id));
        }
      });
    }

    // Lightbox events
    if (this.lightboxContainer) {
      this.lightboxContainer.addEventListener('click', (e) => {
        // Close if click outside panel or on close button
        if (e.target.id === 'lightbox-overlay' || e.target.closest('#lightbox-close')) {
          this.viewModel.closeLightbox();
        }
        
        // Navigation clicks
        if (e.target.closest('#lightbox-prev')) {
          this.viewModel.prevLightbox();
        }
        if (e.target.closest('#lightbox-next')) {
          this.viewModel.nextLightbox();
        }
      });

      // Keyboard navigation
      document.addEventListener('keydown', (e) => {
        if (!this.viewModel.state.lightboxItem) return;
        
        if (e.key === 'Escape') this.viewModel.closeLightbox();
        if (e.key === 'ArrowLeft') this.viewModel.prevLightbox();
        if (e.key === 'ArrowRight') this.viewModel.nextLightbox();
      });

      // Touch swipe (basic implementation)
      let touchStartX = 0;
      this.lightboxContainer.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
      }, {passive: true});
      this.lightboxContainer.addEventListener('touchend', e => {
        let touchEndX = e.changedTouches[0].screenX;
        if (touchEndX < touchStartX - 50) this.viewModel.nextLightbox();
        if (touchEndX > touchStartX + 50) this.viewModel.prevLightbox();
      }, {passive: true});
    }
  }

  render(state) {
    // 1. Update Filters
    if (this.filtersContainer) {
      const buttons = this.filtersContainer.querySelectorAll('.filter-btn');
      buttons.forEach(btn => {
        if (btn.dataset.filter === state.activeFilter) {
          btn.classList.add('active', 'btn-dark');
          btn.classList.remove('btn-outline'); // Assuming pill styling uses these
        } else {
          btn.classList.remove('active', 'btn-dark');
          btn.classList.add('btn-outline');
        }
      });
    }

    // 2. Update Count
    if (this.countContainer) {
      this.countContainer.textContent = `Showing ${state.filteredItems.length} Projects`;
    }

    // 3. Render Grid with fade out of non-matching
    if (this.grid && this.grid.style.opacity !== '0') {
      this.grid.style.opacity = 0;
      setTimeout(() => {
        this.grid.innerHTML = state.filteredItems.map(item => `
          <div class="gallery-tile" data-id="${item.id}">
            <img src="${item.image}" alt="${item.name}" loading="lazy" class="tile-image">
            <div class="tile-overlay">
              <div class="tile-text">
                <h3 class="tile-name">${item.name}</h3>
                <p class="tile-location">${item.location}</p>
                <p class="tile-products">${item.products}</p>
              </div>
              <div class="tile-arrow">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </div>
            </div>
          </div>
        `).join('');
        this.grid.style.opacity = 1;
      }, 200);
    }

    // 4. Render Lightbox
    if (this.lightboxContainer) {
      if (state.lightboxItem) {
        const item = state.lightboxItem;
        this.lightboxContainer.innerHTML = `
          <div id="lightbox-overlay" class="lightbox-overlay">
            <div class="lightbox-wrapper">
              
              <button id="lightbox-close" class="lightbox-close" aria-label="Close lightbox">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
              
              <button id="lightbox-prev" class="lightbox-nav lightbox-prev" aria-label="Previous image">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
              </button>

              <button id="lightbox-next" class="lightbox-nav lightbox-next" aria-label="Next image">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
              </button>

              <div class="lightbox-split">
                <div class="lightbox-left">
                  <img src="${item.image}" alt="${item.name}" class="lightbox-image">
                </div>
                <div class="lightbox-right">
                  <div class="lightbox-badge">${item.categoryLabel}</div>
                  <h3 class="lightbox-title">${item.name}</h3>
                  <p class="lightbox-location">${item.location}</p>
                  
                  <div class="lightbox-products">
                    <p class="products-label">Products Used:</p>
                    <ul class="products-list">
                      ${item.products.split(',').map(p => `<li>${p.trim()}</li>`).join('')}
                    </ul>
                  </div>
                  
                  <p class="lightbox-desc">This premium project utilizes Royal Roots high-quality materials to deliver a stunning and durable finish. Our products are selected by top interior designers for their unmatched reliability.</p>
                  
                  <a href="/contact.html" class="btn btn-gold w-100" style="margin-top: auto; display: block; text-align: center;">Interested in a similar project?</a>
                </div>
              </div>
            </div>
          </div>
        `;
        document.body.style.overflow = 'hidden';
      } else {
        this.lightboxContainer.innerHTML = '';
        document.body.style.overflow = '';
      }
    }
  }
}
