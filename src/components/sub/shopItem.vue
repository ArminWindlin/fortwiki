<template>
  <div class="shop-item">

    <div class="image">
      <img :src="item.item.images.background" alt="weapon.name" width="120" height="120">
    </div>

    <div class="title">
      {{item.name}}
    </div>

    <div class="type">
      {{item.item.type}}
    </div>

    <div class="pair">
      <div>Cost:</div>
      <div>{{item.cost}} V</div>
    </div>


  </div>
</template>

<script>

  export default {
    name: 'shop-item',
    components: {},
    props: ['item'],
    data() {
      return {}
    },
    computed: {},
    methods: {},
    beforeMount() {
      console.log(this.item)
    }
  }
</script>

<!--<style scoped src="./field.css"></style>-->
<style scoped>
  .shop-item {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
  }

  .image {
    margin: 20px 0;
  }

  .title {
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 5px;
  }

  .type {
    font-size: 14px;
    text-align: center;
    margin-bottom: 10px;
  }

  .pair {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    min-width: 180px;
    background-color: rgba(43, 57, 104, 0.2);
    padding: 2px 4px;
    border-radius: 5px;
    margin: 5px 0;
  }
</style>
