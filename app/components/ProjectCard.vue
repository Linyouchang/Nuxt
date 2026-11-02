<script setup>
defineProps({
  project: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <article class="card project-card">
    <!-- 圖片區塊：有網址則為超連結，無網址時為純圖片展示 -->
    <a
      v-if="project.url"
      :href="project.url"
      target="_blank"
      rel="noopener noreferrer"
      class="project-img-link"
      :aria-label="project.ariaLabel || `前往${project.title}網站`"
    >
      <div class="project-media">
        <img
          :src="project.imgSrc"
          :alt="project.alt || project.title"
          class="project-img"
          loading="lazy"
        />
      </div>
    </a>
    <div v-else class="project-img-link no-link">
      <div class="project-media">
        <img
          :src="project.imgSrc"
          :alt="project.alt || project.title"
          class="project-img"
          loading="lazy"
        />
      </div>
    </div>

    <!-- 內容資訊區塊 -->
    <div class="project-info">
      <h3 class="card-title">
        <a
          v-if="project.url"
          :href="project.url"
          target="_blank"
          rel="noopener noreferrer"
          class="project-title-link"
        >
          {{ project.title }}
        </a>
        <span v-else class="project-title-text">{{ project.title }}</span>
      </h3>

      <!-- 說明文字（若有則顯示） -->
      <p v-if="project.desc" class="project-desc-text">
        {{ project.desc }}
      </p>

      <!-- 連結（有網址時才顯示，無網址時不顯示） -->
      <p v-if="project.url" class="card-desc">
        <a
          :href="project.url"
          target="_blank"
          rel="noopener noreferrer"
          class="project-link"
        >
          {{ project.url }}
        </a>
      </p>
    </div>
  </article>
</template>

<style scoped>
.project-card {
  display: flex;
  flex-direction: column;
  padding: 16px;
  background: linear-gradient(180deg, #fdfbf7 0%, #f5efe3 100%);
  border: 1px solid var(--color-border);
  border-left: 4px solid var(--color-primary);
  border-radius: 4px;
  transition: var(--transition-smooth);
}

.project-card:hover {
  border-color: var(--color-gold);
  border-left-color: var(--color-accent);
  box-shadow: 
    0 8px 20px rgba(10, 27, 51, 0.14),
    0 0 0 1px rgba(197, 147, 54, 0.2);
  transform: translateY(-2px);
}

.project-img-link {
  display: block;
  overflow: hidden;
  border-radius: 3px;
  border: 2px solid var(--color-primary-light);
  margin-bottom: 12px;
  background-color: var(--color-primary-dark);
  text-decoration: none;
  box-shadow: 0 3px 8px rgba(10, 27, 51, 0.15);
  transition: border-color 0.25s ease, box-shadow 0.25s ease;
}

a.project-img-link:hover {
  border-color: var(--color-accent);
  box-shadow: 0 4px 12px rgba(192, 54, 34, 0.25);
}

.project-img-link.no-link {
  cursor: default;
}

.project-media {
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
}

.project-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1), filter 0.4s ease;
}

.project-card:hover .project-img {
  transform: scale(1.04);
}

.project-info {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.card-title {
  font-family: var(--font-family-serif);
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--color-primary-dark);
  margin-bottom: 6px;
  line-height: 1.4;
}

.project-title-link {
  color: var(--color-primary-dark);
  text-decoration: none;
  font-family: var(--font-family-serif);
  font-weight: 700;
  transition: var(--transition-smooth);
}

.project-title-link:hover {
  color: var(--color-accent);
}

.project-title-text {
  color: var(--color-primary-dark);
  font-family: var(--font-family-serif);
  font-weight: 700;
}

.project-desc-text {
  font-size: 0.88rem;
  color: var(--color-text-main);
  line-height: 1.6;
  margin-bottom: 10px;
}

.card-desc {
  font-size: 0.88rem;
  color: var(--color-text-muted);
  line-height: 1.6;
  margin-bottom: 0;
  margin-top: auto;
  overflow-wrap: break-word;
  word-break: break-all;
}

.project-link {
  color: var(--color-primary);
  text-decoration: underline;
  text-underline-offset: 3.5px;
  text-decoration-color: var(--color-gold);
  transition: var(--transition-smooth);
  word-break: break-all;
  font-size: 0.88rem;
}

.project-link:hover {
  color: var(--color-accent);
  text-decoration-color: var(--color-accent);
}

@media (max-width: 600px) {
  .project-card {
    padding: 14px;
  }
}
</style>

