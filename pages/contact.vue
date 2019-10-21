<template>
  <div class="container">
    <h1>This is the contact page</h1>
    <p><nuxt-link to="/">Home page</nuxt-link></p>
  </div>
</template>

<script>
export default {
  transition: 'fadeOpacity'
}
</script>

<style>
.fadeOpacity-enter-active, .fadeOpacity-leave-active {
  transition: opacity .35s ease-out;
}

.fadeOpacity-enter, .fadeOpacity-leave-active {
  opacity: 0;
}
</style>