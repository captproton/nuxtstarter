<template>
    <main>
        <div class="headroom">&nbsp;</div>
        <div class="page-headline">
            <div class="service-summary-icon">
                    <img src="https://s3.amazonaws.com/vm.com-2017/wp-content/uploads/2019/01/29010712/creative-blk.png" class="img-responsive">
            </div>
            <div class="text-center">
                <h4 class="text-pink text-uppercase">Service</h4>
                <h1 class="xl">Creative</h1>
            </div>
        </div>

        <article class="container single-post service-content">
            <div class="row">
                <div class="caption">
                    <blockquote class="manifesto manifesto-pink">
                        <h5 class="text-uppercase">Manifesto</h5>
                        Over 200 writers, designers, photographers, editors and animators with one common goal: blowing business objectives (and minds) out of the water.            </blockquote>
                </div>
                <div class="col-sm-8 single-post-content theme-services">
                    <h2>Approach</h2>
        <p>We have one goal – to create content that works. And today, that can mean a whole lot of things in addition to simply meeting business objectives. Does it work within the budget? Will it work within the timeline? Does it work for target segmentation? What about the platform? And did we mention the budget?</p>
        <p>Brands today come with no shortage of guardrails. And that’s perfectly fine by us. We believe the smaller the box, the bigger the idea.</p>
        <p>Our combined creative and production team consists of over 200 writers, designers, art directors, editors, animators, directors, and producers – all working to produce quality content for virtually every channel at the rapid speed of culture. Everything from Super Bowl commercials to Snapchat filters.</p>
        <p>Our seamless integration with media ensures that we not only make the best content possible but that it’s backed by laser focus targeting, instant analytics and absolutely, positively no ad waste.</p>
                </div>
            </div>
        </article>

    </main>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
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