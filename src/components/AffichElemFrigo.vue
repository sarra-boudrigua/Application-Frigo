<template>
  <p v-if="listeElement.length== 0">Aucun produit trouvé</p>
  <v-row dense>
    <v-col
      v-for="e in listeElement"
      :key="e.id"
      cols="12"
      sm="6"
      md="3"
      lg="2"
      xl="2">
      <v-card color="#E0F4FF">
        <v-img
          :src="e.photo"
          height="200px"
          cover
        ></v-img>
        <v-card-title>
          {{e.nom}}
        </v-card-title>
        <v-card-text>
        Quantité = {{e.qte}}
        </v-card-text>
        <div class="action">
          <button type="button" class="btn btn-danger" ><font-awesome-icon icon="fa-solid fa-trash" @click="Delete(e.id)" ></font-awesome-icon></button>
          <button @click="redirect(e)" type="button" class="btn btn-primary"><font-awesome-icon icon="fa-solid fa-pen-to-square" ></font-awesome-icon></button>

        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>


import {onMounted, reactive, watch} from "vue";
import Frigo from "@/Frigo";
import router from "@/router";
import store from "@/store";
import Swal from "sweetalert2";

const listeElement = reactive([]);
let props = defineProps(["pcritere"])

const url = "https://webmmi.iut-tlse3.fr/~pecatte/frigo/public/7/produits"
function redirect(element){
  store.dispatch('setSelectedElement',element);
  router.push("/PageUpdate");
}
function getElement() {
  const fetchOptions = { method: "GET" };
  fetch(url , fetchOptions)
.then((response) => {
    return response.json();
  })
    .then((dataJSON) => {
      let frigo = dataJSON;
      console.log(frigo);
      listeElement.splice(0,listeElement.length)   //vider la liste
      for (let f of frigo){
        listeElement.push(new Frigo(f))
      }
    })
    .catch((error) => {
      console.log(error);
    });
}
function searchElement(){
  const fetchOptions = { method: "GET" };
  fetch(url+"?search="+ props.pcritere , fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
      let frigo = dataJSON;
      console.log(frigo);
      listeElement.splice(0,listeElement.length)   //vider la liste
      for (let f of frigo){
        listeElement.push(new Frigo(f))
      }
    })
    .catch((error) => {
      console.log(error);
    });
}
function Delete(id) {
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const fetchOptions = {
    method: "Delete",
  };
  fetch(url+"/"+ id ,fetchOptions)
    .then((response)=>{

      return response.json();
    })
    .then((dataJSON)=>{
      console.log(dataJSON);
      getElement();
      Swal.fire({
        position: "top-end",
        icon: "warning",
        title: "Element supprimé",
        showConfirmButton: false,
        timer: 1600
      });
    })
    .catch( (error) => console.log(error));}


onMounted(()=>{
  getElement();

})
watch(props, (newcritere) => {
  console.log(newcritere)
  searchElement()
});
</script>

<style scoped>

.action{
  padding: 11px;
  display: flex;
  justify-content: space-evenly;
}

button{
  color: white;
}

</style>
