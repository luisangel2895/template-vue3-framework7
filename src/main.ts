import { createApp } from 'vue';
import Framework7 from 'framework7/lite-bundle';
import Framework7Vue, { registerComponents } from 'framework7-vue/bundle';
import App from './App.vue';
import router from './router';
import store from './store';

// Styles
import './styles/framework7.css';
import './styles/styles.scss';

// Init F7-Vue Plugin
Framework7.use(Framework7Vue);

// Init App
const app = createApp(App);

// Register all Framework7 Vue components
registerComponents(app);

app.use(store).use(router).mount('#app');
