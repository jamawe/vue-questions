<template>
  <div class="flex flex-col items-start w-1/5 bg-white p-4 border-r border-gray-300">
    <router-link to="/">
      <h2 class="font-bold text-2xl tracking-tight">Home</h2>
    </router-link>
    <router-link to="/">
      <h2 class="text-2xl tracking-tight">Questions</h2>
    </router-link>
    <router-link to="/users">
      <h2 class="text-2xl tracking-tight">Users</h2>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',

}
</script>

<style>

</style>