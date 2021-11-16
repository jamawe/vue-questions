<template>
  <div class="flex flex-col mx-auto">

    <!-- <div class="mt-10 mx-auto flex flex-col items-center">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-20 h-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>

      <h2 class="text-2xl">
        Laravue Questions
      </h2>
    </div> -->

    <div class="mt-10 mb-5 mx-auto p-4">
      <!-- <form action="#" @submit.prevent="submit"> -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-y-1">

          <div class="grid grid-cols-1 grid-flow-row-dense gap-y-0 w-3/4 md:mr-4">
            <h1 class="text-2xl flex items-center">Join the Laravue Questions community</h1>

            <div>
              <div class="flex items-center my-2">
                <div class="mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div class="flex items-center">Ask a question - gain knowledge</div>
              </div>
              <div class="flex items-center my-2">
                <div class="mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div class="flex items-center">Answer a question - share knowledge</div>
              </div>
              <div class="flex items-center my-2">
                <div class="mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div class="flex items-center">Earn reputation</div>
              </div>
                        </div>
            </div>

          <div class="grid grid-cols-1 gap-5 w-2/3">
            <div class="grid grid-cols-1 gap-5 bg-white rounded-sm shadow-md p-5">
              <label for="name" class="block">
                <span class="flex justify-start text-md">Display Name</span>
                <input class="mt-1 block w-full rounded-md border-gray-300 shadow-sm text-sm" type="text" name="name" id="name" v-model="form.name">
              </label>
              <label for="email" class="block">
                <span class="flex justify-start text-md">Email address</span>
                <input class="mt-1 block w-full rounded-md border-gray-300 shadow-sm text-sm" type="email" name="email" id="email" v-model="form.email">
              </label>
              <label for="password" class="block">
                <span class="flex justify-start text-md">Password</span>
                <input class="mt-1 block w-full rounded-md border-gray-300 shadow-sm text-sm" type="password" name="password" id="password" v-model="form.password">
              </label>
              <label for="password-confirm" class="block">
                <span class="flex justify-start text-md">Confirm Password</span>
                <input class="mt-1 block w-full rounded-md border-gray-300 shadow-sm text-sm" type="password" name="password-confirm" id="password-confirm" v-model="form.password_confirmation">
              </label>
              
              <div>
                <button @click="submitRegister" class="bg-gray-200 h-10 mt-2 px-4 py-1 w-full rounded-md text-sm font-bold">
                  Sign Up
                </button>
              </div>
            </div>

                    <div>
                      <h4 class="text-sm">
                        Already have an account? 
                        <router-link to="/login" class="text-blue-600">Log In</router-link>
                      </h4>
                    </div>
          </div>

        </div>
      <!-- </form> -->
    </div>

    <!-- <div>
      <h4 class="text-sm">
        Already have an account? 
        <router-link to="/login" class="text-blue-600">Log In</router-link>
      </h4>
    </div> -->
  </div>
</template>

<script>
  // import axios from 'axios'
  // import { mapActions } from 'vuex'

  export default {
    name: 'Signup',

    data () {
      return {
        form: {
          name: '',
          email: '',
          password: '',

          password_confirmation: '',
        }
      }
    },

    methods: {
      // ...mapActions({
      //   signIn: 'signIn'
      // }),

      async submitRegister() {
        await this.$store.dispatch('register', this.form);

        this.$router.replace({ name: 'home' });
      }
    }
  }
</script>