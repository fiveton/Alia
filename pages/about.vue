<template>
  <div class="about">
    <!-- Hero -->
    <section class="about-hero">
      <div class="hero-images">
        <div class="hero-img-main">
          <img src="https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=800&q=80&fit=crop" alt="Alia model" />
        </div>
        <div class="hero-img-secondary">
          <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80&fit=crop" alt="Alia detail" />
        </div>
      </div>
      <div class="hero-text">
        <p class="section-label">Our Story</p>
        <h1>The Poetry<br />of <em>Intimacy</em></h1>
        <NuxtLink to="/boutique" class="btn-outline">Shop Now</NuxtLink>
      </div>
    </section>

    <!-- Brand story -->
    <section class="brand-story">
      <div class="container">
        <div class="story-grid">
          <div class="story-text">
            <p class="section-label">Philosophy</p>
            <h2>Woven with<br /><em>Empathy</em></h2>
            <p>
              Alia & Bra was founded on the belief that how you feel underneath shapes how you move through the world. We create lingerie that honours every body — not by conforming to trends, but by listening deeply to what women actually want.
            </p>
            <p>
              Every stitch, every clasp, every fabric choice is a quiet declaration: you deserve to feel beautiful, always — especially when no one else is watching.
            </p>
          </div>
          <div class="story-visual">
            <img src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=700&q=80&fit=crop" alt="Atelier" />
          </div>
        </div>
      </div>
    </section>

    <!-- Sustainable materials -->
    <section class="materials">
      <div class="container">
        <div class="materials-header">
          <p class="section-label">Craftsmanship</p>
          <h2>The Perfect Sustainable</h2>
          <p class="materials-sub">We believe luxury and responsibility are not opposites. Every material is chosen with intention.</p>
        </div>
        <div class="materials-grid">
          <div v-for="m in materials" :key="m.name" class="material-card">
            <div class="material-swatch" :style="{ background: m.color }"></div>
            <h3>{{ m.name }}</h3>
            <p>{{ m.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Clover collection -->
    <section class="clover">
      <div class="clover-inner">
        <div class="clover-content">
          <p class="section-label clover-label">New Collection</p>
          <h2 class="clover-title">CLOVER <span>✦</span></h2>
          <p class="clover-desc">Our greenest collection yet. Made entirely from certified organic and recycled materials, Clover celebrates nature's quiet elegance.</p>
          <NuxtLink to="/boutique" class="btn-primary">Discover Clover</NuxtLink>
        </div>
        <div class="clover-image">
          <img src="https://images.unsplash.com/photo-1603792907191-89e55f70099a?w=800&q=80&fit=crop" alt="Clover Collection" />
        </div>
      </div>
    </section>

    <!-- Closing -->
    <section class="closing">
      <div class="container">
        <h2>Designed for<br /><em>Your Private Joy</em></h2>
        <p>Because every woman deserves to feel exquisite — in the quiet moments that belong only to her.</p>
        <NuxtLink to="/boutique" class="btn-primary">Shop the Collection</NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({ title: 'Our Story — Alia & Bra' })

const materials = [
  {
    name: 'Mulberry Silk',
    color: '#F0E8DC',
    desc: 'The finest natural silk, hypoallergenic and temperature-regulating for all-day comfort.',
  },
  {
    name: 'Organic Cotton',
    color: '#E8EFE0',
    desc: 'GOTS-certified organic cotton, grown without harmful pesticides or synthetic fertilizers.',
  },
  {
    name: 'Recycled Lace',
    color: '#EDE8F0',
    desc: 'Delicate lace crafted from recycled fibres — beautiful design with a lighter footprint.',
  },
  {
    name: 'Tencel™ Modal',
    color: '#E8EEF0',
    desc: 'Sustainably sourced beechwood fibres, silky-soft and biodegradable.',
  },
]
</script>

<style scoped>
.about-hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
  padding-top: 72px;
}

.hero-images {
  display: grid;
  grid-template-rows: 1fr auto;
  gap: 4px;
  overflow: hidden;
}

.hero-img-main, .hero-img-secondary { overflow: hidden; }

.hero-img-main img, .hero-img-secondary img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-img-main { flex: 1; }
.hero-img-secondary { max-height: 240px; }

.hero-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 80px;
  gap: 24px;
  background: var(--beige);
}

.hero-text h1 {
  font-size: clamp(40px, 5vw, 64px);
  line-height: 1.05;
}

.hero-text h1 em {
  font-style: italic;
  color: var(--brown);
}

.brand-story { padding: 100px 0; }

.story-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.story-text {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.story-text h2 {
  font-size: clamp(36px, 4vw, 52px);
  line-height: 1.1;
}

.story-text h2 em {
  font-style: italic;
  color: var(--brown);
}

.story-text p {
  font-size: 15px;
  color: var(--text);
  line-height: 1.9;
}

.story-visual {
  overflow: hidden;
  aspect-ratio: 4/5;
}

.story-visual img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.materials {
  background: var(--beige);
  padding: 100px 0;
}

.materials-header {
  text-align: center;
  margin-bottom: 56px;
}

.materials-header h2 {
  font-size: 40px;
  margin-bottom: 16px;
}

.materials-sub {
  font-size: 15px;
  color: var(--text);
  max-width: 480px;
  margin: 0 auto;
  line-height: 1.8;
}

.materials-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.material-card {
  background: var(--white);
  padding: 32px 24px;
}

.material-swatch {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-bottom: 20px;
  border: 1px solid var(--border);
}

.material-card h3 {
  font-size: 17px;
  margin-bottom: 12px;
}

.material-card p {
  font-size: 13px;
  color: var(--text-light);
  line-height: 1.7;
}

.clover {
  background: var(--dark);
  overflow: hidden;
}

.clover-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 560px;
}

.clover-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 80px;
  gap: 24px;
}

.clover-label { color: rgba(255,255,255,0.5); }

.clover-title {
  font-size: clamp(40px, 5vw, 64px);
  color: var(--white);
  letter-spacing: 0.08em;
}

.clover-title span {
  color: #7AB87A;
  font-style: normal;
}

.clover-desc {
  font-size: 15px;
  color: rgba(255,255,255,0.65);
  line-height: 1.8;
  max-width: 380px;
}

.clover-image { overflow: hidden; }

.clover-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.85);
}

.closing {
  padding: 120px 0;
  text-align: center;
  display: flex;
  align-items: center;
}

.closing .container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
}

.closing h2 {
  font-size: clamp(36px, 5vw, 56px);
  line-height: 1.15;
}

.closing h2 em {
  font-style: italic;
  color: var(--brown);
}

.closing p {
  font-size: 16px;
  color: var(--text);
  max-width: 480px;
  line-height: 1.8;
}

.section-label {
  font-size: 11px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--text-light);
  margin-bottom: 4px;
}

@media (max-width: 1024px) {
  .materials-grid { grid-template-columns: repeat(2, 1fr); }
  .story-grid { gap: 48px; }
}

@media (max-width: 768px) {
  .about-hero { grid-template-columns: 1fr; min-height: auto; }
  .hero-images { height: 60vw; min-height: 240px; max-height: 380px; grid-template-rows: 1fr; }
  .hero-img-secondary { display: none; }
  .hero-text { padding: 40px 24px; gap: 16px; }
  .hero-text .btn-outline { display: block; text-align: center; }
  .story-grid { grid-template-columns: 1fr; gap: 40px; }
  .clover-inner { grid-template-columns: 1fr; }
  .clover-image { height: 300px; order: -1; }
  .clover-content { padding: 48px 24px; }
  .clover-content .btn-primary { width: 100%; text-align: center; }
  .materials-grid { grid-template-columns: repeat(2, 1fr); }
  .closing .btn-primary { width: 100%; text-align: center; }
}
</style>
