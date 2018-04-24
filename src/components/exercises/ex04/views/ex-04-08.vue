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
          <div class="py-4" v-for="(stakeholder, index) in stakeholders" :key="stakeholder.id">
            <h3>{{stakeholder.stakeholder}}</h3>
            <table class="w-full bg-white shadow-md tools-table">
              <tr class="bg-grey-darkest text-white">
                <th></th>
                <th>Description</th>
              </tr>
              <tr>
                <td>Audience</td>
                <td>
                  <textarea @input="updateAudience($event.target.value, index)" :value="stakeholder.audience" class="tools-input" id="audienceInput" rows="3"></textarea>
                </td>
              </tr>
              <tr>
                <td>Need</td>
                <td>
                  <textarea @input="updateNeed($event.target.value, index)" :value="stakeholder.need" class="tools-input" id="needInput" rows="3"></textarea>
                </td>
              </tr>
              <tr>
                <td>Channel</td>
                <td>
                  <textarea @input="updateChannel($event.target.value, index)" :value="stakeholder.channel" class="tools-input" id="channelInput" rows="3"></textarea>
                </td>
              </tr>
              <tr>
                <td>Omit</td>
                <td>
                  <textarea @input="updateOmit($event.target.value, index)" :value="stakeholder.omit" class="tools-input" id="omitInput" rows="3"></textarea>
                </td>
              </tr>
              <tr>
                <td>Revenue</td>
                <td>
                  <textarea @input="updateRevenue($event.target.value, index)" :value="stakeholder.revenue" class="tools-input" id="revenueInput" rows="3"></textarea>
                </td>
              </tr>
            </table>
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
    updateAudience: function (value, index) {
      EventBus.$emit('update-audience', value, index)
    },
    updateNeed: function (value, index) {
      EventBus.$emit('update-need', value, index)
    },
    updateChannel: function (value, index) {
      EventBus.$emit('update-channel', value, index)
    },
    updateOmit: function (value, index) {
      EventBus.$emit('update-omit', value, index)
    },
    updateRevenue: function (value, index) {
      EventBus.$emit('update-revenue', value, index)
    }
  },
  computed: {
  }
}
</script>

<style>

</style>
