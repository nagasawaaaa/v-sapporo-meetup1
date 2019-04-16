import Vue from 'vue'
import ja from 'vee-validate/dist/locale/ja'
import VeeValidate, { Validator } from 'vee-validate'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(VeeValidate)
Validator.localize('ja', ja)

// エラーメッセージの上書き
const customErrorMessages = {
  ja: {
    messages: {
      email: (value) => value + 'を上書きしたエラーメッセージ'
    }
  }
};
Validator.localize(customErrorMessages);

new Vue({
  render: h => h(App),
}).$mount('#app')
