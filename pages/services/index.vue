<template>
  <div class="container">
  	<div class="page-headline theme-services">
    <div class="container">
        <h1 class="text-center text-uppercase">Services</h1>
        <p>As a full-service digital agency built for the now,<br>
we’ve grown our practices on what will drive results in today’s mobile landscape:</p>
    </div>
</div>
    <h1>This is the services page</h1>
    <p><nuxt-link to="/">Home page</nuxt-link></p>
    <a href="talent">talent page</a>
    <a href="influencers">influencers page</a>
    <a href="case-studies">case studies</a>

      <div class="strategy">
      	<a href="strategy">stategy</a>
      </div>
      <div class="experience"> 
      	<a href="experience">experience</a>   
        <p><nuxt-link to="/services/experience">experience page</nuxt-link></p>
      </div>
      <div class="paid-media">
      	      	<a href="paid-media">paid-media</a>   

      </div>
      <div class="ecommerce">
      	      	<a href="ecommerce">ecommerce</a>   

      </div>
      <div class="production">
      	      	<a href="production">production</a>   

      </div>
      <div class="4ds">    
      	      	<a href="4ds">4ds</a>   

      </div>

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