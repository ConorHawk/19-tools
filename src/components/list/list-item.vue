<template>
  <div>
    <div v-if="defaultMode" class="list-btn-default">
      <p class=" px-8 py-2">{{item.name}}</p>
      <button class="text-white bg-black px-1 text-sm" @click="removeItem()" type="button" name="button"><i class="fas fa-times"></i></button>
    </div>
    <button @click="selectItem()" v-bind:class="{'active':item.selected}" v-if="selectionMode" class="list-btn-sort">
      {{item.name}}
    </button>
    <div v-if="orderMode" class="list-btn-default justify-between items-center">
      <p class=" px-8 py-2">{{item.name}}</p>
      <div class="flex flex-col h-full">
        <button :disabled="itemIndex === 0" class="text-white bg-black px-1 text-sm py-1" @click="moveUp()" type="button" name="button"><i class="fas fa-caret-up"></i></button>
        <button :disabled="itemIndex === (listLength - 1)" class="text-white bg-black px-1 text-sm py-1" @click="moveDown()" type="button" name="button"><i class="fas fa-caret-down"></i></button>
      </div>

    </div>
  </div>

</template>

<script>
import { EventBus } from '@/event-bus.js'
export default {
  name: 'list-item',
  props: ['item', 'itemIndex', 'mode', 'listLength'],
  data: function () {
    return {
    }
  },
  methods: {
    removeItem: function () {
      EventBus.$emit('remove-list-item', this.itemIndex)
    },
    selectItem: function () {
      EventBus.$emit('select-list-item', this.itemIndex)
    },
    moveUp: function () {
      var upIndex = this.itemIndex - 1
      EventBus.$emit('move-item', {targetIndex: upIndex, index: this.itemIndex})
    },
    moveDown: function () {
      var downIndex = this.itemIndex + 1
      EventBus.$emit('move-item', {targetIndex: downIndex, index: this.itemIndex})
    }
  },
  mounted: function () {
    // Could use this in the future to highlight duplicate names
    EventBus.$on('highlight-duplicate', name => {
      if (name === this.item.name) {
        console.log(name)
      }
    })
  },
  computed: {
    defaultMode: function () {
      return (this.mode !== 'selection' && this.mode !== 'order')
    },
    selectionMode: function () {
      return (this.mode === 'selection')
    },
    orderMode: function () {
      return (this.mode === 'order')
    }
  }
}
</script>
