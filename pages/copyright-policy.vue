<template>
<main>
  <div class="headroom">
    &nbsp;
  </div>
  <article>
    <div class="container">

    <p><nuxt-link to="/">Home page</nuxt-link></p>
    <hr>

    
        <h1 class="text-center text-uppercase">Copyright Policy</h1>
        <p>&nbsp;</p>
<p>Dice Media Group respects the rights of copyright holders and accordingly has adopted a policy that provides for the submission of a copyright infringement notice as further described below.</p>
<p><u>Notice of Copyright Infringement</u></p>
<p>If you believe in good faith that any content on the dicemediagroup.com website (the “Site”) infringes your copyright rights, you should send notice of the alleged copyright infringement to the Designated Copyright Agent listed below.</p>
<p>Your notice must contain the following information as required by the Digital Millennium Copyright Act (17 U.S.C. §512) (“DMCA”):</p>
<ul>
<li>The full name and a physical or electronic signature of the person authorized to act on behalf of the copyright owner;</li>
</ul>
<ul>
<li>Identification of the copyrighted work claimed to have been infringed. If multiple copyrighted works are covered by your notice, you may provide a representative list of the copyrighted works that you claim have been infringed;</li>
</ul>
<ul>
<li>Reasonably sufficient detail to enable us to identify and locate the copyrighted work that is claimed to be infringing (e.g. a link to the page on the Site that contains the material);</li>
</ul>
<ul>
<li>A mailing address, telephone number, and email address where we can contact you;</li>
</ul>
<ul>
<li>A statement that you have a good faith belief that the disputed use of the copyrighted work is not authorized by the copyright owner, its agent, or the law; and</li>
</ul>
<ul>
<li>A statement made by you, under penalty of perjury, that the information in the notice is accurate and that you are the copyright owner or authorized to act on behalf of the copyright owner.</li>
</ul>
<p>Please submit your notice to the Designated Agent below:</p>
<p>Dice Media Group</p>
<p>Legal Department<br>
2467 S Cottage Cove<br>
Saratoga Springs,&nbsp;UT&nbsp;84045<br>
Email:&nbsp;<a href="mailto:info@dicemediagroup.com">info@dicemediagroup.com</a></p>
<p>Once you provide us with an adequate notice as described above, we will respond expeditiously and take whatever action, in our sole discretion, that is deemed appropriate including removal of the disputed copyrighted work from the Site.</p>
<p><u>Counter-Notice</u>:</p>
<p>If you believe that a DMCA notice of copyright infringement has been improperly submitted against you, you may submit a counter-notice to the Designated Agent with the following information required by the DMCA:</p>
<ul>
<li>Your physical or electronic signature;</li>
</ul>
<ul>
<li>Identification of the copyrighted work that has been removed or to which access has been disabled including a link to the page on the Site that contained the material before it was removed or disabled;</li>
</ul>
<ul>
<li>A statement under penalty of perjury that you have a good faith belief that the copyrighted work was removed or disabled as a result of mistake or misidentification;</li>
</ul>
<ul>
<li>Your name, address, e-mail address, and telephone number; and</li>
</ul>
<ul>
<li>A statement that you (i) consent to the jurisdiction of the Federal District Court in the judicial district where your address is located if the address is in the United States, or the United District Court for the Southern District of New York (Manhattan) if your address is located outside of the United States, and (ii) accept service of process from the person who provided the DMCA notice of the alleged copyright infringement.</li>
</ul>
<p>Please submit your counter-notice to the Designated Agent below:</p>
<p>Dice Media Group</p>
<p>Legal Department<br>
10 Hudson Yards, 25th Floor<br>
New York,&nbsp;NY&nbsp;10001<br>
Email:&nbsp;<a href="mailto:info@dicemediagroup.com">info@dicemediagroup.com</a></p>
<p>In the event that Dice Media Group receives a counter-notice in compliance with the above requirements, we will provide the person who submitted the DMCA copyright infringement notice with a copy of the counter-notice, informing them that Dice Media Group will replace the removed material in 10 business days from the date of the counter-notice unless Dice Media Group first receives notice from the person who submitted the DMCA copyright infringement notice that they have filed an action seeking a court order to restrain the allegedly infringing activity.</p>
<p>PLEASE NOTE THAT DICE MEDIA GROUP INTENDS TO COMPLY WITH ALL PROVISIONS OF THE DIGITAL MILLENNIUM COPYRIGHT ACT, BUT WILL NOT UNILATERALLY TAKE RESPONSIBILITY FOR POLICING AND REMOVING MATERIAL THOUGHT TO BE INFRINGING.</p>
    
  </div>
  </article>
</main>

</template>


<script>
export default {
  transition: 'fadeOpacity'
}
</script>

<style lang="scss" scoped>
.headroom {
  height: 100px;
}
 .page-headline, #vm-workwithus .gform_heading {
    margin: 30px auto;
}
.page-headline, #vm-workwithus .gform_heading {
    text-align: center;
}
* {
    box-sizing: border-box;
}
h1 {
    font-size: 3em;
    text-transform: uppercase;
}
    .fadeOpacity-enter-active, .fadeOpacity-leave-active {
      transition: opacity .35s ease-out;
    }

    .fadeOpacity-enter, .fadeOpacity-leave-active {
      opacity: 0;
    }

    main {
      display: grid;
      grid-template-columns: 1fr;
          grid-template-rows: 1fr auto minmax(150px, 1fr) 1fr;

      grid-column-gap: 50px;
      grid-row-gap: 0px;
    }

    .headroom { grid-area: 1 / 1 / 2 / 2; }
    article { grid-area: 2 / 1 / 3 / 2; }

</style>

