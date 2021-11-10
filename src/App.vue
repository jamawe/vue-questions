<template>
  <main class="h-screen">
    <div id="app" class="flex flex-col flex-1 h-screen overflow-y-hidden">

      <Nav />

      <!-- <div class="flex items-center"> -->
        <div class="flex overflow-y-hidden flex-1">
            <Sidebar />
          <div class="overflow-x-hidden w-4/5">
            <router-view></router-view>
          </div>
        </div>
      <!-- </div> -->
      <!-- <div id="nav">
        <router-link to="/">Home</router-link> |
        <template v-if="!authenticated">
          <router-link to="/signin">Sign in</router-link> |
        </template>
        <template v-else>
          <router-link to="/account">Hello {{ user.name }}</router-link> |
          <a href="#" @click.prevent="signOut">Sign out</a>
        </template>
      </div> -->
      <!-- <router-view/> -->
    
    </div>
  </main>
</template>

<script>
  import Nav from './components/Nav.vue';
  import Sidebar from './components/Sidebar.vue';

  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'App',

    components: {
      Nav,
      Sidebar,
    },

    created() {
      this.$store.dispatch('setPageTitle', this.$route.meta.title);
    },

    beforeMount() {
      this.$store.dispatch('initTheme');
    },

    computed: {
      ...mapGetters({
        authenticated: 'authenticated',
        user: 'user',
        theme: 'theme',
      })
    },

    methods: {
      ...mapActions({
        signOutAction: 'signOut'
      }),

      async signOut () {
        await this.signOutAction()

        this.$router.replace({ name: 'home' })
      }
    },

    watch: {
      $route(to) {
        console.log("2")
        this.$store.dispatch('setPageTitle', to.meta.title);
      },
      
      // eslint-disable-next-line
      theme(newTheme, oldTheme) {
        newTheme === 'light' ? document.querySelector('html').classList.remove('dark') : document.querySelector('html').classList.add('dark');
      },
      
    },
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
