<script setup>
const isOpen = ref(true)

defineProps({
  header: {
    type: Object,
    required: true
  },
  about: {
    type: Object,
    required: true
  }
})

function toggle() {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <div class="profile-intro">
    <!-- 頂部個人名片標題區 (原 ProfileHeader) -->
    <header class="profile-header">
      <WaveCrest />
      <div class="avatar-badge" aria-label="個人標誌">{{ header.avatar }}</div>
      <h1 class="name">{{ header.name }}</h1>
      <p class="tagline">{{ header.tagline }}</p>
      <WaveDivider />
    </header>

    <!-- 核心自我介紹與收合互動 (原 AboutSection) -->
    <section class="section about-section" aria-labelledby="about-heading">
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
          <span class="sub-label">{{ about.label }}</span>
          <h2 id="about-heading" class="section-title">{{ about.title }}</h2>
        </div>
        <button
          type="button"
          class="toggle-btn"
          :aria-label="isOpen ? '收起自我介紹' : '展開自我介紹'"
          @click.stop="toggle"
        >
          <span class="toggle-text">{{ isOpen ? '收起' : '展開' }}</span>
          <span class="toggle-icon" :class="{ 'is-collapsed': !isOpen }">▼</span>
        </button>
      </div>

      <div class="collapse-wrapper" :class="{ 'is-open': isOpen }">
        <div class="collapse-inner">
          <div class="section-content">
            <p v-for="(paragraph, index) in about.paragraphs" :key="index">
              {{ paragraph }}
            </p>
            <div class="intro-actions">
              <NuxtLink to="/about" class="action-btn primary">
                關於我（學習興趣與技能） →
              </NuxtLink>
              <NuxtLink to="/projects" class="action-btn secondary">
                瀏覽作品介紹 →
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.profile-header {
  text-align: center;
  padding: 14px 10px 26px;
  position: relative;
}

.avatar-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  margin-bottom: 16px;
  background: linear-gradient(135deg, #c73824 0%, #aa2b1a 100%);
  color: #fffaf0;
  font-family: var(--font-family-serif);
  font-size: 34px;
  font-weight: 700;
  border-radius: 10px;
  border: 2px solid #fffaf0;
  box-shadow: 
    0 0 0 3px #c73824,
    0 0 0 5px rgba(18, 51, 92, 0.18),
    0 6px 14px rgba(170, 43, 26, 0.35);
  user-select: none;
  transform: rotate(-2deg);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.avatar-badge:hover {
  transform: rotate(0deg) scale(1.05);
  box-shadow: 
    0 0 0 3px #c73824,
    0 0 0 6px rgba(18, 51, 92, 0.25),
    0 8px 18px rgba(170, 43, 26, 0.45);
}

.name {
  font-family: var(--font-family-serif);
  font-size: 2.25rem;
  font-weight: 700;
  color: var(--color-primary-dark);
  letter-spacing: 0.18em;
  margin-bottom: 8px;
  text-shadow: 
    1px 1px 0 rgba(197, 147, 54, 0.35),
    2px 2px 0 rgba(18, 51, 92, 0.08);
}

.tagline {
  font-size: 0.95rem;
  color: var(--color-text-muted);
  letter-spacing: 0.08em;
  margin-bottom: 22px;
  font-weight: 500;
}

.section-content {
  padding-top: 2px;
}

.section-content p {
  color: var(--color-text-main);
  margin-bottom: 14px;
  text-align: justify;
}

.section-content p:last-child {
  margin-bottom: 0;
}

.intro-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 20px;
  padding-top: 16px;
  border-top: 1px dashed var(--color-border);
}

.action-btn {
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 600;
  padding: 8px 16px;
  border-radius: 4px;
  transition: var(--transition-smooth);
}

.action-btn.primary {
  background-color: var(--color-primary);
  color: #fffaf0;
  border: 1px solid var(--color-primary);
}

.action-btn.primary:hover {
  background-color: var(--color-primary-light);
  border-color: var(--color-primary-light);
  box-shadow: 0 3px 8px rgba(18, 51, 92, 0.22);
  transform: translateY(-1px);
}

.action-btn.secondary {
  background-color: var(--bg-tag);
  color: var(--color-primary);
  border: 1px solid var(--color-border-wave);
}

.action-btn.secondary:hover {
  background-color: var(--color-primary);
  color: #fffaf0;
  border-color: var(--color-primary);
  transform: translateY(-1px);
}

@media (max-width: 600px) {
  .name {
    font-size: 1.75rem;
    letter-spacing: 0.12em;
  }

  .tagline {
    font-size: 0.88rem;
    line-height: 1.5;
  }
}
</style>

