<template>
  <div>
    <h2>{{ titulo }}</h2>
    <input
      type="text"
      name="title"
      id="title"
      placeholder="Entre com a tarefa"
      :value="title"
      @input="form.title = $event.target.value"
    />
    <input
      type="text"
      name="project"
      :value="project"
      @input="form.project = $event.target.value"
      placeholder="Entre com o projeto"
    />
    <button class="btn deep-purple lighten-2" @click="salvarTarefa">
      {{ btn }}
    </button>
  </div>
</template>
<script>
export default {
  props: ["titulo", "title", "id", "project", "btn"],
  data: () => {
    return {
      //   //   listaDeTarefas: [],
      //   exibir: {
      //     //   lista: true,
      //     //   form: false,
      //     // titulo: "Adicionar Tarefa",
      //     //   botao: "Salvar",
      //   },
      form: {
        title: "",
        project: "",
      },
    };
  },
  methods: {
    salvarTarefa() {
      const novaTarefa = {
        title: this.form.title,
        project: this.form.project,
      };
      if (this.btn == "Adicionar") {
        novaTarefa.date = new Date().toLocaleDateString("pt");
        this.$emit("salvarClick", novaTarefa);
      } else {
        novaTarefa.id = this.id;
        this.$emit("alterarClick", novaTarefa);
      }
    },
  },
  watch: {
    title(newvalue) {
      this.form.title = newvalue;
    },
    project(newvalue) {
      this.form.project = newvalue;
    },
  },
};
</script>
