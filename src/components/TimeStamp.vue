<template>
<p class="timestamp">TimeStamp</p>
  <div class="container">
    <p v-for="(stamp, index) in timestamp" :key="index">
      Date: {{stamp.timestamp}}
    </p>
  </div>
</template>

<script>
export default {
  name: "TimeStamp",
  props: {
    timestamp: Array,
  },
  data() {
    return {
    }
  }
}
</script>

<style scoped>
.timestamp {

}
</style>