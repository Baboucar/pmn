<template>
    <div>
      <div class="marquee-container">
        <div class="marquee-text">
          <p class="weight">Offre nouveaux inscrits  :  les SMS à 0.045HT€ quelque soit le volume commandé*, sans abonnement et sans engagement ! Offre réservée aux nouveaux inscrits, crédits achetés valables 90 jours.</p>
        </div>
      </div>
     <div class="flex__desktopnav">
     <div class="mobile__header">
      <router-link to="/" class="home__link">   <img class="mobile__logo" src="../assets/logo.png" alt="logo"></router-link>
     
        <span class="harmburger__icon" @click="toggleNav">&#9776;</span>
       </div> 

        <nav v-show="isNavOpen" class="nav  mobile__nav desktop__nav">
         <button class="close__button" @click="closeNav">X</button>

       
           
            <router-link to="/" class="main_link ">Actuel</router-link>
            <div class="wrapper"  @mouseenter="showSubNav('subNav1')" @mouseleave="hideSubNav('subNav1')">

            <router-link @click="toggleSubNav('subNav1')"   to="#" class="main_link ">Presentation +</router-link>
            <div class="sub__menu" v-show="subNavStates.subNav1" >
              <router-link class="sub__menu--links" to="/about">Qui sommes nous</router-link>
              <router-link class="sub__menu--links" to="/vision">Vision &amp; Mission</router-link>
              <router-link class="sub__menu--links" to="/objective">Objective</router-link>
              <router-link class="sub__menu--links" to="/president">Coordiator</router-link>
            </div>
            </div>
            <div class="wrapper"  @mouseenter="showSubNav('subNav2')" @mouseleave="hideSubNav('subNav2')">
            
            <router-link to="#" @click="toggleSubNav('subNav2')" class="main_link ">Domain +</router-link>
            </div>
            <div class="sub__menu" v-show="subNavStates.subNav2">
              <router-link class="sub__menu--links" to="/promotion">Matrise &amp; Promotion</router-link>
           


            </div>
            <div class="wrapper"  @mouseenter="showSubNav('subNav3')" @mouseleave="hideSubNav('subNav3')">

            <router-link @click="toggleSubNav('subNav3')" to="#" class="main_link ">Organization +</router-link>
            <div class="sub__menu" v-show="subNavStates.subNav3">
              <router-link class="sub__menu--links" to="/organ">Organogram</router-link>
              <router-link class="sub__menu--links" to="/gestion">Gesion</router-link>
              <router-link class="sub__menu--links" to="/moyen">Moyen</router-link>
              <router-link class="sub__menu--links" to="/copil">Copil</router-link>

             


            </div>
            </div>
            <div class="wrapper"  @mouseenter="showSubNav('subNav4')" @mouseleave="hideSubNav('subNav4')">

            <router-link @click="toggleSubNav('subNav4')" to="#" class="main_link " >Activities +</router-link>
            <div class="sub__menu" v-show="subNavStates.subNav4">
              <router-link class="sub__menu--links" to="">Services  &amp; Terrain</router-link>
   

            </div>
            </div>
            <router-link to="/achievement" class="main_link " >Réalisations</router-link>
            
            <router-link to="/contact" class="main_link " >Contact</router-link>
        
        </nav>
       
      </div>
      <div   @mouseenter="showSubNav('subNav1')" @mouseleave="hideSubNav('subNav1')" v-show="subNavStates.subNav1" class="submenu__desktop done">
        <router-link class="sub__menu--links" to="/about">Qui sommes nous</router-link>
        <router-link class="sub__menu--links" to="/vision">Vision &amp; Mission</router-link>
        <router-link class="sub__menu--links" to="/objective">Objective</router-link>
        <router-link class="sub__menu--links" to="/president">Coordiator</router-link>
      </div>
      <div  @mouseenter="showSubNav('subNav2')" @mouseleave="hideSubNav('subNav2')" v-show="subNavStates.subNav2" class="submenu__desktop dtwo">
        <router-link class="sub__menu--links" to="/promotion">Matrise &amp; Promotion</router-link>
     
      </div>
      <div  @mouseenter="showSubNav('subNav3')" @mouseleave="hideSubNav('subNav3')" v-show="subNavStates.subNav3" class="submenu__desktop dthree">
        <router-link class="sub__menu--links" to="/organ">Organogram</router-link>
        <router-link class="sub__menu--links" to="/gestion">Gesion</router-link>
        <router-link class="sub__menu--links" to="/moyen">Moyen</router-link>
        <router-link class="sub__menu--links" to="/moyen">Copil</router-link>


      </div>
      <div  @mouseenter="showSubNav('subNav4')" @mouseleave="hideSubNav('subNav4')" v-show="subNavStates.subNav4" class="submenu__desktop dfour">
        <router-link class="sub__menu--links" to="/services">Services  &amp; Terrain</router-link>
       
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

    function showSubNav(navKey) {
      subNavStates[navKey] = true;
    }
    function hideSubNav(navKey) {
      subNavStates[navKey] = false;
    }


    function toggleNav() {
      isNavOpen.value = !isNavOpen.value;
    }

    function closeNav() {
      isNavOpen.value = false;
    }

    return { isNavOpen, subNavStates, showSubNav, hideSubNav, toggleNav, closeNav,toggleSubNav };
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
  position: relative;
   border-bottom: 1px solid #FFF; /* 1px solid black line */
   padding-left: 1rem;
   display: block;

 }
.sub__menu--links{
  display: block;
  font-size: .8rem;
  padding-left: 2rem;
  width: 7rem;

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
.weight{
  font-weight: 200;
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

 .marquee-container {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 40px; /* Adjust height as needed */
  background-color: #f8f8f8; /* Background color of the marquee */
}

.marquee-text {
  position: absolute;
  white-space: nowrap;
  will-change: transform;
  animation: scrollingMarquee 70s linear infinite; /* Adjust speed by changing the duration (e.g., 10s) */
}



/* Keyframes for the scrolling effect */
@keyframes scrollingMarquee {
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
}

/* Make the marquee responsive */
@media screen and (max-width: 768px) {
  .marquee-text {
    font-size: 14px; /* Smaller font size on smaller screens */
    font-weight: 100;
  }
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
  top: 6rem;
  width: 7rem;
  z-index: 100;
}
.done{
  left: 30rem; // Adjust based on design, could be 0 for a dropdown

}
.dtwo{
  left: 42rem; // Adjust based on design, could be 0 for a dropdown

}
.dthree{
  left: 52rem;
}
.dfour{
  left: 64rem;
}
.sub__menu--links{
  display: block;
  background: $color-primary;
  padding-right: .5rem;
}
.home__link{
  display: flex;
}
.wrapper{
  display: inline;
}
 }
</style>