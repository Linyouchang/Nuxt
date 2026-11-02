<script setup>
import { profileData } from '~/data/profileData'
</script>

<template>
  <ProfileIntro
    :header="profileData.header"
    :about="profileData.about"
  />
</template>
