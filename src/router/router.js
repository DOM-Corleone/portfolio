import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home'
import Project_3 from "../views/Project3_view.vue";
import Project_2 from "../views/Project2_view.vue";
import Project_1 from "../views/Project1_view.vue";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/project_1',
        name: 'Project_1',
        component: Project_1,
    },
    {
        path: '/project_2',
        name: 'Project_2',
        component: Project_2,
    },
    {
        path: '/project_3',
        name: 'Project_3',
        component: Project_3,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
  });

  export default router;