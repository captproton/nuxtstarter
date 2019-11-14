<template>
    <main>
        <div class="headroom">&nbsp;</div>
        <div class="page-headline">
            <div class="service-summary-icon">
                    <img src="https://s3.amazonaws.com/vm.com-2017/wp-content/uploads/2019/01/29010712/creative-blk.png" class="img-responsive">
            </div>
            <div class="text-center">
                <h4 class="text-pink text-uppercase">Service</h4>
                <h1 class="xl">Production</h1>
            </div>
        </div>

        <article class="container single-post service-content">
            <div class="row">
                <div class="col-sm-4">
                    <blockquote class="manifesto manifesto-pink">
                        <h5 class="text-uppercase">Manifesto</h5>
                        We’re a full-service content laboratory for the 21st century. In-house studios furnished with modern equipment make our end-to-end process streamlined and nimble.            </blockquote>
                </div>
                <div class="col-sm-8 single-post-content theme-services">
                    <h2>Studio</h2>
        <p><span style="font-weight: 400;">Our hub in Long Island City is equipped with sound stages, photography studios, an audio-mixing studio, a color-grading suite, an animation and VFX wing, workstations, cameras, a cafeteria, offices, truck parking, and dedicated spaces for clients, hair and makeup, post-production, equipment, and prop storage.</span></p>
        <h2>Editorial</h2>
        <p><span style="font-weight: 400;">Our forward-thinking team of storytellers, featuring industry veterans and digital natives, nurture digital and broadcast productions through all phases of development—from research to post-production to launch.</span></p>
        <h2>Motion &amp; VFX</h2>
        <p><span style="font-weight: 400;">Storyboards. Motion design. Animation. Visual effects. Our posse of expert artists and animators is armed with top-tier tools and software to bring imaginative concepts to life and win over clients.</span></p>
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

