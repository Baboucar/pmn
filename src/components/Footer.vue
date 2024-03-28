<template>
    <footer class="footer">
        <div>
            <img class="mobile__logo" src="../assets/logo.png" alt="logo">

        <p class="footer_text ninty_container">
            Mafoder Urban Development is your reference partner for the supply of turnkey products for urban
            development.
        </p>
    </div>
        <div class="ninty_container">
            <h3>Menu</h3>
            <ul>
                <li><a href="http://">Mot du Coordonnateur</a></li>
                <li><a href="http://">Mot du Coordonnateur</a></li>
                <li><a href="http://">Mot du Coordonnateur</a></li>
                <li><a href="http://">Mot du Coordonnateur</a></li>
                <li><a href="http://">Mot du Coordonnateur</a></li>


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
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
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
 .last{
    display: inline-block;
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