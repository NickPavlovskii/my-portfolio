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
          <div style="display: flex;">
            <div style="max-width: 550px;">
              <ul>
                <li>
                  Мой основной язык программирования –
                  <strong class="tech-js">JavaScript (JS)</strong>
                </li>
                <li>
                  Глубокое знание <strong class="tech-python">Python</strong> –
                  опыт создания нейросетей и анализа данных
                </li>
                <li>
                  Навыки составления документации – уверенное владение
                  <strong class="tech-uml">UML</strong> и
                  <strong class="tech-bpmn">BPMN</strong> нотациями
                </li>
                <li>
                  Работа с веб-фреймворками – понимаю их назначение. Люблю
                  <strong class="tech-vue">Vue</strong> 2/3 (3 года опыта),
                  работал с <strong class="tech-react">React</strong> и
                  ванильным <strong class="tech-js">JS</strong> +
                  <strong class="tech-ts">TypeScript</strong>
                </li>
                <li>
                  Тестирование и разработка – опыт написания тестов и
                  использования
                  <strong class="tech-storybook">Storybook</strong>
                </li>
                <li>
                  Принципы разработки – понимаю
                  <strong class="tech-oop">ООП</strong> и
                  <strong class="tech-solid">SOLID</strong>, знаю их ценность и
                  применение
                </li>
                <li>
                  Базы данных и API – уверенное знание
                  <strong class="tech-sql">SQL</strong>,
                  <strong class="tech-nosql">NoSQL</strong> и
                  <strong class="tech-rest">REST</strong>
                </li>
                <li>
                  DevOps и управление – опыт с
                  <strong class="tech-docker">Docker</strong>,
                  <strong class="tech-jenkins">Jenkins</strong> и
                  <strong class="tech-jira">Jira</strong>
                </li>
                <li>
                  Кроссплатформенность – комфортно работаю под Windows и Linux
                </li>
                <li>
                  UI/UX-дизайн – начальные навыки, создаю эстетичные и удобные
                  интерфейсы в <strong class="tech-figma">Figma</strong>
                </li>
              </ul>
            </div>

            <SkillsChart />
          </div>

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
import SkillsChart from "../components/SkillsChart.vue";
const name = "Nikita Pavlovskij".split("");
</script>

<style scoped>
.dark .resume :deep(.apexcharts-legend-text) {
  color: white !important;
}
.resume {
  max-width: 1700px;
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
  margin-right: 1rem;
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
/* Цвета для технологий */
.tech-js,
.tech-ts {
  color: #f7df1e;
} /* Желтый для JS и TypeScript */
.tech-python {
  color: #3776ab;
} /* Синий для Python */
.tech-uml,
.tech-bpmn {
  color: #2e8b57;
} /* Зеленый для UML и BPMN */
.tech-vue {
  color: #42b983;
} /* Зеленый для Vue */
.tech-react {
  color: #61dafb;
} /* Голубой для React */
.tech-storybook {
  color: #ff4785;
} /* Розовый для Storybook */
.tech-oop,
.tech-solid {
  color: #8a2be2;
} /* Фиолетовый для ООП и SOLID */
.tech-sql,
.tech-nosql,
.tech-rest {
  color: #ff6347;
} /* Томатный для SQL, NoSQL, REST */
.tech-docker,
.tech-jenkins,
.tech-jira {
  color: #2496ed;
} /* Синий для Docker, Jenkins, Jira */
.tech-figma {
  color: #f24e1e;
} /* Оранжевый для Figma */
</style>
