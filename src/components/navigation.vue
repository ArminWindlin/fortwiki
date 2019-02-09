<template>
  <div class="navigation">
    <div class="flex-container">
      <div class="ham-menu" :class="{'change': menuu}" @click="toggleMenu()">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
      </div>
      <div class="logo" v-if="logo"></div>
      <div class="back-menu" @click="$emit('back')">
        <div class="bbar1"></div>
        <div class="bbar2"></div>
        <div class="bbar3"></div>
      </div>
    </div>
    <!-- CHILD COMPONENT -->
    <!--<skill-tree :fieldP="field" @updateFields="updateFields()"></skill-tree>-->
  </div>
</template>

<script>
  //import SkillTree from "./skillTree.vue";

  export default {
    name: 'navigation',
    components: {},
    props: ['logo'],
    data() {
      return {
        menuu: false
      }
    },
    computed: {},
    methods: {
      toggleMenu() {
        this.menuu = !this.menuu;
        this.$emit('toggleMenuu');
      }
    },
    beforeMount() {
    }
  }
</script>

<!--<style scoped src="./field.css"></style>-->
<style scoped>
  .navigation {
    width: 100%;
    height: 45px;
    background-image: linear-gradient(to right bottom, #3a4b7f, #364679, #324273, #2f3d6e, #2b3968);
    color: lightgrey;
    z-index: 200;
  }

  .flex-container {
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: space-between;
    padding: 3px 5px;
  }

  .logo {
    background: url("../assets/FortWiki.png") no-repeat;
    background-size: contain;
    height: 33px;
    width: 153px;
  }

  /* HAM MENU */
  .ham-menu {
    display: inline-block;
    cursor: pointer;
    margin-left: 10px;
  }

  .bar1, .bar2, .bar3 {
    width: 35px;
    height: 5px;
    margin: 6px 0;
    transition: 0.4s;
    background-color: lightgrey;
    border-radius: 2px;
  }

  .change .bar1 {
    -webkit-transform: rotate(-45deg) translate(-9px, 6px);
    transform: rotate(-45deg) translate(-9px, 6px);
  }

  .change .bar2 {
    opacity: 0;
  }

  .change .bar3 {
    -webkit-transform: rotate(45deg) translate(-8px, -8px);
    transform: rotate(45deg) translate(-8px, -8px);
  }

  /* Back MENU */
  .back-menu {
    display: inline-block;
    cursor: pointer;;
    margin-right: 4px;
  }

  .bbar1, .bbar2, .bbar3 {
    width: 35px;
    height: 5px;
    margin: 6px 0;
    transition: 0.4s;
    background-color: lightgrey;
    border-radius: 2px;
  }

  .bbar1 {
    -webkit-transform: rotate(-25deg) translate(-8px, 1px);
    transform: rotate(-25deg) translate(-8px, 1px);
  }

  .bbar2 {
    opacity: 0;
  }

  .bbar3 {
    -webkit-transform: rotate(25deg) translate(-8px, -1px);
    transform: rotate(25deg) translate(-8px, -1px);
  }
</style>
