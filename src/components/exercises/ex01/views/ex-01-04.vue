<template lang="html">
  <div class="">
    <div class="font-sans container mx-auto">
      <h2 class="font-light">Identify up to 5 key requirements for each stakeholder</h2>
      <br>
      <notes-container :list="refinedList" list-count="listCount"></notes-container>
      <div class="flex justify-end">
        <router-link class="my-4 bg-purple text-white text-xl rounded overflow-hidden m-2 font-light border border-purple-dark shadow-md px-8 py-2" to="/ex-01/03">Back</router-link>
        <router-link class="my-4 bg-red text-white text-xl rounded overflow-hidden m-2 font-light border border-red-dark shadow-md px-8 py-2" to="/ex-01/05">Next</router-link>
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
