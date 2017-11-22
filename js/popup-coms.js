function popupCom(key) {
    var popupOpations = {};
    popupOpations.comId = key;
    popupOpations.clearAllPopup = false;
    popupComponent(popupOpations);
}

/*
 参数说明
 popupOpations.comId -- 弹窗ID
 popupOpations.clearAllPopup -- 清除所有已打开popupdiv
 popupOpations.clearPopups -- 根据ID数组，清除已打开popupdiv
 */
function popupComponent(popupOpations) {

    // 注册组件
    regComponent(popupOpations.comId);
    // 关闭已打开的弹出窗口
    if(typeof popupOpations.clearAllPopup != 'undefined' && popupOpations.clearAllPopup == true){
        vm.popupArray = [];
    }else if(popupOpations.clearPopups instanceof Array && popupOpations.clearPopups.length > 0){
        for(var temp in popupOpations.clearPopups){
            var _index = vm.popupArray.indexOf(popupOpations.clearPopups[temp]);
            if(_index > -1){
                vm.popupArray.splice(_index,1);
            }
        }
    }

    // 该窗口已存在，直接返回
    if(vm.popupArray.indexOf(popupOpations.comId)>-1){
        return;
    }
    // 弹出窗口
    vm.popupArray.push(popupOpations.comId);
}

/**
 * 注册组件
 * @param key
 */
function regComponent(key) {
    let _temp = Vue.component(key);
    if(typeof _temp == 'undefined'){
        Vue.component(key, httpVueLoader.load(routersMap[key]));
    }
}

/**
 * 关闭弹出窗口
 * @param popupId
 */
function closeCom(popupId){
    var __index = vm.popupArray.indexOf(popupId);
    if(__index>-1){
        vm.popupArray.splice(__index,1);
    }
}
