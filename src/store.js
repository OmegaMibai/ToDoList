
import Vue from 'vue'

import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
    ToDoList:[]
}

const mutations = {
    SetAddToDoList(state,newArr1){
        state.ToDoList = newArr1
    },
    SetDelToDoList(state,num1){
        let arr = state.ToDoList
        arr.splice(num1,1)
        state.ToDoList = arr
    }
}
export default new Vuex.Store({
    state,mutations
}) 