<template>
  <div class="container mx-auto p-12">
    <h1 class="font-bold">{{ msg }}</h1>
    <ul class="text-black">
      <li>

      </li>
    </ul>
    <table style="width:100%">
      <tr class="text-left">
        <th>Module</th>
      </tr>
      <tr v-for="exercise in exercises" :key="exercise.id">
        <td class="border-b border-grey p-2">{{exercise.name}}</td>
        <td class="border-b border-grey p-2"><router-link :to="exercise.route">Start Exercise</router-link></td>
        <td class="border-b border-grey p-2"><router-link :to="exercise.finalRoute">Enter Data</router-link></td>
      </tr>
    </table>

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
          name: 'Stakeholder Requirements',
          route: '/ex-01',
          finalRoute: '/ex-01/5',
          id: 'ex01'
        }, {
          name: 'Gap Analysis',
          route: '/ex-02',
          finalRoute: '/ex-02',
          id: 'ex02'
        }, {
          name: 'ANCHOR',
          route: '/ex-04',
          finalRoute: '/ex-04',
          id: 'ex04'
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
