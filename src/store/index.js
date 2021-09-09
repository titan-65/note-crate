import { createStore } from 'vuex'

export default createStore({
  state: {
    notes: []
  },
  mutations: {
    ADD_NOTE(state, payload) {
      let newNote = payload
      state.notes.push(newNote)
    }
  },
  actions: {
    addNote(context, payload) {
      context.commit('ADD_NOTE', payload)
    }
  },
  getters: {
    getNotes(state) {
      return state.notes
    },
    getTimeStamps() {

    },
    getNoteCount() {

    }
  },
  modules: {
  }
})
