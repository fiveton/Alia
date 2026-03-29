<template>
  <div class="boutique">
    <div class="boutique-header">
      <div class="container">
        <p class="page-label">Our Collection</p>
        <h1>The Boutique</h1>
        <p class="page-sub">Thoughtfully curated pieces for your private joy.</p>
      </div>
    </div>

    <!-- Filters -->
    <div class="filters-bar">
      <div class="container">
        <div class="filters">
          <button
            v-for="f in filters"
            :key="f"
            class="filter-btn"
            :class="{ active: activeFilter === f }"
            @click="activeFilter = f"
          >{{ f }}</button>
        </div>
        <p class="product-count">{{ filteredProducts.length }} pieces</p>
      </div>
    </div>

    <!-- Products -->
    <div class="products-section">
      <div class="container">
        <div class="products-grid">
          <div
            v-for="product in filteredProducts"
            :key="product.id"
            class="product-card"
          >
            <div class="product-image">
              <img :src="product.image" :alt="product.name" loading="lazy" />
              <div class="product-actions">
                <button class="quick-add">Add to Bag</button>
              </div>
              <span v-if="product.badge" class="product-badge">{{ product.badge }}</span>
            </div>
            <div class="product-info">
              <p class="product-category">{{ product.category }}</p>
              <h3 class="product-name">{{ product.name }}</h3>
              <p class="product-price">${{ product.price }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Newsletter -->
    <section class="newsletter">
      <div class="container">
        <div class="newsletter-inner">
          <div class="newsletter-text">
            <h2>Letters from the Atelier</h2>
            <p>Stories from our atelier, new arrivals, and exclusive offers.</p>
          </div>
          <form class="newsletter-form" @submit.prevent>
            <input type="email" placeholder="Your email address" />
            <button type="submit" class="btn-primary">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const filters = ['All Products', 'Bras', 'Panties', 'Sets', 'Loungewear']
const activeFilter = ref('All Products')

const products = [
  {
    id: 1,
    name: 'Delicieux Lace Bralette',
    category: 'Bras',
    price: '79.90',
    badge: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1605763240000-7e93b172d754?w=600&q=80&fit=crop',
  },
  {
    id: 2,
    name: 'Sleeping Blue Baby',
    category: 'Loungewear',
    price: '59.90',
    badge: null,
    image: 'https://images.unsplash.com/photo-1603792907191-89e55f70099a?w=600&q=80&fit=crop',
  },
  {
    id: 3,
    name: 'Exclusive Embroidery Set',
    category: 'Sets',
    price: '119.90',
    badge: 'New',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=80&fit=crop',
  },
  {
    id: 4,
    name: 'Aurora Silk Set',
    category: 'Sets',
    price: '129.90',
    badge: null,
    image: 'https://images.unsplash.com/photo-1576188973526-0e5d7047b0cf?w=600&q=80&fit=crop',
  },
  {
    id: 5,
    name: 'Venetian Clip Bra',
    category: 'Bras',
    price: '89.90',
    badge: null,
    image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f43?w=600&q=80&fit=crop',
  },
  {
    id: 6,
    name: 'Wildflower Bodysuit',
    category: 'Sets',
    price: '109.90',
    badge: 'New',
    image: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=600&q=80&fit=crop',
  },
  {
    id: 7,
    name: 'Velvet Slip Panty',
    category: 'Panties',
    price: '39.90',
    badge: null,
    image: 'https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?w=600&q=80&fit=crop',
  },
  {
    id: 8,
    name: 'Clover Lounge Set',
    category: 'Loungewear',
    price: '149.90',
    badge: 'Limited',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&q=80&fit=crop',
  },
]

const filteredProducts = computed(() => {
  if (activeFilter.value === 'All Products') return products
  return products.filter(p => p.category === activeFilter.value)
})
</script>

<style scoped>
.boutique-header {
  padding: 160px 0 60px;
  text-align: center;
  background: var(--beige);
}

.page-label {
  font-size: 11px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--text-light);
  margin-bottom: 12px;
}

.boutique-header h1 {
  font-size: clamp(40px, 5vw, 64px);
  margin-bottom: 16px;
}

.page-sub {
  font-size: 15px;
  color: var(--text);
}

.filters-bar {
  background: var(--white);
  border-bottom: 1px solid var(--border);
  position: sticky;
  top: 72px;
  z-index: 10;
}

.filters-bar .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 56px;
}

.filters {
  display: flex;
  gap: 4px;
}

.filter-btn {
  background: none;
  border: none;
  padding: 8px 16px;
  font-size: 13px;
  color: var(--text);
  letter-spacing: 0.03em;
  transition: all 0.2s;
  border-radius: 2px;
}

.filter-btn:hover { color: var(--dark); background: var(--beige); }
.filter-btn.active {
  color: var(--dark);
  font-weight: 500;
  border-bottom: 2px solid var(--brown);
}

.product-count {
  font-size: 12px;
  color: var(--text-light);
}

.products-section {
  padding: 56px 0 80px;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 28px 24px;
}

.product-image {
  position: relative;
  overflow: hidden;
  background: var(--beige);
  aspect-ratio: 3/4;
  margin-bottom: 16px;
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.product-card:hover .product-image img { transform: scale(1.04); }

.product-actions {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  transform: translateY(100%);
  transition: transform 0.3s ease;
}

.product-card:hover .product-actions { transform: translateY(0); }

.quick-add {
  width: 100%;
  background: rgba(42,36,32,0.9);
  color: var(--white);
  border: none;
  padding: 14px;
  font-size: 12px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.product-badge {
  position: absolute;
  top: 12px;
  left: 12px;
  background: var(--brown);
  color: var(--white);
  font-size: 10px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 4px 10px;
}

.product-category {
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-light);
  margin-bottom: 4px;
}

.product-name {
  font-family: 'Playfair Display', serif;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 6px;
}

.product-price { font-size: 14px; color: var(--brown); }

/* Newsletter */
.newsletter {
  background: var(--beige);
  padding: 64px 0;
}

.newsletter-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 48px;
}

.newsletter-text h2 { font-size: 28px; margin-bottom: 8px; }
.newsletter-text p { font-size: 14px; color: var(--text); }

.newsletter-form {
  display: flex;
  flex-shrink: 0;
}

.newsletter-form input {
  width: 280px;
  padding: 13px 20px;
  border: 1px solid var(--border);
  border-right: none;
  font-family: 'DM Sans', sans-serif;
  font-size: 14px;
  background: var(--white);
  outline: none;
}

.newsletter-form input:focus { border-color: var(--brown); }

@media (max-width: 1024px) {
  .products-grid { grid-template-columns: repeat(3, 1fr); }
}

@media (max-width: 768px) {
  .products-grid { grid-template-columns: repeat(2, 1fr); }
  .newsletter-inner { flex-direction: column; align-items: flex-start; gap: 24px; }
  .newsletter-form { flex-direction: column; }
  .newsletter-form input { width: 100%; border-right: 1px solid var(--border); border-bottom: none; }
}
</style>
