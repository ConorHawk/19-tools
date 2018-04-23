<template lang="html">
  <div class="">
    <div class="font-sans container mx-auto flex">
      <div class="w-1/2 mx-2 px-2 border-r border-grey flex justify-center flex-col ">
        <h2 class="font-normal pb-2">Select important stakeholders</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      <div class="w-1/2 mx-2 px-2">
        <h2 class="font-light text-center pb-4">Choose <span v-bind:class="{'text-red font-bold': nextDisabled}">4-6</span> important stakeholders</h2>
        <list-container :list="list" mode="selection"></list-container>
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
