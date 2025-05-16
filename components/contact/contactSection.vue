<template>
  <section class="contacts">
    <h2 class="contacts__title">Контакты</h2>
    <p class="contacts__subtitle">
      Актуальные способы связаться со мной по любому вопросу
    </p>
    <div class="contacts__grid">
      <contact-item
        label="Написать на почту"
        link="mailto:o_onikldo_o@list.ru"
        text="o_onikldo_o@list.ru"
        :icon="mailIcon"
      />
      <contact-item
        label="Написать в ТГ"
        link="https://t.me/N1klad"
        text="t.me/N1klad"
        :icon="tgIcon"
      />
      <contact-item
        label="Написать VK"
        link="https://vk.com/o_0niklad0_o"
        text="vk.com/o_0niklad0_o"
        :icon="vkIcon"
      />
    </div>
    <hr />
    <div class="contacts__grid mt-10">
      <contact-item
        label="GitHub"
        link="https://github.com/NickPavlovskii"
        text="github.com/NickPavlovskii"
        :icon="githubIcon"
      />
      <contact-item
        label="Gitlab"
        link="https://gitlab.com/NickPavlovskii"
        text="gitlab.com/NickPavlovskii"
        :icon="gitlabIcon"
      />
    </div>
  </section>
</template>

<script setup>
  import ContactItem from './ContactItem.vue'
  import mailIcon from '../assets/img/social/mail.svg'
  import tgIcon from '../assets/img/social/tg.svg'
  import vkIcon from '../assets/img/social/vk.svg'
  import githubIcon from '../assets/img/social/github.svg'
  import gitlabIcon from '../assets/img/social/gitlab.svg'
</script>

<style scoped>
  .contacts {
    padding: 2rem;
    text-align: center;
  }

  .contacts__title {
    font-family: 'Montserrat', sans-serif;
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 0.2rem;
  }

  .contacts__subtitle {
    font-family: 'Montserrat', sans-serif;
    font-size: 0.95rem;
    color: #555;
    margin-bottom: 2rem;
  }

  .contacts__grid {
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    margin-bottom: 2rem;
    align-items: center;
    justify-content: center;
  }
</style>
