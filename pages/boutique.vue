<template>
  <div class="boutique">
    <div class="boutique-header">
      <div class="container">
        <p class="page-label">我們的系列</p>
        <h1>精品店</h1>
        <p class="page-sub">為你的私密喜悅，精心挑選的每一件作品。</p>
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
        <p class="product-count">{{ filteredProducts.length }} 件商品</p>
      </div>
    </div>

    <!-- Products -->
    <div class="products-section">
      <div class="container">
        <div class="products-grid">
          <ProductCard
            v-for="product in filteredProducts"
            :key="product.id"
            :product="product"
          />
        </div>
      </div>
    </div>

    <NewsletterSection />
  </div>
</template>

<script setup>
useHead({ title: '精品店 — Alia & Bra' })

const supabase = getSupabaseClient()
const { data: catData } = await supabase.from('categories').select('name').order('sort_order').order('created_at')
const categoryNames = (catData || []).map(c => c.name)
const filters = ['全部商品', ...categoryNames]

const activeFilter = ref('全部商品')

const products = await useProducts()

const filteredProducts = computed(() => {
  if (activeFilter.value === '全部商品') return products
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
  gap: 12px;
}

.filters {
  display: flex;
  gap: 4px;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  flex-shrink: 1;
  min-width: 0;
}

.filters::-webkit-scrollbar { display: none; }

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
  white-space: nowrap;
  flex-shrink: 0;
}

.products-section {
  padding: 56px 0 80px;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 28px 24px;
}

@media (max-width: 1024px) {
  .products-grid { grid-template-columns: repeat(3, 1fr); }
}

@media (max-width: 768px) {
  .boutique-header { padding: 100px 0 40px; }
  .products-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; }
}
</style>
