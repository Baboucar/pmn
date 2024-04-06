<template>
    <div>
     <div class="flex__desktopnav">
     <div class="mobile__header">
        <img class="mobile__logo" src="../assets/logo.png" alt="logo">
        <span class="harmburger__icon" @click="toggleNav">&#9776;</span>
       </div> 

        <nav v-show="isNavOpen" class="nav  mobile__nav desktop__nav">
         <button class="close__button" @click="closeNav">X</button>

       
           
            <router-link to="/" class="main_link ">Actuel</router-link>
            <router-link @click="toggleSubNav('subNav1')" to="#" class="main_link ">Groupe +</router-link>
            <div class="sub__menu" v-show="subNavStates.subNav1">
              <router-link class="sub__menu--links" to="/president">Mot du president</router-link>
              <router-link class="sub__menu--links" to="/about">About</router-link>
              <router-link class="sub__menu--links" to="">Link2</router-link>
              <router-link class="sub__menu--links" to="">Link2</router-link>


            </div>
            <router-link to="#" @click="toggleSubNav('subNav2')" class="main_link ">Domain +</router-link>
            <div class="sub__menu" v-show="subNavStates.subNav2">
              <router-link class="sub__menu--links" to="/moyen">Moyen</router-link>
              <router-link class="sub__menu--links" to="">Link2</router-link>
              <router-link class="sub__menu--links" to="">Link2</router-link>
              <router-link class="sub__menu--links" to="">Link2</router-link>


            </div>
            <router-link @click="toggleSubNav('subNav3')" to="#" class="main_link ">Products +</router-link>
            <div class="sub__menu" v-show="subNavStates.subNav3">
              <router-link class="sub__menu--links" to="/product">Products</router-link>
              <router-link class="sub__menu--links" to="">Link2</router-link>
              <router-link class="sub__menu--links" to="">Link2</router-link>
              <router-link class="sub__menu--links" to="">Link2</router-link>


            </div>
            <router-link @click="toggleSubNav('subNav4')" to="#" class="main_link " >Activities +</router-link>
            <div class="sub__menu" v-show="subNavStates.subNav4">
              <router-link class="sub__menu--links" to="">Link2</router-link>
              <router-link class="sub__menu--links" to="">Link2</router-link>
              <router-link class="sub__menu--links" to="">Link2</router-link>
              <router-link class="sub__menu--links" to="">Link2</router-link>


            </div>
            <router-link to="/achievement" class="main_link " >Réalisations</router-link>
            
            <router-link to="/contact" class="main_link " >Contact</router-link>
        
        </nav>
       
      </div>
      <div v-show="subNavStates.subNav1" class="submenu__desktop done">
        <router-link class="sub__menu--links" to="/president">Pesident</router-link>
        <router-link class="sub__menu--links" to="/about">About</router-link>
        <router-link class="sub__menu--links" to="">Link2</router-link>
        <router-link class="sub__menu--links" to="">Link2</router-link>
      </div>
      <div v-show="subNavStates.subNav2" class="submenu__desktop dtwo">
        <router-link class="sub__menu--links" to="">Link2</router-link>
        <router-link class="sub__menu--links" to="">Link2</router-link>
        <router-link class="sub__menu--links" to="">Link2</router-link>
        <router-link class="sub__menu--links" to="">Link2</router-link>
      </div>
      <div v-show="subNavStates.subNav3" class="submenu__desktop dthree">
        <router-link class="sub__menu--links" to="">Link2</router-link>
        <router-link class="sub__menu--links" to="">Link2</router-link>
        <router-link class="sub__menu--links" to="">Link2</router-link>
        <router-link class="sub__menu--links" to="">Link2</router-link>
      </div>
      <div v-show="subNavStates.subNav4" class="submenu__desktop dfour">
        <router-link class="sub__menu--links" to="">Link2</router-link>
        <router-link class="sub__menu--links" to="">Link2</router-link>
        <router-link class="sub__menu--links" to="">Link2</router-link>
        <router-link class="sub__menu--links" to="">Link2</router-link>
      </div>

      </div>
    
</template>

<script>
import { reactive, ref } from 'vue';

    export default {
      setup() {
   const isNavOpen = ref(false);

   
    const subNavStates = reactive({
      subNav1: false,
      subNav2: false,
      subNav3: false,
      subNav4:false
      // Add more sub-navigation states as needed
    });
    function toggleSubNav(navKey) {
      subNavStates[navKey] = !subNavStates[navKey];
    }

    function toggleNav() {
      isNavOpen.value = !isNavOpen.value;
    }

    function closeNav() {
      isNavOpen.value = false;
    }

    return { isNavOpen, subNavStates, toggleSubNav, toggleNav, closeNav };
  }

  }
    
</script>


<style lang="scss" scoped>
@import "../assets/base.scss";
*{
   margin: 0;
   padding: 0;
   font-weight: bold;
}
 .mobile__header{
    display: flex;
 }
 .mobile__logo{
    max-width: 100%;
    width: 95px;
    margin-top: 1rem;
    color: #FFF;
   

 }
 .link_btn{
  border: none;
  background-color: $color-primary;
  font-size: 1rem;
  color: white;
  display: block;
  width: 100%;
  text-align: left;
  padding-top: .9rem;
  
 }
 .main_link{
   border-bottom: 1px solid #FFF; /* 1px solid black line */
   padding-left: 1rem;
   display: block;

 }
.sub__menu--links{
  display: block;
  font-size: .8rem;
  padding-left: 2rem;

}
 .harmburger__icon{
    margin-left: auto;
    font-size: 3rem;
    cursor: pointer;
 }
 li{
   list-style-type: none;
  
 }
 a{
   text-decoration: none;
   color: #FFF;
   font-size: 1rem;
   
   
 }


 /* Define the enter and leave animations */
.fade-enter-active, .fade-leave-active {
   transition: opacity 0.5s;
 }
 .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
   opacity: 0;
 }
nav{
  
   position: absolute;
   top: 0;
   
   width: 100%;
   background: $color-primary;
   height: 4000px;
   z-index: 1;

    
   
}
.mobile__nav{
   font-size: 1.7rem;
  
}

.close__button {
   background: none;
   border: none;
   font-size: 1.5rem;
   cursor: pointer;
   color: #FFF;
   display: flex;
   margin-left: auto;
   padding-right: 2rem;
   padding-top: 2rem;
 }

 .submenu__desktop{
  display: none;
 }

 @media(min-width: 64rem){
   
   .nav{
   position: relative;
   display: inline-block !important;
   height: auto;
   top: 0;
   clip-path: polygon(10% 0, 100% 0, 100% 100%, 0 100%);
   
   }

   .desktop__nav{
    width: 80%;
    margin-left: auto;
   }
   
   .harmburger__icon{
      display: none;
   }

   
    .close__button {
      display: none; /* Hide close button on larger screens */
    }
  
    .main_link{
      position: relative;
      border-bottom: none;
      display: inline-block;
      padding-left: 5rem;
      padding-top: 1.5rem;
     
    }
   

    .mobile__logo{
      max-width: 100%;
    width: 165px;
    height: 75px;
    margin-top: 0;
    }
.flex__desktopnav{
  display: flex;
}
.sub__menu{
 display: none;

}
.submenu__desktop{
  display: block;
  position: absolute;
  padding-top: .8rem;
  top: 2.5rem;
  width: 7rem;
  z-index: 100;
}
.done{
  left: 30rem; // Adjust based on design, could be 0 for a dropdown

}
.dtwo{
  left: 40rem; // Adjust based on design, could be 0 for a dropdown

}
.dthree{
  left: 50rem;
}
.dfour{
  left: 60rem;
}
.sub__menu--links{
  display: block;
}

 }
</style>