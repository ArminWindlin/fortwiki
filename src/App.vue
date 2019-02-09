<template>
  <div id="start">
    <navigation ref="navigation" class="navigation" @back="back()" :logo="true"
                @toggleMenuu="menuu ? menuu = false : menuu = true">
    </navigation>
    <menuu ref="menuu" class="menuu" v-if="menuu" @selectPage="selectPage"></menuu>
    <div class="nav-placeholder"></div>
    <overview ref="overview" @closeMenuu="closeMenuu()"></overview>
    <navigation ref="navigation2" class="navigation2" @back="back()" :logo="false"
                @toggleMenuu="menuu ? menuu = false : menuu = true">
    </navigation>
  </div>
</template>

<script>
  import Overview from "./components/overview.vue";
  import Navigation from "./components/navigation.vue";
  import Menuu from "./components/menuu.vue";

  export default {
    name: 'App',
    components: {Overview, Navigation, Menuu},
    data() {
      return {
        menuu: false,
      }
    },
    methods: {
      selectPage(page) {
        this.$refs.navigation.toggleMenu();
        this.$refs.overview.selectPage(page, true);
      },
      back() {
        this.$refs.overview.back();
      },
      closeMenuu() {
        if (this.menuu)
          this.$refs.navigation.toggleMenu();
      }
    }
  }
</script>

<style scoped>
  #start {
    background-image: linear-gradient(to right, #a5c4d6, #92b4cd, #81a4c5, #7394bc, #6883b2);
    min-height: 100vh;
  }

  .navigation {
    position: fixed;
  }

  .navigation2 {
    position: fixed;
    bottom: 0;
  }

  .nav-placeholder {
    height: 45px;
  }

  .menuu {
    position: fixed;
    top: 45px;
    animation: slide 0.5s forwards;
  }

  @keyframes slide {
    0% {
      top: -200px
    }
    100% {
      top: 45px
    }
  }
</style>
