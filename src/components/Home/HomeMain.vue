<template>
  <div class="HomeMain_main">


    <div class="top_center">
      <div class="top_center_left">猜你喜欢</div>
      <div class="top_center_right">
        <!--
          active-color：switch打开时的背景颜色
          inactive-color：switch关闭时的背景颜色
         -->
        <el-switch v-model="value" active-color="currentColor" inactive-color="rgba(0,0,0,.38)">
        </el-switch>
        自动播放
      </div>
    </div>
    <div id="swiper_slider" class="swiper-container">
      <div class="shadow_box"></div>
      <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="../../assets/images/slide/1.jpg"></div>
        <div class="swiper-slide"><img src="../../assets/images/slide/2.jpg"></div>
        <div class="swiper-slide"><img src="../../assets/images/slide/3.jpg"></div>
        <div class="swiper-slide"><img src="../../assets/images/slide/4.jpg"></div>
        <div class="swiper-slide"><img src="../../assets/images/slide/5.jpg"></div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
    </div>

    <div class="display_border">

    </div>
  </div>
</template>

<script>
  import {
    Swiper,
    SwiperSlide
  } from 'vue-awesome-swiper'
  export default {
    data() {
      return {
        slideObj: {
          delay: 3999,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
        value: true, //控制走马灯自动轮播开关
        swiper: '',
      }

    },
    components: {
      Swiper,
      SwiperSlide
    },

    watch: {
      value() {
        console.log(this.swiper)
        this.value ? this.swiper.autoplay.start() : this.swiper.autoplay.stop();
      }
    },


    mounted() {
      var self = this
      this.swiper = new Swiper('.swiper-container', {
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          renderBullet: function(index, className) {
            return `<span class='${className} iconfont'>&#xe682;</span>`
          },
        },

        autoplay: this.slideObj
      })
    }
  }
</script>


<style lang="less">
  .HomeMain_main {
    width: 100%;

    .top_center {
      width: 1100px;
      height: 50px;
      display: flex;
      justify-content: space-between;
      margin: 0 auto;

      .el-switch {

        .el-switch__core {
          height: 25px;
          width: 45px;
          border-radius: 25px;
          border-color: rgba(0, 0, 0, 0.05) !important;
        }

        .el-switch__core:after {
          width: 20px;
          height: 20px;
          border-radius: 20px;
          margin-left: 1px;


        }
      }

      .is-checked {
        .el-switch__core::after {
          margin-left: -21px !important;

        }
      }
    }

    .swiper-container {
      width: 1100px;
      height: 82vh;
      border-radius: 10px;
      position: relative;



      .shadow_box {
        width: 100%;
        height: 85%;
        position: absolute;
        bottom: 0;
        background: linear-gradient(180deg, rgba(49, 49, 48, 0), rgba(22, 29, 39, .7));
        z-index: 2;
      }

      .shadow_box:hover+.swiper-wrapper .swiper-slide-active img {
        transform: scale(1.03);
        transition: all 0.7s;
      }


      .swiper-wrapper {
        width: 100%;
        height: 100%;
        z-index: 1;

        .swiper-slide {
          text-align: center;
          font-size: 18px;
          background: #fff;

          /* Center slide text vertically */
          display: -webkit-box;
          display: -ms-flexbox;
          display: -webkit-flex;
          display: flex;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          -webkit-justify-content: center;
          justify-content: center;
          -webkit-box-align: center;
          -ms-flex-align: center;
          -webkit-align-items: center;
          align-items: center;


          img {
            width: 100%;
            height: 100%;
            transition: all 0.5s;
          }

          img:hover {
            transform: scale(1.03);
            transition: all 0.7s;
          }
        }
      }




      .swiper-pagination {
        width: 100%;

        .swiper-pagination-bullet {
          width: 25px;
          height: 25px;
          text-align: center;
          line-height: 25px;
          font-size: 20px;
          opacity: 0.8;
          color: #009F95;
          background: rgba(0, 0, 0, 0);
        }

        .swiper-pagination-bullet:hover {
          opacity: 1;
          color: #009F95;
          font-size: 22px;
          background: rgba(255, 125, 205, 0.1);

        }

        .swiper-pagination-bullet-active {
          opacity: 0.8;
          color: #009F95;
          background: rgba(85, 170, 255, 0.15);
        }
      }
    }




  }
</style>
