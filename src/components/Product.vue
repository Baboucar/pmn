<template>
    <div>
     <Nav/>
    
      <img class="img__responsive" src="/images/product/productbanner.webp" alt="" srcset="">
      <div class="six_card ninty_container">
        <div class="card">
            <img class="img__responsive " src="/images/product/p1.jpeg" alt="">
            <router-link to="/" >VRD</router-link>
        </div>
        <div class="card">
            <img class="img__responsive "  src="/images/product/p2.webp" alt="">
            <router-link to="/" >PREFA</router-link>
        </div>
        <div class="card">
            <img class="img__responsive "  src="/images/product/p3.webp" alt="">
            <router-link to="/" >PREFA</router-link>
        </div>
        <div class="card">
            <img class="img__responsive "  src="/images/product/p4.webp" alt="">
            <router-link to="/" >PREFA</router-link>
        </div>
        <div class="card">
            <img class="img__responsive "  src="/images/product/p5.webp" alt="">
            <router-link to="/" >PREFA</router-link>
        </div>
        <div class="card">
            <img class="img__responsive "  src="/images/product/p6.webp" alt="">
            <router-link to="/" >PREFA</router-link>
        </div>
      </div>
    <Footer/>
    </div>
</template>

<script> 
import Nav from "./Nav.vue"
import Footer from "./Footer.vue";
    export default {
        components:{
            Nav,
            Footer
        }
    }
</script>

<style lang="scss" scoped>
 a{
    display: block;
    color: #069861;
    padding-left: 1rem;
    font-weight: bold;
 }
 .card{
    box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.5);
    margin-top: 1.2rem;
    border-radius: 5px;
    margin-bottom: 1rem;
    transition: transform 0.3s ease; // Smooth transition for zoom effect

    &:hover {
        transform: scale(1.05); // Slightly zoom in the card on hover
    }

 }

 @media(min-width: 64rem){
    .six_card{
        width: 70%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 2.5rem;
    }
 }
</style>