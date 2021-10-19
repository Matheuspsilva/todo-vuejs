<template>
  <div class="container">
    <div class="col-12 d-flex justify-content-between my-5">
      <h1 class=""> Todo List</h1>
      <a href="" class="btn btn-success">Criar Tarefa</a>
    </div>

    <ul class="lista">
      <li v-for="(tarefa, key) of tarefas" class="item" v-bind:key="tarefa.id">
        <card-tarefa :title="tarefa.title" @removerTarefa="remove(key)"></card-tarefa>
      </li>
    </ul>

  </div>
</template>

<script>
import CardTarefa from './components/shared/card-tarefa/CardTarefa.vue';

export default {
  name: 'app',
  components:{
    'card-tarefa': CardTarefa
  },
  data () {
    return {
      tarefas: [
        {
          title: "Limpar a casa"
        },
        {
          title: "Estudar vuejs"
        },
        {
          title: "Fazer exercício físico"
        },

      ]
    }
  },
    methods:{

    remove(tarefa){
      this.tarefas.splice(tarefa, 1);
    }

  },
}
</script>

<style>

.lista{

  list-style: none;
  margin-left: 0px;
  padding-left: 0%;

}

.titulo-principal{
  text-align: center;
}

</style>
