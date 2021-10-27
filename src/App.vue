<template>
  <div class="container">
    <div class="col-12 d-flex justify-content-between my-5">
      <h1 class=""> Todo List</h1>
          <div>
      <b-button v-b-modal.modal-1>Adicionar Tarefa</b-button>

      <b-modal id="modal-1" title="Cadastro de tarefa" hide-footer>
        <div class="row">
          <div class="col-12">
            <b-form-input v-model="title" placeholder="nome"></b-form-input>
          </div>
        </div>

        <div class="row mt-4">
          <div class="col-12">
            <button @click="addTarefa" class="btn btn-primary">Salvar</button>
          </div>
        </div>

      </b-modal>
    </div>
    </div>

    <ul class="lista">
      <li v-for="(tarefa, key) of tarefas" class="item" v-bind:key="tarefa.id">
        <card-tarefa :title="tarefa.title" :id="tarefa.id" @removerTarefa="remove(tarefa.id)"></card-tarefa>
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
      tarefas: [],
      title: '',
      id:''
    }
  },
  methods:{
    remove(tarefa){
      this.$http.delete(`tarefas/${tarefa}`)
      .then(response => {
					console.log(response);
			})
			.catch(error => {
				console.log( error );
			})
    },
    getList(){
      this.$http.get('/tarefas')
      .then(response => {
					this.tarefas = response.data;
			})
			.catch(error => {
				console.log( error );
			})
    },
    addTarefa(){

    var data = {
      title: this.title,
    }

    this.$http.post('/tarefas', data).then((response)=>{
      console.log(response)
    })

    this.tarefas.push(data);

    this.title = ''

    }
  },
  created(){
    //Chamar função get list quando este componente for criado
    this.getList();
  }
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
