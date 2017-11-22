<template>
    <div>
        <div class="hello">Hello {{who}}</div>
        <div class="hello"><button v-on:click="showMsg">Click me</button></div>

    </div>
</template>

<script>
    module.exports = {
        props: ['paramData'],
        data: function() {
            return {
                who: 'module7'
            }
        },
        methods:{
            showMsg:function () {
                showAbc();
            }
        },
        mounted:function () {
        },
        beforeDestroy: function () {
        }
    }
</script>


<style>
    .hello {
        background-color: #ffe;
    }
</style>