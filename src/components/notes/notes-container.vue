<template>
  <div class="flex justify-center">
    <div class="flex w-full rounded-sm overflow-hidden shadow-lg">
      <div class="flex flex-col bg-white border-r">
        <button v-bind:class="{'bg-grey-darkest text-white': index == activeStakeholder}" v-for="(item, index) in list" v-bind:key="item.name" class="border-b text-left py-3 px-4 text-sm"  @click="changeStakeholder(index)" type="button" name="button">
          <p class="pb-1">{{item.name}}</p>
          <p class="text-xs">{{item.requirements.length}} requirements</p>
        </button>
      </div>
      <div class="flex flex-col bg-grey-lightest flex-1">
        <transition-group name="list-complete" tag="div" class="list-container-default flex flex-col">
          <div class="flex py-2 px-4 list-complete-item w-full" v-for="(note, index) in activeNotes" v-bind:key="note.id">
            <!-- <p class="p-2">{{index + 1}}.</p> -->
            <div class="flex w-full bg-white shadow rounded-sm overflow-hidden">
              <div class="p-2 flex-1">
                <textarea rows="3" :value="note.text" v-on:input="changeNote($event.target.value, index)" class="tools-input"></textarea>
              </div>
              <div class="flex flex-col">
                <button :disabled="index === 0" class="text-white bg-grey-darkest px-1 text-sm py-2 flex-1" @click="moveNote(index, -1)" type="button" name="button"><i class="fas fa-caret-up"></i></button>
                <button :disabled="index === (requirementsCount - 1)" class="text-white bg-grey-darkest px-1 text-sm py-2 flex-1" @click="moveNote(index, 1)" type="button" name="button"><i class="fas fa-caret-down"></i></button>
              </div>
            </div>
          </div>
        </transition-group>
        <div class="mt-auto p-4">
          <button class="border-grey-darkest border text-grey-darkest text-xs px-2 py-1 rounded mt-2 float-right" @click="addRequirement(activeStakeholder)" type="button" name="button">Add requirement <i class="fas fa-plus"></i></button>
        </div>
      </div>
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
