<script setup>
import { computed, ref, defineEmits } from "vue";
import { useRoute } from "vue-router";
import data from "../data/db.json";
import result from "../components/Result.vue";
import question from "../components/Question.vue";

const allQuestionsData = ref(data);
const currentIndexValue = ref(0);
const totalCorrectAnswer = ref(0);
const quizId = parseInt(useRoute().params.id);

//find specific Question data by quizId
const questionData = allQuestionsData.value.find((value, index) => {
   return value.id === quizId;
});

//calculate question, bar and totalAnswerStatus status calculation
const questionStatus = () =>
   `${currentIndexValue.value + 1} / ${questionData.questions.length}`;
const barStatus = () =>
   ((currentIndexValue.value + 1) / questionData.questions.length) * 100 + "%";
const totalAnswerStatus = () =>
   `${totalCorrectAnswer.value} / ${questionData.questions.length}`;

//currentIndexValue increase and totalCorrectAnswer calculate by question component $emit.
function OptionSelected(isCorrect) {
   if (isCorrect) totalCorrectAnswer.value++;
   currentIndexValue.value++;
}
</script>
<template>
   <!-- question component render by currentIndexValue -->
   <div v-if="currentIndexValue < questionData.questions.length">
      <question
         @emitOptionSelected="OptionSelected"
         :singleQuestion="questionData.questions[currentIndexValue]"
         :questionStatus="questionStatus()"
         :barStatus="barStatus()"
      />
   </div>
   <!-- result componet  -->
   <div v-else>
      <result :totalAnswerStatus="totalAnswerStatus()" />
   </div>
</template>
