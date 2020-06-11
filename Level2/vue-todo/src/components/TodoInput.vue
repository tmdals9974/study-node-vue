<template>
    <div class="inputBox shadow">
        <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodoItem" autofocus>
        <span class="addContainer" v-on:click="addTodoItem">
            <i class="fas fa-plus addBtn"></i>
        </span>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            newTodoItem: ''
        }
    },
    methods: {
        addTodoItem : function() {
            if (this.newTodoItem.trim() !== '') {
                this.$emit('addTodoItem', this.newTodoItem);
                this.clearInput();
            }
        },
        clearInput: function() {
            this.newTodoItem = '';
        }
    }
}
</script>

<style scoped>
input:focus {
    outline: none;
}

.inputBox {
    background: white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
    display: flex;
}

.inputBox input {
    border-style: none;
    font-size: 0.9rem;
    width: 85%;
    text-align: center;
}

.addContainer {
    cursor: pointer;
    background: linear-gradient(to right, #6478FB, #8763FB);
    display: block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
    margin-left: auto;
}

.addBtn {
    color : white;
    vertical-align: middle;
}
</style>