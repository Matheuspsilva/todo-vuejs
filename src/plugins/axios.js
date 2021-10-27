import Vue from 'vue'
import axios from 'axios'

// axios.defaults.baseURL = 'http://127.0.0.1:8000/api/'
axios.defaults.baseURL = 'http://127.0.0.1:3000/'

Vue.use({
  install(Vue){
    Vue.prototype.$http = axios
  }
})
