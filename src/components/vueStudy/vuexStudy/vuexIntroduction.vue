<template>
  <div class="vuexIntroduction_main">
    <div class="vuex-header">
      <router-view ></router-view>
    </div>
    <div>11111</div>
  </div>
</template>

<script>
  export default {
    data() {
      return{

      }
    },
    methods: {
      showIsCollapse() {
        this.$store.commit('changeIsCollapse')
        this.$store.commit('changeIsOver')
      }
    }

  }
</script>

<style lang="less" scoped>
  .vuexIntroduction_main {
    width: 100%;
    .vuex-header{
      width: 100%;
      height: 50px;
    }
  }
</style>
