<script>
import Navigation from './components/Navigation.vue'
import Header from './components/Header.vue'
  export default {
    name: 'app',
    components: {
      Navigation,
      Header
    }
  }
</script>

<template>
<Header/>
<nav>
  <Navigation/>
</nav>
  <router-view></router-view>
  
</template>

<style>
html, body{
  width: 100%;
  font-family: var(--font-3);
}
</style>