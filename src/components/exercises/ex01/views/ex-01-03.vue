<template lang="html">
  <div class="">
    <div class="font-sans container mx-auto">
      <h2 class="font-light text-center pb-4">Prioritize important stakeholders</h2>
      <list-container :list="refinedList" mode="order" list-count="listCount"></list-container>
      <div class="flex justify-end">
        <router-link class="my-4 bg-purple text-white text-xl rounded overflow-hidden m-2 font-light border border-purple-dark shadow-md px-8 py-2" to="/ex-01/02">Back</router-link>
        <router-link class="my-4 bg-red text-white text-xl rounded overflow-hidden m-2 font-light border border-red-dark shadow-md px-8 py-2" to="/ex-01/04">Next</router-link>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import FormInput from '@/components/form/form-input'
import ListContainer from '@/components/list/list-container'
export default {
  name: 'ex-03',
  props: ['list', 'refinedList', 'listCount'],
  components: { FormInput, ListContainer },
  mounted () {

  },
  data () {
    return {
      inputtedStakeholder: ''
    }
  },
  methods: {
  },
  computed: {
    listNames: function () {
      var arr = []
      for (var i = 0; i < this.list.length; i++) {
        arr.push(this.list[i].name)
      }
      return arr
    }
  }
}
</script>

<style>

</style>
