<template>
    <div>
        <Nav />
        <h1 class="center__text header">Objective</h1>
        <div class="grid_column ninty_container">
            <img class="img__responsive" src="/images/side-image.jpeg" alt="">
            <div>
            <p class="tab">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam eveniet culpa magni magnam facilis
                voluptas ipsum a! Aut quos ducimus voluptate dolorem quisquam laudantium perferendis praesentium nisi
                quod repellat delectus ab, ut, expedita dicta, dignissimos nostrum accusantium animi officiis veritatis
                reprehenderit enim vel non sit fugit? Rerum pariatur repellendus dolorem?
            </p>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam eveniet culpa magni magnam facilis
                voluptas ipsum a! Aut quos ducimus voluptate dolorem quisquam laudantium perferendis praesentium nisi
                quod repellat delectus ab, ut, expedita dicta, dignissimos nostrum accusantium animi officiis veritatis
            </p>
        </div>
        </div>
        <div class="grid_column ninty_container">
            <div>
            <p class="tab">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam eveniet culpa magni magnam facilis
                voluptas ipsum a! Aut quos ducimus voluptate dolorem quisquam laudantium perferendis praesentium nisi
                quod repellat delectus ab, ut, expedita dicta, dignissimos nostrum accusantium animi officiis veritatis
                reprehenderit enim vel non sit fugit? Rerum pariatur repellendus dolorem?
            </p>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam eveniet culpa magni magnam facilis
                voluptas ipsum a! Aut quos ducimus voluptate dolorem quisquam laudantium perferendis praesentium nisi
                quod repellat delectus ab, ut, expedita dicta, dignissimos nostrum accusantium animi officiis veritatis
                
            </p>
           </div>
            <img class="img__responsive" src="/images/side-image.jpeg" alt="">
        </div>
        <Footer/>
    </div>
</template>

<script>
import Nav from "./Nav.vue";
import Footer from './Footer.vue';
export default {
    components: {
        Nav,
        Footer
    }
}
</script>

<style lang="scss" scoped>
.header {
    font-size: 2rem;
    background-color: #EFEEE7;
    padding: 5rem;
    margin-top: 0;
}
p{
    text-align: justify;
}

@media(min-width: 65rem) {
    .header {
        letter-spacing: 0.08em;
        font-size: 4.5em;
        font-weight: 200;
        padding: 8rem;
    }
    .grid_column{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 3rem;
        width: 80%;
        margin: 0 auto;
        padding-top: 2rem;
        padding-bottom: 2rem;
    }
    .tab{
     display: initial;   
    }
}
</style>