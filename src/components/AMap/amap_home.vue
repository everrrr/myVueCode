<template>
  <div class="amap_main">
    <div class="header">
      <router-view></router-view>
    </div>

    <el-row>
      <el-col :span="12" v-for="(o, index) in 2" :key="o">
        <el-card :body-style="{ padding : '0px' }">
          <img src="../../assets/images/slide/6.jpg" class="image">
          <div style="padding: 14px;" class="conent_box">
            <span class="title_header">好吃的汉堡</span>
            <time class="time_box">{{ currentDate }}</time><br>
            <div class="content_header">
              dddddddddddddddddddddddddddssssssssssssssssssdddddddddddddddddddddddddddddddddddddddd</div>
            <div class="bottom clearfix">

              <el-button type="text" class="button" @click="toButtonClick">阅读文章</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>

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
      },

      toButtonClick(){
        this.$router.push('/amap-init')
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

    .el-row {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      .el-col {
        max-width: 700px;
        margin: 0 auto;
        margin-bottom: 20px;


        .el-card {
          width: 100%;
          border-radius: 10px;

          img {
            width: 100%;
          }

          .conent_box {
            width: 100%;

            .title_header {
              width: 100%;
              display: inline-block;
              margin: 10px 0;
            }

            .time_box {
              display: inline-block;
              margin-bottom: 10px;
            }

            .content_header {
              width: 100%;
              word-break: break-all;
              margin-bottom: 10px;
            }
          }
        }
      }
    }


  }
</style>
