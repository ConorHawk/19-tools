<template>
  <div class="">
    <transition-group name="list-complete" tag="div" class="pt-2 flex flex-wrap relative">
      <list-item class="list-complete-item" v-for="(item, index) in list" :item="item" :item-index="index" v-bind:key="item.name"></list-item>
    </transition-group>
  </div>
</template>

<script>
import ListItem from '@/components/list/list-item'

export default {
  name: 'list-container',
  props: ['list'],
  components: {ListItem},
  data: function () {
    return {
    }
  }
}
</script>
