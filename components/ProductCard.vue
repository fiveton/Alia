<template>
  <div class="product-card">
    <div class="product-image">
      <img :src="product.image" :alt="product.name" loading="lazy" />
      <component
        :is="product.shopUrl ? 'a' : 'button'"
        class="quick-add"
        v-bind="product.shopUrl ? { href: product.shopUrl, target: '_blank', rel: 'noopener noreferrer' } : { type: 'button', disabled: true }"
      >
        {{ product.shopUrl ? '前往購買' : '即將上架' }}
      </component>
      <span v-if="product.badge" class="product-badge">{{ product.badge }}</span>
    </div>
    <div class="product-info">
      <p class="product-category">{{ product.category }}</p>
      <h3 class="product-name">{{ product.name }}</h3>
      <p class="product-price">${{ product.price }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  product: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped>
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
  display: block;
  width: 100%;
  background: rgba(42, 36, 32, 0.9);
  color: var(--white);
  border: none;
  padding: 14px;
  font-size: 13px;
  font-family: 'DM Sans', 'Noto Sans TC', sans-serif;
  letter-spacing: 0.04em;
  text-align: center;
  text-decoration: none;
  transform: translateY(100%);
  transition: transform 0.3s ease;
}

.quick-add[disabled] {
  opacity: 0.6;
  cursor: default;
}

.product-card:hover .quick-add { transform: translateY(0); }

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
  font-size: 12px;
  letter-spacing: 0.04em;
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
</style>
