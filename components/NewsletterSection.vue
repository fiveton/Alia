<template>
  <section class="newsletter">
    <div class="container">
      <div class="newsletter-inner">
        <h2>來自工作室的信</h2>
        <p>故事、新品消息與靜謐時刻——每週直送您的信箱。</p>
        <form class="newsletter-form" @submit.prevent>
          <input type="email" placeholder="您的電子郵件" />
          <button type="submit" class="btn-primary">訂閱</button>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
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

@media (max-width: 768px) {
  .newsletter-form { flex-direction: column; }
  .newsletter-form input {
    border-right: 1px solid var(--border);
    border-bottom: none;
  }
  .newsletter-form .btn-primary { width: 100%; text-align: center; }
}
</style>
