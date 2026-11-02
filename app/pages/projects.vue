<script setup>
import { profileData } from '~/data/profileData'

const data = profileData.projects
const isOpen = ref(true)

// 搜尋關鍵字狀態 (保留自原 ProjectsSection.vue)
const keyword = ref('')

// 依關鍵字篩選作品清單（比對名稱、說明或網址）
const filteredProjects = computed(() => {
  const query = keyword.value.trim().toLowerCase()
  const items = data.items || []
  if (!query) return items

  return items.filter(item => {
    const matchTitle = item.title?.toLowerCase().includes(query)
    const matchDesc = item.desc?.toLowerCase().includes(query)
    const matchUrl = item.url?.toLowerCase().includes(query)
    return Boolean(matchTitle || matchDesc || matchUrl)
  })
})

// 清空搜尋條件
function clearSearch() {
  keyword.value = ''
}

// 切換收起/展開
function toggle() {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <section class="section projects-section" aria-labelledby="projects-heading">
    <!-- 區塊標題與收合按鈕 -->
    <div
      class="section-header"
      :class="{ 'is-collapsed': !isOpen }"
      @click="toggle"
      role="button"
      tabindex="0"
      @keydown.enter.space.prevent="toggle"
      :aria-expanded="isOpen"
    >
      <div class="header-titles">
        <span class="sub-label">{{ data.label }}</span>
        <h1 id="projects-heading" class="section-title">{{ data.title }}</h1>
      </div>
      <button
        type="button"
        class="toggle-btn"
        :aria-label="isOpen ? '收起作品介紹' : '展開作品介紹'"
        @click.stop="toggle"
      >
        <span class="toggle-text">{{ isOpen ? '收起' : '展開' }}</span>
        <span class="toggle-icon" :class="{ 'is-collapsed': !isOpen }">▼</span>
      </button>
    </div>

    <!-- 內容折疊容器 -->
    <div class="collapse-wrapper" :class="{ 'is-open': isOpen }">
      <div class="collapse-inner">
        <div class="section-content">
          <!-- 搜尋與結果數量列 -->
          <div class="projects-controls">
            <div class="search-box">
              <input
                v-model="keyword"
                type="search"
                class="search-input"
                placeholder="搜尋作品名稱或關鍵字..."
                aria-label="搜尋作品"
              />
              <button
                v-if="keyword"
                type="button"
                class="clear-btn"
                @click="clearSearch"
                aria-label="清空搜尋"
                title="清空搜尋"
              >
                ✕
              </button>
            </div>
            <span class="result-count">
              共 {{ filteredProjects.length }} 件作品
            </span>
          </div>

          <!-- 無符合搜尋結果提示 -->
          <div v-if="filteredProjects.length === 0" class="no-result">
            <p class="no-result-text">查無符合「{{ keyword }}」的作品</p>
            <button type="button" class="reset-search-btn" @click="clearSearch">
              清空搜尋條件
            </button>
          </div>

          <!-- 作品卡片清單網格 -->
          <div v-else class="projects-grid">
            <ProjectCard
              v-for="project in filteredProjects"
              :key="project.id"
              :project="project"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section-content {
  padding-top: 2px;
}

/* 搜尋列與計數樣式 */
.projects-controls {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 16px;
  flex-wrap: wrap;
}

.search-box {
  position: relative;
  display: flex;
  align-items: center;
  flex: 1;
  min-width: 220px;
}

.search-input {
  width: 100%;
  padding: 7px 32px 7px 12px;
  font-size: 0.88rem;
  font-family: var(--font-family-base);
  background: #fffdf9;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  color: var(--color-text-main);
  transition: var(--transition-smooth);
  outline: none;
}

.search-input:focus {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 2px rgba(18, 51, 92, 0.12);
}

.clear-btn {
  position: absolute;
  right: 8px;
  background: transparent;
  border: none;
  color: var(--color-text-muted);
  font-size: 0.88rem;
  cursor: pointer;
  padding: 2px 6px;
  border-radius: 50%;
  transition: var(--transition-smooth);
  display: flex;
  align-items: center;
  justify-content: center;
}

.clear-btn:hover {
  color: var(--color-accent);
  background-color: rgba(192, 54, 34, 0.1);
}

.result-count {
  font-size: 0.82rem;
  color: var(--color-text-muted);
  font-weight: 600;
  letter-spacing: 0.04em;
  white-space: nowrap;
}

/* 查無結果提示 */
.no-result {
  text-align: center;
  padding: 32px 16px;
  background: rgba(244, 238, 226, 0.5);
  border: 1px dashed var(--color-border);
  border-radius: 4px;
}

.no-result-text {
  color: var(--color-text-muted);
  font-size: 0.95rem;
  margin-bottom: 12px;
}

.reset-search-btn {
  background: var(--color-primary);
  color: #fffaf0;
  border: 1px solid var(--color-primary);
  padding: 6px 14px;
  border-radius: 4px;
  font-size: 0.85rem;
  cursor: pointer;
  font-weight: 600;
  transition: var(--transition-smooth);
}

.reset-search-btn:hover {
  background: var(--color-primary-light);
  border-color: var(--color-primary-light);
  box-shadow: 0 2px 8px rgba(18, 51, 92, 0.2);
}

/* 作品列表網格排列 */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

@media (max-width: 600px) {
  .projects-grid {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .projects-controls {
    flex-direction: column;
    align-items: stretch;
  }

  .search-box {
    min-width: 100%;
  }
}
</style>
