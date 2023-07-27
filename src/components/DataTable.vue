<script setup>
const {columns, data} = defineProps({
  columns: Array,
  data: Array
})
</script>
<template>
  <div class="container">
    <table class="table table-hover">
      <thead>
      <tr>
        <th scope="col" class="d-flex">
          <div class="text-col">
            ID
          </div>
          <div class="icon-col">
            <button class="btn">
              <i class="bi bi-arrow-up"></i>
            </button>
          </div>
        </th>
        <th scope="col" class="column" v-for="item in columns" :key="item">{{ item }}</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in data">
        <th scope="row">{{ item.id }}</th>
        <td>{{ item.name }}</td>
        <td>{{ item.email }}</td>
        <td>{{ item.website }}</td>
        <td>
          <i class="bi bi-pencil m-1 icon-edit"></i>
          <i class="bi bi-trash-fill m-1 icon-delete"></i>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped lang="scss">
.icon-edit {
  color: #35B9B4;
}

.icon-delete {
  color: #E91D62;
}

.column {
  color: #989898;
  font-weight: 500;
}

.btn {
  padding: 0px;
}
</style>