<template>
  <div class="contact-item">
    <h3 class="contact-item__label">{{ label }}</h3>
    <a
      target="_blank"
      class="contact-item__link"
      :href="link"
    >
      <v-img
        :src="icon"
        alt=""
        class="contact-item__icon"
      />
      <span class="contacts__link">{{ text }}</span>
    </a>
  </div>
</template>

<script setup>
  defineProps({
    icon: String,
    label: String,
    link: String,
    text: String,
  })
</script>

<style scoped>
  .contact-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    margin: 0 1rem;
    max-width: 1536px;
    gap: 0.5rem;
    font-family: 'Montserrat', sans-serif;
  }
  .contacts__link {
    text-decoration: none;
    border-bottom: 1px solid #00c4b4;
    display: inline-flex;
    align-items: center;
    font-size: 1rem;
  }

  .contact-item__link {
    color: teal;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1rem;
    word-break: break-word;
  }

  .contact-item__icon {
    width: 24px;
    height: 24px;
  }
</style>
