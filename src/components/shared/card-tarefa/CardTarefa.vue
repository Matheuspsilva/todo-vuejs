<template>

  <div class="card">
    <div class="card-body">
      <div class="row">
        <div class="col-10">
          <h3 class="">{{ title }}</h3>
        </div>
        <div class="col-2">
          <button class="btn btn-danger" v-on:click="removerTarefa()" type="submit">Remover</button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  props: ['title', 'id'],
  methods:{
    removerTarefa(){
      if(confirm('Confirma operacao?')) {
        this.$emit('removerTarefa');
      }
    },
  }
}
</script>

<style scoped>
.row{
  width: auto;
}

</style>
