export interface TimelineEvent {
  title: string;
  subtitle?: string;
  details: string[];
  type: "education" | "work";
}

export const events: TimelineEvent[] = [
  {
    title: 'Морской технический лицей, г. Новороссийск',
    subtitle: 'Школа',
    details: ['11 классов, год окончания: 2020'],
    type: 'education',
  },
  {
    title: 'Бакалавриат СПбГЭТУ "ЛЭТИ"',
    subtitle: 'Образование',
    details: ['Управление в технических системах', 'Год окончания: 2024'],
    type: 'education',
  },
  {
    title: 'Магистратура СПбГЭТУ "ЛЭТИ"',
    subtitle: 'Образование',
    details: ['Информационные системы и технологии', 'Год окончания: 2026'],
    type: 'education',
  },
  {
    title: 'НИЦ СПбГЭТУ',
    subtitle: 'Работа',
    details: [
      'Программист 3 категории (Фронтенд)',
      '2023 — по настоящее время',
    ],
    type: 'work',
  },
]
