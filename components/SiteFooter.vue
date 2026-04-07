<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-top">
        <div class="footer-brand">
          <div class="footer-logo">
            <span class="logo-leaf">✦</span>
            <span>ALIA & BRA</span>
          </div>
          <p class="footer-tagline">為你的私密喜悅而設計。</p>
        </div>

        <div class="footer-links">
          <div class="footer-col">
            <h4>精品店</h4>
            <ul>
              <li><NuxtLink to="/boutique">全部商品</NuxtLink></li>
              <li><NuxtLink to="/boutique">胸罩</NuxtLink></li>
              <li><NuxtLink to="/boutique">套裝</NuxtLink></li>
              <li><NuxtLink to="/boutique">居家服</NuxtLink></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>客戶服務</h4>
            <ul>
              <li><a href="#">配送與退換貨</a></li>
              <li><a href="#">尺寸指南</a></li>
              <li><a href="#">洗滌說明</a></li>
              <li><NuxtLink to="/contact">聯絡我們</NuxtLink></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>法律聲明</h4>
            <ul>
              <li><a href="#">隱私政策</a></li>
              <li><a href="#">服務條款</a></li>
              <li><a href="#">Cookie 政策</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p>© {{ new Date().getFullYear() }} Alia & Bra. 版權所有。</p>
        <div class="social-links">
          <a href="#" aria-label="Instagram">Instagram</a>
          <a href="#" aria-label="Pinterest">Pinterest</a>
          <NuxtLink to="/about">品牌日誌</NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--dark);
  color: rgba(255,255,255,0.7);
  padding: 64px 0 32px;
  margin-top: auto;
}

.footer-top {
  display: flex;
  justify-content: space-between;
  gap: 48px;
  padding-bottom: 48px;
  border-bottom: 1px solid rgba(255,255,255,0.1);
  margin-bottom: 32px;
}

.footer-brand { max-width: 220px; }

.footer-logo {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: 'Playfair Display', serif;
  font-size: 15px;
  letter-spacing: 0.15em;
  color: var(--white);
  margin-bottom: 12px;
}

.logo-leaf { color: var(--brown); }

.footer-tagline {
  font-size: 13px;
  font-style: italic;
  color: rgba(255,255,255,0.45);
}

.footer-links {
  display: flex;
  gap: 56px;
}

.footer-col h4 {
  font-family: 'DM Sans', sans-serif;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.06em;
  color: var(--white);
  margin-bottom: 16px;
}

.footer-col ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.footer-col ul li a, .footer-col ul li a:visited {
  font-size: 13px;
  color: rgba(255,255,255,0.55);
  transition: color 0.2s;
}
.footer-col ul li a:hover { color: var(--white); }

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  color: rgba(255,255,255,0.35);
}

.social-links {
  display: flex;
  gap: 24px;
}

.social-links a {
  font-size: 12px;
  color: rgba(255,255,255,0.35);
  letter-spacing: 0.05em;
  transition: color 0.2s;
}
.social-links a:hover { color: var(--white); }

@media (max-width: 768px) {
  .footer-top { flex-direction: column; gap: 32px; }
  .footer-links { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
  .footer-bottom { flex-direction: column; gap: 16px; text-align: center; }
}

@media (max-width: 480px) {
  .footer-links { grid-template-columns: 1fr 1fr; }
}
</style>
