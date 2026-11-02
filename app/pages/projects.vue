<script setup>
const projects = ref([
  {
    title: '練習一：Vue 3 元件與資料綁定個人名片',
    status: '已完成（上一單元）',
    description: '使用 Vue 3 的 ref 與模板語法，實作個人資訊與清單的動態資料綁定。',
    tags: ['Vue 3', '資料綁定', '元件基礎']
  },
  {
    title: '練習二：Nuxt 4 三頁式個人網站與導覽列',
    status: '進行中',
    description: '將個人介紹拆分為「首頁、關於我、作品」三個獨立頁面，練習 Nuxt 4 檔案路由與共用版面。',
    tags: ['Nuxt 4', 'Pages 路由', 'Layouts 版型']
  }
])
</script>

<template>
  <div class="projects-page">
    <h1>作品</h1>
    <p class="subtitle">這裡整理了我目前完成的兩項前端練習成果：</p>

    <div class="projects-grid">
      <article v-for="project in projects" :key="project.title" class="project-card">
        <div class="card-header">
          <h2>{{ project.title }}</h2>
          <span class="badge">{{ project.status }}</span>
        </div>
        <p class="description">{{ project.description }}</p>
        <div class="tags">
          <span v-for="tag in project.tags" :key="tag" class="tag">
            {{ tag }}
          </span>
        </div>
      </article>
    </div>
  </div>
</template>

<style scoped>
.projects-page h1 {
  margin-top: 0;
  margin-bottom: 0.5rem;
}

.subtitle {
  color: #6b7280;
  margin-top: 0;
  margin-bottom: 1.5rem;
}

.projects-grid {
  display: grid;
  gap: 1.25rem;
}

.project-card {
  background-color: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 0.75rem;
}

.card-header h2 {
  margin: 0;
  font-size: 1.15rem;
  color: #111827;
}

.badge {
  font-size: 0.8rem;
  background-color: #f3f4f6;
  color: #374151;
  padding: 0.25rem 0.65rem;
  border-radius: 999px;
  font-weight: 500;
}

.description {
  color: #4b5563;
  line-height: 1.6;
  margin: 0 0 1rem;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  font-size: 0.8rem;
  background-color: #eff6ff;
  color: #1d4ed8;
  padding: 0.25rem 0.65rem;
  border-radius: 0.375rem;
}
</style>
