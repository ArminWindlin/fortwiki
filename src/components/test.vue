<template>
  <div class="test">
    <input type="text" v-model="title"><br/>
    <h1>{{title}}</h1>
    <span v-html='subtitle'></span>
    <p v-if="showName">{{user.firstName}}</p>
    <p v-else>Nobody</p>
    <p v-text='user.lastName'></p>
    <ul>
      <li v-for="item in items">{{item.title}}</li>
    </ul>
    <button v-on:click="greet('Hello Armin')">Say Greeting</button>
    <button v-on:click="printUser()">Load Bananas</button>
    {{bananas[0]}}
    <p v-model="bananas"></p>
    <br/>
    <input type="text" v-on:keyup="pressKey" v-on:keyup.enter="enterHit">
    <hr/>
    <label>First Name: </label><input type="text" v-model="user.firstName">
    <br/>
    <label>Last Name: </label><input type="text" v-model="user.lastName">
  </div>
</template>

<script>
  export default {
    name: 'test',
    data() {
      return {
        title: 'Hello World',
        subtitle: '<h2>Hello Hello</h2>',
        user: {
          firstName: 'John',
          lastName: 'Doe'
        },
        showName: true,
        items:
          [
            {title: "Item1"},
            {title: "Item2"},
            {title: "Item3"},
          ],
        bananas: []
      }
    },
    methods: {
      greet: (g) => {
        alert(g);
      },
      pressKey: (e) => {
        console.log(e.target.value);
      },
      enterHit: () => {
        console.log('You hit enter');
      },
      printUser() {
        this.$http.get('http://localhost:3000/banana')
          .then(response => {
            console.log(response);
            this.bananas = response.body;
          });
      }
    },
    computed: {
      fullname: () => {
        return "";
      }
    }
  }
</script>

<style scoped>

</style>
