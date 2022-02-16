<template>
        <div class="d-none d-lg-block col-lg-3 px-4">
            <div class="sidebar-container">
                <div class="navitem">
                    <router-link to="/"><img src="../assets/list.svg" alt="">Lista</router-link>
                </div>
                <div class="navitem">
                    <router-link to="/kedvencek"><img src="../assets/star.svg" alt="">Kedvencek</router-link>
                </div>
            </div>
        </div>
</template>

<script>
export default {
  name: 'Sidebar'
}
</script>

<style scoped>

    .sidebar-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 105px;
        //margin-left: 20px;
        padding: 20px;
        width: 260px;
        background: #FFFFFF;
        box-shadow: 0px 0px 20px rgba(50, 62, 200, 0.1);
        border-radius: 16px;
    }

    .navitem {
        padding: 10px;
    }
    .navitem a {
        text-decoration: none;
        font-weight: 500;
        width: 220px;
        height: 44px;
        text-align: left;
        font-size: 16px;
        padding-left: 20px;
        border-radius: 8px;
        display: flex;
        align-items: center;
    }
    .navitem a.router-link-exact-active {
        background: #EBECFA;
    }
    img {
        padding-right: 20px;
    }
</style>
