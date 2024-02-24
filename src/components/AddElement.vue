<template>
  <div class="form-container">
    <h3>Ajout d'un nouveau element</h3>
    <form @submit.prevent="ajoutElement(nom,qte,photo)">
      <div class="form-group">
        <label for="nom">Nom:</label>
        <input type="text" id="nom" v-model="nom" required  class="form-control">
      </div>
      <div class="form-group">
        <label for="qte">Quantité:</label>
        <input type="number" id="qte" v-model="qte" required  class="form-control">
      </div>
      <div class="form-group">
        <label for="image">Image URL:</label>
        <input type="text" id="image" v-model="photo" class="form-control" >
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script setup>

import {useRouter} from "vue-router";

const url = "https://webmmi.iut-tlse3.fr/~pecatte/frigo/public/7/produits";
import { ref } from 'vue';
import Swal from "sweetalert2";

const nom = ref('');
const qte = ref('');
const photo = ref('');
const router = useRouter();
const ajoutElement = (nom, qte, photo) => {
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const fetchOptions = {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify({ nom, qte, photo}),
  };
  fetch(url,fetchOptions)
    .then((response)=>{
      return response.json();
    })
    .then((dataJSON)=>{
      console.log(dataJSON);
      router.push('/pageFrigo');
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Element ajouté",
        showConfirmButton: false,
        timer: 1600
      });
    })
    .catch( (error) => console.log(error));
}

</script>

<style scoped>
.form-container {
  max-width: 570px;
  margin: 0 auto;
  margin-top: 49px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;

}
.form-group {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

label {
  flex: 0 0 100px;
  margin-right: 10px;
}
h3{
  padding-bottom: 34px;
  padding-top: 17px;
  text-align: center;
}
button{
  color: white;
  margin-left: 379px;
  margin-top: 31px;
}
</style>
