<template>
    <div>
        <Nav />
        <Carousel :autoplay="4000" :wrap-around="true">
            <!-- <Slide v-for="image in images" 
        >
          <div class="carousel__item">
                <img v-for="image in images" :src="image.src" :alt="image.alt" :key="image.id" />

          </div>
        </Slide> -->
            <Slide v-for="(image, index) in images" :key="index">
                <img  :src="image" :alt="`Image ${index}`">
            </Slide>

            <template #addons>
                <Navigation />
                <Pagination />
            </template>
        </Carousel>

        <section class="about">
            <p class="about_desc">
                Mafoder Aménagement Urbain is part of Mafoder Group, a Moroccan family industrial group founded in 1985
                and
                specializing in the provision of high value-added solutions for the industrial, urban planning and
                construction
                sectors.
            </p>
            <p class="about_desc">
                Mafoder's Urban Development Division is a leader in the manufacturing and supply of turnkey solutions
                for
                development, road and construction and construction companies in Morocco (road cast iron, prefabricated
                concrete
                for sanitation networks and dry networks, furniture urban, play areas and fitness equipment).
            </p>

        </section>
        <section class="cards">
            <div class="card">
                <img class="responsive_img card__img" src="/images/card1.webp" alt="card">
            </div>
            <div class="card">
                <img class="responsive_img card__img" src="/images/card2.webp" alt="card">
            </div>
            <div class="card">
                <img class="responsive_img card__img" src="/images/card3.webp" alt="card">
            </div>

        </section>
        <section class="side__content ninty_container">
            <img class="responsive_img" src="/images/side-image.jpeg" alt="side">
            <div class="side__text">
                <h2 class="side__title">À propos d’Interlux
                </h2>
                <p class="side__description">
                    Créé en 2002, Interlux Group, représentant exclusif de grandes marques de mobilier contemporain,
                    propose à
                    sa clientèle une large gamme de produits parfaitement adaptés aux besoins des particuliers et
                    professionnels. En collaboration avec des spécialistes de chaque métier dans lequel nous opérons,
                    allant de
                    la simple fourniture à la réalisation de projets clés en main, au travers de nos divisions Interlux
                    Home,
                    Interlux Pro et Interlux Contract. Associés à des fournisseurs étrangers prestigieux, nous
                    privilégions la
                    qualité de nos produits et nous sélectionnons de manière rigoureuse nos partenaires afin de vous
                    offrir le
                    meilleur du mobilier et du design.
                </p>
            </div>
        </section>
        <section class="partners">
            <Vue3Marquee :pause-on-click="true">
                <img class="marq_img"
                    v-for="img in imgArray"
                    :key="img"
                    :src="img"
                />
            </Vue3Marquee>
        </section>
  <Footer/>
    </div>
</template>

<script>
import Nav from './Nav.vue';
import Footer from './Footer.vue';
import { defineComponent } from 'vue'
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel';
import { ref } from 'vue';
import { Vue3Marquee } from 'vue3-marquee'


import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
    name: 'Basic',
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,
        Nav,
        Footer,
        Vue3Marquee,
    },

    setup() {
      

        // Sample images array
        const images = ref([
            '/slider/card2.webp',
            '/slider/slide3.jpeg',
            '/slider/slide3.jpeg'
        ]);

        const imgArray = ref([
    'https://sponsors.vuejs.org/images/vueschool.avif',
    'https://sponsors.vuejs.org/images/vehikl.avif',
    'https://sponsors.vuejs.org/images/dronahq.avif',
    
]);
        
        return { images,imgArray };

        
    }
})



</script>

<style lang="scss" scoped>
img,
.responsive_img {
    max-width: 100%;
    height: auto;
}

.card__img {
    display: block;
    padding: 0;
    margin: 0 auto;
    margin-top: 1rem;
}

carousel__item {
    min-height: 200px;
    width: 100%;
    background-color: var(--vc-clr-primary);
    color: var(--vc-clr-white);
    font-size: 20px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.carousel__slide {
   
}

.carousel__prev,
.carousel__next {
    box-sizing: content-box;
    border: 5px solid white;
}

.marq_img{
  width: 8rem;
}
.about {
    width: 90%;
    margin: 0 auto;
    text-align: justify;
}

.side__content{
    margin-top: 1.5rem;
}
.side__title{
    text-align: center;
}
.side__description{
    text-align: justify;
}
.partners{
 width: 90%;
 margin: 0 auto;
}
@media(min-width: 64rem) {
    .about {
        width: 60%;
        margin: 0 auto;
        font-size: 1.2rem;
    }

    .cards {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        width: 60%;
        margin: 0 auto;
       
    }
    .side__content{
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 2rem;
        width: 90%;
        margin: 2.5rem  auto;


    }
    .side__text{
        margin-top: 2rem;
    }
    .marq_img{
        width: 13rem;
        padding-left: 4rem;
        padding-bottom: 1rem;
      }
}
</style>