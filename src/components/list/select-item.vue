<template>
  <div>
    <button v-show="item.selected == selected" @click="selectItem()" v-bind:class="{'active':item.selected}" class="list-btn-sort">
      {{item.name}}
    </button>
  </div>
</template>

<script>
import { EventBus } from '@/event-bus.js'
export default {
  name: 'select-item',
  props: ['item', 'itemIndex', 'mode', 'selected'],
  methods: {
    selectItem: function () {
      EventBus.$emit('select-list-item', this.itemIndex)
    }
  }
}
</script>
