import type { Meta, StoryFn } from '@storybook/vue3'
import Logo from './global/NameDisplay.vue'

export default {
  title: 'Components/Logo',
  component: Logo,
  tags: ['autodocs'], // Важно для автоматической генерации Docs
  parameters: {
    docs: {
      description: {
        component:
          'Компонент Logo отображает анимированное имя, по буквам, с индивидуальной задержкой и кастомным цветом для определённых символов.',
      },
    },
  },
  argTypes: {
    name: {
      control: 'array',
      description: 'Массив символов, которые нужно отобразить по буквам',
    },
    letterColor: {
      control: 'color',
      description: 'Цвет букв N и P (по умолчанию #58afd1)',
    },
  },
} as Meta<typeof Logo>

const Template: StoryFn<typeof Logo> = (args) => ({
  components: { Logo },
  setup() {
    return { args }
  },
  template: '<Logo v-bind="args" />',
})

export const Default = Template.bind({})
Default.args = {
  name: [
    'N',
    'i',
    'k',
    'i',
    't',
    'a',
    ' ',
    'P',
    'a',
    'v',
    'l',
    'o',
    'v',
    's',
    'k',
    'i',
    'j',
  ],
  letterColor: '#58afd1',
}
