import Vue from "vue"
import Vuex from "vuex"
import axios from "axios"

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        todo: ""
    },
    getters: {
        getTodo(state) {
            return state.todo;
        }
    },
    mutations: {
        updateTodoList(state, content) {
            state.todo = content;
        }
    },
    actions: {
        boring({
            commit
        }) {
            axios.get('http://www.boredapi.com/api/activity/')
                .then(response => {
                    const content = response.data.activity;
                    commit("updateTodoList", content);
                })
        }
    }
})

export default store;