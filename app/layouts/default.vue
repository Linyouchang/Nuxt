<script setup>
import { profileData } from '~/data/profileData'
</script>

<template>
  <div class="container">
    <!-- 站內三頁導覽列 -->
    <header class="site-navbar">
      <div class="site-brand">{{ profileData.header.name }}的個人網站</div>
      <nav class="site-nav-links" aria-label="主要導覽">
        <NuxtLink to="/">首頁</NuxtLink>
        <NuxtLink to="/about">關於我</NuxtLink>
        <NuxtLink to="/projects">作品</NuxtLink>
      </nav>
    </header>

    <!-- 頁面內容插槽 -->
    <main class="profile-main">
      <slot />
    </main>

    <!-- 原作品頁尾 (原 ProfileFooter) -->
    <footer class="profile-footer">
      <WaveDivider />
      <p class="copyright">{{ profileData.footer.copyright }}</p>
    </footer>
  </div>
</template>

<style scoped>
.site-navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  padding-bottom: 16px;
  margin-bottom: 20px;
  border-bottom: 2px solid var(--color-border);
}

.site-brand {
  font-family: var(--font-family-serif);
  font-weight: 700;
  font-size: 1.15rem;
  color: var(--color-primary-dark);
  letter-spacing: 0.08em;
}

.site-nav-links {
  display: flex;
  gap: 10px;
}

.site-nav-links a {
  text-decoration: none;
  color: var(--color-primary);
  background-color: var(--bg-card);
  border: 1px solid var(--color-border);
  font-weight: 600;
  font-size: 0.9rem;
  padding: 5px 14px;
  border-radius: 4px;
  transition: var(--transition-smooth);
}

.site-nav-links a:hover {
  border-color: var(--color-primary);
  background-color: var(--bg-tag);
}

.site-nav-links a.router-link-active {
  background-color: var(--color-primary);
  color: #fffaf0;
  border-color: var(--color-primary);
  box-shadow: 0 2px 6px rgba(18, 51, 92, 0.2);
}

.profile-footer {
  text-align: center;
  padding: 32px 10px 12px;
}

.profile-footer :deep(.divider) {
  margin-bottom: 20px;
}

.copyright {
  font-size: 0.88rem;
  color: var(--color-text-muted);
  letter-spacing: 0.05em;
  margin-bottom: 4px;
}
</style>
