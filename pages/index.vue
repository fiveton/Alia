<template>
  <div class="home">
    <!-- Hero -->
    <section class="hero">
      <div class="hero-image">
        <img src="https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=1400&q=80&fit=crop" alt="Alia & Bra hero" fetchpriority="high" />
        <div class="hero-overlay"></div>
      </div>
      <div class="hero-content">
        <p class="hero-label">最新系列</p>
        <h1>親密的<br /><em>詩意</em></h1>
        <p class="hero-sub">為那些相信美麗由內而生的人而造。</p>
        <NuxtLink to="/boutique" class="btn-primary">探索系列</NuxtLink>
      </div>
    </section>

    <!-- Brand pillars -->
    <section class="pillars">
      <div class="container">
        <div class="pillars-grid">
          <div class="pillar">
            <div class="pillar-icon">♻</div>
            <h3>永續製作</h3>
            <p>以有機棉、桑蠶絲與再生蕾絲製成——溫柔呵護你的肌膚與地球。</p>
          </div>
          <div class="pillar">
            <div class="pillar-icon">✦</div>
            <h3>以同理心編織</h3>
            <p>每一件設計都是對每個身體的讚頌，提供 XS 至 3X 的全尺寸選擇。</p>
          </div>
          <div class="pillar">
            <div class="pillar-icon">◎</div>
            <h3>私密的喜悅</h3>
            <p>因為你內在的感受同樣重要。先為舒適設計，再為美麗而生。</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured products -->
    <section class="featured">
      <div class="container">
        <div class="section-header">
          <h2>精選商品</h2>
          <NuxtLink to="/boutique" class="see-all">查看全部 →</NuxtLink>
        </div>
        <div class="products-grid">
          <ProductCard v-for="product in featured" :key="product.id" :product="product" />
        </div>
      </div>
    </section>

    <!-- Brand story teaser -->
    <section class="story-teaser">
      <div class="story-image">
        <img src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=900&q=80&fit=crop" alt="Atelier" />
      </div>
      <div class="story-content">
        <p class="story-label">品牌故事</p>
        <h2>以同理心<br /><em>編織</em></h2>
        <p>無論您需要尺寸建議、永續相關說明或預約服務，我們的工作室專家都竭誠為您服務。</p>
        <NuxtLink to="/about" class="btn-outline">探索品牌故事</NuxtLink>
      </div>
    </section>

    <NewsletterSection />
  </div>
</template>

<script setup>
useHead({ title: 'Alia & Bra — 親密的詩意' })

const products = await useProducts()
const featured = computed(() => products.filter(p => p.featured))
</script>

<style scoped>
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

.story-teaser {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 560px;
}

.story-image { overflow: hidden; }

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

@media (max-width: 1024px) {
  .products-grid { grid-template-columns: repeat(3, 1fr); }
}

@media (max-width: 768px) {
  .hero-content { padding: 0 24px; padding-top: 72px; }
  .products-grid { grid-template-columns: repeat(2, 1fr); }
  .story-teaser { grid-template-columns: 1fr; }
  .story-image { height: 300px; }
  .story-content { padding: 48px 24px; }
}

@media (max-width: 600px) {
  .pillars-grid { grid-template-columns: 1fr; gap: 32px; }
  .products-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; }
}
</style>
