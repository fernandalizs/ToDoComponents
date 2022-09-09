<template>
  <div id="app">
    <nav class="orange">
      <div class="nav-wrapper"></div>
    </nav>
    <div v-show="exibir.lista">
      <TarefaList msg="ToDo List" :tasks="listaDeTarefas" />
    </div>
    <div v-show="exibir.form">
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
    <div v-show="exibir.lista" style="padding: 20px">
      <button class="btn" @click="mostrarCadastro">Adicionar</button>
    </div>
  </div>
</template>

<script>
import TasksApi from "../TasksApi.js";
import TarefaList from "../components/TarefaList.vue";

export default {
  components: {
    TarefaList,
  },
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
    listarTarefas() {
      TasksApi.getTasks((data) => {
        this.listaDeTarefas = data;
      });
    },

    mostrarCadastro() {
      this.exibir.form = true;
      this.exibir.lista = false;
    },
    salvarTarefa() {
      this.exibir.form = false;
      this.exibir.lista = true;
      const novaTarefa = {
        title: this.form.title,
        project: this.form.project,
        date: new Date().toLocaleDateString("pt"),
      };
      TasksApi.createTask(novaTarefa, () => {
        this.listarTarefas();
      });
    },
  },
  created() {
    this.listarTarefas();
  },
};
</script>

<style></style>
