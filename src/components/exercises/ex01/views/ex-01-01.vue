<template lang="html">
  <div class="">
    <div class="font-sans container mx-auto">
      <div class="flex justify-center">
        <form class="text-center flex flex-col" v-on:submit.prevent="addItem()">
          <label class="text-xl pb-1" for="text-xl">Enter at least 4 stakeholders here:</label><br>
          <div class="border border-blue inline-flex rounded-lg overflow-hidden shadow-md">
            <input class="p-4 text-2xl" v-model="inputtedStakeholder" type="text" name="">
            <button class="bg-blue text-white text-5xl flex items-center py-1 px-4" type="submit" name="button"><span>+</span></button>
          </div>
        </form>
      </div>
      <h2 class="font-light">Identified stakeholders</h2>
      <list-container :list="list"></list-container>
      <div class="flex justify-end">
        <router-link :disabled="nextDisabled" v-bind:class="{'disabled': nextDisabled}" class="my-4 bg-red text-white text-xl rounded overflow-hidden m-2 font-light border border-red-dark shadow-md px-8 py-2" to="/ex-01/02">Next</router-link>
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
          requirements: []
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
