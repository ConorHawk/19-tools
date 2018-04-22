<template lang="html">
  <div class="">
    <div class="font-sans container mx-auto">
      <table style="width:100%">
        <tr>
          <th class="text-left">Stakeholder</th>
          <th class="text-left">Requirements</th>
        </tr>
        <tr class="border border-red" v-for="(item, index) in refinedList" v-bind:key="index">
          <td><input @input="editStakeholder(index, $event.target.value)" type="text" name="" :value="item.name"></td>
          <td >
            <ol class="p-0" v-if="item.requirements && item.requirements.length > 0">
              <li v-for="(requirement, index2) in item.requirements" v-bind:key="'requirement' + index2"><input @input="editRequirement(index, index2, $event.target.value)" type="text" name="" :value="requirement"></li>
            </ol>
            <span v-else>-</span>
            <button class="" @click="addRequirement(index)" type="button" name="button">Add requirement</button>
          </td>
        </tr>
      </table>
      <button @click="addStakeholder()" type="button" name="button">Add new stakeholder</button>
    </div>
  </div>
</template>

<script lang="js">
import FormInput from '@/components/form/form-input'
import NotesContainer from '@/components/notes/notes-container'
import { EventBus } from '@/event-bus.js'
export default {
  name: 'ex-04',
  props: ['list', 'refinedList', 'listCount'],
  components: { FormInput, NotesContainer },
  mounted () {

  },
  data () {
    return {}
  },
  methods: {
    addStakeholder: function () {
      var item = {
        name: '',
        selected: true,
        requirements: []
      }
      EventBus.$emit('add-list-item', item, this.refinedList.length)
    },
    editStakeholder: function (index, value) {
      EventBus.$emit('edit-list-item', {index: index, value: value})
    },
    addRequirement: function (stakeholderIndex) {
      EventBus.$emit('add-stakeholder-requirement', stakeholderIndex)
    },
    editRequirement: function (parentIndex, requirementIndex, value) {
      EventBus.$emit('update-note', {
        index: requirementIndex,
        value: value,
        parentIndex: parentIndex
      })
    }
  },
  computed: {

  }
}
</script>

<style>

</style>
