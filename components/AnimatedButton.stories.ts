import type { Meta, StoryFn } from '@storybook/vue3'
import AnimatedButton from './global/AnimatedButton.vue'

export default {
  title: 'Components/AnimatedButton',
  component: AnimatedButton,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'FancyButton — это настраиваемая кнопка с эффектом прорисовки границ при наведении. Поддерживает кастомные цвета и толщину рамки.',
      },
    },
  },
  argTypes: {
    color: {
      control: 'color',
      description: 'Основной цвет границы и текста кнопки',
      table: {
        defaultValue: { summary: 'red' },
      },
    },
    hoverColor: {
      control: 'color',
      description: 'Цвет при наведении (граница и текст)',
      table: {
        defaultValue: { summary: '#007bff' },
      },
    },
    borderWidth: {
      control: 'text',
      description: 'Толщина рамки (например, 4px)',
      table: {
        defaultValue: { summary: '4px' },
      },
    },
  },
} as Meta<typeof AnimatedButton>

const Template: StoryFn<typeof AnimatedButton> = (args) => ({
  components: { AnimatedButton },
  setup() {
    return { args }
  },
  template: '<AnimatedButton v-bind="args">Click Me</AnimatedButton>',
})

export const Default = Template.bind({})
Default.args = {
  color: 'red',
  hoverColor: '#007bff',
  borderWidth: '4px',
}
