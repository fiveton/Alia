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
        <p class="section-label">品牌故事</p>
        <h1>親密的<br /><em>詩意</em></h1>
        <NuxtLink to="/boutique" class="btn-outline">立即選購</NuxtLink>
      </div>
    </section>

    <!-- Brand story -->
    <section class="brand-story">
      <div class="container">
        <div class="story-grid">
          <div class="story-text">
            <p class="section-label">品牌理念</p>
            <h2>以同理心<br /><em>編織</em></h2>
            <p>
              Alia & Bra 的創立，源於一個信念：你內在的感受，形塑了你面對世界的姿態。我們創作貼身衣物，不追隨潮流，而是傾聽女性真正渴望的聲音。
            </p>
            <p>
              每一針、每一扣、每一片布料的選擇，都是無聲的宣言：你值得時刻感受美麗——尤其是在只有你自己的靜謐時刻。
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
          <p class="section-label">工藝精神</p>
          <h2>完美的永續</h2>
          <p class="materials-sub">我們相信奢華與責任並不對立。每一種材料的選擇，皆出於用心。</p>
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
          <p class="section-label clover-label">最新系列</p>
          <h2 class="clover-title">CLOVER <span>✦</span></h2>
          <p class="clover-desc">迄今最環保的系列。完全以認證有機與再生材料製成，Clover 系列頌揚自然的靜謐之美。</p>
          <NuxtLink to="/boutique" class="btn-primary">探索 Clover</NuxtLink>
        </div>
        <div class="clover-image">
          <img src="https://images.unsplash.com/photo-1603792907191-89e55f70099a?w=800&q=80&fit=crop" alt="Clover Collection" />
        </div>
      </div>
    </section>

    <!-- Closing -->
    <section class="closing">
      <div class="container">
        <h2>為你的<br /><em>私密喜悅</em>而生</h2>
        <p>因為每一位女性，都值得在只屬於自己的靜謐時刻，感受那份極致的美麗。</p>
        <NuxtLink to="/boutique" class="btn-primary">探索系列</NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({ title: '品牌故事 — Alia & Bra' })

const materials = [
  {
    name: '桑蠶絲',
    color: '#F0E8DC',
    desc: '最上等的天然蠶絲，低致敏性且能調節溫度，全天穿著舒適自在。',
  },
  {
    name: '有機棉',
    color: '#E8EFE0',
    desc: 'GOTS 認證有機棉，不使用有害農藥或人工合成肥料。',
  },
  {
    name: '再生蕾絲',
    color: '#EDE8F0',
    desc: '以回收纖維製成的精緻蕾絲——美麗的設計，更輕盈的環境負擔。',
  },
  {
    name: 'Tencel™ Modal',
    color: '#E8EEF0',
    desc: '來自永續山毛櫸木纖維，絲滑柔軟且可生物降解。',
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
  .brand-story { padding: 60px 0; }
  .story-grid { grid-template-columns: 1fr; gap: 40px; }
  .materials { padding: 60px 0; }
  .clover-inner { grid-template-columns: 1fr; }
  .clover-image { height: 300px; order: -1; }
  .clover-content { padding: 48px 24px; }
  .clover-content .btn-primary { width: 100%; text-align: center; }
  .materials-grid { grid-template-columns: repeat(2, 1fr); }
  .closing { padding: 80px 0; }
  .closing .btn-primary { width: 100%; text-align: center; }
}
</style>
