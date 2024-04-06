<template>
    <div>
     <header>
        <a href="">Logo</a>
        <nav class="navbar">
            <ul>
                <li><router-link to="">Home</router-link></li>
                <li><router-link to="">About +</router-link></li>
                <ul>
                    <li><router-link to="">Review</router-link></li>
                    <li><router-link to="">Review</router-link></li> 
                </ul>
                <li><router-link to="">Review</router-link></li>
                <li><router-link to="">Gallary</router-link></li>
                <li><router-link to="">Contact</router-link></li>
                
            </ul>
        </nav>
     </header>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
   header{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    box-shadow: 0 5px 10px rgba(0,0,0,.1);
    padding: 0px 7%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 1000;
    
   }

   header .navbar ul li{
    position: relative;
    float: left;
   }

   header .navbar ul li a {
    font-size: 20px ;
    padding: 20px;
    columns: #333;
    display: block;
   }

   header .navbar ul li a:hover{
     background: #333;
     color: white;
   }

   header .navbar ul li ul {
    position: absolute;
    left: 0;
    width: 200px;
    background:grey ;
    display: none;
   }
   header .navbar ul li ul li {
    width: 100%;
    border-top: 1px solid #dd5544;
   }
   header .navbar ul li:hover > ul{
    display: initial;
   }
</style>