import SButton from "./Button";
import { App } from "vue";
// 导出Button组件
export { SButton };

export default {
  install(app: App) {
    app.component(SButton.name, SButton)
  }
}