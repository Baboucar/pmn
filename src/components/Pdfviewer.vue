<template>
    <div>
   <Nav/>
   <Pdf/>
   <Footer/>
    </div>
</template>

<script>
import Nav from "./Nav.vue";
import Pdf  from "./Pdf.vue";
import Footer from "./Footer.vue";
    export default {
        components:{
            Nav,
            Pdf,
            Footer
        }
    }
</script>

<style lang="scss" scoped>

</style>