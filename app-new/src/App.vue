<template>
  <div id="app">
    <h1>New App</h1>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/page1">Page1</router-link> |
      <router-link to="/old-app/page1">Old App</router-link>
    </div>
    <router-view/>
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
