<template>
  <div class="font-sans container mx-auto flex flex-wrap">
    <div class="w-full sm:w-1/3 p-4 border-r border-grey flex justify-center flex-col ">
      <slot name="leftColumn"></slot>
    </div>
    <div class="w-full sm:w-2/3 p-4">
      <slot name="rightColumn"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tool-container',
  props: ['twoColumn'],
  data () {
    return {
    }
  },
  methods: {
  },
  mounted: function () {
  },
  watch: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
