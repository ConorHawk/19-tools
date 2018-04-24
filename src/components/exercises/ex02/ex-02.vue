<template lang="html">
  <section class="min-h-full flex" style="box-shadow: 0 0 250px rgba(0,0,0,0.5) inset;">
    <module-header :pages="numberOfPages" :tool-name="toolName"></module-header>
    <transition name="page-slide" mode="out-in">
      <router-view class="flex-1 flex items-center justify-center py-12 m-auto" :table="table"></router-view>
    </transition>
    <module-footer :pages="numberOfPages" :tool-name="toolName"></module-footer>
  </section>
</template>

<script lang="js">
import ModuleHeader from '@/components/module-header'
import ModuleFooter from '@/components/module-footer'

import { EventBus } from '@/event-bus.js'
export default {
  name: 'ex-02',
  props: [],
  components: { ModuleHeader, ModuleFooter },
  mounted () {
    EventBus.$on('construct-new-stakeholder', () => {
      var newStakeholder = this.getStakeholderObject()
      console.log(newStakeholder)
      this.table.push(newStakeholder)
    })
    EventBus.$on('update-stakeholder', (index, value) => {
      this.table[index].stakeholder = value
    })
    EventBus.$on('update-statement', (parentIndex, index, value) => {
      var result = this.table[parentIndex].results[index]
      var splitStatement = value.split(' ')
      for (var i = 0; i < splitStatement.length; i++) {
        var currentItem = parseInt(splitStatement[i])
        // If the current string is a number
        if (!isNaN(currentItem)) {
          result.currentResult = currentItem
          splitStatement[i] = 'VALUE_MARKER'
        }
      }
      result.statement = value
      result.gap = result.currentResult - result.desiredResult
      result.splitStatement = splitStatement
    })
    EventBus.$on('update-desired-result', (parentIndex, index, value) => {
      var result = this.table[parentIndex].results[index]
      console.log(value)
      result.desiredResult = parseInt(value)
      result.gap = result.currentResult - result.desiredResult
    })
    EventBus.$on('add-result', (parentIndex) => {
      var resultObj = this.getResultObj()
      this.table[parentIndex].results.push(resultObj)
    })
  },
  beforeDestroy () {
    EventBus.$off()
  },
  data () {
    return {
      toolName: 'Gap Analysis',
      numberOfPages: 5,
      table: [
        // {
        //   id: 1,
        //   stakeholder: 'Conor',
        //   results: [
        //     {
        //       statement: '',
        //       splitStatement: [],
        //       currentResult: null,
        //       desiredResult: null,
        //       gap: null,
        //       id: 2,
        //       valid: true
        //     }, {
        //       statement: '',
        //       currentResult: null,
        //       desiredResult: null,
        //       gap: null,
        //       id: 3,
        //       valid: false
        //     }
        //   ]
        // }
      ]
    }
  },
  methods: {
    getStakeholderObject: function () {
      var stakeholder = {
        id: Date.now(),
        stakeholder: '',
        results: [
          {
            statement: '',
            splitStatement: [],
            currentResult: null,
            desiredResult: null,
            gap: null,
            id: Date.now() + 1,
            valid: false
          }
        ]
      }
      return stakeholder
    },
    getResultObj: function () {
      var result = {
        statement: '',
        splitStatement: [],
        currentResult: null,
        desiredResult: null,
        gap: null,
        id: Date.now() + 1,
        valid: false
      }
      return result
    }
  },
  computed: {
  }

}
</script>

<style>

</style>
