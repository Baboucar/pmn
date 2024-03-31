<template>
    <div>
        <Nav />
        <section class="ninty_container">

            <form action="" class="ninty_container">
                <h3 class="form__title">

                    For any inquiries, please call or email us. <br> Alternatively you can fill in the following contact
                    form.
                </h3>
                <p class="address">
                    Adresse :  Diamniadio cité senegindia Immeuble simba en face siége Teylium
                </p>
                <p>Send Us a Message</p>
                <div class="group">
                    <div>

                        <input type="text" name="" placeholder="Full Name*" id="">
                    </div>
                    <div>

                        <input type="text" name="" placeholder="Company*" id="">
                    </div>
                </div>
                <div class="group">
                    <div>

                        <input type="number" name="" placeholder="Phone Number*" id="">
                    </div>
                    <div>

                        <input type="Email" name="" placeholder="Email*" id="">
                    </div>
                </div>
                <div>
                    <input type="text" name="" placeholder="Subject" id="">
                </div>
                <div>
                    <textarea placeholder="message*" name="" id="" cols="30" rows="10"></textarea>
                </div>
                <button>Send</button>
            </form>
        </section>
        <section class="map">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4305.943855550646!2d-17.2079657!3d14.725658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec19f05cb2ebde7%3A0x7d8669f148b7e13d!2sTeyliom!5e1!3m2!1sen!2sgm!4v1711901064531!5m2!1sen!2sgm"
                width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
        </section>
        <Footer />
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
input {
    width: 100%;
    height: 40px;
    margin-top: 1rem;
}
iframe{
    width: 100%;
    display: flex;
}

textarea {
    width: 100%;
    margin-top: 1rem;
}

button {
    padding: .8rem;
    background: #069861;
    border: none;
    color: #FFFFFF;
    width: 6rem;
    margin-bottom: 1rem;
}
.address{
    font-size: 17px;
    font-weight: 400;
    
}

@media(min-width:64rem) {
    .group {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
    }

    .ninty_container {
        width: 70%;
    }

    .form__title {
        font-size: 35px;
    }
   iframe{
     height: 600px;
   }
}
</style>