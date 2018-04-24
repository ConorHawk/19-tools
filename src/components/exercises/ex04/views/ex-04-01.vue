<template lang="html">
  <div class="">
    <div class="font-sans container mx-auto flex flex-wrap">
      <div class="w-full sm:w-1/3 p-4 border-r border-grey flex justify-center flex-col ">
        <h2 class="font-normal pb-2">Choose a stakeholder to start</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      <div class="w-full sm:w-2/3 p-4">
        <div>
          <button v-bind:class="{'bg-red': stakeholder.id === activeStakeholder.id}" @click="changeActiveStakeholder(index)" v-for="(stakeholder, index) in stakeholders" :key="stakeholder.key">{{stakeholder.stakeholder}}<br>Complete?</button>
        </div>
      </div>
    </div>
  </div>

</template>

<script lang="js">
import GapTable from '@/components/gap-table/gap-table'
import { EventBus } from '@/event-bus.js'
export default {
  name: 'ex-01',
  props: ['stakeholders', 'activeStakeholder'],
  components: { GapTable },
  mounted () {
  },
  data () {
    return {
    }
  },
  methods: {
    changeActiveStakeholder: function (index) {
      EventBus.$emit('update-active-stakeholder', index)
    }
  },
  computed: {
  }
}
</script>

<style>

</style>
