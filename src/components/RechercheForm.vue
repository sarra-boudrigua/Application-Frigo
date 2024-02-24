<template>
    <form class="form-inline my-2 my-lg-0">

      <input class="form-control mr-sm-4 col-md-4" type="search" placeholder="Search"  @input="search" id="critere" v-model="searchCritere">
      <font-awesome-icon icon="fa-solid fa-search" aria-hidden="true"></font-awesome-icon>

    </form>
<!--    <label for="searchInput">Mot clé: </label>-->
<!--    <input type="text" id="critere" v-model="searchCritere" @input="search" placeholder="Critere de recherche" />-->
</template>

<script setup>
import { ref , getCurrentInstance } from 'vue';

const searchCritere = ref('');
const { emit } = getCurrentInstance();
const search = () => {
  emit('search', searchCritere.value);
};

</script>

<style scoped>
form{
  padding: inherit;
  justify-content: center;
}
input{

}
</style>
