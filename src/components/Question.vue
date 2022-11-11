<script setup>
import { defineProps, defineEmits } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const emit = defineEmits(["emitOptionSelected"]);
const { singleQuestion,questionStatus,barStatus } = defineProps({
   singleQuestion: {
      type: Object,
      required: true,
   },
   questionStatus: {
      type: String,
      required: true,
   },
   barStatus: {
      type: String,
      required: true,
   },
});
</script>

<template>
   <div class="row">
      <div class="col-5 m-auto bg-primary p-3 my-5 rounded-3">
         <h1 class="text-center rounded-3 bg-info p-3">{{ questionStatus }}</h1>
         <div class="progress my-3">
            <div
               class="progress-bar bg-danger"
               role="progressbar"
               aria-label="Info example"
               :style="{width: barStatus}"
               aria-valuenow="50"
               aria-valuemin="0"
               aria-valuemax="100"
            ></div>
         </div>
         <div class="alert alert-primary" role="alert">
            {{ singleQuestion.qus }}
         </div>
         <div>
            <ul
               v-for="option in singleQuestion.option"
               :key="option.id"
               class="list-group cursor"
            >
               <li
                  @click="$emit('emitOptionSelected', option.isCorrect)"
                  class="list-group-item"
               >
                  A. {{ option.text }}
               </li>
            </ul>
         </div>
         <div>
            <button @click="router.back" class="btn btn-danger mt-3">
               Go back
            </button>
         </div>
      </div>
   </div>
</template>

<style>
.cursor {
   cursor: pointer;
}
</style>
