<template>
  <div class="flex">
    <div v-if="mode === 'order'" class="flex flex-col justify-around">
      <p class="text-xl" v-for="n in listCount" :key="'listNumber' + n">{{n}}.</p>
    </div>
    <transition-group name="list-complete" tag="div" class="list-container-default" v-bind:class="{'list-container-order':mode === 'order'}">
      <list-item class="list-complete-item" v-for="(item, index) in list" :item="item" :item-index="index" :mode="mode" :list-length="listCount" v-bind:key="item.name" :ref="'listItem' + index"></list-item>
    </transition-group>
  </div>
</template>

<script>
import ListItem from '@/components/list/list-item'

export default {
  name: 'list-container',
  props: ['list', 'mode'],
  components: {ListItem},
  data: function () {
    return {
    }
  },
  computed: {
    listCount: function () {
      return this.list.length
    }
  }
}
</script>
