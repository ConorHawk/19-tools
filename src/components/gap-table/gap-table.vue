<template>
  <div class="">
    <table class="w-full bg-white shadow-md tools-table">
      <tr class="bg-grey-darkest text-white">
        <th>
          Stakeholders
          <button class="border-white border text-white text-xs px-2 py-1 rounded mt-2" @click="addStakeholder()" type="button" name="button">Add stakeholder</button>
        </th>
        <th>Current results</th>
        <th>Desired Results</th>
        <th>Gap</th>
      </tr>
      <tbody v-for="(row, parentIndex) in table" :key="row.id">
        <tr v-for="(result, index ) in row.results" :key="result.id">
          <!-- The plus one is to account to the add results button -->
          <td v-if="index == 0" :rowspan="row.results.length + 1">
            <input class="tools-input" type="text" :value="row.stakeholder" @input="updateStakeholder(parentIndex, $event.target.value)">
          </td>
          <td>
            <textarea class="tools-input w-auto" rows="4" type="text" :value="result.statement" @input="updateStatement(parentIndex, index, $event.target.value)"></textarea>
          </td>
          <td>
            <div class="flex items-center">
              <span class="mr-1" v-for="(string, stringIndex) in result.splitStatement" :key="'string' + stringIndex">
                <span v-if="string == 'VALUE_MARKER'">
                  <input class="tools-input" :value="result.desiredResult" @input="updateDesiredResult(parentIndex, index, $event.target.value)" type="text">
                </span>
                <span v-else> {{string}}</span>
              </span>
            </div>

          </td>
          <td>
            <span>{{result.gap}}</span>
          </td>
        </tr>
        <tr>
          <td colspan="3"><button class="border-grey-darkest border text-grey-darkest text-xs px-2 py-1 rounded" type="button" name="button">Add result</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { EventBus } from '@/event-bus.js'
export default {
  name: 'gap-table',
  props: ['table'],
  components: {},
  data: function () {
    return {
    }
  },
  methods: {
    addStakeholder: function () {
      EventBus.$emit('construct-new-stakeholder')
    },
    updateStakeholder: function (index, value) {
      EventBus.$emit('update-stakeholder', index, value)
    },
    updateStatement: function (parentIndex, index, value) {
      EventBus.$emit('update-statement', parentIndex, index, value)
    },
    updateDesiredResult: function (parentIndex, index, value) {
      console.log(parentIndex, index, value)
      EventBus.$emit('update-desired-result', parentIndex, index, value)
    }
  },
  computed: {
  }
}
</script>
