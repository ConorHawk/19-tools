<template>
  <div class="">
    <table class="w-full bg-white shadow-md tools-table">
      <tr class="bg-grey-darkest text-white">
        <th>
          Stakeholders
          <button class="border-white border text-white text-xs px-2 py-1 rounded mt-2" @click="addStakeholder()" type="button" name="button">Add stakeholder</button>
        </th>
        <th>Measures</th>
        <th>Current results</th>
        <th>Desired Results</th>
        <th>Gap</th>
      </tr>
      <tbody v-for="(row, parentIndex) in table" :key="row.id">
        <tr v-for="(result, index ) in row.results" :key="result.id">
          <td v-if="index == 0" :rowspan="row.results.length + 1">
            <input class="tools-input" type="text" :value="row.stakeholder" @input="updateStakeholder(parentIndex, $event.target.value)">
          </td>
          <td>
            <input class="tools-input w-auto" type="text" :value="result.measure" @input="updateMeasure(parentIndex, index, $event.target.value)">
            <div class="flex pt-2 items-center justify-end">
              <label class="text-xs font-normal pr-1" for="">Type</label>
              <select @input="updateMeasureType(parentIndex, index, $event.target.value)" class="text-xs font-normal border px-2 py-1 resize-none rounded shadow-inner appearance-none" aria-label="select measure type" name="" id="">
                <option value="0">Percentage</option>
                <option value="1">Number</option>
                <option value="2">Currency</option>
                <option value="3">Text</option>
              </select>
            </div>
          </td>
          <td>
            <div class="flex items-center">
              <span v-show="result.type === 2" class="pr-2">$</span>
              <input class="tools-input w-auto" type="text" :value="result.currentResult" @input="updateStatement(parentIndex, index, $event.target.value)">
              <span v-show="result.type === 0" class="pl-2">%</span>
            </div>
          </td>
          <td>
            <div class="flex items-center">
              <span v-show="result.type === 2" class="pr-2">$</span>
              <input class="tools-input w-auto" type="text" :value="result.desiredResult" @input="updateDesiredResult(parentIndex, index, $event.target.value)">
              <span v-show="result.type === 0" class="pl-2">%</span>
            </div>

          </td>
          <td>
            <span>{{result.gap}}</span>
          </td>
        </tr>
        <tr>
          <td colspan="3">
            <button @click="addResult(parentIndex)" class="border-grey-darkest border text-grey-darkest text-xs px-2 py-1 rounded" type="button" name="button">Add measure</button>
          </td>
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
    updateMeasure: function (parentIndex, index, value) {
      EventBus.$emit('update-measure', parentIndex, index, value)
    },
    updateMeasureType: function (parentIndex, index, value) {
      EventBus.$emit('update-measure-type', parentIndex, index, parseInt(value))
    },
    updateDesiredResult: function (parentIndex, index, value) {
      EventBus.$emit('update-desired-result', parentIndex, index, value)
    },
    addResult: function (parentIndex) {
      EventBus.$emit('add-result', parentIndex)
    }
  },
  computed: {
  }
}
</script>
