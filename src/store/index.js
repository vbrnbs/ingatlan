import { createStore } from 'vuex'

export default createStore({

  state: {
    kedvencek: [],
    ads: [],
    isActive: false
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
    // toggleClass (ad, payload) {
    //   // ad.target.classList.toggle('active')
    //   const kedvencek = ad.state.kedvencek
    //   this.isActive = !this.isActive
    //   payload.kedvenc = this.isActive
    //   const element = this.state.ads.filter((e) => e.adId === payload.adId)
    //   kedvencek.push(element[0])
    //   // if (!payload.kedvenc) { kedvencek.pop(payload) } else {}
    //   console.log(element[0], kedvencek.target)
    //   // console.log(kedvencek)
    // }
    addToFavorites (context, payload) {
      const kedvencek = context.state.kedvencek
      kedvencek.push(payload)
      context.commit('UPDATE_FAVORITES', kedvencek)
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
