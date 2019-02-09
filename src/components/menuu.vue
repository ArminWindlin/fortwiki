<template>
  <div class="menuu">
    <div class="flex-container">
      <div class="option" @click="$emit('selectPage','home')">
        Home
      </div>
      <div class="option" @click="$emit('selectPage','weapons')">
        Weapons
      </div>
      <div class="option" @click="$emit('selectPage','skins')">
        Skins
      </div>
      <div class="option" @click="$emit('selectPage','news')">
        News
      </div>
      <div class="option" @click="$emit('selectPage','stats')">
        Stats
      </div>
    </div>
    <!-- CHILD COMPONENT -->
    <!--<skill-tree :fieldP="field" @updateFields="updateFields()"></skill-tree>-->
  </div>
</template>

<script>
  //import SkillTree from "./skillTree.vue";

  export default {
    name: 'menuu',
    components: {},
    props: [],
    data() {
      return {}
    },
    computed: {},
    methods: {},
    beforeMount() {
    }
  }
</script>

<!--<style scoped src="./field.css"></style>-->
<style scoped>
  .menuu {
    width: 100%;
    background-image: linear-gradient(to right bottom, #3a4b7f, #364679, #324273, #2f3d6e, #2b3968);
    color: lightgrey;
    z-index: 100;
  }

  .flex-container {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
  }

  .option {
    font-size: 18px;
    font-weight: bold;
    padding: 5px;
    border: 1px solid black;
    border-radius: 5px;
    cursor: pointer;
    margin: 8px 0;
    background-color: rgba(0, 0, 0, 0.2);
  }
</style>
