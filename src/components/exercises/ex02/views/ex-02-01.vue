<template lang="html">
  <div class="">
    <div class="font-sans container mx-auto flex flex-wrap">
      <div class="w-full sm:w-1/3 p-4 border-r border-grey flex justify-center flex-col ">
        <h2 class="font-normal pb-2">Add stakeholders</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      <div class="w-full sm:w-2/3 p-4">
        <gap-table :table="table"></gap-table>
      </div>
    </div>
  </div>

</template>

<script lang="js">
import GapTable from '@/components/gap-table/gap-table'
// import { EventBus } from '@/event-bus.js'
export default {
  name: 'ex-01',
  props: ['table'],
  components: { GapTable },
  mounted () {

  },
  data () {
    return {

    }
  },
  methods: {
  },
  computed: {
  }
}
</script>

<style>

</style>
