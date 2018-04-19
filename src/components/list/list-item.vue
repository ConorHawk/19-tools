<template>
  <div>
    <div v-if="defaultMode" class="list-btn-default">
      <p class=" px-8 py-2">{{item.name}}</p>
      <button class="text-white bg-blue-dark px-4 text-sm" @click="removeItem()" type="button" name="button">X</button>
    </div>
    <button @click="selectItem()" v-bind:class="{'active':item.selected}" v-if="selectionMode" class="list-btn-sort">
      {{item.name}}
    </button>
    <div v-if="orderMode" class="list-btn-default justify-between items-center">
      <p class=" px-8 py-2">{{item.name}}</p>
      <div class="flex flex-col h-full">
        <button class="text-white bg-blue-dark px-4 text-sm py-2" @click="moveUp()" type="button" name="button">^</button>
        <button class="text-white bg-blue-dark px-4 text-sm py-2" @click="moveDown()" type="button" name="button">v</button>
      </div>

    </div>
  </div>

</template>

<script>
import { EventBus } from '@/event-bus.js'
export default {
  name: 'list-item',
  props: ['item', 'itemIndex', 'mode'],
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
