<template>
  <div class="list col-xs-12 col-lg-9 px-4">
    <!-- lista fejléc -->
    <div class="list-header container-fluid py-3 px-4">
      <h5 class="m-0 fw-bold">Lista</h5>
      <h6 class="m-0">{{ ads.length }} db</h6>
    </div>
    <!-- lista elem container -->
    <div class="mt-3">
      <!-- lista elem -->
      <div v-for="ad in ads" :key="ad"  class="ingatlan d-flex bg-white my-2">
        <!-- ingatlan-kép -->
        <div class="ingatlan-image">
          <img :src="ad.image" alt="ingatlan-fotó" />
        </div>
        <!-- ingatlan-leírás -->
        <div class="d-flex-column p-3">
          <router-link :to="{ name: 'Ingatlan', params: { id:ad.adId } }">
            <p class="fs-5 fw-bolder">{{ ad.address }}</p>
          </router-link>
          <p class="fs-6 fw-bold">{{ new Intl.NumberFormat('de-DE').format(ad.price) }} {{ ad.currency }}</p>
          <!-- kedvenc-csillag addToObject(ad)-->
          <star class="star" v-on:click="$store.dispatch('addToFavorites', ad)" />
          <!-- <star class="star" @click="$store.dispatch('addToFavorites', ad)" v-on:click="toggle_selection_for(ad)" :class="{ active: selected_options.includes(ad) }" /> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import star from './Star.vue'
export default {
  data () {
    return {
      ads: [
        {
          adId: 100001,
          address: 'XIX. kerület, Kitalált utca 8.',
          price: 45000000,
          image: 'https://placehold.jp/350x300.png',
          currency: 'Ft',
          uploadDate: '2021.10.20.',
          description: 'Szép csendes környezetben eladó egy felújítandó lakás. A lakáshoz tartozik egy 10 négyzetméteres tároló is ami a pincében található.',
          status: 'unchecked',
          contact: {
            email: 'elek8812@gmail.com',
            parsedPhoneNumbers: [
              '+36201234567',
              '+36702349483'
            ]
          }
        },
        {
          adId: 100002,
          address: 'Székesfehérvár, Palotai út 88.',
          price: 23000000,
          image: 'https://placehold.jp/800x600.png',
          currency: 'Ft',
          uploadDate: '2021.10.13.',
          description: 'Székesfehérvár belvárosában eladó egy felújított belső kétszintes lakás. A lakáshoz tartozik egy 110 négyzetméteres kis kert is kizárólagos használati joggal.',
          status: 'unchecked',
          contact: {
            email: 'lek882@gmail.com',
            parsedPhoneNumbers: [
              '+36701234563'
            ]
          }
        },
        {
          adId: 100003,
          address: 'Érd, Kossuth Lajos utca 888/A.',
          price: 322000000,
          image: 'https://placehold.jp/366x377.png',
          currency: 'Ft',
          uploadDate: '2021.10.10.',
          description: 'Kertvárosi környezetben eladó egy két szintes családi ház. A házban van egy dupla beállós garázs is.',
          status: 'checked',
          contact: {
            email: 'ek8812@freemail.hu',
            parsedPhoneNumbers: [
              '+36201234568'
            ]
          }
        },
        {
          adId: 100004,
          address: 'XXII. kerület, Kitalált utca 10.',
          price: 90000,
          image: 'https://placehold.jp/500x400.png',
          currency: 'Euro',
          uploadDate: '2021.10.09.',
          description: 'Kihasználatlanság miatt eladó szeretett otthonunk. A ház teljeskörűen fel lett újítva. Az ár tartalmazza az új konyhabútort is, így az ár nem alku képes.',
          status: 'checked',
          contact: {
            email: 'kele12@citromail.hu',
            parsedPhoneNumbers: [
              '+36201234569'
            ]
          }
        }
      ],
      inputData: {},
      kedvenc: false,
      activeItem: null,
      selected_options: []
    }
  },
  mounted () {
    // fetch('http://localhost:3000/ads')
    //   .then(res => res.json())
    //   .then(data => (this.$store.state.ads = data))
    //   .then(data => (this.ads = data))
    //   .catch(err => console.log(err.message))
  },
  methods: {
  //   toggleKedvenc () {
  //     this.kedvenc = !this.kedvenc
  //     console.log(this.kedvenc)
  //     console.log(this.ads)
  //     console.log(this.selected_options)
  //   },
  //   containsKey (obj, key) {
  //     return Object.keys(obj).includes(key)
  //   },
  //   toggle_selection_for (option) {
  //     // console.log(this)
  //     console.log(this.ads)
  //     if (this.selected_options.includes(option)) {
  //       this.selected_options = this.selected_options.filter(
  //         (item) => item !== option
  //       )
  //     } else {
  //       this.selected_options.push(option)
  //     }
  //   }
  // },
  // computed: {
  //   addedToKedvenc () {
  //     return this.containsKey(this.ads, 'kedvenc')
  //   }
  },
  components: {
    star
  }
}
</script>

<style>
.list {
  margin-top: 105px;
}
a {
    color: black !important;
}
.list-header{
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #ffffff;
  filter: drop-shadow(0px 0px 20px rgba(50, 62, 200, 0.1));
}
.ingatlan{
  height: 180px;
  filter: drop-shadow(0px 0px 10px rgba(50, 62, 200, 0.2));
  border-radius: 16px;
}
.ingatlan-image{
  height: 180px;
  width: 212px;
  background: #637181;
  border-radius: 16px 0 0 16px;
}
.ingatlan-image > img {
  height: 180px;
  width: 212px !important;
  object-fit: cover;
  border-radius: 16px 0 0 16px;
}
.star {
  position: absolute;
  top: 30px;
  right: 20px;
}

/* .active > svg > path {
  fill: yellow
} */
</style>
