var stations = [{name:"文字垂直排列",lat:"",lnt:""},
    {name:"文字垂直排列",lat:"",lnt:""},
    {name:"文字垂直排列",lat:"",lnt:""},
    {name:"文字垂直排列",lat:"",lnt:""},
    {name:"文字垂直排列",lat:"",lnt:""},
    {name:"文字垂直排列",lat:"",lnt:""},
    {name:"文字垂直排列",lat:"",lnt:""},
    {name:"文字垂直排列",lat:"",lnt:""},
    {name:"文字垂直排列",lat:"",lnt:""},
    {name:"文字垂直排列",lat:"",lnt:""},
    {name:"文字垂直排列",lat:"",lnt:""},
    {name:"文字垂直排列",lat:"",lnt:""},
    {name:"文字垂直排列",lat:"",lnt:""}
];

var vm =  new Vue({
    data: {
        stationArray:[],
        stationNames:[]
    },
    methods: {
        selectStation:function (index) {
            stopStation(index);
        }
    },
    beforeDestroy: function () {
    }

}).$mount('#app');

function initStations() {
    var _stations = [];
    var _stationName = [];
    for(var i=0;i<stations.length;i++){
        _stationName.push(stations[i].name);
        _stations.push(stations[i]);
        if(i == 0){
            _stations[i].status = 2;
        }else{
            _stations[i].status = 0;
        }
    }
    vm.stationArray = _stations;
    vm.stationNames = _stationName;
}

function stopStation(index) {
    var _stations = [];
    for(var i=0;i<stations.length;i++){
        _stations.push(stations[i]);
        if(index == i){
            _stations[i].status = 2;
        }else if(i < index){
            _stations[i].status = 1;
        }else{
            _stations[i].status = 0;
        }
    }
    vm.stationArray = _stations;
}

initStations();