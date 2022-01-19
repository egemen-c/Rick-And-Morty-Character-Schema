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
  <div>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit facilis ipsum aspernatur tempore in maxime, cum
      deserunt officia modi error eius, dolore molestiae incidunt quam praesentium ut non at autem!
    </p>
  </div>
</template>

<style>
html, body{
  width: 100%;
  font-family: var(--font-3);
}
</style>