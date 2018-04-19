<template lang="html">
  <div class="">
    <div class="font-sans container mx-auto">
      <div class="flex justify-center">
        <form class="text-center flex flex-col" v-on:submit.prevent="addItem()">
          <label class="text-xl pb-1" for="text-xl">Enter a stakeholder here:</label><br>
          <div class="border border-blue inline-flex rounded-lg overflow-hidden shadow-md">
            <input class="p-4 text-2xl" v-model="test1" type="text" name="">
            <button class="bg-blue text-white text-5xl flex items-center py-1 px-4" type="submit" name="button"><span>+</span></button>
          </div>
        </form>
      </div>

      <list-container :list="list"></list-container>
    </div>
  </div>

</template>

<script lang="js">
import FormInput from '@/components/form/form-input'
import ListContainer from '@/components/list/list-container'
import { EventBus } from '@/event-bus.js'
export default {
  name: 'ex-01',
  props: [],
  components: { FormInput, ListContainer },
  mounted () {
    EventBus.$on('remove-list-item', arrIndex => {
      this.list.splice(arrIndex, 1)
    })
  },
  data () {
    return {
      test1: '',
      list: [
        {
          name: 'test'
        },
        {
          name: 'test2'
        }
      ]
    }
  },
  methods: {
    addItem: function () {
      var item = {
        name: this.test1
      }
      this.list.push(item)
      this.test1 = ''
    }
  },
  computed: {

  }
}
</script>

<style>

</style>
