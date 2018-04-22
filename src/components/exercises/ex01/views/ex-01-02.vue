<template lang="html">
  <div class="">
    <div class="font-sans container mx-auto">
      <h2 class="font-light text-center pb-4">Choose <span v-bind:class="{'text-red font-bold': nextDisabled}">4-6</span> important stakeholders</h2>
      <list-container :list="list" mode="selection"></list-container>
      <div class="flex justify-end">
        <router-link class="my-4 bg-purple text-white text-xl rounded overflow-hidden m-2 font-light border border-purple-dark shadow-md px-8 py-2" to="/ex-01">Back</router-link>
        <router-link :disabled="nextDisabled" v-bind:class="{'disabled': nextDisabled}" class="my-4 bg-red text-white text-xl rounded overflow-hidden m-2 font-light border border-red-dark shadow-md px-8 py-2" to="/ex-01/03">Next</router-link>
      </div>
    </div>
  </div>

</template>

<script lang="js">
import FormInput from '@/components/form/form-input'
import ListContainer from '@/components/list/list-container'
export default {
  name: 'ex-02',
  props: ['list', 'refinedList'],
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
    nextDisabled: function () {
      return (this.refinedList.length < 4 || this.refinedList.length > 6)
    }
  }
}
</script>

<style>

</style>
