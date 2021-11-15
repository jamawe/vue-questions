import Vue from 'vue';
import Router from 'vue-router';
import QuestionIndex from './views/Questions/Index.vue';
import QuestionCreate from './views/Questions/Create.vue';
import QuestionShow from './views/Questions/Show.vue';
// import UserShow from './views/Users/Show.vue';
import Login from './views/Login.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    
    {
      path: '/',
      name: 'home',
      component: QuestionIndex,
      meta: { title: 'Question Feed' },
    },

    {
      path: '/questions/create',
      name: 'question.create',
      component: QuestionCreate,
      meta: { title: 'Create A New Question' },
    },

    // {
    //   path: '/users/:userId',
    //   name: 'user.show',
    //   component: UserShow,
    //   meta: { title: 'Profile' },
    // },

    {
      path: '/questions/:questionId',
      name: 'question.show',
      component: QuestionShow,
      meta: { title: 'Question Detail' }
    },
  ]
});
