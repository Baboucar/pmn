<template>
    <div>
      <div class="flex_nav">
     <div class="mobile__header">
        <img class="mobile__logo" src="../assets/logo.png" alt="logo">
        <span class="harmburger__icon" @click="toggleNav">&#9776;</span>
        </div>  
        <nav v-show="isNavOpen" class="nav">
         <button class="close__button" @click="closeNav">X</button>

         <div class="mobile_vertical_nav">
            <!-- <button   class="main_link link_btn"> Actuell </button> -->
            <!-- <button class="main_link link_btn"  @mouseover="openSubNav('subNav1')" @mouseleave="closeSubNav('subNav1')">Presentation</button> -->
      
            <!-- <div v-if="subNavStates.subNav1" class="innav">
               <router-link to="/about">About</router-link>
               <router-link to="">Presentsub</router-link>
               <router-link to="">Presentsub</router-link>
               <router-link to="">Presentsub</router-link>
               <router-link to="">Presentsub</router-link>
            </div> -->
            <!-- <button class="main_link link_btn"  @mouseover="openSubNav('subNav2')" @mouseleave="closeSubNav('subNav2')">Presentation</button> -->
      
            <!-- <div v-if="subNavStates.subNav2" class="innav">
               <router-link to="/about">About</router-link>
               <router-link to="">Presentsub</router-link>
               <router-link to="">Presentsub</router-link>
               <router-link to="">Presentsub</router-link>
               <router-link to="">Presentsub</router-link>
            </div> -->
            <!-- <button class="main_link link_btn"  >Presentation</button> -->
      
            <!-- <div v-if="subNavStates.subNav3" class="innav">
               <router-link to="/about">About</router-link>
               <router-link to="">Presentsub</router-link>
               <router-link to="">Presentsub</router-link>
               <router-link to="">Presentsub</router-link>
               <router-link to="">Presentsub</router-link>
            </div> -->
            <router-link to="/" class="main_link link_btn">Actuel</router-link>
            <router-link to="/about" class="main_link link_btn">About</router-link>
            <router-link to="" class="main_link link_btn">Moyens</router-link>
            
            <router-link to="" class="main_link link_btn">Presentation</router-link>
            <router-link to="" class="main_link link_btn" >Presentation</router-link>
            <router-link to="" class="main_link link_btn" >Presentation</router-link>

          </div>
        
        </nav>
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
    function openSubNav(navKey) {
            subNavStates[navKey] = true;
        }

        function closeSubNav(navKey) {
            subNavStates[navKey] = false;
        }
    function toggleSubNav(navKey) {
      subNavStates[navKey] = !subNavStates[navKey];
    }
    function toggleNav() {
      isNavOpen.value = !isNavOpen.value;
    }
    function closeNav() {
      isNavOpen.value = false;
    }
    return { isNavOpen, subNavStates, openSubNav, closeSubNav, toggleNav, closeNav };

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
  
    &__a{
      margin-top: 1rem;
    }
   

 }
 .harmburger__icon{
    margin-left: auto;
    font-size: 3rem;
    cursor: pointer;
 }
 li{
   list-style-type: none;
   padding-top: .7rem;
 }
 a{
   text-decoration: none;
   color: #FFF;
   font-size: 1rem;
   display: block;
   
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
   height: 100%;
   z-index: 1;

   

  
   
}
.mobile_vertical_nav{
   font-size: 1.7rem;
   margin-top: 1.5rem;
   margin-left: 1rem;
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

 .innav{
  
 }

 @media(min-width: 64rem){
   
   .nav{
  

   display: block !important;
   position: relative;
   height: auto;
   width: 80%;
   margin-left: 8rem;
   display: flex;
   clip-path: polygon(10% 0, 100% 0, 100% 100%, 0 100%);


  
   
   }

   .mobile_vertical_nav{
    margin-left: 4rem;
   }
   
   .harmburger__icon{
      display: none;
   }

   .mobile__header {
      justify-content: space-between; /* Adjust as necessary */
    }
    .close__button {
      display: none; /* Hide close button on larger screens */
    }
    .mobile_vertical_nav{
      display: flex;
      
    }
    .flex_nav{
      display: flex;
    }
    .main_link{
      border-bottom: none;
      padding:1rem ;
    }
    a{
   
      
 
    }

    .mobile__logo{
      max-width: 100%;
    width: 191px;
    height: 100px;
    margin-top: 0;
    }

    .innav{
     
    }

 }
</style>