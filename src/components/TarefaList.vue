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
          <i
            class="fa-solid fa-trash lixo"
            @click="$emit('deletarClick', task.id)"
          ></i>
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
  background-color: #7e57c2;
  color: white;
  padding: 6px;
  border-radius: 8px;
  font-size: 0.8rem;
  vertical-align: middle;
}
.simbolos {
  display: flex;
  justify-content: end;
}
.lixo {
  color: #fa5151;
  font-size: 2rem;
  padding-left: 1%;
}
.editar {
  color: #0062ff;
  font-size: 2rem;
}
</style>
