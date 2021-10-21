<template>
  <div class="bottomMain_main">
    <div class="left_bottom_box">
      <div class="title_box">
        全部文章
      </div>
      <el-row>
        <el-col :span="12" v-for="(o, index) in 2" :key="o">
          <el-card :body-style="{ padding: '0px' }">
            <img src="../../assets/images/slide/6.jpg" class="image">
            <div style="padding: 14px;" class="conent_box">
              <span class="title_header">好吃的汉堡</span>
              <time class="time_box">{{ currentDate }}</time><br>
              <div class="content_header">
                dddddddddddddddddddddddddddssssssssssssssssssdddddddddddddddddddddddddddddddddddddddd</div>
              <div class="bottom clearfix">

                <el-button type="text" class="button">阅读文章</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <div class="right_bottom_box">

    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {


      }
    },
    mounted() {

    },
    computed: {
      currentDate() {

        return this.$common.prototype.getDayDate()
      }
    },


    methods: {

    }
  }
</script>



<style lang="less" scoped>
  .bottomMain_main {
    width: 1100px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;

    .left_bottom_box {
      width: 60%;

      .el-row {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        .el-col {
          width: 100%;
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

              .time_box{
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

    .right_bottom_box {
      width: calc(~"100% - 60% - 20px");
    }

    .left_bottom_box,
    .right_bottom_box {

      .title_box {
        margin-top: 10px;
        height: 50px;
        line-height: 30px;
        font-size: 20px;
        padding-left: 5px;
        font-family: Roboto, sans-serif;
      }
    }
  }
</style>
