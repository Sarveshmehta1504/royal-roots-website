// js/views/GalleryView.js

export class GalleryView {
  constructor(viewModel, containerEl) {
    this.viewModel = viewModel;
    this.container = containerEl;
    
    // Create base structure
    this.container.innerHTML = `
      <div class="gallery-filters mb-8 flex flex-wrap gap-4 justify-center">
        <button class="btn btn-outline" data-filter="all">All Projects</button>
        <button class="btn btn-outline" data-filter="kitchen">Kitchens</button>
        <button class="btn btn-outline" data-filter="bedroom">Bedrooms</button>
        <button class="btn btn-outline" data-filter="commercial">Commercial</button>
        <button class="btn btn-outline" data-filter="wardrobe">Wardrobes</button>
        <button class="btn btn-outline" data-filter="living">Living Rooms</button>
      </div>
      <div id="gallery-grid" class="grid grid-3" style="transition: opacity var(--transition-normal);">
        <!-- Items injected here -->
      </div>
      
      <!-- Lightbox structural elements injected on demand or prepended to body -->
    `;
    
    this.filters = this.container.querySelectorAll('.gallery-filters .btn');
    this.grid = document.getElementById('gallery-grid');
    
    this.initLightbox();
    this.bindEvents();
    this.viewModel.subscribe(this.render.bind(this));
  }

  initLightbox() {
    this.lightboxEl = document.createElement('div');
    this.lightboxEl.style.cssText = `
      position: fixed; top: 0; left: 0; right: 0; bottom: 0;
      background: rgba(28,28,28,0.95); z-index: var(--z-modal);
      display: flex; align-items: center; justify-content: center;
      opacity: 0; visibility: hidden; transition: all var(--transition-normal);
      padding: var(--spacing-4);
    `;
    
    this.lightboxEl.innerHTML = `
      <div class="lightbox-content" style="position: relative; max-width: 900px; width: 100%; background: var(--color-white); border-radius: var(--radius-md); overflow: hidden; display: flex; flex-direction: column;">
        <button id="lightbox-close" style="position: absolute; top: 10px; right: 10px; background: rgba(0,0,0,0.5); color: white; border: none; width: 40px; height: 40px; border-radius: 50%; font-size: 24px; cursor: pointer; display: flex; align-items: center; justify-content: center; z-index: 2;">&times;</button>
        <img id="lightbox-img" src="" alt="" style="width: 100%; max-height: 70vh; object-fit: contain; background: #000;">
        <div style="padding: var(--spacing-6);">
          <h3 id="lightbox-title" style="margin-bottom: var(--spacing-2);"></h3>
          <p id="lightbox-location" style="color: var(--color-text-secondary); margin-bottom: var(--spacing-4);"><svg style="width:16px; height:16px; display:inline-block; vertical-align:middle; margin-right:4px;" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg><span id="lightbox-loc-text"></span></p>
          <div style="background: var(--color-background-warm); padding: var(--spacing-3); border-left: 3px solid var(--color-gold); font-size: var(--font-size-sm);">
            <strong>Products Used:</strong> <span id="lightbox-products"></span>
          </div>
        </div>
      </div>
    `;
    
    document.body.appendChild(this.lightboxEl);
    this.lightboxCloseBtn = document.getElementById('lightbox-close');
    this.lightboxImg = document.getElementById('lightbox-img');
    this.lightboxTitle = document.getElementById('lightbox-title');
    this.lightboxLocation = document.getElementById('lightbox-loc-text');
    this.lightboxProducts = document.getElementById('lightbox-products');
  }

  bindEvents() {
    this.filters.forEach(btn => {
      btn.addEventListener('click', (e) => {
        this.viewModel.setFilter(e.target.dataset.filter);
      });
    });

    this.grid.addEventListener('click', (e) => {
      const card = e.target.closest('.card-article');
      if (card) {
        this.viewModel.openLightbox(parseInt(card.dataset.id));
      }
    });

    // Lightbox Close Events
    this.lightboxCloseBtn.addEventListener('click', () => {
      this.viewModel.closeLightbox();
    });

    this.lightboxEl.addEventListener('click', (e) => {
      if (e.target === this.lightboxEl) {
        this.viewModel.closeLightbox();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.viewModel.closeLightbox();
      }
    });
  }

  render(state) {
    // 1. Update Filters
    this.filters.forEach(btn => {
      if (btn.dataset.filter === state.activeFilter) {
        btn.classList.remove('btn-outline');
        btn.classList.add('btn-dark');
      } else {
        btn.classList.add('btn-outline');
        btn.classList.remove('btn-dark');
      }
    });

    // 2. Render Grid with rough fade effect
    // To achieve fade out of non-matching, we can just rebuild the grid
    // For a real app, you might use a library like Isotope for smooth sorting
    this.grid.style.opacity = 0;
    setTimeout(() => {
      this.grid.innerHTML = state.filteredItems.map(item => `
        <div class="card card-article" data-id="${item.id}" style="cursor: pointer;">
          <img src="${item.image}" alt="${item.name}" class="card-article-image" loading="lazy">
          <div class="card-article-body">
            <h4 style="font-size: var(--font-size-lg); margin-bottom: var(--spacing-2);">${item.name}</h4>
            <p style="color: var(--color-text-secondary); font-size: var(--font-size-sm);">${item.location}</p>
          </div>
        </div>
      `).join('');
      this.grid.style.opacity = 1;
    }, 150);

    // 3. Render Lightbox
    if (state.lightboxItem) {
      const item = state.lightboxItem;
      this.lightboxImg.src = item.image;
      this.lightboxImg.alt = item.name;
      this.lightboxTitle.textContent = item.name;
      this.lightboxLocation.textContent = item.location;
      this.lightboxProducts.textContent = item.products;
      
      this.lightboxEl.style.visibility = 'visible';
      this.lightboxEl.style.opacity = '1';
      document.body.style.overflow = 'hidden';
    } else {
      this.lightboxEl.style.opacity = '0';
      setTimeout(() => {
        this.lightboxEl.style.visibility = 'hidden';
        this.lightboxImg.src = '';
      }, 300);
      document.body.style.overflow = '';
    }
  }
}
