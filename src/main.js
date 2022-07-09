import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import "./index.css";

// library fixed
import VueGoodTablePlugin from "vue-good-table-next";

//style
import "vue-good-table-next/dist/vue-good-table-next.css";

const app = createApp(App);

// style

app.use(createPinia());
app.use(router);

// app.use(AOS.init());
app.use(VueGoodTablePlugin);

app.mount("#app");
