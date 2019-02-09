<template>
  <div class="weapon">

    <div class="image">
      <img :src="weapon.images.background" alt="weapon.name" width="120" height="120">
    </div>

    <div class="title">
      {{weapon.name}}
    </div>

    <div class="rarity">
      {{weapon.rarity}}
    </div>

    <div class="title-stats">
      Stats
    </div>

    <div class="pair">
      <div>Dps:</div>
      <div>{{weapon.stats.dps}}</div>
    </div>

    <div class="pair">
      <div>Body Shot:</div>
      <div>{{weapon.stats.damage.body}}</div>
    </div>

    <div class="pair">
      <div>Head Shot:</div>
      <div>{{weapon.stats.damage.head}}</div>
    </div>

    <div class="pair">
      <div>Fire Rate:</div>
      <div>{{weapon.stats.firerate}}</div>
    </div>

    <div class="pair">
      <div>Magazine:</div>
      <div>{{weapon.stats.magazine.size}}</div>
    </div>

    <div class="pair">
      <div>Ammo Cost:</div>
      <div>{{weapon.stats.ammocost}}</div>
    </div>

    <div class="pair">
      <div>Reload:</div>
      <div>{{weapon.stats.magazine.reload}}</div>
    </div>

  </div>
</template>

<script>

  export default {
    name: 'weapon',
    components: {},
    props: ['weapon'],
    data() {
      return {}
    },
    computed: {},
    methods: {},
    beforeMount() {
      console.log(this.weapon)
    }
  }
</script>

<!--<style scoped src="./field.css"></style>-->
<style scoped>
  .weapon {
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

  .title-stats {
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    margin: 20px 0 5px 0;
  }

  .rarity {
    font-size: 14px;
    text-align: center;
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
