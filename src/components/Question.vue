<script setup>
import { defineProps } from "vue";
import { useRouter } from "vue-router";
import {  } from "module";
const router = useRouter();
const { singleQuestion } = defineProps({
   singleQuestion: {
      type: Object,
      required: true,
   }
});
// console.log(props.id);
</script>

<template>
   {{ singleQuestion }}
   <div class="row">
      <div class="col-5 m-auto bg-primary p-3 my-5 rounded-3">
         <h1 class="text-center rounded-3 bg-info p-3">5/4</h1>
         <div class="progress my-3">
            <div
               class="progress-bar bg-danger"
               role="progressbar"
               aria-label="Info example"
               style="width: 50%"
               aria-valuenow="50"
               aria-valuemin="0"
               aria-valuemax="100"
            ></div>
         </div>
         <div class="alert alert-primary" role="alert">
            {{ singleQuestion.qus }}
         </div>
         <div>
            <ul class="list-group cursor">
               <li class="list-group-item">
                  A. {{ singleQuestion.option[0].text }}
               </li>
               <li class="list-group-item">
                  B. {{ singleQuestion.option[1].text }}
               </li>
               <li class="list-group-item">
                  C. {{ singleQuestion.option[2].text }}
               </li>
            </ul>
         </div>
         <div><button @click="router.back" class="btn btn-danger mt-3">Go back</button></div>
      </div>
   </div>
</template>

<style>
.cursor {
   cursor: pointer;
}
</style>
