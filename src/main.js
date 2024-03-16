import { createApp } from 'vue';
import { createPinia } from 'pinia';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import CKEditor from '@ckeditor/ckeditor5-vue';

import 'bootstrap/scss/bootstrap.scss';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueAxios, axios);
app.use(CKEditor);
app.component('VueLoading', Loading);

app.mount('#app');
