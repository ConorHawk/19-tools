<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-link v-for="exercise in exercises" :to="exercise.route" :key="exercise.id">{{exercise.name}}</router-link>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'AlignOrg Tools',
      exercises: [
        {
          name: 'Exercise 1',
          route: '/ex-01',
          id: 'ex01'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
