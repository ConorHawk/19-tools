<template lang="html">
  <section class="home">
    <h1 class="font-sans">Exercise 1</h1>
    <form-input v-model="test1"></form-input>
  </section>
</template>

<script lang="js">
import FormInput from '@/components/form/form-input'
export default {
  name: 'ex-01',
  props: [],
  components: { FormInput },
  mounted () {

  },
  data () {
    return {
      test1: ''
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
