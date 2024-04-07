<template>
    <div>
        <Nav />
        <img class="img__responsive banner" src="/images/vision_mission.webp" alt="">
        <section >
            <h2 class="center__text header">
                Our coasts and beaches are irreplaceable. Let’s save them.</h2>

            <div class="mv ninty_container">
                <div>
                    <h3 class="center__text head">Our Mission</h3>
                    <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text”
                        or double click me to add your own content and make changes to the font. Feel free to drag and
                        drop me anywhere you like on your page. I’m a great place for you to tell a story and let your
                        users know a little more about you.</p>
                    <p>This is a great space to write a long text about your company and your services. You can use this
                        space to go into a little more detail about your company. Talk about your team and what services
                        you provide. Tell your visitors the story of how you came up with the idea for your business and
                        what makes you different from your competitors. Make your company stand out and show your
                        visitors who you are.</p>
                </div>
                <div>
                    <h3 class="center__text head">Our Vision</h3>
                    <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text”
                        or double click me to add your own content and make changes to the font. Feel free to drag and
                        drop me anywhere you like on your page. I’m a great place for you to tell a story and let your
                        users know a little more about you.</p>
                    <p>
                        This is a great space to write a long text about your company and your services. You can use
                        this space to go into a little more detail about your company. Talk about your team and what
                        services you provide. Tell your visitors the story of how you came up with the idea for your
                        business and what makes you different from your competitors. Make your company stand out and
                        show your visitors who you are.
                    </p>
                </div>
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
.banner {
    width: 100%;
}
p{
    text-align: justify;
}
@media(min-width: 64rem) {
    .mv{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
        width: 70%;
        margin: 0 auto;
        line-height: 2;
    letter-spacing: 0.04em;
    }
    .header{
        font-size: 2rem;
        background-color: #EFEEE7;
        padding: 5rem;
        
    }
    .head{
     
    }
}
</style>