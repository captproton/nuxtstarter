<template>

	<footer>
				<div class="sitemap">
					<ul id="menu-footer-main" class="vm-wp-footernav">
						<li id="menu-item-81" 
						class="">
							<nuxt-link to="/" aria-current="page">Home</nuxt-link>
					</li>
					<li id="menu-item-79" 
						class="menu-item menu-item-type-post_type menu-item-object-page menu-item-79">
						<a href="/case-studies/">Case Studies</a>
					</li>
					<li>
						<a href="https://dicemedia.bamboohr.com/jobs/" target="_blank">Work for Dice Media Group</a>
					</li>
					<li>
						<a href="/privacy-policy" target="_blank">PRIVACY POLICY</a>
					</li>
					<li>
						<a href="/terms" target="_blank">Terms of Use</a>
					</li>
					<li>
						<a href="/copyright-policy" target="_blank">Copyright Policy</a>
					</li>
				</ul>
			</div>
			<div class="services">
				<ul class="vm-wp-footernav">
					<li><a class="animsition-link" href="/services">Services</a></li>
					<ul class="vm-wp-footernav">
						<li><nuxt-link class="animsition-link" to="/services/strategy/">Strategy</nuxt-link></li>
						<li><nuxt-link class="animsition-link" to="/services/creative/">Creative</nuxt-link></li>
						<li><nuxt-link class="animsition-link" to="/services/paid-media/">Paid Media</nuxt-link></li>
						<li><nuxt-link class="animsition-link" to="/services/ecommerce/">eCommerce</nuxt-link></li>
						<li><nuxt-link class="animsition-link" to="/services/production">Production</nuxt-link></li>
						<li><nuxt-link class="animsition-link" to="/services/experience">DMG Experience</nuxt-link></li>
						<li><nuxt-link class="animsition-link" to="/services/influencers/">Influencers</nuxt-link></li>
						<li><nuxt-link class="animsition-link" to="/services/talent/">DMG Talent</nuxt-link></li>
					</ul>
				</ul>
			</div>
			<div class="social-links">
				<ul class="social">
					<a href="https://www.facebook.com/dicemediagroup/" 
						class="btn btn-xs-pad btn-white-noborder" 
						target="_blank" 
						title="Dice Media Group on Facebook" 
						data-hover="#3b5a99">
							<i class="fab fa-facebook" aria-hidden="true"></i>
					</a>
					<a href="https://twitter.com/dicemediagroup" 
						class="btn btn-xs-pad btn-white-noborder" 
						target="_blank" 
						title="Follow @DiceMediaGroup" 
						data-hover="#25a8e0">
						<i class="fab fa-twitter" aria-hidden="true"></i>
					</a>
					<a href="https://www.snapchat.com/add/dicemediagroup" 
						class="btn btn-xs-pad btn-white-noborder" 
						target="_blank" 
						title="Dice Media Group on Snapchat" 
						data-hover="#fffc00">
						<i class="fab fa-snapchat-ghost" aria-hidden="true"></i>
					</a>
					<a href="https://www.instagram.com/explore/tags/dicemediagroup/" 
						class="btn btn-xs-pad btn-white-noborder" 
						target="_blank" 
						title="#DiceMediaGroup on Instagram" 
						data-hover="#125688">
						<i class="fab fa-instagram" aria-hidden="true"></i>
					</a>
					<a href="https://www.pinterest.com/0ooqwosdrwvosz48mob6jlhwabcrar/" 
						class="btn btn-xs-pad btn-white-noborder" 
						target="_blank" 
						title="Dice Media Group on Pinterest" 
						data-hover="#ca2128">
						<i class="fab fa-pinterest" aria-hidden="true"></i>
					</a>
					<a href="https://www.linkedin.com/company/dicemediagroup" 
						class="btn btn-xs-pad btn-white-noborder" 
						target="_blank" 
						title="VaynerMedia on LinkedIn" 
						data-hover="#0d7bb7">
						<i class="fab fa-linkedin" aria-hidden="true"></i>
					</a>
				</ul>
			</div>


	</footer>
</template>

<script>
   export default{

   }
</script>

<style>
	footer {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: 1fr;
	grid-column-gap: 0px;
	grid-row-gap: 0px;

    margin: 0 auto;
    background: #000;
	color: #fff;
    min-height: 200px;
    font-size: 11pt;
    min-width: 320px;
/*  */
/*  */
	}
	footer a {
		color: #fff;
		font-weight: 700;
		border: none;
		text-decoration: none;
    	display: inline;
    	padding-bottom: 0.33em;

	}

	.sitemap { grid-area: 1 / 1 / 2 / 2; }
	.services { grid-area: 1 / 2 / 2 / 3; }
	.social-links { grid-area: 1 / 3 / 2 / 4; }
	ul {
		list-style: none;
	}
</style>