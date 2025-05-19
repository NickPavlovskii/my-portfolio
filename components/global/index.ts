import type { App } from 'vue'
import NameDisplay from './NameDisplay.vue'
import AnimatedButton from './AnimatedButton.vue'
import Tooltip from './Tooltip.vue'

const components = [
  { name: 'name-display', component: NameDisplay },
  { name: 'animated-button', component: AnimatedButton },
  { name: 'tooltip', component: Tooltip },
]

export default {
  install(app: App) {
    components.forEach(({ name, component }) => {
      app.component(name, component)
    })
  },
}
