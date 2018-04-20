<template lang="html">
  <div class="">
    <div class="font-sans container mx-auto">
      <table style="width:100%">
        <tr>
          <th class="text-left">Stakeholder</th>
          <th class="text-left">Requirements</th>
        </tr>
        <tr class="border border-red" v-for="item in refinedList" v-bind:key="item.name">
          <td>{{item.name}}</td>
          <td >
            <ol>
              <li v-for="(requirement, index) in item.requirements" v-bind:key="requirement + index">{{requirement}}</li>
            </ol>
          </td>
        </tr>
      </table>
      <div class="flex justify-end">
        <router-link class="my-4 bg-purple text-white text-xl rounded overflow-hidden m-2 font-light border border-purple-dark shadow-md px-8 py-2" to="/ex-01/04">Back</router-link>
        <!-- <router-link class="my-4 bg-red text-white text-xl rounded overflow-hidden m-2 font-light border border-red-dark shadow-md px-8 py-2" to="/ex-01/04">Next</router-link> -->
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
    return {}
  },
  methods: {

  },
  computed: {

  }
}
</script>

<style>

</style>
