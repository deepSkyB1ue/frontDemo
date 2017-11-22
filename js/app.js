var vm = new Vue({
    router: router,
    data: {
        header: {
            username: 'Admin',
        },
        nav: {
            maxWidth: 200,
            minWidth: 60,
            open: true,
        },
        popupArray: [],
        paramData: '',
    },
    methods: {
        toggleNav: function() {
            this.nav.open = !this.nav.open;
        },
        navSelect: function(name) {
            console.log('selected menu name is :', name);
            if (name == '/module6' || name == '/module7' || name == '/home') {
                this.paramData = { aaa: 'aaa', bbb: 'bbb' };
                router.push(name);
            } else {
                this.paramData = { aaa: 'aaa', bbb: 'bbb' };
                popupCom(name);
            }
        },
    },
    computed: {
        navWidth: function() {
            return this.nav.open ? this.nav.maxWidth : this.nav.minWidth;
        },
        searchBtn: function() {
            return this.search.loading ? { 'background-color': '#fff' } : {};
        },
    },
    mounted: function() {},
}).$mount('#app');
