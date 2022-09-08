<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="task in tasks" :key="task.id">{{ task }}</li>
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
<style scoped></style>
