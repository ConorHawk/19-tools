<template>
  <div class="w-full bg-black p-4 z-50 fixed pin-b">
    <div class="flex items-center container mx-auto">
      <transition name="fade" mode="out-in">
          <router-link v-if="currentPage !== 1" :to="'/ex-01/' + (currentPage - 1)" style="transition: 0.2s all;" class="mr-auto text-white no-underline border border-white rounded font-light px-6 py-2">Previous</router-link>
      </transition>
      <transition name="fade" mode="out-in">
        <router-link  v-if="currentPage !== pages" :to="'/ex-01/' + (currentPage + 1)" style="transition: 0.2s all;" class="ml-auto text-grey-darkest bg-white no-underline border border-white rounded  px-6 py-2">Next</router-link>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'module-footer',
  props: ['pages', 'toolName'],
  data () {
    return {
      currentPage: 1,
      pageTitle: ''
    }
  },
  methods: {
    getRouteInfo: function () {
      var url = this.$router.currentRoute.fullPath
      this.currentPage = parseInt(url.substring(url.lastIndexOf('/') + 1))
      this.pageTitle = this.$route.meta.pageTitle
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
