import { createStore } from 'vuex'

export default createStore({

  state: {
    kedvencek: []
  },
  // mutations: {
  //   ADD_USER_DATA: (state, data) => {
  //     state.kedvencek.push(data)
  //   }
  // },
  mutations: {
    UPDATE_FAVORITES (state, payload) {
      state.kedvencek = payload
    }
  },
  actions: {
    addToFavorites (context, payload) {
      this.isActive = true
      payload.status = 'checked'
      const kedvencek = context.state.kedvencek
      kedvencek.push(payload)
      context.commit('UPDATE_FAVORITES', kedvencek)
      console.log(kedvencek, payload.status)
    },
    removeFromFavorites (context, payload) {
      const kedvencek = context.state.kedvencek
      kedvencek.pop(payload)
      context.commit('UPDATE_FAVORITES', kedvencek)
    }
  },
  getters: {
    countLinks: state => {
      return state.kedvencek.length
    }
  }
})
