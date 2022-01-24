<template>
  <Header />
  <Navigation />
  <Sassdeneme />
  <router-view>
  </router-view>
  <span class="spn">
    <Footer /></span>
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
      Footer,
    },
    created() {
      this.$store.dispatch('fetchChars')
    }
  }
</script>

<style>
  .spn {
    position: sticky;
    bottom: 0px;
    left: 0px;
    right: 0px;
  }

  html,
  body {
    width: 100%;
    height: 100vh;
    font-family: var(--font-3);
    background: var(--grey);
  }

  @media only screen and (min-width: 769px) and (max-width:1024px) {
    .card-container {
      grid-template-columns: repeat(2, 1fr);
    }

    .card-container .card {
      background: pink;
    }
  }
</style>