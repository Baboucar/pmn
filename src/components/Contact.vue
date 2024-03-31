<template>
    <div>
        <Nav />
        <section class="ninty_container">

            <form action="" class="ninty_container">
                <h3 class="form__title">

                    For any inquiries, please call or email us. <br> Alternatively you can fill in the following contact
                    form.
                </h3>
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
input {
    width: 100%;
    height: 40px;
    margin-top: 1rem;
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

@media(min-width:64rem) {
    .group {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
    }
    .ninty_container{
        width: 70%;
    }
    .form__title{
        font-size: 35px;
    }

}
</style>