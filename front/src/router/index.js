import { createWebHistory, createRouter } from "vue-router";
import Home from "@/components/Home.vue";
import Login from "@/components/LoginPage.vue";
import Register from "@/components/Register.vue";
import TodoList from "@/components/TodoList.vue";
//import {store} from "../store"
 
const routes = [
    {
      path: "/grades",
      name: "Home",
      component: Home,
    },
    {
        path: "/selling",
        name: "Login",
        component: Login,
      },
      {
        path: "/Register",
        name: "Register",
        component: Register,
      },
      
    
  ];
 
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });

   router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
      console.log("vleze")
        let token = localStorage.getItem("token");

        console.log(token)
        if (!token) {
          console.log("Vika Dea nema token")
         router.replace("/login")
        } else {
          next()
        }
      }
      else{
        next()
      }
  })
  
  export default router;

