<template>
  <div class="HomeMain_main">
    <div class="header">
      <div class="return_left iconfont">&#xe755;</div>
      <div class="title_top">首页</div>
      <div class="toggle-button iconfont" @click="$emit('toggle', false)">
        &#xe64f;
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>


<style lang="less" scoped>
.HomeMain_main {
  width: 70%;
  position: relative;
  .header {
      
    background-color: #f4f4f4;
    color: #333;
    text-align: center;
    height: 50px;
    line-height: 50px;
    display: flex;
    justify-content: center;

    .return_left{
        position: absolute;
        left: 10px;
        font-weight: bold;
        font-size: 20px;
    }
    .toggle-button {
      color: #000000;
      width: 20px;
      text-align: right;
      padding-right: 5px;
      font-weight: bold;
      height: 100%;
      vertical-align: middle;
      font-size: 20px;
      position: absolute;
      right: 20px;
    }
  }
}
</style>