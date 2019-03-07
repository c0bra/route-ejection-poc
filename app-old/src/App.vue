<template>
  <div id="app">
    <h1>Old App</h1>
    <p>
      <!-- use v-link directive for navigation. -->
      <a v-link="{ path: '/' }">Home</a> | 
      <a v-link="{ path: '/page1' }">Page 1</a> | 
      <a v-link="{ path: '/new-app/page1' }">New App</a>
    </p>
    <!-- route outlet -->
    <router-view></router-view>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
