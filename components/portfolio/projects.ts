export const PROJECTS = [
  {
    id: 100,
    type: 'web',
    title: 'сайт Портфолио ',
    description:
      'Личный сайт с проектами, таймлайном и анимациями. Вы сейчас находитесь здесь.',
    longDescription:
      'Портфолио создано как приложение на Nuxt 3. Оно демонстрирует мои проекты, таймлайн профессионального пути и интерактивные элементы. Использованы компоненты Vuetify и кастомные UI-решения. Для документации интерфейсов применялся Storybook. Сайт адаптивен и оптимизирован для SEO. Вы сейчас находитесь здесь — это мой личный проект, отображающий подход к разработке, внимательность к деталям и технический стек.',
    stack: 'Nuxt 3, TypeScript, Vuetify, SCSS, Storybook, Vite',
    framework: 'Nuxt 3',
    tags: ['Frontend', 'Nuxt', 'Vuetify', 'Storybook'],
    github: 'https://github.com/your-username/portfolio-site',
    demoUrl: 'https://zippy-souffle-ada8f2.netlify.app',
    projectUrl: '/portfolio/personal-portfolio',
    images: [],
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/your-username/portfolio-site',
        icon: 'mdi-github',
      },
    ],
  },
  {
    id: 102,
    type: 'data-science',
    title: 'Анализ данных — Стажировка в Сбере',
    description:
      'Проект по анализу и прогнозированию стабильных остатков расчётных счетов физических лиц в рамках виртуальной стажировки от Сбера.',
    longDescription:
      'В рамках виртуальной стажировки от Сбер x StudRe я провёл анализ временных рядов по объёмам расчётных счетов физических лиц. Используя Python в Google Colab, разработал визуализации и модели прогнозирования стабильных уровней остатков средств на счётах (UMP — Undefined Maturity Product). Применил библиотеки Pandas, NumPy, Seaborn и Matplotlib для анализа, очистки и визуализации данных. Выявлял устойчивые уровни на горизонте от 1 до 4 месяцев, строил графики и готовил отчёты, которые экспортировались в PDF. Работа сопровождалась получением сертификата от Сбера.',
    stack: 'Python, Pandas, Seaborn, Matplotlib, NumPy',
    framework: 'Python',
    tags: ['Data Analysis', 'Python', 'Sber'],
    github: 'https://github.com/your-username/sber-analytics-colab',
    demoUrl:
      'https://github.com/NickPavlovskii/sber/blob/main/sber_prediction.ipynb',
    projectUrl: '/portfolio/sber-data-analysis',
    images: ['/images/sber/sber1.png'],
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/your-username/sber-analytics-colab',
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
    tags: ['Frontend', 'Верстка', 'Figma'],
    github: 'https://github.com/your-username/career-week-site',
    demoUrl: 'https://career-week-demo.app',
    projectUrl: '/portfolio/career-week',
    images: [],
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/your-username/project',
        icon: 'mdi-github',
      },
      {
        name: 'Figma',
        url: 'https://www.figma.com/design/3aAPv3SZAL1qMC3YMkhnpN/СКН?node-id=0-1&p=f&t=jXrcrKHq1BjqeKir-0',
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
    stack: 'Vue 3, Vuex, Storybook, SCSS, TypeScript',
    framework: 'Vue',
    type: 'web',
    tags: ['Frontend', 'Vue', 'Тесты', 'Storybook'],
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
  {
    id: 205,
    type: 'web',
    title: 'Cafe Bill Splitter',
    description: 'Калькулятор разделения счета для кафе на Vue.',
    longDescription:
      'Приложение для удобного разделения счёта между клиентами. Можно добавить позиции, указать чаевые, округление и доли. Простая визуализация на Vue.',
    stack: 'Vue, SCSS',
    framework: 'Vue',
    tags: ['Vue', 'Calculator', 'test', 'Storybook'],
    github: 'https://github.com/NickPavlovskii/billAtTheCafe',
    demoUrl: 'https://main--regal-smakager-265371.netlify.app/',
    projectUrl: '/portfolio/cafe-bill-splitter',
    images: ['/images/portfolio/cafe-splitter.png'],
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/NickPavlovskii/billAtTheCafe',
        icon: 'mdi-github',
      },
    ],
  },
  {
    id: 201,
    type: 'web',
    title: 'CarsVue (не закончен)',
    description: 'Приложение для аренды автомобилей, реализовано на Vue.',
    longDescription:
      'CarsVue — проект по аренде автомобилей, находится в разработке. Создаётся с использованием Vue и Vuetify, предусмотрены фильтры, карточки авто и оформление заявки.',
    stack: 'Vue, Vuetify',
    framework: 'Vue',
    tags: ['Frontend', 'Vue', 'In Progress'],
    github: 'https://github.com/your-username/cars-vue',
    demoUrl: '',
    projectUrl: '/portfolio/cars-vue',
    images: ['/images/portfolio/carsvue.png'],
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/your-username/cars-vue',
        icon: 'mdi-github',
      },
    ],
  },

  {
    id: 202,
    type: 'web',
    title: 'Геоинформационное приложение (GIS)',
    description:
      'Клиент-серверное приложение для распознавания и анализа зелёных зон по аэрофотоснимкам.',
    longDescription:
      'Проект представляет собой геоинформационную систему (ГИС), разработанную для автоматического распознавания зелёных зон городской инфраструктуры на основе аэрофотоснимков. В ходе работы была реализована загрузка и привязка снимков, автоматическое определение положения камеры, построение модели местности, генерация облаков точек и последующая сегментация изображений с помощью моделей DeepForest и SegFormer.\n\n' +
      'Обработка снимков возможна как через графический интерфейс, так и через API: скрипт автоматически обрабатывает изображения и генерирует GeoTIFF слои, которые затем передаются в нейросеть и сохраняются в базу данных. Для хранения геоданных использовалась база данных PostgreSQL с расширением PostGIS, а для визуализации и управления слоями — GeoServer. В клиентской части реализована возможность интерактивного выбора слоёв и подсчёта объектов на карте с помощью инструмента DragBox.\n\n' +
      'Проект решает задачу инвентаризации зелёных зон в городской среде, соответствуя современным требованиям градостроительства и управления городской экологией.',
    stack:
      'HTML, CSS, JavaScript, Python, PostGIS, GeoTIFF, DeepForest, SegFormer, GeoServer',
    framework: 'Vanilla JS / Python API',
    tags: ['GIS', 'Диплом', 'GeoTIFF', 'Segmentation', 'PostGIS'],
    github: 'https://github.com/your-username/gis-green-zones',
    demoUrl: 'http://serv.sae.ru/',
    projectUrl: '/portfolio/gis-green-zones',
    images: ['/images/gis/GIS1.PNG', '/images/gis/GIS2.PNG'],
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/your-username/gis-green-zones',
        icon: 'mdi-github',
      },
      {
        name: 'презентация',
        url: '/images/gis/diplom.pptx',
        icon: 'mdi-file-powerpoint',
      },
      {
        name: 'Google Colab (DeepForest)',
        url: 'https://colab.research.google.com/drive/1pLbWI83H0cFK3Q7nFPboVS3NT83Jursi',
        icon: '',
      },
      {
        name: 'Google Colab (segformer)',
        url: 'https://colab.research.google.com/drive/1TGwBNqxEgxBsX81NkHdbu-0KgkG8usvm',
        icon: '',
      },
    ],
  },

  {
    id: 203,
    type: 'web',
    title: 'Тест на уровень IQ',
    description:
      'Интерактивное веб-приложение для прохождения теста на интеллект с финальной оценкой и таймером.',
    longDescription:
      'Веб-приложение, реализующее тестирование на уровень IQ. Интерфейс выполнен по макету из Figma и адаптирован под мобильные устройства. Пользователь проходит серию логических и визуальных задач, ограниченных по времени. По завершении теста система рассчитывает балл и отображает результат.\n\n' +
      'Проект разработан с использованием JavaScript и Vue.js. Включает в себя анимации переходов между вопросами, прогресс-бар, таймер и систему оценки. Данные хранятся в локальном состоянии без необходимости авторизации. Основной акцент сделан на UX и точном следовании дизайн-макету.',
    stack: 'HTML, CSS, JavaScript, Vue.js, Figma',
    framework: 'Vue',
    tags: ['Frontend', 'Vue', 'Figma', 'test', 'Storybook'],
    github: 'https://github.com/your-username/iq-test',
    demoUrl: 'https://your-domain.com/iq-test',
    projectUrl: '/portfolio/iq-test',
    images: [],
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/your-username/iq-test',
        icon: 'mdi-github',
      },
      {
        name: 'Figma макет',
        url: 'https://www.figma.com/design/CFJwGX3LknIu90CHceW0qo/Тест-на-уровень-IQ--Copy-?node-id=0-1',
        icon: 'mdi-figma',
      },
    ],
    mainFeature:
      'Интерактивный тест с таймером, системой оценки и плавным пользовательским опытом',
    features: [
      'Пошаговое прохождение вопросов с анимацией',
      'Таймер на каждый вопрос и на весь тест',
      'Финальная оценка уровня IQ',
      'Адаптивная верстка под мобильные устройства',
      'Прогресс-бар по ходу теста',
      'Данные хранятся локально (без бэкенда)',
    ],
    flow: [
      'Пользователь заходит на сайт',
      'Начинает тестирование',
      'Отвечает на вопросы один за другим',
      'Следит за временем и прогрессом',
      'Получает финальный результат и оценку IQ',
    ],
  },

  {
    id: 204,
    type: 'web',
    title: 'E-Commerce Website(не закончен)',
    description: 'Магазин с каталогом и корзиной на React.',
    longDescription:
      'Полноценный e-commerce проект: каталог товаров, фильтрация, корзина, оформление заказов. Реализован на React с использованием styled-components и Zustand.',
    stack: 'React, Styled-Components',
    framework: 'React',
    tags: ['React', 'E-Commerce'],
    github: 'https://github.com/your-username/ecommerce-react',
    demoUrl: '',
    projectUrl: '/portfolio/ecommerce-react',
    images: [],
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/your-username/ecommerce-react',
        icon: 'mdi-github',
      },
    ],
  },

  {
    id: 207,
    type: 'desktop',
    title: 'Sudoku на C#',
    description:
      'Десктопное приложение для игры в Судоку. Возможность автогенерации и проверки решений.',
    longDescription:
      'Приложение для Windows, реализующее игру "Судоку" с возможностью генерации уникальных полей разной сложности. Реализована проверка решений, сохранение и загрузка состояния, таймер, а также режим "обучения" с подсказками. Написано на C# с использованием Windows Forms.\n\n' +
      'Проект был создан для изучения алгоритмов генерации и проверки корректности судоку, а также для практики в разработке UI на C#.',
    stack: 'C#, .NET, Windows Forms',
    framework: '.NET Framework',
    tags: ['C#', 'Desktop', 'Windows Forms'],
    github: 'https://github.com/your-username/sudoku-csharp',
    demoUrl: '',
    projectUrl: '/portfolio/sudoku-csharp',
    images: [],
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/your-username/sudoku-csharp',
        icon: 'mdi-github',
      },
      {
        name: 'Скачать .exe',
        url: '/downloads/sudoku_setup.exe',
        icon: 'mdi-download',
      },
    ],
  },
  {
    id: 209,
    type: 'data-science',
    title: 'Генерация лиц с помощью GAN',
    description:
      'Нейросеть на основе GAN для генерации фотореалистичных лиц. Реализовано в Google Colab.',
    longDescription:
      'Проект представляет собой реализацию генеративной состязательной нейросети (GAN), предназначенной для создания фотореалистичных изображений лиц. Использована архитектура StyleGAN2 от NVIDIA. Обучение и генерация происходят в среде Google Colab с использованием TensorFlow и CUDA. Предусмотрена возможность настройки параметров генерации и визуализации латентного пространства.\n\n' +
      'Проект демонстрирует возможности GAN в задачах синтеза изображений, применимых в геймдеве, маркетинге и создании синтетических датасетов.',
    stack: 'Python, TensorFlow, StyleGAN2, Google Colab, CUDA',
    framework: 'TensorFlow / StyleGAN2',
    tags: ['GAN', 'Deep Learning'],

    demoUrl: '',
    projectUrl: '/portfolio/gan-face-generator',
    images: [],
    links: [
      {
        name: 'Google Colab',
        url: 'https://colab.research.google.com/drive/1jRMMI-Y37zv4xE_YuFBJ_RI0GrttXW8o',
        icon: 'mdi-google',
      },
    ],
  },
]

export const FRAMEWORKS = [
  'HTML',
  'Vue',
  'React',
  'Angular',
  'Python',
  'Java',
  'UML',
]

export const PROJECT_TYPES = [
  'web',
  'data-science',
  'desktop',
  'bot',
  'analytics',
  'hackathons',
]

export const TAG_COLORS = {
  Frontend: 'red',
  Бэкенд: 'orange',
  Vue: 'green',
  React: 'blue',
  Проекты: 'blue',
  'Data Analysis': 'green',
}

export const TYPE_COLORS = {
  web: 'green',
  'data-science': 'red',
  desktop: 'orange',
  bot: 'blue',
  analytics: 'orange',
}
