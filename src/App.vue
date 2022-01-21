<template>
  <Header />
  <Navigation />
  <router-view>
  </router-view>
  <Footer />
</template>

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
    },
    created() {
      this.$store.dispatch('fetchChars')
    }
  }
</script>

<style>
  html,
  body {
    width: 100%;
    height: 100vh;
    font-family: var(--font-3);
    background: var(--grey);
  }
</style>