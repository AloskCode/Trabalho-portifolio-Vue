import { createRouter, createWebHistory } from "vue-router";
import home from "../views/home.vue";
import contatos from "../views/contatos.vue";
import sobre from "../views/sobre.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: home,
    },
    
    {
      path: "/contatos",
      name: "contatos",
      component: contatos,
    },

    {
      path: "/sobre",
      name: "sobre",
      component: sobre,
    },
  ],
});

export default router;
