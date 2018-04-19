<template>
  <div id="app">
    <nav-bar class="z-10"></nav-bar>
    <transition name="page-slide" mode="out-in">
      <router-view class="z-0"></router-view>
    </transition>
  </div>
</template>

<script>
import NavBar from '@/components/nav-bar'
import '@/assets/styles/main.css'
export default {
  name: 'App',
  components: {NavBar}
}
</script>

<style>
#app {

}
</style>
