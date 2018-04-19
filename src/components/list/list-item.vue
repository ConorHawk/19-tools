<template>
  <div class="bg-blue text-white text-xl rounded overflow-hidden m-1 font-light flex border border-blue-dark shadow-md">
    <p class=" px-8 py-2">{{item.name}}</p>
    <button class="text-white bg-blue-dark px-4 text-sm" @click="removeItem()" type="button" name="button">X</button>
  </div>
</template>

<script>
import { EventBus } from '@/event-bus.js'
export default {
  name: 'list-item',
  props: ['item', 'itemIndex'],
  data: function () {
    return {
    }
  },
  methods: {
    removeItem: function () {
      EventBus.$emit('remove-list-item', this.itemIndex)
    }
  }
}
</script>
