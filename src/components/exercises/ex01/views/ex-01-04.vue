<template lang="html">
  <div class="">
    <div class="font-sans container mx-auto flex flex-wrap">
      <div class="w-full sm:w-1/2 p-4 border-r border-grey flex justify-center flex-col ">
        <h2 class="font-normal pb-2">Prioritize stakeholders</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      <div class="w-full sm:w-1/2 p-4">
        <h2 class="font-light text-center">Identify up to 5 key requirements for each stakeholder</h2>
        <br>
        <notes-container :list="refinedList" list-count="listCount"></notes-container>
    </div>
    </div>
  </div>
</template>

<script lang="js">
import FormInput from '@/components/form/form-input'
import NotesContainer from '@/components/notes/notes-container'
export default {
  name: 'ex-04',
  props: ['list', 'refinedList', 'listCount'],
  components: { FormInput, NotesContainer },
  mounted () {

  },
  data () {
    return {
      inputtedStakeholder: ''
    }
  },
  methods: {

  },
  computed: {
    listNames: function () {
      var arr = []
      for (var i = 0; i < this.list.length; i++) {
        arr.push(this.list[i].name)
      }
      return arr
    }
  }
}
</script>

<style>

</style>
