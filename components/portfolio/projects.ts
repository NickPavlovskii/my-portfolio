export const PROJECTS = [
  {
    id: 102,
    type: 'data-science',
    title: 'Анализ данных — Стажировка в Сбере',
    description:
      'Проект в рамках стажировки: анализ базы данных, визуализация, создание отчётов и прогнозирование в Google Colab на Python.',
    longDescription:
      'В рамках стажировки в Сбере я работал с корпоративной базой данных, используя Google Colab и Python. Применял библиотеки Pandas, Matplotlib и Seaborn для анализа, визуализации и обработки данных. Создавал интерактивные графики и дашборды, сегментировал пользователей, предсказывал поведение на основе статистики. Отчёты экспортировались в PDF и передавались кураторам проекта.',
    stack: 'Python, Google Colab, Pandas, Seaborn, Matplotlib, NumPy',

    framework: 'Python',
    tags: ['Data Analysis', 'Python'],
    github: 'https://github.com/your-username/sber-analytics-colab',
    demoUrl: '',
    projectUrl: '/portfolio/sber-data-analysis',
    images: ['/images/sber/sber1.png'],
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/your-username/project',
        icon: 'mdi-github',
      },
    ],
  },
  {
    id: 103,
    title: 'Сайт карьерной недели',
    description:
      'Информационный сайт для карьерного мероприятия: адаптивный дизайн, полностью реализованный вручную по собственному макету в Figma.',
    longDescription:
      'Сайт был разработан специально для Карьерной недели. Я самостоятельно разработал UI/UX-дизайн в Figma (доступен по ссылке ниже) и сверстал весь сайт с нуля на чистом HTML, CSS и JavaScript. Включал адаптивность, интерактивные элементы и структуру под SEO. Использовался без фреймворков, как учебный/показательный проект.',
    stack: 'HTML, CSS, JavaScript, Figma',
    framework: 'Без фреймворка',
    type: 'web',
    tags: ['Фронтенд', 'Верстка', 'Figma'],
    github: 'https://github.com/your-username/career-week-site',
    demoUrl: 'https://career-week-demo.app',
    projectUrl: '/portfolio/career-week',
    images: ['/images/career-week/screen1.png'],
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/your-username/project',
        icon: 'mdi-github',
      },
      {
        name: 'Figma',
        url: 'https://www.figma.com/file/xxx',
        icon: 'mdi-figma',
      },
    ],
  },

  {
    id: 99,
    title: 'KinOx',
    description:
      'KinOx — современный сайт для поиска и просмотра фильмов. Реализован на Vue 3, поддерживает тесты и Storybook.',
    longDescription:
      'KinOx — это онлайн-кинотеатр нового поколения, разработанный на базе Vue 3. Пользователь может найти и отфильтровать фильмы по различным параметрам (жанры, рейтинг, год). Реализована система авторизации, добавление фильмов в избранное и просмотр полной информации о фильме с использованием API от TMDB. Под капотом — Pinia, SCSS, тестирование через Vitest и стилизованные UI-компоненты, созданные с учетом Storybook.',
    mainFeature:
      'Полноценный каталог фильмов с фильтрами, авторизацией, избранным и красивым UI',
    features: [
      'Поиск и фильтрация фильмов',
      'Авторизация пользователей',
      'Добавление фильмов в избранное',
      'Адаптивный интерфейс',
      'Тесты на jest',
      'Storybook для UI компонентов',
    ],
    flow: [
      'Пользователь заходит на сайт',
      'Выбирает фильтр или вводит запрос',
      'Просматривает карточки фильмов',
      'Открывает подробности',
      'Добавляет в избранное',
    ],
    stack: 'Vue 3, Vuex, Storybook, SCSS',
    framework: 'Vue',
    type: 'web',
    tags: ['Фронтенд', 'Vue', 'Тесты', 'Storybook'],
    github: 'https://github.com/your-username/kinox',
    demoUrl: 'https://singular-scone-582df2.netlify.app/',
    projectUrl: '/portfolio/kinox',
    images: [
      '/images/kinox/kinox1.PNG',
      '/images/kinox/kinox2.PNG',
      '/images/kinox/kinox3.PNG',
      '/images/kinox/kinox4.PNG',
      '/images/kinox/kinox5.PNG',
      '/images/kinox/kinox6.PNG',
    ],
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/your-username/project',
        icon: 'mdi-github',
      },
    ],
  },
]

export const FRAMEWORKS = ['Vue', 'React', 'Angular', 'Python', 'Java', 'UML']

export const PROJECT_TYPES = [
  'web',
  'data-science',
  'bot',
  'analytics',
  'hackathons',
]

export const TAG_COLORS = {
  Фронтенд: 'red',
  Бэкенд: 'orange',
  Проекты: 'blue',
  'Data Analysis': 'green',
}

export const TYPE_COLORS = {
  web: 'red',
  'data-science': 'green',
  hackathons: 'yellow',
  bot: 'blue',
  analytics: 'orange',
}
