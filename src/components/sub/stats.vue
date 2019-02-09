<template>
  <div class="stats">

    <input class="input" type="text" v-model="name" placeholder="Enter Player Name"/>
    <div class="button" @click="searchPlayer()">Search</div>

    <div class="stats-container" v-if="playerFound">

      <div class="title">
        {{user.username}}
      </div>

      <div class="pair">
        <div>Platform:</div>
        <div>{{user.platform}}</div>
      </div>

      <div class="title">
        Total Stats
      </div>

      <div class="pair">
        <div>Matches played:</div>
        <div>{{totals.matchesplayed}}</div>
      </div>
      <div class="pair">
        <div>Wins:</div>
        <div>{{totals.wins}}</div>
      </div>
      <div class="pair">
        <div>Kills:</div>
        <div>{{totals.kills}}</div>
      </div>
      <div class="pair">
        <div>K/D:</div>
        <div>{{totals.kd}}</div>
      </div>
      <div class="pair">
        <div>Win rate:</div>
        <div>{{totals.winrate}}</div>
      </div>
      <div class="pair">
        <div>Score:</div>
        <div>{{totals.score}}</div>
      </div>

      <div class="title">
        Solo
      </div>

      <div class="pair">
        <div>Matches played:</div>
        <div>{{stats.matchesplayed_solo}}</div>
      </div>
      <div class="pair">
        <div>Wins:</div>
        <div>{{stats.placetop1_solo}}</div>
      </div>
      <div class="pair">
        <div>Kills:</div>
        <div>{{stats.kills_solo}}</div>
      </div>
      <div class="pair">
        <div>K/D:</div>
        <div>{{stats.kd_solo}}</div>
      </div>
      <div class="pair">
        <div>Win rate:</div>
        <div>{{stats.winrate_solo}}</div>
      </div>
      <div class="pair">
        <div>Score:</div>
        <div>{{stats.score_solo}}</div>
      </div>

      <div class="title">
        Duo
      </div>

      <div class="pair">
        <div>Matches played:</div>
        <div>{{stats.matchesplayed_duo}}</div>
      </div>
      <div class="pair">
        <div>Wins:</div>
        <div>{{stats.placetop1_duo}}</div>
      </div>
      <div class="pair">
        <div>Kills:</div>
        <div>{{stats.kills_duo}}</div>
      </div>
      <div class="pair">
        <div>K/D:</div>
        <div>{{stats.kd_duo}}</div>
      </div>
      <div class="pair">
        <div>Win rate:</div>
        <div>{{stats.winrate_duo}}</div>
      </div>
      <div class="pair">
        <div>Score:</div>
        <div>{{stats.score_duo}}</div>
      </div>

      <div class="title">
        Squad
      </div>

      <div class="pair">
        <div>Matches played:</div>
        <div>{{stats.matchesplayed_squad}}</div>
      </div>
      <div class="pair">
        <div>Wins:</div>
        <div>{{stats.placetop1_squad}}</div>
      </div>
      <div class="pair">
        <div>Kills:</div>
        <div>{{stats.kills_squad}}</div>
      </div>
      <div class="pair">
        <div>K/D:</div>
        <div>{{stats.kd_squad}}</div>
      </div>
      <div class="pair">
        <div>Win rate:</div>
        <div>{{stats.winrate_squad}}</div>
      </div>
      <div class="pair">
        <div>Score:</div>
        <div>{{stats.score_squad}}</div>
      </div>

    </div>

    <div v-if="playerNotFound">
      Player not found
    </div>

    <!-- LOADING SPINNER -->
    <div class="lds-dual-ring" v-if="loading"></div>

  </div>
</template>

<script>

  export default {
    name: 'stats',
    components: {},
    props: [],
    data() {
      return {
        name: '',
        user: {},
        stats: {},
        totals: {},
        playerFound: false,
        playerNotFound: false,
        loading: false
      }
    },
    computed: {},
    methods: {
      searchPlayer() {
        this.loading = true;
        this.playerFound = false;
        this.$http.get("https://fortnite-public-api.theapinetwork.com/prod09/users/id?username=" + this.name)
          .then(response1 => {
              //console.log(response1);
              if (response1.body.uid === undefined)
                this.playerNotFound = true;
              else
                this.playerNotFound = false;
              this.$http.get("https://fortnite-public-api.theapinetwork.com/prod09/users/public/br_stats?user_id=" +
                response1.body.uid + " &platform=" + response1.body.platforms[0])
                .then(response2 => {
                  //console.log(response2);
                  this.loading = false;
                  this.user = response2.body;
                  this.stats = response2.body.stats;
                  this.totals = response2.body.totals;
                  this.playerFound = true;
                });
            },
            (err) => {
              this.playerNotFound = true;
            });
      }
    },
    beforeMount() {
    }
  }
</script>

<style scoped>
  .stats {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
  }

  .stats-container {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
  }

  .input {
    font-size: 16px;
    border-radius: 3px;
    border: none;
    padding: 5px;
    margin: 10px 0;
  }

  .button {
    font-size: 16px;
    color: lightgrey;
    border-radius: 3px;
    background-image: linear-gradient(to right bottom, #3a4b7f, #364679, #324273, #2f3d6e, #2b3968);
    padding: 5px;
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.3);
    margin-bottom: 10px;
  }

  .title {
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    margin: 10px 0 5px 0;
  }

  .pair {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    min-width: 180px;
    background-color: rgba(43, 57, 104, 0.2);
    padding: 4px 6px;
    border-radius: 5px;
    margin: 5px 0;
  }
</style>
