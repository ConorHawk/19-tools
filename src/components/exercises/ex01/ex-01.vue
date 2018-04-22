<template lang="html">
  <section class="flex flex-col h-full">
    <module-header :pages="numberOfPages" :tool-name="toolName"></module-header>
    <transition name="page-slide" mode="out-in">
      <router-view class="flex-1 flex items-center justify-center overflow-hidden" :list="list" :refined-list="selectedStakeholders"></router-view>
    </transition>
    <module-footer :pages="numberOfPages" :tool-name="toolName"></module-footer>
  </section>
</template>

<script lang="js">
import ModuleHeader from '@/components/module-header'
import ModuleFooter from '@/components/module-footer'
import { EventBus } from '@/event-bus.js'
export default {
  name: 'ex-01',
  props: [],
  components: { ModuleHeader, ModuleFooter },
  mounted () {
    console.log(this.$route)
    EventBus.$on('add-list-item', (item, refinedListLength) => {
      // If the item is being added at the end in the table, it needs to be pushed to the top of the array
      if (refinedListLength) {
        this.list.splice(refinedListLength, 0, item)
      // Otherwise add it as usual
      } else {
        this.list.push(item)
      }
    })
    EventBus.$on('remove-list-item', arrIndex => {
      this.list.splice(arrIndex, 1)
    })
    EventBus.$on('edit-list-item', payload => {
      console.log(payload)
      this.list[payload.index].name = payload.value
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
    EventBus.$on('add-stakeholder-requirement', stakeholderIndex => {
      this.list[stakeholderIndex].requirements.push('')
    })
    EventBus.$on('update-note', payload => {
      var value = payload.value
      var noteIndex = payload.index
      var parentIndex = payload.parentIndex
      this.list[parentIndex].requirements[noteIndex] = value
    })
    EventBus.$on('delete-note', payload => {
      // var value = payload.value
      var noteIndex = payload.index
      var parentIndex = payload.parentIndex
      this.list[parentIndex].requirements.splice(noteIndex, 1)
    })
    EventBus.$on('move-note', payload => {
      var index = payload.index
      var direction = payload.direction
      var parentIndex = payload.parentIndex
      var tempObj = this.list[parentIndex].requirements[index]
      this.list[parentIndex].requirements.splice(index, 1)
      this.list[parentIndex].requirements.splice(index + direction, 0, tempObj)
    })
  },
  beforeDestroy () {
    EventBus.$off()
  },
  data () {
    return {
      numberOfPages: 5,
      toolName: 'Stakeholder Requirements',
      list: [
        {
          name: 'test',
          selected: true,
          requirements: []
        },
        {
          name: 'test2',
          selected: true,
          requirements: []
        },
        {
          name: 'test3',
          selected: true,
          requirements: []
        },
        {
          name: 'test4',
          selected: false,
          requirements: []
        },
        {
          name: 'test5',
          selected: false,
          requirements: []
        },
        {
          name: 'test6',
          selected: false,
          requirements: []
        },
        {
          name: 'test7',
          selected: false,
          requirements: []
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
