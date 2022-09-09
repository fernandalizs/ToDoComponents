<template>
  <div>
    <h2>Cadastrar tarefa</h2>
    <input
      type="text"
      name="title"
      id="title"
      placeholder="Entre com a tarefa"
      v-model="form.title"
    />
    <input
      type="text"
      name="project"
      v-model="form.project"
      placeholder="Entre com o projeto"
    />
    <button class="btn" @click="salvarTarefa">Salvar</button>
  </div>
</template>
<script>
import TasksApi from "../TasksApi.js";

export default {
  props: [],
  data: () => {
    return {
      listaDeTarefas: [],
      exibir: {
        lista: true,
        form: false,
      },
      form: {
        title: "",
        project: "",
      },
    };
  },
  methods: {
    salvarTarefa() {
      this.exibir.form = false;
      this.exibir.lista = true;
      const novaTarefa = {
        title: this.form.title,
        project: this.form.project,
        date: new Date().toLocaleDateString("pt"),
      };
      TasksApi.createTask(novaTarefa, () => {
        this.$emit("salvarClick");
      });
    },
  },
};
</script>
