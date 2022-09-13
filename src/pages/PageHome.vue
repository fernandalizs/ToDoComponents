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
        @editarClick="recebiEditar"
      />
    </div>
    <div v-show="exibir.form">
      <TarefaForm
        :titulo="form.titulo"
        :id="form.id"
        :title="form.title"
        :project="form.project"
        :btn="form.btn"
        @salvarClick="recebiSalvar"
        @alterarClick="recebiAlterar"
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
        id: 0,
        title: "",
        project: "",
        btn: "Adicionar",
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
      this.form.btn = "Adicionar";
      this.form.titulo = "Adicionar Tarefa";
      this.form.title = "";
      this.form.project = "";
      this.exibir.form = true;
      this.exibir.lista = false;
    },
    recebiSalvar(novaTarefa) {
      TasksApi.createTask(novaTarefa, () => {
        this.listarTarefas();
        this.exibir.form = false;
        this.exibir.lista = true;
      });
    },
    recebiDeletar(taskID) {
      TasksApi.deleteTask(taskID, () => {
        this.listarTarefas();
        this.exibir.form = false;
        this.exibir.lista = true;
      });
    },
    recebiAlterar(tarefa) {
      TasksApi.updateTasks(tarefa, () => {
        this.listarTarefas();
        this.exibir.form = false;
        this.exibir.lista = true;
      });
    },
    recebiEditar(taskID) {
      console.log(" alo");
      this.form.btn = "Editar";
      this.form.titulo = "Editar Tarefa";
      TasksApi.getTask(taskID, (task) => {
        this.form.id = task.id;
        this.form.title = task.title;
        console.log(this.form.title);
        this.form.project = task.project;
        console.log(" 4523");
        this.exibir.form = true;
        this.exibir.lista = false;
      });
    },
  },
  created() {
    this.listarTarefas();
  },
};
</script>

<style></style>
