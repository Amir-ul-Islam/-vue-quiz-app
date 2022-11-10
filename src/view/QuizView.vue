<script setup>
import { computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
// import result from "../components/Result.vue";
import question from "../components/Question.vue";
import data from "../data/db.json";

const allQuestionsData = ref(data);
let next = ref(0);
const quizId = parseInt(useRoute().params.id);
const questionData = allQuestionsData.value.find((value, index) => {
   return value.id === quizId;
});
const singleQuestion = computed(() => {
   return questionData.questions[next.value];
});
// console.log(typeof singleQuestion.value);
</script>
<template>
   <question :singleQuestion="singleQuestion"  />

   <div>
      {{ next }}, {{ singleQuestion }}
      <button @click="next++" class="btn btn-danger mt-3">Next</button>
      <!-- <button @click="ne()" class="btn btn-danger mt-3">Next</button> -->
      <!-- <button @click="ne()" class="btn btn-danger mt-3">Next</button> -->
   </div>
</template>
