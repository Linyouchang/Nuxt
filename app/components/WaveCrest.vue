<template>
  <div class="wave-crest-badge" aria-hidden="true">
    <svg class="hokusai-wave-icon" viewBox="0 0 120 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 34 C20 34, 30 20, 48 20 C62 20, 68 28, 80 28 C90 28, 96 8, 106 8 C112 8, 116 16, 120 20 L120 36 L0 36 Z" fill="var(--color-primary-light)" fill-opacity="0.18"/>
      <path d="M0 36 C18 36, 26 24, 42 24 C56 24, 62 32, 76 32 C88 32, 94 14, 106 14 C112 14, 116 22, 120 26" stroke="var(--color-primary)" stroke-width="2.4" stroke-linecap="round"/>
      <path d="M94 14 C98 6, 104 2, 110 2 C113 2, 114 5, 112 8 C108 11, 102 13, 96 14" stroke="var(--color-primary)" stroke-width="2" stroke-linecap="round"/>
      <circle cx="108" cy="2" r="2.5" fill="var(--color-accent)"/>
      <circle cx="42" cy="22" r="1.5" fill="var(--color-gold)"/>
      <circle cx="76" cy="30" r="1.5" fill="var(--color-wave-pale)"/>
    </svg>
  </div>
</template>

<style scoped>
.wave-crest-badge {
  display: flex;
  justify-content: center;
  margin-bottom: 8px;
}

.hokusai-wave-icon {
  width: 96px;
  height: 30px;
  filter: drop-shadow(0 2px 4px rgba(18, 51, 92, 0.15));
}
</style>

