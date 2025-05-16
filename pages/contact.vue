<template>
  <name-display
    letterColor="#ffc107"
    :name="name"
  />
  <contact-section />
</template>

<script setup lang="ts">
  import contactSection from '~/components/contact/contactSection.vue'
  const name = 'Nikita Pavlovskij'.split('')
</script>

<style scoped>
  .contacts {
    margin: 0 auto;
    padding: 2rem;
    text-align: center;
    font-family: Arial, sans-serif;
  }

  .contacts__subtitle {
    font-size: 1rem;
    color: #666;
    margin-bottom: 2rem;
  }

  .contacts__section {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
  }

  .contacts__item {
    max-width: 1536px;
    flex: 1;
    margin: 0 1rem;
  }

  .contacts__item h3 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }

  .contacts__link {
    color: #000;
    text-decoration: none;
    border-bottom: 1px solid #00c4b4;
    display: inline-flex;
    align-items: center;
    font-size: 1rem;
  }

  .contacts__icon {
    margin-right: 0.5rem;
  }

  .contacts__divider {
    border: 0;
    border-top: 1px solid #e0e0e0;
    margin: 2rem 0;
  }

  @media (max-width: 768px) {
    .contacts__section {
      flex-direction: column;
    }

    .contacts__item {
      margin-bottom: 1.5rem;
    }
  }
</style>
