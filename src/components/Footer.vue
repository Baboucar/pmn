<template>
    <footer class="footer">
        <div>
            <img class="mobile__logo" src="../assets/logo.png" alt="logo">

        <p class="footer_text ninty_container">
            Mafoder Urban Development is your reference partner for the supply of turnkey products for urban
            development.
        </p>
       <div class="ninty_container">
        <a href=""><img class="icon" src="/ifacebook.png" alt="" srcset=""></a>
        <a href=""><img class="icon" src="/ilinkedin.png" alt="" srcset=""></a>
        <a href=""><img class="icon" src="/itwitter.png" alt="" srcset=""></a>
       </div>
    </div>
        <div class="ninty_container">
            <h3>Menu</h3>
            <ul>
                <li><router-link to="/gallery">Gallery</router-link></li>
                <li><router-link to="/pdf">Files</router-link></li>
                <li><router-link to="/team">Team</router-link></li>
                <li><router-link to="">Mot du Coordonnateur</router-link></li>
                <li><router-link to="">Mot du Coordonnateur</router-link></li>


               


            </ul>
        </div>
        <div class="ninty_container">
            <h3>Quicklinks</h3>
            <ul>
                <li><a href="http://">Mot du Coordonnateur</a></li>
                <li><a href="http://">Mot du Coordonnateur</a></li>
                <li><a href="http://">Mot du Coordonnateur</a></li>
                <li><a href="http://">Mot du Coordonnateur</a></li>
                <li><a href="http://">Mot du Coordonnateur</a></li>





            </ul>
        </div>
        <div class="ninty_container last">
            <h3>Menu</h3>
            <ul>
                
                <li>123445565555555</li>
                <li><a href="mailto:">info@projectmobliliernational.sn</a></li>





            </ul>
        </div>
    </footer>
    <div class="reserve">
        © {{ currentYear }} Your Company Name. All rights reserved.
    </div>
</template>

<script>
export default {


    data() {
        return {
            currentYear: new Date().getFullYear()
        };
    }
}

</script>

<style lang="scss" scoped>
@import "../assets/base.scss";
.footer{
    background: #282828;
    color: #FFFFFF;
}
.footer__text{
    text-align: justify;
    margin-top: 1.5rem;

}
.mobile__logo{
    max-width: 100%;
    width: 95px;
    margin-top: 1rem;
    margin-left: 1.4rem;

 }
 .icon{
 
 }
 .last{
    display: inline-block;
 }
 .reserve{
    text-align: center;
    background:$color-primary;
    color: #FFFFFF;
 }
@media(min-width:64rem){
    .footer{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }

    ul{
        padding: 0;
    }
}

</style>