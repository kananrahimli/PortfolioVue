import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BaseContainer from './components/BaseContainer.vue'
import BaseCard from './components/BaseCard.vue'
import BaseDialog from './components/BaseDialog.vue'
import BaseSpinner from './components/BaseSpinner.vue'
import Title from './components/Title.vue'

const app=createApp(App);
app.component('base-container',BaseContainer);
app.component('base-card',BaseCard)
app.component('base-title',Title)
app.component('base-dialog',BaseDialog)
app.component('base-spinner',BaseSpinner)
app.use(store).use(router).mount('#app')
