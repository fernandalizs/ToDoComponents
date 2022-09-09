<template>
  <div id="app">
    <nav class="deep-purple lighten-2">
      <div class="nav-wrapper"></div>
    </nav>
    <div v-show="exibir.lista">
      <TarefaList
        msg="ToDo List"
        :tasks="listaDeTarefas"
        @deletarClick="recebiDeletar"
      />
    </div>
    <div v-show="exibir.form">
      <TarefaForm
        :titulo="form.titulo"
        @salvarClick="recebiSalvar"
      ></TarefaForm>
    </div>
    <div v-show="exibir.lista" style="padding: 20px">
      <button class="btn deep-purple lighten-2" @click="mostrarCadastro">
        Adicionar
      </button>
    </div>
  </div>
</template>

<script>
import TasksApi from "../TasksApi.js";
import TarefaList from "../components/TarefaList.vue";
import TarefaForm from "../components/TarefaForm.vue";

export default {
  components: {
    TarefaList,
    TarefaForm,
  },
  data: () => {
    return {
      listaDeTarefas: [],
      exibir: {
        lista: true,
        form: false,
      },
      form: {
        titulo: "Cadastrar Tarefa",
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
    recebiSalvar(novaTarefa) {
      TasksApi.createTask(novaTarefa, () => {
        this.exibir.form = false;
        this.exibir.lista = true;
        this.listarTarefas();
      });
    },
    recebiDeletar(taskID) {
      TasksApi.deleteTask(taskID, () => {
        this.exibir.form = false;
        this.exibir.lista = true;
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
