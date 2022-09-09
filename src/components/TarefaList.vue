<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul class="collection">
      <li v-for="task in tasks" :key="task.id" class="collection-item">
        <h5>
          {{ task.title }}
          <span class="task-badge right-align">{{ task.project }}</span>
        </h5>
        <div class="simbolos">
          <i class="fa-solid fa-pen-to-square editar"></i>
          <i class="fa-solid fa-trash lixo"></i>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TarefaList",
  props: {
    msg: String,
    tasks: Array,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.task-badge {
  background-color: #929292;
  color: white;
  padding: 6px;
  border-radius: 6px;
  font-size: 0.8rem;
  vertical-align: middle;
}
</style>
