<template>
  <nav class="navbar" :class="{ scrolled: isScrolled }">
    <div class="nav-inner container">
      <div class="nav-left">
        <RouterLink to="/boutique" class="nav-link">Shop</RouterLink>
        <RouterLink to="/about" class="nav-link">About</RouterLink>
      </div>

      <RouterLink to="/" class="logo" @click="closeMenu">
        <span class="logo-leaf">✦</span>
        <span class="logo-text">ALIA & BRA</span>
      </RouterLink>

      <div class="nav-right">
        <RouterLink to="/contact" class="nav-link">Contact</RouterLink>
        <button class="nav-icon" aria-label="Cart">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <path d="M16 10a4 4 0 0 1-8 0"/>
          </svg>
        </button>
        <button class="hamburger" @click="toggleMenu" :aria-expanded="menuOpen" aria-label="Menu">
          <span :class="{ open: menuOpen }"></span>
          <span :class="{ open: menuOpen }"></span>
          <span :class="{ open: menuOpen }"></span>
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
    <div class="mobile-menu" :class="{ active: menuOpen }">
      <RouterLink to="/boutique" class="mobile-link" @click="closeMenu">Shop</RouterLink>
      <RouterLink to="/about" class="mobile-link" @click="closeMenu">About</RouterLink>
      <RouterLink to="/contact" class="mobile-link" @click="closeMenu">Contact</RouterLink>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const menuOpen = ref(false)

function onScroll() {
  isScrolled.value = window.scrollY > 40
}

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}

function closeMenu() {
  menuOpen.value = false
}

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 1200px;
  z-index: 100;
  transition: background 0.3s ease, box-shadow 0.3s ease;
  padding: 0;
}

.navbar.scrolled {
  background: rgba(250, 248, 245, 0.96);
  backdrop-filter: blur(8px);
  box-shadow: 0 1px 0 var(--border);
}

.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
}

.nav-left, .nav-right {
  display: flex;
  align-items: center;
  gap: 32px;
  min-width: 180px;
}

.nav-right {
  justify-content: flex-end;
}

.nav-link {
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--dark);
  transition: color 0.2s;
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 1px;
  background: var(--brown);
  transition: width 0.3s ease;
}

.nav-link:hover::after,
.nav-link.router-link-active::after {
  width: 100%;
}

.logo {
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
}

.logo-leaf {
  color: var(--brown);
  font-size: 14px;
}

.logo-text {
  font-family: 'Playfair Display', serif;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0.15em;
  color: var(--dark);
}

.nav-icon {
  background: none;
  border: none;
  color: var(--dark);
  padding: 4px;
  display: flex;
  align-items: center;
  transition: color 0.2s;
}

.nav-icon:hover { color: var(--brown); }

/* Hamburger */
.hamburger {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  background: none;
  border: none;
  padding: 4px;
  cursor: pointer;
  width: 28px;
  height: 28px;
}

.hamburger span {
  display: block;
  width: 22px;
  height: 1.5px;
  background: var(--dark);
  transition: transform 0.3s ease, opacity 0.3s ease;
  transform-origin: center;
}

.hamburger span.open:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
.hamburger span.open:nth-child(2) { opacity: 0; }
.hamburger span.open:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }

/* Mobile menu */
.mobile-menu {
  display: none;
  flex-direction: column;
  background: rgba(250, 248, 245, 0.98);
  backdrop-filter: blur(8px);
  border-top: 1px solid var(--border);
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.35s ease;
}

.mobile-menu.active {
  max-height: 300px;
}

.mobile-link {
  padding: 18px 24px;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--dark);
  border-bottom: 1px solid var(--border);
  text-decoration: none;
  transition: color 0.2s;
}

.mobile-link:hover { color: var(--brown); }

@media (max-width: 768px) {
  .nav-left { display: none; }
  .nav-right { min-width: auto; gap: 16px; }
  /* Hide text nav links on mobile, only show cart + hamburger */
  .nav-right .nav-link { display: none; }
  .hamburger { display: flex; }
  .mobile-menu { display: flex; }
  .logo-text { font-size: 13px; }
}
</style>
