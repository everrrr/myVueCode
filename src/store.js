import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)

export default new Vuex.Store({
  state: { //状态
    isCollapse: true,
    isOver: true
  },
  mutations: {
    //控制主菜单显示隐藏
    changeIsCollapse(state) {
      console.log(state.isCollapse)
      state.isCollapse = !state.isCollapse
    },
    //控制主菜单展开时的蒙版显示隐藏
    changeIsOver(state) {
      console.log(state.isOver)
      state.isOver = !state.isOver
    },

  },


})
