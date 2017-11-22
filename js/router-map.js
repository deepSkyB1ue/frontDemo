var router = new VueRouter({
    //routes:[{ path: '/module6', component: httpVueLoader('modules/module6/module7.vue') }]    // （缩写）相当于 routes: routes
});

router.beforeEach(function(to, from, next){
    if(routersMap[to.path] == undefined){
        next(false);
    }
    //如果路由中不存在所要加载的组件
    if(router.getMatchedComponents(to).length <1){
        //获取组件并加载到路由中
        var _temp = httpVueLoader(routersMap[to.path]);
        router.addRoutes([{ path: to.path, component: _temp}]);
        //终止当前路由，再次跳转到目标地址
        next(to.path);
    }
    next();
});

var routersMap = {
    '/':'modules/home/home.vue',
    '/home':'modules/home/home.vue',
    '/module5':'modules/module5/module5.vue',
    '/module6':'modules/module6/module6.vue',
    '/module7':'modules/module7/module7.vue',
    '/module8':'modules/module8/module8.vue',
    '/module9':'modules/module9/module9.vue',
    '/station':'modules/station/station.vue'
}