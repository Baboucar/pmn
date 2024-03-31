<template>
    <div>
     <Nav/>
     <img class="img__responsive" src="/images/Carrousel3.webp" alt="">
     <section class="ninty_container">
        <vue-picture-swipe  :items="items"></vue-picture-swipe>

     </section>
     <Footer/>
    </div>
</template>

<script>
import Nav from "./Nav.vue";
import VuePictureSwipe from 'vue3-picture-swipe';
import Footer from "./Footer.vue";

export default {
    components:{
        Nav,
        VuePictureSwipe,
        Footer
    },
    data() {
      return {
        items: [{
          src: 'http://via.placeholder.com/600x400',
          thumbnail: 'http://via.placeholder.com/256x256',
          w: 600,
          h: 400,
         
        },
        {
          src: 'http://via.placeholder.com/1200x900',
          thumbnail: 'http://via.placeholder.com/256x256',
          w: 1200,
          h: 900,
          
        },
        {
          src: 'http://via.placeholder.com/1200x900',
          thumbnail: 'http://via.placeholder.com/256x256',
          w: 1200,
          h: 900,
          
        },
        {
          src: 'http://via.placeholder.com/1200x900',
          thumbnail: 'http://via.placeholder.com/256x256',
          w: 1200,
          h: 900,
          
        },
        {
          src: 'http://via.placeholder.com/1200x900',
          thumbnail: 'http://via.placeholder.com/256x256',
          w: 1200,
          h: 900,
          
        },
        {
          src: 'http://via.placeholder.com/1200x900',
          thumbnail: 'http://via.placeholder.com/256x256',
          w: 1200,
          h: 900,
          
        },
        {
          src: 'http://via.placeholder.com/1200x900',
          thumbnail: 'http://via.placeholder.com/256x256',
          w: 1200,
          h: 900,
          
        },
        {
          src: 'http://via.placeholder.com/1200x900',
          thumbnail: 'http://via.placeholder.com/256x256',
          w: 1200,
          h: 900,
          
        }
      ]};
    }
}
</script>

<style lang="scss" >

:deep(.ninty_container img) {
    display: inline-block;
    margin: 1rem auto;
    width: 100%;
   
    
}

    @media(min-width: 64rem){
        .ninty_container{
            width: 75%;
           
        }
    
        .my-gallery{
            width: 80%;
            margin: 0 auto;
        }
      
    }
</style>