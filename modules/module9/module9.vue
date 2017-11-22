<template>
    <div>
        <gaea-widget
                :visible.sync="visible"
                visible="true"
                top="80"
                left="300"
                title="评论管理">
            <gaea-icon type="ios-close-outline" slot="close" size="32" color="#000"></gaea-icon>
            <div>
                Hello {{who}}
            </div>
            <div>
                {{msg}}
            </div>
            <div>

            </div>
            <div>
                <ul>
                    <li v-for="item in list" :value="item">{{item}}</li>
                </ul>
            </div>
            <div><button v-on:click="showMsg">Click me</button></div>
        </gaea-widget>
    </div>
</template>

<script>
    module.exports = {
        props: ['paramData'],
        data: function() {
            return {
                who: 'module9',
                list: ['a','b','c'],
                visible: true,
                msg: ''
            }
        },
        methods:{
            showMsg:function () {
                vm.$emit('module5',{aaa:'aaa',bbb:'bbb'});
            }
        },
        watch: {
            visible: function (newValue, oldValue) {
                if (newValue == false) {
                    closeCom('/module9');
                }
            }
        },
        mounted: function () {
            vm.$on('module9', (msg)=> {
                console.log(msg)
            });
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