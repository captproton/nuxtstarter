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

<!-- css grid start -->
<section class="grid-1">
  <div class="item-1">1</div>
  <div class="item-2">2</div>
  <div class="item-3">3</div>
  <div class="item-4">4</div>
  <div class="item-5">5</div>
  <div class="item-6">6</div>
  <div class="item-7">7</div>
  <div class="item-8">8</div>
  <div class="item-9">9</div>
</section><!-- cssgrid finish -->

  </div>


</template>

<script>
export default {
  transition: 'fadeOpacity'
}
</script>

<style>

body {
  padding-top: 20px;
  background: #f5f7f8;
}

.grid-1 {
  display: grid;
  background: #222;
  width: 100%;
  max-width: 750px;
  margin: 0 auto;
  
  grid-template-columns: repeat(4, 1fr);
  
  grid-gap: 20px;
  
}

/* items */

.grid-1 div {
  color: white;
  font-size: 20px;
  padding: 20px;
  }

/* specific item styles */

.item-1 {
  background: #b03532;
}
.item-2 {
  background: #33a8a5;
}
.item-3 {
  background: #30997a;
}
.item-4 {
  background: #6a478f;
}
.item-5 {
  background: #da6f2b;
}
.item-6 {
  background: #3d8bb1;
}
.item-7 {
  background: #e03f3f;
}
.item-8 {
  background: #59a627;
}
.item-9 {
  background: #4464a1;
}
.fadeOpacity-enter-active, .fadeOpacity-leave-active {
  transition: opacity .35s ease-out;
}

.fadeOpacity-enter, .fadeOpacity-leave-active {
  opacity: 0;
}
</style>