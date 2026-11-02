<script setup>
import { profileData } from '~/data/profileData'

const interests = profileData.interests
const skills = profileData.skills

// 保留原 App.vue 的各區塊展開/收起與「全部展開／全部收起」互動
const sections = reactive({
  interests: true,
  skills: true
})

const allExpanded = computed(() => Object.values(sections).every(Boolean))
const allCollapsed = computed(() => Object.values(sections).every(v => !v))

function setAllSections(expand = true) {
  Object.keys(sections).forEach(key => {
    sections[key] = expand
  })
}

function toggleSection(key) {
  sections[key] = !sections[key]
}
</script>

<template>
  <div class="about-page">
    <!-- 全域快速收合/展開控制列 (保留自原 App.vue) -->
    <div class="toolbar" aria-label="區塊收合快速控制">
      <button
        type="button"
        class="toolbar-btn"
        :disabled="allExpanded"
        @click="setAllSections(true)"
        title="展開所有區塊"
      >
        <span class="toolbar-icon">＋</span> 全部展開
      </button>
      <button
        type="button"
        class="toolbar-btn"
        :disabled="allCollapsed"
        @click="setAllSections(false)"
        title="收起所有區塊"
      >
        <span class="toolbar-icon">－</span> 全部收起
      </button>
    </div>

    <div class="profile-main">
      <!-- 學習興趣區塊 (原 InterestsSection.vue) -->
      <section class="section interests-section" aria-labelledby="interests-heading">
        <div
          class="section-header"
          :class="{ 'is-collapsed': !sections.interests }"
          @click="toggleSection('interests')"
          role="button"
          tabindex="0"
          @keydown.enter.space.prevent="toggleSection('interests')"
          :aria-expanded="sections.interests"
        >
          <div class="header-titles">
            <span class="sub-label">{{ interests.label }}</span>
            <h1 id="interests-heading" class="section-title">{{ interests.title }}</h1>
          </div>
          <button
            type="button"
            class="toggle-btn"
            :aria-label="sections.interests ? '收起學習興趣' : '展開學習興趣'"
            @click.stop="toggleSection('interests')"
          >
            <span class="toggle-text">{{ sections.interests ? '收起' : '展開' }}</span>
            <span class="toggle-icon" :class="{ 'is-collapsed': !sections.interests }">▼</span>
          </button>
        </div>

        <div class="collapse-wrapper" :class="{ 'is-open': sections.interests }">
          <div class="collapse-inner">
            <div class="section-content">
              <div class="grid-cards">
                <article v-for="item in interests.items" :key="item.id" class="card">
                  <h3 class="card-title">{{ item.title }}</h3>
                  <p class="card-desc">{{ item.desc }}</p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 目前正在學習的技能區塊 (原 SkillsSection.vue) -->
      <section class="section skills-section" aria-labelledby="skills-heading">
        <div
          class="section-header"
          :class="{ 'is-collapsed': !sections.skills }"
          @click="toggleSection('skills')"
          role="button"
          tabindex="0"
          @keydown.enter.space.prevent="toggleSection('skills')"
          :aria-expanded="sections.skills"
        >
          <div class="header-titles">
            <span class="sub-label">{{ skills.label }}</span>
            <h2 id="skills-heading" class="section-title">{{ skills.title }}</h2>
          </div>
          <button
            type="button"
            class="toggle-btn"
            :aria-label="sections.skills ? '收起技能列表' : '展開技能列表'"
            @click.stop="toggleSection('skills')"
          >
            <span class="toggle-text">{{ sections.skills ? '收起' : '展開' }}</span>
            <span class="toggle-icon" :class="{ 'is-collapsed': !sections.skills }">▼</span>
          </button>
        </div>

        <div class="collapse-wrapper" :class="{ 'is-open': sections.skills }">
          <div class="collapse-inner">
            <div class="section-content">
              <div class="skills-group">
                <div
                  v-for="cat in skills.categories"
                  :key="cat.id"
                  class="skill-category"
                >
                  <h3 class="category-title">{{ cat.title }}</h3>
                  <ul class="tag-list">
                    <li v-for="tag in cat.tags" :key="tag" class="tag">
                      {{ tag }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.section-content {
  padding-top: 2px;
}

.grid-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 16px;
}

.card {
  background: linear-gradient(180deg, #fdfbf7 0%, #f7f2e6 100%);
  border: 1px solid var(--color-border);
  border-left: 4px solid var(--color-primary);
  border-radius: 4px;
  padding: 18px;
  transition: var(--transition-smooth);
  position: relative;
}

.card:hover {
  border-color: var(--color-gold);
  border-left-color: var(--color-accent);
  box-shadow: 
    0 6px 16px rgba(10, 27, 51, 0.12),
    0 0 0 1px rgba(197, 147, 54, 0.2);
  transform: translateY(-2px);
  background: #fdfaf3;
}

.card-title {
  font-family: var(--font-family-serif);
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--color-primary-dark);
  margin-bottom: 8px;
  line-height: 1.4;
}

.card-desc {
  font-size: 0.92rem;
  color: var(--color-text-muted);
  line-height: 1.75;
  margin-bottom: 0;
  overflow-wrap: break-word;
  word-break: break-all;
}

.skills-group {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.skill-category {
  padding-bottom: 16px;
  border-bottom: 1px dashed var(--color-border);
}

.skill-category:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.category-title {
  font-family: var(--font-family-serif);
  font-size: 1rem;
  font-weight: 700;
  color: var(--color-primary-dark);
  margin-bottom: 12px;
}

.tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  list-style: none;
}

.tag {
  background: linear-gradient(180deg, #edf4f9 0%, #e1ecf5 100%);
  color: var(--color-primary-dark);
  border: 1px solid #b7cfe2;
  font-size: 0.88rem;
  padding: 4px 14px;
  border-radius: 4px;
  letter-spacing: 0.02em;
  font-weight: 500;
  box-shadow: 0 1px 3px rgba(10, 27, 51, 0.05);
  transition: var(--transition-smooth);
  cursor: default;
}

.tag:hover {
  background: var(--color-primary-dark);
  color: #fffaf0;
  border-color: var(--color-primary-dark);
  transform: translateY(-1px);
  box-shadow: 0 4px 10px rgba(10, 27, 51, 0.22);
}

@media (max-width: 600px) {
  .grid-cards {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .card {
    padding: 14px;
  }

  .tag {
    font-size: 0.82rem;
    padding: 4px 10px;
  }
}
</style>
