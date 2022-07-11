import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import "./index.css";

// library fixed
import VueGoodTablePlugin from "vue-good-table-next";
import Datepicker from '@vuepic/vue-datepicker';

//style
import "vue-good-table-next/dist/vue-good-table-next.css";
import '@vuepic/vue-datepicker/dist/main.css'

const app = createApp(App);

// style

app.use(createPinia());
app.use(router);

// app.use(AOS.init());
app.use(VueGoodTablePlugin);
app.component('Datepicker', Datepicker);

app.mount("#app");
