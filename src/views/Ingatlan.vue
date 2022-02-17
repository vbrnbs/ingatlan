<template>
    <Navbar />
    <div class="container">
        <div id="ingatlan" class="row w-auto d-flex justify-content-between">
                <div class="col-md-3">
                    <router-link to="/">
                        <button class="vissza-btn p-3 d-flex align-items-center">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.7912 7.00508H3.62124L8.50124 2.12508C8.89124 1.73508 8.89124 1.09508 8.50124 0.705083C8.31441 0.517831 8.06076 0.412598 7.79624 0.412598C7.53172 0.412598 7.27807 0.517831 7.09124 0.705083L0.50124 7.29508C0.11124 7.68508 0.11124 8.31508 0.50124 8.70508L7.09124 15.2951C7.48124 15.6851 8.11124 15.6851 8.50124 15.2951C8.89124 14.9051 8.89124 14.2751 8.50124 13.8851L3.62124 9.00508H14.7912C15.3412 9.00508 15.7912 8.55508 15.7912 8.00508C15.7912 7.45508 15.3412 7.00508 14.7912 7.00508Z" fill="#323EC8"/>
                            </svg>
                            <p class="fw-bold px-2 my-0">Vissza</p>
                        </button>
                    </router-link>
                </div>
                <div class="col-md-9">
                    <div class="list-header container-fluid py-3 px-4">
                        <h5 class="m-0 fw-bold">Részletek</h5>
                    </div>
                </div>
        </div>
    </div>
    <div class="container reszletek-wrapper d-flex flex-column justify-content-center align-items-center">
        <div class="row">
            <div class="col-4 p-2">
                <img :src="ingatlan.image" alt="" id="left" class="main">
            </div>
            <div class="col-4 p-2">
                <img :src="ingatlan.image" alt="" class="main">
            </div>
            <div class="col">
                <div class="row h-50">
                    <div class="col-12 p-2">
                        <img :src="ingatlan.image" alt="" class="side up">
                    </div>
                </div>
                <div class="row h-50">
                    <div class="col-12 p-2">
                        <img :src="ingatlan.image" alt="" class="side down">
                    </div>
                </div>
            </div>
            <div class="container">
            <div class="infod-flex bg-white flex-column p-4">
                <p class="fs-5 fw-bolder">{{ ingatlan.address }}</p>
                <div class="d-flex justify-content-between align-items-end">
                    <p class="fs-6 fw-bold m-0">{{ new Intl.NumberFormat('de-DE').format(ingatlan.price) }} {{ ingatlan.currency }}</p>
                    <Star v-on:click="$store.dispatch('addToFavorites', ad)" />
                </div>
                <div class="d-flex align-items-center mt-3">
                    <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.25 2H11.5V1.25C11.5 0.8375 11.1625 0.5 10.75 0.5C10.3375 0.5 10 0.8375 10 1.25V2H4V1.25C4 0.8375 3.6625 0.5 3.25 0.5C2.8375 0.5 2.5 0.8375 2.5 1.25V2H1.75C0.9175 2 0.2575 2.675 0.2575 3.5L0.25 14C0.25 14.825 0.9175 15.5 1.75 15.5H12.25C13.075 15.5 13.75 14.825 13.75 14V3.5C13.75 2.675 13.075 2 12.25 2ZM12.25 13.25C12.25 13.6625 11.9125 14 11.5 14H2.5C2.0875 14 1.75 13.6625 1.75 13.25V5.75H12.25V13.25ZM4.75 8.75V7.25H3.25V8.75H4.75ZM6.25 7.25H7.75V8.75H6.25V7.25ZM10.75 8.75V7.25H9.25V8.75H10.75Z" fill="#191919"/>
                    </svg>
                    <p class="m-0 px-2">{{ ingatlan.uploadDate }}</p>
                </div>
                <div class="description container py-2 px-3 mt-3">
                    <p class="fw-bold">Description</p>
                    <p class="my-3">{{ ingatlan.description }}</p>
                </div>
                <div class="d-flex justify-content-end p-3">
                    <button class="contact-btn px-3 py-2 text-center w-25">Kapcsolatfelvétel</button>
                </div>
            </div>
            </div>
        </div>
    </div>
    <Footer />
</template>

<script>
import sourceData from '../../data/db.json'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import Star from '../components/Star.vue'

export default {
  name: 'Ingatlan',
  components: {
    Navbar,
    Footer,
    Star
  },
  computed: {
    ingatlanId () {
      return parseInt(this.$route.params.id)
    },
    ingatlan () {
      return sourceData.ads.find(ad => ad.adId === this.ingatlanId)
    }
  }
}
</script>

<style scoped>

#ingatlan{
    margin-top: 65px;
}
a {
    color: balck;
}
.reszletek-wrapper {
   height: calc(100vh - 134px);
}
.info{
    box-shadow: 0px 0px 10px rgba(50, 62, 200, 0.2);
    border-radius: 16px;
}
.main {
    object-fit: cover;
    width:100%;
    height: 330px
}
.side {
    object-fit: cover;
    width:100%;
    height: 155px
}
#left {
    border-radius: 16px 0 0 16px;
}
.up{
    border-top-right-radius: 16px;
}
.down{
    border-bottom-right-radius: 16px;
}
.star-container {
    position: relative;
    right: 0;
    top: 0;
}
.description {
    height: 100px;
    box-shadow: inset 0px 0px 20px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
}
.contact-btn {
    background: #323EC8;
    box-shadow: 0px 0px 10px rgba(50, 62, 200, 0.2);
    border-radius: 8px;
    color: white;
    font-weight: 800;
}
.vissza-btn {
    background: #EBECFA;
    border-radius: 8px;
    color: #323EC8;
    border: none;
}
</style>
