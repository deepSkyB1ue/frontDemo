<template>
    <div>{{ paramData }}}
    <div class="stations">
        <div v-for="(item,index) in stationsNew" style="display: inline-block;border: 0px">
            <div v-if="index > 0" class="line"></div>
            <div class="station"></div>
        </div>
        <!--<div class="station_action"></div>
        <div class="line_action"></div>
        <div class="station_action"></div>
        <div class="line"></div>
        <div class="station"></div>
        <div class="line"></div>
        <div class="station"></div>
        <div class="line"></div>
        <div class="station"></div>-->
    </div>

    </div>
</template>

<script>
    module.exports = {
        props: ['paramData'],
        data: function() {
            return {
                stations:[{name:"abc",lat:"",lnt:""},
                    {name:"abc",lat:"",lnt:""},
                    {name:"abc",lat:"",lnt:""},
                    {name:"abc",lat:"",lnt:""},
                    {name:"abc",lat:"",lnt:""},
                    {name:"abc",lat:"",lnt:""},
                    {name:"abc",lat:"",lnt:""},
                    {name:"abc",lat:"",lnt:""}
                ]
            }
        },
        methods:{
            showMsg:function () {
                vm.$emit('module5',{aaa:'aaa',bbb:'bbb'});
            }
        },
        watch: {

        },
        computed: {
            stationsNew: function () {
                var stationsTemp = [];
                for(var i=0;i<this.stations.length;i++){
                    stationsTemp[i] = stations[i];
                    if(stations[i].status == undefined){
                        stationsTemp[i].status = 0
                    }else{
                        stationsTemp[i].status = stations[i].status
                    }
                }
                return stationsTemp;
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

    .stations{
        height: 20px;
    }
    .station{
        border: 0px;
        display: inline-block;
        border-radius: 20px;
        width: 20px;
        height: 20px;
        background: gray;
        float:left
    }
    .station_action{
        display: inline-block;
        border-radius: 20px;
        width: 20px;
        height: 20px;
        background: red;
        float:left
    }
    .line{
        border-bottom: 4px solid gray;
        display: inline-block;
        height: 12px;
        width: 50px;
        float:left
    }
    .line_action{
        border-top: 4px solid red;
        display: inline-block;
        height: 12px;
        width: 50px;
        float:left
    }

</style>