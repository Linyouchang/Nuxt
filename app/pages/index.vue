<script setup>
const profile = ref({
  name: '林祐菖',
  tagline: '中原大學電機工程學系碩士生',
  intro: '你好，我是林祐菖，目前就讀中原大學電機工程學系碩士班，歡迎來到我的個人網站！'
})
</script>

<template>
  <section class="hero">
    <div class="avatar">祐</div>
    <p class="page-label">首頁</p>
    <h1>{{ profile.name }}</h1>
    <p class="tagline">{{ profile.tagline }}</p>
    <p class="summary">{{ profile.intro }}</p>

    <div class="actions">
      <NuxtLink to="/about" class="btn primary">認識更多關於我</NuxtLink>
      <NuxtLink to="/projects" class="btn secondary">瀏覽我的作品</NuxtLink>
    </div>
  </section>
</template>

<style scoped>
.hero {
  background-color: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  padding: 3rem 2rem;
  text-align: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.avatar {
  width: 72px;
  height: 72px;
  margin: 0 auto 1rem;
  border-radius: 50%;
  background-color: #2563eb;
  color: #ffffff;
  font-size: 1.75rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
}

.page-label {
  color: #6b7280;
  margin: 0;
  font-size: 0.95rem;
  font-weight: 600;
}

h1 {
  font-size: 2.25rem;
  margin: 0.5rem 0;
  color: #111827;
}

.tagline {
  display: inline-block;
  background-color: #eff6ff;
  color: #1d4ed8;
  font-weight: 600;
  padding: 0.35rem 0.85rem;
  border-radius: 999px;
  margin: 0.5rem 0 1.25rem;
}

.summary {
  max-width: 520px;
  margin: 0 auto 2rem;
  line-height: 1.6;
  color: #4b5563;
}

.actions {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn {
  text-decoration: none;
  padding: 0.65rem 1.25rem;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 0.95rem;
}

.btn.primary {
  background-color: #2563eb;
  color: #ffffff;
}

.btn.secondary {
  background-color: #f3f4f6;
  color: #374151;
}
</style>
