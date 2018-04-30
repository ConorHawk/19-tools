<template lang="html">
  <div>
    <div>
      <div class="font-sans container mx-auto flex flex-col items-center py-8">
        <p>Your chosen stakeholder</p>
        <h2>{{activeStakeholder.stakeholder}}</h2>
        <hr>
      </div>
      <tool-container :two-column="true">
        <template slot="leftColumn">
          <h2 class="font-normal pb-2">Audience</h2>
          <p>Describe the Targeted Audience. Describe the characteristics and behaviors of the customer. The description must be succinct enough to fit on one page. It must also be descriptive enough to lead the development of the ANCHOR or the value of the offering.  In the ANCHOR tools, the targeted audience is never constrained to the current customer base. </p>
        </template>
        <template slot="rightColumn">
          <div>
            <label for="audienceInput">Enter audience details here</label>
            <textarea @input="updateAudience($event.target.value)" :value="activeStakeholder.audience" class="tools-input" id="audienceInput" cols="30" rows="10"></textarea>
          </div>
        </template>
      </tool-container>
    </div>
  </div>

</template>

<script lang="js">
import GapTable from '@/components/gap-table/gap-table'
import ToolContainer from '@/components/layout/tool-container'
import { EventBus } from '@/event-bus.js'
export default {
  name: 'ex-02',
  props: ['stakeholders', 'activeStakeholder', 'activeStakeholderIndex'],
  components: { GapTable, ToolContainer },
  mounted () {
  },
  data () {
    return {
    }
  },
  methods: {
    updateAudience: function (value) {
      EventBus.$emit('update-audience', value, this.activeStakeholderIndex)
    }
  },
  computed: {
  }
}
</script>

<style>

</style>
