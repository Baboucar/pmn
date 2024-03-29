<template>
    <div>
    <Nav/>
    <section class="banner">
        <img class="img__responsive banner__img" src="/images/moyens.webp" alt="banner" srcset="">
    </section>
    <section class="industry">
        <h2>Le parc industriel de Mafoder Aménagement Urbain
        </h2>
    </section>
    </div>
</template>

<script>
import Nav from "./Nav.vue";
export default {
    components:{
        Nav
    }
}
</script>

<style lang="scss" scoped>
.banner{
    
}
 .banner__img{
    height: 145px;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.5);
    mix-blend-mode: overlay;
 }

 @media(min-width: 64rem) {
  .banner__img{
    height: auto;
  }
 }
</style>