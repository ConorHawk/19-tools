<template lang="html">
  <section class="min-h-full flex" style="box-shadow: 0 0 250px rgba(0,0,0,0.5) inset;">
    <module-header :pages="numberOfPages" :tool-name="toolName"></module-header>
    <transition name="page-slide" mode="out-in">
      <router-view class="flex-1 flex items-center justify-center py-12 m-auto" :stakeholders="stakeholders" :active-stakeholder="stakeholders[activeStakeholder]" :active-stakeholder-index="activeStakeholder"></router-view>
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
    EventBus.$on('update-active-stakeholder', (index) => {
      this.activeStakeholder = index
    })
    EventBus.$on('update-audience', (value, index) => {
      this.stakeholders[index].audience = value
    })
    EventBus.$on('update-need', (value, index) => {
      this.stakeholders[index].need = value
    })
    EventBus.$on('update-channel', (value, index) => {
      this.stakeholders[index].channel = value
    })
    EventBus.$on('update-omit', (value, index) => {
      this.stakeholders[index].omit = value
    })
    EventBus.$on('update-revenue', (value, index) => {
      this.stakeholders[index].revenue = value
    })
    EventBus.$on('update-employee', (value, index) => {
      this.stakeholders[index].employee = value
    })

  },
  beforeDestroy () {
    EventBus.$off()
  },
  data () {
    return {
      toolName: 'ANCHOR',
      numberOfPages: 8,
      activeStakeholder: 0,
      stakeholders: [
        {
          stakeholder: 'Loaded Stakeholder',
          id: 1,
          audience: '',
          need: '',
          channel: '',
          omit: '',
          revenue: '',
          employee: ''
        }, {
          stakeholder: 'Loaded Stakeholder 2',
          id: 2
        }
      ]
    }
  },
  methods: {

  },
  computed: {
  }

}
</script>

<style>

</style>
