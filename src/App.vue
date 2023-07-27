<script setup>

import UserForm from "./components/UserForm.vue";
import DataTable from "./components/DataTable.vue";
import {onMounted, ref} from "vue";
import Map from "./components/Map.vue";
import UserService from "./services/UserService.js";

// DATA
const initColumns = [
  'Name',
  'Email',
  'Website',
  'Action'
]
const data = ref([]);
const columns = ref(initColumns);
const loading = ref(true);

// METHODS
onMounted(async () => {
  data.value = [...await UserService.getData()];
  // Cambiamos el valor de la variable de carga cuando los datos estén disponibles
  loading.value = false;
});

</script>

<template>
  <div class="container  w-75">
    <UserForm/>
    <template v-if="!loading">
      <DataTable :columns="columns" :data="data"/>
      <Map :data="data"/>
    </template>
  </div>
</template>

<style scoped>

</style>
