<template>
  <input type="text" v-model="noteText" :placeholder="placeholder"/>
</template>
<script>
export default {
  name: 'Input',
  props: ['placeholder'],
  data() {
    return {
      noteText: ''
    }
  }
}
</script>