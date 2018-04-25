<template>
  <div class="w-full bg-black p-4 z-50 flex justify-between items-center fixed pin-t">
    <div class=" w-1/3">
      <router-link class="font-lg text-white no-underline font-light" to="/"><i class="fas fa-caret-left"></i> Exit Tool</router-link>
    </div>
    <div class="hidden sm:flex w-1/3 justify-center">
      <router-link style="transition: 0.2s all;" v-bind:class="{'bg-white': index <= ( currentPage - 1)}" v-for="(page, index) in pages" v-bind:key="'page' + index" class="mx-1 rounded-full h-4 w-4 flex items-center justify-center border border-white" :to="'/'+ rootUrl +'/' + (index + 1)"></router-link>
    </div>
    <div class="text-white w-2/3 sm:w-1/3 text-right">
      <h1 class="text-lg font-normal pb-2">{{toolName}}</h1>
      <p class="font-light">{{pageTitle}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'module-header',
  props: ['pages', 'toolName'],
  data () {
    return {
      currentPage: 1,
      pageTitle: '',
      rootUrl: ''
    }
  },
  methods: {
    getRouteInfo: function () {
      var url = this.$router.currentRoute.fullPath
      var splitUrl = url.split('/')
      this.currentPage = parseInt(url.substring(url.lastIndexOf('/') + 1))
      this.pageTitle = this.$route.meta.pageTitle
      this.rootUrl = splitUrl[1]
    }
  },
  mounted: function () {
    this.getRouteInfo()
  },
  watch: {
    '$route': function () {
      this.getRouteInfo()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
