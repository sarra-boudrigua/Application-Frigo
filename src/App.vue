<template>
  <p>holaaa</p>
  <v-app>
    <!-- une barre de navigation -->
    <v-app-bar
      color="primary"
      density="compact"
    >
      <v-app-bar-title> Application Frigo <font-awesome-icon icon="fa-solid fa-snowflake" ></font-awesome-icon></v-app-bar-title>
      <v-btn to="/">Home</v-btn>
      <v-btn to="/PageFrigo">List</v-btn>
      <v-btn to="/PageAddElement">nouveau element</v-btn>

   </v-app-bar>

    <!-- la zone où sera affichée les différentes "pages"-->
    <v-main>
      <v-container class="homeC" v-if="$route.path === '/'">
        <div>
          <img src="https://st.depositphotos.com/1010613/54633/i/450/depositphotos_546339824-stock-photo-full-open-refrigerator-fridge-night.jpg" alt="">
        <div class="card text-center">
          <div class="card-body">
            <h5 class="card-title">Bienvenue dans le frigo de Sarra</h5>
            <p class="card-text">Clickez sur le bouton pour consulter son contenu ... </p>
            <v-btn to="/PageFrigo" >View list</v-btn>
          </div>

        </div>
        </div>
      </v-container>

      <v-container class="page">
        <!-- les "composant view" s'afficheront ici -->
        <RouterView />
      </v-container>


    </v-main>
    <!-- le footer -->
    <v-footer color="primary">
      <div>
        {{ new Date().getFullYear() }} — <strong>Frigo de Sarra</strong>
      </div>
    </v-footer>
  </v-app>

</template>
<script setup>
</script>
<style scoped>
.page{
  min-height: 100vh;
  text-align: center;
}
.card-title{
  font-family: cursive;
  color: #0766AD;
  font-weight: bold;
}

.homeC{
  img{
    width: 100%;
    align-items: center;
    padding-bottom: 12px;
  }
}


</style>
