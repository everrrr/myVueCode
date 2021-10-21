<template>
  <div class="vuexHeader_main">
    <div class="header_top">
      <div class="return_left iconfont">&#xe755;</div>
      <div class="toggle-button iconfont" @click="showIsCollapse">
        &#xe64f;
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {

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
  .vuexHeader_main {
    width: 100%;

    .header_top {
      width: 100%;
      position: relative;

      .return_left {
        position: absolute;
        height: 50px;
        line-height: 50px;
        left: 20px;
      }

      .toggle-button {
        position: absolute;
        height: 50px;
        line-height: 50px;
        right: 20px;
      }
    }
  }
</style>
