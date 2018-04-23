<template lang="html">
  <div class="">
    <div class="font-sans container mx-auto">
      <h2>Review</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <br>
      <table class="w-full bg-white shadow-md tools-table">
        <tr class="bg-grey-darkest text-white">
          <th class="text-left border-b border-grey">Stakeholder
            <button class="border-white border text-white text-xs px-2 py-1 rounded float-right" @click="addStakeholder()" type="button" name="button">Add new stakeholder</button>
          </th>
          <th class="text-left border-b border-grey">Requirements</th>
        </tr>
        <tr class="border border-red" v-for="(item, index) in refinedList" v-bind:key="index">
          <td><input class="shadow-inner rounded-sm p-2 w-full" @input="editStakeholder(index, $event.target.value)" type="text" name="" :value="item.name"></td>
          <td >
            <div class="" v-if="item.requirements && item.requirements.length > 0">
              <div v-for="(requirement, index2) in item.requirements" v-bind:key="'requirement' + index2" class="flex items-center">
                <span class="pr-4">{{index2 + 1}}. </span>
                <textarea class="shadow-inner rounded-sm p-2 my-1 w-full" @input="editRequirement(index, index2, $event.target.value)" type="text" name="" :value="requirement.text"></textarea>
              </div>
            </div>
            <button class="border-grey-darkest border text-grey-darkest text-xs px-2 py-1 rounded mt-2 float-right" @click="addRequirement(index)" type="button" name="button">Add requirement</button>
          </td>
        </tr>
      </table>

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
