<template lang="html">
  <div class="">
    <div class="font-sans container mx-auto flex">
      <div class="w-1/2 mx-2 px-2 border-r border-grey flex justify-center flex-col ">
        <h2 class="font-normal pb-2">Prioritize stakeholders</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      <div class="w-1/2 mx-2 px-2">
        <h2 class="font-light text-center">Identify up to 5 key requirements for each stakeholder</h2>
        <br>
        <notes-container :list="refinedList" list-count="listCount"></notes-container>
    </div>
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
    return {
      inputtedStakeholder: ''
    }
  },
  methods: {
    addItem: function () {
      // Checks where the name exists in the array already
      var arrayContainsString = (this.listNames.indexOf(this.inputtedStakeholder) > -1)
      if (arrayContainsString || this.inputtedStakeholder === '') {
        // If the name does already exist, send an event to the list item (Doesnt do anything atm but the event is there)
        EventBus.$emit('highlight-duplicate', this.inputtedStakeholder)
      } else {
        var item = {
          name: this.inputtedStakeholder,
          selected: false
        }
        // Otherwise send an event to the page controller to add an event item
        EventBus.$emit('add-list-item', item)
        this.inputtedStakeholder = ''
      }
    }
  },
  computed: {
    listNames: function () {
      var arr = []
      for (var i = 0; i < this.list.length; i++) {
        arr.push(this.list[i].name)
      }
      return arr
    }
  }
}
</script>

<style>

</style>
