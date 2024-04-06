<template>
    <div>
        <Nav />
        <section>
            <img class="img__responsive banner" src="/images/presi_banner.webp" alt="banner">

        </section>
        <section class="ninty_container president__coontent">
            <img class="img__responsive" src="/images/president.webp" alt="president">
            <div class="descripton">
                <p>

                    Le pôle Aménagement de Mafoder Group se veut être une référence nationale en matière de solutions
                    pour les entreprises d’aménagement extérieur. Notre vision est en effet d’accompagner nos clients de
                    manière continue sur leurs chantiers, depuis la mise en place des réseaux d’assainissement et
                    réseaux secs jusqu’au mobilier urbain d’extérieur afin de repenser les espaces publics comme lieux
                    de convivialité, d’échange et de partage.


                </p>
                <p>
                    Notre ambition est de contribuer à la valorisation et à l’embellissement des espaces publics et
                    privés à travers des produits de grande qualité et esthétiques au Maroc et en Afrique. C’est la
                    raison pour laquelle nous travaillons de manière très rapprochée avec les architectes du continent
                    en amont des projets pour concevoir des produits adaptés à nos territoires et que nous réfléchissons
                    perpétuellement à enrichir notre gamme de produits pour satisfaire les besoins de nos clients.
                </p>

                <p>
                    Notre ambition est de contribuer à la valorisation et à l’embellissement des espaces publics et
                    privés à travers des produits de grande qualité et esthétiques au Maroc et en Afrique. C’est la
                    raison pour laquelle nous travaillons de manière très rapprochée avec les architectes du continent
                    de nos clients.
                </p>
            </div>
        </section>
        <Footer/>
    </div>
</template>

<script>
import Nav from './Nav.vue'
import Footer from './Footer.vue';
export default {
    components: {
        Nav,
        Footer

    },
    setup() {


        return {}
    }
}
</script>

<style lang="scss" scoped>
.banner {
    width: 100%;
    max-width: 100%;

}

@media(min-width: 64rem) {
    .banner {
        height: 400px;
    }
    .president__coontent{
        display: grid;
        grid-template-columns: 1fr 2fr;
        gap: 2rem;
        width: 70%;
        margin: 0 auto;
    }

    p{
        text-align: justify;
    }
}
</style>