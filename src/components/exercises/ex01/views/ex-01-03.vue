<template lang="html">
  <div class="">
    <div class="font-sans container mx-auto">
      <h2 class="font-light">Prioritize important stakeholders</h2>
      <list-container :list="refinedList" mode="order" list-count="listCount"></list-container>
    </div>
  </div>
</template>

<script lang="js">
import FormInput from '@/components/form/form-input'
import ListContainer from '@/components/list/list-container'
import { EventBus } from '@/event-bus.js'
export default {
  name: 'ex-01',
  props: ['list', 'refinedList', 'listCount'],
  components: { FormInput, ListContainer },
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
