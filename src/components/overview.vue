<template>
  <div class="overview">
    <div class="container-main" @click="$emit('closeMenuu')">

      <!-- COMMON -->
      <div class="flex-container" v-if="type == 'common'">
        <div class="item" v-for="item in data" @click="openItem(item)">
          <div class="box">
            <img :src="item.images.background" :alt="item.name" width="90" height="90">
          </div>
          <div class="desc">{{item.name}}</div>
        </div>
      </div>

      <!-- SHOP -->
      <div class="flex-container" v-if="type == 'shop'">
        <div class="item" v-for="item in data" @click="openItem(item)">
          <div class="box">
            <img :src="item.item.images.background" :alt="item.name" width="90" height="90">
          </div>
          <div class="desc">{{item.name}}</div>
        </div>
      </div>

      <!-- NEWS -->
      <div class="flex-container-news" v-if="type == 'news'">
        <div class="item-news" v-for="item in data">
          <div class="box-news">
            <img :src="item.image" :alt="item.name" width="270" height="135">
          </div>
          <div class="title-news">{{item.title}}</div>
          <div class="desc-news">{{item.body}}</div>
        </div>
      </div>


      <!-- COMPONENTS -->
      <!-- WEAPONS -->
      <weapon :weapon="item" v-if="page == 'weapon_detail'"></weapon>
      <!-- STATS -->
      <stats v-if="page == 'stats'"></stats>
      <!-- SHOP ITEM -->
      <shop-item :item="item" v-if="page == 'item_detail'"></shop-item>

      <!-- LOADING SPINNER -->
      <div class="lds-dual-ring" v-if="loading"></div>
    </div>
    <!-- DISCLAIMER -->
    <div class="disclaimer">
      Portions of the materials used are trademarks and/or copyrighted works of Epic Games, Inc.
      All rights reserved by Epic. This material is not official and is not endorsed by Epic.
    </div>
  </div>
</template>

<script>
  import * as mainData from "../assets/data/main.json";
  import * as skinData from "../assets/data/skins.json";
  import * as weaponData from "../assets/data/weapons.json";
  import * as skinTypeData from "../assets/data/skinTypes.json";
  import Weapon from "./sub/weapon.vue";
  import Stats from "./sub/stats.vue";
  import ShopItem from "./sub/shopItem.vue";

  export default {
    name: 'overview',
    components: {Weapon, Stats, ShopItem},
    props: [],
    data() {
      return {
        testData: [1, 2, 3],
        type: 'common',
        data: {},
        item: {},
        page: 'home',
        parentPages: ['home'],
        layer: 0,
        weapons: {},
        loading: false
      }
    },
    computed: {},
    methods: {
      back() {
        this.selectPage(this.parentPages[this.layer - 1], false)
      },
      selectPage(page, direction) {
        if (direction) {
          this.parentPages[this.layer] = this.page;
          this.layer++;
        }
        else {
          this.layer--;
        }
        window.scrollTo(0, 0);
        this.page = page;
        switch (page) {
          case 'home':
            this.type = 'common';
            this.getMain();
            break;
          case 'stats':
            this.type = 'stats';
            break;
          case 'weapons':
            this.type = 'common';
            this.getWeapons();
            break;
          case 'weapons_ar':
            this.type = 'common';
            this.getARs();
            break;
          case 'weapons_shotgun':
            this.type = 'common';
            this.getShotguns();
            break;
          case 'weapons_sniper':
            this.type = 'common';
            this.getSnipers();
            break;
          case 'weapons_launcher':
            this.type = 'common';
            this.getLaunchers();
            break;
          case 'weapons_pistol':
            this.type = 'common';
            this.getPistols();
            break;
          case 'weapons_smg':
            this.type = 'common';
            this.getSMGs();
            break;
          case 'weapons_machinegun':
            this.type = 'common';
            this.getMachineguns();
            break;
          case 'skins':
            this.type = 'common';
            this.getSkins();
            break;
          case 'skins_all':
            this.type = 'common';
            this.getAllSkins();
            break;
          case 'skins_shop':
            this.type = 'shop';
            this.getShopSkins();
            break;
          case 'skins_upcoming':
            this.type = 'shop';
            this.getUpcomingSkins();
            break;
          case 'skins_type_outfit':
            this.type = 'common';
            this.getOutfit();
            break;
          case 'skins_type_pickaxe':
            this.type = 'common';
            this.getPickaxe();
            break;
          case 'skins_type_backpack':
            this.type = 'common';
            this.getBackpack();
            break;
          case 'skins_type_glider':
            this.type = 'common';
            this.getGlider();
            break;
          case 'skins_type_emote':
            this.type = 'common';
            this.getEmote();
            break;
          case 'skins_type_toy':
            this.type = 'common';
            this.getToy();
            break;
          case 'skins_type_skydive':
            this.type = 'common';
            this.getSkydive();
            break;
          case 'skins_type_wrap':
            this.type = 'common';
            this.getWrap();
            break;
          case 'skins_type_spray':
            this.type = 'common';
            this.getSpray();
            break;
          case 'skins_type_bundle':
            this.type = 'common';
            this.getBundle();
            break;
          case 'news':
            this.type = 'news';
            this.getNews();
            break;
          case 'weapon_detail':
            this.type = 'item';
            break;
          case 'item_detail':
            this.type = 'item';
            break;
          default:
            this.type = 'common';
            this.getMain();
        }
      },
      openItem(item) {
        if (item.click) {
          this.selectPage(item.click, true);
          return;
        }
        if (this.page.includes('weapons_')) {
          this.item = item;
          this.selectPage('weapon_detail', true)
        }
        if (this.page.includes('skins_shop')) {
          this.item = item;
          this.selectPage('item_detail', true)
        }
      },
      getShopSkins() {
        this.loading = true;
        this.$http.get("https://fortnite-public-api.theapinetwork.com/prod09/store/get")
          .then(response => {
              //console.log(false);
              this.loading = false;
              this.data = response.body.items;
            },
            (err) => {
              console.log("Error", err);
            });
      },
      getUpcomingSkins() {
        this.loading = true;
        this.$http.get("https://fortnite-public-api.theapinetwork.com/prod09/upcoming/get")
          .then(response => {
              //console.log(response);
              this.loading = false;
              this.data = response.body.items;
            },
            (err) => {
              console.log("Error", err);
            });
      },
      getNews() {
        this.loading = true;
        this.$http.get("https://fortnite-public-api.theapinetwork.com/prod09/br_motd/get")
          .then(response => {
              //console.log(response);
              this.loading = false;
              this.data = response.body.entries;
            },
            (err) => {
              console.log("Error", err);
            });
      },
      // WEAPON DATA
      getWeapons() {
        this.loading = true;
        this.$http.get("https://fortnite-public-api.theapinetwork.com/prod09/weapons/get")
          .then(response => {
              //console.log(response);
              this.loading = false;
              this.weapons = response.body.weapons;
              this.data = weaponData;
            },
            (err) => {
              console.log("Error", err);
            });
      },
      getARs() {
        this.data = this.weapons.filter(e => e.name.includes('Assault Rifle'));
      },
      getShotguns() {
        this.data = this.weapons.filter(e => e.name.includes('Shotgun'));
      },
      getSnipers() {
        this.data = this.weapons.filter(e => e.name.includes('Sniper') || e.name.includes('Hunting Rifle'));
      },
      getLaunchers() {
        this.data = this.weapons.filter(e => e.name.includes('Launcher') || e.name.includes('Missile'));
      },
      getPistols() {
        this.data = this.weapons.filter(e => e.name.includes('Pistol') || e.name.includes('Hand Cannon'));
      },
      getSMGs() {
        this.data = this.weapons.filter(e => e.name.includes('Submachine') || e.name.includes('Compact Gun'));
      },
      getMachineguns() {
        this.data = this.weapons.filter(e => e.name.includes('Machine Gun') || e.name.includes('Minigun'));
      },
      // SKIN DATA
      getAllSkins() {
        this.loading = true;
        this.$http.get("https://fortnite-public-api.theapinetwork.com/prod09/items/list")
          .then(response => {
              //console.log(response);
              this.loading = false;
              this.skins = response.body;
              this.data = skinTypeData;
            },
            (err) => {
              console.log("Error", err);
            });
      },
      getOutfit() {
        this.data = this.skins.filter(e => e.type === 'outfit');
      },
      getBackpack() {
        this.data = this.skins.filter(e => e.type === 'backpack');
      },
      getPickaxe() {
        this.data = this.skins.filter(e => e.type === 'pickaxe');
      },
      getGlider() {
        this.data = this.skins.filter(e => e.type === 'glider');
      },
      getEmote() {
        this.data = this.skins.filter(e => e.type === 'emote');
      },
      getToy() {
        this.data = this.skins.filter(e => e.type === 'toy');
      },
      getSkydive() {
        this.data = this.skins.filter(e => e.type === 'skydive');
      },
      getWrap() {
        this.data = this.skins.filter(e => e.type === 'wrap');
      },
      getSpray() {
        this.data = this.skins.filter(e => e.type === 'spray');
      },
      getBundle() {
        this.data = this.skins.filter(e => e.type === 'bundle');
      },
      // LOCAL DATA
      getMain() {
        this.data = mainData;
      },
      getSkins() {
        this.data = skinData;
      }
    },
    beforeMount() {
      //this.getWeapons();
      this.selectPage('home', true);
    }
  }
</script>

<!--<style scoped src="./field.css"></style>-->
<style scoped>
  .overview {
    display: block;
  }

  .container-main {
    min-height: calc(100vh + 50px);
  }

  .flex-container {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: flex-start;
  }

  .item {
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
    margin: 5px 0;
    padding-bottom: 3px;
    border-radius: 5px;
  }

  .box {
    background-size: contain;
    height: 90px;
    width: 90px;
    margin: 10px;
    border-radius: 5px;
  }

  .desc {
    color: black;
    font-size: 14px;
    width: 90px;
    text-align: center;
    font-weight: bold;
  }

  /* NEWS */
  .flex-container-news {
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
  }

  .item-news {
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
  }

  .box-news {
    background-size: contain;
    height: 135px;
    width: 270px;
    margin: 10px;
    border-radius: 5px;
  }

  .title-news {
    font-size: 14px;
    font-weight: bold;
    width: 270px;
    text-align: center;
  }

  .desc-news {
    font-size: 14px;
    width: 270px;
    text-align: center;
    padding: 5px;
  }

  .disclaimer {
    bottom: -68px;
    text-align: left;
    font-size: 12px;
    padding: 10px 10px 55px 10px;
    background-color: rgba(43, 57, 104, 0.3);
  }
</style>
