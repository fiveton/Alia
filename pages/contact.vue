<template>
  <div class="contact">
    <!-- Hero -->
    <section class="contact-hero">
      <div class="hero-text">
        <p class="section-label">Get in Touch</p>
        <h1>Let's start an<br /><em>intimate</em><br />conversation</h1>
        <p>Whether you need help with sizing, sustainability practices, or bespoke appointments, our atelier experts are here to assist you.</p>
      </div>
      <div class="hero-image">
        <img src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=900&q=80&fit=crop" alt="Our Atelier" />
        <div class="image-caption">"Luxury is a feeling of belonging."</div>
      </div>
    </section>

    <!-- Content -->
    <section class="contact-body">
      <div class="container">
        <div class="contact-grid">

          <!-- Form -->
          <div class="inquiry-form">
            <h2>Send an Inquiry</h2>
            <form @submit.prevent="submit">
              <div class="form-row">
                <div class="form-group">
                  <label>Full Name</label>
                  <input v-model="form.name" type="text" placeholder="Your name" />
                </div>
                <div class="form-group">
                  <label>Email Address</label>
                  <input v-model="form.email" type="email" placeholder="your@email.com" />
                </div>
              </div>
              <div class="form-group">
                <label>Message</label>
                <textarea v-model="form.message" rows="5" placeholder="How can we help you?"></textarea>
              </div>
              <button type="submit" class="btn-primary">Send an Inquiry</button>
              <p v-if="sent" class="success-msg">Thank you — we'll be in touch shortly.</p>
            </form>
          </div>

          <!-- Info -->
          <div class="contact-info">
            <div class="info-block">
              <h3>工作室地址</h3>
              <p>510 彰化縣員林市<br />員東路一段68巷20弄21號</p>
            </div>

            <div class="info-block">
              <h3>聯絡方式</h3>
              <div class="info-item">
                <span class="info-icon">☎</span>
                <span>04 837 3535</span>
              </div>
              <div class="info-item">
                <span class="info-icon">◷</span>
                <span>週五 08:00 開始營業</span>
              </div>
            </div>

            <div class="info-block">
              <h3>Social Narrative</h3>
              <div class="social-links">
                <a href="#">Instagram</a>
                <a href="#">Pinterest</a>
                <NuxtLink to="/about">Journal</NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Map -->
    <section class="map-section">
      <div class="map-placeholder">
        <div class="map-pin">
          <div class="pin-dot"></div>
          <p>員林市員東路一段68巷20弄21號</p>
        </div>
        <div class="map-grid"></div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({ title: 'Contact — Alia & Bra' })

const form = reactive({ name: '', email: '', message: '' })
const sent = ref(false)

function submit() {
  if (form.name && form.email && form.message) {
    sent.value = true
    setTimeout(() => { sent.value = false }, 5000)
    form.name = ''
    form.email = ''
    form.message = ''
  }
}
</script>

<style scoped>
.contact-hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 80vh;
  padding-top: 72px;
}

.hero-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 80px;
  gap: 24px;
  background: var(--beige);
}

.hero-text h1 {
  font-size: clamp(36px, 4.5vw, 60px);
  line-height: 1.05;
}

.hero-text h1 em {
  font-style: italic;
  color: var(--brown);
}

.hero-text > p {
  font-size: 15px;
  color: var(--text);
  line-height: 1.8;
  max-width: 380px;
}

.hero-image {
  position: relative;
  overflow: hidden;
}

.hero-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.image-caption {
  position: absolute;
  bottom: 24px;
  right: 24px;
  background: rgba(250,248,245,0.9);
  padding: 10px 16px;
  font-size: 13px;
  font-style: italic;
  color: var(--text);
  backdrop-filter: blur(4px);
}

.contact-body { padding: 80px 0; }

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 380px;
  gap: 80px;
}

.inquiry-form h2 {
  font-size: 28px;
  margin-bottom: 32px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 20px;
}

.form-group label {
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-light);
}

.form-group input,
.form-group textarea {
  padding: 12px 16px;
  border: 1px solid var(--border);
  background: var(--white);
  font-family: 'DM Sans', sans-serif;
  font-size: 14px;
  color: var(--dark);
  outline: none;
  transition: border-color 0.2s;
  resize: none;
}

.form-group input:focus,
.form-group textarea:focus {
  border-color: var(--brown);
}

.success-msg {
  margin-top: 16px;
  font-size: 14px;
  color: var(--green);
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.info-block h3 {
  font-family: 'DM Sans', sans-serif;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--text-light);
  margin-bottom: 16px;
}

.info-block p {
  font-size: 14px;
  color: var(--text);
  line-height: 1.8;
  margin-bottom: 12px;
}

.info-link {
  font-size: 13px;
  color: var(--brown);
  border-bottom: 1px solid var(--brown);
  padding-bottom: 1px;
  transition: opacity 0.2s;
}
.info-link:hover { opacity: 0.7; }

.info-item {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
  font-size: 14px;
  color: var(--text);
}

.info-icon {
  color: var(--brown);
  width: 20px;
  flex-shrink: 0;
}

.social-links { display: flex; gap: 20px; }

.social-links a {
  font-size: 13px;
  color: var(--dark);
  border-bottom: 1px solid var(--border);
  padding-bottom: 2px;
  transition: border-color 0.2s, color 0.2s;
}
.social-links a:hover { color: var(--brown); border-color: var(--brown); }

.map-section {
  height: 300px;
  background: var(--beige);
  position: relative;
  overflow: hidden;
}

.map-placeholder {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.map-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(var(--border) 1px, transparent 1px),
    linear-gradient(90deg, var(--border) 1px, transparent 1px);
  background-size: 40px 40px;
  opacity: 0.5;
}

.map-pin {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.pin-dot {
  width: 16px;
  height: 16px;
  background: var(--brown);
  border-radius: 50%;
  border: 3px solid var(--white);
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
}

.map-pin p {
  background: var(--white);
  padding: 8px 16px;
  font-size: 13px;
  color: var(--dark);
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.section-label {
  font-size: 11px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--text-light);
}

@media (max-width: 1024px) {
  .contact-grid { grid-template-columns: 1fr; gap: 48px; }
  .contact-info { display: grid; grid-template-columns: repeat(3, 1fr); }
}

@media (max-width: 768px) {
  .contact-hero { grid-template-columns: 1fr; min-height: auto; }
  .hero-text { padding: 48px 24px; }
  .hero-image { height: 280px; }
  .form-row { grid-template-columns: 1fr; }
  .contact-info { grid-template-columns: 1fr; }
  .inquiry-form .btn-primary { width: 100%; text-align: center; }
}
</style>
