<template>
  <name-display :name="name" letterColor="#c7005f" />
  <div class="resume">
    <h1 class="title">Резюме</h1>
    <p class="subtitle">Моё резюме, где описан опыт, навыки и всё остальное</p>
    <div class="container grid grid-cols-1 lg:grid-cols-2 mt-8 md:mt-12 gap-4">
      <div class="left">
        <img src="../assets/img/my-photo/photo.jpg" alt="Я" class="photo" />
        <img src="../assets/img/my-photo/photo4.jpg" alt="Я" class="photo" />
        <p class="caption">Привет, это я!</p>
      </div>

      <div class="right">
        <div class="mr-15">
          <h2>Никита Павловский</h2>
          <p class="aka">aka niklad<br /></p>
          <p class="position">я - веб-разработчик</p>
          <a
            href="/resume.pdf"
            target="_blank"
            class="btn"
            style="display: inline-flex; align-items: center; gap: 8px"
          >
            <v-img width="15" height="15" :src="downloadIcon" alt="PDF icon" />
            Резюме в PDF
          </a>
        </div>
        <div class="">
          <h3>
            Что я умею – мои <span class="highlight hard">hard-skills</span>
          </h3>
          <ul>
            <li>Мой основной ЯП – JS</li>
            <li>Хорошо знаю Python, работаю на Java(8+)</li>
            <li>Работал с React, Vue, Svelte</li>
            <li>Знаю SQL и NoSQL, ORM, REST</li>
            <li>Опыт с Docker, CI/CD, Ansible, Jenkins</li>
            <li>Работаю под Windows и Linux</li>
            <li>UI/UX, Figma, проектирование интерфейсов</li>
          </ul>

          <h3>Какой я – мои <span class="highlight soft">soft-skills</span></h3>
          <ul>
            <li>Люблю пробовать новое, следить за трендами</li>
            <li>Отлично владею русским, знаю пунктуацию и орфографию</li>
            <li>Средний английский – читаю, понимаю, общаюсь</li>
            <li>Умею быстро принимать решения</li>
            <li>Легко адаптируюсь, ищу нестандартные решения</li>
            <li>Многозадачность, системное мышление</li>
            <li>Слежу за результатами и целями</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import downloadIcon from "@/assets/img/download-icon.svg";
const name = "Nikita Pavlovskij".split("");
</script>

<style scoped>
.resume {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
  color: #333;
}
.title {
  text-align: center;
  margin-bottom: 0.25rem;
}
.subtitle {
  text-align: center;
  margin-bottom: 2rem;
  color: #666;
}
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}
.left {
  flex: 1 1 300px;
  text-align: center;
}
.right {
  display: flex;
}
.photo {
  width: 100%;
  max-width: 300px;
  margin-bottom: 1rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
.caption {
  font-style: italic;
  color: #999;
}
.aka {
  font-style: italic;
  color: #777;
  margin-bottom: 1rem;
}
.position {
  font-size: 1.25rem;
  margin-bottom: 1rem;
}
.btn {
  display: flex;
  background-color: #e91e63;
  color: white;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  text-decoration: none;
}
.btn:hover {
  background-color: #c2185b;
}
h3 {
  margin-top: 2rem;
}
ul {
  padding-left: 1.25rem;
  margin-top: 0.5rem;
}
li {
  margin-bottom: 0.5rem;
}
.highlight.hard {
  color: #e91e63;
}
.highlight.soft {
  color: #673ab7;
}
</style>
