import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex); //전역사용 선언

const storage = {
    fetch() {
        const arr = [];
        if (localStorage.length > 0) {
            for (let i = 0; i < localStorage.length; i++) {
                if (localStorage.key(i) !== 'loglevel:webpack-dev-server')
                    arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
            }
        }
        return arr;
    }
}

export const store = new Vuex.Store({
    state : {
        headerText : "TODO it!",
        todoItems : storage.fetch()
    },
    // getters: {
    //     storedTodoItems(state) {
    //         return state.todoItems;
    //     }
    // },
    mutations : {
        addTodoItem(state, newTodoItem) {
            const obj = {completed: false, item: newTodoItem};
            localStorage.setItem(newTodoItem, JSON.stringify(obj));
            state.todoItems.push(obj);
        },
        removeItem(state, payload) {
            localStorage.removeItem(payload.todoItem.item);
            state.todoItems.splice(payload.index, 1);
        },
        completeItem(state, payload) {
            state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
            localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
        },
        removeAllItem(state) {
            state.todoItems = [];
            localStorage.clear();
        }
    }
})