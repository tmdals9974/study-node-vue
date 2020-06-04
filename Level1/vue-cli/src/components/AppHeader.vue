<template>
    <header>
        <h1>{{ header }}</h1>
        <button v-on:click="onClick">send</button>
    </header>    
</template>

<script>
export default {
    props : {
        header : String
    },
    methods: {
        onClick : function () {
            var strArray = [ 'hello', 'hi', 'fine', 'string', 'test', 'english', 'vue', 'node', 'inflearn' ];
            this.$emit('renew', strArray[getRandomInt(0, strArray.length-1)]);
        }
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
}
</script>

<style>

</style>