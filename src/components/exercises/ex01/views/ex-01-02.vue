<template lang="html">
  <div class="">
    <div class="font-sans container mx-auto flex flex-wrap">
      <div class="w-full sm:w-1/2 p-4 border-r border-grey flex justify-center flex-col ">
        <h2 class="font-normal pb-2">Select important stakeholders</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      <div class="w-full sm:w-1/2 p-4">
        <h2 class="font-light text-center pb-4">Choose <span v-bind:class="{'text-red font-bold': nextDisabled}">4-6</span> important stakeholders</h2>
        <select-container :list="list" :selectedList="refinedList" :unselectedList="unselectedList"></select-container>
      </div>
    </div>
  </div>

</template>

<script lang="js">
import FormInput from '@/components/form/form-input'
import SelectContainer from '@/components/list/select-container'
export default {
  name: 'ex-02',
  props: ['list', 'refinedList', 'unselectedList'],
  components: { FormInput, SelectContainer },
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
