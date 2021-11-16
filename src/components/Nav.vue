<template>
  <div class="bg-white h-12 px-4 flex items-center justify-center border-b border-gray-300 shadow-sm">

    <!-- <div class="flex items-center w-full"> -->
    <div class="flex items-center w-11/12">
      <div class="w-1/3">
        <div class="flex items-center">

          <router-link to="/" class="flex text-md mr-4">
            <div class="mr-1">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
              </svg>
            </div>
            Laravue<span class="font-bold">Questions</span>
          </router-link>

          <router-link to="/about" class="text-sm mr-4">
            About
          </router-link>
          <!-- <div class="ml-2 relative">
            <div class="absolute text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-5 h-5 mt-2 ml-2" fill="currentColor">
                <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
              </svg>
            </div>
            <input type="text" name="search" class="w-56 pl-8 bg-gray-200 border-gray-300 focus:border-gray-400 focus:shadow-outline focus:ring-1 ring-gray-500 focus:ring-gray-500 focus:ring-opacity-50 cursor-text h-8 rounded-full focus:outline-none focus:shadow-outline text-sm" placeholder="Search...">
          </div> -->
        </div>
      </div>
      
      <div class="w-1/3">
        <div class="ml-2 relative">
          <div class="absolute text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-5 h-5 mt-2 ml-2" fill="currentColor">
              <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
            </svg>
          </div>
          <input type="text" name="search" class="w-full pl-8 bg-gray-200 border-gray-300 focus:border-gray-400 focus:shadow-outline focus:ring-1 ring-gray-500 focus:ring-gray-500 focus:ring-opacity-50 cursor-text h-8 rounded-sm focus:outline-none focus:shadow-outline text-sm" placeholder="Search...">
        </div>
      </div>

      <div class="w-1/3 flex justify-end items-center h-full">
      
        <template v-if="!authenticated">
          <div class="flex justify-end">
            <router-link to="/login">
              <button
                class="bg-gray-200 h-8 mr-4 px-4 py-1 rounded-sm text-sm font-bold">
                Login
              </button>
            </router-link>
            <router-link to="/signup">
              <button
                class="bg-gray-200 dark:bg-gray-800 h-8 mr-4 px-4 py-1 rounded-sm text-sm font-bold">
                Sign up
              </button>
            </router-link>
          </div>
        </template>

        <template v-if="authenticated">
          <!-- <router-link :to="'/users/' + authUser.data.user_id" class="px-6 h-full flex items-center">
            <img src="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg" alt="Profile Image"  class="w-8 h-8 object-cover rounded-full">
          </router-link> -->
          <router-link to="/" class="px-6 mr-4 h-sm flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="fill-current w-6 h-6">
              <path d="M22.6 11l-9.9-9c-.4-.4-1.1-.4-1.5 0l-9.9 9c-.3.3-.5.8-.3 1.2.2.5.6.8 1.1.8h1.6v9c0 .4.3.6.6.6h5.4c.4 0 .6-.3.6-.6v-5.5h3.2V22c0 .4.3.6.6.6h5.4c.4 0 .6-.3.6-.6v-9h1.6c.5 0 .9-.3 1.1-.7.3-.5.2-1-.2-1.3zm-2.5-8h-4.3l5 4.5V3.6c0-.3-.3-.6-.7-.6z"/>
            </svg>
          </router-link>
          <a href="#" @click.prevent="signOut">Sign out</a>
        </template>

        <!-- <router-link to="/" class="px-6 h-full flex items-center"> -->
          <span @click="toggleTheme" class="cursor-pointer">
            <template v-if="theme === 'light'">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            </template>

            <template v-else>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </template>
          </span>
        <!-- </router-link> -->
      </div>
      
      <!-- <template v-if="authenticated">
        <div class="w-1/4 flex justify-end">
          <router-link to="/questions/create">
            <button
              class="bg-gray-200 h-8 ml-2 px-4 py-1 rounded-full text-sm font-bold">
              Ask A Question
            </button>
          </router-link>
        </div>
      </template> -->
    </div>

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Nav',

  methods: {
    ...mapActions({
        signOutAction: 'signOut'
      }),

      async signOut () {
        await this.signOutAction()

        this.$router.replace({ name: 'home' })
      },

      toggleTheme() {
        this.$store.dispatch('toggleTheme');
      }
  },

  computed: {
    ...mapGetters({
      // authUser: 'authUser',
      authenticated: 'authenticated',
      user: 'user',
      theme: 'theme',
    })
  }
}
</script>

<style>

</style>