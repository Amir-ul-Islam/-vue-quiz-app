<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import data from "../data/db.json";
import navbar from "../components/Navbar.vue";

//fetch all data
const allQuestionsData = ref(data);
const searchString = ref("");

//search func
function searchFunc(searchString) {
   const search = data.filter((value)=>{
      return value.name.toLowerCase().startsWith(searchString);
   })
   allQuestionsData.value = search;
}
</script>
<template>
   <!-- add navbar -->
   <navbar />
   <div class="container">
      <!-- heading section start -->
      <div class="row mb-4">
         <div class="col d-flex justify-content-center">
            <nav class="navbar bg-transparent">
               <div class="container-fluid">
                  <form class="d-flex bg-transparent" role="search">
                     <!-- search here -->
                     <input
                        class="form-control border-info m-2 bg-transparent"
                        @input="searchFunc(searchString)"
                        v-model.trim="searchString"
                        type="search"
                        placeholder="Search...."
                        aria-label="Search"
                     />
                  </form>
               </div>
            </nav>
         </div>
      </div>
      <!-- heading section end -->
      <!-- main section start -->
      <div class="row">
         <div class="col d-flex justify-content-around rounded-3">
            <div
               v-for="question in allQuestionsData"
               :key="question.id"
               class="card bg-primary"
               style="width: 16rem"
            >
               <img
                  :src="question.img"
                  class="image p-1 rounded-3 m-auto"
                  :alt="question.name"
               />
               <div class="card-body bg-info">
                  <h6>{{ question.name }}</h6>
                  <p class="card-text">
                     Total Questions: {{ question.questions.length }}
                  </p>
                  <!-- go to quizView page -->
                  <router-link
                     :to="`/quizView/${question.id}`"
                     class="btn btn-primary"
                     >Play</router-link
                  >
               </div>
            </div>
         </div>
      </div>
      <!-- main section end -->
   </div>
</template>
<style>
.image {
   width: 100px;
}
</style>
