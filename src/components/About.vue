<template>
    <div>
        <Nav />
        <section>
            <h2 class="center__text about__heading">Our Journey</h2>
            <p class="ninty_container about__desc">
                I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or
                double click me to add your own content and make changes to the font. I’m a great place for you to tell
                a story and let your users know a little more about you.
            </p>
        </section>
        <hr class="hr">

        <section class="mission ninty_container">
            <img class="img__responsive about__img" src="../assets/images/about.png" alt="mission">
            <div class="mission_desc">
                <h3 class="about__title">OUR MISSION</h3>
                <p class="about__sub--title">
                    Redefining the  Way <br>
                    We Move
                </p>
                <p>
                    I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or
                    double click me to add your own content and make changes to the font. I’m a great place for you to
                    tell a story and let your users know a little more about you.
                </p>
                <p>
                    This is a great space to write a long text about your company and your services. You can use this
                    space to go into a little more detail about your company. Talk about your team and what services you
                    provide.
                </p>
            </div>
        </section>
        <div class="fix__banner">
            
        </div>
        <Footer/>
        
    </div>
</template>

<script>
import Nav from './Nav.vue';
import Footer  from './Footer.vue';

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
.hr {

    margin-top: 2rem;

}
.about__title{
    font-weight: 100;
    font-size: .9rem;
}
.mission_desc{
    border-left: 1px solid;
    padding-left: .5rem;
   
}
.fix__banner{
   background-image: url("../assets/images/business.jpeg");
   background-size: cover; 
   background-attachment: fixed; 
   background-repeat: no-repeat; 
   width: 100%; 
   height: 700px; /* Set the height of the element, adjust as needed */
   
}
.about__sub--title{
    

    margin-left: -8px;
    letter-spacing: 0.04em;
}

@media(min-width: 64rem) {
    .ninty_container {
        font-size: 24px;
        letter-spacing: 0.04em;
        line-height: 1.8em;
        width: 75%;
    }

    .about__desc {
        width: 40%;
        margin: 0 auto;
    }

    .about__heading {
        letter-spacing: 0.08em;
        font-size: 4.5em;
        font-weight: 200;
    }
    .mission{
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 2rem;
        grid-auto-flow:dense;
        direction: rtl;
        margin-top: 4rem;
        
    }
    .about__title, .about__sub--title{
        text-align: left;
    }
    .about__sub--title{
        letter-spacing: 0.08em;
        font-size: 24px;;
    }
    .about__img{
        width: 50%;
    }
    .mission_desc{
        font-size: 16px;
        text-align: justify;
        padding-left: 2.5rem;
    }
}
</style>