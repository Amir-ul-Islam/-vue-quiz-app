import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
   // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
   history: createWebHistory(),
   routes: [
      { path: "/", name: "home", component: () => import("../view/Home.vue") },
      {
         path: "/quizView/:id",
         name: "quizView",
         component: () => import("../view/QuizView.vue"),
      },
      // {
      //    path: "/",
      //    name: "home",
      //    component: () => import("../view/Home.vue"),
      // },
   ],
});

export default router;

// import { createRouter, createWebHistory } from "vue-router";

// const router = createRouter({
//    history: createWebHistory(import.meta.env.BASE_URL),
//    routes: [
//       {
//          path: "/",
//          name: "home",
//          component: () => import("../view/Home.vue"),
//       }
//    ],
// });

// export default router;
