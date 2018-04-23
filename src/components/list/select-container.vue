<template>
  <div class="flex flex-col">
    <div class="" v-show="selectedList && selectedList.length > 0">
      <p>Top priority stakeholders</p>
      <transition-group name="list-complete" tag="div" class="list-container-default">
        <select-item :selected="true" class="list-complete-item" v-for="(item, index) in selectedList" :item="item" :item-index="index" v-bind:key="item.name"></select-item>
      </transition-group>
    </div>
    <br>
    <div class="">
      <p>Stakeholders</p>
      <transition-group name="list-complete" tag="div" class="list-container-default">
        <select-item :selected="false" class="list-complete-item" v-for="(item, index) in list" :item="item" :item-index="index" v-bind:key="item.name"></select-item>
      </transition-group>
    </div>

  </div>
</template>

<script>
import SelectItem from '@/components/list/select-item'

export default {
  name: 'select-container',
  props: ['list', 'selectedList', 'unselectedList'],
  components: {SelectItem},
  data: function () {
    return {
    }
  }
}
</script>
