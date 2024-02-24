<template>
  <div class="form-container">
    <h3>Modification d'un nouveau element</h3>
    <form @submit.prevent="UpdateElement">
      <div class="form-group">
        <label for="nom">Nom:</label>
        <input type="text" id="nom" v-model="nom"   class="form-control">
      </div>
      <div class="form-group">
        <label for="qte">Quantité:</label>
        <input type="number" id="qte" v-model="qte" class="form-control">
      </div>
      <div class="form-group">
        <label for="image">Image URL:</label>
        <input type="text" id="image" v-model="photo" class="form-control" >
      </div>
      <div class="actions">
        <button @click="redirect"  class="btn btn-secondary">Annuler</button>
      <button type="submit"  class="btn btn-primary">Submit</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import store from "@/store";
import {ref} from "vue";
import {useRouter} from "vue-router";
import Swal from "sweetalert2";
const url = "https://webmmi.iut-tlse3.fr/~pecatte/frigo/public/7/produits";

const selectedElement = store.state.selectedElement;
const id = ref(selectedElement.id);
const nom = ref(selectedElement.nom);
const qte = ref(selectedElement.qte);
const photo = ref(selectedElement.photo);
const router = useRouter();
function UpdateElement() {
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const fetchOptions = {
    method: "PUT",
    headers: myHeaders,
    body: JSON.stringify({id: id.value,nom: nom.value, qte: qte.value, photo: photo.value}),
  };
  fetch(url  ,fetchOptions)
    .then((response)=>{
      return response.json();
    })
    .then((dataJSON) => {
      console.log(dataJSON);
      const updatedElement = dataJSON;
      store.dispatch('setSelectedElement', updatedElement);
      router.push('/pageFrigo');
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Element modifié",
        showConfirmButton: false,
        timer: 1600
      });
      })
    .catch( (error) => console.log(error));
}
function redirect(){
  router.push('/PageFrigo');
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
.actions {
  color: white;
  margin-left: 367px;
  margin-top: 28px;
  display: flex;
  justify-content: space-around;
}
</style>
