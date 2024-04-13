<template>
    <Nav/>
    <h1 class="center__text header">Our Team</h1>

    <div class="team-container">
      <div class="team-card" v-for="member in teamMembers" :key="member.name">
        <img :src="member.photo" :alt="member.name" class="team-photo"/>
        <h3 class="team-name">{{ member.name }}</h3>
        <p class="team-title">{{ member.title }}</p>
        <div class="team-socials">
          <a v-for="icon in member.socials" :key="icon.name" :href="icon.url" target="_blank">
            <img :src="icon.img" :alt="icon.name"/>
          </a>
        </div>
      </div>
    </div>
    <Footer/>
  </template>
  
  <script>
  import Nav from "./Nav.vue";
  import Footer from "./Footer.vue";
  export default {
    name: 'TeamGrid',
    components:{
    Nav,
    Footer
    },
    data() {
      return {
        teamMembers: [
          {
            name: 'Alexander Gary',
            title: 'Finance Head',
            photo: '/team.webp',
            socials: [
              { name: 'Facebook', url: 'https://facebook.com', img: '/facebook.png' },
              { name: 'Instagram', url: 'https://facebook.com', img: '/insta.png' },
              { name: 'LinkedIn', url: 'https://facebook.com', img: '/linked.png' },
            ]
          },
          {
            name: 'Alexander Gary',
            title: 'Finance Head',
            photo: '/team.webp',
            socials: [
            { name: 'Facebook', url: 'https://facebook.com', img: '/facebook.png' },
              { name: 'Instagram', url: 'https://facebook.com', img: '/insta.png' },
              { name: 'LinkedIn', url: 'https://facebook.com', img: '/linked.png' },
            ]
          },
          {
            name: 'Alexander Gary',
            title: 'Finance Head',
            photo: '/team.webp',
            socials: [
           
            { name: 'Facebook', url: 'https://facebook.com', img: '/facebook.png' },
              { name: 'Instagram', url: 'https://facebook.com', img: '/insta.png' },
              { name: 'LinkedIn', url: 'https://facebook.com', img: '/linked.png' },
            ]
          },
          {
            name: 'Alexander Gary',
            title: 'Finance Head',
            photo: '/team.webp',
            socials: [
           
            { name: 'Facebook', url: 'https://facebook.com', img: '/facebook.png' },
              { name: 'Instagram', url: 'https://facebook.com', img: '/insta.png' },
              { name: 'LinkedIn', url: 'https://facebook.com', img: '/linked.png' },
            ]
          },
          {
            name: 'Alexander Gary',
            title: 'Finance Head',
            photo: '/team.webp',
            socials: [
           
            { name: 'Facebook', url: 'https://facebook.com', img: '/facebook.png' },
              { name: 'Instagram', url: 'https://facebook.com', img: '/insta.png' },
              { name: 'LinkedIn', url: 'https://facebook.com', img: '/linked.png' },
            ]
          },
          {
            name: 'Alexander Gary',
            title: 'Finance Head',
            photo: '/team.webp',
            socials: [
           
            { name: 'Facebook', url: 'https://facebook.com', img: '/facebook.png' },
              { name: 'Instagram', url: 'https://facebook.com', img: '/insta.png' },
              { name: 'LinkedIn', url: 'https://facebook.com', img: '/linked.png' },
            ]
          },
        ]
      };
    }
  };
  </script>
  
  <style scoped>
 
  .team-container{
    width: 90%;
    gap: 2rem;
    margin: 1rem auto;
  }
  .team-card {
    flex-basis: calc(33.333% - 1rem);
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    text-align: center;
    padding: 1rem;
  }
  
  .team-photo {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 1rem;
  }
  
  .team-name {
    margin: 0.5rem 0;
  }
  
  .team-title {
    color: #666;
    margin-bottom: 1rem;
  }
  
  .team-socials {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
  }
  
  .team-socials img {
    width: 24px;
    height: 24px;
  }

  .header {
    font-size: 2rem;
    background-color: #EFEEE7;
    padding: 5rem;
    margin-top: 0;
}
  
  @media (min-width: 64rem) {
    .team-container{
     display: grid;
     grid-template-columns: 1fr 1fr 1fr;
  
     gap: 2rem;
    }

    .header {
        letter-spacing: 0.08em;
        font-size: 4.5em;
        font-weight: 200;
       
    }
  }
  
 
  </style>
  