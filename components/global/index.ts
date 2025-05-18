import type { App } from 'vue'
import NameDisplay from './NameDisplay.vue'
import AnimatedButton from './AnimatedButton.vue'

const components = [
  { name: 'name-display', component: NameDisplay },
  { name: 'animated-button', component: AnimatedButton },
]

export default {
  install(app: App) {
    components.forEach(({ name, component }) => {
      app.component(name, component)
    })
  },
}
