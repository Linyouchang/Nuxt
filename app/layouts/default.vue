<template>
  <div class="layout">
    <header class="navbar">
      <div class="brand">林祐菖的個人網站</div>
      <nav class="nav-links">
        <NuxtLink to="/">首頁</NuxtLink>
        <NuxtLink to="/about">關於我</NuxtLink>
        <NuxtLink to="/projects">作品</NuxtLink>
      </nav>
    </header>

    <main class="container">
      <slot />
    </main>

    <footer class="footer">
      <p>© 2026 林祐菖 · Nuxt 4 練習網站</p>
    </footer>
  </div>
</template>

<style scoped>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Noto Sans TC", sans-serif;
  color: #1f2937;
  background-color: #f9fafb;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #ffffff;
  border-bottom: 1px solid #e5e7eb;
}

.brand {
  font-weight: 700;
  font-size: 1.15rem;
  color: #111827;
}

.nav-links {
  display: flex;
  gap: 1.25rem;
}

.nav-links a {
  text-decoration: none;
  color: #4b5563;
  font-weight: 500;
  padding: 0.35rem 0.75rem;
  border-radius: 0.375rem;
}

.nav-links a.router-link-active {
  color: #2563eb;
  background-color: #dbeafe;
  font-weight: 600;
}

.container {
  flex: 1;
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  padding: 2rem 1.5rem;
  box-sizing: border-box;
}

.footer {
  text-align: center;
  padding: 1rem;
  font-size: 0.875rem;
  color: #6b7280;
  border-top: 1px solid #e5e7eb;
  background-color: #ffffff;
}
</style>

