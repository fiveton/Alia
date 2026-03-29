<template>
  <div class="home">
    <!-- Hero -->
    <section class="hero">
      <div class="hero-image">
        <img src="https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=1400&q=80&fit=crop" alt="Alia & Bra hero" />
        <div class="hero-overlay"></div>
      </div>
      <div class="hero-content">
        <p class="hero-label">New Collection</p>
        <h1>The Poetry<br />of <em>Intimacy</em></h1>
        <p class="hero-sub">Crafted for those who believe beauty begins within.</p>
        <RouterLink to="/boutique" class="btn-primary">Shop the Collection</RouterLink>
      </div>
    </section>

    <!-- Brand pillars -->
    <section class="pillars">
      <div class="container">
        <div class="pillars-grid">
          <div class="pillar">
            <div class="pillar-icon">♻</div>
            <h3>Sustainably Made</h3>
            <p>Crafted from organic cotton, mulberry silk, and recycled lace — gentle on your skin and the earth.</p>
          </div>
          <div class="pillar">
            <div class="pillar-icon">✦</div>
            <h3>Woven with Empathy</h3>
            <p>Every piece is designed to celebrate all bodies, with inclusive sizing from XS to 3X.</p>
          </div>
          <div class="pillar">
            <div class="pillar-icon">◎</div>
            <h3>Private Joy</h3>
            <p>Because how you feel underneath matters. Designed first for comfort, then for beauty.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured products -->
    <section class="featured">
      <div class="container">
        <div class="section-header">
          <h2>Featured Pieces</h2>
          <RouterLink to="/boutique" class="see-all">View All →</RouterLink>
        </div>
        <div class="products-grid">
          <div v-for="product in featured" :key="product.id" class="product-card">
            <div class="product-image">
              <img :src="product.image" :alt="product.name" loading="lazy" />
              <button class="quick-add">Add to Bag</button>
            </div>
            <div class="product-info">
              <p class="product-category">{{ product.category }}</p>
              <h3 class="product-name">{{ product.name }}</h3>
              <p class="product-price">${{ product.price }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Brand story teaser -->
    <section class="story-teaser">
      <div class="story-image">
        <img src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=900&q=80&fit=crop" alt="Atelier" />
      </div>
      <div class="story-content">
        <p class="story-label">Our Story</p>
        <h2>Woven with<br /><em>Empathy</em></h2>
        <p>Whether you need help with sizing, sustainability practices, or bespoke appointments, our atelier experts are here to assist you.</p>
        <RouterLink to="/about" class="btn-outline">Discover Our Story</RouterLink>
      </div>
    </section>

    <!-- Newsletter -->
    <section class="newsletter">
      <div class="container">
        <div class="newsletter-inner">
          <h2>Letters from the Atelier</h2>
          <p>Stories, new arrivals, and quiet moments — delivered to your inbox.</p>
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
const featured = [
  {
    id: 1,
    name: 'Delicieux Lace Bralette',
    category: 'Bras',
    price: '79.90',
    image: 'https://images.unsplash.com/photo-1605763240000-7e93b172d754?w=600&q=80&fit=crop',
  },
  {
    id: 2,
    name: 'Aurora Silk Set',
    category: 'Sets',
    price: '129.90',
    image: 'https://images.unsplash.com/photo-1576188973526-0e5d7047b0cf?w=600&q=80&fit=crop',
  },
  {
    id: 3,
    name: 'Sleeping Blue Baby',
    category: 'Loungewear',
    price: '59.90',
    image: 'https://images.unsplash.com/photo-1603792907191-89e55f70099a?w=600&q=80&fit=crop',
  },
  {
    id: 4,
    name: 'Exclusive Embroidery Set',
    category: 'Sets',
    price: '119.90',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=80&fit=crop',
  },
]
</script>

<style scoped>
/* Hero */
.hero {
  position: relative;
  height: 100vh;
  min-height: 600px;
  display: flex;
  align-items: center;
}

.hero-image {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.hero-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to right, rgba(42,36,32,0.65) 0%, rgba(42,36,32,0.1) 100%);
}

.hero-content {
  position: relative;
  z-index: 2;
  padding: 0 80px;
  max-width: 600px;
  padding-top: 72px;
}

.hero-label {
  font-size: 11px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.7);
  margin-bottom: 20px;
}

.hero-content h1 {
  font-size: clamp(48px, 6vw, 80px);
  color: var(--white);
  line-height: 1.05;
  margin-bottom: 20px;
}

.hero-content h1 em {
  font-style: italic;
  color: #E8C9A8;
}

.hero-sub {
  font-size: 16px;
  color: rgba(255,255,255,0.75);
  margin-bottom: 36px;
  font-weight: 300;
}

/* Pillars */
.pillars {
  padding: 80px 0;
  background: var(--beige);
}

.pillars-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 48px;
  text-align: center;
}

.pillar-icon {
  font-size: 24px;
  color: var(--brown);
  margin-bottom: 16px;
}

.pillar h3 {
  font-size: 18px;
  margin-bottom: 12px;
}

.pillar p {
  font-size: 14px;
  color: var(--text-light);
  line-height: 1.7;
}

/* Featured */
.featured {
  padding: 80px 0;
}

.section-header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: 40px;
}

.section-header h2 { font-size: 32px; }

.see-all {
  font-size: 13px;
  color: var(--brown);
  letter-spacing: 0.05em;
  transition: opacity 0.2s;
}
.see-all:hover { opacity: 0.7; }

.products-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.product-card { cursor: pointer; }

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

.quick-add {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(42,36,32,0.9);
  color: var(--white);
  border: none;
  padding: 14px;
  font-size: 12px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  transform: translateY(100%);
  transition: transform 0.3s ease;
}

.product-card:hover .quick-add { transform: translateY(0); }

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

.product-price {
  font-size: 14px;
  color: var(--brown);
}

/* Story teaser */
.story-teaser {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 560px;
}

.story-image {
  overflow: hidden;
}

.story-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.story-content {
  background: var(--beige);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 80px;
  gap: 20px;
}

.story-label {
  font-size: 11px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--text-light);
}

.story-content h2 {
  font-size: clamp(36px, 4vw, 52px);
  line-height: 1.1;
}

.story-content h2 em {
  font-style: italic;
  color: var(--brown);
}

.story-content p {
  font-size: 15px;
  color: var(--text);
  line-height: 1.8;
  max-width: 380px;
}

/* Newsletter */
.newsletter {
  padding: 80px 0;
  background: var(--cream);
  text-align: center;
}

.newsletter-inner h2 {
  font-size: 36px;
  margin-bottom: 12px;
}

.newsletter-inner p {
  font-size: 15px;
  color: var(--text-light);
  margin-bottom: 32px;
}

.newsletter-form {
  display: flex;
  gap: 0;
  max-width: 460px;
  margin: 0 auto;
}

.newsletter-form input {
  flex: 1;
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
  .hero-content { padding: 0 24px; padding-top: 72px; }
  .products-grid { grid-template-columns: repeat(2, 1fr); }
  .story-teaser { grid-template-columns: 1fr; }
  .story-image { height: 300px; }
  .story-content { padding: 48px 24px; }
  .newsletter-form { flex-direction: column; }
  .newsletter-form input { border-right: 1px solid var(--border); border-bottom: none; }
  .newsletter-form .btn-primary { width: 100%; text-align: center; }
}

@media (max-width: 600px) {
  .pillars-grid { grid-template-columns: 1fr; gap: 32px; }
  .products-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; }
}
</style>
