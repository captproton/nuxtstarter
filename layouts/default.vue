<template>
  <div class="main">
    <Header />
      <nuxt />
    <WorkWithUs />
    <Footer />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>


  </div>
</template>

<script>
import Header from "~/components/Header.vue";
import WorkWithUs from "~/components/WorkWithUs.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: {
    Header,
    WorkWithUs,
    Footer
  },
    transition: 'fadeOpacity'

};
</script>

<style>
  html {
    font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    scroll-behavior: smooth;

  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
  }
  .button--green {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #3b8070;
    color: #3b8070;
    text-decoration: none;
    padding: 10px 30px;
  }
  .button--green:hover {
    color: #fff;
    background-color: #3b8070;
  }
  .button--grey {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #35495e;
    color: #35495e;
    text-decoration: none;
    padding: 10px 30px;
    margin-left: 15px;
  }
  .button--grey:hover {
    color: #fff;
    background-color: #35495e;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  }
  .container {
    font-size: 20px;
    transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
  }
  .page-enter-active,
  .page-leave-active {
    transition: opacity 0.5s;
  }
  .page-enter,
  .page-leave-active {
    opacity: 0;
  }
  .bounce-enter-active {
    animation: bounce-in 0.8s;
  }
  .bounce-leave-active {
    animation: bounce-out 0.5s;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes bounce-out {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(0);
    }
  }
  .slide-left-enter,
  .slide-right-leave-active {
    opacity: 0;
    transform: translate(30px, 0);
  }
  .slide-left-leave-active,
  .slide-right-enter {
    opacity: 0;
    transform: translate(-30px, 0);
  }

  /* content pages default styles */
      main {
      display: grid;
      grid-template-columns: 2fr;
      grid-template-rows: 1fr auto minmax(100px, 6fr) 1fr;
      grid-column-gap: 50px;
      grid-row-gap: 0px;
      }

      .headroom { 
          grid-area: 1 / 1 / 2 / 2; 
          }
      .page-headline { 
          margin-top: 45px;
          margin: 30px auto;
          grid-area: 2 / 1 / 3 / 2; 
      }
      article { grid-area: 3 / 1 / 4 / 2; }
      section { grid-area: 4 / 1 / 5 / 2; }


  article .row {
  display: grid;
  grid-template-columns: 4fr 8fr;
  grid-template-rows: 1fr;
  grid-column-gap: 50px;
  grid-row-gap: 0px;
  }

  .caption { grid-area: 1 / 1 / 2 / 2; }
  .single-post-content { grid-area: 1 / 2 / 2 / 3; }

</style>