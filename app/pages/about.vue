<script setup>
const education = ref('中原大學 電機工程學系碩士生')

const interests = ref([
  {
    name: '羽球',
    description: '喜歡在球場上揮汗與切磋球技，培養專注力與體能。'
  },
  {
    name: '動漫',
    description: '欣賞各類動畫與漫畫作品，從不同故事與世界觀中獲得靈感與放鬆。'
  }
])

const skills = ref([
  'Vue 3 元件與資料綁定',
  'Nuxt 4 頁面路由與版型',
  'HTML / CSS',
  '電機工程領域研究'
])
</script>

<template>
  <div class="about-page">
    <h1>關於我</h1>

    <section class="card">
      <h2>學歷與背景</h2>
      <p>
        我是<strong>林祐菖</strong>，目前就讀於<strong>{{ education }}</strong>。
        除了電機領域的專業研究外，也正在學習現代前端開發技術，練習以 Vue 與 Nuxt 打造結構清楚的個人網站。
      </p>
    </section>

    <section class="card">
      <h2>個人興趣</h2>
      <ul class="interest-list">
        <li v-for="item in interests" :key="item.name" class="interest-item">
          <span class="interest-title">{{ item.name }}</span>
          <p class="interest-desc">{{ item.description }}</p>
        </li>
      </ul>
    </section>

    <section class="card">
      <h2>正在學的技能</h2>
      <div class="tags">
        <span v-for="skill in skills" :key="skill" class="tag">
          {{ skill }}
        </span>
      </div>
    </section>
  </div>
</template>

<style scoped>
.about-page h1 {
  margin-top: 0;
  margin-bottom: 1.5rem;
}

.card {
  background-color: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  padding: 1.5rem;
  margin-bottom: 1.25rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.card h2 {
  margin-top: 0;
  font-size: 1.2rem;
  color: #111827;
}

.card p {
  line-height: 1.6;
  color: #4b5563;
  margin-bottom: 0;
}

.interest-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 1rem;
}

.interest-item {
  padding: 1rem;
  background-color: #f9fafb;
  border-radius: 0.5rem;
  border-left: 4px solid #2563eb;
}

.interest-title {
  font-weight: 700;
  color: #1f2937;
  display: block;
  margin-bottom: 0.35rem;
}

.interest-desc {
  margin: 0;
  font-size: 0.95rem;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  background-color: #eff6ff;
  color: #1d4ed8;
  padding: 0.35rem 0.75rem;
  border-radius: 999px;
  font-size: 0.875rem;
  font-weight: 500;
}
</style>
