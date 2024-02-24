<template>
  <recherche-form @search="updateSearchCriteria"></recherche-form>
<affich-elem-frigo :pcritere="motcle"></affich-elem-frigo>
</template>

<script setup>


import RechercheForm from "@/components/RechercheForm.vue";
import { ref } from 'vue';
import AffichElemFrigo from "@/components/AffichElemFrigo.vue";

const motcle = ref("");

const updateSearchCriteria = (newCritere) => {
  motcle.value = newCritere;
};
</script>

<style scoped>

</style>
