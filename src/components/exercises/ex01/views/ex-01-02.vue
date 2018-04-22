<template lang="html">
  <div class="">
    <div class="font-sans container mx-auto">
      <h2 class="font-light text-center pb-4">Choose <span v-bind:class="{'text-red font-bold': nextDisabled}">4-6</span> important stakeholders</h2>
      <list-container :list="list" mode="selection"></list-container>
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
