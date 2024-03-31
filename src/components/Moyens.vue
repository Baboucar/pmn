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
            <p>
                Mafoder dispose d’un laboratoire interne permettant de contrôler l’intégralité des opérations de
                production


            </p>
            <div class="four__cards">
                <div>
                    <img class="img__responsive" src="/images/moyens/third.webp" alt="first">
                    <p>Carottage</p>
                </div>
                <div>
                    <img class="img__responsive" src="/images/moyens/fourth.webp" alt="second">
                    <p>Essai d’écrasement Prefa selon la norme NM 10.9.003</p>
                </div>
                <div>
                    <img class="img__responsive" src="/images/moyens/fifth.webp" alt="second">
                    <p>Essai d’écrasement Prefa selon la norme NM 10.9.003</p>
                </div>
                <div>
                    <img class="img__responsive" src="/images/moyens/six.webp" alt="second">
                    <p>Essai d’écrasement Prefa selon la norme NM 10.9.003</p>
                </div>

            </div>
        </section>
        <section class="ninty_container">
            <h2>Un contrôle qualité à chaque étape
            </h2>
            <p>L’usine dispose d’un atelier de chaudronnerie équipé et dédié à la fabrication des moules nécessaires à
                la production des ouvrages préfabriqués. Les moules rejoignent ensuite les lignes de production (béton
                vibré ou béton auto-plaçant), donnant ainsi à Mafoder Prefa la flexibilité de proposer à ses clients le
                type de béton adapté à leurs besoins.

            </p>
            <div class="three__cards">
                <img class="img__responsive " src="/images/moyens/3card1.webp" alt="">
                <img class="img__responsive " src="/images/moyens/3card2.webp" alt="">
                <img class="img__responsive " src="/images/moyens/3card3.webp" alt="">


            </div>
        </section>
        <section class="ninty__container sixty__container ">
            <h2>Certifications
            </h2>
            <div class="three__cards">
            <img class="img__responsive cert" src="/images/moyens/cert1.webp" alt="">
            <img class="img__responsive cert" src="/images/moyens/cert2.webp" alt="">
            <img class="img__responsive cert" src="/images/moyens/cert1.webp" alt="">
           </div>

        </section>
        <Footer/>
    </div>
</template>

<script>
import Nav from "./Nav.vue";
import Footer from "./Footer.vue";
export default {
    components: {
        Nav,
        Footer
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
    clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);

}
.cert{
    display: block;
    margin: 0 auto;
}
@media(min-width: 64rem) {
    .banner__img {
        height: auto;
    }

    .ninty_container {
        width: 70%;
    }
    .sixty__container{
        width:60%;
        margin: 0 auto;
        padding-top: 2rem;

    }
    .two__cards {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
    }
     .three__cards{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 1.5rem;
     }
    .four__cards {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 1rem;
    }
}
</style>