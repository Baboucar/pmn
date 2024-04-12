<template>
    <div class="container grid-container">
      <div
        v-for="(pdf, index) in pdfFiles"
        :key="index"
        class="card"
        @click="openPdf(pdf)"
      >
        Click to open PDF {{ index + 1 }}
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const pdfFiles = ref([
    '/rec.pdf',
    '/rec.pdf',
    '/rec.pdf',
    '/rec.pdf',
    '/rec.pdf',
    '/rec.pdf',
    '/rec.pdf',
    '/rec.pdf',
    '/rec.pdf',
    '/rec.pdf',
    '/rec.pdf',
    '/rec.pdf',
  ]);
  
  const openPdf = (pdf) => {
    // Logic to open the PDF file, e.g., open in a new tab
    window.open(pdf, '_blank');
  };
  </script>
  
  <style>

  .container{
    width: 90%;
    margin: 0 auto;
  }
  .card {
    background-color: #f9f9f9;
    border: 1px solid #ccc;
    padding: 1rem;
    text-align: center;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;
    padding-top: 2rem;
    margin-top: 1.5rem;
    margin-bottom: 1rem;
  }
  
  .card:hover {
    transform: scale(1.05);
  }

  @media(min-width: 64rem){
    .grid-container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
        padding: 1rem;
       
      }
    .container{
        width: 60%;
    }
      
      
  }
  </style>