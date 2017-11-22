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
                who: 'home'
            }
        },
        methods:{
            showMsg:function () {
                /*VueScript2.load('js/test.js').then(function () {
                    showAbc();
                });*/
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