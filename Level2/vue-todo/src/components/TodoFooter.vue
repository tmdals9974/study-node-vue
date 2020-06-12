<template>
    <footer class="clearAllContainer">
        <span class="clearAllBtn" v-on:click="removeAllItem">Clear All</span>
    </footer>
</template>

<script>
export default {
    methods: {
        removeAllItem : function() {
            this.$emit('removeAllItem');
        }
    },
}
</script>

<style scoped>
.clearAllContainer {
    width: 8.5rem;
    height: 50px;
    line-height: 50px;
    background-color: white;
    border-radius: 5px;
    margin: 0 auto;
}
.clearAllBtn {
    color: #e20303;
    display: block;
}
</style>