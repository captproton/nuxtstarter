<template>
  <div class="container">
  	<div class="wrapper">
	  <header>Header</header>
	  <main>
				<div class="box service-summary">
			
					<div class="box service-summary-icon">
						                        <a class="animsition-link" href="https://vaynermedia.com/service/creative/">
                            <img src="https://s3.amazonaws.com/vm.com-2017/wp-content/uploads/2019/01/29010712/creative-blk.png" class="img-responsive">
                        </a>

					</div>
					<div class="box service-summary-info">
						                        <h4 class="service-summary-title">Creative</h4>
                        <p>Over 200 writers, designers, photographers, editors and animators with one common goal: blowing business objectives (and minds) out of the water.</p>
                        <a class="animsition-link" href="https://vaynermedia.com/service/creative/"><strong>Learn More &gt;</strong></a>

					</div>
				</div>

				<div class="box service-summary">
			
					<div class="box service-summary-icon">
						                        <a class="animsition-link" href="https://vaynermedia.com/service/creative/">
                            <img src="https://s3.amazonaws.com/vm.com-2017/wp-content/uploads/2019/01/29010712/creative-blk.png" class="img-responsive">
                        </a>

					</div>
					<div class="box service-summary-info">
						                        <h4 class="service-summary-title">Creative</h4>
                        <p>Over 200 writers, designers, photographers, editors and animators with one common goal: blowing business objectives (and minds) out of the water.</p>
                        <a class="animsition-link" href="https://vaynermedia.com/service/creative/"><strong>Learn More &gt;</strong></a>

					</div>
				</div>

	  </main>
	  <aside>
				<div class="box service-summary">
			
					<div class="box service-summary-icon">
						                        <a class="animsition-link" href="https://vaynermedia.com/service/creative/">
                            <img src="https://s3.amazonaws.com/vm.com-2017/wp-content/uploads/2019/01/29010712/creative-blk.png" class="img-responsive">
                        </a>

					</div>
					<div class="box service-summary-info">
						                        <h4 class="service-summary-title">Creative</h4>
                        <p>Over 200 writers, designers, photographers, editors and animators with one common goal: blowing business objectives (and minds) out of the water.</p>
                        <a class="animsition-link" href="https://vaynermedia.com/service/creative/"><strong>Learn More &gt;</strong></a>

					</div>
				</div>

				<div class="box service-summary">
			
					<div class="box service-summary-icon">
						                        <a class="animsition-link" href="https://vaynermedia.com/service/creative/">
                            <img src="https://s3.amazonaws.com/vm.com-2017/wp-content/uploads/2019/01/29010712/creative-blk.png" class="img-responsive">
                        </a>

					</div>
					<div class="box service-summary-info">
						                        <h4 class="service-summary-title">Creative</h4>
                        <p>Over 200 writers, designers, photographers, editors and animators with one common goal: blowing business objectives (and minds) out of the water.</p>
                        <a class="animsition-link" href="https://vaynermedia.com/service/creative/"><strong>Learn More &gt;</strong></a>

					</div>
				</div>

				<div class="box service-summary">
			
					<div class="box service-summary-icon">
						                        <a class="animsition-link" href="https://vaynermedia.com/service/creative/">
                            <img src="https://s3.amazonaws.com/vm.com-2017/wp-content/uploads/2019/01/29010712/creative-blk.png" class="img-responsive">
                        </a>

					</div>
					<div class="box service-summary-info">
						                        <h4 class="service-summary-title">Creative</h4>
                        <p>Over 200 writers, designers, photographers, editors and animators with one common goal: blowing business objectives (and minds) out of the water.</p>
                        <a class="animsition-link" href="https://vaynermedia.com/service/creative/"><strong>Learn More &gt;</strong></a>

					</div>
				</div>

				<div class="box service-summary">
			
					<div class="box service-summary-icon">
						                        <a class="animsition-link" href="https://vaynermedia.com/service/creative/">
                            <img src="https://s3.amazonaws.com/vm.com-2017/wp-content/uploads/2019/01/29010712/creative-blk.png" class="img-responsive">
                        </a>

					</div>
					<div class="box service-summary-info">
						                        <h4 class="service-summary-title">Creative</h4>
                        <p>Over 200 writers, designers, photographers, editors and animators with one common goal: blowing business objectives (and minds) out of the water.</p>
                        <a class="animsition-link" href="https://vaynermedia.com/service/creative/"><strong>Learn More &gt;</strong></a>

					</div>
				</div>
      </aside>
	  <footer>Footer</footer>
  		
  	</div>


 </div>

</template>

<script>
export default {
  transition: 'fadeOpacity'
}
</script>

<style>
	header {  grid-area: header;  }
	main   {  grid-area: content; }
	aside  {  grid-area: sidebar; }
	footer {  grid-area: footer;  }

	.wrapper {
	  display: grid;
	  grid-gap: 2rem;
	  grid-template-areas: 
	    "header"
	    "content"
	    "sidebar"
	    "footer" ;
	}

	@media (min-width: 800px) {
		.wrapper {
			grid-template-columns: 1fr 1fr;
			grid-template-areas: 
		  	"header header"
		  	"content sidebar"
		  	"footer footer" ;
		}

	}


	header, main, aside, footer {
	  background: pink;
	  font-size: 2rem;
	  font-family: Avenir, Roboto, Helveltica, san-serif;
	  padding: 2rem;
	  text-align: center;
	}

	.service-summary{
		grid-column: col 3 / span 2;
		display: grid;
    	grid-gap: 10px;
		grid-template-columns: 1fr 2fr;
	}

	.service-summary-icon {
		grid-column: 1;
	}

	.service-summary-info {
		grid-column: 2;
	}


</style>