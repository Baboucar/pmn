<template>
    <div>
        <Nav />
        <section class="ninty_container organo">
            <h2 class="center__text">Organigramme
            </h2>
            <p class="desc">La synergie de nos activités complémentaires et la force de notre capital  humain font partie
                des piliers de l'excellence d'Interlux.
            </p>
            <img class="img__responsive" src="/public/images/organigramm.png" alt="organogram">
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

  .desc{
    text-align: justify;
    padding-top: 1rem;
  
  }

  @media(min-width: 64rem){
  .organo{
    width: 65%;
    margin: 0 auto;
  }
  }
</style>