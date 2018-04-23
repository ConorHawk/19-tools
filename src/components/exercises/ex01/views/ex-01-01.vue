<template lang="html">
  <div class="">
    <div class="font-sans container mx-auto flex flex-wrap">
      <div class="w-full sm:w-1/2 p-4 border-r border-grey flex justify-center flex-col ">
        <h2 class="font-normal pb-2">Add stakeholders</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      <div class="w-full sm:w-1/2 p-4">
        <div class="flex justify-center">
          <form class="text-center flex flex-col" v-on:submit.prevent="addItem()">
            <label class="text-xl pb-1 font-light" for="text-xl">Enter at least 4 stakeholders here:</label><br>
            <div class="border border-black inline-flex rounded overflow-hidden shadow-md">
              <input class="p-4 text-2xl" v-model="inputtedStakeholder" type="text" name="">
              <button class="bg-grey-darkest text-white text-2xl flex items-center py-1 px-4" type="submit" name="button"><i class="fas fa-plus"></i></button>
            </div>
          </form>
        </div>
        <br>
        <h3 v-show="list && list.length > 0" class="font-light">Identified stakeholders</h3>
        <list-container :list="list"></list-container>
      </div>
    </div>
  </div>

</template>

<script lang="js">
import FormInput from '@/components/form/form-input'
import ListContainer from '@/components/list/list-container'
import { EventBus } from '@/event-bus.js'
export default {
  name: 'ex-01',
  props: ['list'],
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
          selected: false,
          requirements: [{
            text: '',
            id: Date.now()
          }]
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
    },
    nextDisabled: function () {
      return (this.list.length < 4)
    }
  }
}
</script>

<style>

</style>
