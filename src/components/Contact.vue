<template>
    <div>
        <Nav />
        <section class="ninty_container">
          
            <form action="" class="ninty_container" ref="form" @submit.prevent="sendEmail">
                <h3 class="form__title">

                    For any inquiries, please call or email us. <br> Alternatively you can fill in the following contact
                    form.
                </h3>
                <p class="address">
                    Adresse :  Diamniadio cité senegindia Immeuble simba en face siége Teylium
                </p>
                <p>Send Us a Message</p>
                <div v-if="message.content" :class="{'message-success': message.type === 'success', 'message-error': message.type === 'error'}">
                    {{ message.content }}
                </div>
                <div class="group">
                    <div>

                        <input required type="text" name="name" placeholder="Full Name*" id="">
                    </div>
                    <div>

                        <input required type="text" name="company" placeholder="Company*" id="">
                    </div>
                </div>
                <div class="group">
                    <div>

                        <input required type="number" name="number" placeholder="Phone Number*" id="">
                    </div>
                    <div>

                        <input required type="Email" name="email" placeholder="Email*" id="">
                    </div>
                </div>
                <div>
                    <input type="text" name="subject" placeholder="Subject" id="">
                </div>
                <div>
                    <textarea required placeholder="message*" name="message" id="" cols="30" rows="10"></textarea>
                </div>
               
                <input class="button" type="submit" value="Send">
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
import emailjs from '@emailjs/browser';

export default {
    components: {
        Nav,
        Footer
    },
    data() {
        return {
            message: {
                content: '',
                type: '' // 'success' or 'error'
            }
        };
    },
    methods: {
    sendEmail() {
        emailjs.sendForm('service_obkwpg6', 'template_uqnlxfp', this.$refs.form, 'rSsLKVvJyAgMvlIk3')
            .then(() => {
                this.message.content = 'Email sent successfully!';
                this.message.type = 'success';
            })
            .catch((error) => {
                this.message.content = 'Failed to send email: ' + error.text;
                this.message.type = 'error';
            });
    },
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

.button {
    padding: .8rem;
    background: #069861;
    border: none;
    color: #FFFFFF;
    width: 6rem;
    margin-bottom: 1rem;
    cursor: pointer;
}
.address{
    font-size: 17px;
    font-weight: 400;
    
}
.message-success {
    color: rgb(92, 178, 92);
}

.message-error {
    color: red;
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