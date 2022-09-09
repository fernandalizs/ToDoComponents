<template>
  <div>
    <h2>{{ titulo }}</h2>
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
      Salvar
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
  },
};
</script>
