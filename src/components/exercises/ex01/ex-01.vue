<template lang="html">
  <section class="home">
    <h1 class="font-sans">Exercise 1</h1>
    <router-view :list="list" :refined-list="selectedStakeholders"></router-view>
  </section>
</template>

<script lang="js">
import { EventBus } from '@/event-bus.js'
export default {
  name: 'ex-01',
  props: [],
  components: { },
  mounted () {
    EventBus.$on('add-list-item', item => {
      this.list.push(item)
    })
    EventBus.$on('remove-list-item', arrIndex => {
      this.list.splice(arrIndex, 1)
    })
    EventBus.$on('select-list-item', arrIndex => {
      this.list[arrIndex].selected = !this.list[arrIndex].selected
      var tempObj = this.list[arrIndex]
      this.list.splice(arrIndex, 1)
      tempObj.selected ? this.list.unshift(tempObj) : this.list.push(tempObj)
    })
    EventBus.$on('move-item', payload => {
      var arrIndex = payload.index
      var targetIndex = payload.targetIndex
      var tempObj = this.list[arrIndex]
      this.list.splice(arrIndex, 1)
      this.list.splice(targetIndex, 0, tempObj)
    })
  },
  beforeDestroy () {
    EventBus.$off()
  },
  data () {
    return {
      list: [
        {
          name: 'test',
          selected: false
        },
        {
          name: 'test2',
          selected: false
        }
      ]
    }
  },
  methods: {

  },
  computed: {
    selectedStakeholders: function () {
      var arr = []
      for (var i = 0; i < this.list.length; i++) {
        if (this.list[i].selected) {
          arr.push(this.list[i])
        }
      }
      return arr
    },
    numberSelected: function () {
      var count = 0
      for (var i = 0; i < this.list.length; i++) {
        if (this.list[i].selected) { count++ }
      }
      return count
    }
  }
}
</script>

<style>

</style>
