<template>
  <div class="amap_main">
    <div class="header">
      <router-view></router-view>
    </div>

    <el-card class="box-card">
      <div class="header-box">
        <img src="../../assets/images/slide/5.jpg">
      </div>
      <div class="text_content">
        <div class="text_title">
          高德地图学习-stage-one
        </div>
        <!-- <el-amap class="amap-box" :vid="'amap-vue'"></el-amap> -->
        <div id="amap-container" style="width: 500px; height: 500px;"></div>
      </div>
    </el-card>

  </div>
</template>

<script>
  import AMap from 'AMap'

  export default {
    data() {
      return {

      }
    },

    mounted() {
      this.init()
    },

    methods: {
      init() {
        console.log(1111111111)
        let map = new AMap.Map('amap-container', {
          center: [116.397428, 39.90923],
          zoom: 11,
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  .amap_main {
    width: 100vw;
    height: 100vh;

    .header {
      width: 100%;
      height: 50px;
    }



    .el-card{
      max-width: 750px;
      margin: 0 auto;


      .header-box{
        width: 100%;

        img{
          width: 100%;
        }
      }
      .text_content{
        width: 100%;
        padding: 20px;

        .text_title{
          font-size: 20px;
          font-family: Fantasy;
        }
      }
    }

  }
</style>
