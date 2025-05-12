import type { App } from "vue";
import NameDisplay from "./NameDisplay.vue";

const components = [{ name: "name-display", component: NameDisplay }];

export default {
  install(app: App) {
    components.forEach(({ name, component }) => {
      app.component(name, component);
    });
  },
};
