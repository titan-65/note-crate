<template>
  <section class="hero bg">
  <div class="hero-body">
    <p class="title">
      Notes Crate
    </p>
    <p class="subtitle">
      testing notes in vue. demo application.
    </p>
  </div>
</section>
  <div class="notes-section">
    <section class="notes-crate">
      <div class="columns">
          <div class="column is-two-fifths">
             <section class="section">
              <div class="columns">
                  <TextInput/>
              </div>
               <TimeStamp :timestamp="notes"/>
              </section>
          </div>
          <div class="column">
            <section class="section">
              <h2>Notes</h2>
              <div class="container">
                <div class="columns is-multiline">
                  <div class="column" v-for="(note, index) in notes" :key="index">
                    <Card :note="note"/>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
    </section>
  </div>
</template>

<script>
import TextInput from './components/TextInput.vue'
import Card from './components/Card.vue'
import TimeStamp from './components/TimeStamp.vue'
// import emitter from 'tiny-emitter/instance'


export default {
  name: 'App',
  components: {
    TextInput,
    Card,
    TimeStamp
  },
  data() {
    return {
      // notes: [],
      // content: [],
      // timestamps: [],
      placeholder: 'Enter a note'
    }
  },
  computed: {
    notes() {
      return this.$store.getters.getNotes
    }
  },
  methods: {
    // addNote(event) {
    //   this.notes.push(event)
    //   console.log(this.notes)
      // this.content.push(event.content)
      // this.timestamps.push(event.timestamp)
      // console.log(this.notes)
      // console.log(this.timestamps)
    // }
  },
  created() {
    // emitter.on("add-note", (event) => this.addNote(event))
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.bg {
  background: #fff url(https://images.unsplash.com/photo-1616628188467-8fb29f49bbe8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80) center center/cover no-repeat;
}
</style>
