<template>
    <div>
        <Nav />
        <section class="banner">
            <img class="img__responsive banner__img" src="/images/moyens.webp" alt="banner" srcset="">
        </section>
        <section class="industry ninty_container">
            <h2 class="industry__title center__text">Le parc industriel de Mafoder Aménagement Urbain
            </h2>
            <p class="industry__desc">Le parc industriel de Mafoder s’étend sur 10 hectares à Bouskoura, Casablanca.

                Mafoder est équipé de 5 halls de fabrication, d'un atelier de carottage des regards et d'une vaste zone
                de stockage pour ses produits finis.</p>
            <div class="two__cards">
               
                    <img class="img__responsive" src="/images/moyens/first.webp" alt="first">
                    <img class="img__responsive" src="/images/moyens/second.webp" alt="second">
               
            </div>
        </section>
    </div>
</template>

<script>
import Nav from "./Nav.vue";
export default {
    components: {
        Nav
    }
}
</script>

<style lang="scss" scoped>
.banner {}

.banner__img {
    height: 145px;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.5);
    mix-blend-mode: overlay;
}

@media(min-width: 64rem) {
    .banner__img {
        height: auto;
    }
    .ninty_container{
        width: 70%;
    }
    .two__cards{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
    }
}
</style>