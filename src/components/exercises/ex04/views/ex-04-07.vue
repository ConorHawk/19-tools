<template lang="html">
  <div>
    <div>
      <div class="font-sans container mx-auto flex flex-col items-center py-8">
        <p>Your chosen stakeholder</p>
        <h2>{{activeStakeholder.stakeholder}}</h2>
        <hr>
      </div>
      <div class="font-sans container mx-auto flex flex-wrap">
        <div class="w-full sm:w-1/3 p-4 border-r border-grey flex justify-center flex-col ">
          <h2 class="font-normal pb-2">Employee anchor</h2>
          <p>Describe the Targeted Audience. Describe the characteristics and behaviors of the customer. The description must be succinct enough to fit on one page. It must also be descriptive enough to lead the development of the ANCHOR or the value of the offering.  In the ANCHOR tools, the targeted audience is never constrained to the current customer base. </p>
        </div>
        <div class="w-full sm:w-2/3 p-4">
          <div>
            <label for="revenueInput">How do we engage employees in meeting the customer ANCHOR?</label>
            <textarea @input="updateEmployee($event.target.value)" :value="activeStakeholder.employee" class="tools-input" id="employeeInput" cols="30" rows="10"></textarea>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script lang="js">
import GapTable from '@/components/gap-table/gap-table'
import { EventBus } from '@/event-bus.js'
export default {
  name: 'ex-02',
  props: ['stakeholders', 'activeStakeholder', 'activeStakeholderIndex'],
  components: { GapTable },
  mounted () {
  },
  data () {
    return {
    }
  },
  methods: {
    updateEmployee: function (value) {
      EventBus.$emit('update-employee', value, this.activeStakeholderIndex)
    }
  },
  computed: {
  }
}
</script>

<style>

</style>
