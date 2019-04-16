<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <ValidateInput
      @input-email="getChildInput"
      @input-tel="getChildInput"
      @input-min-price="getChildInput"
    />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ValidateInput from './components/ValidateInput.vue'

export default {
  name: 'app',
  data () {
    return {
      email: '',
      tel: '',
      minPrice: 0
    }
  },
  components: {
    HelloWorld,
    ValidateInput
  },
  methods: {
    getChildInput(data) {
      this[data.name] = data.value
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
