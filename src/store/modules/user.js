export default {
    //增加了命名空间的概念
    namespaced: true,
    state: {
        name: "张三",
        age: 18
    },
    mutations: {
        changeName(state, payload) {
            state.name = payload.name;
        }
    },
    actions: {},
    getters: {}
}