<template>
  <div class="flex flex-col mx-auto">

    <div class="mt-10 mx-auto flex flex-col items-center">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-20 h-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>

      <h2 class="text-2xl">
        Laravue Questions
      </h2>
    </div>

    <div class="my-5 mx-auto p-4 bg-white rounded-sm shadow-md">
      <!-- <form action="#" @submit.prevent="submit"> -->
        <div class="grid grid-cols-1 gap-5">

            <label for="email" class="block">
              <span class="flex justify-start text-md">Email address</span>
              <input class="mt-1 block rounded-md border-gray-300 shadow-sm" type="email" name="email" id="email" v-model="form.email">
            </label>

            <label for="password" class="block">
              <span class="flex justify-start text-md">Password</span>
              <input class="mt-1 block rounded-md border-gray-300 shadow-sm" type="password" name="password" id="password" v-model="form.password">
            </label>
            

          <div>
            <button @click="submitLogin" class="bg-gray-200 h-8 px-4 py-1 w-full rounded-full text-sm font-bold">
              Log In
            </button>
          </div>

        </div>
      <!-- </form> -->
    </div>
    <div>
      <h4 class="text-sm">
        Don't have an account? 
        <router-link to="/signup" class="text-blue-600">Sign up</router-link>
      </h4>
    </div>
  </div>
</template>

<script>
  // import axios from 'axios'
  import { mapActions } from 'vuex'

  export default {
    name: 'Login',

    data () {
      return {
        form: {
          email: '',
          password: '',
        }
      }
    },

    methods: {
      ...mapActions({
        signIn: 'signIn'
      }),

      async submitLogin() {
        await this.$store.dispatch('signIn', this.form);

        this.$router.replace({ name: 'home' });
      }
    }
  }
</script>