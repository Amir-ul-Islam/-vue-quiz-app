<script setup>
import { defineProps } from "vue";
import { useRouter } from "vue-router";

const routerBack = useRouter();
const { totalAnswerStatus } = defineProps({
   totalAnswerStatus: {
      type: String,
      required: true,
   },
});
</script>
<template>
   <div class="row my-5">
      <div class="col-5 rounded-3 p-3 m-auto">
         <div class="card text-center">
            <div class="card-header bg-info">Congratulations</div>
            <div class="card-body">
               <h5 class="card-title">Your Score-</h5>
               <!-- show total result by totalAnswerStatus props -->
               <h1 class="bg-primary rounded-5 p-2 text-bg-dark">{{ totalAnswerStatus }}</h1>
            </div>
            <button @click="routerBack.back" class="btn btn-danger">Go Home</button>
         </div>
      </div>
   </div>
</template>
