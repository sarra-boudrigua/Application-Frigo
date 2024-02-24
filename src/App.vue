<template>
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
</style>
