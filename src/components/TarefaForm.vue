<template>
  <div>
    <h2>{{ exibir.titulo }}</h2>
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
    <button class="btn deep-purple lighten-2" @click="salvarTarefa">
      {{ exibir.botao }}
    </button>
  </div>
</template>
<script>
export default {
  props: ["titulo"],
  data: () => {
    return {
      listaDeTarefas: [],
      exibir: {
        lista: true,
        form: false,
        titulo: "Adicionar Tarefa",
        botao: "Salvar",
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
      this.$emit("salvarClick", novaTarefa);
    },
    editarTarefa() {
      this.exibir.titulo = "Editar Tarefa";
      this.exibir.botao = "Editar";
      this.$emit("editarClick");
    },
  },
};
</script>
