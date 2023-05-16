//import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import bootstrap from "bootstrap/dist/js/bootstrap.min.js"
// import jQuery from 'jquery'
// import popper from '@popperjs/core'

const app = createApp(App)

app.use(router)
// app.use(jQuery)
// app.use(popper)
app.use(bootstrap)

app.mount('#app')
