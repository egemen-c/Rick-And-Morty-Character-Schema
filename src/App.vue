<script>
import Navigation from './components/Navigation.vue'
import Header from './components/Header.vue'
import Footer from "./components/Footer.vue";
  export default {
    name: 'app',
    components: {
      Navigation,
      Header,
      Footer
    }
  }
</script>

<template>
<Header/>
<Navigation/>
<div id="app">
  <router-view>

  </router-view>
</div> 
<Footer/>
</template>

<style>


html, body{
  width: 100%;
  height: 100vh;
  font-family: var(--font-3);
}
</style>