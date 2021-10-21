<template>
  <div class="HomeBox_main">
    <div class="header">
      <div class="return_left iconfont">&#xe755;</div>
      <div class="title_top">首页</div>
      <!-- <div class="toggle-button iconfont" @click="$emit('toggle', false)"> -->
      <div class="toggle-button iconfont" @click="changeState">
        &#xe64f;
      </div>
    </div>
    <div class="main-top">
      <router-view name='main'></router-view>
    </div>
    <div class="main-bottom">
      <router-view name='bottomMain'></router-view>
    </div>
  </div>
</template>

<script>

  export default{
    data(){
      return {

      }
    },
    methods:{
      changeState(){
        this.$store.commit('changeIsCollapse')
        this.$store.commit('changeIsOver')
      }
    }
  }
</script>

<style lang="less" scoped>
  .HomeBox_main {
    width: 100%;
    .header {
      width: 85%;
      background-color: #f4f4f4;
      color: #333;
      text-align: center;
      height: 50px;
      line-height: 50px;
      display: flex;
      justify-content: center;
      position: relative;
      margin: 0 auto;

      .return_left {
        position: absolute;
        left: 10px;
        font-weight: bold;
        font-size: 20px;
      }

      .toggle-button {
        color: #000000;
        width: 20px;
        text-align: right;
        padding-right: 15px;
        font-weight: bold;
        height: 100%;
        vertical-align: middle;
        font-size: 20px;
        position: absolute;
        right: 0px;
      }
    }



    .main-top {
      width: 100%;
      height: 100vh;
    }

    .main-bottom {
      width: 100%;

    }
  }
</style>
