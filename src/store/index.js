import { createStore } from 'vuex'
import ModuleUser from './user';
export default createStore({
  state: {//数据
  },
  getters: {//通过计算获得的东西
  },
  mutations: {//对state修改的操作可以放到这里
  },
  actions: {//定义对state的操作
  },
  modules: {//对state分割
    user:ModuleUser,
  }
});

