<template>
  <div id="app">
    <Header></Header>
    <!--路由组件的出口-->
    <router-view></router-view>
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>

import Header from './components/Header';
import Footer from './components/Footer';


export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: '',
  components: {
    Header,
    Footer,
  }
}
</script>

<style>

</style>
