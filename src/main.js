import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'


// Import the functions you need from the SDKs you need




loadFonts()

createApp(App)
  .use(router)
  .use(vuetify)
  .mount('#app')
