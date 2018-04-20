<template>
  <div class="flex">
    <div class="flex flex-col bg-blue-dark text-white">
      <button v-bind:class="{'bg-blue-darkest': index == activeStakeholder}" class="text-white py-2 px-8 text-left" @click="changeStakeholder(index)" v-for="(item, index) in list" type="button" name="button" v-bind:key="item.name">{{item.name}}</button>
    </div>
    <div class="flex flex-col bg-blue-lighter">
      <div class="flex p-2 list-complete-item" v-for="(note, index) in activeNotes" v-bind:key="index">
        <p class="p-2">{{index + 1}}.</p>
        <textarea :value="note" v-on:input="changeNote($event.target.value, index)" class="p-4 bg-white"></textarea>
        <div class="flex flex-col">
          <button :disabled="index === 0" class="text-white bg-blue-dark px-4 text-sm py-2" @click="moveNote(index, -1)" type="button" name="button">^</button>
          <button :disabled="index === (requirementsCount - 1)" class="text-white bg-blue-dark px-4 text-sm py-2" @click="moveNote(index, 1)" type="button" name="button">v</button>
        </div>
      </div>
      <button class="bg-blue-lightest m-2 p-2" @click="addRequirement(activeStakeholder)" type="button" name="button">New requirement</button>
    </div>
  </div>
</template>

<script>
import ListItem from '@/components/list/list-item'
import { EventBus } from '@/event-bus.js'

export default {
  name: 'notes-container',
  props: ['list'],
  components: {ListItem},
  data: function () {
    return {
      activeStakeholder: 0
    }
  },
  computed: {
    listCount: function () {
      return this.list.length
    },
    activeNotes: function () {
      return this.list[this.activeStakeholder].requirements
    },
    requirementsCount: function () {
      return this.list[this.activeStakeholder].requirements.length
    }
  },
  methods: {
    changeStakeholder: function (index) {
      this.activeStakeholder = index
    },
    addRequirement: function (stakeholderIndex) {
      EventBus.$emit('add-stakeholder-requirement', stakeholderIndex)
    },
    changeNote: function (value, index) {
      var payload = {
        value: value,
        index: index,
        parentIndex: this.activeStakeholder
      }
      // If the note is empty
      if (value === '') {
        EventBus.$emit('delete-note', payload)
      } else {
        EventBus.$emit('update-note', payload)
      }
    },
    moveNote: function (index, direction) {
      EventBus.$emit('move-note', {direction: direction, index: index, parentIndex: this.activeStakeholder})
    }
  }
}
</script>
