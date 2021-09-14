
<template>
  <div class="home-main">
    <div class="v-over" :class="{ hide: isOver }" @click="overClick"></div>
    <el-container class="home-container">
      <el-aside :width="isCollapse ? '0' : '256px'">
        <div class="header">
          <div class="nav_header_top"></div>
          <div class="nav_header_bottom">
            <div class="nav_header_img">
              <img src="@/assets/images/portrait.jpg" alt="" />
            </div>
            <div class="nav_header_name iconfont">&#xe615; fish in the sky</div>
          </div>
        </div>

        <!--
            active-text-color 当前激活后菜单文字的颜色，在开启路由router后失效，
                              需要使用:default-active再次激活
            unique-opened 表示在展开子菜单时之展开一个子菜单
            :collapse 是否水平折叠收起菜单，仅在莫得为vertical时可用
            :collapse-transition用来设置折叠动画是否开启
            default-active：用来激活菜单的index
                 这里将default-active的值写成了动态的
                 实现步骤为
                          1.定义activePath保存当前路由的路径
                          2.在二级菜单中绑定单击事件 @click="saveNavState('/' + subItem.path)"
                          3.在methods中定义方法saveNavState，用于给activePath赋值当前的路由路径
                          4.在create初始中给this.activePath赋当前激活链接的状态值值
          -->
        <el-menu
          default-active="1-4-1"
          class="left-nav"
          background-color="#242663"
          text-color="#fff"
          :collapse="isCollapse"
          :collapse-transition="false"
          active-text-color="#409EFF"
          unique-opened
        >
          <el-menu-item index="1">
            <i class="el-icon-menu"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">技术栈</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="3">
            <i class="el-icon-menu"></i>
            <span slot="title">碎语</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-menu"></i>
            <span slot="title">兴趣栈</span>
          </el-menu-item>
        </el-menu>
      </el-aside>

      <el-main>
        <router-view @toggle="toggleCollapse"></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: true,
      isOver: true
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    toggleCollapse(isover) {
      this.isCollapse = !this.isCollapse;
      this.isOver = isover;
    },
    overClick() {
      this.isCollapse = !this.isCollapse;
      this.isOver = !this.isOver//这里的isOver定义为全局变量了，但不推荐使用这种方法
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.home-main {
  width: 100%;
  height: 100vh;
  min-width: 800px;
  background-color: #f4f4f4;

  .v-over {
    z-index: 998;
    width: 100%;
    height: 100%;
    background-color: rgba(33, 33, 33, 0.46);
    border-color: rgba(33, 33, 33, 0.46);
    position: absolute;
    top: 0;
  }

  .hide {
    display: none;
  }

  .home-container {
    width: 100%;
    height: 100%;

    .el-header {
      background-color: #f4f4f4;
      color: #333;
      text-align: center;
      line-height: 60px;
    }

    .el-header {
      .toggle-button {
        color: #eee;
        width: 20px;
        text-align: right;
        padding-right: 5px;
        height: 100%;
        vertical-align: middle;
        font-size: 20px;
        position: absolute;
        right: 20px;
      }
    }

    .el-aside {
      background-color: #1a1d53;
      color: #333;
      height: 100%;
      text-align: left;
      position: absolute;
      top: 0;
      z-index: 999;
      transition-duration: 0.2s;

      .header {
        height: 268px;
        background: #1a1d53;

        .nav_header_top {
          height: 50px;
        }

        .nav_header_bottom {
          padding: 10px 0;
          .nav_header_img {
            text-align: center;

            img {
              width: 100px;
              border-radius: 50%;
            }
          }

          .nav_header_name {
            color: rgb(255, 255, 255);
            font-weight: bold;
            text-align: center;
          }
        }
      }
      .el-radio-group {
        margin-bottom: 0 !important;
      }

      .el-menu {
        padding-top: 30px;
        width: 100%;
        height: calc(~"100% - 268px");
        border-right: none;
        border-radius: 30px 30px 0 0;
      }
    }

    .el-main {
      background-color: #f4f4f4;
      color: #333;
      display: flex;
      justify-content: center;
      padding: 0;

      
    }

    body > .el-container {
      margin-bottom: 40px;
    }
  }
}
</style>
