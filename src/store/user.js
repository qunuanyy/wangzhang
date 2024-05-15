import { getToken, setToken, removeToken } from "@/utils/auth";

//用户模块 共享数据
const state = {
    token: getToken(), // 从缓存中读取初始值
}
//修改state
const mutations = {
    setToken(state, token) {
        state.token = token
        // 同步到缓存
        setToken(token)
    },
    removeToken(state) {
        state.token = null
        removeToken()
    }

}
// 执行异步操作
const actions = {
    // context上下文，传入参数
    async login(context, data) {
        console.log(data)
        // todo: 调用登录接口
        const token = await login(data)
        // 返回一个token 123456
        context.commit('setToken', token)
    }
}
// 导出
export default {
    namespaced: true,
    state,
    mutations,
    actions
}
