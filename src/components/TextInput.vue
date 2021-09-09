<template>
  <div class="columns is-multiline">
  <form @keyup.enter.prevent="formSubmit">
    <div class="column">
    <label>Title</label>
      <div class="control is-loading">
            <input class="input is-danger is-medium is-rounded" v-model="noteText" placeholder="Enter Title"/>
      </div>
    </div>
    <textarea class="textarea is-info is-large" rows="10" v-model="noteContent" placeholder="Enter Content"></textarea>
  </form>
  </div>
</template>
<script>
// import mitt from 'mitt'
// import emitter from 'tiny-emitter/instance'
export default {
  name: 'TextInput',
  data() {
    return {
      noteText: '',
      noteContent: ''
    }
  },
  emits: ['add-note'],
  methods: {
    formSubmit() {
      // this.$emit("add-note", {
      //   note: this.noteText,
      //   content: this.noteContent,
      //   timestamp: new Date().toLocaleString()
      // })
      // this.noteText = '';
      // this.noteContent = '';
      this.$store.dispatch("addNote", {
        note: this.noteText,
        content: this.noteContent,
        timestamp: new Date().toLocaleString()
      })
      this.noteText = '';
      this.noteContent = '';
    }
  }
}
</script>
<style>
.contentBody {
  width: 555px;
  height: 300px;
}
</style>