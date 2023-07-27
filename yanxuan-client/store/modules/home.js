import request from '../../utils/request.js'

const state = {
  test: "测试数据",
  indexData: {}  //存储首页数据
}

const mutations = {
  // 修改首页数据
  changeIndexDataMutations(state, indexData) {
    state.indexData = indexData
  }
}

const actions = {
  // 发送网络请求，拿首页数据
  async getIndexDataActions({commit}) {
    // 1.执行异步任务，发送网络请求
    const res = await request('/getIndexData')  //小程序
    console.log(res)
    // 2.触发mutation  commit,存入仓库
    commit('changeIndexDataMutations', res.indexData) 
  }
}

const getters = {
  
}

export default {
  //namespaced: true 的方式使其成为带命名空间的模块。保证在变量名一样的时候，添加一个父级名拼接。
  // namespaced: true 令所有模块都分模块管理；如果不加，则只会令state分模块
  namespaced: true,  
  state,
  mutations,
  actions,
  getters
}