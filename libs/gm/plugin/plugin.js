/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 37);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * 插件类
 * @module plugin
 */
/**
 * 图层树事件类型
 * @class TocEvent
 * @namespace GL.ext
 */
var TocEvent = function () {
    function TocEvent() {
        _classCallCheck(this, TocEvent);
    }

    _createClass(TocEvent, null, [{
        key: 'ItemCheckChanged',
        get: function get() {
            return function () {
                return '__toc_item_check_changed';
            }();
        }
    }, {
        key: 'ItemChildrenChanged',
        get: function get() {
            return function () {
                return '__toc_item_data_changed';
            }();
        }
    }, {
        key: 'DataInitFinish',
        get: function get() {
            return function () {
                return '__toc_item_data_changed';
            }();
        }
    }]);

    return TocEvent;
}();

exports.default = TocEvent;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @author Svend
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @since  16-10-31
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _TocItem = __webpack_require__(24);

var _TocItem2 = _interopRequireDefault(_TocItem);

var _TocItemType = __webpack_require__(2);

var _TocItemType2 = _interopRequireDefault(_TocItemType);

var _TocEvent = __webpack_require__(0);

var _TocEvent2 = _interopRequireDefault(_TocEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * visible
 *
 * @static
 * @property FIELD_VISIBLE
 * @type {string}
 */
var FIELD_VISIBLE = 'visible';
/**
 * query
 *
 * @static
 * @property FIELD_QUERY
 * @type {string}
 */
var FIELD_QUERY = 'query';
/**
 * id
 *
 * @static
 * @property FIELD_ID
 * @type {string}
 */
var FIELD_ID = 'id';
/**
 * name
 *
 * @static
 * @property FIELD_NAME
 * @type {string}
 */
var FIELD_NAME = 'name';

/**
 * 插件类
 * @module plugin
 */

/**
 * 图层树工具类
 * @class TocUtil
 * @namespace GL.ext
 */

var TocUtil = function () {
    function TocUtil() {
        _classCallCheck(this, TocUtil);

        if (TocUtil._instance) throw new Error('The object cannot be instantiated, please get through getInstance');
        this.sourceData = null;
        this.sourceDataArr = [];

        this.queryData = null;
        this.queryDataArr = [];

        this.visibleData = null;
        this.visibleDataArr = [];
    }

    _createClass(TocUtil, null, [{
        key: 'getInstance',
        value: function getInstance() {
            if (!TocUtil._instance) TocUtil._instance = new TocUtil();
            return TocUtil._instance;
        }

        /**
         * 解析 JSON 数据对象为数组
         *
         * @static
         * @method parseData
         * @param data {Object} JSON 对象
         * @return {Array}  解析完成的数组
         * @example
         *          GL.Service.searchLayerTree((data) => {
         *              let tocItems = GL.ext.TocUtil.parseData(data);
         *          });
         */

    }, {
        key: 'parseData',
        value: function parseData(data) {
            var tocItems = [];
            data.forEach(function (item) {
                tocItems.push(TocUtil.parseData2TocItem(item, null));
            });
            return tocItems;
        }

        /**
         * 将 JSON 格式的 item 数据解析为 TocItem 对象
         *
         * @static
         * @method parseData2TocItem
         * @param data {Object} item 数据
         * @param parentItem {TocItem} 当前 TocItem 对象的 parent。默认值：null
         * @return {TocItem} 解析过后的 TocItem 对象
         * @example
         *          let tocItem = GL.ext.TocUtil.parseData2TocItem(item,parentItem);
         */

    }, {
        key: 'parseData2TocItem',
        value: function parseData2TocItem(data) {
            var parentItem = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

            var tocItem = new _TocItem2.default();

            tocItem.id = data.id;
            tocItem.layerId = data.layerId;
            tocItem.type = data.type;
            tocItem.name = data.name;
            tocItem.displayName = data.displayName;
            tocItem.featureType = data.featureType || GL.Point.type;
            tocItem.objectTypeField = data.objectTypeField;
            tocItem.checkField = data.check === '1';
            tocItem.visible = data.visible === '1';
            tocItem.query = data.query === '1';
            tocItem.edit = data.edit === '1';
            tocItem.parentItem = parentItem;
            if (data.children) {
                data.children.forEach(function (item) {
                    var childrenItem = TocUtil.parseData2TocItem(item, tocItem);
                    tocItem.children.push(childrenItem);
                });
            }

            if (tocItem.children.length > 0) {
                var checks = tocItem.children.filter(function (item) {
                    return item.checkField;
                });
                tocItem.check(checks.length !== 0);
            }

            return tocItem;
        }

        /**
         * 获取 TocItem 所属的 layerItem
         *
         * @static
         * @method getLayerItemByItem
         * @param subItem {TocItem} TocItem
         * @returns {TocItem} 对象所属 LayerItem
         * @example
         *          let layerItem = GL.ext.TocUtil.getLayerItemByItem(item);
         */

    }, {
        key: 'getLayerItemByItem',
        value: function getLayerItemByItem(subItem) {
            if (!subItem) return null;
            if (subItem.type === _TocItemType2.default.TYPE_LAYER) {
                return subItem;
            } else return TocUtil.getLayerItemByItem(subItem.parentItem);
        }

        /**
         * 获取所有图层节点
         *
         * @static
         * @method getAllLayerItem
         * @param items {Array} TocItem 数组
         * @param result {Array} 存放结果的数组
         * @param isCheck item 是否是选中状态（true,false,null） 设置为 null 时忽略是否选中。默认值：null
         * @example
         *          let result = [];
         *          GL.ext.TocUtil.getAllLayerItem(GL.ext.TocUtil.getVisibleDataArr(),result);
         */

    }, {
        key: 'getAllLayerItem',
        value: function getAllLayerItem(items, result) {
            var isCheck = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

            if (!items || items.length === 0) return;
            items.forEach(function (item) {
                if (item.type === _TocItemType2.default.TYPE_LAYER && (isCheck === null ? true : item.checkField === isCheck)) result.push(item);else TocUtil.getAllLayerItem(item.children, result);
            });
        }

        /**
         * 根据 id 获取 TocItem 对象
         *
         * @static
         * @method getItemById
         * @param id {String} id
         * @param items {Array} TocItem 数组
         * @return {TocItem} id 对应的 TocItem 对象
         * @example
         *          GL.ext.TocUtil.getItemById('ID-123465',GL.ext.TocUtil.getVisibleDataArr());
         */

    }, {
        key: 'getItemById',
        value: function getItemById(id, items) {
            if (!items) return null;
            var treeItem = null;
            items.forEach(function (item) {
                if (item[FIELD_ID] === id) {
                    treeItem = item;
                    return true;
                }
                treeItem = TocUtil.getItemById(id, item.children) || treeItem;
            });

            return treeItem;
        }

        /**
         * 根据 layerName 获取 TocItem 对象
         *
         * @static
         * @method getItemByName
         * @param name {String} layerName
         * @param items {Array} TocItem 数组
         * @return {TocItem} layerName 对应的 TocItem 对象
         * @example
         *          GL.ext.TocUtil.getItemByName('CA',GL.ext.TocUtil.getVisibleDataArr());
         */

    }, {
        key: 'getItemByName',
        value: function getItemByName(name, items) {
            if (!items) return null;
            var treeItem = null;
            items.forEach(function (item) {
                if (item[FIELD_NAME] === name) {
                    treeItem = item;
                    return true;
                }
                treeItem = TocUtil.getItemByName(name, item.children) || treeItem;
            });

            return treeItem;
        }

        /**
         * 改变对象的选中状态
         *
         * @static
         * @method changeItemsCheck
         * @param check {Boolean} 选中或取消选中
         * @param items {Array} 需要改变选中状态的 TocItems
         * @example
         *          GL.ext.TocUtil.changeItemsCheck(false,GL.ext.TocUtil.getVisibleDataArr());
         */

    }, {
        key: 'changeItemsCheck',
        value: function changeItemsCheck(check, items) {
            if (!items) return;
            items.forEach(function (item) {
                // if (!item || item.type != TocItemType.TYPE_OBJECTTYPE)
                //     return true;
                item.check(check);
                TocUtil.changeItemsCheck(check, item.children);
            });
        }

        /**
         * 获取对象中的所有 item
         *
         * @static
         * @method getAllItems
         * @param data {Object | Array} item 对象或数组
         * @returns {Array} item 数组
         * @example
         *          let result = GL.ext.TocUtil.getAllItems(GL.ext.TocUtil.getVisibleDataArr());
         */

    }, {
        key: 'getAllItems',
        value: function getAllItems(data) {
            var items = [];
            if (!data) return [];
            if (data instanceof Object) data = [data];
            data.forEach(function (item) {
                if (!item || !item.children) return true;
                items.push(item);
                TocUtil.getItemChildren(item, items);
            });
            return items;
        }

        /**
         * 获取 item 对象下的所有子 item
         *
         * @static
         * @method getItemChildren
         * @param item {Object} item 对象
         * @param result {Array} item 数组
         * @example
         *          let result = [];
         *          GL.ext.TocUtil.getItemChildren(GL.ext.TocUtil.getVisibleDataArr()[0], result);
         */

    }, {
        key: 'getItemChildren',
        value: function getItemChildren(item, result) {
            if (!item.children) return;
            item.children.forEach(function (t) {
                result.push(t);
            });
        }

        /**
         * 获取 items 中所有对象类别为 ObjectType 的 TocItem 的 id
         *
         * @static
         * @method getAllLeafItemId
         * @param items {Array} item 数组
         * @param result {Array} ids
         * @param isCheck {Boolean} item 是否是选中状态，设置为 null 时忽略是否选中。默认值：true
         * @example
         *          let result = [];
         *          GL.ext.TocUtil.getAllLeafItemId(GL.ext.TocUtil.getVisibleDataArr(), result , true);
         */

    }, {
        key: 'getAllLeafItemId',
        value: function getAllLeafItemId(items, result) {
            var isCheck = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

            if (items === null || items.length === 0) return;
            items.forEach(function (item) {
                if (item.type === _TocItemType2.default.TYPE_OBJECTTYPE && (isCheck === null ? true : item.checkField === isCheck)) {
                    result.push(item.id);
                } else {
                    TocUtil.getAllLeafItemId(item.children, result);
                }
            });
        }

        /**
         * 获取 items 中所有对象类别为 ObjectType 的 TocItem 的 name
         *
         * @static
         * @method getAllLeafItemName
         * @param items {Array} item 数组
         * @param result {Array} names
         * @param isCheck {Boolean} item 是否是选中状态，设置为 null 时忽略是否选中。默认值：true
         * @example
         *          let result = [];
         *          GL.ext.TocUtil.getAllLeafItemName(GL.ext.TocUtil.getVisibleDataArr(), result , false);
         */

    }, {
        key: 'getAllLeafItemName',
        value: function getAllLeafItemName(items, result) {
            var isCheck = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

            if (items === null || items.length === 0) return;
            items.forEach(function (item) {
                if (item.type === _TocItemType2.default.TYPE_OBJECTTYPE && (isCheck === null ? true : item.checkField === isCheck)) {
                    result.push(item.name);
                } else {
                    TocUtil.getAllLeafItemName(item.children, result);
                }
            });
        }

        /**
         * 获取 items 中所有对象类别为 ObjectType 的 TocItem
         * @static
         * @method getAllLeafItem
         * @param items {Array} item 数组
         * @param result {Array} TocItems
         * @param isCheck {Boolean} item 是否是选中状态，设置为 null 时忽略是否选中。默认值：true
         * @example
         *          let result = [];
         *          GL.ext.TocUtil.getAllLeafItem(GL.ext.TocUtil.getVisibleDataArr(), result , null);
         */

    }, {
        key: 'getAllLeafItem',
        value: function getAllLeafItem(items, result) {
            var isCheck = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

            if (items === null || items.length === 0) return;
            items.forEach(function (item) {
                if (item.type === _TocItemType2.default.TYPE_OBJECTTYPE && (isCheck === null ? true : item.checkField === isCheck)) {
                    result.push(item);
                } else {
                    TocUtil.getAllLeafItem(item.children, result);
                }
            });
        }

        /**
         * 删除 fieldName 属性的值为 fieldVal 的 item
         *
         * @static
         * @method delItemByField
         * @param data {Object} 原始 JSON 数据对象
         * @param fieldName {String} 字段名称
         * @param fieldVal {String} 字段值。默认值为：0
         * @returns {Object} 删除之后的 JSON 对象
         * @example
         *          let data = GL.ext.TocUtil.delItemByField(GL.ext.TocUtil.getQueryData(), GL.ext.TocUtil.FIELD_QUERY);
         */

    }, {
        key: 'delItemByField',
        value: function delItemByField(data, fieldName) {
            var fieldVal = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '0';

            if (!data) return null;
            data.forEach(function (item, index) {
                delChildrenByField(item, fieldName, fieldVal);
                if (!item.children || item.children.length === 0) delete data.item[index];
            });

            function delChildrenByField(item, fieldName) {
                var fieldVal = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '0';

                if (!item || !item.children) return;
                item.children.forEach(function (t, i) {
                    if (t.type === _TocItemType2.default.TYPE_LAYER) {
                        if (t[fieldName] === fieldVal) delete item.children[i];
                    } else {
                        delChildrenByField(t);
                    }
                });
            }

            return data;
        }

        /**
         * 获取查询树数据（query 字段为1的）
         *
         * @static
         * @method getQueryData
         * @returns {JSON} JSON 对象
         * @example
         *          let data = GL.ext.TocUtil.getQueryData();
         */

    }, {
        key: 'getQueryData',
        value: function getQueryData() {
            return TocUtil.getInstance().queryData;
        }

        /**
         * 获取查询树数据（query字段为1的）
         *
         * @static
         * @method getQueryDataArr
         * @return {Array} 数组
         * @example
         *          let items = GL.ext.TocUtil.getQueryDataArr();
         */

    }, {
        key: 'getQueryDataArr',
        value: function getQueryDataArr() {
            return TocUtil.getInstance().queryDataArr;
        }

        /**
         * 获取显示树数据（visible 字段为1的）
         *
         * @static
         * @method getVisibleData
         * @return {JSON} JSON 对象
         * @example
         *          let data = GL.ext.TocUtil.getVisibleData();
         */

    }, {
        key: 'getVisibleData',
        value: function getVisibleData() {
            return TocUtil.getInstance().visibleData;
        }

        /**
         * 获取显示树数据（visible 字段为1的）
         *
         * @static
         * @method getVisibleDataArr
         * @return {Array} 数组
         * @example
         *          let items = GL.ext.TocUtil.getVisibleDataArr();
         */

    }, {
        key: 'getVisibleDataArr',
        value: function getVisibleDataArr() {
            return TocUtil.getInstance().visibleDataArr;
        }

        /**
         * 初始化图层树数据
         *
         * @static
         * @method initData
         * @param data {Object} 初始数据对象
         * @example
         *          GL.Service.searchLayerTree((data) => {
         *              GL.ext.TocUtil.initData(data);
         *          });
         */

    }, {
        key: 'initData',
        value: function initData(data) {

            TocUtil.getInstance().sourceData = data;
            TocUtil.getInstance().sourceDataArr = TocUtil.parseData(data);

            TocUtil.getInstance().queryData = TocUtil.delItemByField(TocUtil.getInstance().sourceData, FIELD_QUERY);
            TocUtil.getInstance().queryDataArr = TocUtil.parseData(TocUtil.getInstance().queryData);

            TocUtil.getInstance().visibleData = TocUtil.delItemByField(TocUtil.getInstance().sourceData, FIELD_VISIBLE);
            TocUtil.getInstance().visibleDataArr = TocUtil.parseData(TocUtil.getInstance().visibleData);

            GL.Hub.fire(_TocEvent2.default.DataInitFinish);
        }
    }]);

    return TocUtil;
}();

exports.default = TocUtil;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
 * 插件类
 * @module plugin
 */
/**
 * TocItem 类型
 * @class TocItemType
 * @namespace GL.ext
 */
var TocItemType = {
  /**
   * 图层组
   * @property TYPE_LAYER_GROUP
   * @type {String}
   */
  TYPE_LAYER_GROUP: "LayerGroup",
  /**
   * 图层
   * @property TYPE_LAYER
   * @type {String}
   */
  TYPE_LAYER: "Layer",
  /**
   * 对象类别组
   * @property TYPE_LOGIC
   * @type {String}
   */
  TYPE_LOGIC: "LogicObjectType",
  /**
   * 对象类别
   * @property TYPE_OBJECTTYPE
   * @type {String}
   */
  TYPE_OBJECTTYPE: "ObjectType"
};

exports.default = TocItemType;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
 * 插件类
 * @module plugin
 */
/**
 * 图层类型
 * @class TocItemOtFieldType
 * @namespace GL.ext
 */
var TocItemOtFieldType = {
  /**
   * 静态图层
   * @property OBJECTTYPE_TYPE
   * @type {String}
   */
  OBJECTTYPE_TYPE: "TYPE",
  /**
   * 动态图层
   * @property OBJECTTYPE_DYNAMIC
   * @type {String}
   */
  OBJECTTYPE_DYNAMIC: "DYNAMIC",
  /**
   * 索引图层
   * @property OBJECTTYPE_INDEX
   * @type {String}
   */
  OBJECTTYPE_INDEX: "INDEX"
};

exports.default = TocItemOtFieldType;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(34);

__webpack_require__(14);

__webpack_require__(33);

__webpack_require__(7);

__webpack_require__(17);

/***/ }),
/* 5 */
/***/ (function(module, exports) {

/*
Product Name: dhtmlxTreeView
Version: 5.0
Edition: Standard
License: content of this file is covered by GPL. Usage outside GPL terms is prohibited. To obtain Commercial or Enterprise license contact sales@dhtmlx.com
Copyright UAB Dinamenta http://www.dhtmlx.com
*/

if(typeof(window.dhx)=="undefined"){window.dhx=window.dhx4={version:"5.0",skin:null,skinDetect:function(a){return{10:"dhx_skyblue",20:"dhx_web",30:"dhx_terrace",40:"material"}[this.readFromCss(a+"_skin_detect")]||null},readFromCss:function(c,d,e){var b=document.createElement("DIV");b.className=c;if(document.body.firstChild!=null){document.body.insertBefore(b,document.body.firstChild)}else{document.body.appendChild(b)}if(typeof(e)=="string"){b.innerHTML=e}var a=b[d||"offsetWidth"];b.parentNode.removeChild(b);b=null;return a},lastId:1,newId:function(){return this.lastId++},zim:{data:{},step:5,first:function(){return 100},last:function(){var c=this.first();for(var b in this.data){c=Math.max(c,this.data[b])}return c},reserve:function(a){this.data[a]=this.last()+this.step;return this.data[a]},clear:function(a){if(this.data[a]!=null){this.data[a]=null;delete this.data[a]}}},s2b:function(a){if(typeof(a)=="string"){a=a.toLowerCase()}return(a==true||a==1||a=="true"||a=="1"||a=="yes"||a=="y"||a=="on")},s2j:function(s){var obj=null;dhx4.temp=null;try{eval("dhx4.temp="+s)}catch(e){dhx4.temp=null}obj=dhx4.temp;dhx4.temp=null;return obj},absLeft:function(a){if(typeof(a)=="string"){a=document.getElementById(a)}return this.getOffset(a).left},absTop:function(a){if(typeof(a)=="string"){a=document.getElementById(a)}return this.getOffset(a).top},_aOfs:function(a){var c=0,b=0;while(a){c=c+parseInt(a.offsetTop);b=b+parseInt(a.offsetLeft);a=a.offsetParent}return{top:c,left:b}},_aOfsRect:function(d){var g=d.getBoundingClientRect();var h=document.body;var b=document.documentElement;var a=window.pageYOffset||b.scrollTop||h.scrollTop;var e=window.pageXOffset||b.scrollLeft||h.scrollLeft;var f=b.clientTop||h.clientTop||0;var i=b.clientLeft||h.clientLeft||0;var j=g.top+a-f;var c=g.left+e-i;return{top:Math.round(j),left:Math.round(c)}},getOffset:function(a){if(a.getBoundingClientRect){return this._aOfsRect(a)}else{return this._aOfs(a)}},_isObj:function(a){return(a!=null&&typeof(a)=="object"&&typeof(a.length)=="undefined")},_copyObj:function(d){if(this._isObj(d)){var c={};for(var b in d){if(typeof(d[b])=="object"&&d[b]!=null){c[b]=this._copyObj(d[b])}else{c[b]=d[b]}}}else{var c=[];for(var b=0;b<d.length;b++){if(typeof(d[b])=="object"&&d[b]!=null){c[b]=this._copyObj(d[b])}else{c[b]=d[b]}}}return c},screenDim:function(){var a=(navigator.userAgent.indexOf("MSIE")>=0);var b={};b.left=document.body.scrollLeft;b.right=b.left+(window.innerWidth||document.body.clientWidth);b.top=Math.max((a?document.documentElement:document.getElementsByTagName("html")[0]).scrollTop,document.body.scrollTop);b.bottom=b.top+(a?Math.max(document.documentElement.clientHeight||0,document.documentElement.offsetHeight||0):window.innerHeight);return b},selectTextRange:function(d,g,b){d=(typeof(d)=="string"?document.getElementById(d):d);var a=d.value.length;g=Math.max(Math.min(g,a),0);b=Math.min(b,a);if(d.setSelectionRange){try{d.setSelectionRange(g,b)}catch(f){}}else{if(d.createTextRange){var c=d.createTextRange();c.moveStart("character",g);c.moveEnd("character",b-a);try{c.select()}catch(f){}}}},transData:null,transDetect:function(){if(this.transData==null){this.transData={transProp:false,transEv:null};var c={MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd",OTransition:"oTransitionEnd",msTransition:"transitionend",transition:"transitionend"};for(var b in c){if(this.transData.transProp==false&&document.documentElement.style[b]!=null){this.transData.transProp=b;this.transData.transEv=c[b]}}c=null}return this.transData},_xmlNodeValue:function(a){var c="";for(var b=0;b<a.childNodes.length;b++){c+=(a.childNodes[b].nodeValue!=null?a.childNodes[b].nodeValue.toString().replace(/^[\n\r\s]{0,}/,"").replace(/[\n\r\s]{0,}$/,""):"")}return c}};window.dhx4.isIE=(navigator.userAgent.indexOf("MSIE")>=0||navigator.userAgent.indexOf("Trident")>=0);window.dhx4.isIE6=(window.XMLHttpRequest==null&&navigator.userAgent.indexOf("MSIE")>=0);window.dhx4.isIE7=(navigator.userAgent.indexOf("MSIE 7.0")>=0&&navigator.userAgent.indexOf("Trident")<0);window.dhx4.isIE8=(navigator.userAgent.indexOf("MSIE 8.0")>=0&&navigator.userAgent.indexOf("Trident")>=0);window.dhx4.isIE9=(navigator.userAgent.indexOf("MSIE 9.0")>=0&&navigator.userAgent.indexOf("Trident")>=0);window.dhx4.isIE10=(navigator.userAgent.indexOf("MSIE 10.0")>=0&&navigator.userAgent.indexOf("Trident")>=0&&window.navigator.pointerEnabled!=true);window.dhx4.isIE11=(navigator.userAgent.indexOf("Trident")>=0&&window.navigator.pointerEnabled==true);window.dhx4.isEdge=(navigator.userAgent.indexOf("Edge")>=0);window.dhx4.isOpera=(navigator.userAgent.indexOf("Opera")>=0);window.dhx4.isChrome=(navigator.userAgent.indexOf("Chrome")>=0)&&!window.dhx4.isEdge;window.dhx4.isKHTML=(navigator.userAgent.indexOf("Safari")>=0||navigator.userAgent.indexOf("Konqueror")>=0)&&!window.dhx4.isEdge;window.dhx4.isFF=(navigator.userAgent.indexOf("Firefox")>=0);window.dhx4.isIPad=(navigator.userAgent.search(/iPad/gi)>=0);window.dhx4.dnd={evs:{},p_en:((window.dhx4.isIE||window.dhx4.isEdge)&&(window.navigator.pointerEnabled||window.navigator.msPointerEnabled)),_mTouch:function(a){return(window.dhx4.isIE10&&a.pointerType==a.MSPOINTER_TYPE_MOUSE||window.dhx4.isIE11&&a.pointerType=="mouse"||window.dhx4.isEdge&&a.pointerType=="mouse")},_touchOn:function(a){if(a==null){a=document.body}a.style.touchAction=a.style.msTouchAction="";a=null},_touchOff:function(a){if(a==null){a=document.body}a.style.touchAction=a.style.msTouchAction="none";a=null}};if(window.navigator.pointerEnabled==true){window.dhx4.dnd.evs={start:"pointerdown",move:"pointermove",end:"pointerup"}}else{if(window.navigator.msPointerEnabled==true){window.dhx4.dnd.evs={start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}}else{if(typeof(window.addEventListener)!="undefined"){window.dhx4.dnd.evs={start:"touchstart",move:"touchmove",end:"touchend"}}}}}if(typeof(window.dhx4.template)=="undefined"){window.dhx4.trim=function(a){return String(a).replace(/^\s{1,}/,"").replace(/\s{1,}$/,"")};window.dhx4.template=function(b,c,a){return b.replace(/#([a-z0-9_-]{1,})(\|([^#]*))?#/gi,function(){var g=arguments[1];var f=window.dhx4.trim(arguments[3]);var h=null;var e=[c[g]];if(f.length>0){f=f.split(":");var d=[];for(var i=0;i<f.length;i++){if(i>0&&d[d.length-1].match(/\\$/)!=null){d[d.length-1]=d[d.length-1].replace(/\\$/,"")+":"+f[i]}else{d.push(f[i])}}h=d[0];for(var i=1;i<d.length;i++){e.push(d[i])}}if(typeof(h)=="string"&&typeof(window.dhx4.template[h])=="function"){return window.dhx4.template[h].apply(window.dhx4.template,e)}if(g.length>0&&typeof(c[g])!="undefined"){if(a==true){return window.dhx4.trim(c[g])}return String(c[g])}return""})};window.dhx4.template.date=function(a,b){if(a!=null){if(a instanceof Date){return window.dhx4.date2str(a,b)}else{a=a.toString();if(a.match(/^\d*$/)!=null){return window.dhx4.date2str(new Date(parseInt(a)),b)}return a}}return""};window.dhx4.template.maxlength=function(b,a){return String(b).substr(0,a)};window.dhx4.template.number_format=function(d,e,c,a){var b=window.dhx4.template._parseFmt(e,c,a);if(b==false){return d}return window.dhx4.template._getFmtValue(d,b)};window.dhx4.template.lowercase=function(a){if(typeof(a)=="undefined"||a==null){a=""}return String(a).toLowerCase()};window.dhx4.template.uppercase=function(a){if(typeof(a)=="undefined"||a==null){a=""}return String(a).toUpperCase()};window.dhx4.template._parseFmt=function(h,c,a){var d=h.match(/^([^\.\,0-9]*)([0\.\,]*)([^\.\,0-9]*)/);if(d==null||d.length!=4){return false}var b={i_len:false,i_sep:(typeof(c)=="string"?c:","),d_len:false,d_sep:(typeof(a)=="string"?a:"."),s_bef:(typeof(d[1])=="string"?d[1]:""),s_aft:(typeof(d[3])=="string"?d[3]:"")};var g=d[2].split(".");if(g[1]!=null){b.d_len=g[1].length}var e=g[0].split(",");if(e.length>1){b.i_len=e[e.length-1].length}return b};window.dhx4.template._getFmtValue=function(value,fmt){var r=String(value).match(/^(-)?([0-9]{1,})(\.([0-9]{1,}))?$/);if(r!=null&&r.length==5){var v0="";if(r[1]!=null){v0+=r[1]}v0+=fmt.s_bef;if(fmt.i_len!==false){var i=0;var v1="";for(var q=r[2].length-1;q>=0;q--){v1=""+r[2].charAt(q)+v1;if(++i==fmt.i_len&&q>0){v1=fmt.i_sep+v1;i=0}}v0+=v1}else{v0+=r[2]}if(fmt.d_len!==false){if(r[4]==null){r[4]=""}while(r[4].length<fmt.d_len){r[4]+="0"}eval("dhx4.temp = new RegExp(/\\d{"+fmt.d_len+"}/);");var t1=(r[4]).match(dhx4.temp);if(t1!=null){v0+=fmt.d_sep+t1}dhx4.temp=t1=null}v0+=fmt.s_aft;return v0}return value}}if(typeof(window.dhx4.dateLang)=="undefined"){window.dhx4.dateLang="en";window.dhx4.dateStrings={en:{monthFullName:["January","February","March","April","May","June","July","August","September","October","November","December"],monthShortName:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayFullName:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayShortName:["Su","Mo","Tu","We","Th","Fr","Sa"]}};window.dhx4.dateFormat={en:"%Y-%m-%d"};window.dhx4.date2str=function(f,d,a){if(d==null||typeof(d)=="undefined"){d=window.dhx4.dateFormat[window.dhx4.dateLang]}if(a==null||typeof(a)=="undefined"){a=window.dhx4.dateStrings[window.dhx4.dateLang]}if(f instanceof Date){var e=function(g){return(String(g).length==1?"0"+String(g):g)};var b=function(i){switch(i){case"%d":return e(f.getDate());case"%j":return f.getDate();case"%D":return a.dayShortName[f.getDay()];case"%l":return a.dayFullName[f.getDay()];case"%m":return e(f.getMonth()+1);case"%n":return f.getMonth()+1;case"%M":return a.monthShortName[f.getMonth()];case"%F":return a.monthFullName[f.getMonth()];case"%y":return e(f.getYear()%100);case"%Y":return f.getFullYear();case"%g":return(f.getHours()+11)%12+1;case"%h":return e((f.getHours()+11)%12+1);case"%G":return f.getHours();case"%H":return e(f.getHours());case"%i":return e(f.getMinutes());case"%s":return e(f.getSeconds());case"%a":return(f.getHours()>11?"pm":"am");case"%A":return(f.getHours()>11?"PM":"AM");case"%%":return"%";case"%u":return f.getMilliseconds();case"%P":if(window.dhx4.temp_calendar!=null&&window.dhx4.temp_calendar.tz!=null){return window.dhx4.temp_calendar.tz}var k=f.getTimezoneOffset();var j=Math.abs(Math.floor(k/60));var g=Math.abs(k)-j*60;return(k>0?"-":"+")+e(j)+":"+e(g);default:return i}};var c=String(d||window.dhx4.dateFormat).replace(/%[a-zA-Z]/g,b)}return(c||String(f))};window.dhx4.str2date=function(g,s,x){if(s==null||typeof(s)=="undefined"){s=window.dhx4.dateFormat[window.dhx4.dateLang]}if(x==null||typeof(x)=="undefined"){x=window.dhx4.dateStrings[window.dhx4.dateLang]}s=s.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\\:|]/g,"\\$&");var u=[];var j=[];s=s.replace(/%[a-z]/gi,function(e){switch(e){case"%d":case"%m":case"%y":case"%h":case"%H":case"%i":case"%s":j.push(e);return"(\\d{2})";case"%D":case"%l":case"%M":case"%F":j.push(e);return"([a-zéûä\u0430-\u044F\u0451]{1,})";case"%j":case"%n":case"%g":case"%G":j.push(e);return"(\\d{1,2})";case"%Y":j.push(e);return"(\\d{4})";case"%a":j.push(e);return"([a|p]m)";case"%A":j.push(e);return"([A|P]M)";case"%u":j.push(e);return"(\\d{1,6})";case"%P":j.push(e);return"([+-]\\d{1,2}:\\d{1,2})"}return e});var y=new RegExp(s,"i");var l=g.match(y);if(l==null||l.length-1!=j.length){return"Invalid Date"}for(var b=1;b<l.length;b++){u.push(l[b])}var c={"%y":1,"%Y":1,"%n":2,"%m":2,"%M":2,"%F":2,"%d":3,"%j":3,"%a":4,"%A":4,"%H":5,"%G":5,"%h":5,"%g":5,"%i":6,"%s":7,"%u":7,"%P":7};var m={};var i={};for(var b=0;b<j.length;b++){if(typeof(c[j[b]])!="undefined"){var d=c[j[b]];if(!m[d]){m[d]=[];i[d]=[]}m[d].push(u[b]);i[d].push(j[b])}}u=[];j=[];for(var b=1;b<=7;b++){if(m[b]!=null){for(var o=0;o<m[b].length;o++){u.push(m[b][o]);j.push(i[b][o])}}}var a=new Date();a.setDate(1);a.setHours(0);a.setMinutes(0);a.setSeconds(0);a.setMilliseconds(0);var n=function(k,e){for(var f=0;f<e.length;f++){if(e[f].toLowerCase()==k){return f}}return -1};for(var b=0;b<u.length;b++){switch(j[b]){case"%d":case"%j":case"%n":case"%m":case"%Y":case"%H":case"%G":case"%i":case"%s":case"%u":if(!isNaN(u[b])){a[{"%d":"setDate","%j":"setDate","%n":"setMonth","%m":"setMonth","%Y":"setFullYear","%H":"setHours","%G":"setHours","%i":"setMinutes","%s":"setSeconds","%u":"setMilliseconds"}[j[b]]](Number(u[b])+(j[b]=="%m"||j[b]=="%n"?-1:0))}break;case"%M":case"%F":var h=n(u[b].toLowerCase(),x[{"%M":"monthShortName","%F":"monthFullName"}[j[b]]]);if(h>=0){a.setMonth(h)}break;case"%y":if(!isNaN(u[b])){var t=Number(u[b]);a.setFullYear(t+(t>50?1900:2000))}break;case"%g":case"%h":if(!isNaN(u[b])){var t=Number(u[b]);if(t<=12&&t>=0){a.setHours(t+(n("pm",u)>=0?(t==12?0:12):(t==12?-12:0)))}}break;case"%P":if(window.dhx4.temp_calendar!=null){window.dhx4.temp_calendar.tz=u[b]}break}}return a}}if(typeof(window.dhx4.ajax)=="undefined"){window.dhx4.ajax={cache:false,method:"get",parse:function(a){if(typeof a!=="string"){return a}a=a.replace(/^[\s]+/,"");if(window.DOMParser&&!dhx4.isIE){var b=(new window.DOMParser()).parseFromString(a,"text/xml")}else{if(window.ActiveXObject!==window.undefined){var b=new window.ActiveXObject("Microsoft.XMLDOM");b.async="false";b.loadXML(a)}}return b},xmltop:function(a,d,c){if(typeof d.status=="undefined"||d.status<400){xml=(!d.responseXML)?dhx4.ajax.parse(d.responseText||d):(d.responseXML||d);if(xml&&xml.documentElement!==null){try{if(!xml.getElementsByTagName("parsererror").length){return xml.getElementsByTagName(a)[0]}}catch(b){}}}if(c!==-1){dhx4.callEvent("onLoadXMLError",["Incorrect XML",arguments[1],c])}return document.createElement("DIV")},xpath:function(c,a){if(!a.nodeName){a=a.responseXML||a}if(dhx4.isIE){try{return a.selectNodes(c)||[]}catch(f){return[]}}else{var d=[];var g;var b=(a.ownerDocument||a).evaluate(c,a,null,XPathResult.ANY_TYPE,null);while(g=b.iterateNext()){d.push(g)}return d}},query:function(a){dhx4.ajax._call((a.method||"GET"),a.url,a.data||"",(a.async||true),a.callback,null,a.headers)},get:function(a,b){return this._call("GET",a,null,true,b)},getSync:function(a){return this._call("GET",a,null,false)},put:function(b,a,c){return this._call("PUT",b,a,true,c)},del:function(b,a,c){return this._call("DELETE",b,a,true,c)},post:function(b,a,c){if(arguments.length==1){a=""}else{if(arguments.length==2&&(typeof(a)=="function"||typeof(window[a])=="function")){c=a;a=""}else{a=String(a)}}return this._call("POST",b,a,true,c)},postSync:function(b,a){a=(a==null?"":String(a));return this._call("POST",b,a,false)},getLong:function(a,b){this._call("GET",a,null,true,b,{url:a})},postLong:function(b,a,c){if(arguments.length==2&&(typeof(a)=="function"||typeof(window[a]))){c=a;a=""}this._call("POST",b,a,true,c,{url:b,postData:a})},_call:function(a,b,c,e,g,j,d){var i=(window.XMLHttpRequest&&!dhx4.isIE?new XMLHttpRequest():new ActiveXObject("Microsoft.XMLHTTP"));var f=(navigator.userAgent.match(/AppleWebKit/)!=null&&navigator.userAgent.match(/Qt/)!=null&&navigator.userAgent.match(/Safari/)!=null);if(e==true){i.onreadystatechange=function(){if((i.readyState==4)||(f==true&&i.readyState==3)){if(i.status!=200||i.responseText==""){if(!dhx4.callEvent("onAjaxError",[{xmlDoc:i,filePath:b,async:e}])){return}}window.setTimeout(function(){if(typeof(g)=="function"){g.apply(window,[{xmlDoc:i,filePath:b,async:e}])}if(j!=null){if(typeof(j.postData)!="undefined"){dhx4.ajax.postLong(j.url,j.postData,g)}else{dhx4.ajax.getLong(j.url,g)}}g=null;i=null},1)}}}if(a=="GET"){b+=this._dhxr(b)}i.open(a,b,e);if(d!=null){for(var h in d){i.setRequestHeader(h,d[h])}}else{if(a=="POST"||a=="PUT"||a=="DELETE"){i.setRequestHeader("Content-Type","application/x-www-form-urlencoded")}else{if(a=="GET"){c=null}}}i.setRequestHeader("X-Requested-With","XMLHttpRequest");i.send(c);if(e!=true){if((i.readyState==4)||(f==true&&i.readyState==3)){if(i.status!=200||i.responseText==""){dhx4.callEvent("onAjaxError",[{xmlDoc:i,filePath:b,async:e}])}}}return{xmlDoc:i,filePath:b,async:e}},_dhxr:function(a,b){if(this.cache!=true){if(a.match(/^[\?\&]$/)==null){a=(a.indexOf("?")>=0?"&":"?")}if(typeof(b)=="undefined"){b=true}return a+"dhxr"+new Date().getTime()+(b==true?"=1":"")}return""}}}if(typeof(window.dhx4._enableDataLoading)=="undefined"){window.dhx4._enableDataLoading=function(g,c,f,e,h){if(h=="clear"){for(var b in g._dhxdataload){g._dhxdataload[b]=null;delete g._dhxdataload[b]}g._loadData=null;g._dhxdataload=null;g.load=null;g.loadStruct=null;g=null;return}g._dhxdataload={initObj:c,xmlToJson:f,xmlRootTag:e,onBeforeXLS:null};g._loadData=function(n,o,p){if(arguments.length==2){p=o;o=null}var m=null;if(arguments.length==3){p=arguments[2]}if(typeof(n)=="string"){var l=n.replace(/^\s{1,}/,"").replace(/\s{1,}$/,"");var s=new RegExp("^<"+this._dhxdataload.xmlRootTag);if(s.test(l.replace(/^<\?xml[^\?]*\?>\s*/,""))){m=dhx4.ajax.parse(n);if(m!=null){m=this[this._dhxdataload.xmlToJson].apply(this,[m])}}if(m==null&&(l.match(/^[\s\S]*{[.\s\S]*}[\s\S]*$/)!=null||l.match(/^[\s\S]*\[[.\s\S]*\][\s\S]*$/)!=null)){m=dhx4.s2j(l)}if(m==null){this.callEvent("onXLS",[]);var j=[];if(typeof(this._dhxdataload.onBeforeXLS)=="function"){var l=this._dhxdataload.onBeforeXLS.apply(this,[n]);if(l!=null&&typeof(l)=="object"){if(l.url!=null){n=l.url}if(l.params!=null){for(var q in l.params){j.push(q+"="+encodeURIComponent(l.params[q]))}}}}var r=this;var i=function(a){var k=null;if((a.xmlDoc.getResponseHeader("Content-Type")||"").search(/xml/gi)>=0||(a.xmlDoc.responseText.replace(/^\s{1,}/,"")).match(/^</)!=null){k=r[r._dhxdataload.xmlToJson].apply(r,[a.xmlDoc.responseXML])}else{k=dhx4.s2j(a.xmlDoc.responseText)}if(k!=null){r[r._dhxdataload.initObj].apply(r,[k,n])}r.callEvent("onXLE",[]);if(p!=null){if(typeof(p)=="function"){p.apply(r,[])}else{if(typeof(window[p])=="function"){window[p].apply(r,[])}}}i=p=null;k=a=r=null};j=j.join("&")+(typeof(o)=="string"?"&"+o:"");if(dhx4.ajax.method=="post"){dhx4.ajax.post(n,j,i)}else{if(dhx4.ajax.method=="get"){dhx4.ajax.get(n+(j.length>0?(n.indexOf("?")>0?"&":"?")+j:""),i)}}return}}else{if(typeof(n.documentElement)=="object"||(typeof(n.tagName)!="undefined"&&typeof(n.getElementsByTagName)!="undefined"&&n.getElementsByTagName(this._dhxdataload.xmlRootTag).length>0)){m=this[this._dhxdataload.xmlToJson].apply(this,[n])}else{m=window.dhx4._copyObj(n)}}if(m!=null){this[this._dhxdataload.initObj].apply(this,[m])}if(p!=null){if(typeof(p)=="function"){p.apply(this,[])}else{if(typeof(window[p])=="function"){window[p].apply(this,[])}}p=null}};if(h!=null){var d={struct:"loadStruct",data:"load"};for(var b in h){if(h[b]==true){g[d[b]]=function(){return this._loadData.apply(this,arguments)}}}}g=null}}if(typeof(window.dhx4._eventable)=="undefined"){window.dhx4._eventable=function(a,b){if(b=="clear"){a.detachAllEvents();a.dhxevs=null;a.attachEvent=null;a.detachEvent=null;a.checkEvent=null;a.callEvent=null;a.detachAllEvents=null;a=null;return}a.dhxevs={data:{}};a.attachEvent=function(c,e){c=String(c).toLowerCase();if(!this.dhxevs.data[c]){this.dhxevs.data[c]={}}var d=window.dhx4.newId();this.dhxevs.data[c][d]=e;return d};a.detachEvent=function(f){for(var d in this.dhxevs.data){var e=0;for(var c in this.dhxevs.data[d]){if(c==f){this.dhxevs.data[d][c]=null;delete this.dhxevs.data[d][c]}else{e++}}if(e==0){this.dhxevs.data[d]=null;delete this.dhxevs.data[d]}}};a.checkEvent=function(c){c=String(c).toLowerCase();return(this.dhxevs.data[c]!=null)};a.callEvent=function(d,f){d=String(d).toLowerCase();if(this.dhxevs.data[d]==null){return true}var e=true;for(var c in this.dhxevs.data[d]){e=this.dhxevs.data[d][c].apply(this,f)&&e}return e};a.detachAllEvents=function(){for(var d in this.dhxevs.data){for(var c in this.dhxevs.data[d]){this.dhxevs.data[d][c]=null;delete this.dhxevs.data[d][c]}this.dhxevs.data[d]=null;delete this.dhxevs.data[d]}};a=null};dhx4._eventable(dhx4)}if(!window.dhtmlxValidation){dhtmlxValidation=function(){};dhtmlxValidation.prototype={isEmpty:function(a){return a==""},isNotEmpty:function(a){return(a instanceof Array?a.length>0:!a=="")},isValidBoolean:function(a){return !!a.toString().match(/^(0|1|true|false)$/)},isValidEmail:function(a){return !!a.toString().match(/(^[a-z0-9]([0-9a-z\-_\.]*)@([0-9a-z_\-\.]*)([.][a-z]{3})$)|(^[a-z]([0-9a-z_\.\-]*)@([0-9a-z_\-\.]*)(\.[a-z]{2,5})$)/i)},isValidInteger:function(a){return !!a.toString().match(/(^-?\d+$)/)},isValidNumeric:function(a){return !!a.toString().match(/(^-?\d\d*[\.|,]\d*$)|(^-?\d\d*$)|(^-?[\.|,]\d\d*$)/)},isValidAplhaNumeric:function(a){return !!a.toString().match(/^[_\-a-z0-9]+$/gi)},isValidDatetime:function(b){var a=b.toString().match(/^(\d{4})-(\d{2})-(\d{2})\s(\d{2}):(\d{2}):(\d{2})$/);return a&&!!(a[1]<=9999&&a[2]<=12&&a[3]<=31&&a[4]<=59&&a[5]<=59&&a[6]<=59)||false},isValidDate:function(a){var b=a.toString().match(/^(\d{4})-(\d{2})-(\d{2})$/);return b&&!!(b[1]<=9999&&b[2]<=12&&b[3]<=31)||false},isValidTime:function(b){var a=b.toString().match(/^(\d{1,2}):(\d{1,2}):(\d{1,2})$/);return a&&!!(a[1]<=24&&a[2]<=59&&a[3]<=59)||false},isValidIPv4:function(a){var b=a.toString().match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/);return b&&!!(b[1]<=255&&b[2]<=255&&b[3]<=255&&b[4]<=255)||false},isValidCurrency:function(a){return a.toString().match(/^\$?\s?\d+?([\.,\,]?\d+)?\s?\$?$/)&&true||false},isValidSSN:function(a){return a.toString().match(/^\d{3}\-?\d{2}\-?\d{4}$/)&&true||false},isValidSIN:function(a){return a.toString().match(/^\d{9}$/)&&true||false}};dhtmlxValidation=new dhtmlxValidation()}if(typeof(window.dhtmlx)=="undefined"){window.dhtmlx={extend:function(d,c){for(var e in c){if(!d[e]){d[e]=c[e]}}return d},extend_api:function(a,d,c){var b=window[a];if(!b){return}window[a]=function(g){if(g&&typeof g=="object"&&!g.tagName){var f=b.apply(this,(d._init?d._init(g):arguments));for(var e in dhtmlx){if(d[e]){this[d[e]](dhtmlx[e])}}for(var e in g){if(d[e]){this[d[e]](g[e])}else{if(e.indexOf("on")===0){this.attachEvent(e,g[e])}}}}else{var f=b.apply(this,arguments)}if(d._patch){d._patch(this)}return f||this};window[a].prototype=b.prototype;if(c){dhtmlx.extend(window[a].prototype,c)}},url:function(a){if(a.indexOf("?")!=-1){return"&"}else{return"?"}}}}function dhtmlDragAndDropObject(){if(window.dhtmlDragAndDrop){return window.dhtmlDragAndDrop}this.lastLanding=0;this.dragNode=0;this.dragStartNode=0;this.dragStartObject=0;this.tempDOMU=null;this.tempDOMM=null;this.waitDrag=0;window.dhtmlDragAndDrop=this;return this}dhtmlDragAndDropObject.prototype.removeDraggableItem=function(a){a.onmousedown=null;a.dragStarter=null;a.dragLanding=null};dhtmlDragAndDropObject.prototype.addDraggableItem=function(a,b){a.onmousedown=this.preCreateDragCopy;a.dragStarter=b;this.addDragLanding(a,b)};dhtmlDragAndDropObject.prototype.addDragLanding=function(a,b){a.dragLanding=b};dhtmlDragAndDropObject.prototype.preCreateDragCopy=function(a){if((a||window.event)&&(a||event).button==2){return}if(window.dhtmlDragAndDrop.waitDrag){window.dhtmlDragAndDrop.waitDrag=0;document.body.onmouseup=window.dhtmlDragAndDrop.tempDOMU;document.body.onmousemove=window.dhtmlDragAndDrop.tempDOMM;return false}if(window.dhtmlDragAndDrop.dragNode){window.dhtmlDragAndDrop.stopDrag(a)}window.dhtmlDragAndDrop.waitDrag=1;window.dhtmlDragAndDrop.tempDOMU=document.body.onmouseup;window.dhtmlDragAndDrop.tempDOMM=document.body.onmousemove;window.dhtmlDragAndDrop.dragStartNode=this;window.dhtmlDragAndDrop.dragStartObject=this.dragStarter;document.body.onmouseup=window.dhtmlDragAndDrop.preCreateDragCopy;document.body.onmousemove=window.dhtmlDragAndDrop.callDrag;window.dhtmlDragAndDrop.downtime=new Date().valueOf();if((a)&&(a.preventDefault)){a.preventDefault();return false}return false};dhtmlDragAndDropObject.prototype.callDrag=function(c){if(!c){c=window.event}dragger=window.dhtmlDragAndDrop;if((new Date()).valueOf()-dragger.downtime<100){return}if(!dragger.dragNode){if(dragger.waitDrag){dragger.dragNode=dragger.dragStartObject._createDragNode(dragger.dragStartNode,c);if(!dragger.dragNode){return dragger.stopDrag()}dragger.dragNode.onselectstart=function(){return false};dragger.gldragNode=dragger.dragNode;document.body.appendChild(dragger.dragNode);document.body.onmouseup=dragger.stopDrag;dragger.waitDrag=0;dragger.dragNode.pWindow=window;dragger.initFrameRoute()}else{return dragger.stopDrag(c,true)}}if(dragger.dragNode.parentNode!=window.document.body&&dragger.gldragNode){var a=dragger.gldragNode;if(dragger.gldragNode.old){a=dragger.gldragNode.old}a.parentNode.removeChild(a);var b=dragger.dragNode.pWindow;if(a.pWindow&&a.pWindow.dhtmlDragAndDrop.lastLanding){a.pWindow.dhtmlDragAndDrop.lastLanding.dragLanding._dragOut(a.pWindow.dhtmlDragAndDrop.lastLanding)}if(_isIE){var f=document.createElement("Div");f.innerHTML=dragger.dragNode.outerHTML;dragger.dragNode=f.childNodes[0]}else{dragger.dragNode=dragger.dragNode.cloneNode(true)}dragger.dragNode.pWindow=window;dragger.gldragNode.old=dragger.dragNode;document.body.appendChild(dragger.dragNode);b.dhtmlDragAndDrop.dragNode=dragger.dragNode}dragger.dragNode.style.left=c.clientX+15+(dragger.fx?dragger.fx*(-1):0)+(document.body.scrollLeft||document.documentElement.scrollLeft)+"px";dragger.dragNode.style.top=c.clientY+3+(dragger.fy?dragger.fy*(-1):0)+(document.body.scrollTop||document.documentElement.scrollTop)+"px";if(!c.srcElement){var d=c.target}else{d=c.srcElement}dragger.checkLanding(d,c)};dhtmlDragAndDropObject.prototype.calculateFramePosition=function(e){if(window.name){var c=parent.frames[window.name].frameElement.offsetParent;var d=0;var b=0;while(c){d+=c.offsetLeft;b+=c.offsetTop;c=c.offsetParent}if((parent.dhtmlDragAndDrop)){var a=parent.dhtmlDragAndDrop.calculateFramePosition(1);d+=a.split("_")[0]*1;b+=a.split("_")[1]*1}if(e){return d+"_"+b}else{this.fx=d}this.fy=b}return"0_0"};dhtmlDragAndDropObject.prototype.checkLanding=function(b,a){if((b)&&(b.dragLanding)){if(this.lastLanding){this.lastLanding.dragLanding._dragOut(this.lastLanding)}this.lastLanding=b;this.lastLanding=this.lastLanding.dragLanding._dragIn(this.lastLanding,this.dragStartNode,a.clientX,a.clientY,a);this.lastLanding_scr=(_isIE?a.srcElement:a.target)}else{if((b)&&(b.tagName!="BODY")){this.checkLanding(b.parentNode,a)}else{if(this.lastLanding){this.lastLanding.dragLanding._dragOut(this.lastLanding,a.clientX,a.clientY,a)}this.lastLanding=0;if(this._onNotFound){this._onNotFound()}}}};dhtmlDragAndDropObject.prototype.stopDrag=function(b,c){dragger=window.dhtmlDragAndDrop;if(!c){dragger.stopFrameRoute();var a=dragger.lastLanding;dragger.lastLanding=null;if(a){a.dragLanding._drag(dragger.dragStartNode,dragger.dragStartObject,a,(_isIE?event.srcElement:b.target))}}dragger.lastLanding=null;if((dragger.dragNode)&&(dragger.dragNode.parentNode==document.body)){dragger.dragNode.parentNode.removeChild(dragger.dragNode)}dragger.dragNode=0;dragger.gldragNode=0;dragger.fx=0;dragger.fy=0;dragger.dragStartNode=0;dragger.dragStartObject=0;document.body.onmouseup=dragger.tempDOMU;document.body.onmousemove=dragger.tempDOMM;dragger.tempDOMU=null;dragger.tempDOMM=null;dragger.waitDrag=0};dhtmlDragAndDropObject.prototype.stopFrameRoute=function(c){if(c){window.dhtmlDragAndDrop.stopDrag(1,1)}for(var a=0;a<window.frames.length;a++){try{if((window.frames[a]!=c)&&(window.frames[a].dhtmlDragAndDrop)){window.frames[a].dhtmlDragAndDrop.stopFrameRoute(window)}}catch(b){}}try{if((parent.dhtmlDragAndDrop)&&(parent!=window)&&(parent!=c)){parent.dhtmlDragAndDrop.stopFrameRoute(window)}}catch(b){}};dhtmlDragAndDropObject.prototype.initFrameRoute=function(c,d){if(c){window.dhtmlDragAndDrop.preCreateDragCopy();window.dhtmlDragAndDrop.dragStartNode=c.dhtmlDragAndDrop.dragStartNode;window.dhtmlDragAndDrop.dragStartObject=c.dhtmlDragAndDrop.dragStartObject;window.dhtmlDragAndDrop.dragNode=c.dhtmlDragAndDrop.dragNode;window.dhtmlDragAndDrop.gldragNode=c.dhtmlDragAndDrop.dragNode;window.document.body.onmouseup=window.dhtmlDragAndDrop.stopDrag;window.waitDrag=0;if(((!_isIE)&&(d))&&((!_isFF)||(_FFrv<1.8))){window.dhtmlDragAndDrop.calculateFramePosition()}}try{if((parent.dhtmlDragAndDrop)&&(parent!=window)&&(parent!=c)){parent.dhtmlDragAndDrop.initFrameRoute(window)}}catch(b){}for(var a=0;a<window.frames.length;a++){try{if((window.frames[a]!=c)&&(window.frames[a].dhtmlDragAndDrop)){window.frames[a].dhtmlDragAndDrop.initFrameRoute(window,((!c||d)?1:0))}}catch(b){}}};_isFF=false;_isIE=false;_isOpera=false;_isKHTML=false;_isMacOS=false;_isChrome=false;_FFrv=false;_KHTMLrv=false;_OperaRv=false;if(navigator.userAgent.indexOf("Macintosh")!=-1){_isMacOS=true}if(navigator.userAgent.toLowerCase().indexOf("chrome")>-1){_isChrome=true}if((navigator.userAgent.indexOf("Safari")!=-1)||(navigator.userAgent.indexOf("Konqueror")!=-1)){_KHTMLrv=parseFloat(navigator.userAgent.substr(navigator.userAgent.indexOf("Safari")+7,5));if(_KHTMLrv>525){_isFF=true;_FFrv=1.9}else{_isKHTML=true}}else{if(navigator.userAgent.indexOf("Opera")!=-1){_isOpera=true;_OperaRv=parseFloat(navigator.userAgent.substr(navigator.userAgent.indexOf("Opera")+6,3))}else{if(navigator.appName.indexOf("Microsoft")!=-1){_isIE=true;if((navigator.appVersion.indexOf("MSIE 8.0")!=-1||navigator.appVersion.indexOf("MSIE 9.0")!=-1||navigator.appVersion.indexOf("MSIE 10.0")!=-1||document.documentMode>7)&&document.compatMode!="BackCompat"){_isIE=8}}else{if(navigator.appName=="Netscape"&&navigator.userAgent.indexOf("Trident")!=-1){_isIE=8}else{_isFF=true;_FFrv=parseFloat(navigator.userAgent.split("rv:")[1])}}}}if(typeof(window.dhtmlxEvent)=="undefined"){function dhtmlxEvent(b,c,a){if(b.addEventListener){b.addEventListener(c,a,false)}else{if(b.attachEvent){b.attachEvent("on"+c,a)}}}}if(dhtmlxEvent.touchDelay==null){dhtmlxEvent.touchDelay=2000}if(typeof(dhtmlxEvent.initTouch)=="undefined"){dhtmlxEvent.initTouch=function(){var d;var e;var b,a;dhtmlxEvent(document.body,"touchstart",function(f){e=f.touches[0].target;b=f.touches[0].clientX;a=f.touches[0].clientY;d=window.setTimeout(c,dhtmlxEvent.touchDelay)});function c(){if(e){var f=document.createEvent("HTMLEvents");f.initEvent("dblclick",true,true);e.dispatchEvent(f);d=e=null}}dhtmlxEvent(document.body,"touchmove",function(f){if(d){if(Math.abs(f.touches[0].clientX-b)>50||Math.abs(f.touches[0].clientY-a)>50){window.clearTimeout(d);d=e=false}}});dhtmlxEvent(document.body,"touchend",function(f){if(d){window.clearTimeout(d);d=e=false}});dhtmlxEvent.initTouch=function(){}}}function dhtmlXTreeView(d){var e=this;if(typeof(d)=="object"&&d.tagName==null){}else{d={parent:d,clear:true}}this.base=(typeof(d.parent)=="string"?document.getElementById(d.parent):d.parent);if(this.base!=document.body){while(this.base.childNodes.length>0){this.base.removeChild(this.base.lastChild)}}this.conf={skin:(d.skin||window.dhx4.skin||(typeof(dhtmlx)!="undefined"?dhtmlx.skin:null)||window.dhx4.skinDetect("dhxtreeview")||"material"),tree_id:window.dhx4.newId(),ofs:{w:1,h:0},adjust_base:false,icons:this.icons[(typeof(d.iconset)=="string"&&this.icons[d.iconset]!=null&&this.icons[d.iconset].r==true?d.iconset:"tree_native")],autoload:{url:null,mode:"id"},selected:{},ud:{},idx:{sign:0,icon:1,text:2},silent:false,is_mac:(navigator.platform.match(/^mac/i)!=null&&typeof(window.addEventListener)=="function"),mac_cmd_key:false};this.setSkin(this.conf.skin);this.cont=document.createElement("DIV");this.cont.className="dhxtreeview_cont";this.base.appendChild(this.cont);this.area=document.createElement("DIV");this.area.className="dhxtreeview_area";this.cont.appendChild(this.area);this.cont.onclick=function(a){a=a||event;e.callEvent("_onTreeClick",[a,{stop:false}])};this.cont.ondblclick=function(f){f=f||event;var a=(f.target||f.srcElement);if(a.className.match(/dhxtreeview_item_label/)!=null){e._openCloseItem(a.parentNode.parentNode._itemId,true)}};this.items={};this._addItem=function(m,h,j,f){var l=(h!=null?this.items[h].level+1:1);var g=document.createElement("DIV");g.className="dhxtreeview_item";g.innerHTML="<div class='dhxtreeview_item_text'></div>";if(f!=null&&f<0){j.index=0}if(h==null){var i=this.area}else{var a=this.items[h].kids;if(a==false){this._initKidsNode(h)}this.items[h].kids_request=false;var i=this.items[h].item.lastChild.firstChild}if(f!=null&&i.childNodes[f]!=null){i.insertBefore(g,i.childNodes[f])}else{i.appendChild(g)}i=null;g._itemId=m;g._treeId=this.conf.tree_id;if(window.dhx4.isIE==true){g.onselectstart=function(k){k=k||event;if(k.preventDefault){k.preventDefault()}else{k.returnValue=false}}}this.items[m]={id:m,pId:h,treeId:this.conf.tree_id,text:j.text,item:g,level:l,kids:false,opened:window.dhx4.s2b(j.open),userdata:window.dhx4._copyObj(j.userdata||{}),half_opened:false};this.callEvent("_onItemRendered",[m,j]);g.firstChild.innerHTML=this._getItemHtml(m);g=null;if(window.dhx4.s2b(j.select)==true){this._setSelected(m,true)}this.callEvent("_onItemInited",[m,j])};this.addItem=function(h,f,g,a){if(this.items[h]!=null){return}if(g!=null&&this.items[g]==null){g=null}this._addItem(h,g,{text:f},a);this._callPublicEvent("onAddItem",[h,f,g,a])};this._removeSingleItem=function(g){if(window.dhx4.isIE==true){this.items[g].item.onselectstart=null}this.items[g].item.parentNode.removeChild(this.items[g].item);for(var f in this.items[g]){this.items[g][f]=null;delete this.items[g][f]}delete this.items[g];if(this.conf.selected[g]==true){delete this.conf.selected[g]}};this._removeItem=function(g){for(var f in this.items){if(this.items[f].pId==g){this._removeItem(f)}}if(g!=null){this._removeSingleItem(g)}};this.deleteItem=function(a){if(this.items[a]==null){return}if(!this._callPublicEvent("onBeforeDeleteItem",[a])){return}this._removeItem(a);this._callPublicEvent("onDeleteItem",[a])};this.clearAll=function(){this._removeItem(null);if(this.conf.unloading!=true){this._fixAreaWidth()}};this._initKidsNode=function(f){var a;if(this.items[f].item.lastChild.className.match(/dhxtreeview_kids_cont/)==null){a=document.createElement("DIV");a.className="dhxtreeview_kids_cont";a.innerHTML="<div style='position:relative;'></div>";a.style.opacity="1";if(this.items[f].opened!=true){if(this.conf.transProp!=false){a.style.height="0px";a.style.opacity="0";a.firstChild.style.display="none"}else{a.style.display="none"}}this.items[f].item.appendChild(a)}this.items[f].kids=true;this._iconUpdate(f);this._signUpdate(f);a=null};this._clearKidsNode=function(a){if(this.items[a].item.lastChild.className.match(/dhxtreeview_kids_cont/)!=null){this.items[a].item.removeChild(this.items[a].item.lastChild)}this.items[a].kids=false;this._iconUpdate(a);this._signUpdate(a)};this.openItem=function(f,a){if(this.items[f].opened!=true){if(typeof(a)=="undefined"){a=true}this._openCloseItem(f,a)}};this.closeItem=function(f,a){if(this.items[f].opened==true){if(typeof(a)=="undefined"){a=true}this._openCloseItem(f,a)}};this._openCloseItem=function(f,a){if(this.callEvent("_onBeforeOpen",[f])!==true){return}if(!(this.items[f].kids==true||this.items[f].kids_request==true)){return false}if(this.items[f].half_opened==true){this.items[f].half_opened=false;this._signUpdate(f);return}if(a&&this.conf.transProp!=false){if(!this.items[f].transEv){this.items[f].item.lastChild.addEventListener(this.conf.transEv,this._doOnTrEnd);this.items[f].transEv=true}if(this.items[f].opened==true){this.items[f].transMode="close";this.items[f].item.lastChild.style.overflow="hidden";this.items[f].item.lastChild.style.height=this.items[f].item.lastChild.childNodes[0].offsetHeight+"px";window.setTimeout(function(){e.items[f].item.lastChild.style[e.conf.transProp]=e.conf.transValueHeight;e.items[f].item.lastChild.style.height="0px";e.items[f].item.lastChild.style.opacity="0";e.items[f].opened=false;e._iconUpdate(f);e._signUpdate(f)},50)}else{this.items[f].transMode="open";this.items[f].item.lastChild.style[this.conf.transProp]=this.conf.transValueHeight;this.items[f].item.lastChild.childNodes[0].style.display="";this.items[f].item.lastChild.style.overflow="hidden";this.items[f].item.lastChild.style.height=this.items[f].item.lastChild.childNodes[0].offsetHeight+"px";this.items[f].item.lastChild.style.opacity="1";this.items[f].opened=true;this._iconUpdate(f);this._signUpdate(f)}}else{this.items[f].opened=!this.items[f].opened;this.items[f].item.lastChild.style.display=(this.items[f].opened==true?"":"none");this.items[f].item.lastChild.childNodes[0].style.display=this.items[f].item.lastChild.style.display;this.items[f].item.lastChild.style.height=(this.items[f].opened==true?"":"0px");this.items[f].item.lastChild.style.opacity=(this.items[f].opened==true?1:0);this._iconUpdate(f);this._signUpdate(f);this._fixAreaWidth()}};this._doOnTrEnd=function(){var a=this.parentNode._itemId;e.items[a].item.lastChild.style[e.conf.transProp]="";if(e.items[a].transMode=="close"){e.items[a].item.lastChild.childNodes[0].style.display="none"}else{e.items[a].item.lastChild.style.height="";e.items[a].item.lastChild.style.overflow=""}e._fixAreaWidth()};this.setSizes=function(){if(this.conf.adjust_base==true){this.base.style.width=this.base.parentNode.clientWidth-2+"px";this.base.style.height=this.base.parentNode.clientHeight-2+"px"}this.cont.style.left=this.conf.ofs.w+"px";this.cont.style.top=this.conf.ofs.h+"px";this.cont.style.width=this.base.clientWidth-this.conf.ofs.w*2+"px";this.cont.style.height=this.base.clientHeight-this.conf.ofs.h*2+"px";this._fixAreaWidth()};this._fixAreaWidth=function(a){this.area.style.width="100%";if(this.cont.scrollWidth!=this.cont.clientWidth){this.area.style.width=this.cont.scrollWidth+1+"px"}if(window.dhx4.isIE7==true&&a!==false){window.setTimeout(function(){e._fixAreaWidth(false)},1)}};this.setSizes();dhx4._eventable(this);var c=window.dhx4.transDetect();this.conf.transProp=c.transProp;this.conf.transEv=c.transEv;this.conf.transValueHeight="height 0.15s";c=null;if(this.conf.is_mac==true){this._macOnKey=function(a){if(((window.dhx4.isKHTML||window.dhx4.isChrome||window.dhx4.isOpera)&&(a.keyCode==91||a.keyCode==93))||(window.dhx4.isFF&&a.keyCode==224)){e.conf.mac_cmd_key=(a.type=="keydown")}};window.addEventListener("keydown",this._macOnKey,false);window.addEventListener("keyup",this._macOnKey,false)}for(var b in this.modules){if(this.modules[b].init!=null){this[this.modules[b].init](d)}}this.unload=function(){this.conf.unloading=true;this.cont.onclick=null;this.cont.ondblclick=null;this.clearAll();if(this.conf.is_mac==true){window.removeEventListener("keydown",this._macOnKey,false);window.removeEventListener("keyup",this._macOnKey,false)}for(var f in this.modules){if(this.modules[f].unload!=null){this[this.modules[f].unload]()}}this.area.parentNode.removeChild(this.area);this.area=null;this.cont.parentNode.removeChild(this.cont);this.cont=null;this.base.className=String(this.base.className).replace(new RegExp("s{0,}dhxtreeview_"+(this.conf.skin||"")),"");window.dhx4._eventable(this,"clear");for(var f in this){this[f]=null}e=null};if(d.items!=null||d.json!=null||d.xml!=null){this.loadStruct(d.items||d.json||d.xml,d.onload)}return this}dhtmlXTreeView.prototype.modules={};dhtmlXTreeView.prototype.setSkin=function(a){this.base.className=String(this.base.className).replace(new RegExp("s{0,}dhxtreeview_"+(this.conf.skin||"")),"")+" dhxtreeview_"+a;this.conf.skin=a;this.conf.icon_width=dhx4.readFromCss("dhxtreeview_"+this.conf.skin+" dhxtreeview_icon_width");this.conf.ofs=(this.conf.skin=="dhx_skyblue"?{w:1,h:0}:{w:0,h:0})};dhtmlXTreeView.prototype.setItemText=function(b,a){if(this.items[b]!=null){this.items[b].text=a;this.items[b].item.firstChild.childNodes[this.conf.idx.text].innerHTML=a;this._callPublicEvent("onTextChange",[b,a])}};dhtmlXTreeView.prototype.getItemText=function(a){return this.items[a].text};dhtmlXTreeView.prototype.getParentId=function(a){return this.items[a].pId};dhtmlXTreeView.prototype.getSubItems=function(d){var c=[];for(var b in this.items){if(this.items[b].pId==d){c.push(b)}}return c};dhtmlXTreeView.prototype._refreshItemHtml=function(c,a,b){this.items[c].item.firstChild.innerHTML=this._getItemHtml(c);if(a==true){this._signUpdate(c)}if(b==true){this._iconUpdate(c)}};dhtmlXTreeView.prototype._getItemHtml=function(f){var c=[];var e=0;for(var b in this.conf.idx){var d=this["_itemHtml_"+b](f,e);if(d.nodeText!==false){c.push(d.nodeText);e+=d.nodeIndex}}return c.join("")};dhtmlXTreeView.prototype._getIconOfs=function(b,a){return((this.items[b].level-1+a)*this.conf.icon_width)};dhtmlXTreeView.prototype._itemHtml_text=function(b,a){return{nodeIndex:1,nodeText:"<div class='dhxtreeview_item_label' style='left:"+this._getIconOfs(b,a)+"px;'>"+this.items[b].text+"</div>"}};dhtmlXTreeView.prototype.setUserData=function(d,a,c){var b=this.items[d];if(b){b.userdata[a]=c}};dhtmlXTreeView.prototype.getUserData=function(c,a){var b=this.items[c];if(b&&!a){return b.userdata}return b?(b.userdata[a]||null):null};dhtmlXTreeView.prototype.silent=function(a){this.conf.silent=true;if(typeof(a)=="function"){a.apply(window,[this])}this.conf.silent=false};dhtmlXTreeView.prototype._callPublicEvent=function(){return(this.conf.silent==false?this.callEvent.apply(this,arguments):true)};if(typeof(window.dhtmlXCellObject)=="function"){dhtmlXCellObject.prototype.attachTreeView=function(c){this.callEvent("_onBeforeContentAttach",["treeview"]);var e=document.createElement("DIV");e.style.position="relative";e.style.overflow="hidden";e.style.width="100%";e.style.height="100%";this._attachObject(e);var d={parent:e,skin:this.conf.skin};if(c!=null&&typeof(c)=="object"){for(var b in c){if(typeof(d[b])=="undefined"){d[b]=c[b]}}}this.dataType="treeview";this.dataObj=new dhtmlXTreeView(d);if(typeof(window.dhtmlXWindowsCell)=="function"&&this instanceof window.dhtmlXWindowsCell){e.className+=" dhxtreeview_with_border";this.dataObj.conf.adjust_base=true;this.dataObj.setSizes()}d.parent=null;d=e=c=null;this.callEvent("_onContentAttach",[]);return this.dataObj}}dhtmlXTreeView.prototype.modules.chbx={init:"_chbxInit"};dhtmlXTreeView.prototype.enableCheckboxes=function(c){c=(c==true);if(this.conf.enable_chbx!=c){this.conf.enable_chbx=c;this._chbxUpdIndex();for(var b in this.items){this._refreshItemHtml(b,true,true)}}};dhtmlXTreeView.prototype.getAllChecked=function(a){return this._chbxGetCheckedBranch(a,true)};dhtmlXTreeView.prototype.getAllUnchecked=function(a){return this._chbxGetCheckedBranch(a,false)};dhtmlXTreeView.prototype.checkItem=function(a){this._chbxSetChecked(a,true,true)};dhtmlXTreeView.prototype.uncheckItem=function(a){this._chbxSetChecked(a,false,true)};dhtmlXTreeView.prototype.isItemChecked=function(a){if(this.items[a]==null){return null}return(this.items[a].checked==true)};dhtmlXTreeView.prototype.enableCheckbox=function(a){this._chbxSetEnabled(a,true)};dhtmlXTreeView.prototype.disableCheckbox=function(a){this._chbxSetEnabled(a,false)};dhtmlXTreeView.prototype.isCheckboxEnabled=function(a){return(this.items[a].chbx_enabled==true)};dhtmlXTreeView.prototype.showCheckbox=function(a){this._chbxSetVisible(a,true)};dhtmlXTreeView.prototype.hideCheckbox=function(a){this._chbxSetVisible(a,false)};dhtmlXTreeView.prototype.isCheckboxVisible=function(a){return(this.items[a].chbx_visible==true)};dhtmlXTreeView.prototype._chbxInit=function(a){this.enableCheckboxes(a.checkboxes);this.attachEvent("_onItemRendered",function(d,c){this.items[d].checked=window.dhx4.s2b(c.checked);var b=(c.checkbox||"enabled,visible");this.items[d].chbx_enabled=(b.match(/disabled/)==null);this.items[d].chbx_visible=(b.match(/hidden/)==null)});this.attachEvent("_onTreeClick",function(d,b){if(this.conf.enable_chbx!=true){return}var c=(d.target||d.srcElement);if(c.tagName.toLowerCase()=="i"){c=c.parentNode}if((c.parentNode.className||"").match(/dhxtreeview_item_text/)!=null&&c==c.parentNode.childNodes[this.conf.idx.chbx]){var f=c.parentNode.parentNode._itemId;if(this.items[f].chbx_enabled==true){this._chbxSetChecked(f,!this.items[f].checked,true)}b.stop=true}});a=null};dhtmlXTreeView.prototype._itemHtml_chbx=function(c,b){var a={nodeIndex:0,nodeText:false};if(this.conf.enable_chbx==true){if(this.items[c].chbx_visible==true){a.nodeIndex=1}a.nodeText="<div class='dhxtreeview_item_icon' style='left:"+this._getIconOfs(c,b)+"px;"+(a.nodeIndex>0?"":"display:none;")+"'>"+this._chbxGenIcon(c)+"</div>"}return a};dhtmlXTreeView.prototype._chbxSetChecked=function(b,a){if(this.conf.enable_chbx!=true){return}a=(a==true);if(this.items[b].checked!=a){if(this._callPublicEvent("onBeforeCheck",[b,(this.items[b].checked==true)])!==true){return}this.items[b].checked=a;this.items[b].item.childNodes[0].childNodes[this.conf.idx.chbx].innerHTML=this._chbxGenIcon(b);this._callPublicEvent("onCheck",[b,a])}};dhtmlXTreeView.prototype._chbxSetEnabled=function(b,a){if(this.items[b].chbx_enabled!=a){this.items[b].chbx_enabled=a;this.items[b].item.firstChild.childNodes[this.conf.idx.chbx].innerHTML=this._chbxGenIcon(b)}};dhtmlXTreeView.prototype._chbxSetVisible=function(b,a){if(this.items[b].chbx_visible!=a){this.items[b].chbx_visible=a;this._refreshItemHtml(b,true,true)}};dhtmlXTreeView.prototype._chbxGenIcon=function(b){var a=this.conf.icons["chbx_"+(this.items[b].chbx_enabled?"":"dis_")+(this.items[b].checked?"1":"0")];return'<i class="'+this.conf.icons.prefix+" "+a+'"></i>'};dhtmlXTreeView.prototype._chbxUpdIndex=function(){if(this.conf.enable_chbx==true){this.conf.idx={sign:0,chbx:1,icon:2,text:3}}else{this.conf.idx={sign:0,icon:1,text:2}}};dhtmlXTreeView.prototype._chbxGetCheckedBranch=function(d,e){var c=[];for(var b in this.items){if(this.items[b].pId==d){if(this.items[b].checked==e){c.push(b)}if(this.items[b].kids==true){c=c.concat(this._chbxGetCheckedBranch(b,e))}}}return c};dhtmlXTreeView.prototype.modules.sign={init:"_signInit"};dhtmlXTreeView.prototype._signInit=function(){this.attachEvent("_onTreeClick",function(c,a){if(a.stop==true){return}var b=(c.target||c.srcElement);if(b.tagName.toLowerCase()=="i"){b=b.parentNode}if((b.parentNode.className||"").match(/dhxtreeview_item_text/)!=null&&b==b.parentNode.childNodes[this.conf.idx.sign]){this._openCloseItem(b.parentNode.parentNode._itemId,true);a.stop=true}})};dhtmlXTreeView.prototype._signUpdate=function(c){var b=this.items[c];var a=b.item.childNodes[0].childNodes[this.conf.idx.sign];if(b.kids==true||b.kids_request==true){a.innerHTML='<i class="'+this.conf.icons.prefix+" "+this.conf.icons[(b.opened||b.half_opened?"minus":"plus")]+'"></i>'}else{a.innerHTML=""}b=a=null};dhtmlXTreeView.prototype._itemHtml_sign=function(b,a){return{nodeIndex:1,nodeText:"<div class='dhxtreeview_item_icon' style='left:"+this._getIconOfs(b,a)+"px;'></div>"}};dhtmlXTreeView.prototype.modules.selection={init:"_selectionInit"};dhtmlXTreeView.prototype.selectItem=function(e){if(this.conf.msel==true){var c={};if(!(e instanceof Array)){e=[e]}for(var d=0;d<e.length;d++){c[e[d]]=true}for(var b in this.conf.selected){if(c[b]==true){delete c[b]}else{this._setSelected(b,false)}}for(var b in c){this._setSelected(b,true)}}else{if(e!=null&&this.conf.selected[e]!=true&&!(e instanceof Array)){if(this._clearSelection(e)==false){this._setSelected(e,true)}}}};dhtmlXTreeView.prototype.unselectItem=function(b){if(this.conf.msel==true){if(!(b instanceof Array)){b=[b]}for(var a=0;a<b.length;a++){if(this.conf.selected[b[a]]==true){this._setSelected(b[a],false)}}}else{if(b!=null){this._setSelected(b,false)}}};dhtmlXTreeView.prototype.getSelectedId=function(){var c=[];for(var b in this.conf.selected){c.push(b)}return(this.conf.msel?c:(c[0]||null))};dhtmlXTreeView.prototype.enableMultiselect=function(a){a=(a==true);if(this.conf.msel!=a){this._clearSelection();this.conf.msel=a}};dhtmlXTreeView.prototype._selectionInit=function(a){this.conf.msel=window.dhx4.s2b(a.multiselect);this.attachEvent("_onTreeClick",function(f,b){if(b.stop==true){return}var d=(f.target||f.srcElement);if(d.tagName.toLowerCase()=="i"){d=d.parentNode}var c=null;if(d.className.match(/dhxtreeview_item_label/)!=null){c=d.parentNode.parentNode._itemId}else{if(d.className.match(/^dhxtreeview_item_text/)!=null){c=d.parentNode._itemId}else{if(d.className.match(/^dhxtreeview_item_icon/)!=null){c=d.parentNode.parentNode._itemId}}}if(c!=null){if(this.conf.msel==true){if((f.ctrlKey==true||this.conf.mac_cmd_key==true)&&f.shiftKey==false&&f.altKey==false){this._setSelected(c,!this._isSelected(c))}else{if(f.ctrlKey==false&&f.shiftKey==false&&f.altKey==false&&this.conf.mac_cmd_key==false){if(this._clearSelection(c)==false){this._setSelected(c,true)}}}}else{if(this._clearSelection(c)==false){this._setSelected(c,true)}}}})};dhtmlXTreeView.prototype._setSelected=function(b,a){if(a==true){if(this.conf.selected[b]!=true){this.items[b].item.childNodes[0].className+=" dhxtreeview_item_text_selected";this.conf.selected[b]=true;this._callPublicEvent("onSelect",[b,true])}}else{if(this.conf.selected[b]==true){this.items[b].item.childNodes[0].className=String(this.items[b].item.childNodes[0].className).replace(/\s*dhxtreeview_item_text_selected/gi,"");delete this.conf.selected[b];this._callPublicEvent("onSelect",[b,false])}}};dhtmlXTreeView.prototype._clearSelection=function(d){var c=false;for(var b in this.conf.selected){if(d!=null&&b==d){c=true}else{this._setSelected(b,false)}}return c};dhtmlXTreeView.prototype._isSelected=function(a){return(this.conf.selected[a]==true)};dhtmlXTreeView.prototype.modules.icons={init:"_iconModuleInit"};dhtmlXTreeView.prototype.setItemIcons=function(d,c){if(c==null&&this.items[d].icons!=null){delete this.items[d].icons}else{if(c!=null){if(this.items[d].icons==null){this.items[d].icons={}}for(var b in c){if(c[b]!=null){this.items[d].icons[b]=c[b]}else{if(c[b]==null&&this.items[d].icons[b]!=null){delete this.items[d].icons[b]}}}}}this._iconUpdate(d)};dhtmlXTreeView.prototype.setIconColor=function(c,a){var b=this.items[c].item.firstChild.childNodes[this.conf.idx.icon].firstChild;if(a==null){if(this.items[c].icon_color!=null){delete this.items[c].icon_color;b.style.color="inherit"}}else{if(this.items[c].icon_color!=a){this.items[c].icon_color=a;b.style.color=a}}b=null};dhtmlXTreeView.prototype.setIconset=function(a){if(this.icons[a]!=null&&this.icons[a].r==true){this.conf.icons=this.icons[a]}};dhtmlXTreeView.prototype._iconModuleInit=function(){this.attachEvent("_onItemRendered",function(b,a){if(a.icons!=null){this.items[b].icons=a.icons}if(a.icon_color!=null){this.items[b].icon_color=a.icon_color}})};dhtmlXTreeView.prototype._iconConf=function(d){var c=this.items[d].icons||{};for(var b in {folder_opened:1,folder_closed:1,file:1}){if(typeof(c[b])=="undefined"){c[b]=this.conf.icons[b]}}return c};dhtmlXTreeView.prototype._iconHtml=function(c,b){var a=['class="'+this.conf.icons.prefix+" "+b+'"'];if(this.items[c].icon_color!=null){a.push('style="color:'+this.items[c].icon_color+';"')}return"<i "+a.join(" ")+"></i>"};dhtmlXTreeView.prototype._itemHtml_icon=function(b,a){return{nodeIndex:1,nodeText:"<div class='dhxtreeview_item_icon' style='left:"+this._getIconOfs(b,a)+"px;'>"+this._iconHtml(b,this._iconConf(b).file)+"</div>"}};dhtmlXTreeView.prototype._iconUpdate=function(d){var c=this.items[d];var b=this._iconConf(d);var a=(c.kids==true||c.kids_request==true?b[c.opened?"folder_opened":"folder_closed"]:b.file);c.item.childNodes[0].childNodes[this.conf.idx.icon].innerHTML=this._iconHtml(d,a);c=null};dhtmlXTreeView.prototype.icons={tree_native:{r:true,prefix:"dhxtreeview_icon",plus:"dhxtreeview_icon_plus",minus:"dhxtreeview_icon_minus",file:"dhxtreeview_icon_file",folder_opened:"dhxtreeview_icon_folder_opened",folder_closed:"dhxtreeview_icon_folder_closed",loading:"dhxtreeview_icon_loading",chbx_0:"dhxtreeview_icon_chbx_0",chbx_1:"dhxtreeview_icon_chbx_1",chbx_dis_0:"dhxtreeview_icon_chbx_dis_0",chbx_dis_1:"dhxtreeview_icon_chbx_dis_1"},font_awesome:{r:(!(window.dhx4.isIE6==true||window.dhx4.isIE7==true)),prefix:"fa",plus:"fa-caret-right",minus:"fa-caret-down",file:"fa-file-o",folder_opened:"fa-folder-open-o",folder_closed:"fa-folder-o",loading:"fa-refresh fa-spin",chbx_0:"fa-square-o",chbx_1:"fa-check-square-o",chbx_dis_0:"fa-square-o dhx-disabled",chbx_dis_1:"fa-check-square-o dhx-disabled"}};dhtmlXTreeView.prototype.modules.loading={init:"_loadingInit",unload:"_loadingUnload"};dhtmlXTreeView.prototype._loadingInit=function(a){window.dhx4._enableDataLoading(this,"_initObj","_xmlToObj","tree",{struct:true});this.conf.root_id=(typeof(a.root_id)=="undefined"||a.root_id==null?"0":a.root_id);this._dhxdataload.onBeforeXLS=function(b){if(this.conf.autoload.url==null){this.conf.autoload.url=b}return{url:b.replace(/\{id\}/gi,this.conf.root_id)}}};dhtmlXTreeView.prototype._loadingUnload=function(){window.dhx4._enableDataLoading(this,null,null,null,"clear")};dhtmlXTreeView.prototype._initObj=function(e,a,b,c){for(var d=0;d<e.length;d++){var f=e[d].id;if(f==null){f="dhxtreeview_id_"+window.dhx4.newId()}if(this.items[f]==null){this._addItem(f,b,e[d])}if(e[d].items!=null){this._initObj(e[d].items,null,f,true)}}if(c!=true){this._fixAreaWidth()}};dhtmlXTreeView.prototype._xmlToObj=function(h,g){if(g!=true){h=h.getElementsByTagName("tree")[0]}var d=[];for(var b=0;b<h.childNodes.length;b++){var c=h.childNodes[b];if((c.tagName||"").toLowerCase()=="item"){var j={};for(var i=0;i<c.attributes.length;i++){j[c.attributes[i].name]=c.attributes[i].value}if(c.childNodes.length>0){var g=this._xmlToObj(c,true);if(g.length>0){j.items=g}for(var i=0;i<c.childNodes.length;i++){var k=(c.childNodes[i].tagName||"").toLowerCase();if({icons:1,userdata:1}[k]==1){if(j[k]==null){j[k]={}}for(var f=0;f<c.childNodes[i].attributes.length;f++){var a=c.childNodes[i].attributes[f].name;if(j[k][a]==null){j[k][a]=c.childNodes[i].attributes[f].value}}}n2=null}}d.push(j)}c=null}return d};dhtmlXTreeView.prototype.modules.dnd={init:"_dndInit",unload:"_dndUnload"};dhtmlXTreeView.prototype.enableDragAndDrop=function(a){this.conf.enable_dnd=window.dhx4.s2b(a)};dhtmlXTreeView.prototype._dndInit=function(a){var b=this;this.enableDragAndDrop(a.dnd);this.conf.dnd=null;this._dndOnMouseDown=function(h){if(b.conf.enable_dnd!=true){return}h=h||event;if(typeof(h.button)!="undefined"&&h.button>=2){return false}var i=null;var g=null;var f=h.target||h.srcElement;var d=window.dhx4.absLeft(f)+(typeof(h.offsetX)=="undefined"?h.layerX:h.offsetX)-h.clientX;var c=window.dhx4.absTop(f)+(typeof(h.offsetY)=="undefined"?h.layerY:h.offsetY)-h.clientY;while(f!=null&&f!=b.cont){if((f.className||"").match(/dhxtreeview_item/)!=null&&f._itemId!=null){i=f._itemId;g=f._treeId;f=null}else{f=f.parentNode}}f=null;if(i==null){return}b.conf.dnd={inited:false,id:i,treeId:g,selected:(b.conf.selected[i]==true),tid:null,drop:{},x:h.clientX,y:h.clientY,ofs_x:d,ofs_y:c,zi:window.dhx4.newId(),scroll:false,scroll_ofs:5,scroll_time:30,scroll_tm:null,kids:{},idx:{}};b._dndInitEvents()};this._dndOnMouseMove=function(l){l=l||event;if(b.conf.dnd.inited!=true){if(Math.abs(b.conf.dnd.x-l.clientX)>=15||Math.abs(b.conf.dnd.y-l.clientY)>=15){if(b._callPublicEvent("onBeforeDrag",[b.conf.dnd.id])!==true){return}b.conf.dnd.inited=true;b.cont.className+=" dhxtreeview_dnd_mode";b._dndInitDraggedObj();b._dndCollectKids(b.conf.dnd.id);b._dndCollectIndexes(b.area);if(b._clearSelection(b.conf.dnd.id)==false){b._setSelected(b.conf.dnd.id,true)}b.items[b.conf.dnd.id].item.className+=" dhxtreeview_item_dragged";document.body.className+=" dhxtreeview_dnd_mode";b.conf.dnd.cont={x1:window.dhx4.absLeft(b.base),y1:window.dhx4.absTop(b.base)};b.conf.dnd.cont.x2=b.conf.dnd.cont.x1+b.base.offsetWidth;b.conf.dnd.cont.y2=b.conf.dnd.cont.y1+b.base.offsetHeight}else{return}}b.conf.dnd.x=l.clientX;b.conf.dnd.y=l.clientY;b._dndAdjustDraggedObj();var f=true;if(b.cont.scrollHeight>b.cont.clientHeight){if(b.conf.dnd.x>=b.conf.dnd.cont.x1&&b.conf.dnd.x<=b.conf.dnd.cont.x2){if(b.cont.scrollTop>0&&b.conf.dnd.y>=b.conf.dnd.cont.y1&&b.conf.dnd.y<=b.conf.dnd.cont.y1+10){b._dndScroll("up");f=false}else{if(b.cont.scrollTop+b.cont.clientHeight<b.cont.scrollHeight&&b.conf.dnd.y<=b.conf.dnd.cont.y2&&b.conf.dnd.y>=b.conf.dnd.cont.y2-10){b._dndScroll("down");f=false}}}}if(f==true&&b.conf.dnd.scroll==true){b._dndScroll("stop")}var n=(l.target||l.srcElement);if(n.parentNode!=null&&(n.parentNode.className||"").match(/dhxtreeview_kids_cont/)!=null){n=null;return}var c=false;var g=null;var k=null;if(n.className!=null){if(n.className.match(/dhxtreeview_item_[li]/)!=null){g=n.parentNode.parentNode._itemId;k=n.parentNode.parentNode._treeId}else{if(n.className.match(/dhxtreeview_item_[t]/)!=null){g=n.parentNode._itemId;k=n.parentNode._treeId}}}if(g!=null&&k!=b.conf.dnd.treeId){return}if(b.conf.dnd.id==g||b.conf.dnd.kids[g]==true){g=null}if(g!=null){var i=b.items[g].item.firstChild.offsetHeight;var m=Math.max(Math.floor(Math.min(l.layerY||l.offsetY,i)*3/i),0);if(m==0){if(b.items[g].item.previousSibling==b.items[b.conf.dnd.id].item){m=null}}else{if(m==1){if(b.items[b.conf.dnd.id].pId==g){m=null}else{if(b.items[g].kids==true&&b.items[g].item.lastChild.firstChild.firstChild==b.items[b.conf.dnd.id].item){m=null}else{if(b.items[g].opened==false){}}}}else{if(m==2){if(b.items[g].opened==true){m=null}else{if(b.items[g].item.nextSibling==b.items[b.conf.dnd.id].item){m=null}}}}}if(m!=b.conf.dnd.ofs){b.conf.dnd.ofs=m;c=true}}if(g!=b.conf.dnd.tid){if(b.conf.dnd.tid!=null){b._dndUpdateTargetCss(b.conf.dnd.tid,false)}if(g!=null){c=true}b.conf.dnd.tid=g}if(c==true){var j=false;if(m!=null){var d={id:b.conf.dnd.id,pId:b.items[g].pId||null,index:null,idxOfs:(b.items[b.conf.dnd.id].pId==b.items[g].pId&&b.conf.dnd.idx[b.conf.dnd.id]<b.conf.dnd.idx[g]?-1:0)};if(m==0||m==2){d.index=b.conf.dnd.idx[g]+(m==2?1:0)+d.idxOfs}else{if(m==1){d.pId=g;d.index=(b.items[g].item.lastChild.className.match(/dhxtreeview_kids_cont/)==null?0:b.items[g].item.lastChild.firstChild.childNodes.length)}}if(b.conf.dnd.drop.id!=d.id||b.conf.dnd.drop.pId!=d.pId||b.conf.dnd.drop.index!=d.index){b.conf.dnd.drop=d;if(b._callPublicEvent("onDragOver",[b.conf.dnd.drop.id,b.conf.dnd.drop.pId,b.conf.dnd.drop.index])===true){j=true}}}if(j!=true){b.conf.dnd.ofs=m=null}b._dndUpdateTargetCss(g,j)}};this._dndOnMouseUp=function(j){j=j||event;if(typeof(j.button)!="undefined"&&j.button>=2){return}b._dndUnloadEvents();b._dndUnloadDraggedObj();if(b.conf.dnd.scroll==true){b._dndScroll("stop")}if(b.cont.className.match(/dhxtreeview_dnd_mode/gi)!=null){b.cont.className=String(b.cont.className).replace(/\s*dhxtreeview_dnd_mode/gi,"")}if(b.conf.dnd.tid!=null){b._dndUpdateTargetCss(b.conf.dnd.tid,false)}if(b.conf.dnd.inited==true){b.items[b.conf.dnd.id].item.className=String(b.items[b.conf.dnd.id].item.className).replace(/\s*dhxtreeview_item_dragged/gi,"");document.body.className=String(document.body.className).replace(/\s*dhxtreeview_dnd_mode/,"");if(b.conf.dnd.tid!=null&&b.conf.dnd.ofs!=null){if(b._callPublicEvent("onBeforeDrop",[b.conf.dnd.drop.id,b.conf.dnd.drop.pId,b.conf.dnd.drop.index])===true){var i=b.items[b.conf.dnd.id];var d=b.items[b.conf.dnd.tid];var f=(i.pId!=null?b.items[i.pId]:null);var h;if(b.conf.dnd.ofs==1){var g=false;if(d.kids==false){b._initKidsNode(d.id);g=true}d.item.lastChild.firstChild.appendChild(i.item);if(g==true){b._openCloseItem(d.id,false)}i.pId=d.id;h=d.level+1-i.level}else{if(b.conf.dnd.ofs==0||b.conf.dnd.ofs==2){if(b.conf.dnd.ofs==0){d.item.parentNode.insertBefore(i.item,d.item)}else{if(d.item.nextSibling!=null){d.item.parentNode.insertBefore(i.item,d.item.nextSibling)}else{d.item.parentNode.appendChild(i.item)}}i.pId=d.pId;h=d.level-i.level}}if(h!=0){b.conf.dnd.kids[i.id]=true;for(var c in b.conf.dnd.kids){b.items[c].level+=h;b._refreshItemHtml(c,(b.items[c].kids==true),true)}}if(f!=null&&f.kids==true&&f.item.lastChild.firstChild.childNodes.length==0){b._clearKidsNode(f.id);f.opened=false}i=d=f=null;b._fixAreaWidth();b._callPublicEvent("onDrop",[b.conf.dnd.drop.id,b.conf.dnd.drop.pId,b.conf.dnd.drop.index])}}}window.dhx4.zim.clear(b.conf.dnd.zi);b.conf.dnd=null};this._dndOnContextMenu=function(c){if(b.conf.dnd.inited==true){c=c||event;c.cancelBubble=true;if(c.preventDefault){c.preventDefault()}c.returnValue=false;return false}};this._dndInitEvents=function(){if(typeof(window.addEventListener)=="function"){window.addEventListener("mousemove",this._dndOnMouseMove,false);window.addEventListener("mouseup",this._dndOnMouseUp,false);window.addEventListener("contextmenu",this._dndOnContextMenu,false)}else{document.body.attachEvent("onmousemove",this._dndOnMouseMove);document.body.attachEvent("onmouseup",this._dndOnMouseUp);document.body.attachEvent("oncontextmenu",this._dndOnContextMenu)}};this._dndUnloadEvents=function(){if(typeof(window.addEventListener)=="function"){window.removeEventListener("mousemove",this._dndOnMouseMove,false);window.removeEventListener("mouseup",this._dndOnMouseUp,false);window.removeEventListener("contextmenu",this._dndOnContextMenu,false)}else{document.body.detachEvent("onmousemove",this._dndOnMouseMove);document.body.detachEvent("onmouseup",this._dndOnMouseUp);document.body.detachEvent("oncontextmenu",this._dndOnContextMenu)}};this._dndInitDraggedObj=function(){this.conf.dnd.dragged=document.createElement("DIV");this.conf.dnd.dragged.className="dhxtreeview_dragged_obj_"+this.conf.skin;this.conf.dnd.dragged.style.zIndex=window.dhx4.zim.reserve(this.conf.dnd.zi);document.body.appendChild(this.conf.dnd.dragged);this.conf.dnd.dragged.innerHTML=this.getItemText(this.conf.dnd.id)};this._dndAdjustDraggedObj=function(){this.conf.dnd.dragged.style.left=this.conf.dnd.x+this.conf.dnd.ofs_x+12+"px";this.conf.dnd.dragged.style.top=this.conf.dnd.y+this.conf.dnd.ofs_y+18+"px"};this._dndUnloadDraggedObj=function(){if(this.conf.dnd.dragged!=null){document.body.removeChild(this.conf.dnd.dragged);this.conf.dnd.dragged=null}};this._dndUpdateTargetCss=function(f,e){var d=this.items[f].item.childNodes[0];if(this.conf.dnd.ofs==null){e=false}if(e==true){d.className=String(d.className).replace(/(\s*dhxtreeview_drop_\d)?$/i," dhxtreeview_drop_"+this.conf.dnd.ofs);if(d.nextSibling==null||d.nextSibling.className.match(/dhxtreeview_drop_preview/)==null){var c=document.createElement("DIV");c.className="dhxtreeview_drop_preview";c.style.left=d.lastChild.previousSibling.style.left;if(d.nextSibling==null){d.parentNode.appendChild(c)}else{d.parentNode.insertBefore(c,d.nextSibling)}c=null}d.nextSibling.className=String(d.nextSibling.className).replace(/(\s*dhxtreeview_drop_\d)?$/i," dhxtreeview_drop_"+this.conf.dnd.ofs)}else{if(d.className.match(/dhxtreeview_drop_\d/)!=null){d.className=String(d.className).replace(/\s*dhxtreeview_drop_\d/gi,"");if(d.nextSibling!=null&&d.nextSibling.className.match(/dhxtreeview_drop_preview/)!=null){d.parentNode.removeChild(d.nextSibling)}}}d=null};this._dndCollectKids=function(d){for(var c in this.items){if(this.items[c].pId==d){this.conf.dnd.kids[c]=true;if(this.items[c].kids==true){this._dndCollectKids(c)}}}};this._dndCollectIndexes=function(c){for(var d=0;d<c.childNodes.length;d++){this.conf.dnd.idx[c.childNodes[d]._itemId]=d;if(c.childNodes[d].lastChild.className.match(/dhxtreeview_kids_cont/)!=null){this._dndCollectIndexes(c.childNodes[d].lastChild.firstChild)}}};this._dndScroll=function(e,d){if(e=="stop"){if(b.conf.dnd.scroll==true){if(b.conf.dnd.scroll_tm){window.clearTimeout(b.conf.dnd.scroll_tm)}b.conf.dnd.scroll=false}return}else{if(b.conf.dnd.scroll==true){if(d!=true){return}}else{b.conf.dnd.scroll=true}var c=false;if(e=="up"){b.cont.scrollTop=Math.max(0,b.cont.scrollTop-b.conf.dnd.scroll_ofs);if(b.cont.scrollTop==0){c=true}}else{b.cont.scrollTop=Math.min(b.cont.scrollHeight-b.cont.clientHeight,b.cont.scrollTop+b.conf.dnd.scroll_ofs);if(b.cont.scrollTop+b.cont.clientHeight==b.cont.scrollHeight){c=true}}if(c!=true){b.conf.dnd.scroll_tm=window.setTimeout(function(){b._dndScroll(e,true)},b.conf.dnd.scroll_time)}}};if(typeof(window.addEventListener)=="function"){this.cont.addEventListener("mousedown",this._dndOnMouseDown,false)}else{this.cont.attachEvent("onmousedown",this._dndOnMouseDown)}this._dndUnload=function(){if(typeof(window.addEventListener)=="function"){this.cont.removeEventListener("mousedown",this._dndOnMouseDown,false)}else{this.cont.detachEvent("onmousedown",this._dndOnMouseDown)}b=null};a=null};dhtmlXTreeView.prototype.modules.ctx={init:"_ctxInit",unload:"_ctxUnload"};dhtmlXTreeView.prototype.enableContextMenu=function(a){this.conf.ctx=window.dhx4.s2b(a)};dhtmlXTreeView.prototype._ctxInit=function(a){var b=this;this._ctxCall=function(f){if(b.conf.ctx!=true){return}f=f||event;var d=(f.target||f.srcElement);if(d.tagName.toLowerCase()=="i"){d=d.parentNode}var h=(d.parentNode._itemId||d.parentNode.parentNode._itemId);var c=window.dhx4.absLeft(d)+(typeof(f.offsetX)=="undefined"?f.layerX:f.offsetX);var g=window.dhx4.absTop(d)+(typeof(f.offsetY)=="undefined"?f.layerY:f.offsetY);if(h!=null&&b._callPublicEvent("onContextMenu",[h,c,g,f])!==true){if(f.preventDefault){f.preventDefault()}f.cancelBubble=true;f.returnValue=false;return false}};if(typeof(window.addEventListener)=="function"){this.cont.addEventListener("contextmenu",this._ctxCall,false)}else{this.cont.attachEvent("oncontextmenu",this._ctxCall)}this._ctxUnload=function(){if(typeof(window.addEventListener)=="function"){this.cont.removeEventListener("contextmenu",this._ctxCall,false)}else{this.cont.detachEvent("oncontextmenu",this._ctxCall)}b=null};this.enableContextMenu(a.context_menu)};dhtmlXTreeView.prototype.modules.dynload={init:"_dynLoadInit"};dhtmlXTreeView.prototype._dynLoadInit=function(){this.attachEvent("_onItemInited",function(c,b){this.items[c].kids_request=window.dhx4.s2b(b.kids);if(this.items[c].kids_request==true){this._initKidsNode(c)}if(this.items[c].opened==true&&this.items[c].kids_request==true){var a=this;window.setTimeout(function(){a._dynLoadRequest(c);a=null},100)}});this.attachEvent("_onBeforeOpen",function(a){if(this.items[a].opened!=true&&this.items[a].kids_request==true){if(this._dynLoadRequest(a)!=true){this.items[a].half_opened=true;this._signUpdate(a);return false}}return true})};dhtmlXTreeView.prototype._dynLoadRequest=function(b){if(typeof(this.conf.autoload.mode)=="function"){this.conf.autoload.mode.apply(window,[b]);return true}if(this.conf.autoload.url==null){return}this._dhxdataload.onBeforeXLS=function(c){return{url:c.replace(/\{id\}/gi,b)}};var a=this;this.items[b].kids_loading_tm=window.setTimeout(function(){a._dynLoadUpdateIcon(b,true);a=null},100);this.loadStruct(this.conf.autoload.url,function(){window.clearTimeout(this.items[b].kids_loading_tm);this._dynLoadUpdateIcon(b,false);if(this.items[b].half_opened){this.items[b].half_opened=false;this._openCloseItem(b,true)}});this.items[b].kids_request=false;return false};dhtmlXTreeView.prototype._dynLoadUpdateIcon=function(b,a){this.items[b].loading=(a==true);if(this.items[b].loading==true){this.items[b].item.childNodes[0].childNodes[this.conf.idx.icon].innerHTML="<i class='"+this.conf.icons.prefix+" "+this.conf.icons.loading+"'></i>"}else{this._iconUpdate(b)}};window.dhtmlXTreeView = dhtmlXTreeView;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * JSTS. See https://github.com/bjornharrtell/jsts
 * https://github.com/bjornharrtell/jsts/blob/master/LICENSE_EDLv1.txt
 * https://github.com/bjornharrtell/jsts/blob/master/LICENSE_EPLv1.txt
 * https://github.com/bjornharrtell/jsts/blob/master/LICENSE_LICENSE_ES6_COLLECTIONS.txt
 * @license
 */
!function (t, e) {
  "object" == ( false ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? e(exports) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : e(t.jsts = t.jsts || {});
}(undefined, function (t) {
  "use strict";
  function e() {}function n() {}function i() {}function r() {}function s() {}function o() {}function a() {}function u(t) {
    this.name = "RuntimeException", this.message = t, this.stack = new Error().stack, Error.call(this, t);
  }function l() {
    if (0 === arguments.length) u.call(this);else if (1 === arguments.length) {
      var t = arguments[0];u.call(this, t);
    }
  }function h() {}function c() {
    if (this.x = null, this.y = null, this.z = null, 0 === arguments.length) c.call(this, 0, 0);else if (1 === arguments.length) {
      var t = arguments[0];c.call(this, t.x, t.y, t.z);
    } else if (2 === arguments.length) {
      var e = arguments[0],
          n = arguments[1];c.call(this, e, n, c.NULL_ORDINATE);
    } else if (3 === arguments.length) {
      var i = arguments[0],
          r = arguments[1],
          s = arguments[2];this.x = i, this.y = r, this.z = s;
    }
  }function f() {
    if (this.dimensionsToTest = 2, 0 === arguments.length) f.call(this, 2);else if (1 === arguments.length) {
      var t = arguments[0];if (2 !== t && 3 !== t) throw new n("only 2 or 3 dimensions may be specified");this.dimensionsToTest = t;
    }
  }function g() {}function d() {}function p(t) {
    this.message = t || "";
  }function m() {}function v(t) {
    this.message = t || "";
  }function y(t) {
    this.message = t || "";
  }function x() {
    this.array_ = [], arguments[0] instanceof d && this.addAll(arguments[0]);
  }function E() {
    if (x.apply(this), 0 === arguments.length) ;else if (1 === arguments.length) {
      var t = arguments[0];this.ensureCapacity(t.length), this.add(t, !0);
    } else if (2 === arguments.length) {
      var e = arguments[0],
          n = arguments[1];this.ensureCapacity(e.length), this.add(e, n);
    }
  }function I() {
    if (this.minx = null, this.maxx = null, this.miny = null, this.maxy = null, 0 === arguments.length) this.init();else if (1 === arguments.length) {
      if (arguments[0] instanceof c) {
        var t = arguments[0];this.init(t.x, t.x, t.y, t.y);
      } else if (arguments[0] instanceof I) {
        var e = arguments[0];this.init(e);
      }
    } else if (2 === arguments.length) {
      var n = arguments[0],
          i = arguments[1];this.init(n.x, i.x, n.y, i.y);
    } else if (4 === arguments.length) {
      var r = arguments[0],
          s = arguments[1],
          o = arguments[2],
          a = arguments[3];this.init(r, s, o, a);
    }
  }function N() {}function C() {
    N.call(this, "Projective point not representable on the Cartesian plane.");
  }function S() {}function w() {}function L(t) {
    this.str = t;
  }function R(t) {
    this.value = t;
  }function T() {}function P() {
    if (this.hi = 0, this.lo = 0, 0 === arguments.length) this.init(0);else if (1 === arguments.length) {
      if ("number" == typeof arguments[0]) {
        var t = arguments[0];this.init(t);
      } else if (arguments[0] instanceof P) {
        var e = arguments[0];this.init(e);
      } else if ("string" == typeof arguments[0]) {
        var n = arguments[0];P.call(this, P.parse(n));
      }
    } else if (2 === arguments.length) {
      var i = arguments[0],
          r = arguments[1];this.init(i, r);
    }
  }function b() {}function O() {}function _() {}function M() {
    if (this.x = null, this.y = null, this.w = null, 0 === arguments.length) this.x = 0, this.y = 0, this.w = 1;else if (1 === arguments.length) {
      var t = arguments[0];this.x = t.x, this.y = t.y, this.w = 1;
    } else if (2 === arguments.length) {
      if ("number" == typeof arguments[0] && "number" == typeof arguments[1]) {
        var e = arguments[0],
            n = arguments[1];this.x = e, this.y = n, this.w = 1;
      } else if (arguments[0] instanceof M && arguments[1] instanceof M) {
        var i = arguments[0],
            r = arguments[1];this.x = i.y * r.w - r.y * i.w, this.y = r.x * i.w - i.x * r.w, this.w = i.x * r.y - r.x * i.y;
      } else if (arguments[0] instanceof c && arguments[1] instanceof c) {
        var s = arguments[0],
            o = arguments[1];this.x = s.y - o.y, this.y = o.x - s.x, this.w = s.x * o.y - o.x * s.y;
      }
    } else if (3 === arguments.length) {
      var a = arguments[0],
          u = arguments[1],
          l = arguments[2];this.x = a, this.y = u, this.w = l;
    } else if (4 === arguments.length) {
      var h = arguments[0],
          f = arguments[1],
          g = arguments[2],
          d = arguments[3],
          p = h.y - f.y,
          m = f.x - h.x,
          v = h.x * f.y - f.x * h.y,
          y = g.y - d.y,
          x = d.x - g.x,
          E = g.x * d.y - d.x * g.y;this.x = m * E - x * v, this.y = y * v - p * E, this.w = p * x - y * m;
    }
  }function D() {}function A() {}function F() {
    this.envelope = null, this.factory = null, this.SRID = null, this.userData = null;var t = arguments[0];this.factory = t, this.SRID = t.getSRID();
  }function G() {}function q() {}function B() {}function z() {}function V() {}function k() {}function Y() {}function U() {}function X() {}function H() {}function W() {}function j() {}function K() {
    this.array_ = [], arguments[0] instanceof d && this.addAll(arguments[0]);
  }function Z(t) {
    return null == t ? Js : t.color;
  }function Q(t) {
    return null == t ? null : t.parent;
  }function J(t, e) {
    null !== t && (t.color = e);
  }function $(t) {
    return null == t ? null : t.left;
  }function tt(t) {
    return null == t ? null : t.right;
  }function et() {
    this.root_ = null, this.size_ = 0;
  }function nt() {}function it() {}function rt() {
    this.array_ = [], arguments[0] instanceof d && this.addAll(arguments[0]);
  }function st() {}function ot() {}function at() {}function ut() {}function lt() {
    this.geometries = null;var t = arguments[0],
        e = arguments[1];if (F.call(this, e), null === t && (t = []), F.hasNullElements(t)) throw new n("geometries must not contain null elements");this.geometries = t;
  }function ht() {
    var t = arguments[0],
        e = arguments[1];lt.call(this, t, e);
  }function ct() {
    if (this.geom = null, this.geomFact = null, this.bnRule = null, this.endpointMap = null, 1 === arguments.length) {
      var t = arguments[0];ct.call(this, t, q.MOD2_BOUNDARY_RULE);
    } else if (2 === arguments.length) {
      var e = arguments[0],
          n = arguments[1];this.geom = e, this.geomFact = e.getFactory(), this.bnRule = n;
    }
  }function ft() {
    this.count = null;
  }function gt() {}function dt() {}function pt() {}function mt() {}function vt() {}function yt() {}function xt() {}function Et() {}function It() {
    this.points = null;var t = arguments[0],
        e = arguments[1];F.call(this, e), this.init(t);
  }function Nt() {}function Ct() {
    this.coordinates = null;var t = arguments[0],
        e = arguments[1];F.call(this, e), this.init(t);
  }function St() {}function wt() {
    this.shell = null, this.holes = null;var t = arguments[0],
        e = arguments[1],
        i = arguments[2];if (F.call(this, i), null === t && (t = this.getFactory().createLinearRing()), null === e && (e = []), F.hasNullElements(e)) throw new n("holes must not contain null elements");if (t.isEmpty() && F.hasNonEmptyElements(e)) throw new n("shell is empty but holes are not");this.shell = t, this.holes = e;
  }function Lt() {
    var t = arguments[0],
        e = arguments[1];lt.call(this, t, e);
  }function Rt() {
    if (arguments[0] instanceof c && arguments[1] instanceof $t) {
      var t = arguments[0],
          e = arguments[1];Rt.call(this, e.getCoordinateSequenceFactory().create(t), e);
    } else if (Zs(arguments[0], O) && arguments[1] instanceof $t) {
      var n = arguments[0],
          i = arguments[1];It.call(this, n, i), this.validateConstruction();
    }
  }function Tt() {
    var t = arguments[0],
        e = arguments[1];lt.call(this, t, e);
  }function Pt() {
    if (this.factory = null, this.isUserDataCopied = !1, 0 === arguments.length) ;else if (1 === arguments.length) {
      var t = arguments[0];this.factory = t;
    }
  }function bt() {}function Ot() {}function _t() {}function Mt() {}function Dt() {
    if (this.dimension = 3, this.coordinates = null, 1 === arguments.length) {
      if (arguments[0] instanceof Array) {
        var t = arguments[0];Dt.call(this, t, 3);
      } else if (Number.isInteger(arguments[0])) {
        var e = arguments[0];this.coordinates = new Array(e).fill(null);for (var n = 0; n < e; n++) {
          this.coordinates[n] = new c();
        }
      } else if (Zs(arguments[0], O)) {
        var i = arguments[0];if (null === i) return this.coordinates = new Array(0).fill(null), null;this.dimension = i.getDimension(), this.coordinates = new Array(i.size()).fill(null);for (var n = 0; n < this.coordinates.length; n++) {
          this.coordinates[n] = i.getCoordinateCopy(n);
        }
      }
    } else if (2 === arguments.length) if (arguments[0] instanceof Array && Number.isInteger(arguments[1])) {
      var r = arguments[0],
          s = arguments[1];this.coordinates = r, this.dimension = s, null === r && (this.coordinates = new Array(0).fill(null));
    } else if (Number.isInteger(arguments[0]) && Number.isInteger(arguments[1])) {
      var o = arguments[0],
          a = arguments[1];this.coordinates = new Array(o).fill(null), this.dimension = a;for (var n = 0; n < o; n++) {
        this.coordinates[n] = new c();
      }
    }
  }function At() {}function Ft(t, e) {
    return t === e || t !== t && e !== e;
  }function Gt(t) {
    this.add ? t.forEach(this.add, this) : t.forEach(function (t) {
      this.set(t[0], t[1]);
    }, this);
  }function qt(t) {
    return this.has(t) && (this._keys.splice(to, 1), this._values.splice(to, 1), this._itp.forEach(function (t) {
      to < t[0] && t[0]--;
    })), to > -1;
  }function Bt(t) {
    return this.has(t) ? this._values[to] : void 0;
  }function zt(t, e) {
    if (this.objectOnly && e !== Object(e)) throw new TypeError("Invalid value used as weak collection key");if (e !== e || 0 === e) for (to = t.length; to-- && !Ft(t[to], e);) {} else to = t.indexOf(e);return to > -1;
  }function Vt(t) {
    return zt.call(this, this._keys, t);
  }function kt(t, e) {
    return this.has(t) ? this._values[to] = e : this._values[this._keys.push(t) - 1] = e, this;
  }function Yt() {
    (this._keys || 0).length = this._values.length = 0;
  }function Ut() {
    return Wt(this._itp, this._keys);
  }function Xt() {
    return Wt(this._itp, this._values);
  }function Ht() {
    return Wt(this._itp, this._keys, this._values);
  }function Wt(t, e, n) {
    var i = [0],
        r = !1;return t.push(i), { next: function next() {
        var s,
            o = i[0];return !r && o < e.length ? (s = n ? [e[o], n[o]] : e[o], i[0]++) : (r = !0, t.splice(t.indexOf(i), 1)), { done: r, value: s };
      } };
  }function jt() {
    return this._values.length;
  }function Kt(t, e) {
    for (var n = this.entries();;) {
      var i = n.next();if (i.done) break;t.call(e, i.value[1], i.value[0], this);
    }
  }function Zt() {
    this.map_ = new io();
  }function Qt() {
    if (this.modelType = null, this.scale = null, 0 === arguments.length) this.modelType = Qt.FLOATING;else if (1 === arguments.length) if (arguments[0] instanceof Jt) {
      var t = arguments[0];this.modelType = t, t === Qt.FIXED && this.setScale(1);
    } else if ("number" == typeof arguments[0]) {
      var e = arguments[0];this.modelType = Qt.FIXED, this.setScale(e);
    } else if (arguments[0] instanceof Qt) {
      var n = arguments[0];this.modelType = n.modelType, this.scale = n.scale;
    }
  }function Jt() {
    this.name = null;var t = arguments[0];this.name = t, Jt.nameToTypeMap.put(t, this);
  }function $t() {
    if (this.precisionModel = null, this.coordinateSequenceFactory = null, this.SRID = null, 0 === arguments.length) $t.call(this, new Qt(), 0);else if (1 === arguments.length) {
      if (Zs(arguments[0], D)) {
        var t = arguments[0];$t.call(this, new Qt(), 0, t);
      } else if (arguments[0] instanceof Qt) {
        var e = arguments[0];$t.call(this, e, 0, $t.getDefaultCoordinateSequenceFactory());
      }
    } else if (2 === arguments.length) {
      var n = arguments[0],
          i = arguments[1];$t.call(this, n, i, $t.getDefaultCoordinateSequenceFactory());
    } else if (3 === arguments.length) {
      var r = arguments[0],
          s = arguments[1],
          o = arguments[2];this.precisionModel = r, this.coordinateSequenceFactory = o, this.SRID = s;
    }
  }function te(t) {
    this.geometryFactory = t || new $t();
  }function ee(t) {
    this.parser = new te(t);
  }function ne() {
    this.result = null, this.inputLines = Array(2).fill().map(function () {
      return Array(2);
    }), this.intPt = new Array(2).fill(null), this.intLineIndex = null, this._isProper = null, this.pa = null, this.pb = null, this.precisionModel = null, this.intPt[0] = new c(), this.intPt[1] = new c(), this.pa = this.intPt[0], this.pb = this.intPt[1], this.result = 0;
  }function ie() {
    ne.apply(this);
  }function re() {}function se() {
    this.p = null, this.crossingCount = 0, this.isPointOnSegment = !1;var t = arguments[0];this.p = t;
  }function oe() {}function ae() {
    if (this.p0 = null, this.p1 = null, 0 === arguments.length) ae.call(this, new c(), new c());else if (1 === arguments.length) {
      var t = arguments[0];ae.call(this, t.p0, t.p1);
    } else if (2 === arguments.length) {
      var e = arguments[0],
          n = arguments[1];this.p0 = e, this.p1 = n;
    } else if (4 === arguments.length) {
      var i = arguments[0],
          r = arguments[1],
          s = arguments[2],
          o = arguments[3];ae.call(this, new c(i, r), new c(s, o));
    }
  }function ue() {
    if (this.matrix = null, 0 === arguments.length) this.matrix = Array(3).fill().map(function () {
      return Array(3);
    }), this.setAll(ot.FALSE);else if (1 === arguments.length) if ("string" == typeof arguments[0]) {
      var t = arguments[0];ue.call(this), this.set(t);
    } else if (arguments[0] instanceof ue) {
      var e = arguments[0];ue.call(this), this.matrix[S.INTERIOR][S.INTERIOR] = e.matrix[S.INTERIOR][S.INTERIOR], this.matrix[S.INTERIOR][S.BOUNDARY] = e.matrix[S.INTERIOR][S.BOUNDARY], this.matrix[S.INTERIOR][S.EXTERIOR] = e.matrix[S.INTERIOR][S.EXTERIOR], this.matrix[S.BOUNDARY][S.INTERIOR] = e.matrix[S.BOUNDARY][S.INTERIOR], this.matrix[S.BOUNDARY][S.BOUNDARY] = e.matrix[S.BOUNDARY][S.BOUNDARY], this.matrix[S.BOUNDARY][S.EXTERIOR] = e.matrix[S.BOUNDARY][S.EXTERIOR], this.matrix[S.EXTERIOR][S.INTERIOR] = e.matrix[S.EXTERIOR][S.INTERIOR], this.matrix[S.EXTERIOR][S.BOUNDARY] = e.matrix[S.EXTERIOR][S.BOUNDARY], this.matrix[S.EXTERIOR][S.EXTERIOR] = e.matrix[S.EXTERIOR][S.EXTERIOR];
    }
  }function le() {
    this.areaBasePt = null, this.triangleCent3 = new c(), this.areasum2 = 0, this.cg3 = new c(), this.lineCentSum = new c(), this.totalLength = 0, this.ptCount = 0, this.ptCentSum = new c();var t = arguments[0];this.areaBasePt = null, this.add(t);
  }function he(t) {
    this.message = t || "";
  }function ce() {
    this.array_ = [];
  }function fe() {
    this.treeSet = new rt(), this.list = new x();
  }function ge() {
    if (this.geomFactory = null, this.inputPts = null, 1 === arguments.length) {
      var t = arguments[0];ge.call(this, ge.extractCoordinates(t), t.getFactory());
    } else if (2 === arguments.length) {
      var e = arguments[0],
          n = arguments[1];this.inputPts = fe.filterCoordinates(e), this.geomFactory = n;
    }
  }function de() {
    this.origin = null;var t = arguments[0];this.origin = t;
  }function pe() {
    this.inputGeom = null, this.factory = null, this.pruneEmptyGeometry = !0, this.preserveGeometryCollectionType = !0, this.preserveCollections = !1, this.preserveType = !1;
  }function me() {
    if (this.snapTolerance = 0, this.srcPts = null, this.seg = new ae(), this.allowSnappingToSourceVertices = !1, this._isClosed = !1, arguments[0] instanceof It && "number" == typeof arguments[1]) {
      var t = arguments[0],
          e = arguments[1];me.call(this, t.getCoordinates(), e);
    } else if (arguments[0] instanceof Array && "number" == typeof arguments[1]) {
      var n = arguments[0],
          i = arguments[1];this.srcPts = n, this._isClosed = me.isClosed(n), this.snapTolerance = i;
    }
  }function ve() {
    this.srcGeom = null;var t = arguments[0];this.srcGeom = t;
  }function ye() {
    if (pe.apply(this), this.snapTolerance = null, this.snapPts = null, this.isSelfSnap = !1, 2 === arguments.length) {
      var t = arguments[0],
          e = arguments[1];this.snapTolerance = t, this.snapPts = e;
    } else if (3 === arguments.length) {
      var n = arguments[0],
          i = arguments[1],
          r = arguments[2];this.snapTolerance = n, this.snapPts = i, this.isSelfSnap = r;
    }
  }function xe() {
    this.isFirst = !0, this.commonMantissaBitsCount = 53, this.commonBits = 0, this.commonSignExp = null;
  }function Ee() {
    this.commonCoord = null, this.ccFilter = new Ie();
  }function Ie() {
    this.commonBitsX = new xe(), this.commonBitsY = new xe();
  }function Ne() {
    this.trans = null;var t = arguments[0];this.trans = t;
  }function Ce() {
    this.parent = null, this.atStart = null, this.max = null, this.index = null, this.subcollectionIterator = null;var t = arguments[0];this.parent = t, this.atStart = !0, this.index = 0, this.max = t.getNumGeometries();
  }function Se() {
    if (this.boundaryRule = q.OGC_SFS_BOUNDARY_RULE, this.isIn = null, this.numBoundaries = null, 0 === arguments.length) ;else if (1 === arguments.length) {
      var t = arguments[0];if (null === t) throw new n("Rule must be non-null");this.boundaryRule = t;
    }
  }function we() {}function Le() {}function Re() {
    this.pts = null, this.data = null;var t = arguments[0],
        e = arguments[1];this.pts = t, this.data = e;
  }function Te() {}function Pe() {
    this.bounds = null, this.item = null;var t = arguments[0],
        e = arguments[1];this.bounds = t, this.item = e;
  }function be() {
    this._size = null, this.items = null, this._size = 0, this.items = new x(), this.items.add(null);
  }function Oe() {}function _e() {}function Me() {
    if (this.childBoundables = new x(), this.bounds = null, this.level = null, 0 === arguments.length) ;else if (1 === arguments.length) {
      var t = arguments[0];this.level = t;
    }
  }function De() {
    this.boundable1 = null, this.boundable2 = null, this._distance = null, this.itemDistance = null;var t = arguments[0],
        e = arguments[1],
        n = arguments[2];this.boundable1 = t, this.boundable2 = e, this.itemDistance = n, this._distance = this.distance();
  }function Ae() {
    if (this.root = null, this.built = !1, this.itemBoundables = new x(), this.nodeCapacity = null, 0 === arguments.length) Ae.call(this, Ae.DEFAULT_NODE_CAPACITY);else if (1 === arguments.length) {
      var t = arguments[0];h.isTrue(t > 1, "Node capacity must be greater than 1"), this.nodeCapacity = t;
    }
  }function Fe() {}function Ge() {}function qe() {
    if (0 === arguments.length) qe.call(this, qe.DEFAULT_NODE_CAPACITY);else if (1 === arguments.length) {
      var t = arguments[0];Ae.call(this, t);
    }
  }function Be() {
    var t = arguments[0];Me.call(this, t);
  }function ze() {}function Ve() {
    this.segString = null, this.coord = null, this.segmentIndex = null, this.segmentOctant = null, this._isInterior = null;var t = arguments[0],
        e = arguments[1],
        n = arguments[2],
        i = arguments[3];this.segString = t, this.coord = new c(e), this.segmentIndex = n, this.segmentOctant = i, this._isInterior = !e.equals2D(t.getCoordinate(n));
  }function ke() {
    this.nodeMap = new et(), this.edge = null;var t = arguments[0];this.edge = t;
  }function Ye() {
    this.nodeList = null, this.edge = null, this.nodeIt = null, this.currNode = null, this.nextNode = null, this.currSegIndex = 0;var t = arguments[0];this.nodeList = t, this.edge = t.getEdge(), this.nodeIt = t.iterator(), this.readNextNode();
  }function Ue() {}function Xe() {
    this.nodeList = new ke(this), this.pts = null, this.data = null;var t = arguments[0],
        e = arguments[1];this.pts = t, this.data = e;
  }function He() {
    this.tempEnv1 = new I(), this.tempEnv2 = new I(), this.overlapSeg1 = new ae(), this.overlapSeg2 = new ae();
  }function We() {
    this.pts = null, this.start = null, this.end = null, this.env = null, this.context = null, this.id = null;var t = arguments[0],
        e = arguments[1],
        n = arguments[2],
        i = arguments[3];this.pts = t, this.start = e, this.end = n, this.context = i;
  }function je() {}function Ke() {}function Ze() {}function Qe() {
    if (this.segInt = null, 0 === arguments.length) ;else if (1 === arguments.length) {
      var t = arguments[0];this.setSegmentIntersector(t);
    }
  }function Je() {
    if (this.monoChains = new x(), this.index = new qe(), this.idCounter = 0, this.nodedSegStrings = null, this.nOverlaps = 0, 0 === arguments.length) ;else if (1 === arguments.length) {
      var t = arguments[0];Qe.call(this, t);
    }
  }function $e() {
    He.apply(this), this.si = null;var t = arguments[0];this.si = t;
  }function tn() {
    if (this.pt = null, 1 === arguments.length) {
      var t = arguments[0];u.call(this, t);
    } else if (2 === arguments.length) {
      var e = arguments[0],
          n = arguments[1];u.call(this, tn.msgWithCoord(e, n)), this.name = "TopologyException", this.pt = new c(n);
    }
  }function en() {}function nn() {
    this.findAllIntersections = !1, this.isCheckEndSegmentsOnly = !1, this.li = null, this.interiorIntersection = null, this.intSegments = null, this.intersections = new x(), this.intersectionCount = 0, this.keepIntersections = !0;var t = arguments[0];this.li = t, this.interiorIntersection = null;
  }function rn() {
    this.li = new ie(), this.segStrings = null, this.findAllIntersections = !1, this.segInt = null, this._isValid = !0;var t = arguments[0];this.segStrings = t;
  }function sn() {
    this.nv = null;var t = arguments[0];this.nv = new rn(sn.toSegmentStrings(t));
  }function on() {
    this.mapOp = null;var t = arguments[0];this.mapOp = t;
  }function an() {}function un() {
    if (this.location = null, 1 === arguments.length) {
      if (arguments[0] instanceof Array) {
        var t = arguments[0];this.init(t.length);
      } else if (Number.isInteger(arguments[0])) {
        var e = arguments[0];this.init(1), this.location[an.ON] = e;
      } else if (arguments[0] instanceof un) {
        var n = arguments[0];if (this.init(n.location.length), null !== n) for (var i = 0; i < this.location.length; i++) {
          this.location[i] = n.location[i];
        }
      }
    } else if (3 === arguments.length) {
      var r = arguments[0],
          s = arguments[1],
          o = arguments[2];this.init(3), this.location[an.ON] = r, this.location[an.LEFT] = s, this.location[an.RIGHT] = o;
    }
  }function ln() {
    if (this.elt = new Array(2).fill(null), 1 === arguments.length) {
      if (Number.isInteger(arguments[0])) {
        var t = arguments[0];this.elt[0] = new un(t), this.elt[1] = new un(t);
      } else if (arguments[0] instanceof ln) {
        var e = arguments[0];this.elt[0] = new un(e.elt[0]), this.elt[1] = new un(e.elt[1]);
      }
    } else if (2 === arguments.length) {
      var n = arguments[0],
          i = arguments[1];this.elt[0] = new un(S.NONE), this.elt[1] = new un(S.NONE), this.elt[n].setLocation(i);
    } else if (3 === arguments.length) {
      var r = arguments[0],
          s = arguments[1],
          o = arguments[2];this.elt[0] = new un(r, s, o), this.elt[1] = new un(r, s, o);
    } else if (4 === arguments.length) {
      var a = arguments[0],
          u = arguments[1],
          l = arguments[2],
          h = arguments[3];this.elt[0] = new un(S.NONE, S.NONE, S.NONE), this.elt[1] = new un(S.NONE, S.NONE, S.NONE), this.elt[a].setLocations(u, l, h);
    }
  }function hn() {
    this.startDe = null, this.maxNodeDegree = -1, this.edges = new x(), this.pts = new x(), this.label = new ln(S.NONE), this.ring = null, this._isHole = null, this.shell = null, this.holes = new x(), this.geometryFactory = null;var t = arguments[0],
        e = arguments[1];this.geometryFactory = e, this.computePoints(t), this.computeRing();
  }function cn() {
    var t = arguments[0],
        e = arguments[1];hn.call(this, t, e);
  }function fn() {
    var t = arguments[0],
        e = arguments[1];hn.call(this, t, e);
  }function gn() {
    if (this.label = null, this._isInResult = !1, this._isCovered = !1, this._isCoveredSet = !1, this._isVisited = !1, 0 === arguments.length) ;else if (1 === arguments.length) {
      var t = arguments[0];this.label = t;
    }
  }function dn() {
    gn.apply(this), this.coord = null, this.edges = null;var t = arguments[0],
        e = arguments[1];this.coord = t, this.edges = e, this.label = new ln(0, S.NONE);
  }function pn() {
    this.nodeMap = new et(), this.nodeFact = null;var t = arguments[0];this.nodeFact = t;
  }function mn() {
    if (this.edge = null, this.label = null, this.node = null, this.p0 = null, this.p1 = null, this.dx = null, this.dy = null, this.quadrant = null, 1 === arguments.length) {
      var t = arguments[0];this.edge = t;
    } else if (3 === arguments.length) {
      var e = arguments[0],
          n = arguments[1],
          i = arguments[2];mn.call(this, e, n, i, null);
    } else if (4 === arguments.length) {
      var r = arguments[0],
          s = arguments[1],
          o = arguments[2],
          a = arguments[3];mn.call(this, r), this.init(s, o), this.label = a;
    }
  }function vn() {
    this._isForward = null, this._isInResult = !1, this._isVisited = !1, this.sym = null, this.next = null, this.nextMin = null, this.edgeRing = null, this.minEdgeRing = null, this.depth = [0, -999, -999];var t = arguments[0],
        e = arguments[1];if (mn.call(this, t), this._isForward = e, e) this.init(t.getCoordinate(0), t.getCoordinate(1));else {
      var n = t.getNumPoints() - 1;this.init(t.getCoordinate(n), t.getCoordinate(n - 1));
    }this.computeDirectedLabel();
  }function yn() {}function xn() {
    if (this.edges = new x(), this.nodes = null, this.edgeEndList = new x(), 0 === arguments.length) this.nodes = new pn(new yn());else if (1 === arguments.length) {
      var t = arguments[0];this.nodes = new pn(t);
    }
  }function En() {
    this.geometryFactory = null, this.shellList = new x();var t = arguments[0];this.geometryFactory = t;
  }function In() {
    this.op = null, this.geometryFactory = null, this.ptLocator = null, this.lineEdgesList = new x(), this.resultLineList = new x();var t = arguments[0],
        e = arguments[1],
        n = arguments[2];this.op = t, this.geometryFactory = e, this.ptLocator = n;
  }function Nn() {
    this.op = null, this.geometryFactory = null, this.resultPointList = new x();var t = arguments[0],
        e = arguments[1];arguments[2];this.op = t, this.geometryFactory = e;
  }function Cn() {}function Sn() {
    this.geom = null;var t = arguments[0];this.geom = t;
  }function wn() {
    this.edgeMap = new et(), this.edgeList = null, this.ptInAreaLocation = [S.NONE, S.NONE];
  }function Ln() {
    wn.apply(this), this.resultAreaEdgeList = null, this.label = null, this.SCANNING_FOR_INCOMING = 1, this.LINKING_TO_OUTGOING = 2;
  }function Rn() {
    yn.apply(this);
  }function Tn() {
    this.mce = null, this.chainIndex = null;var t = arguments[0],
        e = arguments[1];this.mce = t, this.chainIndex = e;
  }function Pn() {
    if (this.label = null, this.xValue = null, this.eventType = null, this.insertEvent = null, this.deleteEventIndex = null, this.obj = null, 2 === arguments.length) {
      var t = arguments[0],
          e = arguments[1];this.eventType = Pn.DELETE, this.xValue = t, this.insertEvent = e;
    } else if (3 === arguments.length) {
      var n = arguments[0],
          i = arguments[1],
          r = arguments[2];this.eventType = Pn.INSERT, this.label = n, this.xValue = i, this.obj = r;
    }
  }function bn() {}function On() {
    this._hasIntersection = !1, this.hasProper = !1, this.hasProperInterior = !1, this.properIntersectionPoint = null, this.li = null, this.includeProper = null, this.recordIsolated = null, this.isSelfIntersection = null, this.numIntersections = 0, this.numTests = 0, this.bdyNodes = null, this._isDone = !1, this.isDoneWhenProperInt = !1;var t = arguments[0],
        e = arguments[1],
        n = arguments[2];this.li = t, this.includeProper = e, this.recordIsolated = n;
  }function _n() {
    bn.apply(this), this.events = new x(), this.nOverlaps = null;
  }function Mn() {
    this.min = i.POSITIVE_INFINITY, this.max = i.NEGATIVE_INFINITY;
  }function Dn() {}function An() {
    Mn.apply(this), this.item = null;var t = arguments[0],
        e = arguments[1],
        n = arguments[2];this.min = t, this.max = e, this.item = n;
  }function Fn() {
    Mn.apply(this), this.node1 = null, this.node2 = null;var t = arguments[0],
        e = arguments[1];this.node1 = t, this.node2 = e, this.buildExtent(this.node1, this.node2);
  }function Gn() {
    this.leaves = new x(), this.root = null, this.level = 0;
  }function qn() {
    if (this.lines = null, this.isForcedToLineString = !1, 1 === arguments.length) {
      var t = arguments[0];this.lines = t;
    } else if (2 === arguments.length) {
      var e = arguments[0],
          n = arguments[1];this.lines = e, this.isForcedToLineString = n;
    }
  }function Bn() {
    this.items = new x();
  }function zn() {
    this.index = null;var t = arguments[0];if (!Zs(t, St)) throw new n("Argument must be Polygonal");this.index = new kn(t);
  }function Vn() {
    this.counter = null;var t = arguments[0];this.counter = t;
  }function kn() {
    this.index = new Gn();var t = arguments[0];this.init(t);
  }function Yn() {
    this.coord = null, this.segmentIndex = null, this.dist = null;var t = arguments[0],
        e = arguments[1],
        n = arguments[2];this.coord = new c(t), this.segmentIndex = e, this.dist = n;
  }function Un() {
    this.nodeMap = new et(), this.edge = null;var t = arguments[0];this.edge = t;
  }function Xn() {}function Hn() {
    this.e = null, this.pts = null, this.startIndex = null, this.env1 = new I(), this.env2 = new I();var t = arguments[0];this.e = t, this.pts = t.getCoordinates();var e = new Xn();this.startIndex = e.getChainStartIndices(this.pts);
  }function Wn() {
    this.depth = Array(2).fill().map(function () {
      return Array(3);
    });for (var t = 0; t < 2; t++) {
      for (var e = 0; e < 3; e++) {
        this.depth[t][e] = Wn.NULL_VALUE;
      }
    }
  }function jn() {
    if (gn.apply(this), this.pts = null, this.env = null, this.eiList = new Un(this), this.name = null, this.mce = null, this._isIsolated = !0, this.depth = new Wn(), this.depthDelta = 0, 1 === arguments.length) {
      var t = arguments[0];jn.call(this, t, null);
    } else if (2 === arguments.length) {
      var e = arguments[0],
          n = arguments[1];this.pts = e, this.label = n;
    }
  }function Kn() {
    if (xn.apply(this), this.parentGeom = null, this.lineEdgeMap = new Zt(), this.boundaryNodeRule = null, this.useBoundaryDeterminationRule = !0, this.argIndex = null, this.boundaryNodes = null, this._hasTooFewPoints = !1, this.invalidPoint = null, this.areaPtLocator = null, this.ptLocator = new Se(), 2 === arguments.length) {
      var t = arguments[0],
          e = arguments[1];Kn.call(this, t, e, q.OGC_SFS_BOUNDARY_RULE);
    } else if (3 === arguments.length) {
      var n = arguments[0],
          i = arguments[1],
          r = arguments[2];this.argIndex = n, this.parentGeom = i, this.boundaryNodeRule = r, null !== i && this.add(i);
    }
  }function Zn() {
    if (this.li = new ie(), this.resultPrecisionModel = null, this.arg = null, 1 === arguments.length) {
      var t = arguments[0];this.setComputationPrecision(t.getPrecisionModel()), this.arg = new Array(1).fill(null), this.arg[0] = new Kn(0, t);
    } else if (2 === arguments.length) {
      var e = arguments[0],
          n = arguments[1];Zn.call(this, e, n, q.OGC_SFS_BOUNDARY_RULE);
    } else if (3 === arguments.length) {
      var i = arguments[0],
          r = arguments[1],
          s = arguments[2];i.getPrecisionModel().compareTo(r.getPrecisionModel()) >= 0 ? this.setComputationPrecision(i.getPrecisionModel()) : this.setComputationPrecision(r.getPrecisionModel()), this.arg = new Array(2).fill(null), this.arg[0] = new Kn(0, i, s), this.arg[1] = new Kn(1, r, s);
    }
  }function Qn() {
    this.pts = null, this._orientation = null;var t = arguments[0];this.pts = t, this._orientation = Qn.orientation(t);
  }function Jn() {
    this.edges = new x(), this.ocaMap = new et();
  }function $n() {
    this.ptLocator = new Se(), this.geomFact = null, this.resultGeom = null, this.graph = null, this.edgeList = new Jn(), this.resultPolyList = new x(), this.resultLineList = new x(), this.resultPointList = new x();var t = arguments[0],
        e = arguments[1];Zn.call(this, t, e), this.graph = new xn(new Rn()), this.geomFact = t.getFactory();
  }function ti() {
    this.geom = new Array(2).fill(null), this.snapTolerance = null, this.cbr = null;var t = arguments[0],
        e = arguments[1];this.geom[0] = t, this.geom[1] = e, this.computeSnapTolerance();
  }function ei() {
    this.geom = new Array(2).fill(null);var t = arguments[0],
        e = arguments[1];this.geom[0] = t, this.geom[1] = e;
  }function ni() {
    this.factory = null, this.interiorPoint = null, this.maxWidth = 0;var t = arguments[0];this.factory = t.getFactory(), this.add(t);
  }function ii() {
    this.poly = null, this.centreY = null, this.hiY = i.MAX_VALUE, this.loY = -i.MAX_VALUE;var t = arguments[0];this.poly = t, this.hiY = t.getEnvelopeInternal().getMaxY(), this.loY = t.getEnvelopeInternal().getMinY(), this.centreY = ni.avg(this.loY, this.hiY);
  }function ri() {
    this.centroid = null, this.minDistance = i.MAX_VALUE, this.interiorPoint = null;var t = arguments[0];this.centroid = t.getCentroid().getCoordinate(), this.addInterior(t), null === this.interiorPoint && this.addEndpoints(t);
  }function si() {
    this.centroid = null, this.minDistance = i.MAX_VALUE, this.interiorPoint = null;var t = arguments[0];this.centroid = t.getCentroid().getCoordinate(), this.add(t);
  }function oi() {
    this.tempEnv1 = new I(), this.selectedSegment = new ae();
  }function ai() {
    this.items = new x(), this.subnode = [null, null];
  }function ui() {
    if (this.min = null, this.max = null, 0 === arguments.length) this.min = 0, this.max = 0;else if (1 === arguments.length) {
      var t = arguments[0];this.init(t.min, t.max);
    } else if (2 === arguments.length) {
      var e = arguments[0],
          n = arguments[1];this.init(e, n);
    }
  }function li() {}function hi(t, e) {
    var n,
        i,
        r,
        s,
        o = { 32: { d: 127, c: 128, b: 0, a: 0 }, 64: { d: 32752, c: 0, b: 0, a: 0 } },
        a = { 32: 8, 64: 11 }[t];if (s || (n = e < 0 || 1 / e < 0, isFinite(e) || (s = o[t], n && (s.d += 1 << t / 4 - 1), i = Math.pow(2, a) - 1, r = 0)), !s) {
      for (i = { 32: 127, 64: 1023 }[t], r = Math.abs(e); r >= 2;) {
        i++, r /= 2;
      }for (; r < 1 && i > 0;) {
        i--, r *= 2;
      }i <= 0 && (r /= 2), 32 === t && i > 254 && (s = { d: n ? 255 : 127, c: 128, b: 0, a: 0 }, i = Math.pow(2, a) - 1, r = 0);
    }return i;
  }function ci() {
    this.pt = 0, this.level = 0, this.interval = null;var t = arguments[0];this.computeKey(t);
  }function fi() {
    ai.apply(this), this.interval = null, this.centre = null, this.level = null;var t = arguments[0],
        e = arguments[1];this.interval = t, this.level = e, this.centre = (t.getMin() + t.getMax()) / 2;
  }function gi() {}function di() {
    ai.apply(this);
  }function pi() {
    this.root = null, this.minExtent = 1, this.root = new di();
  }function mi() {}function vi() {
    this.ring = null, this.tree = null, this.crossings = 0, this.interval = new ui();var t = arguments[0];this.ring = t, this.buildIndex();
  }function yi() {
    oi.apply(this), this.mcp = null, this.p = null;var t = arguments[0],
        e = arguments[1];this.mcp = t, this.p = e;
  }function xi() {}function Ei() {
    this.p0 = null, this.p1 = null, this.p2 = null;var t = arguments[0],
        e = arguments[1],
        n = arguments[2];this.p0 = t, this.p1 = e, this.p2 = n;
  }function Ii() {
    this.input = null, this.extremalPts = null, this.centre = null, this.radius = 0;var t = arguments[0];this.input = t;
  }function Ni() {
    if (this.inputGeom = null, this.isConvex = null, this.convexHullPts = null, this.minBaseSeg = new ae(), this.minWidthPt = null, this.minPtIndex = null, this.minWidth = 0, 1 === arguments.length) {
      var t = arguments[0];Ni.call(this, t, !1);
    } else if (2 === arguments.length) {
      var e = arguments[0],
          n = arguments[1];this.inputGeom = e, this.isConvex = n;
    }
  }function Ci() {
    this.inputGeom = null, this.distanceTolerance = null;var t = arguments[0];this.inputGeom = t;
  }function Si() {
    pe.apply(this), this.distanceTolerance = null;var t = arguments[0];this.distanceTolerance = t;
  }function wi() {
    this._orig = null, this._sym = null, this._next = null;var t = arguments[0];this._orig = t;
  }function Li() {
    this._isMarked = !1;var t = arguments[0];wi.call(this, t);
  }function Ri() {
    this.vertexMap = new Zt();
  }function Ti() {
    this._isStart = !1;var t = arguments[0];Li.call(this, t);
  }function Pi() {
    Ri.apply(this);
  }function bi() {
    this.result = null, this.factory = null, this.graph = null, this.lines = new x(), this.nodeEdgeStack = new ce(), this.ringStartEdge = null, this.graph = new Pi();
  }function Oi() {
    this.items = new x(), this.subnode = new Array(4).fill(null);
  }function _i() {
    this.pt = new c(), this.level = 0, this.env = null;var t = arguments[0];this.computeKey(t);
  }function Mi() {
    Oi.apply(this), this.env = null, this.centrex = null, this.centrey = null, this.level = null;var t = arguments[0],
        e = arguments[1];this.env = t, this.level = e, this.centrex = (t.getMinX() + t.getMaxX()) / 2, this.centrey = (t.getMinY() + t.getMaxY()) / 2;
  }function Di() {
    Oi.apply(this);
  }function Ai() {
    this.root = null, this.minExtent = 1, this.root = new Di();
  }function Fi(t) {
    this.geometryFactory = t || new $t();
  }function Gi(t) {
    this.geometryFactory = t || new $t(), this.precisionModel = this.geometryFactory.getPrecisionModel(), this.parser = new Fi(this.geometryFactory);
  }function qi() {
    this.parser = new Fi(this.geometryFactory);
  }function Bi(t) {
    this.geometryFactory = t || new $t(), this.precisionModel = this.geometryFactory.getPrecisionModel(), this.parser = new te(this.geometryFactory);
  }function zi(t) {
    return [t.x, t.y];
  }function Vi(t, e) {
    this.geometryFactory = t || new $t(), this.ol = e || "undefined" != typeof ol && ol;
  }function ki() {
    if (this.noder = null, this.scaleFactor = null, this.offsetX = null, this.offsetY = null, this.isScaled = !1, 2 === arguments.length) {
      var t = arguments[0],
          e = arguments[1];ki.call(this, t, e, 0, 0);
    } else if (4 === arguments.length) {
      var n = arguments[0],
          i = arguments[1];arguments[2], arguments[3];this.noder = n, this.scaleFactor = i, this.isScaled = !this.isIntegerPrecision();
    }
  }function Yi() {
    if (this.inputGeom = null, this.isClosedEndpointsInInterior = !0, this.nonSimpleLocation = null, 1 === arguments.length) {
      var t = arguments[0];this.inputGeom = t;
    } else if (2 === arguments.length) {
      var e = arguments[0],
          n = arguments[1];this.inputGeom = e, this.isClosedEndpointsInInterior = !n.isInBoundary(2);
    }
  }function Ui() {
    this.pt = null, this.isClosed = null, this.degree = null;var t = arguments[0];this.pt = t, this.isClosed = !1, this.degree = 0;
  }function Xi() {
    if (this.quadrantSegments = Xi.DEFAULT_QUADRANT_SEGMENTS, this.endCapStyle = Xi.CAP_ROUND, this.joinStyle = Xi.JOIN_ROUND, this.mitreLimit = Xi.DEFAULT_MITRE_LIMIT, this._isSingleSided = !1, this.simplifyFactor = Xi.DEFAULT_SIMPLIFY_FACTOR, 0 === arguments.length) ;else if (1 === arguments.length) {
      var t = arguments[0];this.setQuadrantSegments(t);
    } else if (2 === arguments.length) {
      var e = arguments[0],
          n = arguments[1];this.setQuadrantSegments(e), this.setEndCapStyle(n);
    } else if (4 === arguments.length) {
      var i = arguments[0],
          r = arguments[1],
          s = arguments[2],
          o = arguments[3];this.setQuadrantSegments(i), this.setEndCapStyle(r), this.setJoinStyle(s), this.setMitreLimit(o);
    }
  }function Hi() {
    this.minIndex = -1, this.minCoord = null, this.minDe = null, this.orientedDe = null;
  }function Wi() {
    this.array_ = [];
  }function ji() {
    this.finder = null, this.dirEdgeList = new x(), this.nodes = new x(), this.rightMostCoord = null, this.env = null, this.finder = new Hi();
  }function Ki() {
    this.inputLine = null, this.distanceTol = null, this.isDeleted = null, this.angleOrientation = oe.COUNTERCLOCKWISE;var t = arguments[0];this.inputLine = t;
  }function Zi() {
    this.ptList = null, this.precisionModel = null, this.minimimVertexDistance = 0, this.ptList = new x();
  }function Qi() {
    this.maxCurveSegmentError = 0, this.filletAngleQuantum = null, this.closingSegLengthFactor = 1, this.segList = null, this.distance = 0, this.precisionModel = null, this.bufParams = null, this.li = null, this.s0 = null, this.s1 = null, this.s2 = null, this.seg0 = new ae(), this.seg1 = new ae(), this.offset0 = new ae(), this.offset1 = new ae(), this.side = 0, this._hasNarrowConcaveAngle = !1;var t = arguments[0],
        e = arguments[1],
        n = arguments[2];this.precisionModel = t, this.bufParams = e, this.li = new ie(), this.filletAngleQuantum = Math.PI / 2 / e.getQuadrantSegments(), e.getQuadrantSegments() >= 8 && e.getJoinStyle() === Xi.JOIN_ROUND && (this.closingSegLengthFactor = Qi.MAX_CLOSING_SEG_LEN_FACTOR), this.init(n);
  }function Ji() {
    this.distance = 0, this.precisionModel = null, this.bufParams = null;var t = arguments[0],
        e = arguments[1];this.precisionModel = t, this.bufParams = e;
  }function $i() {
    this.subgraphs = null, this.seg = new ae(), this.cga = new oe();var t = arguments[0];this.subgraphs = t;
  }function tr() {
    this.upwardSeg = null, this.leftDepth = null;var t = arguments[0],
        e = arguments[1];this.upwardSeg = new ae(t), this.leftDepth = e;
  }function er() {
    this.inputGeom = null, this.distance = null, this.curveBuilder = null, this.curveList = new x();var t = arguments[0],
        e = arguments[1],
        n = arguments[2];this.inputGeom = t, this.distance = e, this.curveBuilder = n;
  }function nr() {
    this._hasIntersection = !1, this.hasProper = !1, this.hasProperInterior = !1, this.hasInterior = !1, this.properIntersectionPoint = null, this.li = null, this.isSelfIntersection = null, this.numIntersections = 0, this.numInteriorIntersections = 0, this.numProperIntersections = 0, this.numTests = 0;var t = arguments[0];this.li = t;
  }function ir() {
    this.bufParams = null, this.workingPrecisionModel = null, this.workingNoder = null, this.geomFact = null, this.graph = null, this.edgeList = new Jn();var t = arguments[0];this.bufParams = t;
  }function rr() {
    this.li = new ie(), this.segStrings = null;var t = arguments[0];this.segStrings = t;
  }function sr() {
    this.li = null, this.pt = null, this.originalPt = null, this.ptScaled = null, this.p0Scaled = null, this.p1Scaled = null, this.scaleFactor = null, this.minx = null, this.maxx = null, this.miny = null, this.maxy = null, this.corner = new Array(4).fill(null), this.safeEnv = null;var t = arguments[0],
        e = arguments[1],
        i = arguments[2];if (this.originalPt = t, this.pt = t, this.scaleFactor = e, this.li = i, e <= 0) throw new n("Scale factor must be non-zero");1 !== e && (this.pt = new c(this.scale(t.x), this.scale(t.y)), this.p0Scaled = new c(), this.p1Scaled = new c()), this.initCorners(this.pt);
  }function or() {
    this.index = null;var t = arguments[0];this.index = t;
  }function ar() {
    oi.apply(this), this.hotPixel = null, this.parentEdge = null, this.hotPixelVertexIndex = null, this._isNodeAdded = !1;var t = arguments[0],
        e = arguments[1],
        n = arguments[2];this.hotPixel = t, this.parentEdge = e, this.hotPixelVertexIndex = n;
  }function ur() {
    this.li = null, this.interiorIntersections = null;var t = arguments[0];this.li = t, this.interiorIntersections = new x();
  }function lr() {
    this.pm = null, this.li = null, this.scaleFactor = null, this.noder = null, this.pointSnapper = null, this.nodedSegStrings = null;var t = arguments[0];this.pm = t, this.li = new ie(), this.li.setPrecisionModel(t), this.scaleFactor = t.getScale();
  }function hr() {
    if (this.argGeom = null, this.distance = null, this.bufParams = new Xi(), this.resultGeometry = null, this.saveException = null, 1 === arguments.length) {
      var t = arguments[0];this.argGeom = t;
    } else if (2 === arguments.length) {
      var e = arguments[0],
          n = arguments[1];this.argGeom = e, this.bufParams = n;
    }
  }function cr() {
    this.comps = null;var t = arguments[0];this.comps = t;
  }function fr() {
    if (this.component = null, this.segIndex = null, this.pt = null, 2 === arguments.length) {
      var t = arguments[0],
          e = arguments[1];fr.call(this, t, fr.INSIDE_AREA, e);
    } else if (3 === arguments.length) {
      var n = arguments[0],
          i = arguments[1],
          r = arguments[2];this.component = n, this.segIndex = i, this.pt = r;
    }
  }function gr() {
    this.pts = null;var t = arguments[0];this.pts = t;
  }function dr() {
    this.locations = null;var t = arguments[0];this.locations = t;
  }function pr() {
    if (this.geom = null, this.terminateDistance = 0, this.ptLocator = new Se(), this.minDistanceLocation = null, this.minDistance = i.MAX_VALUE, 2 === arguments.length) {
      var t = arguments[0],
          e = arguments[1];pr.call(this, t, e, 0);
    } else if (3 === arguments.length) {
      var n = arguments[0],
          r = arguments[1],
          s = arguments[2];this.geom = new Array(2).fill(null), this.geom[0] = n, this.geom[1] = r, this.terminateDistance = s;
    }
  }function mr() {
    this.factory = null, this.directedEdges = new x(), this.coordinates = null;var t = arguments[0];this.factory = t;
  }function vr() {
    this._isMarked = !1, this._isVisited = !1, this.data = null;
  }function yr() {
    vr.apply(this), this.parentEdge = null, this.from = null, this.to = null, this.p0 = null, this.p1 = null, this.sym = null, this.edgeDirection = null, this.quadrant = null, this.angle = null;var t = arguments[0],
        e = arguments[1],
        n = arguments[2],
        i = arguments[3];this.from = t, this.to = e, this.edgeDirection = i, this.p0 = t.getCoordinate(), this.p1 = n;var r = this.p1.x - this.p0.x,
        s = this.p1.y - this.p0.y;this.quadrant = je.quadrant(r, s), this.angle = Math.atan2(s, r);
  }function xr() {
    var t = arguments[0],
        e = arguments[1],
        n = arguments[2],
        i = arguments[3];yr.call(this, t, e, n, i);
  }function Er() {
    if (vr.apply(this), this.dirEdge = null, 0 === arguments.length) ;else if (2 === arguments.length) {
      var t = arguments[0],
          e = arguments[1];this.setDirectedEdges(t, e);
    }
  }function Ir() {
    this.outEdges = new x(), this.sorted = !1;
  }function Nr() {
    if (vr.apply(this), this.pt = null, this.deStar = null, 1 === arguments.length) {
      var t = arguments[0];Nr.call(this, t, new Ir());
    } else if (2 === arguments.length) {
      var e = arguments[0],
          n = arguments[1];this.pt = e, this.deStar = n;
    }
  }function Cr() {
    Er.apply(this), this.line = null;var t = arguments[0];this.line = t;
  }function Sr() {
    this.nodeMap = new et();
  }function wr() {
    this.edges = new K(), this.dirEdges = new K(), this.nodeMap = new Sr();
  }function Lr() {
    wr.apply(this);
  }function Rr() {
    this.graph = new Lr(), this.mergedLineStrings = null, this.factory = null, this.edgeStrings = null;
  }function Tr() {
    this.edgeRing = null, this.next = null, this.label = -1;var t = arguments[0],
        e = arguments[1],
        n = arguments[2],
        i = arguments[3];yr.call(this, t, e, n, i);
  }function Pr() {
    Er.apply(this), this.line = null;var t = arguments[0];this.line = t;
  }function br() {
    this.geometryFactory = new $t(), this.geomGraph = null, this.disconnectedRingcoord = null;var t = arguments[0];this.geomGraph = t;
  }function Or() {}function _r() {
    if (this.edgeEnds = new x(), 1 === arguments.length) {
      var t = arguments[0];_r.call(this, null, t);
    } else if (2 === arguments.length) {
      var e = (arguments[0], arguments[1]);mn.call(this, e.getEdge(), e.getCoordinate(), e.getDirectedCoordinate(), new ln(e.getLabel())), this.insert(e);
    }
  }function Mr() {
    wn.apply(this);
  }function Dr() {
    var t = arguments[0],
        e = arguments[1];dn.call(this, t, e);
  }function Ar() {
    yn.apply(this);
  }function Fr() {
    this.nodes = new pn(new Ar());
  }function Gr() {
    this.li = new ie(), this.geomGraph = null, this.nodeGraph = new Fr(), this.invalidPoint = null;var t = arguments[0];this.geomGraph = t;
  }function qr() {
    this.graph = null, this.rings = new x(), this.totalEnv = new I(), this.index = null, this.nestedPt = null;var t = arguments[0];this.graph = t;
  }function Br() {
    if (this.errorType = null, this.pt = null, 1 === arguments.length) {
      var t = arguments[0];Br.call(this, t, null);
    } else if (2 === arguments.length) {
      var e = arguments[0],
          n = arguments[1];this.errorType = e, null !== n && (this.pt = n.copy());
    }
  }function zr() {
    this.parentGeometry = null, this.isSelfTouchingRingFormingHoleValid = !1, this.validErr = null;var t = arguments[0];this.parentGeometry = t;
  }function Vr() {
    this.factory = null, this.deList = new x(), this.lowestEdge = null, this.ring = null, this.ringPts = null, this.holes = null, this.shell = null, this._isHole = null, this._isProcessed = !1, this._isIncludedSet = !1, this._isIncluded = !1;var t = arguments[0];this.factory = t;
  }function kr() {}function Yr() {
    wr.apply(this), this.factory = null;var t = arguments[0];this.factory = t;
  }function Ur() {
    if (this.lineStringAdder = new Xr(this), this.graph = null, this.dangles = new x(), this.cutEdges = new x(), this.invalidRingLines = new x(), this.holeList = null, this.shellList = null, this.polyList = null, this.isCheckingRingsValid = !0, this.extractOnlyPolygonal = null, this.geomFactory = null, 0 === arguments.length) Ur.call(this, !1);else if (1 === arguments.length) {
      var t = arguments[0];this.extractOnlyPolygonal = t;
    }
  }function Xr() {
    this.p = null;var t = arguments[0];this.p = t;
  }function Hr() {
    this.li = new ie(), this.ptLocator = new Se(), this.arg = null, this.nodes = new pn(new Ar()), this.im = null, this.isolatedEdges = new x(), this.invalidPoint = null;var t = arguments[0];this.arg = t;
  }function Wr() {
    this.rectEnv = null;var t = arguments[0];this.rectEnv = t.getEnvelopeInternal();
  }function jr() {
    this.li = new ie(), this.rectEnv = null, this.diagUp0 = null, this.diagUp1 = null, this.diagDown0 = null, this.diagDown1 = null;var t = arguments[0];this.rectEnv = t, this.diagUp0 = new c(t.getMinX(), t.getMinY()), this.diagUp1 = new c(t.getMaxX(), t.getMaxY()), this.diagDown0 = new c(t.getMinX(), t.getMaxY()), this.diagDown1 = new c(t.getMaxX(), t.getMinY());
  }function Kr() {
    this._isDone = !1;
  }function Zr() {
    this.rectangle = null, this.rectEnv = null;var t = arguments[0];this.rectangle = t, this.rectEnv = t.getEnvelopeInternal();
  }function Qr() {
    Kr.apply(this), this.rectEnv = null, this._intersects = !1;var t = arguments[0];this.rectEnv = t;
  }function Jr() {
    Kr.apply(this), this.rectSeq = null, this.rectEnv = null, this._containsPoint = !1;var t = arguments[0];this.rectSeq = t.getExteriorRing().getCoordinateSequence(), this.rectEnv = t.getEnvelopeInternal();
  }function $r() {
    Kr.apply(this), this.rectEnv = null, this.rectIntersector = null, this.hasIntersection = !1, this.p0 = new c(), this.p1 = new c();var t = arguments[0];this.rectEnv = t.getEnvelopeInternal(), this.rectIntersector = new jr(this.rectEnv);
  }function ts() {
    if (this._relate = null, 2 === arguments.length) {
      var t = arguments[0],
          e = arguments[1];Zn.call(this, t, e), this._relate = new Hr(this.arg);
    } else if (3 === arguments.length) {
      var n = arguments[0],
          i = arguments[1],
          r = arguments[2];Zn.call(this, n, i, r), this._relate = new Hr(this.arg);
    }
  }function es() {
    this.geomFactory = null, this.skipEmpty = !1, this.inputGeoms = null;var t = arguments[0];this.geomFactory = es.extractFactory(t), this.inputGeoms = t;
  }function ns() {
    this.pointGeom = null, this.otherGeom = null, this.geomFact = null;var t = arguments[0],
        e = arguments[1];this.pointGeom = t, this.otherGeom = e, this.geomFact = e.getFactory();
  }function is() {
    this.sortIndex = -1, this.comps = null;var t = arguments[0],
        e = arguments[1];this.sortIndex = t, this.comps = e;
  }function rs() {
    this.inputPolys = null, this.geomFactory = null;var t = arguments[0];this.inputPolys = t, null === this.inputPolys && (this.inputPolys = new x());
  }function ss() {
    if (this.polygons = new x(), this.lines = new x(), this.points = new x(), this.geomFact = null, 1 === arguments.length) {
      if (Zs(arguments[0], d)) {
        var t = arguments[0];this.extract(t);
      } else if (arguments[0] instanceof F) {
        var e = arguments[0];this.extract(e);
      }
    } else if (2 === arguments.length) {
      var n = arguments[0],
          i = arguments[1];this.geomFact = i, this.extract(n);
    }
  }function os() {
    Pt.CoordinateOperation.apply(this), this.targetPM = null, this.removeCollapsed = !0;var t = arguments[0],
        e = arguments[1];this.targetPM = t, this.removeCollapsed = e;
  }function as() {
    this.targetPM = null, this.removeCollapsed = !0, this.changePrecisionModel = !1, this.isPointwise = !1;var t = arguments[0];this.targetPM = t;
  }function us() {
    this.pts = null, this.usePt = null, this.distanceTolerance = null, this.seg = new ae();var t = arguments[0];this.pts = t;
  }function ls() {
    this.inputGeom = null, this.distanceTolerance = null, this.isEnsureValidTopology = !0;var t = arguments[0];this.inputGeom = t;
  }function hs() {
    pe.apply(this), this.isEnsureValidTopology = !0, this.distanceTolerance = null;var t = arguments[0],
        e = arguments[1];this.isEnsureValidTopology = t, this.distanceTolerance = e;
  }function cs() {
    if (this.parent = null, this.index = null, 2 === arguments.length) {
      var t = arguments[0],
          e = arguments[1];cs.call(this, t, e, null, -1);
    } else if (4 === arguments.length) {
      var n = arguments[0],
          i = arguments[1],
          r = arguments[2],
          s = arguments[3];ae.call(this, n, i), this.parent = r, this.index = s;
    }
  }function fs() {
    if (this.parentLine = null, this.segs = null, this.resultSegs = new x(), this.minimumSize = null, 1 === arguments.length) {
      var t = arguments[0];fs.call(this, t, 2);
    } else if (2 === arguments.length) {
      var e = arguments[0],
          n = arguments[1];this.parentLine = e, this.minimumSize = n, this.init();
    }
  }function gs() {
    this.index = new Ai();
  }function ds() {
    this.querySeg = null, this.items = new x();var t = arguments[0];this.querySeg = t;
  }function ps() {
    this.li = new ie(), this.inputIndex = new gs(), this.outputIndex = new gs(), this.line = null, this.linePts = null, this.distanceTolerance = 0;var t = arguments[0],
        e = arguments[1];this.inputIndex = t, this.outputIndex = e;
  }function ms() {
    this.inputIndex = new gs(), this.outputIndex = new gs(), this.distanceTolerance = 0;
  }function vs() {
    this.inputGeom = null, this.lineSimplifier = new ms(), this.linestringMap = null;var t = arguments[0];this.inputGeom = t;
  }function ys() {
    pe.apply(this), this.linestringMap = null;var t = arguments[0];this.linestringMap = t;
  }function xs() {
    this.tps = null;var t = arguments[0];this.tps = t;
  }function Es() {
    this.seg = null, this.segLen = null, this.splitPt = null, this.minimumLen = 0;var t = arguments[0];this.seg = t, this.segLen = t.getLength();
  }function Is() {}function Ns() {}function Cs() {}function Ss() {
    if (this.p = null, 1 === arguments.length) {
      var t = arguments[0];this.p = new c(t);
    } else if (2 === arguments.length) {
      var e = arguments[0],
          n = arguments[1];this.p = new c(e, n);
    } else if (3 === arguments.length) {
      var i = arguments[0],
          r = arguments[1],
          s = arguments[2];this.p = new c(i, r, s);
    }
  }function ws() {
    this._isOnConstraint = null, this.constraint = null;var t = arguments[0];Ss.call(this, t);
  }function Ls() {
    this._rot = null, this.vertex = null, this.next = null, this.data = null;
  }function Rs() {
    this.subdiv = null, this.isUsingTolerance = !1;var t = arguments[0];this.subdiv = t, this.isUsingTolerance = t.getTolerance() > 0;
  }function Ts() {}function Ps() {
    this.subdiv = null, this.lastEdge = null;var t = arguments[0];this.subdiv = t, this.init();
  }function bs() {
    if (this.seg = null, 1 === arguments.length) {
      if ("string" == typeof arguments[0]) {
        var t = arguments[0];u.call(this, t);
      } else if (arguments[0] instanceof ae) {
        var e = arguments[0];u.call(this, "Locate failed to converge (at edge: " + e + ").  Possible causes include invalid Subdivision topology or very close sites"), this.seg = new ae(e);
      }
    } else if (2 === arguments.length) {
      var n = arguments[0],
          i = arguments[1];u.call(this, bs.msgWithSpatial(n, i)), this.seg = new ae(i);
    }
  }function Os() {}function _s() {
    this.visitedKey = 0, this.quadEdges = new x(), this.startingEdge = null, this.tolerance = null, this.edgeCoincidenceTolerance = null, this.frameVertex = new Array(3).fill(null), this.frameEnv = null, this.locator = null, this.seg = new ae(), this.triEdges = new Array(3).fill(null);var t = arguments[0],
        e = arguments[1];this.tolerance = e, this.edgeCoincidenceTolerance = e / _s.EDGE_COINCIDENCE_TOL_FACTOR, this.createFrame(t), this.startingEdge = this.initSubdiv(), this.locator = new Ps(this);
  }function Ms() {}function Ds() {
    this.triList = new x();
  }function As() {
    this.triList = new x();
  }function Fs() {
    this.coordList = new E(), this.triCoords = new x();
  }function Gs() {
    if (this.ls = null, this.data = null, 2 === arguments.length) {
      var t = arguments[0],
          e = arguments[1];this.ls = new ae(t, e);
    } else if (3 === arguments.length) {
      var n = arguments[0],
          i = arguments[1],
          r = arguments[2];this.ls = new ae(n, i), this.data = r;
    } else if (6 === arguments.length) {
      var s = arguments[0],
          o = arguments[1],
          a = arguments[2],
          u = arguments[3],
          l = arguments[4],
          h = arguments[5];Gs.call(this, new c(s, o, a), new c(u, l, h));
    } else if (7 === arguments.length) {
      var f = arguments[0],
          g = arguments[1],
          d = arguments[2],
          p = arguments[3],
          m = arguments[4],
          v = arguments[5],
          y = arguments[6];Gs.call(this, new c(f, g, d), new c(p, m, v), y);
    }
  }function qs() {}function Bs() {
    if (this.p = null, this.data = null, this.left = null, this.right = null, this.count = null, 2 === arguments.length) {
      var t = arguments[0],
          e = arguments[1];this.p = new c(t), this.left = null, this.right = null, this.count = 1, this.data = e;
    } else if (3 === arguments.length) {
      var n = arguments[0],
          i = arguments[1],
          r = arguments[2];this.p = new c(n, i), this.left = null, this.right = null, this.count = 1, this.data = r;
    }
  }function zs() {
    if (this.root = null, this.numberOfNodes = null, this.tolerance = null, 0 === arguments.length) zs.call(this, 0);else if (1 === arguments.length) {
      var t = arguments[0];this.tolerance = t;
    }
  }function Vs() {
    this.tolerance = null, this.matchNode = null, this.matchDist = 0, this.p = null;var t = arguments[0],
        e = arguments[1];this.p = t, this.tolerance = e;
  }function ks() {
    this.initialVertices = null, this.segVertices = null, this.segments = new x(), this.subdiv = null, this.incDel = null, this.convexHull = null, this.splitFinder = new Ns(), this.kdt = null, this.vertexFactory = null, this.computeAreaEnv = null, this.splitPt = null, this.tolerance = null;var t = arguments[0],
        e = arguments[1];this.initialVertices = new x(t), this.tolerance = e, this.kdt = new zs(e);
  }function Ys() {
    this.siteCoords = null, this.tolerance = 0, this.subdiv = null;
  }function Us() {
    this.siteCoords = null, this.constraintLines = null, this.tolerance = 0, this.subdiv = null, this.constraintVertexMap = new et();
  }function Xs() {
    this.siteCoords = null, this.tolerance = 0, this.subdiv = null, this.clipEnv = null, this.diagramEnv = null;
  }function Hs() {}"fill" in Array.prototype || Object.defineProperty(Array.prototype, "fill", { configurable: !0, value: function value(t) {
      if (void 0 === this || null === this) throw new TypeError(this + " is not an object");var e = Object(this),
          n = Math.max(Math.min(e.length, 9007199254740991), 0) || 0,
          i = 1 in arguments ? parseInt(Number(arguments[1]), 10) || 0 : 0;i = i < 0 ? Math.max(n + i, 0) : Math.min(i, n);var r = 2 in arguments && void 0 !== arguments[2] ? parseInt(Number(arguments[2]), 10) || 0 : n;for (r = r < 0 ? Math.max(n + arguments[2], 0) : Math.min(r, n); i < r;) {
        e[i] = t, ++i;
      }return e;
    }, writable: !0 }), Number.isFinite = Number.isFinite || function (t) {
    return "number" == typeof t && isFinite(t);
  }, Number.isInteger = Number.isInteger || function (t) {
    return "number" == typeof t && isFinite(t) && Math.floor(t) === t;
  }, Number.parseFloat = Number.parseFloat || parseFloat, Number.isNaN = Number.isNaN || function (t) {
    return t !== t;
  }, Math.trunc = Math.trunc || function (t) {
    return t < 0 ? Math.ceil(t) : Math.floor(t);
  };var Ws = function Ws(t, e) {
    for (var n in e) {
      e.hasOwnProperty(n) && (t[n] = e[n]);
    }
  };Ws(e.prototype, { interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return e;
    } }), e.equalsWithTolerance = function (t, e, n) {
    return Math.abs(t - e) <= n;
  }, i.isNaN = function (t) {
    return Number.isNaN(t);
  }, i.doubleToLongBits = function (t) {
    return t;
  }, i.longBitsToDouble = function (t) {
    return t;
  }, i.isInfinite = function (t) {
    return !Number.isFinite(t);
  }, i.MAX_VALUE = Number.MAX_VALUE, u.prototype = Object.create(Error.prototype), u.prototype.constructor = Error;var js = function js(t, e) {
    t.prototype = Object.create(e.prototype), t.prototype.constructor = t;
  };js(l, u), Ws(l.prototype, { interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return l;
    } }), Ws(h.prototype, { interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return h;
    } }), h.shouldNeverReachHere = function () {
    if (0 === arguments.length) h.shouldNeverReachHere(null);else if (1 === arguments.length) {
      var t = arguments[0];throw new l("Should never reach here" + (null !== t ? ": " + t : ""));
    }
  }, h.isTrue = function () {
    if (1 === arguments.length) {
      var t = arguments[0];h.isTrue(t, null);
    } else if (2 === arguments.length) {
      var e = arguments[0],
          n = arguments[1];if (!e) throw null === n ? new l() : new l(n);
    }
  }, h.equals = function () {
    if (2 === arguments.length) {
      var t = arguments[0],
          e = arguments[1];h.equals(t, e, null);
    } else if (3 === arguments.length) {
      var n = arguments[0],
          i = arguments[1],
          r = arguments[2];if (!i.equals(n)) throw new l("Expected " + n + " but encountered " + i + (null !== r ? ": " + r : ""));
    }
  }, Ws(c.prototype, { setOrdinate: function setOrdinate(t, e) {
      switch (t) {case c.X:
          this.x = e;break;case c.Y:
          this.y = e;break;case c.Z:
          this.z = e;break;default:
          throw new n("Invalid ordinate index: " + t);}
    }, equals2D: function equals2D() {
      if (1 === arguments.length) {
        var t = arguments[0];return this.x === t.x && this.y === t.y;
      }if (2 === arguments.length) {
        var n = arguments[0],
            i = arguments[1];return !!e.equalsWithTolerance(this.x, n.x, i) && !!e.equalsWithTolerance(this.y, n.y, i);
      }
    }, getOrdinate: function getOrdinate(t) {
      switch (t) {case c.X:
          return this.x;case c.Y:
          return this.y;case c.Z:
          return this.z;}throw new n("Invalid ordinate index: " + t);
    }, equals3D: function equals3D(t) {
      return this.x === t.x && this.y === t.y && (this.z === t.z || i.isNaN(this.z) && i.isNaN(t.z));
    }, equals: function equals(t) {
      return t instanceof c && this.equals2D(t);
    }, equalInZ: function equalInZ(t, n) {
      return e.equalsWithTolerance(this.z, t.z, n);
    }, compareTo: function compareTo(t) {
      var e = t;return this.x < e.x ? -1 : this.x > e.x ? 1 : this.y < e.y ? -1 : this.y > e.y ? 1 : 0;
    }, clone: function clone() {
      try {
        return null;
      } catch (t) {
        if (t instanceof CloneNotSupportedException) return h.shouldNeverReachHere("this shouldn't happen because this class is Cloneable"), null;throw t;
      } finally {}
    }, copy: function copy() {
      return new c(this);
    }, toString: function toString() {
      return "(" + this.x + ", " + this.y + ", " + this.z + ")";
    }, distance3D: function distance3D(t) {
      var e = this.x - t.x,
          n = this.y - t.y,
          i = this.z - t.z;return Math.sqrt(e * e + n * n + i * i);
    }, distance: function distance(t) {
      var e = this.x - t.x,
          n = this.y - t.y;return Math.sqrt(e * e + n * n);
    }, hashCode: function hashCode() {
      var t = 17;return t = 37 * t + c.hashCode(this.x), t = 37 * t + c.hashCode(this.y);
    }, setCoordinate: function setCoordinate(t) {
      this.x = t.x, this.y = t.y, this.z = t.z;
    }, interfaces_: function interfaces_() {
      return [r, s, a];
    }, getClass: function getClass() {
      return c;
    } }), c.hashCode = function () {
    if (1 === arguments.length) {
      var t = arguments[0],
          e = i.doubleToLongBits(t);return Math.trunc(e ^ e >>> 32);
    }
  }, Ws(f.prototype, { compare: function compare(t, e) {
      var n = t,
          i = e,
          r = f.compare(n.x, i.x);if (0 !== r) return r;var s = f.compare(n.y, i.y);return 0 !== s ? s : this.dimensionsToTest <= 2 ? 0 : f.compare(n.z, i.z);
    }, interfaces_: function interfaces_() {
      return [o];
    }, getClass: function getClass() {
      return f;
    } }), f.compare = function (t, e) {
    return t < e ? -1 : t > e ? 1 : i.isNaN(t) ? i.isNaN(e) ? 0 : -1 : i.isNaN(e) ? 1 : 0;
  }, c.DimensionalComparator = f, c.serialVersionUID = 0x5cbf2c235c7e5800, c.NULL_ORDINATE = i.NaN, c.X = 0, c.Y = 1, c.Z = 2, g.prototype.hasNext = function () {}, g.prototype.next = function () {}, g.prototype.remove = function () {}, d.prototype.add = function () {}, d.prototype.addAll = function () {}, d.prototype.isEmpty = function () {}, d.prototype.iterator = function () {}, d.prototype.size = function () {}, d.prototype.toArray = function () {}, d.prototype.remove = function () {}, p.prototype = new Error(), p.prototype.name = "IndexOutOfBoundsException", m.prototype = Object.create(d.prototype), m.prototype.constructor = m, m.prototype.get = function () {}, m.prototype.set = function () {}, m.prototype.isEmpty = function () {}, v.prototype = new Error(), v.prototype.name = "NoSuchElementException", y.prototype = new Error(), y.prototype.name = "OperationNotSupported", x.prototype = Object.create(m.prototype), x.prototype.constructor = x, x.prototype.ensureCapacity = function () {}, x.prototype.interfaces_ = function () {
    return [m, d];
  }, x.prototype.add = function (t) {
    return 1 === arguments.length ? this.array_.push(t) : this.array_.splice(arguments[0], arguments[1]), !0;
  }, x.prototype.clear = function () {
    this.array_ = [];
  }, x.prototype.addAll = function (t) {
    for (var e = t.iterator(); e.hasNext();) {
      this.add(e.next());
    }return !0;
  }, x.prototype.set = function (t, e) {
    var n = this.array_[t];return this.array_[t] = e, n;
  }, x.prototype.iterator = function () {
    return new Ks(this);
  }, x.prototype.get = function (t) {
    if (t < 0 || t >= this.size()) throw new p();return this.array_[t];
  }, x.prototype.isEmpty = function () {
    return 0 === this.array_.length;
  }, x.prototype.size = function () {
    return this.array_.length;
  }, x.prototype.toArray = function () {
    for (var t = [], e = 0, n = this.array_.length; e < n; e++) {
      t.push(this.array_[e]);
    }return t;
  }, x.prototype.remove = function (t) {
    for (var e = !1, n = 0, i = this.array_.length; n < i; n++) {
      if (this.array_[n] === t) {
        this.array_.splice(n, 1), e = !0;break;
      }
    }return e;
  };var Ks = function Ks(t) {
    this.arrayList_ = t, this.position_ = 0;
  };Ks.prototype.next = function () {
    if (this.position_ === this.arrayList_.size()) throw new v();return this.arrayList_.get(this.position_++);
  }, Ks.prototype.hasNext = function () {
    return this.position_ < this.arrayList_.size();
  }, Ks.prototype.set = function (t) {
    return this.arrayList_.set(this.position_ - 1, t);
  }, Ks.prototype.remove = function () {
    this.arrayList_.remove(this.arrayList_.get(this.position_));
  }, js(E, x), Ws(E.prototype, { getCoordinate: function getCoordinate(t) {
      return this.get(t);
    }, addAll: function addAll() {
      if (2 === arguments.length) {
        for (var t = arguments[0], e = arguments[1], n = !1, i = t.iterator(); i.hasNext();) {
          this.add(i.next(), e), n = !0;
        }return n;
      }return x.prototype.addAll.apply(this, arguments);
    }, clone: function clone() {
      for (var t = x.prototype.clone.call(this), e = 0; e < this.size(); e++) {
        t.add(e, this.get(e).copy());
      }return t;
    }, toCoordinateArray: function toCoordinateArray() {
      return this.toArray(E.coordArrayType);
    }, add: function add() {
      if (1 === arguments.length) {
        var t = arguments[0];x.prototype.add.call(this, t);
      } else if (2 === arguments.length) {
        if (arguments[0] instanceof Array && "boolean" == typeof arguments[1]) {
          var e = arguments[0],
              n = arguments[1];return this.add(e, n, !0), !0;
        }if (arguments[0] instanceof c && "boolean" == typeof arguments[1]) {
          var i = arguments[0],
              r = arguments[1];if (!r && this.size() >= 1) {
            var s = this.get(this.size() - 1);if (s.equals2D(i)) return null;
          }x.prototype.add.call(this, i);
        } else if (arguments[0] instanceof Object && "boolean" == typeof arguments[1]) {
          var o = arguments[0],
              a = arguments[1];return this.add(o, a), !0;
        }
      } else if (3 === arguments.length) {
        if ("boolean" == typeof arguments[2] && arguments[0] instanceof Array && "boolean" == typeof arguments[1]) {
          var u = arguments[0],
              l = arguments[1],
              h = arguments[2];if (h) for (var f = 0; f < u.length; f++) {
            this.add(u[f], l);
          } else for (var f = u.length - 1; f >= 0; f--) {
            this.add(u[f], l);
          }return !0;
        }if ("boolean" == typeof arguments[2] && Number.isInteger(arguments[0]) && arguments[1] instanceof c) {
          var g = arguments[0],
              d = arguments[1],
              p = arguments[2];if (!p) {
            var m = this.size();if (m > 0) {
              if (g > 0) {
                var v = this.get(g - 1);if (v.equals2D(d)) return null;
              }if (g < m) {
                var y = this.get(g);if (y.equals2D(d)) return null;
              }
            }
          }x.prototype.add.call(this, g, d);
        }
      } else if (4 === arguments.length) {
        var E = arguments[0],
            I = arguments[1],
            N = arguments[2],
            C = arguments[3],
            S = 1;N > C && (S = -1);for (var f = N; f !== C; f += S) {
          this.add(E[f], I);
        }return !0;
      }
    }, closeRing: function closeRing() {
      this.size() > 0 && this.add(new c(this.get(0)), !1);
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return E;
    } }), E.coordArrayType = new Array(0).fill(null), Ws(I.prototype, { getArea: function getArea() {
      return this.getWidth() * this.getHeight();
    }, equals: function equals(t) {
      if (!(t instanceof I)) return !1;var e = t;return this.isNull() ? e.isNull() : this.maxx === e.getMaxX() && this.maxy === e.getMaxY() && this.minx === e.getMinX() && this.miny === e.getMinY();
    }, intersection: function intersection(t) {
      if (this.isNull() || t.isNull() || !this.intersects(t)) return new I();var e = this.minx > t.minx ? this.minx : t.minx,
          n = this.miny > t.miny ? this.miny : t.miny;return new I(e, this.maxx < t.maxx ? this.maxx : t.maxx, n, this.maxy < t.maxy ? this.maxy : t.maxy);
    }, isNull: function isNull() {
      return this.maxx < this.minx;
    }, getMaxX: function getMaxX() {
      return this.maxx;
    }, covers: function covers() {
      if (1 === arguments.length) {
        if (arguments[0] instanceof c) {
          var t = arguments[0];return this.covers(t.x, t.y);
        }if (arguments[0] instanceof I) {
          var e = arguments[0];return !this.isNull() && !e.isNull() && e.getMinX() >= this.minx && e.getMaxX() <= this.maxx && e.getMinY() >= this.miny && e.getMaxY() <= this.maxy;
        }
      } else if (2 === arguments.length) {
        var n = arguments[0],
            i = arguments[1];return !this.isNull() && n >= this.minx && n <= this.maxx && i >= this.miny && i <= this.maxy;
      }
    }, intersects: function intersects() {
      if (1 === arguments.length) {
        if (arguments[0] instanceof I) {
          var t = arguments[0];return !this.isNull() && !t.isNull() && !(t.minx > this.maxx || t.maxx < this.minx || t.miny > this.maxy || t.maxy < this.miny);
        }if (arguments[0] instanceof c) {
          var e = arguments[0];return this.intersects(e.x, e.y);
        }
      } else if (2 === arguments.length) {
        var n = arguments[0],
            i = arguments[1];return !this.isNull() && !(n > this.maxx || n < this.minx || i > this.maxy || i < this.miny);
      }
    }, getMinY: function getMinY() {
      return this.miny;
    }, getMinX: function getMinX() {
      return this.minx;
    }, expandToInclude: function expandToInclude() {
      if (1 === arguments.length) {
        if (arguments[0] instanceof c) {
          var t = arguments[0];this.expandToInclude(t.x, t.y);
        } else if (arguments[0] instanceof I) {
          var e = arguments[0];if (e.isNull()) return null;this.isNull() ? (this.minx = e.getMinX(), this.maxx = e.getMaxX(), this.miny = e.getMinY(), this.maxy = e.getMaxY()) : (e.minx < this.minx && (this.minx = e.minx), e.maxx > this.maxx && (this.maxx = e.maxx), e.miny < this.miny && (this.miny = e.miny), e.maxy > this.maxy && (this.maxy = e.maxy));
        }
      } else if (2 === arguments.length) {
        var n = arguments[0],
            i = arguments[1];this.isNull() ? (this.minx = n, this.maxx = n, this.miny = i, this.maxy = i) : (n < this.minx && (this.minx = n), n > this.maxx && (this.maxx = n), i < this.miny && (this.miny = i), i > this.maxy && (this.maxy = i));
      }
    }, minExtent: function minExtent() {
      if (this.isNull()) return 0;var t = this.getWidth(),
          e = this.getHeight();return t < e ? t : e;
    }, getWidth: function getWidth() {
      return this.isNull() ? 0 : this.maxx - this.minx;
    }, compareTo: function compareTo(t) {
      var e = t;return this.isNull() ? e.isNull() ? 0 : -1 : e.isNull() ? 1 : this.minx < e.minx ? -1 : this.minx > e.minx ? 1 : this.miny < e.miny ? -1 : this.miny > e.miny ? 1 : this.maxx < e.maxx ? -1 : this.maxx > e.maxx ? 1 : this.maxy < e.maxy ? -1 : this.maxy > e.maxy ? 1 : 0;
    }, translate: function translate(t, e) {
      if (this.isNull()) return null;this.init(this.getMinX() + t, this.getMaxX() + t, this.getMinY() + e, this.getMaxY() + e);
    }, toString: function toString() {
      return "Env[" + this.minx + " : " + this.maxx + ", " + this.miny + " : " + this.maxy + "]";
    }, setToNull: function setToNull() {
      this.minx = 0, this.maxx = -1, this.miny = 0, this.maxy = -1;
    }, getHeight: function getHeight() {
      return this.isNull() ? 0 : this.maxy - this.miny;
    }, maxExtent: function maxExtent() {
      if (this.isNull()) return 0;var t = this.getWidth(),
          e = this.getHeight();return t > e ? t : e;
    }, expandBy: function expandBy() {
      if (1 === arguments.length) {
        var t = arguments[0];this.expandBy(t, t);
      } else if (2 === arguments.length) {
        var e = arguments[0],
            n = arguments[1];if (this.isNull()) return null;this.minx -= e, this.maxx += e, this.miny -= n, this.maxy += n, (this.minx > this.maxx || this.miny > this.maxy) && this.setToNull();
      }
    }, contains: function contains() {
      if (1 === arguments.length) {
        if (arguments[0] instanceof I) {
          var t = arguments[0];return this.covers(t);
        }if (arguments[0] instanceof c) {
          var e = arguments[0];return this.covers(e);
        }
      } else if (2 === arguments.length) {
        var n = arguments[0],
            i = arguments[1];return this.covers(n, i);
      }
    }, centre: function centre() {
      return this.isNull() ? null : new c((this.getMinX() + this.getMaxX()) / 2, (this.getMinY() + this.getMaxY()) / 2);
    }, init: function init() {
      if (0 === arguments.length) this.setToNull();else if (1 === arguments.length) {
        if (arguments[0] instanceof c) {
          var t = arguments[0];this.init(t.x, t.x, t.y, t.y);
        } else if (arguments[0] instanceof I) {
          var e = arguments[0];this.minx = e.minx, this.maxx = e.maxx, this.miny = e.miny, this.maxy = e.maxy;
        }
      } else if (2 === arguments.length) {
        var n = arguments[0],
            i = arguments[1];this.init(n.x, i.x, n.y, i.y);
      } else if (4 === arguments.length) {
        var r = arguments[0],
            s = arguments[1],
            o = arguments[2],
            a = arguments[3];r < s ? (this.minx = r, this.maxx = s) : (this.minx = s, this.maxx = r), o < a ? (this.miny = o, this.maxy = a) : (this.miny = a, this.maxy = o);
      }
    }, getMaxY: function getMaxY() {
      return this.maxy;
    }, distance: function distance(t) {
      if (this.intersects(t)) return 0;var e = 0;this.maxx < t.minx ? e = t.minx - this.maxx : this.minx > t.maxx && (e = this.minx - t.maxx);var n = 0;return this.maxy < t.miny ? n = t.miny - this.maxy : this.miny > t.maxy && (n = this.miny - t.maxy), 0 === e ? n : 0 === n ? e : Math.sqrt(e * e + n * n);
    }, hashCode: function hashCode() {
      var t = 17;return t = 37 * t + c.hashCode(this.minx), t = 37 * t + c.hashCode(this.maxx), t = 37 * t + c.hashCode(this.miny), t = 37 * t + c.hashCode(this.maxy);
    }, interfaces_: function interfaces_() {
      return [r, a];
    }, getClass: function getClass() {
      return I;
    } }), I.intersects = function () {
    if (3 === arguments.length) {
      var t = arguments[0],
          e = arguments[1],
          n = arguments[2];return n.x >= (t.x < e.x ? t.x : e.x) && n.x <= (t.x > e.x ? t.x : e.x) && n.y >= (t.y < e.y ? t.y : e.y) && n.y <= (t.y > e.y ? t.y : e.y);
    }if (4 === arguments.length) {
      var i = arguments[0],
          r = arguments[1],
          s = arguments[2],
          o = arguments[3],
          a = Math.min(s.x, o.x),
          u = Math.max(s.x, o.x),
          l = Math.min(i.x, r.x),
          h = Math.max(i.x, r.x);return !(l > u) && !(h < a) && (a = Math.min(s.y, o.y), u = Math.max(s.y, o.y), l = Math.min(i.y, r.y), h = Math.max(i.y, r.y), !(l > u) && !(h < a));
    }
  }, I.serialVersionUID = 0x51845cd552189800, js(C, N), Ws(C.prototype, { interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return C;
    } }), Ws(S.prototype, { interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return S;
    } }), S.toLocationSymbol = function (t) {
    switch (t) {case S.EXTERIOR:
        return "e";case S.BOUNDARY:
        return "b";case S.INTERIOR:
        return "i";case S.NONE:
        return "-";}throw new n("Unknown location value: " + t);
  }, S.INTERIOR = 0, S.BOUNDARY = 1, S.EXTERIOR = 2, S.NONE = -1;var Zs = function Zs(t, e) {
    return t.interfaces_ && t.interfaces_().indexOf(e) > -1;
  };Ws(w.prototype, { interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return w;
    } }), w.log10 = function (t) {
    var e = Math.log(t);return i.isInfinite(e) ? e : i.isNaN(e) ? e : e / w.LOG_10;
  }, w.min = function (t, e, n, i) {
    var r = t;return e < r && (r = e), n < r && (r = n), i < r && (r = i), r;
  }, w.clamp = function () {
    if ("number" == typeof arguments[2] && "number" == typeof arguments[0] && "number" == typeof arguments[1]) {
      var t = arguments[0],
          e = arguments[1],
          n = arguments[2];return t < e ? e : t > n ? n : t;
    }if (Number.isInteger(arguments[2]) && Number.isInteger(arguments[0]) && Number.isInteger(arguments[1])) {
      var i = arguments[0],
          r = arguments[1],
          s = arguments[2];return i < r ? r : i > s ? s : i;
    }
  }, w.wrap = function (t, e) {
    return t < 0 ? e - -t % e : t % e;
  }, w.max = function () {
    if (3 === arguments.length) {
      var t = arguments[0],
          e = arguments[1],
          n = arguments[2],
          i = t;return e > i && (i = e), n > i && (i = n), i;
    }if (4 === arguments.length) {
      var r = arguments[0],
          s = arguments[1],
          o = arguments[2],
          a = arguments[3],
          i = r;return s > i && (i = s), o > i && (i = o), a > i && (i = a), i;
    }
  }, w.average = function (t, e) {
    return (t + e) / 2;
  }, w.LOG_10 = Math.log(10), L.prototype.append = function (t) {
    this.str += t;
  }, L.prototype.setCharAt = function (t, e) {
    this.str = this.str.substr(0, t) + e + this.str.substr(t + 1);
  }, L.prototype.toString = function (t) {
    return this.str;
  }, R.prototype.intValue = function () {
    return this.value;
  }, R.prototype.compareTo = function (t) {
    return this.value < t ? -1 : this.value > t ? 1 : 0;
  }, R.isNaN = function (t) {
    return Number.isNaN(t);
  }, T.isWhitespace = function (t) {
    return t <= 32 && t >= 0 || 127 == t;
  }, T.toUpperCase = function (t) {
    return t.toUpperCase();
  }, Ws(P.prototype, { le: function le(t) {
      return this.hi < t.hi || this.hi === t.hi && this.lo <= t.lo;
    }, extractSignificantDigits: function extractSignificantDigits(t, e) {
      var n = this.abs(),
          i = P.magnitude(n.hi),
          r = P.TEN.pow(i);n = n.divide(r), n.gt(P.TEN) ? (n = n.divide(P.TEN), i += 1) : n.lt(P.ONE) && (n = n.multiply(P.TEN), i -= 1);for (var s = i + 1, o = new L(), a = P.MAX_PRINT_DIGITS - 1, u = 0; u <= a; u++) {
        t && u === s && o.append(".");var l = Math.trunc(n.hi);if (l < 0) break;var h = !1,
            c = 0;l > 9 ? (h = !0, c = "9") : c = "0" + l, o.append(c), n = n.subtract(P.valueOf(l)).multiply(P.TEN), h && n.selfAdd(P.TEN);var f = !0,
            g = P.magnitude(n.hi);if (g < 0 && Math.abs(g) >= a - u && (f = !1), !f) break;
      }return e[0] = i, o.toString();
    }, sqr: function sqr() {
      return this.multiply(this);
    }, doubleValue: function doubleValue() {
      return this.hi + this.lo;
    }, subtract: function subtract() {
      if (arguments[0] instanceof P) {
        var t = arguments[0];return this.add(t.negate());
      }if ("number" == typeof arguments[0]) {
        var e = arguments[0];return this.add(-e);
      }
    }, equals: function equals() {
      if (1 === arguments.length) {
        var t = arguments[0];return this.hi === t.hi && this.lo === t.lo;
      }
    }, isZero: function isZero() {
      return 0 === this.hi && 0 === this.lo;
    }, selfSubtract: function selfSubtract() {
      if (arguments[0] instanceof P) {
        var t = arguments[0];return this.isNaN() ? this : this.selfAdd(-t.hi, -t.lo);
      }if ("number" == typeof arguments[0]) {
        var e = arguments[0];return this.isNaN() ? this : this.selfAdd(-e, 0);
      }
    }, getSpecialNumberString: function getSpecialNumberString() {
      return this.isZero() ? "0.0" : this.isNaN() ? "NaN " : null;
    }, min: function min(t) {
      return this.le(t) ? this : t;
    }, selfDivide: function selfDivide() {
      if (1 === arguments.length) {
        if (arguments[0] instanceof P) {
          var t = arguments[0];return this.selfDivide(t.hi, t.lo);
        }if ("number" == typeof arguments[0]) {
          var e = arguments[0];return this.selfDivide(e, 0);
        }
      } else if (2 === arguments.length) {
        var n = arguments[0],
            i = arguments[1],
            r = null,
            s = null,
            o = null,
            a = null,
            u = null,
            l = null,
            h = null,
            c = null;return u = this.hi / n, l = P.SPLIT * u, r = l - u, c = P.SPLIT * n, r = l - r, s = u - r, o = c - n, h = u * n, o = c - o, a = n - o, c = r * o - h + r * a + s * o + s * a, l = (this.hi - h - c + this.lo - u * i) / n, c = u + l, this.hi = c, this.lo = u - c + l, this;
      }
    }, dump: function dump() {
      return "DD<" + this.hi + ", " + this.lo + ">";
    }, divide: function divide() {
      if (arguments[0] instanceof P) {
        var t = arguments[0],
            e = null,
            n = null,
            r = null,
            s = null,
            o = null,
            a = null,
            u = null,
            l = null;o = this.hi / t.hi, a = P.SPLIT * o, e = a - o, l = P.SPLIT * t.hi, e = a - e, n = o - e, r = l - t.hi, u = o * t.hi, r = l - r, s = t.hi - r, l = e * r - u + e * s + n * r + n * s, a = (this.hi - u - l + this.lo - o * t.lo) / t.hi, l = o + a;return new P(l, o - l + a);
      }if ("number" == typeof arguments[0]) {
        var h = arguments[0];return i.isNaN(h) ? P.createNaN() : P.copy(this).selfDivide(h, 0);
      }
    }, ge: function ge(t) {
      return this.hi > t.hi || this.hi === t.hi && this.lo >= t.lo;
    }, pow: function pow(t) {
      if (0 === t) return P.valueOf(1);var e = new P(this),
          n = P.valueOf(1),
          i = Math.abs(t);if (i > 1) for (; i > 0;) {
        i % 2 == 1 && n.selfMultiply(e), (i /= 2) > 0 && (e = e.sqr());
      } else n = e;return t < 0 ? n.reciprocal() : n;
    }, ceil: function ceil() {
      if (this.isNaN()) return P.NaN;var t = Math.ceil(this.hi),
          e = 0;return t === this.hi && (e = Math.ceil(this.lo)), new P(t, e);
    }, compareTo: function compareTo(t) {
      var e = t;return this.hi < e.hi ? -1 : this.hi > e.hi ? 1 : this.lo < e.lo ? -1 : this.lo > e.lo ? 1 : 0;
    }, rint: function rint() {
      return this.isNaN() ? this : this.add(.5).floor();
    }, setValue: function setValue() {
      if (arguments[0] instanceof P) {
        var t = arguments[0];return this.init(t), this;
      }if ("number" == typeof arguments[0]) {
        var e = arguments[0];return this.init(e), this;
      }
    }, max: function max(t) {
      return this.ge(t) ? this : t;
    }, sqrt: function sqrt() {
      if (this.isZero()) return P.valueOf(0);if (this.isNegative()) return P.NaN;var t = 1 / Math.sqrt(this.hi),
          e = this.hi * t,
          n = P.valueOf(e),
          i = this.subtract(n.sqr()),
          r = i.hi * (.5 * t);return n.add(r);
    }, selfAdd: function selfAdd() {
      if (1 === arguments.length) {
        if (arguments[0] instanceof P) {
          var t = arguments[0];return this.selfAdd(t.hi, t.lo);
        }if ("number" == typeof arguments[0]) {
          var e = arguments[0],
              n = null,
              i = null,
              r = null,
              s = null,
              o = null,
              a = null;return r = this.hi + e, o = r - this.hi, s = r - o, s = e - o + (this.hi - s), a = s + this.lo, n = r + a, i = a + (r - n), this.hi = n + i, this.lo = i + (n - this.hi), this;
        }
      } else if (2 === arguments.length) {
        var u = arguments[0],
            l = arguments[1],
            n = null,
            i = null,
            h = null,
            c = null,
            r = null,
            s = null,
            o = null,
            a = null;r = this.hi + u, h = this.lo + l, o = r - this.hi, a = h - this.lo, s = r - o, c = h - a, s = u - o + (this.hi - s), c = l - a + (this.lo - c), o = s + h, n = r + o, i = o + (r - n), o = c + i;var f = n + o,
            g = o + (n - f);return this.hi = f, this.lo = g, this;
      }
    }, selfMultiply: function selfMultiply() {
      if (1 === arguments.length) {
        if (arguments[0] instanceof P) {
          var t = arguments[0];return this.selfMultiply(t.hi, t.lo);
        }if ("number" == typeof arguments[0]) {
          var e = arguments[0];return this.selfMultiply(e, 0);
        }
      } else if (2 === arguments.length) {
        var n = arguments[0],
            i = arguments[1],
            r = null,
            s = null,
            o = null,
            a = null,
            u = null,
            l = null;u = P.SPLIT * this.hi, r = u - this.hi, l = P.SPLIT * n, r = u - r, s = this.hi - r, o = l - n, u = this.hi * n, o = l - o, a = n - o, l = r * o - u + r * a + s * o + s * a + (this.hi * i + this.lo * n);var h = u + l;r = u - h;var c = l + r;return this.hi = h, this.lo = c, this;
      }
    }, selfSqr: function selfSqr() {
      return this.selfMultiply(this);
    }, floor: function floor() {
      if (this.isNaN()) return P.NaN;var t = Math.floor(this.hi),
          e = 0;return t === this.hi && (e = Math.floor(this.lo)), new P(t, e);
    }, negate: function negate() {
      return this.isNaN() ? this : new P(-this.hi, -this.lo);
    }, clone: function clone() {
      try {
        return null;
      } catch (t) {
        if (t instanceof CloneNotSupportedException) return null;throw t;
      } finally {}
    }, multiply: function multiply() {
      if (arguments[0] instanceof P) {
        var t = arguments[0];return t.isNaN() ? P.createNaN() : P.copy(this).selfMultiply(t);
      }if ("number" == typeof arguments[0]) {
        var e = arguments[0];return i.isNaN(e) ? P.createNaN() : P.copy(this).selfMultiply(e, 0);
      }
    }, isNaN: function isNaN() {
      return i.isNaN(this.hi);
    }, intValue: function intValue() {
      return Math.trunc(this.hi);
    }, toString: function toString() {
      var t = P.magnitude(this.hi);return t >= -3 && t <= 20 ? this.toStandardNotation() : this.toSciNotation();
    }, toStandardNotation: function toStandardNotation() {
      var t = this.getSpecialNumberString();if (null !== t) return t;var e = new Array(1).fill(null),
          n = this.extractSignificantDigits(!0, e),
          i = e[0] + 1,
          r = n;if ("." === n.charAt(0)) r = "0" + n;else if (i < 0) r = "0." + P.stringOfChar("0", -i) + n;else if (n.indexOf(".") === -1) {
        var s = i - n.length,
            o = P.stringOfChar("0", s);r = n + o + ".0";
      }return this.isNegative() ? "-" + r : r;
    }, reciprocal: function reciprocal() {
      var t = null,
          e = null,
          n = null,
          i = null,
          r = null,
          s = null,
          o = null,
          a = null;r = 1 / this.hi, s = P.SPLIT * r, t = s - r, a = P.SPLIT * this.hi, t = s - t, e = r - t, n = a - this.hi, o = r * this.hi, n = a - n, i = this.hi - n, a = t * n - o + t * i + e * n + e * i, s = (1 - o - a - r * this.lo) / this.hi;var u = r + s;return new P(u, r - u + s);
    }, toSciNotation: function toSciNotation() {
      if (this.isZero()) return P.SCI_NOT_ZERO;var t = this.getSpecialNumberString();if (null !== t) return t;var e = new Array(1).fill(null),
          n = this.extractSignificantDigits(!1, e),
          i = P.SCI_NOT_EXPONENT_CHAR + e[0];if ("0" === n.charAt(0)) throw new IllegalStateException("Found leading zero: " + n);var r = "";n.length > 1 && (r = n.substring(1));var s = n.charAt(0) + "." + r;return this.isNegative() ? "-" + s + i : s + i;
    }, abs: function abs() {
      return this.isNaN() ? P.NaN : this.isNegative() ? this.negate() : new P(this);
    }, isPositive: function isPositive() {
      return this.hi > 0 || 0 === this.hi && this.lo > 0;
    }, lt: function lt(t) {
      return this.hi < t.hi || this.hi === t.hi && this.lo < t.lo;
    }, add: function add() {
      if (arguments[0] instanceof P) {
        var t = arguments[0];return P.copy(this).selfAdd(t);
      }if ("number" == typeof arguments[0]) {
        var e = arguments[0];return P.copy(this).selfAdd(e);
      }
    }, init: function init() {
      if (1 === arguments.length) {
        if ("number" == typeof arguments[0]) {
          var t = arguments[0];this.hi = t, this.lo = 0;
        } else if (arguments[0] instanceof P) {
          var e = arguments[0];this.hi = e.hi, this.lo = e.lo;
        }
      } else if (2 === arguments.length) {
        var n = arguments[0],
            i = arguments[1];this.hi = n, this.lo = i;
      }
    }, gt: function gt(t) {
      return this.hi > t.hi || this.hi === t.hi && this.lo > t.lo;
    }, isNegative: function isNegative() {
      return this.hi < 0 || 0 === this.hi && this.lo < 0;
    }, trunc: function trunc() {
      return this.isNaN() ? P.NaN : this.isPositive() ? this.floor() : this.ceil();
    }, signum: function signum() {
      return this.hi > 0 ? 1 : this.hi < 0 ? -1 : this.lo > 0 ? 1 : this.lo < 0 ? -1 : 0;
    }, interfaces_: function interfaces_() {
      return [a, r, s];
    }, getClass: function getClass() {
      return P;
    } }), P.sqr = function (t) {
    return P.valueOf(t).selfMultiply(t);
  }, P.valueOf = function () {
    if ("string" == typeof arguments[0]) {
      var t = arguments[0];return P.parse(t);
    }if ("number" == typeof arguments[0]) {
      return new P(arguments[0]);
    }
  }, P.sqrt = function (t) {
    return P.valueOf(t).sqrt();
  }, P.parse = function (t) {
    for (var e = 0, n = t.length; T.isWhitespace(t.charAt(e));) {
      e++;
    }var i = !1;if (e < n) {
      var r = t.charAt(e);"-" !== r && "+" !== r || (e++, "-" === r && (i = !0));
    }for (var s = new P(), o = 0, a = 0, u = 0;;) {
      if (e >= n) break;var l = t.charAt(e);if (e++, T.isDigit(l)) {
        var h = l - "0";s.selfMultiply(P.TEN), s.selfAdd(h), o++;
      } else {
        if ("." !== l) {
          if ("e" === l || "E" === l) {
            var c = t.substring(e);try {
              u = R.parseInt(c);
            } catch (e) {
              throw e instanceof NumberFormatException ? new NumberFormatException("Invalid exponent " + c + " in string " + t) : e;
            } finally {}break;
          }throw new NumberFormatException("Unexpected character '" + l + "' at position " + e + " in string " + t);
        }a = o;
      }
    }var f = s,
        g = o - a - u;if (0 === g) f = s;else if (g > 0) {
      var d = P.TEN.pow(g);f = s.divide(d);
    } else if (g < 0) {
      var d = P.TEN.pow(-g);f = s.multiply(d);
    }return i ? f.negate() : f;
  }, P.createNaN = function () {
    return new P(i.NaN, i.NaN);
  }, P.copy = function (t) {
    return new P(t);
  }, P.magnitude = function (t) {
    var e = Math.abs(t),
        n = Math.log(e) / Math.log(10),
        i = Math.trunc(Math.floor(n));return 10 * Math.pow(10, i) <= e && (i += 1), i;
  }, P.stringOfChar = function (t, e) {
    for (var n = new L(), i = 0; i < e; i++) {
      n.append(t);
    }return n.toString();
  }, P.PI = new P(3.141592653589793, 1.2246467991473532e-16), P.TWO_PI = new P(6.283185307179586, 2.4492935982947064e-16), P.PI_2 = new P(1.5707963267948966, 6.123233995736766e-17), P.E = new P(2.718281828459045, 1.4456468917292502e-16), P.NaN = new P(i.NaN, i.NaN), P.EPS = 1.23259516440783e-32, P.SPLIT = 134217729, P.MAX_PRINT_DIGITS = 32, P.TEN = P.valueOf(10), P.ONE = P.valueOf(1), P.SCI_NOT_EXPONENT_CHAR = "E", P.SCI_NOT_ZERO = "0.0E0", Ws(b.prototype, { interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return b;
    } }), b.orientationIndex = function (t, e, n) {
    var i = b.orientationIndexFilter(t, e, n);if (i <= 1) return i;var r = P.valueOf(e.x).selfAdd(-t.x),
        s = P.valueOf(e.y).selfAdd(-t.y),
        o = P.valueOf(n.x).selfAdd(-e.x),
        a = P.valueOf(n.y).selfAdd(-e.y);return r.selfMultiply(a).selfSubtract(s.selfMultiply(o)).signum();
  }, b.signOfDet2x2 = function (t, e, n, i) {
    return t.multiply(i).selfSubtract(e.multiply(n)).signum();
  }, b.intersection = function (t, e, n, i) {
    var r = P.valueOf(i.y).selfSubtract(n.y).selfMultiply(P.valueOf(e.x).selfSubtract(t.x)),
        s = P.valueOf(i.x).selfSubtract(n.x).selfMultiply(P.valueOf(e.y).selfSubtract(t.y)),
        o = r.subtract(s),
        a = P.valueOf(i.x).selfSubtract(n.x).selfMultiply(P.valueOf(t.y).selfSubtract(n.y)),
        u = P.valueOf(i.y).selfSubtract(n.y).selfMultiply(P.valueOf(t.x).selfSubtract(n.x)),
        l = a.subtract(u),
        h = l.selfDivide(o).doubleValue(),
        f = P.valueOf(t.x).selfAdd(P.valueOf(e.x).selfSubtract(t.x).selfMultiply(h)).doubleValue(),
        g = P.valueOf(e.x).selfSubtract(t.x).selfMultiply(P.valueOf(t.y).selfSubtract(n.y)),
        d = P.valueOf(e.y).selfSubtract(t.y).selfMultiply(P.valueOf(t.x).selfSubtract(n.x)),
        p = g.subtract(d),
        m = p.selfDivide(o).doubleValue();return new c(f, P.valueOf(n.y).selfAdd(P.valueOf(i.y).selfSubtract(n.y).selfMultiply(m)).doubleValue());
  }, b.orientationIndexFilter = function (t, e, n) {
    var i = null,
        r = (t.x - n.x) * (e.y - n.y),
        s = (t.y - n.y) * (e.x - n.x),
        o = r - s;if (r > 0) {
      if (s <= 0) return b.signum(o);i = r + s;
    } else {
      if (!(r < 0)) return b.signum(o);if (s >= 0) return b.signum(o);i = -r - s;
    }var a = b.DP_SAFE_EPSILON * i;return o >= a || -o >= a ? b.signum(o) : 2;
  }, b.signum = function (t) {
    return t > 0 ? 1 : t < 0 ? -1 : 0;
  }, b.DP_SAFE_EPSILON = 1e-15, Ws(O.prototype, { setOrdinate: function setOrdinate(t, e, n) {}, size: function size() {}, getOrdinate: function getOrdinate(t, e) {}, getCoordinate: function getCoordinate() {
      if (1 === arguments.length) {
        arguments[0];
      } else if (2 === arguments.length) {
        arguments[0], arguments[1];
      }
    }, getCoordinateCopy: function getCoordinateCopy(t) {}, getDimension: function getDimension() {}, getX: function getX(t) {}, clone: function clone() {}, expandEnvelope: function expandEnvelope(t) {}, copy: function copy() {}, getY: function getY(t) {}, toCoordinateArray: function toCoordinateArray() {}, interfaces_: function interfaces_() {
      return [s];
    }, getClass: function getClass() {
      return O;
    } }), O.X = 0, O.Y = 1, O.Z = 2, O.M = 3, _.arraycopy = function (t, e, n, i, r) {
    for (var s = 0, o = e; o < e + r; o++) {
      n[i + s] = t[o], s++;
    }
  }, _.getProperty = function (t) {
    return { "line.separator": "\n" }[t];
  }, Ws(M.prototype, { getY: function getY() {
      var t = this.y / this.w;if (i.isNaN(t) || i.isInfinite(t)) throw new C();return t;
    }, getX: function getX() {
      var t = this.x / this.w;if (i.isNaN(t) || i.isInfinite(t)) throw new C();return t;
    }, getCoordinate: function getCoordinate() {
      var t = new c();return t.x = this.getX(), t.y = this.getY(), t;
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return M;
    } }), M.intersection = function (t, e, n, r) {
    var s = t.y - e.y,
        o = e.x - t.x,
        a = t.x * e.y - e.x * t.y,
        u = n.y - r.y,
        l = r.x - n.x,
        h = n.x * r.y - r.x * n.y,
        f = o * h - l * a,
        g = u * a - s * h,
        d = s * l - u * o,
        p = f / d,
        m = g / d;if (i.isNaN(p) || i.isInfinite(p) || i.isNaN(m) || i.isInfinite(m)) throw new C();return new c(p, m);
  }, Ws(D.prototype, { create: function create() {
      if (1 === arguments.length) {
        if (arguments[0] instanceof Array) {
          arguments[0];
        } else if (Zs(arguments[0], O)) {
          arguments[0];
        }
      } else if (2 === arguments.length) {
        arguments[0], arguments[1];
      }
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return D;
    } }), Ws(A.prototype, { filter: function filter(t) {}, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return A;
    } }), Ws(F.prototype, { isGeometryCollection: function isGeometryCollection() {
      return this.getSortIndex() === F.SORTINDEX_GEOMETRYCOLLECTION;
    }, getFactory: function getFactory() {
      return this.factory;
    }, getGeometryN: function getGeometryN(t) {
      return this;
    }, getArea: function getArea() {
      return 0;
    }, isRectangle: function isRectangle() {
      return !1;
    }, equals: function equals() {
      if (1 === arguments.length) {
        if (arguments[0] instanceof F) {
          var t = arguments[0];return null !== t && this.equalsTopo(t);
        }if (arguments[0] instanceof Object) {
          var e = arguments[0];if (!(e instanceof F)) return !1;var n = e;return this.equalsExact(n);
        }
      }
    }, equalsExact: function equalsExact(t) {
      return this === t || this.equalsExact(t, 0);
    }, geometryChanged: function geometryChanged() {
      this.apply(F.geometryChangedFilter);
    }, geometryChangedAction: function geometryChangedAction() {
      this.envelope = null;
    }, equalsNorm: function equalsNorm(t) {
      return null !== t && this.norm().equalsExact(t.norm());
    }, getLength: function getLength() {
      return 0;
    }, getNumGeometries: function getNumGeometries() {
      return 1;
    }, compareTo: function compareTo() {
      if (1 === arguments.length) {
        var t = arguments[0],
            e = t;return this.getSortIndex() !== e.getSortIndex() ? this.getSortIndex() - e.getSortIndex() : this.isEmpty() && e.isEmpty() ? 0 : this.isEmpty() ? -1 : e.isEmpty() ? 1 : this.compareToSameClass(t);
      }if (2 === arguments.length) {
        var n = arguments[0],
            i = arguments[1],
            e = n;return this.getSortIndex() !== e.getSortIndex() ? this.getSortIndex() - e.getSortIndex() : this.isEmpty() && e.isEmpty() ? 0 : this.isEmpty() ? -1 : e.isEmpty() ? 1 : this.compareToSameClass(n, i);
      }
    }, getUserData: function getUserData() {
      return this.userData;
    }, getSRID: function getSRID() {
      return this.SRID;
    }, getEnvelope: function getEnvelope() {
      return this.getFactory().toGeometry(this.getEnvelopeInternal());
    }, checkNotGeometryCollection: function checkNotGeometryCollection(t) {
      if (t.getSortIndex() === F.SORTINDEX_GEOMETRYCOLLECTION) throw new n("This method does not support GeometryCollection arguments");
    }, equal: function equal(t, e, n) {
      return 0 === n ? t.equals(e) : t.distance(e) <= n;
    }, norm: function norm() {
      var t = this.copy();return t.normalize(), t;
    }, getPrecisionModel: function getPrecisionModel() {
      return this.factory.getPrecisionModel();
    }, getEnvelopeInternal: function getEnvelopeInternal() {
      return null === this.envelope && (this.envelope = this.computeEnvelopeInternal()), new I(this.envelope);
    }, setSRID: function setSRID(t) {
      this.SRID = t;
    }, setUserData: function setUserData(t) {
      this.userData = t;
    }, compare: function compare(t, e) {
      for (var n = t.iterator(), i = e.iterator(); n.hasNext() && i.hasNext();) {
        var r = n.next(),
            s = i.next(),
            o = r.compareTo(s);if (0 !== o) return o;
      }return n.hasNext() ? 1 : i.hasNext() ? -1 : 0;
    }, hashCode: function hashCode() {
      return this.getEnvelopeInternal().hashCode();
    }, isGeometryCollectionOrDerived: function isGeometryCollectionOrDerived() {
      return this.getSortIndex() === F.SORTINDEX_GEOMETRYCOLLECTION || this.getSortIndex() === F.SORTINDEX_MULTIPOINT || this.getSortIndex() === F.SORTINDEX_MULTILINESTRING || this.getSortIndex() === F.SORTINDEX_MULTIPOLYGON;
    }, interfaces_: function interfaces_() {
      return [s, r, a];
    }, getClass: function getClass() {
      return F;
    } }), F.hasNonEmptyElements = function (t) {
    for (var e = 0; e < t.length; e++) {
      if (!t[e].isEmpty()) return !0;
    }return !1;
  }, F.hasNullElements = function (t) {
    for (var e = 0; e < t.length; e++) {
      if (null === t[e]) return !0;
    }return !1;
  }, F.serialVersionUID = 0x799ea46522854c00, F.SORTINDEX_POINT = 0, F.SORTINDEX_MULTIPOINT = 1, F.SORTINDEX_LINESTRING = 2, F.SORTINDEX_LINEARRING = 3, F.SORTINDEX_MULTILINESTRING = 4, F.SORTINDEX_POLYGON = 5, F.SORTINDEX_MULTIPOLYGON = 6, F.SORTINDEX_GEOMETRYCOLLECTION = 7, F.geometryChangedFilter = { interfaces_: function interfaces_() {
      return [A];
    }, filter: function filter(t) {
      t.geometryChangedAction();
    } }, Ws(G.prototype, { filter: function filter(t) {}, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return G;
    } }), Ws(q.prototype, { isInBoundary: function isInBoundary(t) {}, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return q;
    } }), Ws(B.prototype, { isInBoundary: function isInBoundary(t) {
      return t % 2 == 1;
    }, interfaces_: function interfaces_() {
      return [q];
    }, getClass: function getClass() {
      return B;
    } }), Ws(z.prototype, { isInBoundary: function isInBoundary(t) {
      return t > 0;
    }, interfaces_: function interfaces_() {
      return [q];
    }, getClass: function getClass() {
      return z;
    } }), Ws(V.prototype, { isInBoundary: function isInBoundary(t) {
      return t > 1;
    }, interfaces_: function interfaces_() {
      return [q];
    }, getClass: function getClass() {
      return V;
    } }), Ws(k.prototype, { isInBoundary: function isInBoundary(t) {
      return 1 === t;
    }, interfaces_: function interfaces_() {
      return [q];
    }, getClass: function getClass() {
      return k;
    } }), q.Mod2BoundaryNodeRule = B, q.EndPointBoundaryNodeRule = z, q.MultiValentEndPointBoundaryNodeRule = V, q.MonoValentEndPointBoundaryNodeRule = k, q.MOD2_BOUNDARY_RULE = new B(), q.ENDPOINT_BOUNDARY_RULE = new z(), q.MULTIVALENT_ENDPOINT_BOUNDARY_RULE = new V(), q.MONOVALENT_ENDPOINT_BOUNDARY_RULE = new k(), q.OGC_SFS_BOUNDARY_RULE = q.MOD2_BOUNDARY_RULE, Ws(Y.prototype, { interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return Y;
    } }), Y.isRing = function (t) {
    return !(t.length < 4) && !!t[0].equals2D(t[t.length - 1]);
  }, Y.ptNotInList = function (t, e) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n];if (Y.indexOf(i, e) < 0) return i;
    }return null;
  }, Y.scroll = function (t, e) {
    var n = Y.indexOf(e, t);if (n < 0) return null;var i = new Array(t.length).fill(null);_.arraycopy(t, n, i, 0, t.length - n), _.arraycopy(t, 0, i, t.length - n, n), _.arraycopy(i, 0, t, 0, t.length);
  }, Y.equals = function () {
    if (2 === arguments.length) {
      var t = arguments[0],
          e = arguments[1];if (t === e) return !0;if (null === t || null === e) return !1;if (t.length !== e.length) return !1;for (var n = 0; n < t.length; n++) {
        if (!t[n].equals(e[n])) return !1;
      }return !0;
    }if (3 === arguments.length) {
      var i = arguments[0],
          r = arguments[1],
          s = arguments[2];if (i === r) return !0;if (null === i || null === r) return !1;if (i.length !== r.length) return !1;for (var n = 0; n < i.length; n++) {
        if (0 !== s.compare(i[n], r[n])) return !1;
      }return !0;
    }
  }, Y.intersection = function (t, e) {
    for (var n = new E(), i = 0; i < t.length; i++) {
      e.intersects(t[i]) && n.add(t[i], !0);
    }return n.toCoordinateArray();
  }, Y.hasRepeatedPoints = function (t) {
    for (var e = 1; e < t.length; e++) {
      if (t[e - 1].equals(t[e])) return !0;
    }return !1;
  }, Y.removeRepeatedPoints = function (t) {
    return Y.hasRepeatedPoints(t) ? new E(t, !1).toCoordinateArray() : t;
  }, Y.reverse = function (t) {
    for (var e = t.length - 1, n = Math.trunc(e / 2), i = 0; i <= n; i++) {
      var r = t[i];t[i] = t[e - i], t[e - i] = r;
    }
  }, Y.removeNull = function (t) {
    for (var e = 0, n = 0; n < t.length; n++) {
      null !== t[n] && e++;
    }var i = new Array(e).fill(null);if (0 === e) return i;for (var r = 0, n = 0; n < t.length; n++) {
      null !== t[n] && (i[r++] = t[n]);
    }return i;
  }, Y.copyDeep = function () {
    if (1 === arguments.length) {
      for (var t = arguments[0], e = new Array(t.length).fill(null), n = 0; n < t.length; n++) {
        e[n] = new c(t[n]);
      }return e;
    }if (5 === arguments.length) for (var i = arguments[0], r = arguments[1], s = arguments[2], o = arguments[3], a = arguments[4], n = 0; n < a; n++) {
      s[o + n] = new c(i[r + n]);
    }
  }, Y.isEqualReversed = function (t, e) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n],
          r = e[t.length - n - 1];if (0 !== i.compareTo(r)) return !1;
    }return !0;
  }, Y.envelope = function (t) {
    for (var e = new I(), n = 0; n < t.length; n++) {
      e.expandToInclude(t[n]);
    }return e;
  }, Y.toCoordinateArray = function (t) {
    return t.toArray(Y.coordArrayType);
  }, Y.atLeastNCoordinatesOrNothing = function (t, e) {
    return e.length >= t ? e : [];
  }, Y.indexOf = function (t, e) {
    for (var n = 0; n < e.length; n++) {
      if (t.equals(e[n])) return n;
    }return -1;
  }, Y.increasingDirection = function (t) {
    for (var e = 0; e < Math.trunc(t.length / 2); e++) {
      var n = t.length - 1 - e,
          i = t[e].compareTo(t[n]);if (0 !== i) return i;
    }return 1;
  }, Y.compare = function (t, e) {
    for (var n = 0; n < t.length && n < e.length;) {
      var i = t[n].compareTo(e[n]);if (0 !== i) return i;n++;
    }return n < e.length ? -1 : n < t.length ? 1 : 0;
  }, Y.minCoordinate = function (t) {
    for (var e = null, n = 0; n < t.length; n++) {
      (null === e || e.compareTo(t[n]) > 0) && (e = t[n]);
    }return e;
  }, Y.extract = function (t, e, n) {
    e = w.clamp(e, 0, t.length), n = w.clamp(n, -1, t.length);var i = n - e + 1;n < 0 && (i = 0), e >= t.length && (i = 0), n < e && (i = 0);var r = new Array(i).fill(null);if (0 === i) return r;for (var s = 0, o = e; o <= n; o++) {
      r[s++] = t[o];
    }return r;
  }, Ws(U.prototype, { compare: function compare(t, e) {
      var n = t,
          i = e;return Y.compare(n, i);
    }, interfaces_: function interfaces_() {
      return [o];
    }, getClass: function getClass() {
      return U;
    } }), Ws(X.prototype, { compare: function compare(t, e) {
      var n = t,
          i = e;if (n.length < i.length) return -1;if (n.length > i.length) return 1;if (0 === n.length) return 0;var r = Y.compare(n, i);return Y.isEqualReversed(n, i) ? 0 : r;
    }, OLDcompare: function OLDcompare(t, e) {
      var n = t,
          i = e;if (n.length < i.length) return -1;if (n.length > i.length) return 1;if (0 === n.length) return 0;for (var r = Y.increasingDirection(n), s = Y.increasingDirection(i), o = r > 0 ? 0 : n.length - 1, a = s > 0 ? 0 : n.length - 1, u = 0; u < n.length; u++) {
        var l = n[o].compareTo(i[a]);if (0 !== l) return l;o += r, a += s;
      }return 0;
    }, interfaces_: function interfaces_() {
      return [o];
    }, getClass: function getClass() {
      return X;
    } }), Y.ForwardComparator = U, Y.BidirectionalComparator = X, Y.coordArrayType = new Array(0).fill(null), H.prototype.get = function () {}, H.prototype.put = function () {}, H.prototype.size = function () {}, H.prototype.values = function () {}, H.prototype.entrySet = function () {}, W.prototype = new H(), j.prototype = new d(), j.prototype.contains = function () {}, K.prototype = new j(), K.prototype.contains = function (t) {
    for (var e = 0, n = this.array_.length; e < n; e++) {
      if (this.array_[e] === t) return !0;
    }return !1;
  }, K.prototype.add = function (t) {
    return !this.contains(t) && (this.array_.push(t), !0);
  }, K.prototype.addAll = function (t) {
    for (var e = t.iterator(); e.hasNext();) {
      this.add(e.next());
    }return !0;
  }, K.prototype.remove = function (t) {
    throw new javascript.util.OperationNotSupported();
  }, K.prototype.size = function () {
    return this.array_.length;
  }, K.prototype.isEmpty = function () {
    return 0 === this.array_.length;
  }, K.prototype.toArray = function () {
    for (var t = [], e = 0, n = this.array_.length; e < n; e++) {
      t.push(this.array_[e]);
    }return t;
  }, K.prototype.iterator = function () {
    return new Qs(this);
  };var Qs = function Qs(t) {
    this.hashSet_ = t, this.position_ = 0;
  };Qs.prototype.next = function () {
    if (this.position_ === this.hashSet_.size()) throw new v();return this.hashSet_.array_[this.position_++];
  }, Qs.prototype.hasNext = function () {
    return this.position_ < this.hashSet_.size();
  }, Qs.prototype.remove = function () {
    throw new y();
  };var Js = 0;et.prototype = new W(), et.prototype.get = function (t) {
    for (var e = this.root_; null !== e;) {
      var n = t.compareTo(e.key);if (n < 0) e = e.left;else {
        if (!(n > 0)) return e.value;e = e.right;
      }
    }return null;
  }, et.prototype.put = function (t, e) {
    if (null === this.root_) return this.root_ = { key: t, value: e, left: null, right: null, parent: null, color: Js, getValue: function getValue() {
        return this.value;
      }, getKey: function getKey() {
        return this.key;
      } }, this.size_ = 1, null;var n,
        i,
        r = this.root_;do {
      if (n = r, (i = t.compareTo(r.key)) < 0) r = r.left;else {
        if (!(i > 0)) {
          var s = r.value;return r.value = e, s;
        }r = r.right;
      }
    } while (null !== r);var o = { key: t, left: null, right: null, value: e, parent: n, color: Js, getValue: function getValue() {
        return this.value;
      }, getKey: function getKey() {
        return this.key;
      } };return i < 0 ? n.left = o : n.right = o, this.fixAfterInsertion(o), this.size_++, null;
  }, et.prototype.fixAfterInsertion = function (t) {
    for (t.color = 1; null != t && t != this.root_ && 1 == t.parent.color;) {
      if (Q(t) == $(Q(Q(t)))) {
        var e = tt(Q(Q(t)));1 == Z(e) ? (J(Q(t), Js), J(e, Js), J(Q(Q(t)), 1), t = Q(Q(t))) : (t == tt(Q(t)) && (t = Q(t), this.rotateLeft(t)), J(Q(t), Js), J(Q(Q(t)), 1), this.rotateRight(Q(Q(t))));
      } else {
        var e = $(Q(Q(t)));1 == Z(e) ? (J(Q(t), Js), J(e, Js), J(Q(Q(t)), 1), t = Q(Q(t))) : (t == $(Q(t)) && (t = Q(t), this.rotateRight(t)), J(Q(t), Js), J(Q(Q(t)), 1), this.rotateLeft(Q(Q(t))));
      }
    }this.root_.color = Js;
  }, et.prototype.values = function () {
    var t = new x(),
        e = this.getFirstEntry();if (null !== e) for (t.add(e.value); null !== (e = et.successor(e));) {
      t.add(e.value);
    }return t;
  }, et.prototype.entrySet = function () {
    var t = new K(),
        e = this.getFirstEntry();if (null !== e) for (t.add(e); null !== (e = et.successor(e));) {
      t.add(e);
    }return t;
  }, et.prototype.rotateLeft = function (t) {
    if (null != t) {
      var e = t.right;t.right = e.left, null != e.left && (e.left.parent = t), e.parent = t.parent, null == t.parent ? this.root_ = e : t.parent.left == t ? t.parent.left = e : t.parent.right = e, e.left = t, t.parent = e;
    }
  }, et.prototype.rotateRight = function (t) {
    if (null != t) {
      var e = t.left;t.left = e.right, null != e.right && (e.right.parent = t), e.parent = t.parent, null == t.parent ? this.root_ = e : t.parent.right == t ? t.parent.right = e : t.parent.left = e, e.right = t, t.parent = e;
    }
  }, et.prototype.getFirstEntry = function () {
    var t = this.root_;if (null != t) for (; null != t.left;) {
      t = t.left;
    }return t;
  }, et.successor = function (t) {
    if (null === t) return null;if (null !== t.right) {
      for (var e = t.right; null !== e.left;) {
        e = e.left;
      }return e;
    }for (var e = t.parent, n = t; null !== e && n === e.right;) {
      n = e, e = e.parent;
    }return e;
  }, et.prototype.size = function () {
    return this.size_;
  }, Ws(nt.prototype, { interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return nt;
    } }), it.prototype = new j(), rt.prototype = new it(), rt.prototype.contains = function (t) {
    for (var e = 0, n = this.array_.length; e < n; e++) {
      if (0 === this.array_[e].compareTo(t)) return !0;
    }return !1;
  }, rt.prototype.add = function (t) {
    if (this.contains(t)) return !1;for (var e = 0, n = this.array_.length; e < n; e++) {
      if (1 === this.array_[e].compareTo(t)) return this.array_.splice(e, 0, t), !0;
    }return this.array_.push(t), !0;
  }, rt.prototype.addAll = function (t) {
    for (var e = t.iterator(); e.hasNext();) {
      this.add(e.next());
    }return !0;
  }, rt.prototype.remove = function (t) {
    throw new y();
  }, rt.prototype.size = function () {
    return this.array_.length;
  }, rt.prototype.isEmpty = function () {
    return 0 === this.array_.length;
  }, rt.prototype.toArray = function () {
    for (var t = [], e = 0, n = this.array_.length; e < n; e++) {
      t.push(this.array_[e]);
    }return t;
  }, rt.prototype.iterator = function () {
    return new $s(this);
  };var $s = function $s(t) {
    this.treeSet_ = t, this.position_ = 0;
  };$s.prototype.next = function () {
    if (this.position_ === this.treeSet_.size()) throw new v();return this.treeSet_.array_[this.position_++];
  }, $s.prototype.hasNext = function () {
    return this.position_ < this.treeSet_.size();
  }, $s.prototype.remove = function () {
    throw new y();
  }, st.sort = function () {
    var t,
        e,
        n,
        i,
        r = arguments[0];if (1 === arguments.length) return i = function i(t, e) {
      return t.compareTo(e);
    }, void r.sort(i);if (2 === arguments.length) n = arguments[1], i = function i(t, e) {
      return n.compare(t, e);
    }, r.sort(i);else {
      if (3 === arguments.length) {
        e = r.slice(arguments[1], arguments[2]), e.sort();var s = r.slice(0, arguments[1]).concat(e, r.slice(arguments[2], r.length));for (r.splice(0, r.length), t = 0; t < s.length; t++) {
          r.push(s[t]);
        }return;
      }if (4 === arguments.length) {
        for (e = r.slice(arguments[1], arguments[2]), n = arguments[3], i = function i(t, e) {
          return n.compare(t, e);
        }, e.sort(i), s = r.slice(0, arguments[1]).concat(e, r.slice(arguments[2], r.length)), r.splice(0, r.length), t = 0; t < s.length; t++) {
          r.push(s[t]);
        }return;
      }
    }
  }, st.asList = function (t) {
    for (var e = new x(), n = 0, i = t.length; n < i; n++) {
      e.add(t[n]);
    }return e;
  }, Ws(ot.prototype, { interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return ot;
    } }), ot.toDimensionSymbol = function (t) {
    switch (t) {case ot.FALSE:
        return ot.SYM_FALSE;case ot.TRUE:
        return ot.SYM_TRUE;case ot.DONTCARE:
        return ot.SYM_DONTCARE;case ot.P:
        return ot.SYM_P;case ot.L:
        return ot.SYM_L;case ot.A:
        return ot.SYM_A;}throw new n("Unknown dimension value: " + t);
  }, ot.toDimensionValue = function (t) {
    switch (T.toUpperCase(t)) {case ot.SYM_FALSE:
        return ot.FALSE;case ot.SYM_TRUE:
        return ot.TRUE;case ot.SYM_DONTCARE:
        return ot.DONTCARE;case ot.SYM_P:
        return ot.P;case ot.SYM_L:
        return ot.L;case ot.SYM_A:
        return ot.A;}throw new n("Unknown dimension symbol: " + t);
  }, ot.P = 0, ot.L = 1, ot.A = 2, ot.FALSE = -1, ot.TRUE = -2, ot.DONTCARE = -3, ot.SYM_FALSE = "F", ot.SYM_TRUE = "T", ot.SYM_DONTCARE = "*", ot.SYM_P = "0", ot.SYM_L = "1", ot.SYM_A = "2", Ws(at.prototype, { filter: function filter(t) {}, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return at;
    } }), Ws(ut.prototype, { filter: function filter(t, e) {}, isDone: function isDone() {}, isGeometryChanged: function isGeometryChanged() {}, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return ut;
    } }), js(lt, F), Ws(lt.prototype, { computeEnvelopeInternal: function computeEnvelopeInternal() {
      for (var t = new I(), e = 0; e < this.geometries.length; e++) {
        t.expandToInclude(this.geometries[e].getEnvelopeInternal());
      }return t;
    }, getGeometryN: function getGeometryN(t) {
      return this.geometries[t];
    }, getSortIndex: function getSortIndex() {
      return F.SORTINDEX_GEOMETRYCOLLECTION;
    }, getCoordinates: function getCoordinates() {
      for (var t = new Array(this.getNumPoints()).fill(null), e = -1, n = 0; n < this.geometries.length; n++) {
        for (var i = this.geometries[n].getCoordinates(), r = 0; r < i.length; r++) {
          e++, t[e] = i[r];
        }
      }return t;
    }, getArea: function getArea() {
      for (var t = 0, e = 0; e < this.geometries.length; e++) {
        t += this.geometries[e].getArea();
      }return t;
    }, equalsExact: function equalsExact() {
      if (2 === arguments.length) {
        var t = arguments[0],
            e = arguments[1];if (!this.isEquivalentClass(t)) return !1;var n = t;if (this.geometries.length !== n.geometries.length) return !1;for (var i = 0; i < this.geometries.length; i++) {
          if (!this.geometries[i].equalsExact(n.geometries[i], e)) return !1;
        }return !0;
      }return F.prototype.equalsExact.apply(this, arguments);
    }, normalize: function normalize() {
      for (var t = 0; t < this.geometries.length; t++) {
        this.geometries[t].normalize();
      }st.sort(this.geometries);
    }, getCoordinate: function getCoordinate() {
      return this.isEmpty() ? null : this.geometries[0].getCoordinate();
    }, getBoundaryDimension: function getBoundaryDimension() {
      for (var t = ot.FALSE, e = 0; e < this.geometries.length; e++) {
        t = Math.max(t, this.geometries[e].getBoundaryDimension());
      }return t;
    }, getDimension: function getDimension() {
      for (var t = ot.FALSE, e = 0; e < this.geometries.length; e++) {
        t = Math.max(t, this.geometries[e].getDimension());
      }return t;
    }, getLength: function getLength() {
      for (var t = 0, e = 0; e < this.geometries.length; e++) {
        t += this.geometries[e].getLength();
      }return t;
    }, getNumPoints: function getNumPoints() {
      for (var t = 0, e = 0; e < this.geometries.length; e++) {
        t += this.geometries[e].getNumPoints();
      }return t;
    }, getNumGeometries: function getNumGeometries() {
      return this.geometries.length;
    }, reverse: function reverse() {
      for (var t = this.geometries.length, e = new Array(t).fill(null), n = 0; n < this.geometries.length; n++) {
        e[n] = this.geometries[n].reverse();
      }return this.getFactory().createGeometryCollection(e);
    }, compareToSameClass: function compareToSameClass() {
      if (1 === arguments.length) {
        var t = arguments[0],
            e = new rt(st.asList(this.geometries)),
            n = new rt(st.asList(t.geometries));return this.compare(e, n);
      }if (2 === arguments.length) {
        for (var i = arguments[0], r = arguments[1], s = i, o = this.getNumGeometries(), a = s.getNumGeometries(), u = 0; u < o && u < a;) {
          var l = this.getGeometryN(u),
              h = s.getGeometryN(u),
              c = l.compareToSameClass(h, r);if (0 !== c) return c;u++;
        }return u < o ? 1 : u < a ? -1 : 0;
      }
    }, apply: function apply() {
      if (Zs(arguments[0], G)) for (var t = arguments[0], e = 0; e < this.geometries.length; e++) {
        this.geometries[e].apply(t);
      } else if (Zs(arguments[0], ut)) {
        var n = arguments[0];if (0 === this.geometries.length) return null;for (var e = 0; e < this.geometries.length && (this.geometries[e].apply(n), !n.isDone()); e++) {}n.isGeometryChanged() && this.geometryChanged();
      } else if (Zs(arguments[0], at)) {
        var i = arguments[0];i.filter(this);for (var e = 0; e < this.geometries.length; e++) {
          this.geometries[e].apply(i);
        }
      } else if (Zs(arguments[0], A)) {
        var r = arguments[0];r.filter(this);for (var e = 0; e < this.geometries.length; e++) {
          this.geometries[e].apply(r);
        }
      }
    }, getBoundary: function getBoundary() {
      return this.checkNotGeometryCollection(this), h.shouldNeverReachHere(), null;
    }, clone: function clone() {
      var t = F.prototype.clone.call(this);t.geometries = new Array(this.geometries.length).fill(null);for (var e = 0; e < this.geometries.length; e++) {
        t.geometries[e] = this.geometries[e].clone();
      }return t;
    }, getGeometryType: function getGeometryType() {
      return "GeometryCollection";
    }, copy: function copy() {
      for (var t = new Array(this.geometries.length).fill(null), e = 0; e < t.length; e++) {
        t[e] = this.geometries[e].copy();
      }return new lt(t, this.factory);
    }, isEmpty: function isEmpty() {
      for (var t = 0; t < this.geometries.length; t++) {
        if (!this.geometries[t].isEmpty()) return !1;
      }return !0;
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return lt;
    } }), lt.serialVersionUID = -0x4f07bcb1f857d800, js(ht, lt), Ws(ht.prototype, { getSortIndex: function getSortIndex() {
      return F.SORTINDEX_MULTILINESTRING;
    }, equalsExact: function equalsExact() {
      if (2 === arguments.length) {
        var t = arguments[0],
            e = arguments[1];return !!this.isEquivalentClass(t) && lt.prototype.equalsExact.call(this, t, e);
      }return lt.prototype.equalsExact.apply(this, arguments);
    }, getBoundaryDimension: function getBoundaryDimension() {
      return this.isClosed() ? ot.FALSE : 0;
    }, isClosed: function isClosed() {
      if (this.isEmpty()) return !1;for (var t = 0; t < this.geometries.length; t++) {
        if (!this.geometries[t].isClosed()) return !1;
      }return !0;
    }, getDimension: function getDimension() {
      return 1;
    }, reverse: function reverse() {
      for (var t = this.geometries.length, e = new Array(t).fill(null), n = 0; n < this.geometries.length; n++) {
        e[t - 1 - n] = this.geometries[n].reverse();
      }return this.getFactory().createMultiLineString(e);
    },
    getBoundary: function getBoundary() {
      return new ct(this).getBoundary();
    }, getGeometryType: function getGeometryType() {
      return "MultiLineString";
    }, copy: function copy() {
      for (var t = new Array(this.geometries.length).fill(null), e = 0; e < t.length; e++) {
        t[e] = this.geometries[e].copy();
      }return new ht(t, this.factory);
    }, interfaces_: function interfaces_() {
      return [nt];
    }, getClass: function getClass() {
      return ht;
    } }), ht.serialVersionUID = 0x7155d2ab4afa8000, Ws(ct.prototype, { boundaryMultiLineString: function boundaryMultiLineString(t) {
      if (this.geom.isEmpty()) return this.getEmptyMultiPoint();var e = this.computeBoundaryCoordinates(t);return 1 === e.length ? this.geomFact.createPoint(e[0]) : this.geomFact.createMultiPointFromCoords(e);
    }, getBoundary: function getBoundary() {
      return this.geom instanceof It ? this.boundaryLineString(this.geom) : this.geom instanceof ht ? this.boundaryMultiLineString(this.geom) : this.geom.getBoundary();
    }, boundaryLineString: function boundaryLineString(t) {
      if (this.geom.isEmpty()) return this.getEmptyMultiPoint();if (t.isClosed()) {
        return this.bnRule.isInBoundary(2) ? t.getStartPoint() : this.geomFact.createMultiPoint();
      }return this.geomFact.createMultiPoint([t.getStartPoint(), t.getEndPoint()]);
    }, getEmptyMultiPoint: function getEmptyMultiPoint() {
      return this.geomFact.createMultiPoint();
    }, computeBoundaryCoordinates: function computeBoundaryCoordinates(t) {
      var e = new x();this.endpointMap = new et();for (var n = 0; n < t.getNumGeometries(); n++) {
        var i = t.getGeometryN(n);0 !== i.getNumPoints() && (this.addEndpoint(i.getCoordinateN(0)), this.addEndpoint(i.getCoordinateN(i.getNumPoints() - 1)));
      }for (var r = this.endpointMap.entrySet().iterator(); r.hasNext();) {
        var s = r.next(),
            o = s.getValue(),
            a = o.count;this.bnRule.isInBoundary(a) && e.add(s.getKey());
      }return Y.toCoordinateArray(e);
    }, addEndpoint: function addEndpoint(t) {
      var e = this.endpointMap.get(t);null === e && (e = new ft(), this.endpointMap.put(t, e)), e.count++;
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return ct;
    } }), ct.getBoundary = function () {
    if (1 === arguments.length) {
      var t = arguments[0],
          e = new ct(t);return e.getBoundary();
    }if (2 === arguments.length) {
      var n = arguments[0],
          i = arguments[1],
          e = new ct(n, i);return e.getBoundary();
    }
  }, Ws(ft.prototype, { interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return ft;
    } }), Ws(xt.prototype, { interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return xt;
    } }), xt.chars = function (t, e) {
    for (var n = new Array(e).fill(null), i = 0; i < e; i++) {
      n[i] = t;
    }return new String(n);
  }, xt.getStackTrace = function () {
    if (1 === arguments.length) {
      var t = arguments[0],
          e = new mt(),
          n = new gt(e);return t.printStackTrace(n), e.toString();
    }if (2 === arguments.length) {
      for (var i = arguments[0], r = arguments[1], s = "", o = new dt(xt.getStackTrace(i)), a = new yt(o), u = 0; u < r; u++) {
        try {
          s += a.readLine() + xt.NEWLINE;
        } catch (t) {
          if (!(t instanceof vt)) throw t;h.shouldNeverReachHere();
        } finally {}
      }return s;
    }
  }, xt.split = function (t, e) {
    for (var n = e.length, i = new x(), r = "" + t, s = r.indexOf(e); s >= 0;) {
      var o = r.substring(0, s);i.add(o), r = r.substring(s + n), s = r.indexOf(e);
    }r.length > 0 && i.add(r);for (var a = new Array(i.size()).fill(null), u = 0; u < a.length; u++) {
      a[u] = i.get(u);
    }return a;
  }, xt.toString = function () {
    if (1 === arguments.length) {
      var t = arguments[0];return xt.SIMPLE_ORDINATE_FORMAT.format(t);
    }
  }, xt.spaces = function (t) {
    return xt.chars(" ", t);
  }, xt.NEWLINE = _.getProperty("line.separator"), xt.SIMPLE_ORDINATE_FORMAT = new pt("0.#"), Ws(Et.prototype, { interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return Et;
    } }), Et.copyCoord = function (t, e, n, i) {
    for (var r = Math.min(t.getDimension(), n.getDimension()), s = 0; s < r; s++) {
      n.setOrdinate(i, s, t.getOrdinate(e, s));
    }
  }, Et.isRing = function (t) {
    var e = t.size();return 0 === e || !(e <= 3) && t.getOrdinate(0, O.X) === t.getOrdinate(e - 1, O.X) && t.getOrdinate(0, O.Y) === t.getOrdinate(e - 1, O.Y);
  }, Et.isEqual = function (t, e) {
    var n = t.size();if (n !== e.size()) return !1;for (var r = Math.min(t.getDimension(), e.getDimension()), s = 0; s < n; s++) {
      for (var o = 0; o < r; o++) {
        var a = t.getOrdinate(s, o),
            u = e.getOrdinate(s, o);if (t.getOrdinate(s, o) !== e.getOrdinate(s, o) && (!i.isNaN(a) || !i.isNaN(u))) return !1;
      }
    }return !0;
  }, Et.extend = function (t, e, n) {
    var i = t.create(n, e.getDimension()),
        r = e.size();if (Et.copy(e, 0, i, 0, r), r > 0) for (var s = r; s < n; s++) {
      Et.copy(e, r - 1, i, s, 1);
    }return i;
  }, Et.reverse = function (t) {
    for (var e = t.size() - 1, n = Math.trunc(e / 2), i = 0; i <= n; i++) {
      Et.swap(t, i, e - i);
    }
  }, Et.swap = function (t, e, n) {
    if (e === n) return null;for (var i = 0; i < t.getDimension(); i++) {
      var r = t.getOrdinate(e, i);t.setOrdinate(e, i, t.getOrdinate(n, i)), t.setOrdinate(n, i, r);
    }
  }, Et.copy = function (t, e, n, i, r) {
    for (var s = 0; s < r; s++) {
      Et.copyCoord(t, e + s, n, i + s);
    }
  }, Et.toString = function () {
    if (1 === arguments.length) {
      var t = arguments[0],
          e = t.size();if (0 === e) return "()";var n = t.getDimension(),
          i = new L();i.append("(");for (var r = 0; r < e; r++) {
        r > 0 && i.append(" ");for (var s = 0; s < n; s++) {
          s > 0 && i.append(","), i.append(xt.toString(t.getOrdinate(r, s)));
        }
      }return i.append(")"), i.toString();
    }
  }, Et.ensureValidRing = function (t, e) {
    var n = e.size();return 0 === n ? e : n <= 3 ? Et.createClosedRing(t, e, 4) : e.getOrdinate(0, O.X) === e.getOrdinate(n - 1, O.X) && e.getOrdinate(0, O.Y) === e.getOrdinate(n - 1, O.Y) ? e : Et.createClosedRing(t, e, n + 1);
  }, Et.createClosedRing = function (t, e, n) {
    var i = t.create(n, e.getDimension()),
        r = e.size();Et.copy(e, 0, i, 0, r);for (var s = r; s < n; s++) {
      Et.copy(e, 0, i, s, 1);
    }return i;
  }, js(It, F), Ws(It.prototype, { computeEnvelopeInternal: function computeEnvelopeInternal() {
      return this.isEmpty() ? new I() : this.points.expandEnvelope(new I());
    }, isRing: function isRing() {
      return this.isClosed() && this.isSimple();
    }, getSortIndex: function getSortIndex() {
      return F.SORTINDEX_LINESTRING;
    }, getCoordinates: function getCoordinates() {
      return this.points.toCoordinateArray();
    }, equalsExact: function equalsExact() {
      if (2 === arguments.length) {
        var t = arguments[0],
            e = arguments[1];if (!this.isEquivalentClass(t)) return !1;var n = t;if (this.points.size() !== n.points.size()) return !1;for (var i = 0; i < this.points.size(); i++) {
          if (!this.equal(this.points.getCoordinate(i), n.points.getCoordinate(i), e)) return !1;
        }return !0;
      }return F.prototype.equalsExact.apply(this, arguments);
    }, normalize: function normalize() {
      for (var t = 0; t < Math.trunc(this.points.size() / 2); t++) {
        var e = this.points.size() - 1 - t;if (!this.points.getCoordinate(t).equals(this.points.getCoordinate(e))) return this.points.getCoordinate(t).compareTo(this.points.getCoordinate(e)) > 0 && Et.reverse(this.points), null;
      }
    }, getCoordinate: function getCoordinate() {
      return this.isEmpty() ? null : this.points.getCoordinate(0);
    }, getBoundaryDimension: function getBoundaryDimension() {
      return this.isClosed() ? ot.FALSE : 0;
    }, isClosed: function isClosed() {
      return !this.isEmpty() && this.getCoordinateN(0).equals2D(this.getCoordinateN(this.getNumPoints() - 1));
    }, getEndPoint: function getEndPoint() {
      return this.isEmpty() ? null : this.getPointN(this.getNumPoints() - 1);
    }, getDimension: function getDimension() {
      return 1;
    }, getLength: function getLength() {
      return oe.computeLength(this.points);
    }, getNumPoints: function getNumPoints() {
      return this.points.size();
    }, reverse: function reverse() {
      var t = this.points.copy();return Et.reverse(t), this.getFactory().createLineString(t);
    }, compareToSameClass: function compareToSameClass() {
      if (1 === arguments.length) {
        for (var t = arguments[0], e = t, n = 0, i = 0; n < this.points.size() && i < e.points.size();) {
          var r = this.points.getCoordinate(n).compareTo(e.points.getCoordinate(i));if (0 !== r) return r;n++, i++;
        }return n < this.points.size() ? 1 : i < e.points.size() ? -1 : 0;
      }if (2 === arguments.length) {
        var s = arguments[0],
            o = arguments[1],
            e = s;return o.compare(this.points, e.points);
      }
    }, apply: function apply() {
      if (Zs(arguments[0], G)) for (var t = arguments[0], e = 0; e < this.points.size(); e++) {
        t.filter(this.points.getCoordinate(e));
      } else if (Zs(arguments[0], ut)) {
        var n = arguments[0];if (0 === this.points.size()) return null;for (var e = 0; e < this.points.size() && (n.filter(this.points, e), !n.isDone()); e++) {}n.isGeometryChanged() && this.geometryChanged();
      } else if (Zs(arguments[0], at)) {
        var i = arguments[0];i.filter(this);
      } else if (Zs(arguments[0], A)) {
        var r = arguments[0];r.filter(this);
      }
    }, getBoundary: function getBoundary() {
      return new ct(this).getBoundary();
    }, isEquivalentClass: function isEquivalentClass(t) {
      return t instanceof It;
    }, clone: function clone() {
      var t = F.prototype.clone.call(this);return t.points = this.points.clone(), t;
    }, getCoordinateN: function getCoordinateN(t) {
      return this.points.getCoordinate(t);
    }, getGeometryType: function getGeometryType() {
      return "LineString";
    }, copy: function copy() {
      return new It(this.points.copy(), this.factory);
    }, getCoordinateSequence: function getCoordinateSequence() {
      return this.points;
    }, isEmpty: function isEmpty() {
      return 0 === this.points.size();
    }, init: function init(t) {
      if (null === t && (t = this.getFactory().getCoordinateSequenceFactory().create([])), 1 === t.size()) throw new n("Invalid number of points in LineString (found " + t.size() + " - must be 0 or >= 2)");this.points = t;
    }, isCoordinate: function isCoordinate(t) {
      for (var e = 0; e < this.points.size(); e++) {
        if (this.points.getCoordinate(e).equals(t)) return !0;
      }return !1;
    }, getStartPoint: function getStartPoint() {
      return this.isEmpty() ? null : this.getPointN(0);
    }, getPointN: function getPointN(t) {
      return this.getFactory().createPoint(this.points.getCoordinate(t));
    }, interfaces_: function interfaces_() {
      return [nt];
    }, getClass: function getClass() {
      return It;
    } }), It.serialVersionUID = 0x2b2b51ba435c8e00, Ws(Nt.prototype, { interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return Nt;
    } }), js(Ct, F), Ws(Ct.prototype, { computeEnvelopeInternal: function computeEnvelopeInternal() {
      if (this.isEmpty()) return new I();var t = new I();return t.expandToInclude(this.coordinates.getX(0), this.coordinates.getY(0)), t;
    }, getSortIndex: function getSortIndex() {
      return F.SORTINDEX_POINT;
    }, getCoordinates: function getCoordinates() {
      return this.isEmpty() ? [] : [this.getCoordinate()];
    }, equalsExact: function equalsExact() {
      if (2 === arguments.length) {
        var t = arguments[0],
            e = arguments[1];return !!this.isEquivalentClass(t) && (!(!this.isEmpty() || !t.isEmpty()) || this.isEmpty() === t.isEmpty() && this.equal(t.getCoordinate(), this.getCoordinate(), e));
      }return F.prototype.equalsExact.apply(this, arguments);
    }, normalize: function normalize() {}, getCoordinate: function getCoordinate() {
      return 0 !== this.coordinates.size() ? this.coordinates.getCoordinate(0) : null;
    }, getBoundaryDimension: function getBoundaryDimension() {
      return ot.FALSE;
    }, getDimension: function getDimension() {
      return 0;
    }, getNumPoints: function getNumPoints() {
      return this.isEmpty() ? 0 : 1;
    }, reverse: function reverse() {
      return this.copy();
    }, getX: function getX() {
      if (null === this.getCoordinate()) throw new IllegalStateException("getX called on empty Point");return this.getCoordinate().x;
    }, compareToSameClass: function compareToSameClass() {
      if (1 === arguments.length) {
        var t = arguments[0],
            e = t;return this.getCoordinate().compareTo(e.getCoordinate());
      }if (2 === arguments.length) {
        var n = arguments[0],
            i = arguments[1],
            e = n;return i.compare(this.coordinates, e.coordinates);
      }
    }, apply: function apply() {
      if (Zs(arguments[0], G)) {
        var t = arguments[0];if (this.isEmpty()) return null;t.filter(this.getCoordinate());
      } else if (Zs(arguments[0], ut)) {
        var e = arguments[0];if (this.isEmpty()) return null;e.filter(this.coordinates, 0), e.isGeometryChanged() && this.geometryChanged();
      } else if (Zs(arguments[0], at)) {
        var n = arguments[0];n.filter(this);
      } else if (Zs(arguments[0], A)) {
        var i = arguments[0];i.filter(this);
      }
    }, getBoundary: function getBoundary() {
      return this.getFactory().createGeometryCollection(null);
    }, clone: function clone() {
      var t = F.prototype.clone.call(this);return t.coordinates = this.coordinates.clone(), t;
    }, getGeometryType: function getGeometryType() {
      return "Point";
    }, copy: function copy() {
      return new Ct(this.coordinates.copy(), this.factory);
    }, getCoordinateSequence: function getCoordinateSequence() {
      return this.coordinates;
    }, getY: function getY() {
      if (null === this.getCoordinate()) throw new IllegalStateException("getY called on empty Point");return this.getCoordinate().y;
    }, isEmpty: function isEmpty() {
      return 0 === this.coordinates.size();
    }, init: function init(t) {
      null === t && (t = this.getFactory().getCoordinateSequenceFactory().create([])), h.isTrue(t.size() <= 1), this.coordinates = t;
    }, isSimple: function isSimple() {
      return !0;
    }, interfaces_: function interfaces_() {
      return [Nt];
    }, getClass: function getClass() {
      return Ct;
    } }), Ct.serialVersionUID = 0x44077bad161cbc00, Ws(St.prototype, { interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return St;
    } }), js(wt, F), Ws(wt.prototype, { computeEnvelopeInternal: function computeEnvelopeInternal() {
      return this.shell.getEnvelopeInternal();
    }, getSortIndex: function getSortIndex() {
      return F.SORTINDEX_POLYGON;
    }, getCoordinates: function getCoordinates() {
      if (this.isEmpty()) return [];for (var t = new Array(this.getNumPoints()).fill(null), e = -1, n = this.shell.getCoordinates(), i = 0; i < n.length; i++) {
        e++, t[e] = n[i];
      }for (var r = 0; r < this.holes.length; r++) {
        for (var s = this.holes[r].getCoordinates(), o = 0; o < s.length; o++) {
          e++, t[e] = s[o];
        }
      }return t;
    }, getArea: function getArea() {
      var t = 0;t += Math.abs(oe.signedArea(this.shell.getCoordinateSequence()));for (var e = 0; e < this.holes.length; e++) {
        t -= Math.abs(oe.signedArea(this.holes[e].getCoordinateSequence()));
      }return t;
    }, isRectangle: function isRectangle() {
      if (0 !== this.getNumInteriorRing()) return !1;if (null === this.shell) return !1;if (5 !== this.shell.getNumPoints()) return !1;for (var t = this.shell.getCoordinateSequence(), e = this.getEnvelopeInternal(), n = 0; n < 5; n++) {
        var i = t.getX(n);if (i !== e.getMinX() && i !== e.getMaxX()) return !1;var r = t.getY(n);if (r !== e.getMinY() && r !== e.getMaxY()) return !1;
      }for (var s = t.getX(0), o = t.getY(0), n = 1; n <= 4; n++) {
        var i = t.getX(n),
            r = t.getY(n);if (i !== s === (r !== o)) return !1;s = i, o = r;
      }return !0;
    }, equalsExact: function equalsExact() {
      if (2 === arguments.length) {
        var t = arguments[0],
            e = arguments[1];if (!this.isEquivalentClass(t)) return !1;var n = t,
            i = this.shell,
            r = n.shell;if (!i.equalsExact(r, e)) return !1;if (this.holes.length !== n.holes.length) return !1;for (var s = 0; s < this.holes.length; s++) {
          if (!this.holes[s].equalsExact(n.holes[s], e)) return !1;
        }return !0;
      }return F.prototype.equalsExact.apply(this, arguments);
    }, normalize: function normalize() {
      if (0 === arguments.length) {
        this.normalize(this.shell, !0);for (var t = 0; t < this.holes.length; t++) {
          this.normalize(this.holes[t], !1);
        }st.sort(this.holes);
      } else if (2 === arguments.length) {
        var e = arguments[0],
            n = arguments[1];if (e.isEmpty()) return null;var i = new Array(e.getCoordinates().length - 1).fill(null);_.arraycopy(e.getCoordinates(), 0, i, 0, i.length);var r = Y.minCoordinate(e.getCoordinates());Y.scroll(i, r), _.arraycopy(i, 0, e.getCoordinates(), 0, i.length), e.getCoordinates()[i.length] = i[0], oe.isCCW(e.getCoordinates()) === n && Y.reverse(e.getCoordinates());
      }
    }, getCoordinate: function getCoordinate() {
      return this.shell.getCoordinate();
    }, getNumInteriorRing: function getNumInteriorRing() {
      return this.holes.length;
    }, getBoundaryDimension: function getBoundaryDimension() {
      return 1;
    }, getDimension: function getDimension() {
      return 2;
    }, getLength: function getLength() {
      var t = 0;t += this.shell.getLength();for (var e = 0; e < this.holes.length; e++) {
        t += this.holes[e].getLength();
      }return t;
    }, getNumPoints: function getNumPoints() {
      for (var t = this.shell.getNumPoints(), e = 0; e < this.holes.length; e++) {
        t += this.holes[e].getNumPoints();
      }return t;
    }, reverse: function reverse() {
      var t = this.copy();t.shell = this.shell.copy().reverse(), t.holes = new Array(this.holes.length).fill(null);for (var e = 0; e < this.holes.length; e++) {
        t.holes[e] = this.holes[e].copy().reverse();
      }return t;
    }, convexHull: function convexHull() {
      return this.getExteriorRing().convexHull();
    }, compareToSameClass: function compareToSameClass() {
      if (1 === arguments.length) {
        var t = arguments[0],
            e = this.shell,
            n = t.shell;return e.compareToSameClass(n);
      }if (2 === arguments.length) {
        var i = arguments[0],
            r = arguments[1],
            s = i,
            e = this.shell,
            n = s.shell,
            o = e.compareToSameClass(n, r);if (0 !== o) return o;for (var a = this.getNumInteriorRing(), u = s.getNumInteriorRing(), l = 0; l < a && l < u;) {
          var h = this.getInteriorRingN(l),
              c = s.getInteriorRingN(l),
              f = h.compareToSameClass(c, r);if (0 !== f) return f;l++;
        }return l < a ? 1 : l < u ? -1 : 0;
      }
    }, apply: function apply() {
      if (Zs(arguments[0], G)) {
        var t = arguments[0];this.shell.apply(t);for (var e = 0; e < this.holes.length; e++) {
          this.holes[e].apply(t);
        }
      } else if (Zs(arguments[0], ut)) {
        var n = arguments[0];if (this.shell.apply(n), !n.isDone()) for (var e = 0; e < this.holes.length && (this.holes[e].apply(n), !n.isDone()); e++) {}n.isGeometryChanged() && this.geometryChanged();
      } else if (Zs(arguments[0], at)) {
        var i = arguments[0];i.filter(this);
      } else if (Zs(arguments[0], A)) {
        var r = arguments[0];r.filter(this), this.shell.apply(r);for (var e = 0; e < this.holes.length; e++) {
          this.holes[e].apply(r);
        }
      }
    }, getBoundary: function getBoundary() {
      if (this.isEmpty()) return this.getFactory().createMultiLineString();var t = new Array(this.holes.length + 1).fill(null);t[0] = this.shell;for (var e = 0; e < this.holes.length; e++) {
        t[e + 1] = this.holes[e];
      }return t.length <= 1 ? this.getFactory().createLinearRing(t[0].getCoordinateSequence()) : this.getFactory().createMultiLineString(t);
    }, clone: function clone() {
      var t = F.prototype.clone.call(this);t.shell = this.shell.clone(), t.holes = new Array(this.holes.length).fill(null);for (var e = 0; e < this.holes.length; e++) {
        t.holes[e] = this.holes[e].clone();
      }return t;
    }, getGeometryType: function getGeometryType() {
      return "Polygon";
    }, copy: function copy() {
      for (var t = this.shell.copy(), e = new Array(this.holes.length).fill(null), n = 0; n < e.length; n++) {
        e[n] = this.holes[n].copy();
      }return new wt(t, e, this.factory);
    }, getExteriorRing: function getExteriorRing() {
      return this.shell;
    }, isEmpty: function isEmpty() {
      return this.shell.isEmpty();
    }, getInteriorRingN: function getInteriorRingN(t) {
      return this.holes[t];
    }, interfaces_: function interfaces_() {
      return [St];
    }, getClass: function getClass() {
      return wt;
    } }), wt.serialVersionUID = -0x307ffefd8dc97200, js(Lt, lt), Ws(Lt.prototype, { getSortIndex: function getSortIndex() {
      return F.SORTINDEX_MULTIPOINT;
    }, isValid: function isValid() {
      return !0;
    }, equalsExact: function equalsExact() {
      if (2 === arguments.length) {
        var t = arguments[0],
            e = arguments[1];return !!this.isEquivalentClass(t) && lt.prototype.equalsExact.call(this, t, e);
      }return lt.prototype.equalsExact.apply(this, arguments);
    }, getCoordinate: function getCoordinate() {
      if (1 === arguments.length) {
        var t = arguments[0];return this.geometries[t].getCoordinate();
      }return lt.prototype.getCoordinate.apply(this, arguments);
    }, getBoundaryDimension: function getBoundaryDimension() {
      return ot.FALSE;
    }, getDimension: function getDimension() {
      return 0;
    }, getBoundary: function getBoundary() {
      return this.getFactory().createGeometryCollection(null);
    }, getGeometryType: function getGeometryType() {
      return "MultiPoint";
    }, copy: function copy() {
      for (var t = new Array(this.geometries.length).fill(null), e = 0; e < t.length; e++) {
        t[e] = this.geometries[e].copy();
      }return new Lt(t, this.factory);
    }, interfaces_: function interfaces_() {
      return [Nt];
    }, getClass: function getClass() {
      return Lt;
    } }), Lt.serialVersionUID = -0x6fb1ed4162e0fc00, js(Rt, It), Ws(Rt.prototype, { getSortIndex: function getSortIndex() {
      return F.SORTINDEX_LINEARRING;
    }, getBoundaryDimension: function getBoundaryDimension() {
      return ot.FALSE;
    }, isClosed: function isClosed() {
      return !!this.isEmpty() || It.prototype.isClosed.call(this);
    }, reverse: function reverse() {
      var t = this.points.copy();return Et.reverse(t), this.getFactory().createLinearRing(t);
    }, validateConstruction: function validateConstruction() {
      if (!this.isEmpty() && !It.prototype.isClosed.call(this)) throw new n("Points of LinearRing do not form a closed linestring");if (this.getCoordinateSequence().size() >= 1 && this.getCoordinateSequence().size() < Rt.MINIMUM_VALID_SIZE) throw new n("Invalid number of points in LinearRing (found " + this.getCoordinateSequence().size() + " - must be 0 or >= 4)");
    }, getGeometryType: function getGeometryType() {
      return "LinearRing";
    }, copy: function copy() {
      return new Rt(this.points.copy(), this.factory);
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return Rt;
    } }), Rt.MINIMUM_VALID_SIZE = 4, Rt.serialVersionUID = -0x3b229e262367a600, js(Tt, lt), Ws(Tt.prototype, { getSortIndex: function getSortIndex() {
      return F.SORTINDEX_MULTIPOLYGON;
    }, equalsExact: function equalsExact() {
      if (2 === arguments.length) {
        var t = arguments[0],
            e = arguments[1];return !!this.isEquivalentClass(t) && lt.prototype.equalsExact.call(this, t, e);
      }return lt.prototype.equalsExact.apply(this, arguments);
    }, getBoundaryDimension: function getBoundaryDimension() {
      return 1;
    }, getDimension: function getDimension() {
      return 2;
    }, reverse: function reverse() {
      for (var t = this.geometries.length, e = new Array(t).fill(null), n = 0; n < this.geometries.length; n++) {
        e[n] = this.geometries[n].reverse();
      }return this.getFactory().createMultiPolygon(e);
    }, getBoundary: function getBoundary() {
      if (this.isEmpty()) return this.getFactory().createMultiLineString();for (var t = new x(), e = 0; e < this.geometries.length; e++) {
        for (var n = this.geometries[e], i = n.getBoundary(), r = 0; r < i.getNumGeometries(); r++) {
          t.add(i.getGeometryN(r));
        }
      }var s = new Array(t.size()).fill(null);return this.getFactory().createMultiLineString(t.toArray(s));
    }, getGeometryType: function getGeometryType() {
      return "MultiPolygon";
    }, copy: function copy() {
      for (var t = new Array(this.geometries.length).fill(null), e = 0; e < t.length; e++) {
        t[e] = this.geometries[e].copy();
      }return new Tt(t, this.factory);
    }, interfaces_: function interfaces_() {
      return [St];
    }, getClass: function getClass() {
      return Tt;
    } }), Tt.serialVersionUID = -0x7a5aa1369171980, Ws(Pt.prototype, { setCopyUserData: function setCopyUserData(t) {
      this.isUserDataCopied = t;
    }, edit: function edit(t, e) {
      if (null === t) return null;var n = this.editInternal(t, e);return this.isUserDataCopied && n.setUserData(t.getUserData()), n;
    }, editInternal: function editInternal(t, e) {
      return null === this.factory && (this.factory = t.getFactory()), t instanceof lt ? this.editGeometryCollection(t, e) : t instanceof wt ? this.editPolygon(t, e) : t instanceof Ct ? e.edit(t, this.factory) : t instanceof It ? e.edit(t, this.factory) : (h.shouldNeverReachHere("Unsupported Geometry class: " + t.getClass().getName()), null);
    }, editGeometryCollection: function editGeometryCollection(t, e) {
      for (var n = e.edit(t, this.factory), i = new x(), r = 0; r < n.getNumGeometries(); r++) {
        var s = this.edit(n.getGeometryN(r), e);null === s || s.isEmpty() || i.add(s);
      }return n.getClass() === Lt ? this.factory.createMultiPoint(i.toArray([])) : n.getClass() === ht ? this.factory.createMultiLineString(i.toArray([])) : n.getClass() === Tt ? this.factory.createMultiPolygon(i.toArray([])) : this.factory.createGeometryCollection(i.toArray([]));
    }, editPolygon: function editPolygon(t, e) {
      var n = e.edit(t, this.factory);if (null === n && (n = this.factory.createPolygon(null)), n.isEmpty()) return n;var i = this.edit(n.getExteriorRing(), e);if (null === i || i.isEmpty()) return this.factory.createPolygon();for (var r = new x(), s = 0; s < n.getNumInteriorRing(); s++) {
        var o = this.edit(n.getInteriorRingN(s), e);null === o || o.isEmpty() || r.add(o);
      }return this.factory.createPolygon(i, r.toArray([]));
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return Pt;
    } }), Pt.GeometryEditorOperation = bt, Ws(Ot.prototype, { edit: function edit(t, e) {
      return t;
    }, interfaces_: function interfaces_() {
      return [bt];
    }, getClass: function getClass() {
      return Ot;
    } }), Ws(_t.prototype, { edit: function edit(t, e) {
      var n = this.editCoordinates(t.getCoordinates(), t);return null === n ? t : t instanceof Rt ? e.createLinearRing(n) : t instanceof It ? e.createLineString(n) : t instanceof Ct ? n.length > 0 ? e.createPoint(n[0]) : e.createPoint() : t;
    }, interfaces_: function interfaces_() {
      return [bt];
    }, getClass: function getClass() {
      return _t;
    } }), Ws(Mt.prototype, { edit: function edit(t, e) {
      return t instanceof Rt ? e.createLinearRing(this.edit(t.getCoordinateSequence(), t)) : t instanceof It ? e.createLineString(this.edit(t.getCoordinateSequence(), t)) : t instanceof Ct ? e.createPoint(this.edit(t.getCoordinateSequence(), t)) : t;
    }, interfaces_: function interfaces_() {
      return [bt];
    }, getClass: function getClass() {
      return Mt;
    } }), Pt.NoOpGeometryOperation = Ot, Pt.CoordinateOperation = _t, Pt.CoordinateSequenceOperation = Mt, Ws(Dt.prototype, { setOrdinate: function setOrdinate(t, e, i) {
      switch (e) {case O.X:
          this.coordinates[t].x = i;break;case O.Y:
          this.coordinates[t].y = i;break;case O.Z:
          this.coordinates[t].z = i;break;default:
          throw new n("invalid ordinateIndex");}
    }, size: function size() {
      return this.coordinates.length;
    }, getOrdinate: function getOrdinate(t, e) {
      switch (e) {case O.X:
          return this.coordinates[t].x;case O.Y:
          return this.coordinates[t].y;case O.Z:
          return this.coordinates[t].z;}return i.NaN;
    }, getCoordinate: function getCoordinate() {
      if (1 === arguments.length) {
        var t = arguments[0];return this.coordinates[t];
      }if (2 === arguments.length) {
        var e = arguments[0],
            n = arguments[1];n.x = this.coordinates[e].x, n.y = this.coordinates[e].y, n.z = this.coordinates[e].z;
      }
    }, getCoordinateCopy: function getCoordinateCopy(t) {
      return new c(this.coordinates[t]);
    }, getDimension: function getDimension() {
      return this.dimension;
    }, getX: function getX(t) {
      return this.coordinates[t].x;
    }, clone: function clone() {
      for (var t = new Array(this.size()).fill(null), e = 0; e < this.coordinates.length; e++) {
        t[e] = this.coordinates[e].clone();
      }return new Dt(t, this.dimension);
    }, expandEnvelope: function expandEnvelope(t) {
      for (var e = 0; e < this.coordinates.length; e++) {
        t.expandToInclude(this.coordinates[e]);
      }return t;
    }, copy: function copy() {
      for (var t = new Array(this.size()).fill(null), e = 0; e < this.coordinates.length; e++) {
        t[e] = this.coordinates[e].copy();
      }return new Dt(t, this.dimension);
    }, toString: function toString() {
      if (this.coordinates.length > 0) {
        var t = new L(17 * this.coordinates.length);t.append("("), t.append(this.coordinates[0]);for (var e = 1; e < this.coordinates.length; e++) {
          t.append(", "), t.append(this.coordinates[e]);
        }return t.append(")"), t.toString();
      }return "()";
    }, getY: function getY(t) {
      return this.coordinates[t].y;
    }, toCoordinateArray: function toCoordinateArray() {
      return this.coordinates;
    }, interfaces_: function interfaces_() {
      return [O, a];
    }, getClass: function getClass() {
      return Dt;
    } }), Dt.serialVersionUID = -0xcb44a778db18e00, Ws(At.prototype, { readResolve: function readResolve() {
      return At.instance();
    }, create: function create() {
      if (1 === arguments.length) {
        if (arguments[0] instanceof Array) {
          return new Dt(arguments[0]);
        }if (Zs(arguments[0], O)) {
          return new Dt(arguments[0]);
        }
      } else if (2 === arguments.length) {
        var t = arguments[0],
            e = arguments[1];return e > 3 && (e = 3), e < 2 ? new Dt(t) : new Dt(t, e);
      }
    }, interfaces_: function interfaces_() {
      return [D, a];
    }, getClass: function getClass() {
      return At;
    } }), At.instance = function () {
    return At.instanceObject;
  }, At.serialVersionUID = -0x38e49fa6cf6f2e00, At.instanceObject = new At();var to,
      eo = Object.defineProperty,
      no = function (t, e) {
    function n(t) {
      if (!this || this.constructor !== n) return new n(t);this._keys = [], this._values = [], this._itp = [], this.objectOnly = e, t && Gt.call(this, t);
    }return e || eo(t, "size", { get: jt }), t.constructor = n, n.prototype = t, n;
  }({ delete: qt, has: Vt, get: Bt, set: kt, keys: Ut, values: Xt, entries: Ht, forEach: Kt, clear: Yt }),
      io = "undefined" != typeof Map && Map.prototype.values ? Map : no;Zt.prototype = new H(), Zt.prototype.get = function (t) {
    return this.map_.get(t) || null;
  }, Zt.prototype.put = function (t, e) {
    return this.map_.set(t, e), e;
  }, Zt.prototype.values = function () {
    for (var t = new x(), e = this.map_.values(), n = e.next(); !n.done;) {
      t.add(n.value), n = e.next();
    }return t;
  }, Zt.prototype.entrySet = function () {
    var t = new K();return this.map_.entries().forEach(function (e) {
      return t.add(e);
    }), t;
  }, Zt.prototype.size = function () {
    return this.map_.size();
  }, Ws(Qt.prototype, { equals: function equals(t) {
      if (!(t instanceof Qt)) return !1;var e = t;return this.modelType === e.modelType && this.scale === e.scale;
    }, compareTo: function compareTo(t) {
      var e = t,
          n = this.getMaximumSignificantDigits(),
          i = e.getMaximumSignificantDigits();return new R(n).compareTo(new R(i));
    }, getScale: function getScale() {
      return this.scale;
    }, isFloating: function isFloating() {
      return this.modelType === Qt.FLOATING || this.modelType === Qt.FLOATING_SINGLE;
    }, getType: function getType() {
      return this.modelType;
    }, toString: function toString() {
      var t = "UNKNOWN";return this.modelType === Qt.FLOATING ? t = "Floating" : this.modelType === Qt.FLOATING_SINGLE ? t = "Floating-Single" : this.modelType === Qt.FIXED && (t = "Fixed (Scale=" + this.getScale() + ")"), t;
    }, makePrecise: function makePrecise() {
      if ("number" == typeof arguments[0]) {
        var t = arguments[0];if (i.isNaN(t)) return t;if (this.modelType === Qt.FLOATING_SINGLE) {
          return t;
        }return this.modelType === Qt.FIXED ? Math.round(t * this.scale) / this.scale : t;
      }if (arguments[0] instanceof c) {
        var e = arguments[0];if (this.modelType === Qt.FLOATING) return null;e.x = this.makePrecise(e.x), e.y = this.makePrecise(e.y);
      }
    }, getMaximumSignificantDigits: function getMaximumSignificantDigits() {
      var t = 16;return this.modelType === Qt.FLOATING ? t = 16 : this.modelType === Qt.FLOATING_SINGLE ? t = 6 : this.modelType === Qt.FIXED && (t = 1 + Math.trunc(Math.ceil(Math.log(this.getScale()) / Math.log(10)))), t;
    }, setScale: function setScale(t) {
      this.scale = Math.abs(t);
    }, interfaces_: function interfaces_() {
      return [a, r];
    }, getClass: function getClass() {
      return Qt;
    } }), Qt.mostPrecise = function (t, e) {
    return t.compareTo(e) >= 0 ? t : e;
  }, Ws(Jt.prototype, { readResolve: function readResolve() {
      return Jt.nameToTypeMap.get(this.name);
    }, toString: function toString() {
      return this.name;
    }, interfaces_: function interfaces_() {
      return [a];
    }, getClass: function getClass() {
      return Jt;
    } }), Jt.serialVersionUID = -552860263173159e4, Jt.nameToTypeMap = new Zt(), Qt.Type = Jt, Qt.serialVersionUID = 0x6bee6404e9a25c00, Qt.FIXED = new Jt("FIXED"), Qt.FLOATING = new Jt("FLOATING"), Qt.FLOATING_SINGLE = new Jt("FLOATING SINGLE"), Qt.maximumPreciseValue = 9007199254740992, Ws($t.prototype, { toGeometry: function toGeometry(t) {
      return t.isNull() ? this.createPoint(null) : t.getMinX() === t.getMaxX() && t.getMinY() === t.getMaxY() ? this.createPoint(new c(t.getMinX(), t.getMinY())) : t.getMinX() === t.getMaxX() || t.getMinY() === t.getMaxY() ? this.createLineString([new c(t.getMinX(), t.getMinY()), new c(t.getMaxX(), t.getMaxY())]) : this.createPolygon(this.createLinearRing([new c(t.getMinX(), t.getMinY()), new c(t.getMinX(), t.getMaxY()), new c(t.getMaxX(), t.getMaxY()), new c(t.getMaxX(), t.getMinY()), new c(t.getMinX(), t.getMinY())]), null);
    }, createLineString: function createLineString() {
      if (0 === arguments.length) return this.createLineString(this.getCoordinateSequenceFactory().create([]));if (1 === arguments.length) {
        if (arguments[0] instanceof Array) {
          var t = arguments[0];return this.createLineString(null !== t ? this.getCoordinateSequenceFactory().create(t) : null);
        }if (Zs(arguments[0], O)) {
          return new It(arguments[0], this);
        }
      }
    }, createMultiLineString: function createMultiLineString() {
      if (0 === arguments.length) return new ht(null, this);if (1 === arguments.length) {
        return new ht(arguments[0], this);
      }
    }, buildGeometry: function buildGeometry(t) {
      for (var e = null, n = !1, i = !1, r = t.iterator(); r.hasNext();) {
        var s = r.next(),
            o = s.getClass();null === e && (e = o), o !== e && (n = !0), s.isGeometryCollectionOrDerived() && (i = !0);
      }if (null === e) return this.createGeometryCollection();if (n || i) return this.createGeometryCollection($t.toGeometryArray(t));var a = t.iterator().next();if (t.size() > 1) {
        if (a instanceof wt) return this.createMultiPolygon($t.toPolygonArray(t));if (a instanceof It) return this.createMultiLineString($t.toLineStringArray(t));if (a instanceof Ct) return this.createMultiPoint($t.toPointArray(t));h.shouldNeverReachHere("Unhandled class: " + a.getClass().getName());
      }return a;
    }, createMultiPointFromCoords: function createMultiPointFromCoords(t) {
      return this.createMultiPoint(null !== t ? this.getCoordinateSequenceFactory().create(t) : null);
    }, createPoint: function createPoint() {
      if (0 === arguments.length) return this.createPoint(this.getCoordinateSequenceFactory().create([]));if (1 === arguments.length) {
        if (arguments[0] instanceof c) {
          var t = arguments[0];return this.createPoint(null !== t ? this.getCoordinateSequenceFactory().create([t]) : null);
        }if (Zs(arguments[0], O)) {
          return new Ct(arguments[0], this);
        }
      }
    }, getCoordinateSequenceFactory: function getCoordinateSequenceFactory() {
      return this.coordinateSequenceFactory;
    }, createPolygon: function createPolygon() {
      if (0 === arguments.length) return new wt(null, null, this);if (1 === arguments.length) {
        if (Zs(arguments[0], O)) {
          var t = arguments[0];return this.createPolygon(this.createLinearRing(t));
        }if (arguments[0] instanceof Array) {
          var e = arguments[0];return this.createPolygon(this.createLinearRing(e));
        }if (arguments[0] instanceof Rt) {
          var n = arguments[0];return this.createPolygon(n, null);
        }
      } else if (2 === arguments.length) {
        var i = arguments[0],
            r = arguments[1];return new wt(i, r, this);
      }
    }, getSRID: function getSRID() {
      return this.SRID;
    }, createGeometryCollection: function createGeometryCollection() {
      if (0 === arguments.length) return new lt(null, this);if (1 === arguments.length) {
        return new lt(arguments[0], this);
      }
    }, createGeometry: function createGeometry(t) {
      return new Pt(this).edit(t, { edit: function edit() {
          if (2 === arguments.length) {
            var t = arguments[0];return arguments[1], this.coordinateSequenceFactory.create(t);
          }
        } });
    }, getPrecisionModel: function getPrecisionModel() {
      return this.precisionModel;
    }, createLinearRing: function createLinearRing() {
      if (0 === arguments.length) return this.createLinearRing(this.getCoordinateSequenceFactory().create([]));if (1 === arguments.length) {
        if (arguments[0] instanceof Array) {
          var t = arguments[0];return this.createLinearRing(null !== t ? this.getCoordinateSequenceFactory().create(t) : null);
        }if (Zs(arguments[0], O)) {
          return new Rt(arguments[0], this);
        }
      }
    }, createMultiPolygon: function createMultiPolygon() {
      if (0 === arguments.length) return new Tt(null, this);if (1 === arguments.length) {
        return new Tt(arguments[0], this);
      }
    }, createMultiPoint: function createMultiPoint() {
      if (0 === arguments.length) return new Lt(null, this);if (1 === arguments.length) {
        if (arguments[0] instanceof Array) {
          return new Lt(arguments[0], this);
        }if (arguments[0] instanceof Array) {
          var t = arguments[0];return this.createMultiPoint(null !== t ? this.getCoordinateSequenceFactory().create(t) : null);
        }if (Zs(arguments[0], O)) {
          var e = arguments[0];if (null === e) return this.createMultiPoint(new Array(0).fill(null));for (var n = new Array(e.size()).fill(null), i = 0; i < e.size(); i++) {
            var r = this.getCoordinateSequenceFactory().create(1, e.getDimension());Et.copy(e, i, r, 0, 1), n[i] = this.createPoint(r);
          }return this.createMultiPoint(n);
        }
      }
    }, interfaces_: function interfaces_() {
      return [a];
    }, getClass: function getClass() {
      return $t;
    } }), $t.toMultiPolygonArray = function (t) {
    var e = new Array(t.size()).fill(null);return t.toArray(e);
  }, $t.toGeometryArray = function (t) {
    if (null === t) return null;var e = new Array(t.size()).fill(null);return t.toArray(e);
  }, $t.getDefaultCoordinateSequenceFactory = function () {
    return At.instance();
  }, $t.toMultiLineStringArray = function (t) {
    var e = new Array(t.size()).fill(null);return t.toArray(e);
  }, $t.toLineStringArray = function (t) {
    var e = new Array(t.size()).fill(null);return t.toArray(e);
  }, $t.toMultiPointArray = function (t) {
    var e = new Array(t.size()).fill(null);return t.toArray(e);
  }, $t.toLinearRingArray = function (t) {
    var e = new Array(t.size()).fill(null);return t.toArray(e);
  }, $t.toPointArray = function (t) {
    var e = new Array(t.size()).fill(null);return t.toArray(e);
  }, $t.toPolygonArray = function (t) {
    var e = new Array(t.size()).fill(null);return t.toArray(e);
  }, $t.createPointFromInternalCoord = function (t, e) {
    return e.getPrecisionModel().makePrecise(t), e.getFactory().createPoint(t);
  }, $t.serialVersionUID = -0x5ea75f2051eeb400;var ro = { typeStr: /^\s*(\w+)\s*\(\s*(.*)\s*\)\s*$/, emptyTypeStr: /^\s*(\w+)\s*EMPTY\s*$/, spaces: /\s+/, parenComma: /\)\s*,\s*\(/, doubleParenComma: /\)\s*\)\s*,\s*\(\s*\(/, trimParens: /^\s*\(?(.*?)\)?\s*$/ };Ws(te.prototype, { read: function read(t) {
      var e, n, i;t = t.replace(/[\n\r]/g, " ");var r = ro.typeStr.exec(t);if (t.search("EMPTY") !== -1 && (r = ro.emptyTypeStr.exec(t), r[2] = void 0), r && (n = r[1].toLowerCase(), i = r[2], oo[n] && (e = oo[n].apply(this, [i]))), void 0 === e) throw new Error("Could not parse WKT " + t);return e;
    },
    write: function write(t) {
      return this.extractGeometry(t);
    }, extractGeometry: function extractGeometry(t) {
      var e = t.getGeometryType().toLowerCase();if (!so[e]) return null;var n = e.toUpperCase();return t.isEmpty() ? n + " EMPTY" : n + "(" + so[e].apply(this, [t]) + ")";
    } });var so = { coordinate: function coordinate(t) {
      return t.x + " " + t.y;
    }, point: function point(t) {
      return so.coordinate.call(this, t.coordinates.coordinates[0]);
    }, multipoint: function multipoint(t) {
      for (var e = [], n = 0, i = t.geometries.length; n < i; ++n) {
        e.push("(" + so.point.apply(this, [t.geometries[n]]) + ")");
      }return e.join(",");
    }, linestring: function linestring(t) {
      for (var e = [], n = 0, i = t.points.coordinates.length; n < i; ++n) {
        e.push(so.coordinate.apply(this, [t.points.coordinates[n]]));
      }return e.join(",");
    }, linearring: function linearring(t) {
      for (var e = [], n = 0, i = t.points.coordinates.length; n < i; ++n) {
        e.push(so.coordinate.apply(this, [t.points.coordinates[n]]));
      }return e.join(",");
    }, multilinestring: function multilinestring(t) {
      for (var e = [], n = 0, i = t.geometries.length; n < i; ++n) {
        e.push("(" + so.linestring.apply(this, [t.geometries[n]]) + ")");
      }return e.join(",");
    }, polygon: function polygon(t) {
      var e = [];e.push("(" + so.linestring.apply(this, [t.shell]) + ")");for (var n = 0, i = t.holes.length; n < i; ++n) {
        e.push("(" + so.linestring.apply(this, [t.holes[n]]) + ")");
      }return e.join(",");
    }, multipolygon: function multipolygon(t) {
      for (var e = [], n = 0, i = t.geometries.length; n < i; ++n) {
        e.push("(" + so.polygon.apply(this, [t.geometries[n]]) + ")");
      }return e.join(",");
    }, geometrycollection: function geometrycollection(t) {
      for (var e = [], n = 0, i = t.geometries.length; n < i; ++n) {
        e.push(this.extractGeometry(t.geometries[n]));
      }return e.join(",");
    } },
      oo = { point: function point(t) {
      if (void 0 === t) return this.geometryFactory.createPoint();var e = t.trim().split(ro.spaces);return this.geometryFactory.createPoint(new c(Number.parseFloat(e[0]), Number.parseFloat(e[1])));
    }, multipoint: function multipoint(t) {
      if (void 0 === t) return this.geometryFactory.createMultiPoint();for (var e, n = t.trim().split(","), i = [], r = 0, s = n.length; r < s; ++r) {
        e = n[r].replace(ro.trimParens, "$1"), i.push(oo.point.apply(this, [e]));
      }return this.geometryFactory.createMultiPoint(i);
    }, linestring: function linestring(t) {
      if (void 0 === t) return this.geometryFactory.createLineString();for (var e, n = t.trim().split(","), i = [], r = 0, s = n.length; r < s; ++r) {
        e = n[r].trim().split(ro.spaces), i.push(new c(Number.parseFloat(e[0]), Number.parseFloat(e[1])));
      }return this.geometryFactory.createLineString(i);
    }, linearring: function linearring(t) {
      if (void 0 === t) return this.geometryFactory.createLinearRing();for (var e, n = t.trim().split(","), i = [], r = 0, s = n.length; r < s; ++r) {
        e = n[r].trim().split(ro.spaces), i.push(new c(Number.parseFloat(e[0]), Number.parseFloat(e[1])));
      }return this.geometryFactory.createLinearRing(i);
    }, multilinestring: function multilinestring(t) {
      if (void 0 === t) return this.geometryFactory.createMultiLineString();for (var e, n = t.trim().split(ro.parenComma), i = [], r = 0, s = n.length; r < s; ++r) {
        e = n[r].replace(ro.trimParens, "$1"), i.push(oo.linestring.apply(this, [e]));
      }return this.geometryFactory.createMultiLineString(i);
    }, polygon: function polygon(t) {
      if (void 0 === t) return this.geometryFactory.createPolygon();for (var e, n, i, r, s = t.trim().split(ro.parenComma), o = [], a = 0, u = s.length; a < u; ++a) {
        e = s[a].replace(ro.trimParens, "$1"), n = oo.linestring.apply(this, [e]), i = this.geometryFactory.createLinearRing(n.points), 0 === a ? r = i : o.push(i);
      }return this.geometryFactory.createPolygon(r, o);
    }, multipolygon: function multipolygon(t) {
      if (void 0 === t) return this.geometryFactory.createMultiPolygon();for (var e, n = t.trim().split(ro.doubleParenComma), i = [], r = 0, s = n.length; r < s; ++r) {
        e = n[r].replace(ro.trimParens, "$1"), i.push(oo.polygon.apply(this, [e]));
      }return this.geometryFactory.createMultiPolygon(i);
    }, geometrycollection: function geometrycollection(t) {
      if (void 0 === t) return this.geometryFactory.createGeometryCollection();t = t.replace(/,\s*([A-Za-z])/g, "|$1");for (var e = t.trim().split("|"), n = [], i = 0, r = e.length; i < r; ++i) {
        n.push(this.read(e[i]));
      }return this.geometryFactory.createGeometryCollection(n);
    } };Ws(ee.prototype, { write: function write(t) {
      return this.parser.write(t);
    } }), Ws(ee, { toLineString: function toLineString(t, e) {
      if (2 !== arguments.length) throw new Error("Not implemented");return "LINESTRING ( " + t.x + " " + t.y + ", " + e.x + " " + e.y + " )";
    } }), Ws(ne.prototype, { getIndexAlongSegment: function getIndexAlongSegment(t, e) {
      return this.computeIntLineIndex(), this.intLineIndex[t][e];
    }, getTopologySummary: function getTopologySummary() {
      var t = new L();return this.isEndPoint() && t.append(" endpoint"), this._isProper && t.append(" proper"), this.isCollinear() && t.append(" collinear"), t.toString();
    }, computeIntersection: function computeIntersection(t, e, n, i) {
      this.inputLines[0][0] = t, this.inputLines[0][1] = e, this.inputLines[1][0] = n, this.inputLines[1][1] = i, this.result = this.computeIntersect(t, e, n, i);
    }, getIntersectionNum: function getIntersectionNum() {
      return this.result;
    }, computeIntLineIndex: function computeIntLineIndex() {
      if (0 === arguments.length) null === this.intLineIndex && (this.intLineIndex = Array(2).fill().map(function () {
        return Array(2);
      }), this.computeIntLineIndex(0), this.computeIntLineIndex(1));else if (1 === arguments.length) {
        var t = arguments[0],
            e = this.getEdgeDistance(t, 0),
            n = this.getEdgeDistance(t, 1);e > n ? (this.intLineIndex[t][0] = 0, this.intLineIndex[t][1] = 1) : (this.intLineIndex[t][0] = 1, this.intLineIndex[t][1] = 0);
      }
    }, isProper: function isProper() {
      return this.hasIntersection() && this._isProper;
    }, setPrecisionModel: function setPrecisionModel(t) {
      this.precisionModel = t;
    }, isInteriorIntersection: function isInteriorIntersection() {
      if (0 === arguments.length) return !!this.isInteriorIntersection(0) || !!this.isInteriorIntersection(1);if (1 === arguments.length) {
        for (var t = arguments[0], e = 0; e < this.result; e++) {
          if (!this.intPt[e].equals2D(this.inputLines[t][0]) && !this.intPt[e].equals2D(this.inputLines[t][1])) return !0;
        }return !1;
      }
    }, getIntersection: function getIntersection(t) {
      return this.intPt[t];
    }, isEndPoint: function isEndPoint() {
      return this.hasIntersection() && !this._isProper;
    }, hasIntersection: function hasIntersection() {
      return this.result !== ne.NO_INTERSECTION;
    }, getEdgeDistance: function getEdgeDistance(t, e) {
      return ne.computeEdgeDistance(this.intPt[e], this.inputLines[t][0], this.inputLines[t][1]);
    }, isCollinear: function isCollinear() {
      return this.result === ne.COLLINEAR_INTERSECTION;
    }, toString: function toString() {
      return ee.toLineString(this.inputLines[0][0], this.inputLines[0][1]) + " - " + ee.toLineString(this.inputLines[1][0], this.inputLines[1][1]) + this.getTopologySummary();
    }, getEndpoint: function getEndpoint(t, e) {
      return this.inputLines[t][e];
    }, isIntersection: function isIntersection(t) {
      for (var e = 0; e < this.result; e++) {
        if (this.intPt[e].equals2D(t)) return !0;
      }return !1;
    }, getIntersectionAlongSegment: function getIntersectionAlongSegment(t, e) {
      return this.computeIntLineIndex(), this.intPt[this.intLineIndex[t][e]];
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return ne;
    } }), ne.computeEdgeDistance = function (t, e, n) {
    var i = Math.abs(n.x - e.x),
        r = Math.abs(n.y - e.y),
        s = -1;if (t.equals(e)) s = 0;else if (t.equals(n)) s = i > r ? i : r;else {
      var o = Math.abs(t.x - e.x),
          a = Math.abs(t.y - e.y);s = i > r ? o : a, 0 !== s || t.equals(e) || (s = Math.max(o, a));
    }return h.isTrue(!(0 === s && !t.equals(e)), "Bad distance calculation"), s;
  }, ne.nonRobustComputeEdgeDistance = function (t, e, n) {
    var i = t.x - e.x,
        r = t.y - e.y,
        s = Math.sqrt(i * i + r * r);return h.isTrue(!(0 === s && !t.equals(e)), "Invalid distance calculation"), s;
  }, ne.DONT_INTERSECT = 0, ne.DO_INTERSECT = 1, ne.COLLINEAR = 2, ne.NO_INTERSECTION = 0, ne.POINT_INTERSECTION = 1, ne.COLLINEAR_INTERSECTION = 2, js(ie, ne), Ws(ie.prototype, { isInSegmentEnvelopes: function isInSegmentEnvelopes(t) {
      var e = new I(this.inputLines[0][0], this.inputLines[0][1]),
          n = new I(this.inputLines[1][0], this.inputLines[1][1]);return e.contains(t) && n.contains(t);
    }, computeIntersection: function computeIntersection() {
      if (3 !== arguments.length) return ne.prototype.computeIntersection.apply(this, arguments);var t = arguments[0],
          e = arguments[1],
          n = arguments[2];if (this._isProper = !1, I.intersects(e, n, t) && 0 === oe.orientationIndex(e, n, t) && 0 === oe.orientationIndex(n, e, t)) return this._isProper = !0, (t.equals(e) || t.equals(n)) && (this._isProper = !1), this.result = ne.POINT_INTERSECTION, null;this.result = ne.NO_INTERSECTION;
    }, normalizeToMinimum: function normalizeToMinimum(t, e, n, i, r) {
      r.x = this.smallestInAbsValue(t.x, e.x, n.x, i.x), r.y = this.smallestInAbsValue(t.y, e.y, n.y, i.y), t.x -= r.x, t.y -= r.y, e.x -= r.x, e.y -= r.y, n.x -= r.x, n.y -= r.y, i.x -= r.x, i.y -= r.y;
    }, safeHCoordinateIntersection: function safeHCoordinateIntersection(t, e, n, i) {
      var r = null;try {
        r = M.intersection(t, e, n, i);
      } catch (s) {
        if (!(s instanceof C)) throw s;r = ie.nearestEndpoint(t, e, n, i);
      } finally {}return r;
    }, intersection: function intersection(t, e, n, i) {
      var r = this.intersectionWithNormalization(t, e, n, i);return this.isInSegmentEnvelopes(r) || (r = new c(ie.nearestEndpoint(t, e, n, i))), null !== this.precisionModel && this.precisionModel.makePrecise(r), r;
    }, smallestInAbsValue: function smallestInAbsValue(t, e, n, i) {
      var r = t,
          s = Math.abs(r);return Math.abs(e) < s && (r = e, s = Math.abs(e)), Math.abs(n) < s && (r = n, s = Math.abs(n)), Math.abs(i) < s && (r = i), r;
    }, checkDD: function checkDD(t, e, n, i, r) {
      var s = b.intersection(t, e, n, i),
          o = this.isInSegmentEnvelopes(s);_.out.println("DD in env = " + o + "  --------------------- " + s), r.distance(s) > 1e-4 && _.out.println("Distance = " + r.distance(s));
    }, intersectionWithNormalization: function intersectionWithNormalization(t, e, n, i) {
      var r = new c(t),
          s = new c(e),
          o = new c(n),
          a = new c(i),
          u = new c();this.normalizeToEnvCentre(r, s, o, a, u);var l = this.safeHCoordinateIntersection(r, s, o, a);return l.x += u.x, l.y += u.y, l;
    }, computeCollinearIntersection: function computeCollinearIntersection(t, e, n, i) {
      var r = I.intersects(t, e, n),
          s = I.intersects(t, e, i),
          o = I.intersects(n, i, t),
          a = I.intersects(n, i, e);return r && s ? (this.intPt[0] = n, this.intPt[1] = i, ne.COLLINEAR_INTERSECTION) : o && a ? (this.intPt[0] = t, this.intPt[1] = e, ne.COLLINEAR_INTERSECTION) : r && o ? (this.intPt[0] = n, this.intPt[1] = t, !n.equals(t) || s || a ? ne.COLLINEAR_INTERSECTION : ne.POINT_INTERSECTION) : r && a ? (this.intPt[0] = n, this.intPt[1] = e, !n.equals(e) || s || o ? ne.COLLINEAR_INTERSECTION : ne.POINT_INTERSECTION) : s && o ? (this.intPt[0] = i, this.intPt[1] = t, !i.equals(t) || r || a ? ne.COLLINEAR_INTERSECTION : ne.POINT_INTERSECTION) : s && a ? (this.intPt[0] = i, this.intPt[1] = e, !i.equals(e) || r || o ? ne.COLLINEAR_INTERSECTION : ne.POINT_INTERSECTION) : ne.NO_INTERSECTION;
    }, normalizeToEnvCentre: function normalizeToEnvCentre(t, e, n, i, r) {
      var s = t.x < e.x ? t.x : e.x,
          o = t.y < e.y ? t.y : e.y,
          a = t.x > e.x ? t.x : e.x,
          u = t.y > e.y ? t.y : e.y,
          l = n.x < i.x ? n.x : i.x,
          h = n.y < i.y ? n.y : i.y,
          c = n.x > i.x ? n.x : i.x,
          f = n.y > i.y ? n.y : i.y,
          g = s > l ? s : l,
          d = a < c ? a : c,
          p = o > h ? o : h,
          m = u < f ? u : f,
          v = (g + d) / 2,
          y = (p + m) / 2;r.x = v, r.y = y, t.x -= r.x, t.y -= r.y, e.x -= r.x, e.y -= r.y, n.x -= r.x, n.y -= r.y, i.x -= r.x, i.y -= r.y;
    }, computeIntersect: function computeIntersect(t, e, n, i) {
      if (this._isProper = !1, !I.intersects(t, e, n, i)) return ne.NO_INTERSECTION;var r = oe.orientationIndex(t, e, n),
          s = oe.orientationIndex(t, e, i);if (r > 0 && s > 0 || r < 0 && s < 0) return ne.NO_INTERSECTION;var o = oe.orientationIndex(n, i, t),
          a = oe.orientationIndex(n, i, e);return o > 0 && a > 0 || o < 0 && a < 0 ? ne.NO_INTERSECTION : 0 === r && 0 === s && 0 === o && 0 === a ? this.computeCollinearIntersection(t, e, n, i) : (0 === r || 0 === s || 0 === o || 0 === a ? (this._isProper = !1, t.equals2D(n) || t.equals2D(i) ? this.intPt[0] = t : e.equals2D(n) || e.equals2D(i) ? this.intPt[0] = e : 0 === r ? this.intPt[0] = new c(n) : 0 === s ? this.intPt[0] = new c(i) : 0 === o ? this.intPt[0] = new c(t) : 0 === a && (this.intPt[0] = new c(e))) : (this._isProper = !0, this.intPt[0] = this.intersection(t, e, n, i)), ne.POINT_INTERSECTION);
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return ie;
    } }), ie.nearestEndpoint = function (t, e, n, i) {
    var r = t,
        s = oe.distancePointLine(t, n, i),
        o = oe.distancePointLine(e, n, i);return o < s && (s = o, r = e), o = oe.distancePointLine(n, t, e), o < s && (s = o, r = n), o = oe.distancePointLine(i, t, e), o < s && (s = o, r = i), r;
  }, Ws(re.prototype, { interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return re;
    } }), re.orientationIndex = function (t, e, n) {
    var i = e.x - t.x,
        r = e.y - t.y,
        s = n.x - e.x,
        o = n.y - e.y;return re.signOfDet2x2(i, r, s, o);
  }, re.signOfDet2x2 = function (t, e, n, i) {
    var r = null,
        s = null,
        o = null,
        a = 0;if (r = 1, 0 === t || 0 === i) return 0 === e || 0 === n ? 0 : e > 0 ? n > 0 ? -r : r : n > 0 ? r : -r;if (0 === e || 0 === n) return i > 0 ? t > 0 ? r : -r : t > 0 ? -r : r;if (0 < e ? 0 < i ? e <= i || (r = -r, s = t, t = n, n = s, s = e, e = i, i = s) : e <= -i ? (r = -r, n = -n, i = -i) : (s = t, t = -n, n = s, s = e, e = -i, i = s) : 0 < i ? -e <= i ? (r = -r, t = -t, e = -e) : (s = -t, t = n, n = s, s = -e, e = i, i = s) : e >= i ? (t = -t, e = -e, n = -n, i = -i) : (r = -r, s = -t, t = -n, n = s, s = -e, e = -i, i = s), 0 < t) {
      if (!(0 < n)) return r;if (!(t <= n)) return r;
    } else {
      if (0 < n) return -r;if (!(t >= n)) return -r;r = -r, t = -t, n = -n;
    }for (;;) {
      if (a += 1, o = Math.floor(n / t), n -= o * t, (i -= o * e) < 0) return -r;if (i > e) return r;if (t > n + n) {
        if (e < i + i) return r;
      } else {
        if (e > i + i) return -r;n = t - n, i = e - i, r = -r;
      }if (0 === i) return 0 === n ? 0 : -r;if (0 === n) return r;if (o = Math.floor(t / n), t -= o * n, (e -= o * i) < 0) return r;if (e > i) return -r;if (n > t + t) {
        if (i < e + e) return -r;
      } else {
        if (i > e + e) return r;t = n - t, e = i - e, r = -r;
      }if (0 === e) return 0 === t ? 0 : r;if (0 === t) return -r;
    }
  }, Ws(se.prototype, { countSegment: function countSegment(t, e) {
      if (t.x < this.p.x && e.x < this.p.x) return null;if (this.p.x === e.x && this.p.y === e.y) return this.isPointOnSegment = !0, null;if (t.y === this.p.y && e.y === this.p.y) {
        var n = t.x,
            i = e.x;return n > i && (n = e.x, i = t.x), this.p.x >= n && this.p.x <= i && (this.isPointOnSegment = !0), null;
      }if (t.y > this.p.y && e.y <= this.p.y || e.y > this.p.y && t.y <= this.p.y) {
        var r = t.x - this.p.x,
            s = t.y - this.p.y,
            o = e.x - this.p.x,
            a = e.y - this.p.y,
            u = re.signOfDet2x2(r, s, o, a);if (0 === u) return this.isPointOnSegment = !0, null;a < s && (u = -u), u > 0 && this.crossingCount++;
      }
    }, isPointInPolygon: function isPointInPolygon() {
      return this.getLocation() !== S.EXTERIOR;
    }, getLocation: function getLocation() {
      return this.isPointOnSegment ? S.BOUNDARY : this.crossingCount % 2 == 1 ? S.INTERIOR : S.EXTERIOR;
    }, isOnSegment: function isOnSegment() {
      return this.isPointOnSegment;
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return se;
    } }), se.locatePointInRing = function () {
    if (arguments[0] instanceof c && Zs(arguments[1], O)) {
      for (var t = arguments[0], e = arguments[1], n = new se(t), i = new c(), r = new c(), s = 1; s < e.size(); s++) {
        if (e.getCoordinate(s, i), e.getCoordinate(s - 1, r), n.countSegment(i, r), n.isOnSegment()) return n.getLocation();
      }return n.getLocation();
    }if (arguments[0] instanceof c && arguments[1] instanceof Array) {
      for (var o = arguments[0], a = arguments[1], n = new se(o), s = 1; s < a.length; s++) {
        var i = a[s],
            r = a[s - 1];if (n.countSegment(i, r), n.isOnSegment()) return n.getLocation();
      }return n.getLocation();
    }
  }, Ws(oe.prototype, { interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return oe;
    } }), oe.orientationIndex = function (t, e, n) {
    return b.orientationIndex(t, e, n);
  }, oe.signedArea = function () {
    if (arguments[0] instanceof Array) {
      var t = arguments[0];if (t.length < 3) return 0;for (var e = 0, n = t[0].x, i = 1; i < t.length - 1; i++) {
        var r = t[i].x - n,
            s = t[i + 1].y;e += r * (t[i - 1].y - s);
      }return e / 2;
    }if (Zs(arguments[0], O)) {
      var o = arguments[0],
          a = o.size();if (a < 3) return 0;var u = new c(),
          l = new c(),
          h = new c();o.getCoordinate(0, l), o.getCoordinate(1, h);var n = l.x;h.x -= n;for (var e = 0, i = 1; i < a - 1; i++) {
        u.y = l.y, l.x = h.x, l.y = h.y, o.getCoordinate(i + 1, h), h.x -= n, e += l.x * (u.y - h.y);
      }return e / 2;
    }
  }, oe.distanceLineLine = function (t, e, n, i) {
    if (t.equals(e)) return oe.distancePointLine(t, n, i);if (n.equals(i)) return oe.distancePointLine(i, t, e);var r = !1;if (I.intersects(t, e, n, i)) {
      var s = (e.x - t.x) * (i.y - n.y) - (e.y - t.y) * (i.x - n.x);if (0 === s) r = !0;else {
        var o = (t.y - n.y) * (i.x - n.x) - (t.x - n.x) * (i.y - n.y),
            a = (t.y - n.y) * (e.x - t.x) - (t.x - n.x) * (e.y - t.y),
            u = a / s,
            l = o / s;(l < 0 || l > 1 || u < 0 || u > 1) && (r = !0);
      }
    } else r = !0;return r ? w.min(oe.distancePointLine(t, n, i), oe.distancePointLine(e, n, i), oe.distancePointLine(n, t, e), oe.distancePointLine(i, t, e)) : 0;
  }, oe.isPointInRing = function (t, e) {
    return oe.locatePointInRing(t, e) !== S.EXTERIOR;
  }, oe.computeLength = function (t) {
    var e = t.size();if (e <= 1) return 0;var n = 0,
        i = new c();t.getCoordinate(0, i);for (var r = i.x, s = i.y, o = 1; o < e; o++) {
      t.getCoordinate(o, i);var a = i.x,
          u = i.y,
          l = a - r,
          h = u - s;n += Math.sqrt(l * l + h * h), r = a, s = u;
    }return n;
  }, oe.isCCW = function (t) {
    var e = t.length - 1;if (e < 3) throw new n("Ring has fewer than 4 points, so orientation cannot be determined");for (var i = t[0], r = 0, s = 1; s <= e; s++) {
      var o = t[s];o.y > i.y && (i = o, r = s);
    }var a = r;do {
      (a -= 1) < 0 && (a = e);
    } while (t[a].equals2D(i) && a !== r);var u = r;do {
      u = (u + 1) % e;
    } while (t[u].equals2D(i) && u !== r);var l = t[a],
        h = t[u];if (l.equals2D(i) || h.equals2D(i) || l.equals2D(h)) return !1;var c = oe.computeOrientation(l, i, h);return 0 === c ? l.x > h.x : c > 0;
  }, oe.locatePointInRing = function (t, e) {
    return se.locatePointInRing(t, e);
  }, oe.distancePointLinePerpendicular = function (t, e, n) {
    var i = (n.x - e.x) * (n.x - e.x) + (n.y - e.y) * (n.y - e.y),
        r = ((e.y - t.y) * (n.x - e.x) - (e.x - t.x) * (n.y - e.y)) / i;return Math.abs(r) * Math.sqrt(i);
  }, oe.computeOrientation = function (t, e, n) {
    return oe.orientationIndex(t, e, n);
  }, oe.distancePointLine = function () {
    if (2 === arguments.length) {
      var t = arguments[0],
          e = arguments[1];if (0 === e.length) throw new n("Line array must contain at least one vertex");for (var i = t.distance(e[0]), r = 0; r < e.length - 1; r++) {
        var s = oe.distancePointLine(t, e[r], e[r + 1]);s < i && (i = s);
      }return i;
    }if (3 === arguments.length) {
      var o = arguments[0],
          a = arguments[1],
          u = arguments[2];if (a.x === u.x && a.y === u.y) return o.distance(a);var l = (u.x - a.x) * (u.x - a.x) + (u.y - a.y) * (u.y - a.y),
          h = ((o.x - a.x) * (u.x - a.x) + (o.y - a.y) * (u.y - a.y)) / l;if (h <= 0) return o.distance(a);if (h >= 1) return o.distance(u);var c = ((a.y - o.y) * (u.x - a.x) - (a.x - o.x) * (u.y - a.y)) / l;return Math.abs(c) * Math.sqrt(l);
    }
  }, oe.isOnLine = function (t, e) {
    for (var n = new ie(), i = 1; i < e.length; i++) {
      var r = e[i - 1],
          s = e[i];if (n.computeIntersection(t, r, s), n.hasIntersection()) return !0;
    }return !1;
  }, oe.CLOCKWISE = -1, oe.RIGHT = oe.CLOCKWISE, oe.COUNTERCLOCKWISE = 1, oe.LEFT = oe.COUNTERCLOCKWISE, oe.COLLINEAR = 0, oe.STRAIGHT = oe.COLLINEAR, Ws(ae.prototype, { minX: function minX() {
      return Math.min(this.p0.x, this.p1.x);
    }, orientationIndex: function orientationIndex() {
      if (arguments[0] instanceof ae) {
        var t = arguments[0],
            e = oe.orientationIndex(this.p0, this.p1, t.p0),
            n = oe.orientationIndex(this.p0, this.p1, t.p1);return e >= 0 && n >= 0 ? Math.max(e, n) : e <= 0 && n <= 0 ? Math.max(e, n) : 0;
      }if (arguments[0] instanceof c) {
        var i = arguments[0];return oe.orientationIndex(this.p0, this.p1, i);
      }
    }, toGeometry: function toGeometry(t) {
      return t.createLineString([this.p0, this.p1]);
    }, isVertical: function isVertical() {
      return this.p0.x === this.p1.x;
    }, equals: function equals(t) {
      if (!(t instanceof ae)) return !1;var e = t;return this.p0.equals(e.p0) && this.p1.equals(e.p1);
    }, intersection: function intersection(t) {
      var e = new ie();return e.computeIntersection(this.p0, this.p1, t.p0, t.p1), e.hasIntersection() ? e.getIntersection(0) : null;
    }, project: function project() {
      if (arguments[0] instanceof c) {
        var t = arguments[0];if (t.equals(this.p0) || t.equals(this.p1)) return new c(t);var e = this.projectionFactor(t),
            n = new c();return n.x = this.p0.x + e * (this.p1.x - this.p0.x), n.y = this.p0.y + e * (this.p1.y - this.p0.y), n;
      }if (arguments[0] instanceof ae) {
        var i = arguments[0],
            r = this.projectionFactor(i.p0),
            s = this.projectionFactor(i.p1);if (r >= 1 && s >= 1) return null;if (r <= 0 && s <= 0) return null;var o = this.project(i.p0);r < 0 && (o = this.p0), r > 1 && (o = this.p1);var a = this.project(i.p1);return s < 0 && (a = this.p0), s > 1 && (a = this.p1), new ae(o, a);
      }
    }, normalize: function normalize() {
      this.p1.compareTo(this.p0) < 0 && this.reverse();
    }, angle: function angle() {
      return Math.atan2(this.p1.y - this.p0.y, this.p1.x - this.p0.x);
    }, getCoordinate: function getCoordinate(t) {
      return 0 === t ? this.p0 : this.p1;
    }, distancePerpendicular: function distancePerpendicular(t) {
      return oe.distancePointLinePerpendicular(t, this.p0, this.p1);
    }, minY: function minY() {
      return Math.min(this.p0.y, this.p1.y);
    }, midPoint: function midPoint() {
      return ae.midPoint(this.p0, this.p1);
    }, projectionFactor: function projectionFactor(t) {
      if (t.equals(this.p0)) return 0;if (t.equals(this.p1)) return 1;var e = this.p1.x - this.p0.x,
          n = this.p1.y - this.p0.y,
          r = e * e + n * n;return r <= 0 ? i.NaN : ((t.x - this.p0.x) * e + (t.y - this.p0.y) * n) / r;
    }, closestPoints: function closestPoints(t) {
      var e = this.intersection(t);if (null !== e) return [e, e];var n = new Array(2).fill(null),
          r = i.MAX_VALUE,
          s = null,
          o = this.closestPoint(t.p0);r = o.distance(t.p0), n[0] = o, n[1] = t.p0;var a = this.closestPoint(t.p1);(s = a.distance(t.p1)) < r && (r = s, n[0] = a, n[1] = t.p1);var u = t.closestPoint(this.p0);(s = u.distance(this.p0)) < r && (r = s, n[0] = this.p0, n[1] = u);var l = t.closestPoint(this.p1);return s = l.distance(this.p1), s < r && (r = s, n[0] = this.p1, n[1] = l), n;
    }, closestPoint: function closestPoint(t) {
      var e = this.projectionFactor(t);return e > 0 && e < 1 ? this.project(t) : this.p0.distance(t) < this.p1.distance(t) ? this.p0 : this.p1;
    }, maxX: function maxX() {
      return Math.max(this.p0.x, this.p1.x);
    }, getLength: function getLength() {
      return this.p0.distance(this.p1);
    }, compareTo: function compareTo(t) {
      var e = t,
          n = this.p0.compareTo(e.p0);return 0 !== n ? n : this.p1.compareTo(e.p1);
    }, reverse: function reverse() {
      var t = this.p0;this.p0 = this.p1, this.p1 = t;
    }, equalsTopo: function equalsTopo(t) {
      return this.p0.equals(t.p0) && this.p1.equals(t.p1) || this.p0.equals(t.p1) && this.p1.equals(t.p0);
    }, lineIntersection: function lineIntersection(t) {
      try {
        return M.intersection(this.p0, this.p1, t.p0, t.p1);
      } catch (t) {
        if (!(t instanceof C)) throw t;
      } finally {}return null;
    }, maxY: function maxY() {
      return Math.max(this.p0.y, this.p1.y);
    }, pointAlongOffset: function pointAlongOffset(t, e) {
      var n = this.p0.x + t * (this.p1.x - this.p0.x),
          i = this.p0.y + t * (this.p1.y - this.p0.y),
          r = this.p1.x - this.p0.x,
          s = this.p1.y - this.p0.y,
          o = Math.sqrt(r * r + s * s),
          a = 0,
          u = 0;if (0 !== e) {
        if (o <= 0) throw new IllegalStateException("Cannot compute offset from zero-length line segment");a = e * r / o, u = e * s / o;
      }return new c(n - u, i + a);
    }, setCoordinates: function setCoordinates() {
      if (1 === arguments.length) {
        var t = arguments[0];this.setCoordinates(t.p0, t.p1);
      } else if (2 === arguments.length) {
        var e = arguments[0],
            n = arguments[1];this.p0.x = e.x, this.p0.y = e.y, this.p1.x = n.x, this.p1.y = n.y;
      }
    }, segmentFraction: function segmentFraction(t) {
      var e = this.projectionFactor(t);return e < 0 ? e = 0 : (e > 1 || i.isNaN(e)) && (e = 1), e;
    }, toString: function toString() {
      return "LINESTRING( " + this.p0.x + " " + this.p0.y + ", " + this.p1.x + " " + this.p1.y + ")";
    }, isHorizontal: function isHorizontal() {
      return this.p0.y === this.p1.y;
    }, distance: function distance() {
      if (arguments[0] instanceof ae) {
        var t = arguments[0];return oe.distanceLineLine(this.p0, this.p1, t.p0, t.p1);
      }if (arguments[0] instanceof c) {
        var e = arguments[0];return oe.distancePointLine(e, this.p0, this.p1);
      }
    }, pointAlong: function pointAlong(t) {
      var e = new c();return e.x = this.p0.x + t * (this.p1.x - this.p0.x), e.y = this.p0.y + t * (this.p1.y - this.p0.y), e;
    }, hashCode: function hashCode() {
      var t = java.lang.Double.doubleToLongBits(this.p0.x);t ^= 31 * java.lang.Double.doubleToLongBits(this.p0.y);var e = Math.trunc(t) ^ Math.trunc(t >> 32),
          n = java.lang.Double.doubleToLongBits(this.p1.x);return n ^= 31 * java.lang.Double.doubleToLongBits(this.p1.y), e ^ Math.trunc(n) ^ Math.trunc(n >> 32);
    }, interfaces_: function interfaces_() {
      return [r, a];
    }, getClass: function getClass() {
      return ae;
    } }), ae.midPoint = function (t, e) {
    return new c((t.x + e.x) / 2, (t.y + e.y) / 2);
  }, ae.serialVersionUID = 0x2d2172135f411c00, Ws(ue.prototype, { isIntersects: function isIntersects() {
      return !this.isDisjoint();
    }, isCovers: function isCovers() {
      return (ue.isTrue(this.matrix[S.INTERIOR][S.INTERIOR]) || ue.isTrue(this.matrix[S.INTERIOR][S.BOUNDARY]) || ue.isTrue(this.matrix[S.BOUNDARY][S.INTERIOR]) || ue.isTrue(this.matrix[S.BOUNDARY][S.BOUNDARY])) && this.matrix[S.EXTERIOR][S.INTERIOR] === ot.FALSE && this.matrix[S.EXTERIOR][S.BOUNDARY] === ot.FALSE;
    }, isCoveredBy: function isCoveredBy() {
      return (ue.isTrue(this.matrix[S.INTERIOR][S.INTERIOR]) || ue.isTrue(this.matrix[S.INTERIOR][S.BOUNDARY]) || ue.isTrue(this.matrix[S.BOUNDARY][S.INTERIOR]) || ue.isTrue(this.matrix[S.BOUNDARY][S.BOUNDARY])) && this.matrix[S.INTERIOR][S.EXTERIOR] === ot.FALSE && this.matrix[S.BOUNDARY][S.EXTERIOR] === ot.FALSE;
    }, set: function set() {
      if (1 === arguments.length) for (var t = arguments[0], e = 0; e < t.length; e++) {
        var n = Math.trunc(e / 3),
            i = e % 3;this.matrix[n][i] = ot.toDimensionValue(t.charAt(e));
      } else if (3 === arguments.length) {
        var r = arguments[0],
            s = arguments[1],
            o = arguments[2];this.matrix[r][s] = o;
      }
    }, isContains: function isContains() {
      return ue.isTrue(this.matrix[S.INTERIOR][S.INTERIOR]) && this.matrix[S.EXTERIOR][S.INTERIOR] === ot.FALSE && this.matrix[S.EXTERIOR][S.BOUNDARY] === ot.FALSE;
    }, setAtLeast: function setAtLeast() {
      if (1 === arguments.length) for (var t = arguments[0], e = 0; e < t.length; e++) {
        var n = Math.trunc(e / 3),
            i = e % 3;this.setAtLeast(n, i, ot.toDimensionValue(t.charAt(e)));
      } else if (3 === arguments.length) {
        var r = arguments[0],
            s = arguments[1],
            o = arguments[2];this.matrix[r][s] < o && (this.matrix[r][s] = o);
      }
    }, setAtLeastIfValid: function setAtLeastIfValid(t, e, n) {
      t >= 0 && e >= 0 && this.setAtLeast(t, e, n);
    }, isWithin: function isWithin() {
      return ue.isTrue(this.matrix[S.INTERIOR][S.INTERIOR]) && this.matrix[S.INTERIOR][S.EXTERIOR] === ot.FALSE && this.matrix[S.BOUNDARY][S.EXTERIOR] === ot.FALSE;
    }, isTouches: function isTouches(t, e) {
      return t > e ? this.isTouches(e, t) : (t === ot.A && e === ot.A || t === ot.L && e === ot.L || t === ot.L && e === ot.A || t === ot.P && e === ot.A || t === ot.P && e === ot.L) && this.matrix[S.INTERIOR][S.INTERIOR] === ot.FALSE && (ue.isTrue(this.matrix[S.INTERIOR][S.BOUNDARY]) || ue.isTrue(this.matrix[S.BOUNDARY][S.INTERIOR]) || ue.isTrue(this.matrix[S.BOUNDARY][S.BOUNDARY]));
    }, isOverlaps: function isOverlaps(t, e) {
      return t === ot.P && e === ot.P || t === ot.A && e === ot.A ? ue.isTrue(this.matrix[S.INTERIOR][S.INTERIOR]) && ue.isTrue(this.matrix[S.INTERIOR][S.EXTERIOR]) && ue.isTrue(this.matrix[S.EXTERIOR][S.INTERIOR]) : t === ot.L && e === ot.L && 1 === this.matrix[S.INTERIOR][S.INTERIOR] && ue.isTrue(this.matrix[S.INTERIOR][S.EXTERIOR]) && ue.isTrue(this.matrix[S.EXTERIOR][S.INTERIOR]);
    }, isEquals: function isEquals(t, e) {
      return t === e && ue.isTrue(this.matrix[S.INTERIOR][S.INTERIOR]) && this.matrix[S.INTERIOR][S.EXTERIOR] === ot.FALSE && this.matrix[S.BOUNDARY][S.EXTERIOR] === ot.FALSE && this.matrix[S.EXTERIOR][S.INTERIOR] === ot.FALSE && this.matrix[S.EXTERIOR][S.BOUNDARY] === ot.FALSE;
    }, toString: function toString() {
      for (var t = new L("123456789"), e = 0; e < 3; e++) {
        for (var n = 0; n < 3; n++) {
          t.setCharAt(3 * e + n, ot.toDimensionSymbol(this.matrix[e][n]));
        }
      }return t.toString();
    }, setAll: function setAll(t) {
      for (var e = 0; e < 3; e++) {
        for (var n = 0; n < 3; n++) {
          this.matrix[e][n] = t;
        }
      }
    }, get: function get(t, e) {
      return this.matrix[t][e];
    }, transpose: function transpose() {
      var t = this.matrix[1][0];return this.matrix[1][0] = this.matrix[0][1], this.matrix[0][1] = t, t = this.matrix[2][0], this.matrix[2][0] = this.matrix[0][2], this.matrix[0][2] = t, t = this.matrix[2][1], this.matrix[2][1] = this.matrix[1][2], this.matrix[1][2] = t, this;
    }, matches: function matches(t) {
      if (9 !== t.length) throw new n("Should be length 9: " + t);for (var e = 0; e < 3; e++) {
        for (var i = 0; i < 3; i++) {
          if (!ue.matches(this.matrix[e][i], t.charAt(3 * e + i))) return !1;
        }
      }return !0;
    }, add: function add(t) {
      for (var e = 0; e < 3; e++) {
        for (var n = 0; n < 3; n++) {
          this.setAtLeast(e, n, t.get(e, n));
        }
      }
    }, isDisjoint: function isDisjoint() {
      return this.matrix[S.INTERIOR][S.INTERIOR] === ot.FALSE && this.matrix[S.INTERIOR][S.BOUNDARY] === ot.FALSE && this.matrix[S.BOUNDARY][S.INTERIOR] === ot.FALSE && this.matrix[S.BOUNDARY][S.BOUNDARY] === ot.FALSE;
    }, isCrosses: function isCrosses(t, e) {
      return t === ot.P && e === ot.L || t === ot.P && e === ot.A || t === ot.L && e === ot.A ? ue.isTrue(this.matrix[S.INTERIOR][S.INTERIOR]) && ue.isTrue(this.matrix[S.INTERIOR][S.EXTERIOR]) : t === ot.L && e === ot.P || t === ot.A && e === ot.P || t === ot.A && e === ot.L ? ue.isTrue(this.matrix[S.INTERIOR][S.INTERIOR]) && ue.isTrue(this.matrix[S.EXTERIOR][S.INTERIOR]) : t === ot.L && e === ot.L && 0 === this.matrix[S.INTERIOR][S.INTERIOR];
    }, interfaces_: function interfaces_() {
      return [s];
    }, getClass: function getClass() {
      return ue;
    } }), ue.matches = function () {
    if (Number.isInteger(arguments[0]) && "string" == typeof arguments[1]) {
      var t = arguments[0],
          e = arguments[1];return e === ot.SYM_DONTCARE || e === ot.SYM_TRUE && (t >= 0 || t === ot.TRUE) || e === ot.SYM_FALSE && t === ot.FALSE || e === ot.SYM_P && t === ot.P || e === ot.SYM_L && t === ot.L || e === ot.SYM_A && t === ot.A;
    }if ("string" == typeof arguments[0] && "string" == typeof arguments[1]) {
      var n = arguments[0],
          i = arguments[1];return new ue(n).matches(i);
    }
  }, ue.isTrue = function (t) {
    return t >= 0 || t === ot.TRUE;
  };var ao = Object.freeze({ Coordinate: c, CoordinateList: E, Envelope: I, LineSegment: ae, GeometryFactory: $t, Geometry: F, Point: Ct, LineString: It, LinearRing: Rt, Polygon: wt, GeometryCollection: lt, MultiPoint: Lt, MultiLineString: ht, MultiPolygon: Tt, Dimension: ot, IntersectionMatrix: ue, PrecisionModel: Qt });Ws(le.prototype, { addPoint: function addPoint(t) {
      this.ptCount += 1, this.ptCentSum.x += t.x, this.ptCentSum.y += t.y;
    }, setBasePoint: function setBasePoint(t) {
      null === this.areaBasePt && (this.areaBasePt = t);
    }, addLineSegments: function addLineSegments(t) {
      for (var e = 0, n = 0; n < t.length - 1; n++) {
        var i = t[n].distance(t[n + 1]);if (0 !== i) {
          e += i;var r = (t[n].x + t[n + 1].x) / 2;this.lineCentSum.x += i * r;var s = (t[n].y + t[n + 1].y) / 2;this.lineCentSum.y += i * s;
        }
      }this.totalLength += e, 0 === e && t.length > 0 && this.addPoint(t[0]);
    }, addHole: function addHole(t) {
      for (var e = oe.isCCW(t), n = 0; n < t.length - 1; n++) {
        this.addTriangle(this.areaBasePt, t[n], t[n + 1], e);
      }this.addLineSegments(t);
    }, getCentroid: function getCentroid() {
      var t = new c();if (Math.abs(this.areasum2) > 0) t.x = this.cg3.x / 3 / this.areasum2, t.y = this.cg3.y / 3 / this.areasum2;else if (this.totalLength > 0) t.x = this.lineCentSum.x / this.totalLength, t.y = this.lineCentSum.y / this.totalLength;else {
        if (!(this.ptCount > 0)) return null;t.x = this.ptCentSum.x / this.ptCount, t.y = this.ptCentSum.y / this.ptCount;
      }return t;
    }, addShell: function addShell(t) {
      t.length > 0 && this.setBasePoint(t[0]);for (var e = !oe.isCCW(t), n = 0; n < t.length - 1; n++) {
        this.addTriangle(this.areaBasePt, t[n], t[n + 1], e);
      }this.addLineSegments(t);
    }, addTriangle: function addTriangle(t, e, n, i) {
      var r = i ? 1 : -1;le.centroid3(t, e, n, this.triangleCent3);var s = le.area2(t, e, n);this.cg3.x += r * s * this.triangleCent3.x, this.cg3.y += r * s * this.triangleCent3.y, this.areasum2 += r * s;
    }, add: function add() {
      if (arguments[0] instanceof wt) {
        var t = arguments[0];this.addShell(t.getExteriorRing().getCoordinates());for (var e = 0; e < t.getNumInteriorRing(); e++) {
          this.addHole(t.getInteriorRingN(e).getCoordinates());
        }
      } else if (arguments[0] instanceof F) {
        var n = arguments[0];if (n.isEmpty()) return null;if (n instanceof Ct) this.addPoint(n.getCoordinate());else if (n instanceof It) this.addLineSegments(n.getCoordinates());else if (n instanceof wt) {
          var i = n;this.add(i);
        } else if (n instanceof lt) for (var r = n, e = 0; e < r.getNumGeometries(); e++) {
          this.add(r.getGeometryN(e));
        }
      }
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return le;
    } }), le.area2 = function (t, e, n) {
    return (e.x - t.x) * (n.y - t.y) - (n.x - t.x) * (e.y - t.y);
  }, le.centroid3 = function (t, e, n, i) {
    return i.x = t.x + e.x + n.x, i.y = t.y + e.y + n.y, null;
  }, le.getCentroid = function (t) {
    return new le(t).getCentroid();
  }, he.prototype = new Error(), he.prototype.name = "EmptyStackException", ce.prototype = new m(), ce.prototype.add = function (t) {
    return this.array_.push(t), !0;
  }, ce.prototype.get = function (t) {
    if (t < 0 || t >= this.size()) throw new IndexOutOfBoundsException();return this.array_[t];
  }, ce.prototype.push = function (t) {
    return this.array_.push(t), t;
  }, ce.prototype.pop = function (t) {
    if (0 === this.array_.length) throw new he();return this.array_.pop();
  }, ce.prototype.peek = function () {
    if (0 === this.array_.length) throw new he();return this.array_[this.array_.length - 1];
  }, ce.prototype.empty = function () {
    return 0 === this.array_.length;
  }, ce.prototype.isEmpty = function () {
    return this.empty();
  }, ce.prototype.search = function (t) {
    return this.array_.indexOf(t);
  }, ce.prototype.size = function () {
    return this.array_.length;
  }, ce.prototype.toArray = function () {
    for (var t = [], e = 0, n = this.array_.length; e < n; e++) {
      t.push(this.array_[e]);
    }return t;
  }, Ws(fe.prototype, { filter: function filter(t) {
      this.treeSet.contains(t) || (this.list.add(t), this.treeSet.add(t));
    }, getCoordinates: function getCoordinates() {
      var t = new Array(this.list.size()).fill(null);return this.list.toArray(t);
    }, interfaces_: function interfaces_() {
      return [G];
    }, getClass: function getClass() {
      return fe;
    } }), fe.filterCoordinates = function (t) {
    for (var e = new fe(), n = 0; n < t.length; n++) {
      e.filter(t[n]);
    }return e.getCoordinates();
  }, Ws(ge.prototype, { preSort: function preSort(t) {
      for (var e = null, n = 1; n < t.length; n++) {
        (t[n].y < t[0].y || t[n].y === t[0].y && t[n].x < t[0].x) && (e = t[0], t[0] = t[n], t[n] = e);
      }return st.sort(t, 1, t.length, new de(t[0])), t;
    }, computeOctRing: function computeOctRing(t) {
      var e = this.computeOctPts(t),
          n = new E();return n.add(e, !1), n.size() < 3 ? null : (n.closeRing(), n.toCoordinateArray());
    }, lineOrPolygon: function lineOrPolygon(t) {
      if (t = this.cleanRing(t), 3 === t.length) return this.geomFactory.createLineString([t[0], t[1]]);var e = this.geomFactory.createLinearRing(t);return this.geomFactory.createPolygon(e, null);
    }, cleanRing: function cleanRing(t) {
      h.equals(t[0], t[t.length - 1]);for (var e = new x(), n = null, i = 0; i <= t.length - 2; i++) {
        var r = t[i],
            s = t[i + 1];r.equals(s) || null !== n && this.isBetween(n, r, s) || (e.add(r), n = r);
      }e.add(t[t.length - 1]);var o = new Array(e.size()).fill(null);return e.toArray(o);
    }, isBetween: function isBetween(t, e, n) {
      if (0 !== oe.computeOrientation(t, e, n)) return !1;if (t.x !== n.x) {
        if (t.x <= e.x && e.x <= n.x) return !0;if (n.x <= e.x && e.x <= t.x) return !0;
      }if (t.y !== n.y) {
        if (t.y <= e.y && e.y <= n.y) return !0;if (n.y <= e.y && e.y <= t.y) return !0;
      }return !1;
    }, reduce: function reduce(t) {
      var e = this.computeOctRing(t);if (null === e) return t;for (var n = new rt(), i = 0; i < e.length; i++) {
        n.add(e[i]);
      }for (var i = 0; i < t.length; i++) {
        oe.isPointInRing(t[i], e) || n.add(t[i]);
      }var r = Y.toCoordinateArray(n);return r.length < 3 ? this.padArray3(r) : r;
    }, getConvexHull: function getConvexHull() {
      if (0 === this.inputPts.length) return this.geomFactory.createGeometryCollection(null);if (1 === this.inputPts.length) return this.geomFactory.createPoint(this.inputPts[0]);if (2 === this.inputPts.length) return this.geomFactory.createLineString(this.inputPts);var t = this.inputPts;this.inputPts.length > 50 && (t = this.reduce(this.inputPts));var e = this.preSort(t),
          n = this.grahamScan(e),
          i = this.toCoordinateArray(n);return this.lineOrPolygon(i);
    }, padArray3: function padArray3(t) {
      for (var e = new Array(3).fill(null), n = 0; n < e.length; n++) {
        n < t.length ? e[n] = t[n] : e[n] = t[0];
      }return e;
    }, computeOctPts: function computeOctPts(t) {
      for (var e = new Array(8).fill(null), n = 0; n < e.length; n++) {
        e[n] = t[0];
      }for (var i = 1; i < t.length; i++) {
        t[i].x < e[0].x && (e[0] = t[i]), t[i].x - t[i].y < e[1].x - e[1].y && (e[1] = t[i]), t[i].y > e[2].y && (e[2] = t[i]), t[i].x + t[i].y > e[3].x + e[3].y && (e[3] = t[i]), t[i].x > e[4].x && (e[4] = t[i]), t[i].x - t[i].y > e[5].x - e[5].y && (e[5] = t[i]), t[i].y < e[6].y && (e[6] = t[i]), t[i].x + t[i].y < e[7].x + e[7].y && (e[7] = t[i]);
      }return e;
    }, toCoordinateArray: function toCoordinateArray(t) {
      for (var e = new Array(t.size()).fill(null), n = 0; n < t.size(); n++) {
        var i = t.get(n);e[n] = i;
      }return e;
    }, grahamScan: function grahamScan(t) {
      var e = null,
          n = new ce();e = n.push(t[0]), e = n.push(t[1]), e = n.push(t[2]);for (var i = 3; i < t.length; i++) {
        for (e = n.pop(); !n.empty() && oe.computeOrientation(n.peek(), e, t[i]) > 0;) {
          e = n.pop();
        }e = n.push(e), e = n.push(t[i]);
      }return e = n.push(t[0]), n;
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return ge;
    } }), ge.extractCoordinates = function (t) {
    var e = new fe();return t.apply(e), e.getCoordinates();
  }, Ws(de.prototype, { compare: function compare(t, e) {
      var n = t,
          i = e;return de.polarCompare(this.origin, n, i);
    }, interfaces_: function interfaces_() {
      return [o];
    }, getClass: function getClass() {
      return de;
    } }), de.polarCompare = function (t, e, n) {
    var i = e.x - t.x,
        r = e.y - t.y,
        s = n.x - t.x,
        o = n.y - t.y,
        a = oe.computeOrientation(t, e, n);if (a === oe.COUNTERCLOCKWISE) return 1;if (a === oe.CLOCKWISE) return -1;var u = i * i + r * r,
        l = s * s + o * o;return u < l ? -1 : u > l ? 1 : 0;
  }, ge.RadialComparator = de, Ws(pe.prototype, { transformPoint: function transformPoint(t, e) {
      return this.factory.createPoint(this.transformCoordinates(t.getCoordinateSequence(), t));
    }, transformPolygon: function transformPolygon(t, e) {
      var n = !0,
          i = this.transformLinearRing(t.getExteriorRing(), t);null !== i && i instanceof Rt && !i.isEmpty() || (n = !1);for (var r = new x(), s = 0; s < t.getNumInteriorRing(); s++) {
        var o = this.transformLinearRing(t.getInteriorRingN(s), t);null === o || o.isEmpty() || (o instanceof Rt || (n = !1), r.add(o));
      }if (n) return this.factory.createPolygon(i, r.toArray([]));var a = new x();return null !== i && a.add(i), a.addAll(r), this.factory.buildGeometry(a);
    }, createCoordinateSequence: function createCoordinateSequence(t) {
      return this.factory.getCoordinateSequenceFactory().create(t);
    }, getInputGeometry: function getInputGeometry() {
      return this.inputGeom;
    }, transformMultiLineString: function transformMultiLineString(t, e) {
      for (var n = new x(), i = 0; i < t.getNumGeometries(); i++) {
        var r = this.transformLineString(t.getGeometryN(i), t);null !== r && (r.isEmpty() || n.add(r));
      }return this.factory.buildGeometry(n);
    }, transformCoordinates: function transformCoordinates(t, e) {
      return this.copy(t);
    }, transformLineString: function transformLineString(t, e) {
      return this.factory.createLineString(this.transformCoordinates(t.getCoordinateSequence(), t));
    }, transformMultiPoint: function transformMultiPoint(t, e) {
      for (var n = new x(), i = 0; i < t.getNumGeometries(); i++) {
        var r = this.transformPoint(t.getGeometryN(i), t);null !== r && (r.isEmpty() || n.add(r));
      }return this.factory.buildGeometry(n);
    }, transformMultiPolygon: function transformMultiPolygon(t, e) {
      for (var n = new x(), i = 0; i < t.getNumGeometries(); i++) {
        var r = this.transformPolygon(t.getGeometryN(i), t);null !== r && (r.isEmpty() || n.add(r));
      }return this.factory.buildGeometry(n);
    }, copy: function copy(t) {
      return t.copy();
    }, transformGeometryCollection: function transformGeometryCollection(t, e) {
      for (var n = new x(), i = 0; i < t.getNumGeometries(); i++) {
        var r = this.transform(t.getGeometryN(i));null !== r && (this.pruneEmptyGeometry && r.isEmpty() || n.add(r));
      }return this.preserveGeometryCollectionType ? this.factory.createGeometryCollection($t.toGeometryArray(n)) : this.factory.buildGeometry(n);
    }, transform: function transform(t) {
      if (this.inputGeom = t, this.factory = t.getFactory(), t instanceof Ct) return this.transformPoint(t, null);if (t instanceof Lt) return this.transformMultiPoint(t, null);if (t instanceof Rt) return this.transformLinearRing(t, null);if (t instanceof It) return this.transformLineString(t, null);if (t instanceof ht) return this.transformMultiLineString(t, null);if (t instanceof wt) return this.transformPolygon(t, null);if (t instanceof Tt) return this.transformMultiPolygon(t, null);if (t instanceof lt) return this.transformGeometryCollection(t, null);throw new n("Unknown Geometry subtype: " + t.getClass().getName());
    }, transformLinearRing: function transformLinearRing(t, e) {
      var n = this.transformCoordinates(t.getCoordinateSequence(), t);if (null === n) return this.factory.createLinearRing(null);var i = n.size();return i > 0 && i < 4 && !this.preserveType ? this.factory.createLineString(n) : this.factory.createLinearRing(n);
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return pe;
    } }), Ws(me.prototype, { snapVertices: function snapVertices(t, e) {
      for (var n = this._isClosed ? t.size() - 1 : t.size(), i = 0; i < n; i++) {
        var r = t.get(i),
            s = this.findSnapForVertex(r, e);null !== s && (t.set(i, new c(s)), 0 === i && this._isClosed && t.set(t.size() - 1, new c(s)));
      }
    }, findSnapForVertex: function findSnapForVertex(t, e) {
      for (var n = 0; n < e.length; n++) {
        if (t.equals2D(e[n])) return null;if (t.distance(e[n]) < this.snapTolerance) return e[n];
      }return null;
    }, snapTo: function snapTo(t) {
      var e = new E(this.srcPts);return this.snapVertices(e, t), this.snapSegments(e, t), e.toCoordinateArray();
    }, snapSegments: function snapSegments(t, e) {
      if (0 === e.length) return null;var n = e.length;e[0].equals2D(e[e.length - 1]) && (n = e.length - 1);for (var i = 0; i < n; i++) {
        var r = e[i],
            s = this.findSegmentIndexToSnap(r, t);s >= 0 && t.add(s + 1, new c(r), !1);
      }
    }, findSegmentIndexToSnap: function findSegmentIndexToSnap(t, e) {
      for (var n = i.MAX_VALUE, r = -1, s = 0; s < e.size() - 1; s++) {
        if (this.seg.p0 = e.get(s), this.seg.p1 = e.get(s + 1), this.seg.p0.equals2D(t) || this.seg.p1.equals2D(t)) {
          if (this.allowSnappingToSourceVertices) continue;return -1;
        }var o = this.seg.distance(t);o < this.snapTolerance && o < n && (n = o, r = s);
      }return r;
    }, setAllowSnappingToSourceVertices: function setAllowSnappingToSourceVertices(t) {
      this.allowSnappingToSourceVertices = t;
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return me;
    } }), me.isClosed = function (t) {
    return !(t.length <= 1) && t[0].equals2D(t[t.length - 1]);
  }, Ws(ve.prototype, { snapTo: function snapTo(t, e) {
      return new ye(e, this.extractTargetCoordinates(t)).transform(this.srcGeom);
    }, snapToSelf: function snapToSelf(t, e) {
      var n = this.extractTargetCoordinates(this.srcGeom),
          i = new ye(t, n, !0),
          r = i.transform(this.srcGeom),
          s = r;return e && Zs(s, St) && (s = r.buffer(0)), s;
    }, computeSnapTolerance: function computeSnapTolerance(t) {
      return this.computeMinimumSegmentLength(t) / 10;
    }, extractTargetCoordinates: function extractTargetCoordinates(t) {
      for (var e = new rt(), n = t.getCoordinates(), i = 0; i < n.length; i++) {
        e.add(n[i]);
      }return e.toArray(new Array(0).fill(null));
    }, computeMinimumSegmentLength: function computeMinimumSegmentLength(t) {
      for (var e = i.MAX_VALUE, n = 0; n < t.length - 1; n++) {
        var r = t[n].distance(t[n + 1]);r < e && (e = r);
      }return e;
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return ve;
    } }), ve.snap = function (t, e, n) {
    var i = new Array(2).fill(null),
        r = new ve(t);i[0] = r.snapTo(e, n);var s = new ve(e);return i[1] = s.snapTo(i[0], n), i;
  }, ve.computeOverlaySnapTolerance = function () {
    if (1 === arguments.length) {
      var t = arguments[0],
          e = ve.computeSizeBasedSnapTolerance(t),
          n = t.getPrecisionModel();if (n.getType() === Qt.FIXED) {
        var i = 1 / n.getScale() * 2 / 1.415;i > e && (e = i);
      }return e;
    }if (2 === arguments.length) {
      var r = arguments[0],
          s = arguments[1];return Math.min(ve.computeOverlaySnapTolerance(r), ve.computeOverlaySnapTolerance(s));
    }
  }, ve.computeSizeBasedSnapTolerance = function (t) {
    var e = t.getEnvelopeInternal();return Math.min(e.getHeight(), e.getWidth()) * ve.SNAP_PRECISION_FACTOR;
  }, ve.snapToSelf = function (t, e, n) {
    return new ve(t).snapToSelf(e, n);
  }, ve.SNAP_PRECISION_FACTOR = 1e-9, js(ye, pe), Ws(ye.prototype, { snapLine: function snapLine(t, e) {
      var n = new me(t, this.snapTolerance);return n.setAllowSnappingToSourceVertices(this.isSelfSnap), n.snapTo(e);
    }, transformCoordinates: function transformCoordinates(t, e) {
      var n = t.toCoordinateArray(),
          i = this.snapLine(n, this.snapPts);return this.factory.getCoordinateSequenceFactory().create(i);
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return ye;
    } }), Ws(xe.prototype, { getCommon: function getCommon() {
      return i.longBitsToDouble(this.commonBits);
    }, add: function add(t) {
      var e = i.doubleToLongBits(t);return this.isFirst ? (this.commonBits = e, this.commonSignExp = xe.signExpBits(this.commonBits), this.isFirst = !1, null) : xe.signExpBits(e) !== this.commonSignExp ? (this.commonBits = 0, null) : (this.commonMantissaBitsCount = xe.numCommonMostSigMantissaBits(this.commonBits, e), void (this.commonBits = xe.zeroLowerBits(this.commonBits, 64 - (12 + this.commonMantissaBitsCount))));
    }, toString: function toString() {
      if (1 === arguments.length) {
        var t = arguments[0],
            e = i.longBitsToDouble(t),
            n = Long.toBinaryString(t),
            r = "0000000000000000000000000000000000000000000000000000000000000000" + n,
            s = r.substring(r.length - 64);return s.substring(0, 1) + "  " + s.substring(1, 12) + "(exp) " + s.substring(12) + " [ " + e + " ]";
      }
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return xe;
    } }), xe.getBit = function (t, e) {
    return 0 != (t & 1 << e) ? 1 : 0;
  }, xe.signExpBits = function (t) {
    return t >> 52;
  }, xe.zeroLowerBits = function (t, e) {
    return t & ~((1 << e) - 1);
  }, xe.numCommonMostSigMantissaBits = function (t, e) {
    for (var n = 0, i = 52; i >= 0; i--) {
      if (xe.getBit(t, i) !== xe.getBit(e, i)) return n;n++;
    }return 52;
  }, Ws(Ee.prototype, { addCommonBits: function addCommonBits(t) {
      var e = new Ne(this.commonCoord);t.apply(e), t.geometryChanged();
    }, removeCommonBits: function removeCommonBits(t) {
      if (0 === this.commonCoord.x && 0 === this.commonCoord.y) return t;var e = new c(this.commonCoord);e.x = -e.x, e.y = -e.y;var n = new Ne(e);return t.apply(n), t.geometryChanged(), t;
    }, getCommonCoordinate: function getCommonCoordinate() {
      return this.commonCoord;
    }, add: function add(t) {
      t.apply(this.ccFilter), this.commonCoord = this.ccFilter.getCommonCoordinate();
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return Ee;
    } }), Ws(Ie.prototype, { filter: function filter(t) {
      this.commonBitsX.add(t.x), this.commonBitsY.add(t.y);
    }, getCommonCoordinate: function getCommonCoordinate() {
      return new c(this.commonBitsX.getCommon(), this.commonBitsY.getCommon());
    }, interfaces_: function interfaces_() {
      return [G];
    }, getClass: function getClass() {
      return Ie;
    } }), Ws(Ne.prototype, { filter: function filter(t, e) {
      var n = t.getOrdinate(e, 0) + this.trans.x,
          i = t.getOrdinate(e, 1) + this.trans.y;t.setOrdinate(e, 0, n), t.setOrdinate(e, 1, i);
    }, isDone: function isDone() {
      return !1;
    }, isGeometryChanged: function isGeometryChanged() {
      return !0;
    }, interfaces_: function interfaces_() {
      return [ut];
    }, getClass: function getClass() {
      return Ne;
    } }), Ee.CommonCoordinateFilter = Ie, Ee.Translater = Ne, Ws(Ce.prototype, { next: function next() {
      if (this.atStart) return this.atStart = !1, Ce.isAtomic(this.parent) && this.index++, this.parent;if (null !== this.subcollectionIterator) {
        if (this.subcollectionIterator.hasNext()) return this.subcollectionIterator.next();this.subcollectionIterator = null;
      }if (this.index >= this.max) throw new v();var t = this.parent.getGeometryN(this.index++);return t instanceof lt ? (this.subcollectionIterator = new Ce(t), this.subcollectionIterator.next()) : t;
    }, remove: function remove() {
      throw new UnsupportedOperationException(this.getClass().getName());
    }, hasNext: function hasNext() {
      if (this.atStart) return !0;if (null !== this.subcollectionIterator) {
        if (this.subcollectionIterator.hasNext()) return !0;this.subcollectionIterator = null;
      }return !(this.index >= this.max);
    }, interfaces_: function interfaces_() {
      return [g];
    }, getClass: function getClass() {
      return Ce;
    } }), Ce.isAtomic = function (t) {
    return !(t instanceof lt);
  }, Ws(Se.prototype, { locateInternal: function locateInternal() {
      if (arguments[0] instanceof c && arguments[1] instanceof wt) {
        var t = arguments[0],
            e = arguments[1];if (e.isEmpty()) return S.EXTERIOR;var n = e.getExteriorRing(),
            i = this.locateInPolygonRing(t, n);if (i === S.EXTERIOR) return S.EXTERIOR;if (i === S.BOUNDARY) return S.BOUNDARY;for (var r = 0; r < e.getNumInteriorRing(); r++) {
          var s = e.getInteriorRingN(r),
              o = this.locateInPolygonRing(t, s);if (o === S.INTERIOR) return S.EXTERIOR;if (o === S.BOUNDARY) return S.BOUNDARY;
        }return S.INTERIOR;
      }if (arguments[0] instanceof c && arguments[1] instanceof It) {
        var a = arguments[0],
            u = arguments[1];if (!u.getEnvelopeInternal().intersects(a)) return S.EXTERIOR;var l = u.getCoordinates();return u.isClosed() || !a.equals(l[0]) && !a.equals(l[l.length - 1]) ? oe.isOnLine(a, l) ? S.INTERIOR : S.EXTERIOR : S.BOUNDARY;
      }if (arguments[0] instanceof c && arguments[1] instanceof Ct) {
        var h = arguments[0];return arguments[1].getCoordinate().equals2D(h) ? S.INTERIOR : S.EXTERIOR;
      }
    }, locateInPolygonRing: function locateInPolygonRing(t, e) {
      return e.getEnvelopeInternal().intersects(t) ? oe.locatePointInRing(t, e.getCoordinates()) : S.EXTERIOR;
    }, intersects: function intersects(t, e) {
      return this.locate(t, e) !== S.EXTERIOR;
    }, updateLocationInfo: function updateLocationInfo(t) {
      t === S.INTERIOR && (this.isIn = !0), t === S.BOUNDARY && this.numBoundaries++;
    }, computeLocation: function computeLocation(t, e) {
      if (e instanceof Ct && this.updateLocationInfo(this.locateInternal(t, e)), e instanceof It) this.updateLocationInfo(this.locateInternal(t, e));else if (e instanceof wt) this.updateLocationInfo(this.locateInternal(t, e));else if (e instanceof ht) for (var n = e, i = 0; i < n.getNumGeometries(); i++) {
        var r = n.getGeometryN(i);this.updateLocationInfo(this.locateInternal(t, r));
      } else if (e instanceof Tt) for (var s = e, i = 0; i < s.getNumGeometries(); i++) {
        var o = s.getGeometryN(i);this.updateLocationInfo(this.locateInternal(t, o));
      } else if (e instanceof lt) for (var a = new Ce(e); a.hasNext();) {
        var u = a.next();u !== e && this.computeLocation(t, u);
      }
    }, locate: function locate(t, e) {
      return e.isEmpty() ? S.EXTERIOR : e instanceof It ? this.locateInternal(t, e) : e instanceof wt ? this.locateInternal(t, e) : (this.isIn = !1, this.numBoundaries = 0, this.computeLocation(t, e), this.boundaryRule.isInBoundary(this.numBoundaries) ? S.BOUNDARY : this.numBoundaries > 0 || this.isIn ? S.INTERIOR : S.EXTERIOR);
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return Se;
    } }), Ws(we.prototype, { interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return we;
    } }), we.octant = function () {
    if ("number" == typeof arguments[0] && "number" == typeof arguments[1]) {
      var t = arguments[0],
          e = arguments[1];if (0 === t && 0 === e) throw new n("Cannot compute the octant for point ( " + t + ", " + e + " )");var i = Math.abs(t),
          r = Math.abs(e);return t >= 0 ? e >= 0 ? i >= r ? 0 : 1 : i >= r ? 7 : 6 : e >= 0 ? i >= r ? 3 : 2 : i >= r ? 4 : 5;
    }if (arguments[0] instanceof c && arguments[1] instanceof c) {
      var s = arguments[0],
          o = arguments[1],
          a = o.x - s.x,
          u = o.y - s.y;if (0 === a && 0 === u) throw new n("Cannot compute the octant for two identical points " + s);return we.octant(a, u);
    }
  }, Ws(Le.prototype, { getCoordinates: function getCoordinates() {}, size: function size() {}, getCoordinate: function getCoordinate(t) {}, isClosed: function isClosed() {}, setData: function setData(t) {}, getData: function getData() {}, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return Le;
    } }), Ws(Re.prototype, { getCoordinates: function getCoordinates() {
      return this.pts;
    }, size: function size() {
      return this.pts.length;
    }, getCoordinate: function getCoordinate(t) {
      return this.pts[t];
    }, isClosed: function isClosed() {
      return this.pts[0].equals(this.pts[this.pts.length - 1]);
    }, getSegmentOctant: function getSegmentOctant(t) {
      return t === this.pts.length - 1 ? -1 : we.octant(this.getCoordinate(t), this.getCoordinate(t + 1));
    }, setData: function setData(t) {
      this.data = t;
    }, getData: function getData() {
      return this.data;
    }, toString: function toString() {
      return ee.toLineString(new Dt(this.pts));
    }, interfaces_: function interfaces_() {
      return [Le];
    }, getClass: function getClass() {
      return Re;
    } }), Ws(Te.prototype, { getBounds: function getBounds() {}, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return Te;
    } }), Ws(Pe.prototype, { getItem: function getItem() {
      return this.item;
    }, getBounds: function getBounds() {
      return this.bounds;
    }, interfaces_: function interfaces_() {
      return [Te, a];
    }, getClass: function getClass() {
      return Pe;
    } }), Ws(be.prototype, { poll: function poll() {
      if (this.isEmpty()) return null;var t = this.items.get(1);return this.items.set(1, this.items.get(this._size)), this._size -= 1, this.reorder(1), t;
    }, size: function size() {
      return this._size;
    }, reorder: function reorder(t) {
      for (var e = null, n = this.items.get(t); 2 * t <= this._size && (e = 2 * t, e !== this._size && this.items.get(e + 1).compareTo(this.items.get(e)) < 0 && e++, this.items.get(e).compareTo(n) < 0); t = e) {
        this.items.set(t, this.items.get(e));
      }this.items.set(t, n);
    }, clear: function clear() {
      this._size = 0, this.items.clear();
    }, isEmpty: function isEmpty() {
      return 0 === this._size;
    }, add: function add(t) {
      this.items.add(null), this._size += 1;var e = this._size;for (this.items.set(0, t); t.compareTo(this.items.get(Math.trunc(e / 2))) < 0; e /= 2) {
        this.items.set(e, this.items.get(Math.trunc(e / 2)));
      }this.items.set(e, t);
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return be;
    } }), Ws(Oe.prototype, { visitItem: function visitItem(t) {}, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return Oe;
    } }), Ws(_e.prototype, { insert: function insert(t, e) {}, remove: function remove(t, e) {}, query: function query() {
      if (1 === arguments.length) {
        arguments[0];
      } else if (2 === arguments.length) {
        arguments[0], arguments[1];
      }
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return _e;
    } }), Ws(Me.prototype, { getLevel: function getLevel() {
      return this.level;
    }, size: function size() {
      return this.childBoundables.size();
    }, getChildBoundables: function getChildBoundables() {
      return this.childBoundables;
    }, addChildBoundable: function addChildBoundable(t) {
      h.isTrue(null === this.bounds), this.childBoundables.add(t);
    }, isEmpty: function isEmpty() {
      return this.childBoundables.isEmpty();
    }, getBounds: function getBounds() {
      return null === this.bounds && (this.bounds = this.computeBounds()), this.bounds;
    }, interfaces_: function interfaces_() {
      return [Te, a];
    }, getClass: function getClass() {
      return Me;
    } }), Me.serialVersionUID = 0x5a1e55ec41369800;var uo = { reverseOrder: function reverseOrder() {
      return { compare: function compare(t, e) {
          return e.compareTo(t);
        } };
    }, min: function min(t) {
      return uo.sort(t), t.get(0);
    }, sort: function sort(t, e) {
      var n = t.toArray();e ? st.sort(n, e) : st.sort(n);for (var i = t.iterator(), r = 0, s = n.length; r < s; r++) {
        i.next(), i.set(n[r]);
      }
    }, singletonList: function singletonList(t) {
      var e = new x();return e.add(t), e;
    } };Ws(De.prototype, { expandToQueue: function expandToQueue(t, e) {
      var i = De.isComposite(this.boundable1),
          r = De.isComposite(this.boundable2);if (i && r) return De.area(this.boundable1) > De.area(this.boundable2) ? (this.expand(this.boundable1, this.boundable2, t, e), null) : (this.expand(this.boundable2, this.boundable1, t, e), null);if (i) return this.expand(this.boundable1, this.boundable2, t, e), null;if (r) return this.expand(this.boundable2, this.boundable1, t, e), null;throw new n("neither boundable is composite");
    }, isLeaves: function isLeaves() {
      return !(De.isComposite(this.boundable1) || De.isComposite(this.boundable2));
    }, compareTo: function compareTo(t) {
      var e = t;return this._distance < e._distance ? -1 : this._distance > e._distance ? 1 : 0;
    }, expand: function expand(t, e, n, i) {
      for (var r = t.getChildBoundables(), s = r.iterator(); s.hasNext();) {
        var o = s.next(),
            a = new De(o, e, this.itemDistance);a.getDistance() < i && n.add(a);
      }
    }, getBoundable: function getBoundable(t) {
      return 0 === t ? this.boundable1 : this.boundable2;
    }, getDistance: function getDistance() {
      return this._distance;
    }, distance: function distance() {
      return this.isLeaves() ? this.itemDistance.distance(this.boundable1, this.boundable2) : this.boundable1.getBounds().distance(this.boundable2.getBounds());
    }, interfaces_: function interfaces_() {
      return [r];
    }, getClass: function getClass() {
      return De;
    } }), De.area = function (t) {
    return t.getBounds().getArea();
  }, De.isComposite = function (t) {
    return t instanceof Me;
  }, Ws(Ae.prototype, { getNodeCapacity: function getNodeCapacity() {
      return this.nodeCapacity;
    }, lastNode: function lastNode(t) {
      return t.get(t.size() - 1);
    }, size: function size() {
      if (0 === arguments.length) return this.isEmpty() ? 0 : (this.build(), this.size(this.root));if (1 === arguments.length) {
        for (var t = arguments[0], e = 0, n = t.getChildBoundables().iterator(); n.hasNext();) {
          var i = n.next();i instanceof Me ? e += this.size(i) : i instanceof Pe && (e += 1);
        }return e;
      }
    }, removeItem: function removeItem(t, e) {
      for (var n = null, i = t.getChildBoundables().iterator(); i.hasNext();) {
        var r = i.next();r instanceof Pe && r.getItem() === e && (n = r);
      }return null !== n && (t.getChildBoundables().remove(n), !0);
    }, itemsTree: function itemsTree() {
      if (0 === arguments.length) {
        this.build();var t = this.itemsTree(this.root);return null === t ? new x() : t;
      }if (1 === arguments.length) {
        for (var e = arguments[0], n = new x(), i = e.getChildBoundables().iterator(); i.hasNext();) {
          var r = i.next();if (r instanceof Me) {
            var s = this.itemsTree(r);null !== s && n.add(s);
          } else r instanceof Pe ? n.add(r.getItem()) : h.shouldNeverReachHere();
        }return n.size() <= 0 ? null : n;
      }
    }, insert: function insert(t, e) {
      h.isTrue(!this.built, "Cannot insert items into an STR packed R-tree after it has been built."), this.itemBoundables.add(new Pe(t, e));
    }, boundablesAtLevel: function boundablesAtLevel() {
      if (1 === arguments.length) {
        var t = arguments[0],
            e = new x();return this.boundablesAtLevel(t, this.root, e), e;
      }if (3 === arguments.length) {
        var n = arguments[0],
            i = arguments[1],
            r = arguments[2];if (h.isTrue(n > -2), i.getLevel() === n) return r.add(i), null;for (var s = i.getChildBoundables().iterator(); s.hasNext();) {
          var o = s.next();o instanceof Me ? this.boundablesAtLevel(n, o, r) : (h.isTrue(o instanceof Pe), n === -1 && r.add(o));
        }return null;
      }
    }, query: function query() {
      if (1 === arguments.length) {
        var t = arguments[0];this.build();var e = new x();return this.isEmpty() ? e : (this.getIntersectsOp().intersects(this.root.getBounds(), t) && this.query(t, this.root, e), e);
      }if (2 === arguments.length) {
        var n = arguments[0],
            i = arguments[1];if (this.build(), this.isEmpty()) return null;this.getIntersectsOp().intersects(this.root.getBounds(), n) && this.query(n, this.root, i);
      } else if (3 === arguments.length) if (Zs(arguments[2], Oe) && arguments[0] instanceof Object && arguments[1] instanceof Me) for (var r = arguments[0], s = arguments[1], o = arguments[2], a = s.getChildBoundables(), u = 0; u < a.size(); u++) {
        var l = a.get(u);this.getIntersectsOp().intersects(l.getBounds(), r) && (l instanceof Me ? this.query(r, l, o) : l instanceof Pe ? o.visitItem(l.getItem()) : h.shouldNeverReachHere());
      } else if (Zs(arguments[2], m) && arguments[0] instanceof Object && arguments[1] instanceof Me) for (var c = arguments[0], f = arguments[1], g = arguments[2], a = f.getChildBoundables(), u = 0; u < a.size(); u++) {
        var l = a.get(u);this.getIntersectsOp().intersects(l.getBounds(), c) && (l instanceof Me ? this.query(c, l, g) : l instanceof Pe ? g.add(l.getItem()) : h.shouldNeverReachHere());
      }
    }, build: function build() {
      if (this.built) return null;this.root = this.itemBoundables.isEmpty() ? this.createNode(0) : this.createHigherLevels(this.itemBoundables, -1), this.itemBoundables = null, this.built = !0;
    }, getRoot: function getRoot() {
      return this.build(), this.root;
    }, remove: function remove() {
      if (2 === arguments.length) {
        var t = arguments[0],
            e = arguments[1];return this.build(), !!this.getIntersectsOp().intersects(this.root.getBounds(), t) && this.remove(t, this.root, e);
      }if (3 === arguments.length) {
        var n = arguments[0],
            i = arguments[1],
            r = arguments[2],
            s = this.removeItem(i, r);if (s) return !0;for (var o = null, a = i.getChildBoundables().iterator(); a.hasNext();) {
          var u = a.next();if (this.getIntersectsOp().intersects(u.getBounds(), n) && u instanceof Me && (s = this.remove(n, u, r))) {
            o = u;break;
          }
        }return null !== o && o.getChildBoundables().isEmpty() && i.getChildBoundables().remove(o), s;
      }
    }, createHigherLevels: function createHigherLevels(t, e) {
      h.isTrue(!t.isEmpty());var n = this.createParentBoundables(t, e + 1);return 1 === n.size() ? n.get(0) : this.createHigherLevels(n, e + 1);
    }, depth: function depth() {
      if (0 === arguments.length) return this.isEmpty() ? 0 : (this.build(), this.depth(this.root));if (1 === arguments.length) {
        for (var t = arguments[0], e = 0, n = t.getChildBoundables().iterator(); n.hasNext();) {
          var i = n.next();if (i instanceof Me) {
            var r = this.depth(i);r > e && (e = r);
          }
        }return e + 1;
      }
    }, createParentBoundables: function createParentBoundables(t, e) {
      h.isTrue(!t.isEmpty());var n = new x();n.add(this.createNode(e));var i = new x(t);uo.sort(i, this.getComparator());for (var r = i.iterator(); r.hasNext();) {
        var s = r.next();this.lastNode(n).getChildBoundables().size() === this.getNodeCapacity() && n.add(this.createNode(e)), this.lastNode(n).addChildBoundable(s);
      }return n;
    }, isEmpty: function isEmpty() {
      return this.built ? this.root.isEmpty() : this.itemBoundables.isEmpty();
    }, interfaces_: function interfaces_() {
      return [a];
    }, getClass: function getClass() {
      return Ae;
    } }), Ae.compareDoubles = function (t, e) {
    return t > e ? 1 : t < e ? -1 : 0;
  }, Ae.IntersectsOp = Fe, Ae.serialVersionUID = -0x35ef64c82d4c5400, Ae.DEFAULT_NODE_CAPACITY = 10, Ws(Ge.prototype, { distance: function distance(t, e) {}, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return Ge;
    } }), js(qe, Ae), Ws(qe.prototype, { createParentBoundablesFromVerticalSlices: function createParentBoundablesFromVerticalSlices(t, e) {
      h.isTrue(t.length > 0);for (var n = new x(), i = 0; i < t.length; i++) {
        n.addAll(this.createParentBoundablesFromVerticalSlice(t[i], e));
      }return n;
    }, createNode: function createNode(t) {
      return new Be(t);
    }, size: function size() {
      return 0 === arguments.length ? Ae.prototype.size.call(this) : Ae.prototype.size.apply(this, arguments);
    }, insert: function insert() {
      if (2 !== arguments.length) return Ae.prototype.insert.apply(this, arguments);var t = arguments[0],
          e = arguments[1];if (t.isNull()) return null;Ae.prototype.insert.call(this, t, e);
    }, getIntersectsOp: function getIntersectsOp() {
      return qe.intersectsOp;
    }, verticalSlices: function verticalSlices(t, e) {
      for (var n = Math.trunc(Math.ceil(t.size() / e)), i = new Array(e).fill(null), r = t.iterator(), s = 0; s < e; s++) {
        i[s] = new x();for (var o = 0; r.hasNext() && o < n;) {
          var a = r.next();i[s].add(a), o++;
        }
      }return i;
    }, query: function query() {
      if (1 === arguments.length) {
        var t = arguments[0];return Ae.prototype.query.call(this, t);
      }if (2 === arguments.length) {
        var e = arguments[0],
            n = arguments[1];Ae.prototype.query.call(this, e, n);
      } else if (3 === arguments.length) if (Zs(arguments[2], Oe) && arguments[0] instanceof Object && arguments[1] instanceof Me) {
        var i = arguments[0],
            r = arguments[1],
            s = arguments[2];Ae.prototype.query.call(this, i, r, s);
      } else if (Zs(arguments[2], m) && arguments[0] instanceof Object && arguments[1] instanceof Me) {
        var o = arguments[0],
            a = arguments[1],
            u = arguments[2];Ae.prototype.query.call(this, o, a, u);
      }
    }, getComparator: function getComparator() {
      return qe.yComparator;
    }, createParentBoundablesFromVerticalSlice: function createParentBoundablesFromVerticalSlice(t, e) {
      return Ae.prototype.createParentBoundables.call(this, t, e);
    }, remove: function remove() {
      if (2 === arguments.length) {
        var t = arguments[0],
            e = arguments[1];return Ae.prototype.remove.call(this, t, e);
      }return Ae.prototype.remove.apply(this, arguments);
    }, depth: function depth() {
      return 0 === arguments.length ? Ae.prototype.depth.call(this) : Ae.prototype.depth.apply(this, arguments);
    }, createParentBoundables: function createParentBoundables(t, e) {
      h.isTrue(!t.isEmpty());var n = Math.trunc(Math.ceil(t.size() / this.getNodeCapacity())),
          i = new x(t);uo.sort(i, qe.xComparator);var r = this.verticalSlices(i, Math.trunc(Math.ceil(Math.sqrt(n))));return this.createParentBoundablesFromVerticalSlices(r, e);
    }, nearestNeighbour: function nearestNeighbour() {
      if (1 === arguments.length) {
        if (Zs(arguments[0], Ge)) {
          var t = arguments[0],
              e = new De(this.getRoot(), this.getRoot(), t);return this.nearestNeighbour(e);
        }if (arguments[0] instanceof De) {
          var n = arguments[0];return this.nearestNeighbour(n, i.POSITIVE_INFINITY);
        }
      } else if (2 === arguments.length) {
        if (arguments[0] instanceof qe && Zs(arguments[1], Ge)) {
          var r = arguments[0],
              s = arguments[1],
              e = new De(this.getRoot(), r.getRoot(), s);return this.nearestNeighbour(e);
        }if (arguments[0] instanceof De && "number" == typeof arguments[1]) {
          var o = arguments[0],
              a = arguments[1],
              u = a,
              l = null,
              h = new be();for (h.add(o); !h.isEmpty() && u > 0;) {
            var c = h.poll(),
                f = c.getDistance();if (f >= u) break;c.isLeaves() ? (u = f, l = c) : c.expandToQueue(h, u);
          }return [l.getBoundable(0).getItem(), l.getBoundable(1).getItem()];
        }
      } else if (3 === arguments.length) {
        var g = arguments[0],
            d = arguments[1],
            p = arguments[2],
            m = new Pe(g, d),
            e = new De(this.getRoot(), m, p);return this.nearestNeighbour(e)[0];
      }
    }, interfaces_: function interfaces_() {
      return [_e, a];
    }, getClass: function getClass() {
      return qe;
    } }), qe.centreX = function (t) {
    return qe.avg(t.getMinX(), t.getMaxX());
  }, qe.avg = function (t, e) {
    return (t + e) / 2;
  }, qe.centreY = function (t) {
    return qe.avg(t.getMinY(), t.getMaxY());
  }, js(Be, Me), Ws(Be.prototype, { computeBounds: function computeBounds() {
      for (var t = null, e = this.getChildBoundables().iterator(); e.hasNext();) {
        var n = e.next();null === t ? t = new I(n.getBounds()) : t.expandToInclude(n.getBounds());
      }return t;
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return Be;
    } }), qe.STRtreeNode = Be, qe.serialVersionUID = 0x39920f7d5f261e0, qe.xComparator = { interfaces_: function interfaces_() {
      return [o];
    }, compare: function compare(t, e) {
      return Ae.compareDoubles(qe.centreX(t.getBounds()), qe.centreX(e.getBounds()));
    } }, qe.yComparator = { interfaces_: function interfaces_() {
      return [o];
    }, compare: function compare(t, e) {
      return Ae.compareDoubles(qe.centreY(t.getBounds()), qe.centreY(e.getBounds()));
    } }, qe.intersectsOp = { interfaces_: function interfaces_() {
      return [IntersectsOp];
    }, intersects: function intersects(t, e) {
      return t.intersects(e);
    } }, qe.DEFAULT_NODE_CAPACITY = 10, Ws(ze.prototype, { interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return ze;
    } }), ze.relativeSign = function (t, e) {
    return t < e ? -1 : t > e ? 1 : 0;
  }, ze.compare = function (t, e, n) {
    if (e.equals2D(n)) return 0;var i = ze.relativeSign(e.x, n.x),
        r = ze.relativeSign(e.y, n.y);switch (t) {case 0:
        return ze.compareValue(i, r);case 1:
        return ze.compareValue(r, i);case 2:
        return ze.compareValue(r, -i);case 3:
        return ze.compareValue(-i, r);case 4:
        return ze.compareValue(-i, -r);case 5:
        return ze.compareValue(-r, -i);case 6:
        return ze.compareValue(-r, i);case 7:
        return ze.compareValue(i, -r);}return h.shouldNeverReachHere("invalid octant value"), 0;
  }, ze.compareValue = function (t, e) {
    return t < 0 ? -1 : t > 0 ? 1 : e < 0 ? -1 : e > 0 ? 1 : 0;
  }, Ws(Ve.prototype, { getCoordinate: function getCoordinate() {
      return this.coord;
    }, print: function print(t) {
      t.print(this.coord), t.print(" seg # = " + this.segmentIndex);
    }, compareTo: function compareTo(t) {
      var e = t;return this.segmentIndex < e.segmentIndex ? -1 : this.segmentIndex > e.segmentIndex ? 1 : this.coord.equals2D(e.coord) ? 0 : ze.compare(this.segmentOctant, this.coord, e.coord);
    }, isEndPoint: function isEndPoint(t) {
      return 0 === this.segmentIndex && !this._isInterior || this.segmentIndex === t;
    }, isInterior: function isInterior() {
      return this._isInterior;
    }, interfaces_: function interfaces_() {
      return [r];
    }, getClass: function getClass() {
      return Ve;
    } }), Ws(ke.prototype, { getSplitCoordinates: function getSplitCoordinates() {
      var t = new E();this.addEndpoints();for (var e = this.iterator(), n = e.next(); e.hasNext();) {
        var i = e.next();this.addEdgeCoordinates(n, i, t), n = i;
      }return t.toCoordinateArray();
    }, addCollapsedNodes: function addCollapsedNodes() {
      var t = new x();this.findCollapsesFromInsertedNodes(t), this.findCollapsesFromExistingVertices(t);for (var e = t.iterator(); e.hasNext();) {
        var n = e.next().intValue();this.add(this.edge.getCoordinate(n), n);
      }
    }, print: function print(t) {
      t.println("Intersections:");for (var e = this.iterator(); e.hasNext();) {
        e.next().print(t);
      }
    }, findCollapsesFromExistingVertices: function findCollapsesFromExistingVertices(t) {
      for (var e = 0; e < this.edge.size() - 2; e++) {
        var n = this.edge.getCoordinate(e),
            i = (this.edge.getCoordinate(e + 1), this.edge.getCoordinate(e + 2));n.equals2D(i) && t.add(new R(e + 1));
      }
    }, addEdgeCoordinates: function addEdgeCoordinates(t, e, n) {
      var i = e.segmentIndex - t.segmentIndex + 2,
          r = this.edge.getCoordinate(e.segmentIndex),
          s = e.isInterior() || !e.coord.equals2D(r);s || i--;n.add(new c(t.coord), !1);for (var o = t.segmentIndex + 1; o <= e.segmentIndex; o++) {
        n.add(this.edge.getCoordinate(o));
      }s && n.add(new c(e.coord));
    }, iterator: function iterator() {
      return this.nodeMap.values().iterator();
    }, addSplitEdges: function addSplitEdges(t) {
      this.addEndpoints(), this.addCollapsedNodes();for (var e = this.iterator(), n = e.next(); e.hasNext();) {
        var i = e.next(),
            r = this.createSplitEdge(n, i);t.add(r), n = i;
      }
    }, findCollapseIndex: function findCollapseIndex(t, e, n) {
      if (!t.coord.equals2D(e.coord)) return !1;var i = e.segmentIndex - t.segmentIndex;return e.isInterior() || i--, 1 === i && (n[0] = t.segmentIndex + 1, !0);
    }, findCollapsesFromInsertedNodes: function findCollapsesFromInsertedNodes(t) {
      for (var e = new Array(1).fill(null), n = this.iterator(), i = n.next(); n.hasNext();) {
        var r = n.next();this.findCollapseIndex(i, r, e) && t.add(new R(e[0])), i = r;
      }
    }, getEdge: function getEdge() {
      return this.edge;
    }, addEndpoints: function addEndpoints() {
      var t = this.edge.size() - 1;this.add(this.edge.getCoordinate(0), 0), this.add(this.edge.getCoordinate(t), t);
    }, createSplitEdge: function createSplitEdge(t, e) {
      var n = e.segmentIndex - t.segmentIndex + 2,
          i = this.edge.getCoordinate(e.segmentIndex),
          r = e.isInterior() || !e.coord.equals2D(i);r || n--;var s = new Array(n).fill(null),
          o = 0;s[o++] = new c(t.coord);for (var a = t.segmentIndex + 1; a <= e.segmentIndex; a++) {
        s[o++] = this.edge.getCoordinate(a);
      }return r && (s[o] = new c(e.coord)), new Xe(s, this.edge.getData());
    }, add: function add(t, e) {
      var n = new Ve(this.edge, t, e, this.edge.getSegmentOctant(e)),
          i = this.nodeMap.get(n);return null !== i ? (h.isTrue(i.coord.equals2D(t), "Found equal nodes with different coordinates"), i) : (this.nodeMap.put(n, n), n);
    }, checkSplitEdgesCorrectness: function checkSplitEdgesCorrectness(t) {
      var e = this.edge.getCoordinates(),
          n = t.get(0),
          i = n.getCoordinate(0);if (!i.equals2D(e[0])) throw new u("bad split edge start point at " + i);var r = t.get(t.size() - 1),
          s = r.getCoordinates(),
          o = s[s.length - 1];if (!o.equals2D(e[e.length - 1])) throw new u("bad split edge end point at " + o);
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return ke;
    } }), Ws(Ye.prototype, { next: function next() {
      return null === this.currNode ? (this.currNode = this.nextNode, this.currSegIndex = this.currNode.segmentIndex, this.readNextNode(), this.currNode) : null === this.nextNode ? null : this.nextNode.segmentIndex === this.currNode.segmentIndex ? (this.currNode = this.nextNode, this.currSegIndex = this.currNode.segmentIndex, this.readNextNode(), this.currNode) : (this.nextNode.segmentIndex, this.currNode.segmentIndex, null);
    }, remove: function remove() {
      throw new UnsupportedOperationException(this.getClass().getName());
    }, hasNext: function hasNext() {
      return null !== this.nextNode;
    }, readNextNode: function readNextNode() {
      this.nodeIt.hasNext() ? this.nextNode = this.nodeIt.next() : this.nextNode = null;
    }, interfaces_: function interfaces_() {
      return [g];
    }, getClass: function getClass() {
      return Ye;
    } }), Ws(Ue.prototype, { addIntersection: function addIntersection(t, e) {}, interfaces_: function interfaces_() {
      return [Le];
    }, getClass: function getClass() {
      return Ue;
    } }), Ws(Xe.prototype, { getCoordinates: function getCoordinates() {
      return this.pts;
    }, size: function size() {
      return this.pts.length;
    }, getCoordinate: function getCoordinate(t) {
      return this.pts[t];
    }, isClosed: function isClosed() {
      return this.pts[0].equals(this.pts[this.pts.length - 1]);
    }, getSegmentOctant: function getSegmentOctant(t) {
      return t === this.pts.length - 1 ? -1 : this.safeOctant(this.getCoordinate(t), this.getCoordinate(t + 1));
    }, setData: function setData(t) {
      this.data = t;
    }, safeOctant: function safeOctant(t, e) {
      return t.equals2D(e) ? 0 : we.octant(t, e);
    }, getData: function getData() {
      return this.data;
    }, addIntersection: function addIntersection() {
      if (2 === arguments.length) {
        var t = arguments[0],
            e = arguments[1];this.addIntersectionNode(t, e);
      } else if (4 === arguments.length) {
        var n = arguments[0],
            i = arguments[1],
            r = (arguments[2], arguments[3]),
            s = new c(n.getIntersection(r));this.addIntersection(s, i);
      }
    }, toString: function toString() {
      return ee.toLineString(new Dt(this.pts));
    }, getNodeList: function getNodeList() {
      return this.nodeList;
    }, addIntersectionNode: function addIntersectionNode(t, e) {
      var n = e,
          i = n + 1;if (i < this.pts.length) {
        var r = this.pts[i];t.equals2D(r) && (n = i);
      }return this.nodeList.add(t, n);
    }, addIntersections: function addIntersections(t, e, n) {
      for (var i = 0; i < t.getIntersectionNum(); i++) {
        this.addIntersection(t, e, n, i);
      }
    }, interfaces_: function interfaces_() {
      return [Ue];
    }, getClass: function getClass() {
      return Xe;
    } }), Xe.getNodedSubstrings = function () {
    if (1 === arguments.length) {
      var t = arguments[0],
          e = new x();return Xe.getNodedSubstrings(t, e), e;
    }if (2 === arguments.length) for (var n = arguments[0], i = arguments[1], r = n.iterator(); r.hasNext();) {
      var s = r.next();s.getNodeList().addSplitEdges(i);
    }
  }, Ws(He.prototype, { overlap: function overlap() {
      if (2 === arguments.length) {
        arguments[0], arguments[1];
      } else if (4 === arguments.length) {
        var t = arguments[0],
            e = arguments[1],
            n = arguments[2],
            i = arguments[3];t.getLineSegment(e, this.overlapSeg1), n.getLineSegment(i, this.overlapSeg2), this.overlap(this.overlapSeg1, this.overlapSeg2);
      }
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return He;
    } }), Ws(We.prototype, { getLineSegment: function getLineSegment(t, e) {
      e.p0 = this.pts[t], e.p1 = this.pts[t + 1];
    }, computeSelect: function computeSelect(t, e, n, i) {
      var r = this.pts[e],
          s = this.pts[n];if (i.tempEnv1.init(r, s), n - e == 1) return i.select(this, e), null;if (!t.intersects(i.tempEnv1)) return null;var o = Math.trunc((e + n) / 2);e < o && this.computeSelect(t, e, o, i), o < n && this.computeSelect(t, o, n, i);
    }, getCoordinates: function getCoordinates() {
      for (var t = new Array(this.end - this.start + 1).fill(null), e = 0, n = this.start; n <= this.end; n++) {
        t[e++] = this.pts[n];
      }return t;
    }, computeOverlaps: function computeOverlaps(t, e) {
      this.computeOverlapsInternal(this.start, this.end, t, t.start, t.end, e);
    }, setId: function setId(t) {
      this.id = t;
    }, select: function select(t, e) {
      this.computeSelect(t, this.start, this.end, e);
    }, getEnvelope: function getEnvelope() {
      if (null === this.env) {
        var t = this.pts[this.start],
            e = this.pts[this.end];this.env = new I(t, e);
      }return this.env;
    }, getEndIndex: function getEndIndex() {
      return this.end;
    }, getStartIndex: function getStartIndex() {
      return this.start;
    }, getContext: function getContext() {
      return this.context;
    }, getId: function getId() {
      return this.id;
    }, computeOverlapsInternal: function computeOverlapsInternal(t, e, n, i, r, s) {
      var o = this.pts[t],
          a = this.pts[e],
          u = n.pts[i],
          l = n.pts[r];if (e - t == 1 && r - i == 1) return s.overlap(this, t, n, i), null;if (s.tempEnv1.init(o, a), s.tempEnv2.init(u, l), !s.tempEnv1.intersects(s.tempEnv2)) return null;var h = Math.trunc((t + e) / 2),
          c = Math.trunc((i + r) / 2);t < h && (i < c && this.computeOverlapsInternal(t, h, n, i, c, s), c < r && this.computeOverlapsInternal(t, h, n, c, r, s)), h < e && (i < c && this.computeOverlapsInternal(h, e, n, i, c, s), c < r && this.computeOverlapsInternal(h, e, n, c, r, s));
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return We;
    } }), Ws(je.prototype, { interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return je;
    } }), je.isNorthern = function (t) {
    return t === je.NE || t === je.NW;
  }, je.isOpposite = function (t, e) {
    return t !== e && 2 == (t - e + 4) % 4;
  }, je.commonHalfPlane = function (t, e) {
    if (t === e) return t;if (2 == (t - e + 4) % 4) return -1;var n = t < e ? t : e,
        i = t > e ? t : e;return 0 === n && 3 === i ? 3 : n;
  }, je.isInHalfPlane = function (t, e) {
    return e === je.SE ? t === je.SE || t === je.SW : t === e || t === e + 1;
  }, je.quadrant = function () {
    if ("number" == typeof arguments[0] && "number" == typeof arguments[1]) {
      var t = arguments[0],
          e = arguments[1];if (0 === t && 0 === e) throw new n("Cannot compute the quadrant for point ( " + t + ", " + e + " )");return t >= 0 ? e >= 0 ? je.NE : je.SE : e >= 0 ? je.NW : je.SW;
    }if (arguments[0] instanceof c && arguments[1] instanceof c) {
      var i = arguments[0],
          r = arguments[1];if (r.x === i.x && r.y === i.y) throw new n("Cannot compute the quadrant for two identical points " + i);return r.x >= i.x ? r.y >= i.y ? je.NE : je.SE : r.y >= i.y ? je.NW : je.SW;
    }
  }, je.NE = 0, je.NW = 1, je.SW = 2, je.SE = 3, Ws(Ke.prototype, { interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return Ke;
    } }), Ke.getChainStartIndices = function (t) {
    var e = 0,
        n = new x();n.add(new R(e));do {
      var i = Ke.findChainEnd(t, e);n.add(new R(i)), e = i;
    } while (e < t.length - 1);return Ke.toIntArray(n);
  }, Ke.findChainEnd = function (t, e) {
    for (var n = e; n < t.length - 1 && t[n].equals2D(t[n + 1]);) {
      n++;
    }if (n >= t.length - 1) return t.length - 1;for (var i = je.quadrant(t[n], t[n + 1]), r = e + 1; r < t.length;) {
      if (!t[r - 1].equals2D(t[r])) {
        if (je.quadrant(t[r - 1], t[r]) !== i) break;
      }r++;
    }return r - 1;
  }, Ke.getChains = function () {
    if (1 === arguments.length) {
      var t = arguments[0];return Ke.getChains(t, null);
    }if (2 === arguments.length) {
      for (var e = arguments[0], n = arguments[1], i = new x(), r = Ke.getChainStartIndices(e), s = 0; s < r.length - 1; s++) {
        var o = new We(e, r[s], r[s + 1], n);i.add(o);
      }return i;
    }
  }, Ke.toIntArray = function (t) {
    for (var e = new Array(t.size()).fill(null), n = 0; n < e.length; n++) {
      e[n] = t.get(n).intValue();
    }return e;
  }, Ws(Ze.prototype, { computeNodes: function computeNodes(t) {}, getNodedSubstrings: function getNodedSubstrings() {}, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return Ze;
    } }), Ws(Qe.prototype, { setSegmentIntersector: function setSegmentIntersector(t) {
      this.segInt = t;
    }, interfaces_: function interfaces_() {
      return [Ze];
    }, getClass: function getClass() {
      return Qe;
    } }), js(Je, Qe), Ws(Je.prototype, { getMonotoneChains: function getMonotoneChains() {
      return this.monoChains;
    }, getNodedSubstrings: function getNodedSubstrings() {
      return Xe.getNodedSubstrings(this.nodedSegStrings);
    }, getIndex: function getIndex() {
      return this.index;
    }, add: function add(t) {
      for (var e = Ke.getChains(t.getCoordinates(), t), n = e.iterator(); n.hasNext();) {
        var i = n.next();i.setId(this.idCounter++), this.index.insert(i.getEnvelope(), i), this.monoChains.add(i);
      }
    }, computeNodes: function computeNodes(t) {
      this.nodedSegStrings = t;for (var e = t.iterator(); e.hasNext();) {
        this.add(e.next());
      }this.intersectChains();
    }, intersectChains: function intersectChains() {
      for (var t = new $e(this.segInt), e = this.monoChains.iterator(); e.hasNext();) {
        for (var n = e.next(), i = this.index.query(n.getEnvelope()), r = i.iterator(); r.hasNext();) {
          var s = r.next();if (s.getId() > n.getId() && (n.computeOverlaps(s, t), this.nOverlaps++), this.segInt.isDone()) return null;
        }
      }
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return Je;
    } }), js($e, He), Ws($e.prototype, { overlap: function overlap() {
      if (4 !== arguments.length) return He.prototype.overlap.apply(this, arguments);var t = arguments[0],
          e = arguments[1],
          n = arguments[2],
          i = arguments[3],
          r = t.getContext(),
          s = n.getContext();this.si.processIntersections(r, e, s, i);
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return $e;
    } }), Je.SegmentOverlapAction = $e, js(tn, u), Ws(tn.prototype, { getCoordinate: function getCoordinate() {
      return this.pt;
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return tn;
    } }), tn.msgWithCoord = function (t, e) {
    return null !== e ? t + " [ " + e + " ]" : t;
  }, Ws(en.prototype, { processIntersections: function processIntersections(t, e, n, i) {}, isDone: function isDone() {}, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return en;
    } }), Ws(nn.prototype, { getInteriorIntersection: function getInteriorIntersection() {
      return this.interiorIntersection;
    }, setCheckEndSegmentsOnly: function setCheckEndSegmentsOnly(t) {
      this.isCheckEndSegmentsOnly = t;
    }, getIntersectionSegments: function getIntersectionSegments() {
      return this.intSegments;
    }, count: function count() {
      return this.intersectionCount;
    }, getIntersections: function getIntersections() {
      return this.intersections;
    }, setFindAllIntersections: function setFindAllIntersections(t) {
      this.findAllIntersections = t;
    }, setKeepIntersections: function setKeepIntersections(t) {
      this.keepIntersections = t;
    }, processIntersections: function processIntersections(t, e, n, i) {
      if (!this.findAllIntersections && this.hasIntersection()) return null;if (t === n && e === i) return null;if (this.isCheckEndSegmentsOnly) {
        if (!(this.isEndSegment(t, e) || this.isEndSegment(n, i))) return null;
      }var r = t.getCoordinates()[e],
          s = t.getCoordinates()[e + 1],
          o = n.getCoordinates()[i],
          a = n.getCoordinates()[i + 1];this.li.computeIntersection(r, s, o, a), this.li.hasIntersection() && this.li.isInteriorIntersection() && (this.intSegments = new Array(4).fill(null), this.intSegments[0] = r, this.intSegments[1] = s, this.intSegments[2] = o, this.intSegments[3] = a, this.interiorIntersection = this.li.getIntersection(0), this.keepIntersections && this.intersections.add(this.interiorIntersection), this.intersectionCount++);
    }, isEndSegment: function isEndSegment(t, e) {
      return 0 === e || e >= t.size() - 2;
    }, hasIntersection: function hasIntersection() {
      return null !== this.interiorIntersection;
    }, isDone: function isDone() {
      return !this.findAllIntersections && null !== this.interiorIntersection;
    }, interfaces_: function interfaces_() {
      return [en];
    }, getClass: function getClass() {
      return nn;
    } }), nn.createAllIntersectionsFinder = function (t) {
    var e = new nn(t);return e.setFindAllIntersections(!0), e;
  }, nn.createAnyIntersectionFinder = function (t) {
    return new nn(t);
  }, nn.createIntersectionCounter = function (t) {
    var e = new nn(t);return e.setFindAllIntersections(!0), e.setKeepIntersections(!1), e;
  }, Ws(rn.prototype, { execute: function execute() {
      if (null !== this.segInt) return null;this.checkInteriorIntersections();
    }, getIntersections: function getIntersections() {
      return this.segInt.getIntersections();
    }, isValid: function isValid() {
      return this.execute(), this._isValid;
    }, setFindAllIntersections: function setFindAllIntersections(t) {
      this.findAllIntersections = t;
    }, checkInteriorIntersections: function checkInteriorIntersections() {
      this._isValid = !0, this.segInt = new nn(this.li), this.segInt.setFindAllIntersections(this.findAllIntersections);var t = new Je();if (t.setSegmentIntersector(this.segInt), t.computeNodes(this.segStrings), this.segInt.hasIntersection()) return this._isValid = !1, null;
    }, checkValid: function checkValid() {
      if (this.execute(), !this._isValid) throw new tn(this.getErrorMessage(), this.segInt.getInteriorIntersection());
    }, getErrorMessage: function getErrorMessage() {
      if (this._isValid) return "no intersections found";var t = this.segInt.getIntersectionSegments();return "found non-noded intersection between " + ee.toLineString(t[0], t[1]) + " and " + ee.toLineString(t[2], t[3]);
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return rn;
    } }), rn.computeIntersections = function (t) {
    var e = new rn(t);return e.setFindAllIntersections(!0), e.isValid(), e.getIntersections();
  }, Ws(sn.prototype, { checkValid: function checkValid() {
      this.nv.checkValid();
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return sn;
    } }), sn.toSegmentStrings = function (t) {
    for (var e = new x(), n = t.iterator(); n.hasNext();) {
      var i = n.next();e.add(new Re(i.getCoordinates(), i));
    }return e;
  }, sn.checkValid = function (t) {
    new sn(t).checkValid();
  }, Ws(on.prototype, { map: function map(t) {
      for (var e = new x(), n = 0; n < t.getNumGeometries(); n++) {
        var i = this.mapOp.map(t.getGeometryN(n));i.isEmpty() || e.add(i);
      }return t.getFactory().createGeometryCollection($t.toGeometryArray(e));
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return on;
    } }), on.map = function (t, e) {
    return new on(e).map(t);
  }, Ws(an.prototype, { interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return an;
    } }), an.opposite = function (t) {
    return t === an.LEFT ? an.RIGHT : t === an.RIGHT ? an.LEFT : t;
  }, an.ON = 0, an.LEFT = 1, an.RIGHT = 2, Ws(un.prototype, { setAllLocations: function setAllLocations(t) {
      for (var e = 0; e < this.location.length; e++) {
        this.location[e] = t;
      }
    }, isNull: function isNull() {
      for (var t = 0; t < this.location.length; t++) {
        if (this.location[t] !== S.NONE) return !1;
      }return !0;
    }, setAllLocationsIfNull: function setAllLocationsIfNull(t) {
      for (var e = 0; e < this.location.length; e++) {
        this.location[e] === S.NONE && (this.location[e] = t);
      }
    }, isLine: function isLine() {
      return 1 === this.location.length;
    }, merge: function merge(t) {
      if (t.location.length > this.location.length) {
        var e = new Array(3).fill(null);e[an.ON] = this.location[an.ON], e[an.LEFT] = S.NONE, e[an.RIGHT] = S.NONE, this.location = e;
      }for (var n = 0; n < this.location.length; n++) {
        this.location[n] === S.NONE && n < t.location.length && (this.location[n] = t.location[n]);
      }
    }, getLocations: function getLocations() {
      return this.location;
    }, flip: function flip() {
      if (this.location.length <= 1) return null;var t = this.location[an.LEFT];this.location[an.LEFT] = this.location[an.RIGHT], this.location[an.RIGHT] = t;
    }, toString: function toString() {
      var t = new L();return this.location.length > 1 && t.append(S.toLocationSymbol(this.location[an.LEFT])), t.append(S.toLocationSymbol(this.location[an.ON])), this.location.length > 1 && t.append(S.toLocationSymbol(this.location[an.RIGHT])), t.toString();
    }, setLocations: function setLocations(t, e, n) {
      this.location[an.ON] = t, this.location[an.LEFT] = e, this.location[an.RIGHT] = n;
    }, get: function get(t) {
      return t < this.location.length ? this.location[t] : S.NONE;
    }, isArea: function isArea() {
      return this.location.length > 1;
    }, isAnyNull: function isAnyNull() {
      for (var t = 0; t < this.location.length; t++) {
        if (this.location[t] === S.NONE) return !0;
      }return !1;
    }, setLocation: function setLocation() {
      if (1 === arguments.length) {
        var t = arguments[0];this.setLocation(an.ON, t);
      } else if (2 === arguments.length) {
        var e = arguments[0],
            n = arguments[1];this.location[e] = n;
      }
    }, init: function init(t) {
      this.location = new Array(t).fill(null), this.setAllLocations(S.NONE);
    }, isEqualOnSide: function isEqualOnSide(t, e) {
      return this.location[e] === t.location[e];
    }, allPositionsEqual: function allPositionsEqual(t) {
      for (var e = 0; e < this.location.length; e++) {
        if (this.location[e] !== t) return !1;
      }return !0;
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return un;
    } }), Ws(ln.prototype, { getGeometryCount: function getGeometryCount() {
      var t = 0;return this.elt[0].isNull() || t++, this.elt[1].isNull() || t++, t;
    }, setAllLocations: function setAllLocations(t, e) {
      this.elt[t].setAllLocations(e);
    }, isNull: function isNull(t) {
      return this.elt[t].isNull();
    }, setAllLocationsIfNull: function setAllLocationsIfNull() {
      if (1 === arguments.length) {
        var t = arguments[0];this.setAllLocationsIfNull(0, t), this.setAllLocationsIfNull(1, t);
      } else if (2 === arguments.length) {
        var e = arguments[0],
            n = arguments[1];this.elt[e].setAllLocationsIfNull(n);
      }
    }, isLine: function isLine(t) {
      return this.elt[t].isLine();
    }, merge: function merge(t) {
      for (var e = 0; e < 2; e++) {
        null === this.elt[e] && null !== t.elt[e] ? this.elt[e] = new un(t.elt[e]) : this.elt[e].merge(t.elt[e]);
      }
    }, flip: function flip() {
      this.elt[0].flip(), this.elt[1].flip();
    }, getLocation: function getLocation() {
      if (1 === arguments.length) {
        var t = arguments[0];return this.elt[t].get(an.ON);
      }if (2 === arguments.length) {
        var e = arguments[0],
            n = arguments[1];return this.elt[e].get(n);
      }
    }, toString: function toString() {
      var t = new L();return null !== this.elt[0] && (t.append("A:"), t.append(this.elt[0].toString())), null !== this.elt[1] && (t.append(" B:"), t.append(this.elt[1].toString())), t.toString();
    }, isArea: function isArea() {
      if (0 === arguments.length) return this.elt[0].isArea() || this.elt[1].isArea();if (1 === arguments.length) {
        var t = arguments[0];return this.elt[t].isArea();
      }
    }, isAnyNull: function isAnyNull(t) {
      return this.elt[t].isAnyNull();
    }, setLocation: function setLocation() {
      if (2 === arguments.length) {
        var t = arguments[0],
            e = arguments[1];this.elt[t].setLocation(an.ON, e);
      } else if (3 === arguments.length) {
        var n = arguments[0],
            i = arguments[1],
            r = arguments[2];this.elt[n].setLocation(i, r);
      }
    }, isEqualOnSide: function isEqualOnSide(t, e) {
      return this.elt[0].isEqualOnSide(t.elt[0], e) && this.elt[1].isEqualOnSide(t.elt[1], e);
    }, allPositionsEqual: function allPositionsEqual(t, e) {
      return this.elt[t].allPositionsEqual(e);
    }, toLine: function toLine(t) {
      this.elt[t].isArea() && (this.elt[t] = new un(this.elt[t].location[0]));
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return ln;
    } }), ln.toLineLabel = function (t) {
    for (var e = new ln(S.NONE), n = 0; n < 2; n++) {
      e.setLocation(n, t.getLocation(n));
    }return e;
  }, Ws(hn.prototype, { computeRing: function computeRing() {
      if (null !== this.ring) return null;for (var t = new Array(this.pts.size()).fill(null), e = 0; e < this.pts.size(); e++) {
        t[e] = this.pts.get(e);
      }this.ring = this.geometryFactory.createLinearRing(t), this._isHole = oe.isCCW(this.ring.getCoordinates());
    }, isIsolated: function isIsolated() {
      return 1 === this.label.getGeometryCount();
    }, computePoints: function computePoints(t) {
      this.startDe = t;var e = t,
          n = !0;do {
        if (null === e) throw new tn("Found null DirectedEdge");if (e.getEdgeRing() === this) throw new tn("Directed Edge visited twice during ring-building at " + e.getCoordinate());this.edges.add(e);var i = e.getLabel();h.isTrue(i.isArea()), this.mergeLabel(i), this.addPoints(e.getEdge(), e.isForward(), n), n = !1, this.setEdgeRing(e, this), e = this.getNext(e);
      } while (e !== this.startDe);
    }, getLinearRing: function getLinearRing() {
      return this.ring;
    }, getCoordinate: function getCoordinate(t) {
      return this.pts.get(t);
    }, computeMaxNodeDegree: function computeMaxNodeDegree() {
      this.maxNodeDegree = 0;var t = this.startDe;do {
        var e = t.getNode(),
            n = e.getEdges().getOutgoingDegree(this);n > this.maxNodeDegree && (this.maxNodeDegree = n), t = this.getNext(t);
      } while (t !== this.startDe);this.maxNodeDegree *= 2;
    }, addPoints: function addPoints(t, e, n) {
      var i = t.getCoordinates();if (e) {
        var r = 1;n && (r = 0);for (var s = r; s < i.length; s++) {
          this.pts.add(i[s]);
        }
      } else {
        var r = i.length - 2;n && (r = i.length - 1);for (var s = r; s >= 0; s--) {
          this.pts.add(i[s]);
        }
      }
    }, isHole: function isHole() {
      return this._isHole;
    }, setInResult: function setInResult() {
      var t = this.startDe;do {
        t.getEdge().setInResult(!0), t = t.getNext();
      } while (t !== this.startDe);
    }, containsPoint: function containsPoint(t) {
      var e = this.getLinearRing();if (!e.getEnvelopeInternal().contains(t)) return !1;if (!oe.isPointInRing(t, e.getCoordinates())) return !1;for (var n = this.holes.iterator(); n.hasNext();) {
        if (n.next().containsPoint(t)) return !1;
      }return !0;
    }, addHole: function addHole(t) {
      this.holes.add(t);
    }, isShell: function isShell() {
      return null === this.shell;
    }, getLabel: function getLabel() {
      return this.label;
    }, getEdges: function getEdges() {
      return this.edges;
    }, getMaxNodeDegree: function getMaxNodeDegree() {
      return this.maxNodeDegree < 0 && this.computeMaxNodeDegree(), this.maxNodeDegree;
    }, getShell: function getShell() {
      return this.shell;
    }, mergeLabel: function mergeLabel() {
      if (1 === arguments.length) {
        var t = arguments[0];this.mergeLabel(t, 0), this.mergeLabel(t, 1);
      } else if (2 === arguments.length) {
        var e = arguments[0],
            n = arguments[1],
            i = e.getLocation(n, an.RIGHT);if (i === S.NONE) return null;if (this.label.getLocation(n) === S.NONE) return this.label.setLocation(n, i), null;
      }
    }, setShell: function setShell(t) {
      this.shell = t, null !== t && t.addHole(this);
    }, toPolygon: function toPolygon(t) {
      for (var e = new Array(this.holes.size()).fill(null), n = 0; n < this.holes.size(); n++) {
        e[n] = this.holes.get(n).getLinearRing();
      }return t.createPolygon(this.getLinearRing(), e);
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return hn;
    } }), js(cn, hn), Ws(cn.prototype, { setEdgeRing: function setEdgeRing(t, e) {
      t.setMinEdgeRing(e);
    }, getNext: function getNext(t) {
      return t.getNextMin();
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return cn;
    } }), js(fn, hn), Ws(fn.prototype, { buildMinimalRings: function buildMinimalRings() {
      var t = new x(),
          e = this.startDe;do {
        if (null === e.getMinEdgeRing()) {
          var n = new cn(e, this.geometryFactory);t.add(n);
        }e = e.getNext();
      } while (e !== this.startDe);return t;
    }, setEdgeRing: function setEdgeRing(t, e) {
      t.setEdgeRing(e);
    }, linkDirectedEdgesForMinimalEdgeRings: function linkDirectedEdgesForMinimalEdgeRings() {
      var t = this.startDe;do {
        t.getNode().getEdges().linkMinimalDirectedEdges(this), t = t.getNext();
      } while (t !== this.startDe);
    }, getNext: function getNext(t) {
      return t.getNext();
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return fn;
    } }), Ws(gn.prototype, { setVisited: function setVisited(t) {
      this._isVisited = t;
    }, setInResult: function setInResult(t) {
      this._isInResult = t;
    }, isCovered: function isCovered() {
      return this._isCovered;
    }, isCoveredSet: function isCoveredSet() {
      return this._isCoveredSet;
    }, setLabel: function setLabel(t) {
      this.label = t;
    }, getLabel: function getLabel() {
      return this.label;
    }, setCovered: function setCovered(t) {
      this._isCovered = t, this._isCoveredSet = !0;
    }, updateIM: function updateIM(t) {
      h.isTrue(this.label.getGeometryCount() >= 2, "found partial label"), this.computeIM(t);
    }, isInResult: function isInResult() {
      return this._isInResult;
    }, isVisited: function isVisited() {
      return this._isVisited;
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return gn;
    } }), js(dn, gn), Ws(dn.prototype, { isIncidentEdgeInResult: function isIncidentEdgeInResult() {
      for (var t = this.getEdges().getEdges().iterator(); t.hasNext();) {
        if (t.next().getEdge().isInResult()) return !0;
      }return !1;
    }, isIsolated: function isIsolated() {
      return 1 === this.label.getGeometryCount();
    }, getCoordinate: function getCoordinate() {
      return this.coord;
    }, print: function print(t) {
      t.println("node " + this.coord + " lbl: " + this.label);
    }, computeIM: function computeIM(t) {}, computeMergedLocation: function computeMergedLocation(t, e) {
      var n = S.NONE;if (n = this.label.getLocation(e), !t.isNull(e)) {
        var i = t.getLocation(e);n !== S.BOUNDARY && (n = i);
      }return n;
    }, setLabel: function setLabel() {
      if (2 !== arguments.length) return gn.prototype.setLabel.apply(this, arguments);var t = arguments[0],
          e = arguments[1];null === this.label ? this.label = new ln(t, e) : this.label.setLocation(t, e);
    }, getEdges: function getEdges() {
      return this.edges;
    }, mergeLabel: function mergeLabel() {
      if (arguments[0] instanceof dn) {
        var t = arguments[0];this.mergeLabel(t.label);
      } else if (arguments[0] instanceof ln) for (var e = arguments[0], n = 0; n < 2; n++) {
        var i = this.computeMergedLocation(e, n),
            r = this.label.getLocation(n);r === S.NONE && this.label.setLocation(n, i);
      }
    }, add: function add(t) {
      this.edges.insert(t), t.setNode(this);
    }, setLabelBoundary: function setLabelBoundary(t) {
      if (null === this.label) return null;var e = S.NONE;null !== this.label && (e = this.label.getLocation(t));var n = null;switch (e) {case S.BOUNDARY:
          n = S.INTERIOR;break;case S.INTERIOR:default:
          n = S.BOUNDARY;}this.label.setLocation(t, n);
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return dn;
    } }), Ws(pn.prototype, { find: function find(t) {
      return this.nodeMap.get(t);
    }, addNode: function addNode() {
      if (arguments[0] instanceof c) {
        var t = arguments[0],
            e = this.nodeMap.get(t);return null === e && (e = this.nodeFact.createNode(t), this.nodeMap.put(t, e)), e;
      }if (arguments[0] instanceof dn) {
        var n = arguments[0],
            e = this.nodeMap.get(n.getCoordinate());return null === e ? (this.nodeMap.put(n.getCoordinate(), n), n) : (e.mergeLabel(n), e);
      }
    }, print: function print(t) {
      for (var e = this.iterator(); e.hasNext();) {
        e.next().print(t);
      }
    }, iterator: function iterator() {
      return this.nodeMap.values().iterator();
    }, values: function values() {
      return this.nodeMap.values();
    }, getBoundaryNodes: function getBoundaryNodes(t) {
      for (var e = new x(), n = this.iterator(); n.hasNext();) {
        var i = n.next();i.getLabel().getLocation(t) === S.BOUNDARY && e.add(i);
      }return e;
    }, add: function add(t) {
      var e = t.getCoordinate();this.addNode(e).add(t);
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return pn;
    } }), Ws(mn.prototype, { compareDirection: function compareDirection(t) {
      return this.dx === t.dx && this.dy === t.dy ? 0 : this.quadrant > t.quadrant ? 1 : this.quadrant < t.quadrant ? -1 : oe.computeOrientation(t.p0, t.p1, this.p1);
    }, getDy: function getDy() {
      return this.dy;
    }, getCoordinate: function getCoordinate() {
      return this.p0;
    }, setNode: function setNode(t) {
      this.node = t;
    }, print: function print(t) {
      var e = Math.atan2(this.dy, this.dx),
          n = this.getClass().getName(),
          i = n.lastIndexOf("."),
          r = n.substring(i + 1);t.print("  " + r + ": " + this.p0 + " - " + this.p1 + " " + this.quadrant + ":" + e + "   " + this.label);
    }, compareTo: function compareTo(t) {
      var e = t;return this.compareDirection(e);
    }, getDirectedCoordinate: function getDirectedCoordinate() {
      return this.p1;
    }, getDx: function getDx() {
      return this.dx;
    }, getLabel: function getLabel() {
      return this.label;
    }, getEdge: function getEdge() {
      return this.edge;
    }, getQuadrant: function getQuadrant() {
      return this.quadrant;
    }, getNode: function getNode() {
      return this.node;
    }, toString: function toString() {
      var t = Math.atan2(this.dy, this.dx),
          e = this.getClass().getName(),
          n = e.lastIndexOf(".");return "  " + e.substring(n + 1) + ": " + this.p0 + " - " + this.p1 + " " + this.quadrant + ":" + t + "   " + this.label;
    }, computeLabel: function computeLabel(t) {}, init: function init(t, e) {
      this.p0 = t, this.p1 = e, this.dx = e.x - t.x, this.dy = e.y - t.y, this.quadrant = je.quadrant(this.dx, this.dy), h.isTrue(!(0 === this.dx && 0 === this.dy), "EdgeEnd with identical endpoints found");
    }, interfaces_: function interfaces_() {
      return [r];
    }, getClass: function getClass() {
      return mn;
    } }), js(vn, mn), Ws(vn.prototype, { getNextMin: function getNextMin() {
      return this.nextMin;
    }, getDepth: function getDepth(t) {
      return this.depth[t];
    }, setVisited: function setVisited(t) {
      this._isVisited = t;
    }, computeDirectedLabel: function computeDirectedLabel() {
      this.label = new ln(this.edge.getLabel()), this._isForward || this.label.flip();
    }, getNext: function getNext() {
      return this.next;
    }, setDepth: function setDepth(t, e) {
      if (this.depth[t] !== -999 && this.depth[t] !== e) throw new tn("assigned depths do not match", this.getCoordinate());this.depth[t] = e;
    }, isInteriorAreaEdge: function isInteriorAreaEdge() {
      for (var t = !0, e = 0; e < 2; e++) {
        this.label.isArea(e) && this.label.getLocation(e, an.LEFT) === S.INTERIOR && this.label.getLocation(e, an.RIGHT) === S.INTERIOR || (t = !1);
      }return t;
    }, setNextMin: function setNextMin(t) {
      this.nextMin = t;
    }, print: function print(t) {
      mn.prototype.print.call(this, t), t.print(" " + this.depth[an.LEFT] + "/" + this.depth[an.RIGHT]), t.print(" (" + this.getDepthDelta() + ")"), this._isInResult && t.print(" inResult");
    }, setMinEdgeRing: function setMinEdgeRing(t) {
      this.minEdgeRing = t;
    }, isLineEdge: function isLineEdge() {
      var t = this.label.isLine(0) || this.label.isLine(1),
          e = !this.label.isArea(0) || this.label.allPositionsEqual(0, S.EXTERIOR),
          n = !this.label.isArea(1) || this.label.allPositionsEqual(1, S.EXTERIOR);return t && e && n;
    }, setEdgeRing: function setEdgeRing(t) {
      this.edgeRing = t;
    }, getMinEdgeRing: function getMinEdgeRing() {
      return this.minEdgeRing;
    }, getDepthDelta: function getDepthDelta() {
      var t = this.edge.getDepthDelta();return this._isForward || (t = -t), t;
    }, setInResult: function setInResult(t) {
      this._isInResult = t;
    }, getSym: function getSym() {
      return this.sym;
    }, isForward: function isForward() {
      return this._isForward;
    }, getEdge: function getEdge() {
      return this.edge;
    }, printEdge: function printEdge(t) {
      this.print(t), t.print(" "), this._isForward ? this.edge.print(t) : this.edge.printReverse(t);
    }, setSym: function setSym(t) {
      this.sym = t;
    }, setVisitedEdge: function setVisitedEdge(t) {
      this.setVisited(t), this.sym.setVisited(t);
    }, setEdgeDepths: function setEdgeDepths(t, e) {
      var n = this.getEdge().getDepthDelta();this._isForward || (n = -n);var i = 1;t === an.LEFT && (i = -1);var r = an.opposite(t),
          s = n * i,
          o = e + s;this.setDepth(t, e), this.setDepth(r, o);
    }, getEdgeRing: function getEdgeRing() {
      return this.edgeRing;
    }, isInResult: function isInResult() {
      return this._isInResult;
    }, setNext: function setNext(t) {
      this.next = t;
    }, isVisited: function isVisited() {
      return this._isVisited;
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return vn;
    } }), vn.depthFactor = function (t, e) {
    return t === S.EXTERIOR && e === S.INTERIOR ? 1 : t === S.INTERIOR && e === S.EXTERIOR ? -1 : 0;
  }, Ws(yn.prototype, { createNode: function createNode(t) {
      return new dn(t, null);
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return yn;
    } }), Ws(xn.prototype, { printEdges: function printEdges(t) {
      t.println("Edges:");for (var e = 0; e < this.edges.size(); e++) {
        t.println("edge " + e + ":");var n = this.edges.get(e);n.print(t), n.eiList.print(t);
      }
    }, find: function find(t) {
      return this.nodes.find(t);
    }, addNode: function addNode() {
      if (arguments[0] instanceof dn) {
        var t = arguments[0];return this.nodes.addNode(t);
      }if (arguments[0] instanceof c) {
        var e = arguments[0];return this.nodes.addNode(e);
      }
    }, getNodeIterator: function getNodeIterator() {
      return this.nodes.iterator();
    }, linkResultDirectedEdges: function linkResultDirectedEdges() {
      for (var t = this.nodes.iterator(); t.hasNext();) {
        t.next().getEdges().linkResultDirectedEdges();
      }
    }, debugPrintln: function debugPrintln(t) {
      _.out.println(t);
    }, isBoundaryNode: function isBoundaryNode(t, e) {
      var n = this.nodes.find(e);if (null === n) return !1;var i = n.getLabel();return null !== i && i.getLocation(t) === S.BOUNDARY;
    }, linkAllDirectedEdges: function linkAllDirectedEdges() {
      for (var t = this.nodes.iterator(); t.hasNext();) {
        t.next().getEdges().linkAllDirectedEdges();
      }
    }, matchInSameDirection: function matchInSameDirection(t, e, n, i) {
      return !!t.equals(n) && oe.computeOrientation(t, e, i) === oe.COLLINEAR && je.quadrant(t, e) === je.quadrant(n, i);
    }, getEdgeEnds: function getEdgeEnds() {
      return this.edgeEndList;
    }, debugPrint: function debugPrint(t) {
      _.out.print(t);
    }, getEdgeIterator: function getEdgeIterator() {
      return this.edges.iterator();
    }, findEdgeInSameDirection: function findEdgeInSameDirection(t, e) {
      for (var n = 0; n < this.edges.size(); n++) {
        var i = this.edges.get(n),
            r = i.getCoordinates();if (this.matchInSameDirection(t, e, r[0], r[1])) return i;if (this.matchInSameDirection(t, e, r[r.length - 1], r[r.length - 2])) return i;
      }return null;
    }, insertEdge: function insertEdge(t) {
      this.edges.add(t);
    }, findEdgeEnd: function findEdgeEnd(t) {
      for (var e = this.getEdgeEnds().iterator(); e.hasNext();) {
        var n = e.next();if (n.getEdge() === t) return n;
      }return null;
    }, addEdges: function addEdges(t) {
      for (var e = t.iterator(); e.hasNext();) {
        var n = e.next();this.edges.add(n);var i = new vn(n, !0),
            r = new vn(n, !1);i.setSym(r), r.setSym(i), this.add(i), this.add(r);
      }
    }, add: function add(t) {
      this.nodes.add(t), this.edgeEndList.add(t);
    }, getNodes: function getNodes() {
      return this.nodes.values();
    }, findEdge: function findEdge(t, e) {
      for (var n = 0; n < this.edges.size(); n++) {
        var i = this.edges.get(n),
            r = i.getCoordinates();if (t.equals(r[0]) && e.equals(r[1])) return i;
      }return null;
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return xn;
    } }), xn.linkResultDirectedEdges = function (t) {
    for (var e = t.iterator(); e.hasNext();) {
      e.next().getEdges().linkResultDirectedEdges();
    }
  }, Ws(En.prototype, { sortShellsAndHoles: function sortShellsAndHoles(t, e, n) {
      for (var i = t.iterator(); i.hasNext();) {
        var r = i.next();r.isHole() ? n.add(r) : e.add(r);
      }
    }, computePolygons: function computePolygons(t) {
      for (var e = new x(), n = t.iterator(); n.hasNext();) {
        var i = n.next(),
            r = i.toPolygon(this.geometryFactory);e.add(r);
      }return e;
    }, placeFreeHoles: function placeFreeHoles(t, e) {
      for (var n = e.iterator(); n.hasNext();) {
        var i = n.next();if (null === i.getShell()) {
          var r = this.findEdgeRingContaining(i, t);if (null === r) throw new tn("unable to assign hole to a shell", i.getCoordinate(0));i.setShell(r);
        }
      }
    }, buildMinimalEdgeRings: function buildMinimalEdgeRings(t, e, n) {
      for (var i = new x(), r = t.iterator(); r.hasNext();) {
        var s = r.next();if (s.getMaxNodeDegree() > 2) {
          s.linkDirectedEdgesForMinimalEdgeRings();var o = s.buildMinimalRings(),
              a = this.findShell(o);null !== a ? (this.placePolygonHoles(a, o), e.add(a)) : n.addAll(o);
        } else i.add(s);
      }return i;
    }, containsPoint: function containsPoint(t) {
      for (var e = this.shellList.iterator(); e.hasNext();) {
        if (e.next().containsPoint(t)) return !0;
      }return !1;
    }, buildMaximalEdgeRings: function buildMaximalEdgeRings(t) {
      for (var e = new x(), n = t.iterator(); n.hasNext();) {
        var i = n.next();if (i.isInResult() && i.getLabel().isArea() && null === i.getEdgeRing()) {
          var r = new fn(i, this.geometryFactory);e.add(r), r.setInResult();
        }
      }return e;
    }, placePolygonHoles: function placePolygonHoles(t, e) {
      for (var n = e.iterator(); n.hasNext();) {
        var i = n.next();i.isHole() && i.setShell(t);
      }
    }, getPolygons: function getPolygons() {
      return this.computePolygons(this.shellList);
    }, findEdgeRingContaining: function findEdgeRingContaining(t, e) {
      for (var n = t.getLinearRing(), i = n.getEnvelopeInternal(), r = n.getCoordinateN(0), s = null, o = null, a = e.iterator(); a.hasNext();) {
        var u = a.next(),
            l = u.getLinearRing(),
            h = l.getEnvelopeInternal();null !== s && (o = s.getLinearRing().getEnvelopeInternal());var c = !1;h.contains(i) && oe.isPointInRing(r, l.getCoordinates()) && (c = !0), c && (null === s || o.contains(h)) && (s = u);
      }return s;
    }, findShell: function findShell(t) {
      for (var e = 0, n = null, i = t.iterator(); i.hasNext();) {
        var r = i.next();r.isHole() || (n = r, e++);
      }return h.isTrue(e <= 1, "found two shells in MinimalEdgeRing list"), n;
    }, add: function add() {
      if (1 === arguments.length) {
        var t = arguments[0];this.add(t.getEdgeEnds(), t.getNodes());
      } else if (2 === arguments.length) {
        var e = arguments[0],
            n = arguments[1];xn.linkResultDirectedEdges(n);var i = this.buildMaximalEdgeRings(e),
            r = new x(),
            s = this.buildMinimalEdgeRings(i, this.shellList, r);this.sortShellsAndHoles(s, this.shellList, r), this.placeFreeHoles(this.shellList, r);
      }
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return En;
    } }), Ws(In.prototype, { collectLines: function collectLines(t) {
      for (var e = this.op.getGraph().getEdgeEnds().iterator(); e.hasNext();) {
        var n = e.next();this.collectLineEdge(n, t, this.lineEdgesList), this.collectBoundaryTouchEdge(n, t, this.lineEdgesList);
      }
    }, labelIsolatedLine: function labelIsolatedLine(t, e) {
      var n = this.ptLocator.locate(t.getCoordinate(), this.op.getArgGeometry(e));t.getLabel().setLocation(e, n);
    }, build: function build(t) {
      return this.findCoveredLineEdges(), this.collectLines(t), this.buildLines(t), this.resultLineList;
    }, collectLineEdge: function collectLineEdge(t, e, n) {
      var i = t.getLabel(),
          r = t.getEdge();t.isLineEdge() && (t.isVisited() || !$n.isResultOfOp(i, e) || r.isCovered() || (n.add(r), t.setVisitedEdge(!0)));
    }, findCoveredLineEdges: function findCoveredLineEdges() {
      for (var t = this.op.getGraph().getNodes().iterator(); t.hasNext();) {
        t.next().getEdges().findCoveredLineEdges();
      }for (var e = this.op.getGraph().getEdgeEnds().iterator(); e.hasNext();) {
        var n = e.next(),
            i = n.getEdge();if (n.isLineEdge() && !i.isCoveredSet()) {
          var r = this.op.isCoveredByA(n.getCoordinate());i.setCovered(r);
        }
      }
    }, labelIsolatedLines: function labelIsolatedLines(t) {
      for (var e = t.iterator(); e.hasNext();) {
        var n = e.next(),
            i = n.getLabel();n.isIsolated() && (i.isNull(0) ? this.labelIsolatedLine(n, 0) : this.labelIsolatedLine(n, 1));
      }
    }, buildLines: function buildLines(t) {
      for (var e = this.lineEdgesList.iterator(); e.hasNext();) {
        var n = e.next(),
            i = (n.getLabel(), this.geometryFactory.createLineString(n.getCoordinates()));this.resultLineList.add(i), n.setInResult(!0);
      }
    }, collectBoundaryTouchEdge: function collectBoundaryTouchEdge(t, e, n) {
      var i = t.getLabel();return t.isLineEdge() ? null : t.isVisited() ? null : t.isInteriorAreaEdge() ? null : t.getEdge().isInResult() ? null : (h.isTrue(!(t.isInResult() || t.getSym().isInResult()) || !t.getEdge().isInResult()), void ($n.isResultOfOp(i, e) && e === $n.INTERSECTION && (n.add(t.getEdge()), t.setVisitedEdge(!0))));
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return In;
    } }), Ws(Nn.prototype, { filterCoveredNodeToPoint: function filterCoveredNodeToPoint(t) {
      var e = t.getCoordinate();if (!this.op.isCoveredByLA(e)) {
        var n = this.geometryFactory.createPoint(e);this.resultPointList.add(n);
      }
    }, extractNonCoveredResultNodes: function extractNonCoveredResultNodes(t) {
      for (var e = this.op.getGraph().getNodes().iterator(); e.hasNext();) {
        var n = e.next();if (!n.isInResult() && !n.isIncidentEdgeInResult() && (0 === n.getEdges().getDegree() || t === $n.INTERSECTION)) {
          var i = n.getLabel();$n.isResultOfOp(i, t) && this.filterCoveredNodeToPoint(n);
        }
      }
    }, build: function build(t) {
      return this.extractNonCoveredResultNodes(t), this.resultPointList;
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return Nn;
    } }), Ws(Cn.prototype, { locate: function locate(t) {}, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return Cn;
    } }), Ws(Sn.prototype, { locate: function locate(t) {
      return Sn.locate(t, this.geom);
    }, interfaces_: function interfaces_() {
      return [Cn];
    }, getClass: function getClass() {
      return Sn;
    } }), Sn.isPointInRing = function (t, e) {
    return !!e.getEnvelopeInternal().intersects(t) && oe.isPointInRing(t, e.getCoordinates());
  }, Sn.containsPointInPolygon = function (t, e) {
    if (e.isEmpty()) return !1;var n = e.getExteriorRing();if (!Sn.isPointInRing(t, n)) return !1;for (var i = 0; i < e.getNumInteriorRing(); i++) {
      var r = e.getInteriorRingN(i);if (Sn.isPointInRing(t, r)) return !1;
    }return !0;
  }, Sn.containsPoint = function (t, e) {
    if (e instanceof wt) return Sn.containsPointInPolygon(t, e);if (e instanceof lt) for (var n = new Ce(e); n.hasNext();) {
      var i = n.next();if (i !== e && Sn.containsPoint(t, i)) return !0;
    }return !1;
  }, Sn.locate = function (t, e) {
    return e.isEmpty() ? S.EXTERIOR : Sn.containsPoint(t, e) ? S.INTERIOR : S.EXTERIOR;
  }, Ws(wn.prototype, { getNextCW: function getNextCW(t) {
      this.getEdges();var e = this.edgeList.indexOf(t),
          n = e - 1;return 0 === e && (n = this.edgeList.size() - 1), this.edgeList.get(n);
    }, propagateSideLabels: function propagateSideLabels(t) {
      for (var e = S.NONE, n = this.iterator(); n.hasNext();) {
        var i = n.next(),
            r = i.getLabel();r.isArea(t) && r.getLocation(t, an.LEFT) !== S.NONE && (e = r.getLocation(t, an.LEFT));
      }if (e === S.NONE) return null;for (var s = e, n = this.iterator(); n.hasNext();) {
        var i = n.next(),
            r = i.getLabel();if (r.getLocation(t, an.ON) === S.NONE && r.setLocation(t, an.ON, s), r.isArea(t)) {
          var o = r.getLocation(t, an.LEFT),
              a = r.getLocation(t, an.RIGHT);if (a !== S.NONE) {
            if (a !== s) throw new tn("side location conflict", i.getCoordinate());o === S.NONE && h.shouldNeverReachHere("found single null side (at " + i.getCoordinate() + ")"), s = o;
          } else h.isTrue(r.getLocation(t, an.LEFT) === S.NONE, "found single null side"), r.setLocation(t, an.RIGHT, s), r.setLocation(t, an.LEFT, s);
        }
      }
    }, getCoordinate: function getCoordinate() {
      var t = this.iterator();return t.hasNext() ? t.next().getCoordinate() : null;
    }, print: function print(t) {
      _.out.println("EdgeEndStar:   " + this.getCoordinate());for (var e = this.iterator(); e.hasNext();) {
        e.next().print(t);
      }
    }, isAreaLabelsConsistent: function isAreaLabelsConsistent(t) {
      return this.computeEdgeEndLabels(t.getBoundaryNodeRule()), this.checkAreaLabelsConsistent(0);
    }, checkAreaLabelsConsistent: function checkAreaLabelsConsistent(t) {
      var e = this.getEdges();if (e.size() <= 0) return !0;var n = e.size() - 1,
          i = e.get(n).getLabel(),
          r = i.getLocation(t, an.LEFT);h.isTrue(r !== S.NONE, "Found unlabelled area edge");for (var s = r, o = this.iterator(); o.hasNext();) {
        var a = o.next(),
            u = a.getLabel();h.isTrue(u.isArea(t), "Found non-area edge");var l = u.getLocation(t, an.LEFT),
            c = u.getLocation(t, an.RIGHT);if (l === c) return !1;if (c !== s) return !1;s = l;
      }return !0;
    }, findIndex: function findIndex(t) {
      this.iterator();for (var e = 0; e < this.edgeList.size(); e++) {
        if (this.edgeList.get(e) === t) return e;
      }return -1;
    }, iterator: function iterator() {
      return this.getEdges().iterator();
    }, getEdges: function getEdges() {
      return null === this.edgeList && (this.edgeList = new x(this.edgeMap.values())), this.edgeList;
    }, getLocation: function getLocation(t, e, n) {
      return this.ptInAreaLocation[t] === S.NONE && (this.ptInAreaLocation[t] = Sn.locate(e, n[t].getGeometry())), this.ptInAreaLocation[t];
    }, toString: function toString() {
      var t = new L();t.append("EdgeEndStar:   " + this.getCoordinate()), t.append("\n");for (var e = this.iterator(); e.hasNext();) {
        var n = e.next();t.append(n), t.append("\n");
      }return t.toString();
    }, computeEdgeEndLabels: function computeEdgeEndLabels(t) {
      for (var e = this.iterator(); e.hasNext();) {
        e.next().computeLabel(t);
      }
    }, computeLabelling: function computeLabelling(t) {
      this.computeEdgeEndLabels(t[0].getBoundaryNodeRule()), this.propagateSideLabels(0), this.propagateSideLabels(1);for (var e = [!1, !1], n = this.iterator(); n.hasNext();) {
        for (var i = n.next(), r = i.getLabel(), s = 0; s < 2; s++) {
          r.isLine(s) && r.getLocation(s) === S.BOUNDARY && (e[s] = !0);
        }
      }for (var n = this.iterator(); n.hasNext();) {
        for (var i = n.next(), r = i.getLabel(), s = 0; s < 2; s++) {
          if (r.isAnyNull(s)) {
            var o = S.NONE;if (e[s]) o = S.EXTERIOR;else {
              var a = i.getCoordinate();o = this.getLocation(s, a, t);
            }r.setAllLocationsIfNull(s, o);
          }
        }
      }
    }, getDegree: function getDegree() {
      return this.edgeMap.size();
    }, insertEdgeEnd: function insertEdgeEnd(t, e) {
      this.edgeMap.put(t, e), this.edgeList = null;
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return wn;
    } }), js(Ln, wn), Ws(Ln.prototype, { linkResultDirectedEdges: function linkResultDirectedEdges() {
      this.getResultAreaEdges();for (var t = null, e = null, n = this.SCANNING_FOR_INCOMING, i = 0; i < this.resultAreaEdgeList.size(); i++) {
        var r = this.resultAreaEdgeList.get(i),
            s = r.getSym();if (r.getLabel().isArea()) switch (null === t && r.isInResult() && (t = r), n) {case this.SCANNING_FOR_INCOMING:
            if (!s.isInResult()) continue;e = s, n = this.LINKING_TO_OUTGOING;break;case this.LINKING_TO_OUTGOING:
            if (!r.isInResult()) continue;e.setNext(r), n = this.SCANNING_FOR_INCOMING;}
      }if (n === this.LINKING_TO_OUTGOING) {
        if (null === t) throw new tn("no outgoing dirEdge found", this.getCoordinate());h.isTrue(t.isInResult(), "unable to link last incoming dirEdge"), e.setNext(t);
      }
    }, insert: function insert(t) {
      var e = t;this.insertEdgeEnd(e, e);
    }, getRightmostEdge: function getRightmostEdge() {
      var t = this.getEdges(),
          e = t.size();if (e < 1) return null;var n = t.get(0);if (1 === e) return n;var i = t.get(e - 1),
          r = n.getQuadrant(),
          s = i.getQuadrant();if (je.isNorthern(r) && je.isNorthern(s)) return n;if (!je.isNorthern(r) && !je.isNorthern(s)) return i;return 0 !== n.getDy() ? n : 0 !== i.getDy() ? i : (h.shouldNeverReachHere("found two horizontal edges incident on node"), null);
    }, print: function print(t) {
      _.out.println("DirectedEdgeStar: " + this.getCoordinate());for (var e = this.iterator(); e.hasNext();) {
        var n = e.next();t.print("out "), n.print(t), t.println(), t.print("in "), n.getSym().print(t), t.println();
      }
    }, getResultAreaEdges: function getResultAreaEdges() {
      if (null !== this.resultAreaEdgeList) return this.resultAreaEdgeList;this.resultAreaEdgeList = new x();for (var t = this.iterator(); t.hasNext();) {
        var e = t.next();(e.isInResult() || e.getSym().isInResult()) && this.resultAreaEdgeList.add(e);
      }return this.resultAreaEdgeList;
    }, updateLabelling: function updateLabelling(t) {
      for (var e = this.iterator(); e.hasNext();) {
        var n = e.next(),
            i = n.getLabel();i.setAllLocationsIfNull(0, t.getLocation(0)), i.setAllLocationsIfNull(1, t.getLocation(1));
      }
    }, linkAllDirectedEdges: function linkAllDirectedEdges() {
      this.getEdges();for (var t = null, e = null, n = this.edgeList.size() - 1; n >= 0; n--) {
        var i = this.edgeList.get(n),
            r = i.getSym();null === e && (e = r), null !== t && r.setNext(t), t = i;
      }e.setNext(t);
    }, computeDepths: function computeDepths() {
      if (1 === arguments.length) {
        var t = arguments[0],
            e = this.findIndex(t),
            n = (t.getLabel(), t.getDepth(an.LEFT)),
            i = t.getDepth(an.RIGHT),
            r = this.computeDepths(e + 1, this.edgeList.size(), n);if (this.computeDepths(0, e, r) !== i) throw new tn("depth mismatch at " + t.getCoordinate());
      } else if (3 === arguments.length) {
        for (var s = arguments[0], o = arguments[1], a = arguments[2], u = a, l = s; l < o; l++) {
          var h = this.edgeList.get(l);h.getLabel();h.setEdgeDepths(an.RIGHT, u), u = h.getDepth(an.LEFT);
        }return u;
      }
    }, mergeSymLabels: function mergeSymLabels() {
      for (var t = this.iterator(); t.hasNext();) {
        var e = t.next();e.getLabel().merge(e.getSym().getLabel());
      }
    }, linkMinimalDirectedEdges: function linkMinimalDirectedEdges(t) {
      for (var e = null, n = null, i = this.SCANNING_FOR_INCOMING, r = this.resultAreaEdgeList.size() - 1; r >= 0; r--) {
        var s = this.resultAreaEdgeList.get(r),
            o = s.getSym();switch (null === e && s.getEdgeRing() === t && (e = s), i) {case this.SCANNING_FOR_INCOMING:
            if (o.getEdgeRing() !== t) continue;n = o, i = this.LINKING_TO_OUTGOING;break;case this.LINKING_TO_OUTGOING:
            if (s.getEdgeRing() !== t) continue;n.setNextMin(s), i = this.SCANNING_FOR_INCOMING;}
      }i === this.LINKING_TO_OUTGOING && (h.isTrue(null !== e, "found null for first outgoing dirEdge"), h.isTrue(e.getEdgeRing() === t, "unable to link last incoming dirEdge"), n.setNextMin(e));
    }, getOutgoingDegree: function getOutgoingDegree() {
      if (0 === arguments.length) {
        for (var t = 0, e = this.iterator(); e.hasNext();) {
          var n = e.next();n.isInResult() && t++;
        }return t;
      }if (1 === arguments.length) {
        for (var i = arguments[0], t = 0, e = this.iterator(); e.hasNext();) {
          var n = e.next();n.getEdgeRing() === i && t++;
        }return t;
      }
    }, getLabel: function getLabel() {
      return this.label;
    }, findCoveredLineEdges: function findCoveredLineEdges() {
      for (var t = S.NONE, e = this.iterator(); e.hasNext();) {
        var n = e.next(),
            i = n.getSym();if (!n.isLineEdge()) {
          if (n.isInResult()) {
            t = S.INTERIOR;break;
          }if (i.isInResult()) {
            t = S.EXTERIOR;break;
          }
        }
      }if (t === S.NONE) return null;for (var r = t, e = this.iterator(); e.hasNext();) {
        var n = e.next(),
            i = n.getSym();n.isLineEdge() ? n.getEdge().setCovered(r === S.INTERIOR) : (n.isInResult() && (r = S.EXTERIOR), i.isInResult() && (r = S.INTERIOR));
      }
    }, computeLabelling: function computeLabelling(t) {
      wn.prototype.computeLabelling.call(this, t), this.label = new ln(S.NONE);for (var e = this.iterator(); e.hasNext();) {
        for (var n = e.next(), i = n.getEdge(), r = i.getLabel(), s = 0; s < 2; s++) {
          var o = r.getLocation(s);o !== S.INTERIOR && o !== S.BOUNDARY || this.label.setLocation(s, S.INTERIOR);
        }
      }
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return Ln;
    } }), js(Rn, yn), Ws(Rn.prototype, { createNode: function createNode(t) {
      return new dn(t, new Ln());
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return Rn;
    } }), Ws(Tn.prototype, { computeIntersections: function computeIntersections(t, e) {
      this.mce.computeIntersectsForChain(this.chainIndex, t.mce, t.chainIndex, e);
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return Tn;
    } }), Ws(Pn.prototype, { isDelete: function isDelete() {
      return this.eventType === Pn.DELETE;
    }, setDeleteEventIndex: function setDeleteEventIndex(t) {
      this.deleteEventIndex = t;
    }, getObject: function getObject() {
      return this.obj;
    }, compareTo: function compareTo(t) {
      var e = t;return this.xValue < e.xValue ? -1 : this.xValue > e.xValue ? 1 : this.eventType < e.eventType ? -1 : this.eventType > e.eventType ? 1 : 0;
    }, getInsertEvent: function getInsertEvent() {
      return this.insertEvent;
    }, isInsert: function isInsert() {
      return this.eventType === Pn.INSERT;
    }, isSameLabel: function isSameLabel(t) {
      return null !== this.label && this.label === t.label;
    }, getDeleteEventIndex: function getDeleteEventIndex() {
      return this.deleteEventIndex;
    }, interfaces_: function interfaces_() {
      return [r];
    }, getClass: function getClass() {
      return Pn;
    } }), Pn.INSERT = 1, Pn.DELETE = 2, Ws(bn.prototype, { interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return bn;
    } }), Ws(On.prototype, { isTrivialIntersection: function isTrivialIntersection(t, e, n, i) {
      if (t === n && 1 === this.li.getIntersectionNum()) {
        if (On.isAdjacentSegments(e, i)) return !0;if (t.isClosed()) {
          var r = t.getNumPoints() - 1;if (0 === e && i === r || 0 === i && e === r) return !0;
        }
      }return !1;
    }, getProperIntersectionPoint: function getProperIntersectionPoint() {
      return this.properIntersectionPoint;
    }, setIsDoneIfProperInt: function setIsDoneIfProperInt(t) {
      this.isDoneWhenProperInt = t;
    }, hasProperInteriorIntersection: function hasProperInteriorIntersection() {
      return this.hasProperInterior;
    }, isBoundaryPointInternal: function isBoundaryPointInternal(t, e) {
      for (var n = e.iterator(); n.hasNext();) {
        var i = n.next(),
            r = i.getCoordinate();if (t.isIntersection(r)) return !0;
      }return !1;
    }, hasProperIntersection: function hasProperIntersection() {
      return this.hasProper;
    }, hasIntersection: function hasIntersection() {
      return this._hasIntersection;
    }, isDone: function isDone() {
      return this._isDone;
    }, isBoundaryPoint: function isBoundaryPoint(t, e) {
      return null !== e && (!!this.isBoundaryPointInternal(t, e[0]) || !!this.isBoundaryPointInternal(t, e[1]));
    }, setBoundaryNodes: function setBoundaryNodes(t, e) {
      this.bdyNodes = new Array(2).fill(null), this.bdyNodes[0] = t, this.bdyNodes[1] = e;
    }, addIntersections: function addIntersections(t, e, n, i) {
      if (t === n && e === i) return null;this.numTests++;var r = t.getCoordinates()[e],
          s = t.getCoordinates()[e + 1],
          o = n.getCoordinates()[i],
          a = n.getCoordinates()[i + 1];this.li.computeIntersection(r, s, o, a), this.li.hasIntersection() && (this.recordIsolated && (t.setIsolated(!1), n.setIsolated(!1)), this.numIntersections++, this.isTrivialIntersection(t, e, n, i) || (this._hasIntersection = !0, !this.includeProper && this.li.isProper() || (t.addIntersections(this.li, e, 0), n.addIntersections(this.li, i, 1)), this.li.isProper() && (this.properIntersectionPoint = this.li.getIntersection(0).copy(), this.hasProper = !0, this.isDoneWhenProperInt && (this._isDone = !0), this.isBoundaryPoint(this.li, this.bdyNodes) || (this.hasProperInterior = !0))));
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return On;
    } }), On.isAdjacentSegments = function (t, e) {
    return 1 === Math.abs(t - e);
  }, js(_n, bn), Ws(_n.prototype, { prepareEvents: function prepareEvents() {
      uo.sort(this.events);for (var t = 0; t < this.events.size(); t++) {
        var e = this.events.get(t);e.isDelete() && e.getInsertEvent().setDeleteEventIndex(t);
      }
    }, computeIntersections: function computeIntersections() {
      if (1 === arguments.length) {
        var t = arguments[0];this.nOverlaps = 0, this.prepareEvents();for (var e = 0; e < this.events.size(); e++) {
          var n = this.events.get(e);if (n.isInsert() && this.processOverlaps(e, n.getDeleteEventIndex(), n, t), t.isDone()) break;
        }
      } else if (3 === arguments.length) if (arguments[2] instanceof On && Zs(arguments[0], m) && Zs(arguments[1], m)) {
        var i = arguments[0],
            r = arguments[1],
            s = arguments[2];this.addEdges(i, i), this.addEdges(r, r), this.computeIntersections(s);
      } else if ("boolean" == typeof arguments[2] && Zs(arguments[0], m) && arguments[1] instanceof On) {
        var o = arguments[0],
            a = arguments[1],
            u = arguments[2];u ? this.addEdges(o, null) : this.addEdges(o), this.computeIntersections(a);
      }
    }, addEdge: function addEdge(t, e) {
      for (var n = t.getMonotoneChainEdge(), i = n.getStartIndexes(), r = 0; r < i.length - 1; r++) {
        var s = new Tn(n, r),
            o = new Pn(e, n.getMinX(r), s);this.events.add(o), this.events.add(new Pn(n.getMaxX(r), o));
      }
    }, processOverlaps: function processOverlaps(t, e, n, i) {
      for (var r = n.getObject(), s = t; s < e; s++) {
        var o = this.events.get(s);if (o.isInsert()) {
          var a = o.getObject();n.isSameLabel(o) || (r.computeIntersections(a, i), this.nOverlaps++);
        }
      }
    }, addEdges: function addEdges() {
      if (1 === arguments.length) for (var t = arguments[0], e = t.iterator(); e.hasNext();) {
        var n = e.next();this.addEdge(n, n);
      } else if (2 === arguments.length) for (var i = arguments[0], r = arguments[1], e = i.iterator(); e.hasNext();) {
        var n = e.next();this.addEdge(n, r);
      }
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return _n;
    } }), Ws(Mn.prototype, { getMin: function getMin() {
      return this.min;
    }, intersects: function intersects(t, e) {
      return !(this.min > e || this.max < t);
    }, getMax: function getMax() {
      return this.max;
    }, toString: function toString() {
      return ee.toLineString(new c(this.min, 0), new c(this.max, 0));
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return Mn;
    } }), Ws(Dn.prototype, { compare: function compare(t, e) {
      var n = t,
          i = e,
          r = (n.min + n.max) / 2,
          s = (i.min + i.max) / 2;return r < s ? -1 : r > s ? 1 : 0;
    }, interfaces_: function interfaces_() {
      return [o];
    }, getClass: function getClass() {
      return Dn;
    } }), Mn.NodeComparator = Dn, js(An, Mn), Ws(An.prototype, { query: function query(t, e, n) {
      if (!this.intersects(t, e)) return null;n.visitItem(this.item);
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return An;
    } }), js(Fn, Mn), Ws(Fn.prototype, { buildExtent: function buildExtent(t, e) {
      this.min = Math.min(t.min, e.min), this.max = Math.max(t.max, e.max);
    }, query: function query(t, e, n) {
      if (!this.intersects(t, e)) return null;null !== this.node1 && this.node1.query(t, e, n), null !== this.node2 && this.node2.query(t, e, n);
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return Fn;
    } }), Ws(Gn.prototype, { buildTree: function buildTree() {
      uo.sort(this.leaves, new IntervalRTreeNode.NodeComparator());for (var t = this.leaves, e = null, n = new x();;) {
        if (this.buildLevel(t, n), 1 === n.size()) return n.get(0);e = t, t = n, n = e;
      }
    }, insert: function insert(t, e, n) {
      if (null !== this.root) throw new IllegalStateException("Index cannot be added to once it has been queried");this.leaves.add(new An(t, e, n));
    }, query: function query(t, e, n) {
      this.init(), this.root.query(t, e, n);
    }, buildRoot: function buildRoot() {
      if (null !== this.root) return null;this.root = this.buildTree();
    }, printNode: function printNode(t) {
      _.out.println(ee.toLineString(new c(t.min, this.level), new c(t.max, this.level)));
    }, init: function init() {
      if (null !== this.root) return null;this.buildRoot();
    }, buildLevel: function buildLevel(t, e) {
      this.level++, e.clear();for (var n = 0; n < t.size(); n += 2) {
        var i = t.get(n);if (null === (n + 1 < t.size() ? t.get(n) : null)) e.add(i);else {
          var r = new Fn(t.get(n), t.get(n + 1));e.add(r);
        }
      }
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return Gn;
    } }), Ws(qn.prototype, { filter: function filter(t) {
      if (this.isForcedToLineString && t instanceof Rt) {
        var e = t.getFactory().createLineString(t.getCoordinateSequence());return this.lines.add(e), null;
      }t instanceof It && this.lines.add(t);
    }, setForceToLineString: function setForceToLineString(t) {
      this.isForcedToLineString = t;
    }, interfaces_: function interfaces_() {
      return [A];
    }, getClass: function getClass() {
      return qn;
    } }), qn.getGeometry = function () {
    if (1 === arguments.length) {
      var t = arguments[0];return t.getFactory().buildGeometry(qn.getLines(t));
    }if (2 === arguments.length) {
      var e = arguments[0],
          n = arguments[1];return e.getFactory().buildGeometry(qn.getLines(e, n));
    }
  }, qn.getLines = function () {
    if (1 === arguments.length) {
      var t = arguments[0];return qn.getLines(t, !1);
    }if (2 === arguments.length) {
      if (Zs(arguments[0], d) && Zs(arguments[1], d)) {
        for (var e = arguments[0], n = arguments[1], i = e.iterator(); i.hasNext();) {
          var r = i.next();qn.getLines(r, n);
        }return n;
      }if (arguments[0] instanceof F && "boolean" == typeof arguments[1]) {
        var s = arguments[0],
            o = arguments[1],
            a = new x();return s.apply(new qn(a, o)), a;
      }if (arguments[0] instanceof F && Zs(arguments[1], d)) {
        var u = arguments[0],
            l = arguments[1];return u instanceof It ? l.add(u) : u.apply(new qn(l)), l;
      }
    } else if (3 === arguments.length) {
      if ("boolean" == typeof arguments[2] && Zs(arguments[0], d) && Zs(arguments[1], d)) {
        for (var h = arguments[0], c = arguments[1], f = arguments[2], i = h.iterator(); i.hasNext();) {
          var r = i.next();qn.getLines(r, c, f);
        }return c;
      }if ("boolean" == typeof arguments[2] && arguments[0] instanceof F && Zs(arguments[1], d)) {
        var g = arguments[0],
            p = arguments[1],
            m = arguments[2];return g.apply(new qn(p, m)), p;
      }
    }
  }, Ws(Bn.prototype, { visitItem: function visitItem(t) {
      this.items.add(t);
    }, getItems: function getItems() {
      return this.items;
    }, interfaces_: function interfaces_() {
      return [Oe];
    }, getClass: function getClass() {
      return Bn;
    } }), Ws(zn.prototype, { locate: function locate(t) {
      var e = new se(t),
          n = new Vn(e);return this.index.query(t.y, t.y, n), e.getLocation();
    }, interfaces_: function interfaces_() {
      return [Cn];
    }, getClass: function getClass() {
      return zn;
    } }), Ws(Vn.prototype, { visitItem: function visitItem(t) {
      var e = t;this.counter.countSegment(e.getCoordinate(0), e.getCoordinate(1));
    }, interfaces_: function interfaces_() {
      return [Oe];
    }, getClass: function getClass() {
      return Vn;
    } }), Ws(kn.prototype, { init: function init(t) {
      for (var e = qn.getLines(t), n = e.iterator(); n.hasNext();) {
        var i = n.next(),
            r = i.getCoordinates();this.addLine(r);
      }
    }, addLine: function addLine(t) {
      for (var e = 1; e < t.length; e++) {
        var n = new ae(t[e - 1], t[e]),
            i = Math.min(n.p0.y, n.p1.y),
            r = Math.max(n.p0.y, n.p1.y);this.index.insert(i, r, n);
      }
    }, query: function query() {
      if (2 === arguments.length) {
        var t = arguments[0],
            e = arguments[1],
            n = new Bn();return this.index.query(t, e, n), n.getItems();
      }if (3 === arguments.length) {
        var i = arguments[0],
            r = arguments[1],
            s = arguments[2];this.index.query(i, r, s);
      }
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return kn;
    } }), zn.SegmentVisitor = Vn, zn.IntervalIndexedGeometry = kn, Ws(Yn.prototype, { getSegmentIndex: function getSegmentIndex() {
      return this.segmentIndex;
    }, getCoordinate: function getCoordinate() {
      return this.coord;
    }, print: function print(t) {
      t.print(this.coord), t.print(" seg # = " + this.segmentIndex), t.println(" dist = " + this.dist);
    }, compareTo: function compareTo(t) {
      var e = t;return this.compare(e.segmentIndex, e.dist);
    }, isEndPoint: function isEndPoint(t) {
      return 0 === this.segmentIndex && 0 === this.dist || this.segmentIndex === t;
    }, toString: function toString() {
      return this.coord + " seg # = " + this.segmentIndex + " dist = " + this.dist;
    }, getDistance: function getDistance() {
      return this.dist;
    }, compare: function compare(t, e) {
      return this.segmentIndex < t ? -1 : this.segmentIndex > t ? 1 : this.dist < e ? -1 : this.dist > e ? 1 : 0;
    }, interfaces_: function interfaces_() {
      return [r];
    }, getClass: function getClass() {
      return Yn;
    } }), Ws(Un.prototype, { print: function print(t) {
      t.println("Intersections:");for (var e = this.iterator(); e.hasNext();) {
        e.next().print(t);
      }
    }, iterator: function iterator() {
      return this.nodeMap.values().iterator();
    }, addSplitEdges: function addSplitEdges(t) {
      this.addEndpoints();for (var e = this.iterator(), n = e.next(); e.hasNext();) {
        var i = e.next(),
            r = this.createSplitEdge(n, i);t.add(r), n = i;
      }
    }, addEndpoints: function addEndpoints() {
      var t = this.edge.pts.length - 1;this.add(this.edge.pts[0], 0, 0), this.add(this.edge.pts[t], t, 0);
    }, createSplitEdge: function createSplitEdge(t, e) {
      var n = e.segmentIndex - t.segmentIndex + 2,
          i = this.edge.pts[e.segmentIndex],
          r = e.dist > 0 || !e.coord.equals2D(i);r || n--;var s = new Array(n).fill(null),
          o = 0;s[o++] = new c(t.coord);for (var a = t.segmentIndex + 1; a <= e.segmentIndex; a++) {
        s[o++] = this.edge.pts[a];
      }return r && (s[o] = e.coord), new jn(s, new ln(this.edge.label));
    }, add: function add(t, e, n) {
      var i = new Yn(t, e, n),
          r = this.nodeMap.get(i);return null !== r ? r : (this.nodeMap.put(i, i), i);
    }, isIntersection: function isIntersection(t) {
      for (var e = this.iterator(); e.hasNext();) {
        if (e.next().coord.equals(t)) return !0;
      }return !1;
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return Un;
    } }), Ws(Xn.prototype, { getChainStartIndices: function getChainStartIndices(t) {
      var e = 0,
          n = new x();n.add(new R(e));do {
        var i = this.findChainEnd(t, e);n.add(new R(i)), e = i;
      } while (e < t.length - 1);return Xn.toIntArray(n);
    }, findChainEnd: function findChainEnd(t, e) {
      for (var n = je.quadrant(t[e], t[e + 1]), i = e + 1; i < t.length;) {
        if (je.quadrant(t[i - 1], t[i]) !== n) break;i++;
      }return i - 1;
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return Xn;
    } }), Xn.toIntArray = function (t) {
    for (var e = new Array(t.size()).fill(null), n = 0; n < e.length; n++) {
      e[n] = t.get(n).intValue();
    }return e;
  }, Ws(Hn.prototype, { getCoordinates: function getCoordinates() {
      return this.pts;
    }, getMaxX: function getMaxX(t) {
      var e = this.pts[this.startIndex[t]].x,
          n = this.pts[this.startIndex[t + 1]].x;return e > n ? e : n;
    }, getMinX: function getMinX(t) {
      var e = this.pts[this.startIndex[t]].x,
          n = this.pts[this.startIndex[t + 1]].x;return e < n ? e : n;
    }, computeIntersectsForChain: function computeIntersectsForChain() {
      if (4 === arguments.length) {
        var t = arguments[0],
            e = arguments[1],
            n = arguments[2],
            i = arguments[3];this.computeIntersectsForChain(this.startIndex[t], this.startIndex[t + 1], e, e.startIndex[n], e.startIndex[n + 1], i);
      } else if (6 === arguments.length) {
        var r = arguments[0],
            s = arguments[1],
            o = arguments[2],
            a = arguments[3],
            u = arguments[4],
            l = arguments[5],
            h = this.pts[r],
            c = this.pts[s],
            f = o.pts[a],
            g = o.pts[u];if (s - r == 1 && u - a == 1) return l.addIntersections(this.e, r, o.e, a), null;if (this.env1.init(h, c), this.env2.init(f, g), !this.env1.intersects(this.env2)) return null;var d = Math.trunc((r + s) / 2),
            p = Math.trunc((a + u) / 2);r < d && (a < p && this.computeIntersectsForChain(r, d, o, a, p, l), p < u && this.computeIntersectsForChain(r, d, o, p, u, l)), d < s && (a < p && this.computeIntersectsForChain(d, s, o, a, p, l), p < u && this.computeIntersectsForChain(d, s, o, p, u, l));
      }
    }, getStartIndexes: function getStartIndexes() {
      return this.startIndex;
    }, computeIntersects: function computeIntersects(t, e) {
      for (var n = 0; n < this.startIndex.length - 1; n++) {
        for (var i = 0; i < t.startIndex.length - 1; i++) {
          this.computeIntersectsForChain(n, t, i, e);
        }
      }
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return Hn;
    } }), Ws(Wn.prototype, { getDepth: function getDepth(t, e) {
      return this.depth[t][e];
    }, setDepth: function setDepth(t, e, n) {
      this.depth[t][e] = n;
    }, isNull: function isNull() {
      if (0 === arguments.length) {
        for (var t = 0; t < 2; t++) {
          for (var e = 0; e < 3; e++) {
            if (this.depth[t][e] !== Wn.NULL_VALUE) return !1;
          }
        }return !0;
      }if (1 === arguments.length) {
        var n = arguments[0];return this.depth[n][1] === Wn.NULL_VALUE;
      }if (2 === arguments.length) {
        var i = arguments[0],
            r = arguments[1];return this.depth[i][r] === Wn.NULL_VALUE;
      }
    }, normalize: function normalize() {
      for (var t = 0; t < 2; t++) {
        if (!this.isNull(t)) {
          var e = this.depth[t][1];this.depth[t][2] < e && (e = this.depth[t][2]), e < 0 && (e = 0);for (var n = 1; n < 3; n++) {
            var i = 0;this.depth[t][n] > e && (i = 1), this.depth[t][n] = i;
          }
        }
      }
    }, getDelta: function getDelta(t) {
      return this.depth[t][an.RIGHT] - this.depth[t][an.LEFT];
    }, getLocation: function getLocation(t, e) {
      return this.depth[t][e] <= 0 ? S.EXTERIOR : S.INTERIOR;
    }, toString: function toString() {
      return "A: " + this.depth[0][1] + "," + this.depth[0][2] + " B: " + this.depth[1][1] + "," + this.depth[1][2];
    }, add: function add() {
      if (1 === arguments.length) for (var t = arguments[0], e = 0; e < 2; e++) {
        for (var n = 1; n < 3; n++) {
          var i = t.getLocation(e, n);i !== S.EXTERIOR && i !== S.INTERIOR || (this.isNull(e, n) ? this.depth[e][n] = Wn.depthAtLocation(i) : this.depth[e][n] += Wn.depthAtLocation(i));
        }
      } else if (3 === arguments.length) {
        var r = arguments[0],
            s = arguments[1],
            o = arguments[2];o === S.INTERIOR && this.depth[r][s]++;
      }
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return Wn;
    } }), Wn.depthAtLocation = function (t) {
    return t === S.EXTERIOR ? 0 : t === S.INTERIOR ? 1 : Wn.NULL_VALUE;
  }, Wn.NULL_VALUE = -1, js(jn, gn), Ws(jn.prototype, { getDepth: function getDepth() {
      return this.depth;
    }, getCollapsedEdge: function getCollapsedEdge() {
      var t = new Array(2).fill(null);return t[0] = this.pts[0], t[1] = this.pts[1], new jn(t, ln.toLineLabel(this.label));
    }, isIsolated: function isIsolated() {
      return this._isIsolated;
    }, getCoordinates: function getCoordinates() {
      return this.pts;
    }, setIsolated: function setIsolated(t) {
      this._isIsolated = t;
    }, setName: function setName(t) {
      this.name = t;
    }, equals: function equals(t) {
      if (!(t instanceof jn)) return !1;var e = t;if (this.pts.length !== e.pts.length) return !1;for (var n = !0, i = !0, r = this.pts.length, s = 0; s < this.pts.length; s++) {
        if (this.pts[s].equals2D(e.pts[s]) || (n = !1), this.pts[s].equals2D(e.pts[--r]) || (i = !1), !n && !i) return !1;
      }return !0;
    }, getCoordinate: function getCoordinate() {
      if (0 === arguments.length) return this.pts.length > 0 ? this.pts[0] : null;if (1 === arguments.length) {
        var t = arguments[0];return this.pts[t];
      }
    }, print: function print(t) {
      t.print("edge " + this.name + ": "), t.print("LINESTRING (");for (var e = 0; e < this.pts.length; e++) {
        e > 0 && t.print(","), t.print(this.pts[e].x + " " + this.pts[e].y);
      }t.print(")  " + this.label + " " + this.depthDelta);
    }, computeIM: function computeIM(t) {
      jn.updateIM(this.label, t);
    }, isCollapsed: function isCollapsed() {
      return !!this.label.isArea() && 3 === this.pts.length && !!this.pts[0].equals(this.pts[2]);
    }, isClosed: function isClosed() {
      return this.pts[0].equals(this.pts[this.pts.length - 1]);
    }, getMaximumSegmentIndex: function getMaximumSegmentIndex() {
      return this.pts.length - 1;
    }, getDepthDelta: function getDepthDelta() {
      return this.depthDelta;
    }, getNumPoints: function getNumPoints() {
      return this.pts.length;
    }, printReverse: function printReverse(t) {
      t.print("edge " + this.name + ": ");for (var e = this.pts.length - 1; e >= 0; e--) {
        t.print(this.pts[e] + " ");
      }t.println("");
    }, getMonotoneChainEdge: function getMonotoneChainEdge() {
      return null === this.mce && (this.mce = new Hn(this)), this.mce;
    }, getEnvelope: function getEnvelope() {
      if (null === this.env) {
        this.env = new I();for (var t = 0; t < this.pts.length; t++) {
          this.env.expandToInclude(this.pts[t]);
        }
      }return this.env;
    }, addIntersection: function addIntersection(t, e, n, i) {
      var r = new c(t.getIntersection(i)),
          s = e,
          o = t.getEdgeDistance(n, i),
          a = s + 1;if (a < this.pts.length) {
        var u = this.pts[a];r.equals2D(u) && (s = a, o = 0);
      }this.eiList.add(r, s, o);
    }, toString: function toString() {
      var t = new L();t.append("edge " + this.name + ": "), t.append("LINESTRING (");for (var e = 0; e < this.pts.length; e++) {
        e > 0 && t.append(","), t.append(this.pts[e].x + " " + this.pts[e].y);
      }return t.append(")  " + this.label + " " + this.depthDelta), t.toString();
    }, isPointwiseEqual: function isPointwiseEqual(t) {
      if (this.pts.length !== t.pts.length) return !1;for (var e = 0; e < this.pts.length; e++) {
        if (!this.pts[e].equals2D(t.pts[e])) return !1;
      }return !0;
    }, setDepthDelta: function setDepthDelta(t) {
      this.depthDelta = t;
    }, getEdgeIntersectionList: function getEdgeIntersectionList() {
      return this.eiList;
    }, addIntersections: function addIntersections(t, e, n) {
      for (var i = 0; i < t.getIntersectionNum(); i++) {
        this.addIntersection(t, e, n, i);
      }
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return jn;
    } }), jn.updateIM = function () {
    if (2 !== arguments.length) return gn.prototype.updateIM.apply(this, arguments);var t = arguments[0],
        e = arguments[1];e.setAtLeastIfValid(t.getLocation(0, an.ON), t.getLocation(1, an.ON), 1), t.isArea() && (e.setAtLeastIfValid(t.getLocation(0, an.LEFT), t.getLocation(1, an.LEFT), 2), e.setAtLeastIfValid(t.getLocation(0, an.RIGHT), t.getLocation(1, an.RIGHT), 2));
  }, js(Kn, xn), Ws(Kn.prototype, { insertBoundaryPoint: function insertBoundaryPoint(t, e) {
      var n = this.nodes.addNode(e),
          i = n.getLabel(),
          r = 1,
          s = S.NONE;(s = i.getLocation(t, an.ON)) === S.BOUNDARY && r++;var o = Kn.determineBoundary(this.boundaryNodeRule, r);i.setLocation(t, o);
    }, computeSelfNodes: function computeSelfNodes() {
      if (2 === arguments.length) {
        var t = arguments[0],
            e = arguments[1];return this.computeSelfNodes(t, e, !1);
      }if (3 === arguments.length) {
        var n = arguments[0],
            i = arguments[1],
            r = arguments[2],
            s = new On(n, !0, !1);s.setIsDoneIfProperInt(r);var o = this.createEdgeSetIntersector(),
            a = this.parentGeom instanceof Rt || this.parentGeom instanceof wt || this.parentGeom instanceof Tt,
            u = i || !a;return o.computeIntersections(this.edges, s, u), this.addSelfIntersectionNodes(this.argIndex), s;
      }
    }, computeSplitEdges: function computeSplitEdges(t) {
      for (var e = this.edges.iterator(); e.hasNext();) {
        e.next().eiList.addSplitEdges(t);
      }
    }, computeEdgeIntersections: function computeEdgeIntersections(t, e, n) {
      var i = new On(e, n, !0);return i.setBoundaryNodes(this.getBoundaryNodes(), t.getBoundaryNodes()), this.createEdgeSetIntersector().computeIntersections(this.edges, t.edges, i), i;
    }, getGeometry: function getGeometry() {
      return this.parentGeom;
    }, getBoundaryNodeRule: function getBoundaryNodeRule() {
      return this.boundaryNodeRule;
    }, hasTooFewPoints: function hasTooFewPoints() {
      return this._hasTooFewPoints;
    }, addPoint: function addPoint() {
      if (arguments[0] instanceof Ct) {
        var t = arguments[0],
            e = t.getCoordinate();this.insertPoint(this.argIndex, e, S.INTERIOR);
      } else if (arguments[0] instanceof c) {
        var n = arguments[0];this.insertPoint(this.argIndex, n, S.INTERIOR);
      }
    }, addPolygon: function addPolygon(t) {
      this.addPolygonRing(t.getExteriorRing(), S.EXTERIOR, S.INTERIOR);for (var e = 0; e < t.getNumInteriorRing(); e++) {
        var n = t.getInteriorRingN(e);this.addPolygonRing(n, S.INTERIOR, S.EXTERIOR);
      }
    }, addEdge: function addEdge(t) {
      this.insertEdge(t);var e = t.getCoordinates();this.insertPoint(this.argIndex, e[0], S.BOUNDARY), this.insertPoint(this.argIndex, e[e.length - 1], S.BOUNDARY);
    }, addLineString: function addLineString(t) {
      var e = Y.removeRepeatedPoints(t.getCoordinates());if (e.length < 2) return this._hasTooFewPoints = !0, this.invalidPoint = e[0], null;var n = new jn(e, new ln(this.argIndex, S.INTERIOR));this.lineEdgeMap.put(t, n), this.insertEdge(n), h.isTrue(e.length >= 2, "found LineString with single point"), this.insertBoundaryPoint(this.argIndex, e[0]), this.insertBoundaryPoint(this.argIndex, e[e.length - 1]);
    }, getInvalidPoint: function getInvalidPoint() {
      return this.invalidPoint;
    }, getBoundaryPoints: function getBoundaryPoints() {
      for (var t = this.getBoundaryNodes(), e = new Array(t.size()).fill(null), n = 0, i = t.iterator(); i.hasNext();) {
        var r = i.next();e[n++] = r.getCoordinate().copy();
      }return e;
    }, getBoundaryNodes: function getBoundaryNodes() {
      return null === this.boundaryNodes && (this.boundaryNodes = this.nodes.getBoundaryNodes(this.argIndex)), this.boundaryNodes;
    }, addSelfIntersectionNode: function addSelfIntersectionNode(t, e, n) {
      if (this.isBoundaryNode(t, e)) return null;n === S.BOUNDARY && this.useBoundaryDeterminationRule ? this.insertBoundaryPoint(t, e) : this.insertPoint(t, e, n);
    }, addPolygonRing: function addPolygonRing(t, e, n) {
      if (t.isEmpty()) return null;var i = Y.removeRepeatedPoints(t.getCoordinates());if (i.length < 4) return this._hasTooFewPoints = !0, this.invalidPoint = i[0], null;var r = e,
          s = n;oe.isCCW(i) && (r = n, s = e);var o = new jn(i, new ln(this.argIndex, S.BOUNDARY, r, s));this.lineEdgeMap.put(t, o), this.insertEdge(o), this.insertPoint(this.argIndex, i[0], S.BOUNDARY);
    }, insertPoint: function insertPoint(t, e, n) {
      var i = this.nodes.addNode(e),
          r = i.getLabel();null === r ? i.label = new ln(t, n) : r.setLocation(t, n);
    }, createEdgeSetIntersector: function createEdgeSetIntersector() {
      return new _n();
    }, addSelfIntersectionNodes: function addSelfIntersectionNodes(t) {
      for (var e = this.edges.iterator(); e.hasNext();) {
        for (var n = e.next(), i = n.getLabel().getLocation(t), r = n.eiList.iterator(); r.hasNext();) {
          var s = r.next();this.addSelfIntersectionNode(t, s.coord, i);
        }
      }
    }, add: function add() {
      if (1 !== arguments.length) return xn.prototype.add.apply(this, arguments);var t = arguments[0];if (t.isEmpty()) return null;if (t instanceof Tt && (this.useBoundaryDeterminationRule = !1), t instanceof wt) this.addPolygon(t);else if (t instanceof It) this.addLineString(t);else if (t instanceof Ct) this.addPoint(t);else if (t instanceof Lt) this.addCollection(t);else if (t instanceof ht) this.addCollection(t);else if (t instanceof Tt) this.addCollection(t);else {
        if (!(t instanceof lt)) throw new UnsupportedOperationException(t.getClass().getName());this.addCollection(t);
      }
    }, addCollection: function addCollection(t) {
      for (var e = 0; e < t.getNumGeometries(); e++) {
        var n = t.getGeometryN(e);this.add(n);
      }
    }, locate: function locate(t) {
      return Zs(this.parentGeom, St) && this.parentGeom.getNumGeometries() > 50 ? (null === this.areaPtLocator && (this.areaPtLocator = new zn(this.parentGeom)), this.areaPtLocator.locate(t)) : this.ptLocator.locate(t, this.parentGeom);
    }, findEdge: function findEdge() {
      if (1 === arguments.length) {
        var t = arguments[0];return this.lineEdgeMap.get(t);
      }return xn.prototype.findEdge.apply(this, arguments);
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return Kn;
    } }), Kn.determineBoundary = function (t, e) {
    return t.isInBoundary(e) ? S.BOUNDARY : S.INTERIOR;
  }, Ws(Zn.prototype, { getArgGeometry: function getArgGeometry(t) {
      return this.arg[t].getGeometry();
    }, setComputationPrecision: function setComputationPrecision(t) {
      this.resultPrecisionModel = t, this.li.setPrecisionModel(this.resultPrecisionModel);
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return Zn;
    } }), Ws(Qn.prototype, { compareTo: function compareTo(t) {
      var e = t;return Qn.compareOriented(this.pts, this._orientation, e.pts, e._orientation);
    }, interfaces_: function interfaces_() {
      return [r];
    }, getClass: function getClass() {
      return Qn;
    } }), Qn.orientation = function (t) {
    return 1 === Y.increasingDirection(t);
  }, Qn.compareOriented = function (t, e, n, i) {
    for (var r = e ? 1 : -1, s = i ? 1 : -1, o = e ? t.length : -1, a = i ? n.length : -1, u = e ? 0 : t.length - 1, l = i ? 0 : n.length - 1;;) {
      var h = t[u].compareTo(n[l]);if (0 !== h) return h;u += r, l += s;var c = u === o,
          f = l === a;if (c && !f) return -1;if (!c && f) return 1;if (c && f) return 0;
    }
  }, Ws(Jn.prototype, { print: function print(t) {
      t.print("MULTILINESTRING ( ");for (var e = 0; e < this.edges.size(); e++) {
        var n = this.edges.get(e);e > 0 && t.print(","), t.print("(");for (var i = n.getCoordinates(), r = 0; r < i.length; r++) {
          r > 0 && t.print(","), t.print(i[r].x + " " + i[r].y);
        }t.println(")");
      }t.print(")  ");
    }, addAll: function addAll(t) {
      for (var e = t.iterator(); e.hasNext();) {
        this.add(e.next());
      }
    }, findEdgeIndex: function findEdgeIndex(t) {
      for (var e = 0; e < this.edges.size(); e++) {
        if (this.edges.get(e).equals(t)) return e;
      }return -1;
    }, iterator: function iterator() {
      return this.edges.iterator();
    }, getEdges: function getEdges() {
      return this.edges;
    }, get: function get(t) {
      return this.edges.get(t);
    }, findEqualEdge: function findEqualEdge(t) {
      var e = new Qn(t.getCoordinates());return this.ocaMap.get(e);
    }, add: function add(t) {
      this.edges.add(t);var e = new Qn(t.getCoordinates());this.ocaMap.put(e, t);
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return Jn;
    } }), js($n, Zn), Ws($n.prototype, { insertUniqueEdge: function insertUniqueEdge(t) {
      var e = this.edgeList.findEqualEdge(t);if (null !== e) {
        var n = e.getLabel(),
            i = t.getLabel();e.isPointwiseEqual(t) || (i = new ln(t.getLabel()), i.flip());var r = e.getDepth();r.isNull() && r.add(n), r.add(i), n.merge(i);
      } else this.edgeList.add(t);
    }, getGraph: function getGraph() {
      return this.graph;
    }, cancelDuplicateResultEdges: function cancelDuplicateResultEdges() {
      for (var t = this.graph.getEdgeEnds().iterator(); t.hasNext();) {
        var e = t.next(),
            n = e.getSym();e.isInResult() && n.isInResult() && (e.setInResult(!1), n.setInResult(!1));
      }
    }, isCoveredByLA: function isCoveredByLA(t) {
      return !!this.isCovered(t, this.resultLineList) || !!this.isCovered(t, this.resultPolyList);
    }, computeGeometry: function computeGeometry(t, e, n, i) {
      var r = new x();return r.addAll(t), r.addAll(e), r.addAll(n), r.isEmpty() ? $n.createEmptyResult(i, this.arg[0].getGeometry(), this.arg[1].getGeometry(), this.geomFact) : this.geomFact.buildGeometry(r);
    }, mergeSymLabels: function mergeSymLabels() {
      for (var t = this.graph.getNodes().iterator(); t.hasNext();) {
        t.next().getEdges().mergeSymLabels();
      }
    }, isCovered: function isCovered(t, e) {
      for (var n = e.iterator(); n.hasNext();) {
        var i = n.next();if (this.ptLocator.locate(t, i) !== S.EXTERIOR) return !0;
      }return !1;
    }, replaceCollapsedEdges: function replaceCollapsedEdges() {
      for (var t = new x(), e = this.edgeList.iterator(); e.hasNext();) {
        var n = e.next();n.isCollapsed() && (e.remove(), t.add(n.getCollapsedEdge()));
      }this.edgeList.addAll(t);
    }, updateNodeLabelling: function updateNodeLabelling() {
      for (var t = this.graph.getNodes().iterator(); t.hasNext();) {
        var e = t.next(),
            n = e.getEdges().getLabel();e.getLabel().merge(n);
      }
    }, getResultGeometry: function getResultGeometry(t) {
      return this.computeOverlay(t), this.resultGeom;
    }, insertUniqueEdges: function insertUniqueEdges(t) {
      for (var e = t.iterator(); e.hasNext();) {
        var n = e.next();this.insertUniqueEdge(n);
      }
    }, computeOverlay: function computeOverlay(t) {
      this.copyPoints(0), this.copyPoints(1), this.arg[0].computeSelfNodes(this.li, !1), this.arg[1].computeSelfNodes(this.li, !1), this.arg[0].computeEdgeIntersections(this.arg[1], this.li, !0);var e = new x();this.arg[0].computeSplitEdges(e), this.arg[1].computeSplitEdges(e);this.insertUniqueEdges(e), this.computeLabelsFromDepths(), this.replaceCollapsedEdges(), sn.checkValid(this.edgeList.getEdges()), this.graph.addEdges(this.edgeList.getEdges()), this.computeLabelling(), this.labelIncompleteNodes(), this.findResultAreaEdges(t), this.cancelDuplicateResultEdges();var n = new En(this.geomFact);n.add(this.graph), this.resultPolyList = n.getPolygons();var i = new In(this, this.geomFact, this.ptLocator);this.resultLineList = i.build(t);var r = new Nn(this, this.geomFact, this.ptLocator);this.resultPointList = r.build(t), this.resultGeom = this.computeGeometry(this.resultPointList, this.resultLineList, this.resultPolyList, t);
    }, labelIncompleteNode: function labelIncompleteNode(t, e) {
      var n = this.ptLocator.locate(t.getCoordinate(), this.arg[e].getGeometry());t.getLabel().setLocation(e, n);
    }, copyPoints: function copyPoints(t) {
      for (var e = this.arg[t].getNodeIterator(); e.hasNext();) {
        var n = e.next();this.graph.addNode(n.getCoordinate()).setLabel(t, n.getLabel().getLocation(t));
      }
    }, findResultAreaEdges: function findResultAreaEdges(t) {
      for (var e = this.graph.getEdgeEnds().iterator(); e.hasNext();) {
        var n = e.next(),
            i = n.getLabel();i.isArea() && !n.isInteriorAreaEdge() && $n.isResultOfOp(i.getLocation(0, an.RIGHT), i.getLocation(1, an.RIGHT), t) && n.setInResult(!0);
      }
    }, computeLabelsFromDepths: function computeLabelsFromDepths() {
      for (var t = this.edgeList.iterator(); t.hasNext();) {
        var e = t.next(),
            n = e.getLabel(),
            i = e.getDepth();if (!i.isNull()) {
          i.normalize();for (var r = 0; r < 2; r++) {
            n.isNull(r) || !n.isArea() || i.isNull(r) || (0 === i.getDelta(r) ? n.toLine(r) : (h.isTrue(!i.isNull(r, an.LEFT), "depth of LEFT side has not been initialized"), n.setLocation(r, an.LEFT, i.getLocation(r, an.LEFT)), h.isTrue(!i.isNull(r, an.RIGHT), "depth of RIGHT side has not been initialized"), n.setLocation(r, an.RIGHT, i.getLocation(r, an.RIGHT))));
          }
        }
      }
    }, computeLabelling: function computeLabelling() {
      for (var t = this.graph.getNodes().iterator(); t.hasNext();) {
        t.next().getEdges().computeLabelling(this.arg);
      }this.mergeSymLabels(), this.updateNodeLabelling();
    }, labelIncompleteNodes: function labelIncompleteNodes() {
      for (var t = 0, e = this.graph.getNodes().iterator(); e.hasNext();) {
        var n = e.next(),
            i = n.getLabel();n.isIsolated() && (t++, i.isNull(0) ? this.labelIncompleteNode(n, 0) : this.labelIncompleteNode(n, 1)), n.getEdges().updateLabelling(i);
      }
    }, isCoveredByA: function isCoveredByA(t) {
      return !!this.isCovered(t, this.resultPolyList);
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return $n;
    } }), $n.overlayOp = function (t, e, n) {
    return new $n(t, e).getResultGeometry(n);
  }, $n.intersection = function (t, e) {
    if (t.isEmpty() || e.isEmpty()) return $n.createEmptyResult($n.INTERSECTION, t, e, t.getFactory());if (t.isGeometryCollection()) {
      var n = e;return on.map(t, { interfaces_: function interfaces_() {
          return [MapOp];
        }, map: function map(t) {
          return t.intersection(n);
        } });
    }return t.checkNotGeometryCollection(t), t.checkNotGeometryCollection(e), ei.overlayOp(t, e, $n.INTERSECTION);
  }, $n.symDifference = function (t, e) {
    if (t.isEmpty() || e.isEmpty()) {
      if (t.isEmpty() && e.isEmpty()) return $n.createEmptyResult($n.SYMDIFFERENCE, t, e, t.getFactory());if (t.isEmpty()) return e.copy();if (e.isEmpty()) return t.copy();
    }return t.checkNotGeometryCollection(t), t.checkNotGeometryCollection(e), ei.overlayOp(t, e, $n.SYMDIFFERENCE);
  }, $n.resultDimension = function (t, e, n) {
    var i = e.getDimension(),
        r = n.getDimension(),
        s = -1;switch (t) {case $n.INTERSECTION:
        s = Math.min(i, r);break;case $n.UNION:
        s = Math.max(i, r);break;case $n.DIFFERENCE:
        s = i;break;case $n.SYMDIFFERENCE:
        s = Math.max(i, r);}return s;
  }, $n.createEmptyResult = function (t, e, n, i) {
    var r = null;switch ($n.resultDimension(t, e, n)) {case -1:
        r = i.createGeometryCollection(new Array(0).fill(null));break;case 0:
        r = i.createPoint();break;case 1:
        r = i.createLineString();break;case 2:
        r = i.createPolygon();}return r;
  }, $n.difference = function (t, e) {
    return t.isEmpty() ? $n.createEmptyResult($n.DIFFERENCE, t, e, t.getFactory()) : e.isEmpty() ? t.copy() : (t.checkNotGeometryCollection(t), t.checkNotGeometryCollection(e), ei.overlayOp(t, e, $n.DIFFERENCE));
  }, $n.isResultOfOp = function () {
    if (2 === arguments.length) {
      var t = arguments[0],
          e = arguments[1],
          n = t.getLocation(0),
          i = t.getLocation(1);return $n.isResultOfOp(n, i, e);
    }if (3 === arguments.length) {
      var r = arguments[0],
          s = arguments[1],
          o = arguments[2];switch (r === S.BOUNDARY && (r = S.INTERIOR), s === S.BOUNDARY && (s = S.INTERIOR), o) {case $n.INTERSECTION:
          return r === S.INTERIOR && s === S.INTERIOR;case $n.UNION:
          return r === S.INTERIOR || s === S.INTERIOR;case $n.DIFFERENCE:
          return r === S.INTERIOR && s !== S.INTERIOR;case $n.SYMDIFFERENCE:
          return r === S.INTERIOR && s !== S.INTERIOR || r !== S.INTERIOR && s === S.INTERIOR;}return !1;
    }
  }, $n.INTERSECTION = 1, $n.UNION = 2, $n.DIFFERENCE = 3, $n.SYMDIFFERENCE = 4, Ws(ti.prototype, { selfSnap: function selfSnap(t) {
      return new ve(t).snapTo(t, this.snapTolerance);
    }, removeCommonBits: function removeCommonBits(t) {
      this.cbr = new Ee(), this.cbr.add(t[0]), this.cbr.add(t[1]);var e = new Array(2).fill(null);return e[0] = this.cbr.removeCommonBits(t[0].copy()), e[1] = this.cbr.removeCommonBits(t[1].copy()), e;
    }, prepareResult: function prepareResult(t) {
      return this.cbr.addCommonBits(t), t;
    }, getResultGeometry: function getResultGeometry(t) {
      var e = this.snap(this.geom),
          n = $n.overlayOp(e[0], e[1], t);return this.prepareResult(n);
    }, checkValid: function checkValid(t) {
      t.isValid() || _.out.println("Snapped geometry is invalid");
    }, computeSnapTolerance: function computeSnapTolerance() {
      this.snapTolerance = ve.computeOverlaySnapTolerance(this.geom[0], this.geom[1]);
    }, snap: function snap(t) {
      var e = this.removeCommonBits(t);return ve.snap(e[0], e[1], this.snapTolerance);
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return ti;
    } }), ti.overlayOp = function (t, e, n) {
    return new ti(t, e).getResultGeometry(n);
  }, ti.union = function (t, e) {
    return ti.overlayOp(t, e, $n.UNION);
  }, ti.intersection = function (t, e) {
    return ti.overlayOp(t, e, $n.INTERSECTION);
  }, ti.symDifference = function (t, e) {
    return ti.overlayOp(t, e, $n.SYMDIFFERENCE);
  }, ti.difference = function (t, e) {
    return ti.overlayOp(t, e, $n.DIFFERENCE);
  }, Ws(ei.prototype, { getResultGeometry: function getResultGeometry(t) {
      var e = null,
          n = !1,
          i = null;try {
        e = $n.overlayOp(this.geom[0], this.geom[1], t);n = !0;
      } catch (t) {
        if (!(t instanceof u)) throw t;i = t;
      } finally {}if (!n) try {
        e = ti.overlayOp(this.geom[0], this.geom[1], t);
      } catch (t) {
        throw t instanceof u ? i : t;
      } finally {}return e;
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return ei;
    } }), ei.overlayOp = function (t, e, n) {
    return new ei(t, e).getResultGeometry(n);
  }, ei.union = function (t, e) {
    return ei.overlayOp(t, e, $n.UNION);
  }, ei.intersection = function (t, e) {
    return ei.overlayOp(t, e, $n.INTERSECTION);
  }, ei.symDifference = function (t, e) {
    return ei.overlayOp(t, e, $n.SYMDIFFERENCE);
  }, ei.difference = function (t, e) {
    return ei.overlayOp(t, e, $n.DIFFERENCE);
  }, Ws(ni.prototype, { addPolygon: function addPolygon(t) {
      if (t.isEmpty()) return null;var e = null,
          n = 0,
          i = this.horizontalBisector(t);if (0 === i.getLength()) n = 0, e = i.getCoordinate();else {
        var r = ei.overlayOp(i, t, $n.INTERSECTION),
            s = this.widestGeometry(r);n = s.getEnvelopeInternal().getWidth(), e = ni.centre(s.getEnvelopeInternal());
      }(null === this.interiorPoint || n > this.maxWidth) && (this.interiorPoint = e, this.maxWidth = n);
    }, getInteriorPoint: function getInteriorPoint() {
      return this.interiorPoint;
    }, widestGeometry: function widestGeometry() {
      if (arguments[0] instanceof lt) {
        var t = arguments[0];if (t.isEmpty()) return t;for (var e = t.getGeometryN(0), n = 1; n < t.getNumGeometries(); n++) {
          t.getGeometryN(n).getEnvelopeInternal().getWidth() > e.getEnvelopeInternal().getWidth() && (e = t.getGeometryN(n));
        }return e;
      }if (arguments[0] instanceof F) {
        var i = arguments[0];return i instanceof lt ? this.widestGeometry(i) : i;
      }
    }, horizontalBisector: function horizontalBisector(t) {
      var e = t.getEnvelopeInternal(),
          n = ii.getBisectorY(t);return this.factory.createLineString([new c(e.getMinX(), n), new c(e.getMaxX(), n)]);
    }, add: function add(t) {
      if (t instanceof wt) this.addPolygon(t);else if (t instanceof lt) for (var e = t, n = 0; n < e.getNumGeometries(); n++) {
        this.add(e.getGeometryN(n));
      }
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return ni;
    } }), ni.centre = function (t) {
    return new c(ni.avg(t.getMinX(), t.getMaxX()), ni.avg(t.getMinY(), t.getMaxY()));
  }, ni.avg = function (t, e) {
    return (t + e) / 2;
  }, Ws(ii.prototype, { updateInterval: function updateInterval(t) {
      t <= this.centreY ? t > this.loY && (this.loY = t) : t > this.centreY && t < this.hiY && (this.hiY = t);
    }, getBisectorY: function getBisectorY() {
      this.process(this.poly.getExteriorRing());for (var t = 0; t < this.poly.getNumInteriorRing(); t++) {
        this.process(this.poly.getInteriorRingN(t));
      }return ni.avg(this.hiY, this.loY);
    }, process: function process(t) {
      for (var e = t.getCoordinateSequence(), n = 0; n < e.size(); n++) {
        var i = e.getY(n);this.updateInterval(i);
      }
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return ii;
    } }), ii.getBisectorY = function (t) {
    return new ii(t).getBisectorY();
  }, ni.SafeBisectorFinder = ii, Ws(ri.prototype, { addEndpoints: function addEndpoints() {
      if (arguments[0] instanceof F) {
        var t = arguments[0];if (t instanceof It) this.addEndpoints(t.getCoordinates());else if (t instanceof lt) for (var e = t, n = 0; n < e.getNumGeometries(); n++) {
          this.addEndpoints(e.getGeometryN(n));
        }
      } else if (arguments[0] instanceof Array) {
        var i = arguments[0];this.add(i[0]), this.add(i[i.length - 1]);
      }
    }, getInteriorPoint: function getInteriorPoint() {
      return this.interiorPoint;
    }, addInterior: function addInterior() {
      if (arguments[0] instanceof F) {
        var t = arguments[0];if (t instanceof It) this.addInterior(t.getCoordinates());else if (t instanceof lt) for (var e = t, n = 0; n < e.getNumGeometries(); n++) {
          this.addInterior(e.getGeometryN(n));
        }
      } else if (arguments[0] instanceof Array) for (var i = arguments[0], n = 1; n < i.length - 1; n++) {
        this.add(i[n]);
      }
    }, add: function add(t) {
      var e = t.distance(this.centroid);e < this.minDistance && (this.interiorPoint = new c(t), this.minDistance = e);
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return ri;
    } }), Ws(si.prototype, { getInteriorPoint: function getInteriorPoint() {
      return this.interiorPoint;
    }, add: function add() {
      if (arguments[0] instanceof F) {
        var t = arguments[0];if (t instanceof Ct) this.add(t.getCoordinate());else if (t instanceof lt) for (var e = t, n = 0; n < e.getNumGeometries(); n++) {
          this.add(e.getGeometryN(n));
        }
      } else if (arguments[0] instanceof c) {
        var i = arguments[0],
            r = i.distance(this.centroid);r < this.minDistance && (this.interiorPoint = new c(i), this.minDistance = r);
      }
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return si;
    } }), Ws(oi.prototype, { select: function select() {
      if (1 === arguments.length) {
        arguments[0];
      } else if (2 === arguments.length) {
        var t = arguments[0],
            e = arguments[1];t.getLineSegment(e, this.selectedSegment), this.select(this.selectedSegment);
      }
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return oi;
    } }), Ws(ai.prototype, { hasChildren: function hasChildren() {
      for (var t = 0; t < 2; t++) {
        if (null !== this.subnode[t]) return !0;
      }return !1;
    }, isPrunable: function isPrunable() {
      return !(this.hasChildren() || this.hasItems());
    }, addAllItems: function addAllItems(t) {
      t.addAll(this.items);for (var e = 0; e < 2; e++) {
        null !== this.subnode[e] && this.subnode[e].addAllItems(t);
      }return t;
    }, size: function size() {
      for (var t = 0, e = 0; e < 2; e++) {
        null !== this.subnode[e] && (t += this.subnode[e].size());
      }return t + this.items.size();
    }, addAllItemsFromOverlapping: function addAllItemsFromOverlapping(t, e) {
      if (null !== t && !this.isSearchMatch(t)) return null;e.addAll(this.items), null !== this.subnode[0] && this.subnode[0].addAllItemsFromOverlapping(t, e), null !== this.subnode[1] && this.subnode[1].addAllItemsFromOverlapping(t, e);
    }, hasItems: function hasItems() {
      return !this.items.isEmpty();
    }, remove: function remove(t, e) {
      if (!this.isSearchMatch(t)) return !1;for (var n = !1, i = 0; i < 2; i++) {
        if (null !== this.subnode[i] && (n = this.subnode[i].remove(t, e))) {
          this.subnode[i].isPrunable() && (this.subnode[i] = null);break;
        }
      }return n || (n = this.items.remove(e));
    }, getItems: function getItems() {
      return this.items;
    }, depth: function depth() {
      for (var t = 0, e = 0; e < 2; e++) {
        if (null !== this.subnode[e]) {
          var n = this.subnode[e].depth();n > t && (t = n);
        }
      }return t + 1;
    }, nodeSize: function nodeSize() {
      for (var t = 0, e = 0; e < 2; e++) {
        null !== this.subnode[e] && (t += this.subnode[e].nodeSize());
      }return t + 1;
    }, add: function add(t) {
      this.items.add(t);
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return ai;
    } }), ai.getSubnodeIndex = function (t, e) {
    var n = -1;return t.min >= e && (n = 1), t.max <= e && (n = 0), n;
  }, Ws(ui.prototype, { expandToInclude: function expandToInclude(t) {
      t.max > this.max && (this.max = t.max), t.min < this.min && (this.min = t.min);
    }, getWidth: function getWidth() {
      return this.max - this.min;
    }, overlaps: function overlaps() {
      if (1 === arguments.length) {
        var t = arguments[0];return this.overlaps(t.min, t.max);
      }if (2 === arguments.length) {
        var e = arguments[0],
            n = arguments[1];return !(this.min > n || this.max < e);
      }
    }, getMin: function getMin() {
      return this.min;
    }, toString: function toString() {
      return "[" + this.min + ", " + this.max + "]";
    }, contains: function contains() {
      if (1 === arguments.length) {
        if (arguments[0] instanceof ui) {
          var t = arguments[0];return this.contains(t.min, t.max);
        }if ("number" == typeof arguments[0]) {
          var e = arguments[0];return e >= this.min && e <= this.max;
        }
      } else if (2 === arguments.length) {
        var n = arguments[0],
            i = arguments[1];return n >= this.min && i <= this.max;
      }
    }, init: function init(t, e) {
      this.min = t, this.max = e, t > e && (this.min = e, this.max = t);
    }, getMax: function getMax() {
      return this.max;
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return ui;
    } }), li.exponent = function (t) {
    return hi(64, t) - 1023;
  }, li.powerOf2 = function (t) {
    return Math.pow(2, t);
  }, Ws(ci.prototype, { getInterval: function getInterval() {
      return this.interval;
    }, getLevel: function getLevel() {
      return this.level;
    }, computeKey: function computeKey(t) {
      for (this.level = ci.computeLevel(t), this.interval = new ui(), this.computeInterval(this.level, t); !this.interval.contains(t);) {
        this.level += 1, this.computeInterval(this.level, t);
      }
    }, computeInterval: function computeInterval(t, e) {
      var n = li.powerOf2(t);this.pt = Math.floor(e.getMin() / n) * n, this.interval.init(this.pt, this.pt + n);
    }, getPoint: function getPoint() {
      return this.pt;
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return ci;
    } }), ci.computeLevel = function (t) {
    var e = t.getWidth();return li.exponent(e) + 1;
  }, js(fi, ai), Ws(fi.prototype, { getInterval: function getInterval() {
      return this.interval;
    }, find: function find(t) {
      var e = ai.getSubnodeIndex(t, this.centre);if (e === -1) return this;if (null !== this.subnode[e]) {
        return this.subnode[e].find(t);
      }return this;
    }, insert: function insert(t) {
      h.isTrue(null === this.interval || this.interval.contains(t.interval));var e = ai.getSubnodeIndex(t.interval, this.centre);if (t.level === this.level - 1) this.subnode[e] = t;else {
        var n = this.createSubnode(e);n.insert(t), this.subnode[e] = n;
      }
    }, isSearchMatch: function isSearchMatch(t) {
      return t.overlaps(this.interval);
    }, getSubnode: function getSubnode(t) {
      return null === this.subnode[t] && (this.subnode[t] = this.createSubnode(t)), this.subnode[t];
    }, getNode: function getNode(t) {
      var e = ai.getSubnodeIndex(t, this.centre);if (e !== -1) {
        return this.getSubnode(e).getNode(t);
      }return this;
    }, createSubnode: function createSubnode(t) {
      var e = 0,
          n = 0;switch (t) {case 0:
          e = this.interval.getMin(), n = this.centre;break;case 1:
          e = this.centre, n = this.interval.getMax();}return new fi(new ui(e, n), this.level - 1);
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return fi;
    } }), fi.createNode = function (t) {
    var e = new ci(t);return new fi(e.getInterval(), e.getLevel());
  }, fi.createExpanded = function (t, e) {
    var n = new ui(e);null !== t && n.expandToInclude(t.interval);var i = fi.createNode(n);return null !== t && i.insert(t), i;
  }, Ws(gi.prototype, { interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return gi;
    } });gi.isZeroWidth = function (t, e) {
    var n = e - t;if (0 === n) return !0;var i = Math.max(Math.abs(t), Math.abs(e)),
        r = n / i;return li.exponent(r) <= gi.MIN_BINARY_EXPONENT;
  }, gi.MIN_BINARY_EXPONENT = -50, js(di, ai), Ws(di.prototype, { insert: function insert(t, e) {
      var n = ai.getSubnodeIndex(t, di.origin);if (n === -1) return this.add(e), null;var i = this.subnode[n];if (null === i || !i.getInterval().contains(t)) {
        var r = fi.createExpanded(i, t);this.subnode[n] = r;
      }this.insertContained(this.subnode[n], t, e);
    }, isSearchMatch: function isSearchMatch(t) {
      return !0;
    }, insertContained: function insertContained(t, e, n) {
      h.isTrue(t.getInterval().contains(e));var i = gi.isZeroWidth(e.getMin(), e.getMax()),
          r = null;r = i ? t.find(e) : t.getNode(e), r.add(n);
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return di;
    } }), di.origin = 0, Ws(pi.prototype, { size: function size() {
      return null !== this.root ? this.root.size() : 0;
    }, insert: function insert(t, e) {
      this.collectStats(t);var n = pi.ensureExtent(t, this.minExtent);this.root.insert(n, e);
    }, query: function query() {
      if (1 === arguments.length) {
        if ("number" == typeof arguments[0]) {
          var t = arguments[0];return this.query(new ui(t, t));
        }if (arguments[0] instanceof ui) {
          var e = arguments[0],
              n = new x();return this.query(e, n), n;
        }
      } else if (2 === arguments.length) {
        var i = arguments[0],
            r = arguments[1];this.root.addAllItemsFromOverlapping(i, r);
      }
    }, iterator: function iterator() {
      var t = new x();return this.root.addAllItems(t), t.iterator();
    }, remove: function remove(t, e) {
      var n = pi.ensureExtent(t, this.minExtent);return this.root.remove(n, e);
    }, collectStats: function collectStats(t) {
      var e = t.getWidth();e < this.minExtent && e > 0 && (this.minExtent = e);
    }, depth: function depth() {
      return null !== this.root ? this.root.depth() : 0;
    }, nodeSize: function nodeSize() {
      return null !== this.root ? this.root.nodeSize() : 0;
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return pi;
    } }), pi.ensureExtent = function (t, e) {
    var n = t.getMin(),
        i = t.getMax();return n !== i ? t : (n === i && (n -= e / 2, i = n + e / 2), new ui(n, i));
  }, Ws(mi.prototype, { isInside: function isInside(t) {}, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return mi;
    } }), Ws(vi.prototype, { testLineSegment: function testLineSegment(t, e) {
      var n = null,
          i = null,
          r = null,
          s = null,
          o = e.p0,
          a = e.p1;n = o.x - t.x, i = o.y - t.y, r = a.x - t.x, s = a.y - t.y, (i > 0 && s <= 0 || s > 0 && i <= 0) && 0 < re.signOfDet2x2(n, i, r, s) / (s - i) && this.crossings++;
    }, buildIndex: function buildIndex() {
      this.tree = new pi();for (var t = Y.removeRepeatedPoints(this.ring.getCoordinates()), e = Ke.getChains(t), n = 0; n < e.size(); n++) {
        var i = e.get(n),
            r = i.getEnvelope();this.interval.min = r.getMinY(), this.interval.max = r.getMaxY(), this.tree.insert(this.interval, i);
      }
    }, testMonotoneChain: function testMonotoneChain(t, e, n) {
      n.select(t, e);
    }, isInside: function isInside(t) {
      this.crossings = 0;var e = new I(i.NEGATIVE_INFINITY, i.POSITIVE_INFINITY, t.y, t.y);this.interval.min = t.y, this.interval.max = t.y;for (var n = this.tree.query(this.interval), r = new yi(this, t), s = n.iterator(); s.hasNext();) {
        var o = s.next();this.testMonotoneChain(e, r, o);
      }return this.crossings % 2 == 1;
    }, interfaces_: function interfaces_() {
      return [mi];
    }, getClass: function getClass() {
      return vi;
    } }), js(yi, oi), Ws(yi.prototype, { select: function select() {
      if (1 !== arguments.length) return oi.prototype.select.apply(this, arguments);var t = arguments[0];this.mcp.testLineSegment(this.p, t);
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return yi;
    } }), vi.MCSelecter = yi, Ws(xi.prototype, { interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return xi;
    } }), xi.toDegrees = function (t) {
    return 180 * t / Math.PI;
  }, xi.normalize = function (t) {
    for (; t > Math.PI;) {
      t -= xi.PI_TIMES_2;
    }for (; t <= -Math.PI;) {
      t += xi.PI_TIMES_2;
    }return t;
  }, xi.angle = function () {
    if (1 === arguments.length) {
      var t = arguments[0];return Math.atan2(t.y, t.x);
    }if (2 === arguments.length) {
      var e = arguments[0],
          n = arguments[1],
          i = n.x - e.x,
          r = n.y - e.y;return Math.atan2(r, i);
    }
  }, xi.isAcute = function (t, e, n) {
    var i = t.x - e.x,
        r = t.y - e.y;return i * (n.x - e.x) + r * (n.y - e.y) > 0;
  }, xi.isObtuse = function (t, e, n) {
    var i = t.x - e.x,
        r = t.y - e.y;return i * (n.x - e.x) + r * (n.y - e.y) < 0;
  }, xi.interiorAngle = function (t, e, n) {
    var i = xi.angle(e, t),
        r = xi.angle(e, n);return Math.abs(r - i);
  }, xi.normalizePositive = function (t) {
    if (t < 0) {
      for (; t < 0;) {
        t += xi.PI_TIMES_2;
      }t >= xi.PI_TIMES_2 && (t = 0);
    } else {
      for (; t >= xi.PI_TIMES_2;) {
        t -= xi.PI_TIMES_2;
      }t < 0 && (t = 0);
    }return t;
  }, xi.angleBetween = function (t, e, n) {
    var i = xi.angle(e, t),
        r = xi.angle(e, n);return xi.diff(i, r);
  }, xi.diff = function (t, e) {
    var n = null;return n = t < e ? e - t : t - e, n > Math.PI && (n = 2 * Math.PI - n), n;
  }, xi.toRadians = function (t) {
    return t * Math.PI / 180;
  }, xi.getTurn = function (t, e) {
    var n = Math.sin(e - t);return n > 0 ? xi.COUNTERCLOCKWISE : n < 0 ? xi.CLOCKWISE : xi.NONE;
  }, xi.angleBetweenOriented = function (t, e, n) {
    var i = xi.angle(e, t),
        r = xi.angle(e, n),
        s = r - i;return s <= -Math.PI ? s + xi.PI_TIMES_2 : s > Math.PI ? s - xi.PI_TIMES_2 : s;
  }, xi.PI_TIMES_2 = 2 * Math.PI, xi.PI_OVER_2 = Math.PI / 2, xi.PI_OVER_4 = Math.PI / 4, xi.COUNTERCLOCKWISE = oe.COUNTERCLOCKWISE, xi.CLOCKWISE = oe.CLOCKWISE, xi.NONE = oe.COLLINEAR, Ws(Ei.prototype, { area: function area() {
      return Ei.area(this.p0, this.p1, this.p2);
    }, signedArea: function signedArea() {
      return Ei.signedArea(this.p0, this.p1, this.p2);
    }, interpolateZ: function interpolateZ(t) {
      if (null === t) throw new n("Supplied point is null.");return Ei.interpolateZ(t, this.p0, this.p1, this.p2);
    }, longestSideLength: function longestSideLength() {
      return Ei.longestSideLength(this.p0, this.p1, this.p2);
    }, isAcute: function isAcute() {
      return Ei.isAcute(this.p0, this.p1, this.p2);
    }, circumcentre: function circumcentre() {
      return Ei.circumcentre(this.p0, this.p1, this.p2);
    }, area3D: function area3D() {
      return Ei.area3D(this.p0, this.p1, this.p2);
    }, centroid: function centroid() {
      return Ei.centroid(this.p0, this.p1, this.p2);
    }, inCentre: function inCentre() {
      return Ei.inCentre(this.p0, this.p1, this.p2);
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return Ei;
    } }), Ei.area = function (t, e, n) {
    return Math.abs(((n.x - t.x) * (e.y - t.y) - (e.x - t.x) * (n.y - t.y)) / 2);
  }, Ei.signedArea = function (t, e, n) {
    return ((n.x - t.x) * (e.y - t.y) - (e.x - t.x) * (n.y - t.y)) / 2;
  }, Ei.det = function (t, e, n, i) {
    return t * i - e * n;
  }, Ei.interpolateZ = function (t, e, n, i) {
    var r = e.x,
        s = e.y,
        o = n.x - r,
        a = i.x - r,
        u = n.y - s,
        l = i.y - s,
        h = o * l - a * u,
        c = t.x - r,
        f = t.y - s,
        g = (l * c - a * f) / h,
        d = (-u * c + o * f) / h;return e.z + g * (n.z - e.z) + d * (i.z - e.z);
  }, Ei.longestSideLength = function (t, e, n) {
    var i = t.distance(e),
        r = e.distance(n),
        s = n.distance(t),
        o = i;return r > o && (o = r), s > o && (o = s), o;
  }, Ei.isAcute = function (t, e, n) {
    return !!xi.isAcute(t, e, n) && !!xi.isAcute(e, n, t) && !!xi.isAcute(n, t, e);
  }, Ei.circumcentre = function (t, e, n) {
    var i = n.x,
        r = n.y,
        s = t.x - i,
        o = t.y - r,
        a = e.x - i,
        u = e.y - r,
        l = 2 * Ei.det(s, o, a, u);return new c(i - Ei.det(o, s * s + o * o, u, a * a + u * u) / l, r + Ei.det(s, s * s + o * o, a, a * a + u * u) / l);
  }, Ei.perpendicularBisector = function (t, e) {
    var n = e.x - t.x,
        i = e.y - t.y;return new M(new M(t.x + n / 2, t.y + i / 2, 1), new M(t.x - i + n / 2, t.y + n + i / 2, 1));
  }, Ei.angleBisector = function (t, e, n) {
    var i = e.distance(t),
        r = e.distance(n),
        s = i / (i + r),
        o = n.x - t.x,
        a = n.y - t.y;return new c(t.x + s * o, t.y + s * a);
  }, Ei.area3D = function (t, e, n) {
    var i = e.x - t.x,
        r = e.y - t.y,
        s = e.z - t.z,
        o = n.x - t.x,
        a = n.y - t.y,
        u = n.z - t.z,
        l = r * u - s * a,
        h = s * o - i * u,
        c = i * a - r * o,
        f = l * l + h * h + c * c;return Math.sqrt(f) / 2;
  }, Ei.centroid = function (t, e, n) {
    return new c((t.x + e.x + n.x) / 3, (t.y + e.y + n.y) / 3);
  }, Ei.inCentre = function (t, e, n) {
    var i = e.distance(n),
        r = t.distance(n),
        s = t.distance(e),
        o = i + r + s;return new c((i * t.x + r * e.x + s * n.x) / o, (i * t.y + r * e.y + s * n.y) / o);
  }, Ws(Ii.prototype, { getRadius: function getRadius() {
      return this.compute(), this.radius;
    }, getDiameter: function getDiameter() {
      switch (this.compute(), this.extremalPts.length) {case 0:
          return this.input.getFactory().createLineString();case 1:
          return this.input.getFactory().createPoint(this.centre);}var t = this.extremalPts[0],
          e = this.extremalPts[1];return this.input.getFactory().createLineString([t, e]);
    }, getExtremalPoints: function getExtremalPoints() {
      return this.compute(), this.extremalPts;
    }, computeCirclePoints: function computeCirclePoints() {
      if (this.input.isEmpty()) return this.extremalPts = new Array(0).fill(null), null;if (1 === this.input.getNumPoints()) {
        var t = this.input.getCoordinates();return this.extremalPts = [new c(t[0])], null;
      }var e = this.input.convexHull(),
          n = e.getCoordinates(),
          t = n;if (n[0].equals2D(n[n.length - 1]) && (t = new Array(n.length - 1).fill(null), Y.copyDeep(n, 0, t, 0, n.length - 1)), t.length <= 2) return this.extremalPts = Y.copyDeep(t), null;for (var i = Ii.lowestPoint(t), r = Ii.pointWitMinAngleWithX(t, i), s = 0; s < t.length; s++) {
        var o = Ii.pointWithMinAngleWithSegment(t, i, r);if (xi.isObtuse(i, o, r)) return this.extremalPts = [new c(i), new c(r)], null;if (xi.isObtuse(o, i, r)) i = o;else {
          if (!xi.isObtuse(o, r, i)) return this.extremalPts = [new c(i), new c(r), new c(o)], null;r = o;
        }
      }h.shouldNeverReachHere("Logic failure in Minimum Bounding Circle algorithm!");
    }, compute: function compute() {
      if (null !== this.extremalPts) return null;this.computeCirclePoints(), this.computeCentre(), null !== this.centre && (this.radius = this.centre.distance(this.extremalPts[0]));
    }, getFarthestPoints: function getFarthestPoints() {
      switch (this.compute(), this.extremalPts.length) {case 0:
          return this.input.getFactory().createLineString();case 1:
          return this.input.getFactory().createPoint(this.centre);}var t = this.extremalPts[0],
          e = this.extremalPts[this.extremalPts.length - 1];return this.input.getFactory().createLineString([t, e]);
    }, getCircle: function getCircle() {
      if (this.compute(), null === this.centre) return this.input.getFactory().createPolygon();var t = this.input.getFactory().createPoint(this.centre);return 0 === this.radius ? t : t.buffer(this.radius);
    }, getCentre: function getCentre() {
      return this.compute(), this.centre;
    }, computeCentre: function computeCentre() {
      switch (this.extremalPts.length) {case 0:
          this.centre = null;break;case 1:
          this.centre = this.extremalPts[0];break;case 2:
          this.centre = new c((this.extremalPts[0].x + this.extremalPts[1].x) / 2, (this.extremalPts[0].y + this.extremalPts[1].y) / 2);break;case 3:
          this.centre = Ei.circumcentre(this.extremalPts[0], this.extremalPts[1], this.extremalPts[2]);}
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return Ii;
    } }), Ii.pointWitMinAngleWithX = function (t, e) {
    for (var n = i.MAX_VALUE, r = null, s = 0; s < t.length; s++) {
      var o = t[s];if (o !== e) {
        var a = o.x - e.x,
            u = o.y - e.y;u < 0 && (u = -u);var l = Math.sqrt(a * a + u * u),
            h = u / l;h < n && (n = h, r = o);
      }
    }return r;
  }, Ii.lowestPoint = function (t) {
    for (var e = t[0], n = 1; n < t.length; n++) {
      t[n].y < e.y && (e = t[n]);
    }return e;
  }, Ii.pointWithMinAngleWithSegment = function (t, e, n) {
    for (var r = i.MAX_VALUE, s = null, o = 0; o < t.length; o++) {
      var a = t[o];if (a !== e && a !== n) {
        var u = xi.angleBetween(e, a, n);u < r && (r = u, s = a);
      }
    }return s;
  }, Ws(Ni.prototype, { getWidthCoordinate: function getWidthCoordinate() {
      return this.computeMinimumDiameter(), this.minWidthPt;
    }, getSupportingSegment: function getSupportingSegment() {
      return this.computeMinimumDiameter(), this.inputGeom.getFactory().createLineString([this.minBaseSeg.p0, this.minBaseSeg.p1]);
    }, getDiameter: function getDiameter() {
      if (this.computeMinimumDiameter(), null === this.minWidthPt) return this.inputGeom.getFactory().createLineString(null);var t = this.minBaseSeg.project(this.minWidthPt);return this.inputGeom.getFactory().createLineString([t, this.minWidthPt]);
    }, computeWidthConvex: function computeWidthConvex(t) {
      this.convexHullPts = t instanceof wt ? t.getExteriorRing().getCoordinates() : t.getCoordinates(), 0 === this.convexHullPts.length ? (this.minWidth = 0, this.minWidthPt = null, this.minBaseSeg = null) : 1 === this.convexHullPts.length ? (this.minWidth = 0, this.minWidthPt = this.convexHullPts[0], this.minBaseSeg.p0 = this.convexHullPts[0], this.minBaseSeg.p1 = this.convexHullPts[0]) : 2 === this.convexHullPts.length || 3 === this.convexHullPts.length ? (this.minWidth = 0, this.minWidthPt = this.convexHullPts[0], this.minBaseSeg.p0 = this.convexHullPts[0], this.minBaseSeg.p1 = this.convexHullPts[1]) : this.computeConvexRingMinDiameter(this.convexHullPts);
    }, computeConvexRingMinDiameter: function computeConvexRingMinDiameter(t) {
      this.minWidth = i.MAX_VALUE;for (var e = 1, n = new ae(), r = 0; r < t.length - 1; r++) {
        n.p0 = t[r], n.p1 = t[r + 1], e = this.findMaxPerpDistance(t, n, e);
      }
    }, computeMinimumDiameter: function computeMinimumDiameter() {
      if (null !== this.minWidthPt) return null;if (this.isConvex) this.computeWidthConvex(this.inputGeom);else {
        var t = new ge(this.inputGeom).getConvexHull();this.computeWidthConvex(t);
      }
    }, getLength: function getLength() {
      return this.computeMinimumDiameter(), this.minWidth;
    }, findMaxPerpDistance: function findMaxPerpDistance(t, e, n) {
      for (var i = e.distancePerpendicular(t[n]), r = i, s = n, o = s; r >= i;) {
        i = r, s = o, o = Ni.nextIndex(t, s), r = e.distancePerpendicular(t[o]);
      }return i < this.minWidth && (this.minPtIndex = s, this.minWidth = i, this.minWidthPt = t[this.minPtIndex], this.minBaseSeg = new ae(e)), s;
    }, getMinimumRectangle: function getMinimumRectangle() {
      if (this.computeMinimumDiameter(), 0 === this.minWidth) return this.minBaseSeg.p0.equals2D(this.minBaseSeg.p1) ? this.inputGeom.getFactory().createPoint(this.minBaseSeg.p0) : this.minBaseSeg.toGeometry(this.inputGeom.getFactory());for (var t = this.minBaseSeg.p1.x - this.minBaseSeg.p0.x, e = this.minBaseSeg.p1.y - this.minBaseSeg.p0.y, n = i.MAX_VALUE, r = -i.MAX_VALUE, s = i.MAX_VALUE, o = -i.MAX_VALUE, a = 0; a < this.convexHullPts.length; a++) {
        var u = Ni.computeC(t, e, this.convexHullPts[a]);u > r && (r = u), u < n && (n = u);var l = Ni.computeC(-e, t, this.convexHullPts[a]);l > o && (o = l), l < s && (s = l);
      }var h = Ni.computeSegmentForLine(-t, -e, o),
          c = Ni.computeSegmentForLine(-t, -e, s),
          f = Ni.computeSegmentForLine(-e, t, r),
          g = Ni.computeSegmentForLine(-e, t, n),
          d = f.lineIntersection(h),
          p = g.lineIntersection(h),
          m = g.lineIntersection(c),
          v = f.lineIntersection(c),
          y = this.inputGeom.getFactory().createLinearRing([d, p, m, v, d]);return this.inputGeom.getFactory().createPolygon(y, null);
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return Ni;
    } }), Ni.nextIndex = function (t, e) {
    return e++, e >= t.length && (e = 0), e;
  }, Ni.computeC = function (t, e, n) {
    return t * n.y - e * n.x;
  }, Ni.getMinimumDiameter = function (t) {
    return new Ni(t).getDiameter();
  }, Ni.getMinimumRectangle = function (t) {
    return new Ni(t).getMinimumRectangle();
  }, Ni.computeSegmentForLine = function (t, e, n) {
    var i = null,
        r = null;return Math.abs(e) > Math.abs(t) ? (i = new c(0, n / e), r = new c(1, n / e - t / e)) : (i = new c(n / t, 0), r = new c(n / t - e / t, 1)), new ae(i, r);
  };var lo = Object.freeze({ Centroid: le, CGAlgorithms: oe, ConvexHull: ge, InteriorPointArea: ni, InteriorPointLine: ri, InteriorPointPoint: si, RobustLineIntersector: ie, MCPointInRing: vi, MinimumBoundingCircle: Ii, MinimumDiameter: Ni });Ws(Ci.prototype, { getResultGeometry: function getResultGeometry() {
      return new Si(this.distanceTolerance).transform(this.inputGeom);
    }, setDistanceTolerance: function setDistanceTolerance(t) {
      if (t <= 0) throw new n("Tolerance must be positive");this.distanceTolerance = t;
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return Ci;
    } }), Ci.densifyPoints = function (t, e, n) {
    for (var i = new ae(), r = new E(), s = 0; s < t.length - 1; s++) {
      i.p0 = t[s], i.p1 = t[s + 1], r.add(i.p0, !1);var o = i.getLength(),
          a = Math.trunc(o / e) + 1;if (a > 1) for (var u = o / a, l = 1; l < a; l++) {
        var h = l * u / o,
            c = i.pointAlong(h);n.makePrecise(c), r.add(c, !1);
      }
    }return r.add(t[t.length - 1], !1), r.toCoordinateArray();
  }, Ci.densify = function (t, e) {
    var n = new Ci(t);return n.setDistanceTolerance(e), n.getResultGeometry();
  }, js(Si, pe), Ws(Si.prototype, { transformMultiPolygon: function transformMultiPolygon(t, e) {
      var n = pe.prototype.transformMultiPolygon.call(this, t, e);return this.createValidArea(n);
    }, transformPolygon: function transformPolygon(t, e) {
      var n = pe.prototype.transformPolygon.call(this, t, e);return e instanceof Tt ? n : this.createValidArea(n);
    }, transformCoordinates: function transformCoordinates(t, e) {
      var n = t.toCoordinateArray(),
          i = Ci.densifyPoints(n, this.distanceTolerance, e.getPrecisionModel());return e instanceof It && 1 === i.length && (i = new Array(0).fill(null)), this.factory.getCoordinateSequenceFactory().create(i);
    }, createValidArea: function createValidArea(t) {
      return t.buffer(0);
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return Si;
    } }), Ci.DensifyTransformer = Si;var ho = Object.freeze({ Densifier: Ci });Ws(wi.prototype, { find: function find(t) {
      var e = this;do {
        if (null === e) return null;if (e.dest().equals2D(t)) return e;e = e.oNext();
      } while (e !== this);return null;
    }, dest: function dest() {
      return this._sym._orig;
    }, oNext: function oNext() {
      return this._sym._next;
    }, insert: function insert(t) {
      if (this.oNext() === this) return this.insertAfter(t), null;var e = this.compareTo(t),
          n = this;do {
        var i = n.oNext();if (i.compareTo(t) !== e || i === this) return n.insertAfter(t), null;n = i;
      } while (n !== this);h.shouldNeverReachHere();
    }, insertAfter: function insertAfter(t) {
      h.equals(this._orig, t.orig());var e = this.oNext();this._sym.setNext(t), t.sym().setNext(e);
    }, degree: function degree() {
      var t = 0,
          e = this;do {
        t++, e = e.oNext();
      } while (e !== this);return t;
    }, equals: function equals() {
      if (2 === arguments.length) {
        var t = arguments[0],
            e = arguments[1];return this._orig.equals2D(t) && this._sym._orig.equals(e);
      }
    }, deltaY: function deltaY() {
      return this._sym._orig.y - this._orig.y;
    }, sym: function sym() {
      return this._sym;
    }, prev: function prev() {
      return this._sym.next()._sym;
    }, compareAngularDirection: function compareAngularDirection(t) {
      var e = this.deltaX(),
          n = this.deltaY(),
          i = t.deltaX(),
          r = t.deltaY();if (e === i && n === r) return 0;var s = je.quadrant(e, n),
          o = je.quadrant(i, r);return s > o ? 1 : s < o ? -1 : oe.computeOrientation(t._orig, t.dest(), this.dest());
    }, prevNode: function prevNode() {
      for (var t = this; 2 === t.degree();) {
        if ((t = t.prev()) === this) return null;
      }return t;
    }, compareTo: function compareTo(t) {
      var e = t;return this.compareAngularDirection(e);
    }, next: function next() {
      return this._next;
    }, setSym: function setSym(t) {
      this._sym = t;
    }, orig: function orig() {
      return this._orig;
    }, toString: function toString() {
      return "HE(" + this._orig.x + " " + this._orig.y + ", " + this._sym._orig.x + " " + this._sym._orig.y + ")";
    }, setNext: function setNext(t) {
      this._next = t;
    }, init: function init(t) {
      this.setSym(t), t.setSym(this), this.setNext(t), t.setNext(this);
    }, deltaX: function deltaX() {
      return this._sym._orig.x - this._orig.x;
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return wi;
    } }), wi.init = function (t, e) {
    if (null !== t._sym || null !== e._sym || null !== t._next || null !== e._next) throw new IllegalStateException("Edges are already initialized");return t.init(e), t;
  }, wi.create = function (t, e) {
    var n = new wi(t),
        i = new wi(e);return n.init(i), n;
  }, js(Li, wi), Ws(Li.prototype, { mark: function mark() {
      this._isMarked = !0;
    }, setMark: function setMark(t) {
      this._isMarked = t;
    }, isMarked: function isMarked() {
      return this._isMarked;
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return Li;
    } }), Li.setMarkBoth = function (t, e) {
    t.setMark(e), t.sym().setMark(e);
  }, Li.isMarked = function (t) {
    return t.isMarked();
  }, Li.setMark = function (t, e) {
    t.setMark(e);
  }, Li.markBoth = function (t) {
    t.mark(), t.sym().mark();
  }, Li.mark = function (t) {
    t.mark();
  }, Ws(Ri.prototype, { insert: function insert(t, e, n) {
      var i = this.create(t, e);null !== n ? n.insert(i) : this.vertexMap.put(t, i);var r = this.vertexMap.get(e);return null !== r ? r.insert(i.sym()) : this.vertexMap.put(e, i.sym()), i;
    }, create: function create(t, e) {
      var n = this.createEdge(t),
          i = this.createEdge(e);return wi.init(n, i), n;
    }, createEdge: function createEdge(t) {
      return new wi(t);
    }, addEdge: function addEdge(t, e) {
      if (!Ri.isValidEdge(t, e)) return null;var n = this.vertexMap.get(t),
          i = null;return null !== n && (i = n.find(e)), null !== i ? i : this.insert(t, e, n);
    }, getVertexEdges: function getVertexEdges() {
      return this.vertexMap.values();
    }, findEdge: function findEdge(t, e) {
      var n = this.vertexMap.get(t);return null === n ? null : n.find(e);
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return Ri;
    } }), Ri.isValidEdge = function (t, e) {
    return 0 !== e.compareTo(t);
  }, js(Ti, Li), Ws(Ti.prototype, { setStart: function setStart() {
      this._isStart = !0;
    }, isStart: function isStart() {
      return this._isStart;
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return Ti;
    } }), js(Pi, Ri), Ws(Pi.prototype, { createEdge: function createEdge(t) {
      return new Ti(t);
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return Pi;
    } }), Ws(bi.prototype, { addLine: function addLine(t) {
      this.lines.add(this.factory.createLineString(t.toCoordinateArray()));
    }, updateRingStartEdge: function updateRingStartEdge(t) {
      return t.isStart() || (t = t.sym(), t.isStart()) ? null === this.ringStartEdge ? (this.ringStartEdge = t, null) : void (t.orig().compareTo(this.ringStartEdge.orig()) < 0 && (this.ringStartEdge = t)) : null;
    }, getResult: function getResult() {
      return null === this.result && this.computeResult(), this.result;
    }, process: function process(t) {
      var e = t.prevNode();null === e && (e = t), this.stackEdges(e), this.buildLines();
    }, buildRing: function buildRing(t) {
      var e = new E(),
          n = t;for (e.add(n.orig().copy(), !1); 2 === n.sym().degree();) {
        var i = n.next();if (i === t) break;e.add(i.orig().copy(), !1), n = i;
      }e.add(n.dest().copy(), !1), this.addLine(e);
    }, buildLine: function buildLine(t) {
      var e = new E(),
          n = t;for (this.ringStartEdge = null, Li.markBoth(n), e.add(n.orig().copy(), !1); 2 === n.sym().degree();) {
        this.updateRingStartEdge(n);var i = n.next();if (i === t) return this.buildRing(this.ringStartEdge), null;e.add(i.orig().copy(), !1), n = i, Li.markBoth(n);
      }e.add(n.dest().copy(), !1), this.stackEdges(n.sym()), this.addLine(e);
    }, stackEdges: function stackEdges(t) {
      var e = t;do {
        Li.isMarked(e) || this.nodeEdgeStack.add(e), e = e.oNext();
      } while (e !== t);
    }, computeResult: function computeResult() {
      for (var t = this.graph.getVertexEdges(), e = t.iterator(); e.hasNext();) {
        var n = e.next();Li.isMarked(n) || this.process(n);
      }this.result = this.factory.buildGeometry(this.lines);
    }, buildLines: function buildLines() {
      for (; !this.nodeEdgeStack.empty();) {
        var t = this.nodeEdgeStack.pop();Li.isMarked(t) || this.buildLine(t);
      }
    }, add: function add() {
      if (arguments[0] instanceof F) {
        arguments[0].apply({ interfaces_: function interfaces_() {
            return [A];
          }, filter: function filter(t) {
            t instanceof It && this.add(t);
          } });
      } else if (Zs(arguments[0], d)) for (var t = arguments[0], e = t.iterator(); e.hasNext();) {
        var n = e.next();this.add(n);
      } else if (arguments[0] instanceof It) {
        var i = arguments[0];null === this.factory && (this.factory = i.getFactory());for (var r = i.getCoordinateSequence(), s = !1, e = 1; e < r.size(); e++) {
          var o = this.graph.addEdge(r.getCoordinate(e - 1), r.getCoordinate(e));null !== o && (s || (o.setStart(), s = !0));
        }
      }
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return bi;
    } }), bi.dissolve = function (t) {
    var e = new bi();return e.add(t), e.getResult();
  };var co = Object.freeze({ LineDissolver: bi }),
      fo = Object.freeze({ GeometryGraph: Kn });Ws(Oi.prototype, { hasChildren: function hasChildren() {
      for (var t = 0; t < 4; t++) {
        if (null !== this.subnode[t]) return !0;
      }return !1;
    }, isPrunable: function isPrunable() {
      return !(this.hasChildren() || this.hasItems());
    }, addAllItems: function addAllItems(t) {
      t.addAll(this.items);for (var e = 0; e < 4; e++) {
        null !== this.subnode[e] && this.subnode[e].addAllItems(t);
      }return t;
    }, getNodeCount: function getNodeCount() {
      for (var t = 0, e = 0; e < 4; e++) {
        null !== this.subnode[e] && (t += this.subnode[e].size());
      }return t + 1;
    }, size: function size() {
      for (var t = 0, e = 0; e < 4; e++) {
        null !== this.subnode[e] && (t += this.subnode[e].size());
      }return t + this.items.size();
    }, addAllItemsFromOverlapping: function addAllItemsFromOverlapping(t, e) {
      if (!this.isSearchMatch(t)) return null;e.addAll(this.items);for (var n = 0; n < 4; n++) {
        null !== this.subnode[n] && this.subnode[n].addAllItemsFromOverlapping(t, e);
      }
    }, visitItems: function visitItems(t, e) {
      for (var n = this.items.iterator(); n.hasNext();) {
        e.visitItem(n.next());
      }
    }, hasItems: function hasItems() {
      return !this.items.isEmpty();
    }, remove: function remove(t, e) {
      if (!this.isSearchMatch(t)) return !1;for (var n = !1, i = 0; i < 4; i++) {
        if (null !== this.subnode[i] && (n = this.subnode[i].remove(t, e))) {
          this.subnode[i].isPrunable() && (this.subnode[i] = null);break;
        }
      }return n || (n = this.items.remove(e));
    }, visit: function visit(t, e) {
      if (!this.isSearchMatch(t)) return null;this.visitItems(t, e);for (var n = 0; n < 4; n++) {
        null !== this.subnode[n] && this.subnode[n].visit(t, e);
      }
    }, getItems: function getItems() {
      return this.items;
    }, depth: function depth() {
      for (var t = 0, e = 0; e < 4; e++) {
        if (null !== this.subnode[e]) {
          var n = this.subnode[e].depth();n > t && (t = n);
        }
      }return t + 1;
    }, isEmpty: function isEmpty() {
      var t = !0;this.items.isEmpty() || (t = !1);for (var e = 0; e < 4; e++) {
        null !== this.subnode[e] && (this.subnode[e].isEmpty() || (t = !1));
      }return t;
    }, add: function add(t) {
      this.items.add(t);
    }, interfaces_: function interfaces_() {
      return [a];
    }, getClass: function getClass() {
      return Oi;
    } }), Oi.getSubnodeIndex = function (t, e, n) {
    var i = -1;return t.getMinX() >= e && (t.getMinY() >= n && (i = 3), t.getMaxY() <= n && (i = 1)), t.getMaxX() <= e && (t.getMinY() >= n && (i = 2), t.getMaxY() <= n && (i = 0)), i;
  }, Ws(_i.prototype, { getLevel: function getLevel() {
      return this.level;
    }, computeKey: function computeKey() {
      if (1 === arguments.length) {
        var t = arguments[0];for (this.level = _i.computeQuadLevel(t), this.env = new I(), this.computeKey(this.level, t); !this.env.contains(t);) {
          this.level += 1, this.computeKey(this.level, t);
        }
      } else if (2 === arguments.length) {
        var e = arguments[0],
            n = arguments[1],
            i = li.powerOf2(e);this.pt.x = Math.floor(n.getMinX() / i) * i, this.pt.y = Math.floor(n.getMinY() / i) * i, this.env.init(this.pt.x, this.pt.x + i, this.pt.y, this.pt.y + i);
      }
    }, getEnvelope: function getEnvelope() {
      return this.env;
    }, getCentre: function getCentre() {
      return new c((this.env.getMinX() + this.env.getMaxX()) / 2, (this.env.getMinY() + this.env.getMaxY()) / 2);
    }, getPoint: function getPoint() {
      return this.pt;
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return _i;
    } }), _i.computeQuadLevel = function (t) {
    var e = t.getWidth(),
        n = t.getHeight(),
        i = e > n ? e : n;return li.exponent(i) + 1;
  }, js(Mi, Oi), Ws(Mi.prototype, { find: function find(t) {
      var e = Oi.getSubnodeIndex(t, this.centrex, this.centrey);if (e === -1) return this;if (null !== this.subnode[e]) {
        return this.subnode[e].find(t);
      }return this;
    }, isSearchMatch: function isSearchMatch(t) {
      return this.env.intersects(t);
    }, getSubnode: function getSubnode(t) {
      return null === this.subnode[t] && (this.subnode[t] = this.createSubnode(t)), this.subnode[t];
    }, getEnvelope: function getEnvelope() {
      return this.env;
    }, getNode: function getNode(t) {
      var e = Oi.getSubnodeIndex(t, this.centrex, this.centrey);if (e !== -1) {
        return this.getSubnode(e).getNode(t);
      }return this;
    }, createSubnode: function createSubnode(t) {
      var e = 0,
          n = 0,
          i = 0,
          r = 0;switch (t) {case 0:
          e = this.env.getMinX(), n = this.centrex, i = this.env.getMinY(), r = this.centrey;break;case 1:
          e = this.centrex, n = this.env.getMaxX(), i = this.env.getMinY(), r = this.centrey;break;case 2:
          e = this.env.getMinX(), n = this.centrex, i = this.centrey, r = this.env.getMaxY();break;case 3:
          e = this.centrex, n = this.env.getMaxX(), i = this.centrey, r = this.env.getMaxY();}return new Mi(new I(e, n, i, r), this.level - 1);
    }, insertNode: function insertNode(t) {
      h.isTrue(null === this.env || this.env.contains(t.env));var e = Oi.getSubnodeIndex(t.env, this.centrex, this.centrey);if (t.level === this.level - 1) this.subnode[e] = t;else {
        var n = this.createSubnode(e);n.insertNode(t), this.subnode[e] = n;
      }
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return Mi;
    } }), Mi.createNode = function (t) {
    var e = new _i(t);return new Mi(e.getEnvelope(), e.getLevel());
  }, Mi.createExpanded = function (t, e) {
    var n = new I(e);null !== t && n.expandToInclude(t.env);var i = Mi.createNode(n);return null !== t && i.insertNode(t), i;
  }, js(Di, Oi), Ws(Di.prototype, { insert: function insert(t, e) {
      var n = Oi.getSubnodeIndex(t, Di.origin.x, Di.origin.y);if (n === -1) return this.add(e), null;var i = this.subnode[n];if (null === i || !i.getEnvelope().contains(t)) {
        var r = Mi.createExpanded(i, t);this.subnode[n] = r;
      }this.insertContained(this.subnode[n], t, e);
    }, isSearchMatch: function isSearchMatch(t) {
      return !0;
    }, insertContained: function insertContained(t, e, n) {
      h.isTrue(t.getEnvelope().contains(e));var i = gi.isZeroWidth(e.getMinX(), e.getMaxX()),
          r = gi.isZeroWidth(e.getMinY(), e.getMaxY()),
          s = null;s = i || r ? t.find(e) : t.getNode(e), s.add(n);
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return Di;
    } }), Di.origin = new c(0, 0), Ws(Ai.prototype, { size: function size() {
      return null !== this.root ? this.root.size() : 0;
    }, insert: function insert(t, e) {
      this.collectStats(t);var n = Ai.ensureExtent(t, this.minExtent);this.root.insert(n, e);
    }, query: function query() {
      if (1 === arguments.length) {
        var t = arguments[0],
            e = new Bn();return this.query(t, e), e.getItems();
      }if (2 === arguments.length) {
        var n = arguments[0],
            i = arguments[1];this.root.visit(n, i);
      }
    }, queryAll: function queryAll() {
      var t = new x();return this.root.addAllItems(t), t;
    }, remove: function remove(t, e) {
      var n = Ai.ensureExtent(t, this.minExtent);return this.root.remove(n, e);
    }, collectStats: function collectStats(t) {
      var e = t.getWidth();e < this.minExtent && e > 0 && (this.minExtent = e);var n = t.getHeight();n < this.minExtent && n > 0 && (this.minExtent = n);
    }, depth: function depth() {
      return null !== this.root ? this.root.depth() : 0;
    }, isEmpty: function isEmpty() {
      return null === this.root;
    }, interfaces_: function interfaces_() {
      return [_e, a];
    }, getClass: function getClass() {
      return Ai;
    } }), Ai.ensureExtent = function (t, e) {
    var n = t.getMinX(),
        i = t.getMaxX(),
        r = t.getMinY(),
        s = t.getMaxY();return n !== i && r !== s ? t : (n === i && (n -= e / 2, i = n + e / 2), r === s && (r -= e / 2, s = r + e / 2), new I(n, i, r, s));
  }, Ai.serialVersionUID = -0x678b60c967a25400;var go = Object.freeze({ Quadtree: Ai }),
      po = Object.freeze({ STRtree: qe }),
      mo = Object.freeze({ quadtree: go, strtree: po }),
      vo = ["Point", "MultiPoint", "LineString", "MultiLineString", "Polygon", "MultiPolygon"];Ws(Fi.prototype, { read: function read(t) {
      var e = void 0;e = "string" == typeof t ? JSON.parse(t) : t;var n = e.type;if (!yo[n]) throw new Error("Unknown GeoJSON type: " + e.type);return vo.indexOf(n) !== -1 ? yo[n].apply(this, [e.coordinates]) : "GeometryCollection" === n ? yo[n].apply(this, [e.geometries]) : yo[n].apply(this, [e]);
    }, write: function write(t) {
      var e = t.getGeometryType();if (!xo[e]) throw new Error("Geometry is not supported");return xo[e].apply(this, [t]);
    } });var yo = { Feature: function Feature(t) {
      var e = {};for (var n in t) {
        e[n] = t[n];
      }if (t.geometry) {
        var i = t.geometry.type;if (!yo[i]) throw new Error("Unknown GeoJSON type: " + t.type);e.geometry = this.read(t.geometry);
      }return t.bbox && (e.bbox = yo.bbox.apply(this, [t.bbox])), e;
    }, FeatureCollection: function FeatureCollection(t) {
      var e = {};if (t.features) {
        e.features = [];for (var n = 0; n < t.features.length; ++n) {
          e.features.push(this.read(t.features[n]));
        }
      }return t.bbox && (e.bbox = this.parse.bbox.apply(this, [t.bbox])), e;
    }, coordinates: function coordinates(t) {
      for (var e = [], n = 0; n < t.length; ++n) {
        var i = t[n];e.push(new c(i[0], i[1]));
      }return e;
    }, bbox: function bbox(t) {
      return this.geometryFactory.createLinearRing([new c(t[0], t[1]), new c(t[2], t[1]), new c(t[2], t[3]), new c(t[0], t[3]), new c(t[0], t[1])]);
    }, Point: function Point(t) {
      var e = new c(t[0], t[1]);return this.geometryFactory.createPoint(e);
    }, MultiPoint: function MultiPoint(t) {
      for (var e = [], n = 0; n < t.length; ++n) {
        e.push(yo.Point.apply(this, [t[n]]));
      }return this.geometryFactory.createMultiPoint(e);
    }, LineString: function LineString(t) {
      var e = yo.coordinates.apply(this, [t]);return this.geometryFactory.createLineString(e);
    }, MultiLineString: function MultiLineString(t) {
      for (var e = [], n = 0; n < t.length; ++n) {
        e.push(yo.LineString.apply(this, [t[n]]));
      }return this.geometryFactory.createMultiLineString(e);
    }, Polygon: function Polygon(t) {
      for (var e = yo.coordinates.apply(this, [t[0]]), n = this.geometryFactory.createLinearRing(e), i = [], r = 1; r < t.length; ++r) {
        var s = t[r],
            o = yo.coordinates.apply(this, [s]),
            a = this.geometryFactory.createLinearRing(o);i.push(a);
      }return this.geometryFactory.createPolygon(n, i);
    }, MultiPolygon: function MultiPolygon(t) {
      for (var e = [], n = 0; n < t.length; ++n) {
        var i = t[n];e.push(yo.Polygon.apply(this, [i]));
      }return this.geometryFactory.createMultiPolygon(e);
    }, GeometryCollection: function GeometryCollection(t) {
      for (var e = [], n = 0; n < t.length; ++n) {
        var i = t[n];e.push(this.read(i));
      }return this.geometryFactory.createGeometryCollection(e);
    } },
      xo = { coordinate: function coordinate(t) {
      return [t.x, t.y];
    }, Point: function Point(t) {
      return { type: "Point", coordinates: xo.coordinate.apply(this, [t.getCoordinate()]) };
    }, MultiPoint: function MultiPoint(t) {
      for (var e = [], n = 0; n < t.geometries.length; ++n) {
        var i = t.geometries[n],
            r = xo.Point.apply(this, [i]);e.push(r.coordinates);
      }return { type: "MultiPoint", coordinates: e };
    }, LineString: function LineString(t) {
      for (var e = [], n = t.getCoordinates(), i = 0; i < n.length; ++i) {
        var r = n[i];e.push(xo.coordinate.apply(this, [r]));
      }return { type: "LineString", coordinates: e };
    }, MultiLineString: function MultiLineString(t) {
      for (var e = [], n = 0; n < t.geometries.length; ++n) {
        var i = t.geometries[n],
            r = xo.LineString.apply(this, [i]);e.push(r.coordinates);
      }return { type: "MultiLineString", coordinates: e };
    }, Polygon: function Polygon(t) {
      var e = [],
          n = xo.LineString.apply(this, [t.shell]);e.push(n.coordinates);for (var i = 0; i < t.holes.length; ++i) {
        var r = t.holes[i],
            s = xo.LineString.apply(this, [r]);e.push(s.coordinates);
      }return { type: "Polygon", coordinates: e };
    }, MultiPolygon: function MultiPolygon(t) {
      for (var e = [], n = 0; n < t.geometries.length; ++n) {
        var i = t.geometries[n],
            r = xo.Polygon.apply(this, [i]);e.push(r.coordinates);
      }return { type: "MultiPolygon", coordinates: e };
    }, GeometryCollection: function GeometryCollection(t) {
      for (var e = [], n = 0; n < t.geometries.length; ++n) {
        var i = t.geometries[n],
            r = i.getGeometryType();e.push(xo[r].apply(this, [i]));
      }return { type: "GeometryCollection", geometries: e };
    } };Ws(Gi.prototype, { read: function read(t) {
      var e = this.parser.read(t);return this.precisionModel.getType() === Qt.FIXED && this.reducePrecision(e), e;
    }, reducePrecision: function reducePrecision(t) {
      var e, n;if (t.coordinate) this.precisionModel.makePrecise(t.coordinate);else if (t.points) for (e = 0, n = t.points.length; e < n; e++) {
        this.precisionModel.makePrecise(t.points[e]);
      } else if (t.geometries) for (e = 0, n = t.geometries.length; e < n; e++) {
        this.reducePrecision(t.geometries[e]);
      }
    } }), Ws(qi.prototype, { write: function write(t) {
      return this.parser.write(t);
    } }), Ws(Bi.prototype, { read: function read(t) {
      var e = this.parser.read(t);return this.precisionModel.getType() === Qt.FIXED && this.reducePrecision(e), e;
    }, reducePrecision: function reducePrecision(t) {
      if (t.coordinate) this.precisionModel.makePrecise(t.coordinate);else if (t.points) for (var e = 0, n = t.points.coordinates.length; e < n; e++) {
        this.precisionModel.makePrecise(t.points.coordinates[e]);
      } else if (t.geometries) for (var i = 0, r = t.geometries.length; i < r; i++) {
        this.reducePrecision(t.geometries[i]);
      }
    } }), Ws(Vi.prototype, { read: function read(t) {
      var e = this.ol;return t instanceof e.geom.Point ? this.convertFromPoint(t) : t instanceof e.geom.LineString ? this.convertFromLineString(t) : t instanceof e.geom.LinearRing ? this.convertFromLinearRing(t) : t instanceof e.geom.Polygon ? this.convertFromPolygon(t) : t instanceof e.geom.MultiPoint ? this.convertFromMultiPoint(t) : t instanceof e.geom.MultiLineString ? this.convertFromMultiLineString(t) : t instanceof e.geom.MultiPolygon ? this.convertFromMultiPolygon(t) : t instanceof e.geom.GeometryCollection ? this.convertFromCollection(t) : void 0;
    }, convertFromPoint: function convertFromPoint(t) {
      var e = t.getCoordinates();return this.geometryFactory.createPoint(new c(e[0], e[1]));
    }, convertFromLineString: function convertFromLineString(t) {
      return this.geometryFactory.createLineString(t.getCoordinates().map(function (t) {
        return new c(t[0], t[1]);
      }));
    }, convertFromLinearRing: function convertFromLinearRing(t) {
      return this.geometryFactory.createLinearRing(t.getCoordinates().map(function (t) {
        return new c(t[0], t[1]);
      }));
    }, convertFromPolygon: function convertFromPolygon(t) {
      for (var e = t.getLinearRings(), n = null, i = [], r = 0; r < e.length; r++) {
        var s = this.convertFromLinearRing(e[r]);0 === r ? n = s : i.push(s);
      }return this.geometryFactory.createPolygon(n, i);
    }, convertFromMultiPoint: function convertFromMultiPoint(t) {
      var e = t.getPoints().map(function (t) {
        return this.convertFromPoint(t);
      }, this);return this.geometryFactory.createMultiPoint(e);
    }, convertFromMultiLineString: function convertFromMultiLineString(t) {
      var e = t.getLineStrings().map(function (t) {
        return this.convertFromLineString(t);
      }, this);return this.geometryFactory.createMultiLineString(e);
    }, convertFromMultiPolygon: function convertFromMultiPolygon(t) {
      var e = t.getPolygons().map(function (t) {
        return this.convertFromPolygon(t);
      }, this);return this.geometryFactory.createMultiPolygon(e);
    }, convertFromCollection: function convertFromCollection(t) {
      var e = t.getGeometries().map(function (t) {
        return this.read(t);
      }, this);return this.geometryFactory.createGeometryCollection(e);
    }, write: function write(t) {
      return "Point" === t.getGeometryType() ? this.convertToPoint(t.getCoordinate()) : "LineString" === t.getGeometryType() ? this.convertToLineString(t) : "LinearRing" === t.getGeometryType() ? this.convertToLinearRing(t) : "Polygon" === t.getGeometryType() ? this.convertToPolygon(t) : "MultiPoint" === t.getGeometryType() ? this.convertToMultiPoint(t) : "MultiLineString" === t.getGeometryType() ? this.convertToMultiLineString(t) : "MultiPolygon" === t.getGeometryType() ? this.convertToMultiPolygon(t) : "GeometryCollection" === t.getGeometryType() ? this.convertToCollection(t) : void 0;
    }, convertToPoint: function convertToPoint(t) {
      return new this.ol.geom.Point([t.x, t.y]);
    }, convertToLineString: function convertToLineString(t) {
      var e = t.points.coordinates.map(zi);return new this.ol.geom.LineString(e);
    }, convertToLinearRing: function convertToLinearRing(t) {
      var e = t.points.coordinates.map(zi);return new this.ol.geom.LinearRing(e);
    }, convertToPolygon: function convertToPolygon(t) {
      for (var e = [t.shell.points.coordinates.map(zi)], n = 0; n < t.holes.length; n++) {
        e.push(t.holes[n].points.coordinates.map(zi));
      }return new this.ol.geom.Polygon(e);
    }, convertToMultiPoint: function convertToMultiPoint(t) {
      return new this.ol.geom.MultiPoint(t.getCoordinates().map(zi));
    }, convertToMultiLineString: function convertToMultiLineString(t) {
      for (var e = [], n = 0; n < t.geometries.length; n++) {
        e.push(this.convertToLineString(t.geometries[n]).getCoordinates());
      }return new this.ol.geom.MultiLineString(e);
    }, convertToMultiPolygon: function convertToMultiPolygon(t) {
      for (var e = [], n = 0; n < t.geometries.length; n++) {
        e.push(this.convertToPolygon(t.geometries[n]).getCoordinates());
      }return new this.ol.geom.MultiPolygon(e);
    }, convertToCollection: function convertToCollection(t) {
      for (var e = [], n = 0; n < t.geometries.length; n++) {
        var i = t.geometries[n];e.push(this.write(i));
      }return new this.ol.geom.GeometryCollection(e);
    } });var Eo = Object.freeze({ GeoJSONReader: Gi, GeoJSONWriter: qi, OL3Parser: Vi, WKTReader: Bi, WKTWriter: ee });Ws(ki.prototype, { rescale: function rescale() {
      if (Zs(arguments[0], d)) for (var t = arguments[0], e = t.iterator(); e.hasNext();) {
        var n = e.next();this.rescale(n.getCoordinates());
      } else if (arguments[0] instanceof Array) {
        var i = arguments[0];2 === i.length && (new c(i[0]), new c(i[1]));for (var e = 0; e < i.length; e++) {
          i[e].x = i[e].x / this.scaleFactor + this.offsetX, i[e].y = i[e].y / this.scaleFactor + this.offsetY;
        }2 === i.length && i[0].equals2D(i[1]) && _.out.println(i);
      }
    }, scale: function scale() {
      if (Zs(arguments[0], d)) {
        for (var t = arguments[0], e = new x(), n = t.iterator(); n.hasNext();) {
          var i = n.next();e.add(new Xe(this.scale(i.getCoordinates()), i.getData()));
        }return e;
      }if (arguments[0] instanceof Array) {
        for (var r = arguments[0], s = new Array(r.length).fill(null), n = 0; n < r.length; n++) {
          s[n] = new c(Math.round((r[n].x - this.offsetX) * this.scaleFactor), Math.round((r[n].y - this.offsetY) * this.scaleFactor), r[n].z);
        }return Y.removeRepeatedPoints(s);
      }
    }, isIntegerPrecision: function isIntegerPrecision() {
      return 1 === this.scaleFactor;
    }, getNodedSubstrings: function getNodedSubstrings() {
      var t = this.noder.getNodedSubstrings();return this.isScaled && this.rescale(t), t;
    }, computeNodes: function computeNodes(t) {
      var e = t;this.isScaled && (e = this.scale(t)), this.noder.computeNodes(e);
    }, interfaces_: function interfaces_() {
      return [Ze];
    }, getClass: function getClass() {
      return ki;
    } });var Io = Object.freeze({ MCIndexNoder: Je, ScaledNoder: ki, SegmentString: Le });Ws(Yi.prototype, { isSimpleMultiPoint: function isSimpleMultiPoint(t) {
      if (t.isEmpty()) return !0;for (var e = new rt(), n = 0; n < t.getNumGeometries(); n++) {
        var i = t.getGeometryN(n),
            r = i.getCoordinate();if (e.contains(r)) return this.nonSimpleLocation = r, !1;e.add(r);
      }return !0;
    }, isSimplePolygonal: function isSimplePolygonal(t) {
      for (var e = qn.getLines(t), n = e.iterator(); n.hasNext();) {
        var i = n.next();if (!this.isSimpleLinearGeometry(i)) return !1;
      }return !0;
    }, hasClosedEndpointIntersection: function hasClosedEndpointIntersection(t) {
      for (var e = new et(), n = t.getEdgeIterator(); n.hasNext();) {
        var i = n.next(),
            r = (i.getMaximumSegmentIndex(), i.isClosed()),
            s = i.getCoordinate(0);this.addEndpoint(e, s, r);var o = i.getCoordinate(i.getNumPoints() - 1);this.addEndpoint(e, o, r);
      }for (var n = e.values().iterator(); n.hasNext();) {
        var a = n.next();if (a.isClosed && 2 !== a.degree) return this.nonSimpleLocation = a.getCoordinate(), !0;
      }return !1;
    }, getNonSimpleLocation: function getNonSimpleLocation() {
      return this.nonSimpleLocation;
    }, isSimpleLinearGeometry: function isSimpleLinearGeometry(t) {
      if (t.isEmpty()) return !0;var e = new Kn(0, t),
          n = new ie(),
          i = e.computeSelfNodes(n, !0);return !i.hasIntersection() || (i.hasProperIntersection() ? (this.nonSimpleLocation = i.getProperIntersectionPoint(), !1) : !this.hasNonEndpointIntersection(e) && (!this.isClosedEndpointsInInterior || !this.hasClosedEndpointIntersection(e)));
    }, hasNonEndpointIntersection: function hasNonEndpointIntersection(t) {
      for (var e = t.getEdgeIterator(); e.hasNext();) {
        for (var n = e.next(), i = n.getMaximumSegmentIndex(), r = n.getEdgeIntersectionList().iterator(); r.hasNext();) {
          var s = r.next();if (!s.isEndPoint(i)) return this.nonSimpleLocation = s.getCoordinate(), !0;
        }
      }return !1;
    }, addEndpoint: function addEndpoint(t, e, n) {
      var i = t.get(e);null === i && (i = new Ui(e), t.put(e, i)), i.addEndpoint(n);
    }, computeSimple: function computeSimple(t) {
      return this.nonSimpleLocation = null, !!t.isEmpty() || (t instanceof It ? this.isSimpleLinearGeometry(t) : t instanceof ht ? this.isSimpleLinearGeometry(t) : t instanceof Lt ? this.isSimpleMultiPoint(t) : Zs(t, St) ? this.isSimplePolygonal(t) : !(t instanceof lt) || this.isSimpleGeometryCollection(t));
    }, isSimple: function isSimple() {
      return this.nonSimpleLocation = null, this.computeSimple(this.inputGeom);
    }, isSimpleGeometryCollection: function isSimpleGeometryCollection(t) {
      for (var e = 0; e < t.getNumGeometries(); e++) {
        var n = t.getGeometryN(e);if (!this.computeSimple(n)) return !1;
      }return !0;
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return Yi;
    } }), Ws(Ui.prototype, { addEndpoint: function addEndpoint(t) {
      this.degree++, this.isClosed |= t;
    }, getCoordinate: function getCoordinate() {
      return this.pt;
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return Ui;
    } }), Yi.EndpointInfo = Ui, Ws(Xi.prototype, { getEndCapStyle: function getEndCapStyle() {
      return this.endCapStyle;
    }, isSingleSided: function isSingleSided() {
      return this._isSingleSided;
    }, setQuadrantSegments: function setQuadrantSegments(t) {
      this.quadrantSegments = t, 0 === this.quadrantSegments && (this.joinStyle = Xi.JOIN_BEVEL), this.quadrantSegments < 0 && (this.joinStyle = Xi.JOIN_MITRE, this.mitreLimit = Math.abs(this.quadrantSegments)), t <= 0 && (this.quadrantSegments = 1), this.joinStyle !== Xi.JOIN_ROUND && (this.quadrantSegments = Xi.DEFAULT_QUADRANT_SEGMENTS);
    }, getJoinStyle: function getJoinStyle() {
      return this.joinStyle;
    }, setJoinStyle: function setJoinStyle(t) {
      this.joinStyle = t;
    }, setSimplifyFactor: function setSimplifyFactor(t) {
      this.simplifyFactor = t < 0 ? 0 : t;
    }, getSimplifyFactor: function getSimplifyFactor() {
      return this.simplifyFactor;
    }, getQuadrantSegments: function getQuadrantSegments() {
      return this.quadrantSegments;
    }, setEndCapStyle: function setEndCapStyle(t) {
      this.endCapStyle = t;
    }, getMitreLimit: function getMitreLimit() {
      return this.mitreLimit;
    }, setMitreLimit: function setMitreLimit(t) {
      this.mitreLimit = t;
    }, setSingleSided: function setSingleSided(t) {
      this._isSingleSided = t;
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return Xi;
    } }), Xi.bufferDistanceError = function (t) {
    var e = Math.PI / 2 / t;return 1 - Math.cos(e / 2);
  }, Xi.CAP_ROUND = 1, Xi.CAP_FLAT = 2, Xi.CAP_SQUARE = 3, Xi.JOIN_ROUND = 1, Xi.JOIN_MITRE = 2, Xi.JOIN_BEVEL = 3, Xi.DEFAULT_QUADRANT_SEGMENTS = 8, Xi.DEFAULT_MITRE_LIMIT = 5, Xi.DEFAULT_SIMPLIFY_FACTOR = .01, Ws(Hi.prototype, { getCoordinate: function getCoordinate() {
      return this.minCoord;
    }, getRightmostSide: function getRightmostSide(t, e) {
      var n = this.getRightmostSideOfSegment(t, e);return n < 0 && (n = this.getRightmostSideOfSegment(t, e - 1)), n < 0 && (this.minCoord = null, this.checkForRightmostCoordinate(t)), n;
    }, findRightmostEdgeAtVertex: function findRightmostEdgeAtVertex() {
      var t = this.minDe.getEdge().getCoordinates();h.isTrue(this.minIndex > 0 && this.minIndex < t.length, "rightmost point expected to be interior vertex of edge");var e = t[this.minIndex - 1],
          n = t[this.minIndex + 1],
          i = oe.computeOrientation(this.minCoord, n, e),
          r = !1;e.y < this.minCoord.y && n.y < this.minCoord.y && i === oe.COUNTERCLOCKWISE ? r = !0 : e.y > this.minCoord.y && n.y > this.minCoord.y && i === oe.CLOCKWISE && (r = !0), r && (this.minIndex = this.minIndex - 1);
    }, getRightmostSideOfSegment: function getRightmostSideOfSegment(t, e) {
      var n = t.getEdge(),
          i = n.getCoordinates();if (e < 0 || e + 1 >= i.length) return -1;if (i[e].y === i[e + 1].y) return -1;var r = an.LEFT;return i[e].y < i[e + 1].y && (r = an.RIGHT), r;
    }, getEdge: function getEdge() {
      return this.orientedDe;
    }, checkForRightmostCoordinate: function checkForRightmostCoordinate(t) {
      for (var e = t.getEdge().getCoordinates(), n = 0; n < e.length - 1; n++) {
        (null === this.minCoord || e[n].x > this.minCoord.x) && (this.minDe = t, this.minIndex = n, this.minCoord = e[n]);
      }
    }, findRightmostEdgeAtNode: function findRightmostEdgeAtNode() {
      var t = this.minDe.getNode(),
          e = t.getEdges();this.minDe = e.getRightmostEdge(), this.minDe.isForward() || (this.minDe = this.minDe.getSym(), this.minIndex = this.minDe.getEdge().getCoordinates().length - 1);
    }, findEdge: function findEdge(t) {
      for (var e = t.iterator(); e.hasNext();) {
        var n = e.next();n.isForward() && this.checkForRightmostCoordinate(n);
      }h.isTrue(0 !== this.minIndex || this.minCoord.equals(this.minDe.getCoordinate()), "inconsistency in rightmost processing"), 0 === this.minIndex ? this.findRightmostEdgeAtNode() : this.findRightmostEdgeAtVertex(), this.orientedDe = this.minDe, this.getRightmostSide(this.minDe, this.minIndex) === an.LEFT && (this.orientedDe = this.minDe.getSym());
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return Hi;
    } }), Wi.prototype.addLast = function (t) {
    this.array_.push(t);
  }, Wi.prototype.removeFirst = function () {
    return this.array_.shift();
  }, Wi.prototype.isEmpty = function () {
    return 0 === this.array_.length;
  }, Ws(ji.prototype, { clearVisitedEdges: function clearVisitedEdges() {
      for (var t = this.dirEdgeList.iterator(); t.hasNext();) {
        t.next().setVisited(!1);
      }
    }, getRightmostCoordinate: function getRightmostCoordinate() {
      return this.rightMostCoord;
    }, computeNodeDepth: function computeNodeDepth(t) {
      for (var e = null, n = t.getEdges().iterator(); n.hasNext();) {
        var i = n.next();if (i.isVisited() || i.getSym().isVisited()) {
          e = i;break;
        }
      }if (null === e) throw new tn("unable to find edge to compute depths at " + t.getCoordinate());t.getEdges().computeDepths(e);for (var n = t.getEdges().iterator(); n.hasNext();) {
        var i = n.next();i.setVisited(!0), this.copySymDepths(i);
      }
    }, computeDepth: function computeDepth(t) {
      this.clearVisitedEdges();var e = this.finder.getEdge();e.getNode(), e.getLabel();e.setEdgeDepths(an.RIGHT, t), this.copySymDepths(e), this.computeDepths(e);
    }, create: function create(t) {
      this.addReachable(t), this.finder.findEdge(this.dirEdgeList), this.rightMostCoord = this.finder.getCoordinate();
    }, findResultEdges: function findResultEdges() {
      for (var t = this.dirEdgeList.iterator(); t.hasNext();) {
        var e = t.next();e.getDepth(an.RIGHT) >= 1 && e.getDepth(an.LEFT) <= 0 && !e.isInteriorAreaEdge() && e.setInResult(!0);
      }
    }, computeDepths: function computeDepths(t) {
      var e = new K(),
          n = new Wi(),
          i = t.getNode();for (n.addLast(i), e.add(i), t.setVisited(!0); !n.isEmpty();) {
        var r = n.removeFirst();e.add(r), this.computeNodeDepth(r);for (var s = r.getEdges().iterator(); s.hasNext();) {
          var o = s.next(),
              a = o.getSym();if (!a.isVisited()) {
            var u = a.getNode();e.contains(u) || (n.addLast(u), e.add(u));
          }
        }
      }
    }, compareTo: function compareTo(t) {
      var e = t;return this.rightMostCoord.x < e.rightMostCoord.x ? -1 : this.rightMostCoord.x > e.rightMostCoord.x ? 1 : 0;
    }, getEnvelope: function getEnvelope() {
      if (null === this.env) {
        for (var t = new I(), e = this.dirEdgeList.iterator(); e.hasNext();) {
          for (var n = e.next(), i = n.getEdge().getCoordinates(), r = 0; r < i.length - 1; r++) {
            t.expandToInclude(i[r]);
          }
        }this.env = t;
      }return this.env;
    }, addReachable: function addReachable(t) {
      var e = new ce();for (e.add(t); !e.empty();) {
        var n = e.pop();this.add(n, e);
      }
    }, copySymDepths: function copySymDepths(t) {
      var e = t.getSym();e.setDepth(an.LEFT, t.getDepth(an.RIGHT)), e.setDepth(an.RIGHT, t.getDepth(an.LEFT));
    }, add: function add(t, e) {
      t.setVisited(!0), this.nodes.add(t);for (var n = t.getEdges().iterator(); n.hasNext();) {
        var i = n.next();this.dirEdgeList.add(i);var r = i.getSym(),
            s = r.getNode();s.isVisited() || e.push(s);
      }
    }, getNodes: function getNodes() {
      return this.nodes;
    }, getDirectedEdges: function getDirectedEdges() {
      return this.dirEdgeList;
    }, interfaces_: function interfaces_() {
      return [r];
    }, getClass: function getClass() {
      return ji;
    } }), Ws(Ki.prototype, { isDeletable: function isDeletable(t, e, n, i) {
      var r = this.inputLine[t],
          s = this.inputLine[e],
          o = this.inputLine[n];return !!this.isConcave(r, s, o) && !!this.isShallow(r, s, o, i) && this.isShallowSampled(r, s, t, n, i);
    }, deleteShallowConcavities: function deleteShallowConcavities() {
      for (var t = 1, e = (this.inputLine.length, this.findNextNonDeletedIndex(t)), n = this.findNextNonDeletedIndex(e), i = !1; n < this.inputLine.length;) {
        var r = !1;this.isDeletable(t, e, n, this.distanceTol) && (this.isDeleted[e] = Ki.DELETE, r = !0, i = !0), t = r ? n : e, e = this.findNextNonDeletedIndex(t), n = this.findNextNonDeletedIndex(e);
      }return i;
    }, isShallowConcavity: function isShallowConcavity(t, e, n, i) {
      return oe.computeOrientation(t, e, n) === this.angleOrientation && oe.distancePointLine(e, t, n) < i;
    }, isShallowSampled: function isShallowSampled(t, e, n, i, r) {
      var s = Math.trunc((i - n) / Ki.NUM_PTS_TO_CHECK);s <= 0 && (s = 1);for (var o = n; o < i; o += s) {
        if (!this.isShallow(t, e, this.inputLine[o], r)) return !1;
      }return !0;
    }, isConcave: function isConcave(t, e, n) {
      return oe.computeOrientation(t, e, n) === this.angleOrientation;
    }, simplify: function simplify(t) {
      this.distanceTol = Math.abs(t), t < 0 && (this.angleOrientation = oe.CLOCKWISE), this.isDeleted = new Array(this.inputLine.length).fill(null);var e = !1;do {
        e = this.deleteShallowConcavities();
      } while (e);return this.collapseLine();
    }, findNextNonDeletedIndex: function findNextNonDeletedIndex(t) {
      for (var e = t + 1; e < this.inputLine.length && this.isDeleted[e] === Ki.DELETE;) {
        e++;
      }return e;
    }, isShallow: function isShallow(t, e, n, i) {
      return oe.distancePointLine(e, t, n) < i;
    }, collapseLine: function collapseLine() {
      for (var t = new E(), e = 0; e < this.inputLine.length; e++) {
        this.isDeleted[e] !== Ki.DELETE && t.add(this.inputLine[e]);
      }return t.toCoordinateArray();
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return Ki;
    } }), Ki.simplify = function (t, e) {
    return new Ki(t).simplify(e);
  }, Ki.INIT = 0, Ki.DELETE = 1, Ki.KEEP = 1, Ki.NUM_PTS_TO_CHECK = 10, Ws(Zi.prototype, { getCoordinates: function getCoordinates() {
      return this.ptList.toArray(Zi.COORDINATE_ARRAY_TYPE);
    }, setPrecisionModel: function setPrecisionModel(t) {
      this.precisionModel = t;
    }, addPt: function addPt(t) {
      var e = new c(t);if (this.precisionModel.makePrecise(e), this.isRedundant(e)) return null;this.ptList.add(e);
    }, reverse: function reverse() {}, addPts: function addPts(t, e) {
      if (e) for (var n = 0; n < t.length; n++) {
        this.addPt(t[n]);
      } else for (var n = t.length - 1; n >= 0; n--) {
        this.addPt(t[n]);
      }
    }, isRedundant: function isRedundant(t) {
      if (this.ptList.size() < 1) return !1;var e = this.ptList.get(this.ptList.size() - 1);return t.distance(e) < this.minimimVertexDistance;
    }, toString: function toString() {
      return new $t().createLineString(this.getCoordinates()).toString();
    }, closeRing: function closeRing() {
      if (this.ptList.size() < 1) return null;var t = new c(this.ptList.get(0)),
          e = this.ptList.get(this.ptList.size() - 1);if (this.ptList.size() >= 2 && this.ptList.get(this.ptList.size() - 2), t.equals(e)) return null;this.ptList.add(t);
    }, setMinimumVertexDistance: function setMinimumVertexDistance(t) {
      this.minimimVertexDistance = t;
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return Zi;
    } }), Zi.COORDINATE_ARRAY_TYPE = new Array(0).fill(null), Ws(Qi.prototype, { addNextSegment: function addNextSegment(t, e) {
      if (this.s0 = this.s1, this.s1 = this.s2, this.s2 = t, this.seg0.setCoordinates(this.s0, this.s1), this.computeOffsetSegment(this.seg0, this.side, this.distance, this.offset0), this.seg1.setCoordinates(this.s1, this.s2), this.computeOffsetSegment(this.seg1, this.side, this.distance, this.offset1), this.s1.equals(this.s2)) return null;var n = oe.computeOrientation(this.s0, this.s1, this.s2),
          i = n === oe.CLOCKWISE && this.side === an.LEFT || n === oe.COUNTERCLOCKWISE && this.side === an.RIGHT;0 === n ? this.addCollinear(e) : i ? this.addOutsideTurn(n, e) : this.addInsideTurn(n, e);
    }, addLineEndCap: function addLineEndCap(t, e) {
      var n = new ae(t, e),
          i = new ae();this.computeOffsetSegment(n, an.LEFT, this.distance, i);var r = new ae();this.computeOffsetSegment(n, an.RIGHT, this.distance, r);var s = e.x - t.x,
          o = e.y - t.y,
          a = Math.atan2(o, s);switch (this.bufParams.getEndCapStyle()) {case Xi.CAP_ROUND:
          this.segList.addPt(i.p1), this.addFilletArc(e, a + Math.PI / 2, a - Math.PI / 2, oe.CLOCKWISE, this.distance), this.segList.addPt(r.p1);break;case Xi.CAP_FLAT:
          this.segList.addPt(i.p1), this.segList.addPt(r.p1);break;case Xi.CAP_SQUARE:
          var u = new c();u.x = Math.abs(this.distance) * Math.cos(a), u.y = Math.abs(this.distance) * Math.sin(a);var l = new c(i.p1.x + u.x, i.p1.y + u.y),
              h = new c(r.p1.x + u.x, r.p1.y + u.y);this.segList.addPt(l), this.segList.addPt(h);}
    }, getCoordinates: function getCoordinates() {
      return this.segList.getCoordinates();
    }, addMitreJoin: function addMitreJoin(t, e, n, i) {
      var r = !0,
          s = null;try {
        s = M.intersection(e.p0, e.p1, n.p0, n.p1);(i <= 0 ? 1 : s.distance(t) / Math.abs(i)) > this.bufParams.getMitreLimit() && (r = !1);
      } catch (t) {
        if (!(t instanceof C)) throw t;s = new c(0, 0), r = !1;
      } finally {}r ? this.segList.addPt(s) : this.addLimitedMitreJoin(e, n, i, this.bufParams.getMitreLimit());
    }, addFilletCorner: function addFilletCorner(t, e, n, i, r) {
      var s = e.x - t.x,
          o = e.y - t.y,
          a = Math.atan2(o, s),
          u = n.x - t.x,
          l = n.y - t.y,
          h = Math.atan2(l, u);i === oe.CLOCKWISE ? a <= h && (a += 2 * Math.PI) : a >= h && (a -= 2 * Math.PI), this.segList.addPt(e), this.addFilletArc(t, a, h, i, r), this.segList.addPt(n);
    }, addOutsideTurn: function addOutsideTurn(t, e) {
      if (this.offset0.p1.distance(this.offset1.p0) < this.distance * Qi.OFFSET_SEGMENT_SEPARATION_FACTOR) return this.segList.addPt(this.offset0.p1), null;this.bufParams.getJoinStyle() === Xi.JOIN_MITRE ? this.addMitreJoin(this.s1, this.offset0, this.offset1, this.distance) : this.bufParams.getJoinStyle() === Xi.JOIN_BEVEL ? this.addBevelJoin(this.offset0, this.offset1) : (e && this.segList.addPt(this.offset0.p1), this.addFilletCorner(this.s1, this.offset0.p1, this.offset1.p0, t, this.distance), this.segList.addPt(this.offset1.p0));
    }, createSquare: function createSquare(t) {
      this.segList.addPt(new c(t.x + this.distance, t.y + this.distance)), this.segList.addPt(new c(t.x + this.distance, t.y - this.distance)), this.segList.addPt(new c(t.x - this.distance, t.y - this.distance)), this.segList.addPt(new c(t.x - this.distance, t.y + this.distance)), this.segList.closeRing();
    }, addSegments: function addSegments(t, e) {
      this.segList.addPts(t, e);
    }, addFirstSegment: function addFirstSegment() {
      this.segList.addPt(this.offset1.p0);
    }, addLastSegment: function addLastSegment() {
      this.segList.addPt(this.offset1.p1);
    }, initSideSegments: function initSideSegments(t, e, n) {
      this.s1 = t, this.s2 = e, this.side = n, this.seg1.setCoordinates(t, e), this.computeOffsetSegment(this.seg1, n, this.distance, this.offset1);
    }, addLimitedMitreJoin: function addLimitedMitreJoin(t, e, n, i) {
      var r = this.seg0.p1,
          s = xi.angle(r, this.seg0.p0),
          o = (xi.angle(r, this.seg1.p1), xi.angleBetweenOriented(this.seg0.p0, r, this.seg1.p1)),
          a = o / 2,
          u = xi.normalize(s + a),
          l = xi.normalize(u + Math.PI),
          h = i * n,
          f = h * Math.abs(Math.sin(a)),
          g = n - f,
          d = r.x + h * Math.cos(l),
          p = r.y + h * Math.sin(l),
          m = new c(d, p),
          v = new ae(r, m),
          y = v.pointAlongOffset(1, g),
          x = v.pointAlongOffset(1, -g);this.side === an.LEFT ? (this.segList.addPt(y), this.segList.addPt(x)) : (this.segList.addPt(x), this.segList.addPt(y));
    }, computeOffsetSegment: function computeOffsetSegment(t, e, n, i) {
      var r = e === an.LEFT ? 1 : -1,
          s = t.p1.x - t.p0.x,
          o = t.p1.y - t.p0.y,
          a = Math.sqrt(s * s + o * o),
          u = r * n * s / a,
          l = r * n * o / a;i.p0.x = t.p0.x - l, i.p0.y = t.p0.y + u, i.p1.x = t.p1.x - l, i.p1.y = t.p1.y + u;
    }, addFilletArc: function addFilletArc(t, e, n, i, r) {
      var s = i === oe.CLOCKWISE ? -1 : 1,
          o = Math.abs(e - n),
          a = Math.trunc(o / this.filletAngleQuantum + .5);if (a < 1) return null;var u = null,
          l = null;u = 0, l = o / a;for (var h = u, f = new c(); h < o;) {
        var g = e + s * h;f.x = t.x + r * Math.cos(g), f.y = t.y + r * Math.sin(g), this.segList.addPt(f), h += l;
      }
    }, addInsideTurn: function addInsideTurn(t, e) {
      if (this.li.computeIntersection(this.offset0.p0, this.offset0.p1, this.offset1.p0, this.offset1.p1), this.li.hasIntersection()) this.segList.addPt(this.li.getIntersection(0));else if (this._hasNarrowConcaveAngle = !0, this.offset0.p1.distance(this.offset1.p0) < this.distance * Qi.INSIDE_TURN_VERTEX_SNAP_DISTANCE_FACTOR) this.segList.addPt(this.offset0.p1);else {
        if (this.segList.addPt(this.offset0.p1), this.closingSegLengthFactor > 0) {
          var n = new c((this.closingSegLengthFactor * this.offset0.p1.x + this.s1.x) / (this.closingSegLengthFactor + 1), (this.closingSegLengthFactor * this.offset0.p1.y + this.s1.y) / (this.closingSegLengthFactor + 1));this.segList.addPt(n);var i = new c((this.closingSegLengthFactor * this.offset1.p0.x + this.s1.x) / (this.closingSegLengthFactor + 1), (this.closingSegLengthFactor * this.offset1.p0.y + this.s1.y) / (this.closingSegLengthFactor + 1));this.segList.addPt(i);
        } else this.segList.addPt(this.s1);this.segList.addPt(this.offset1.p0);
      }
    }, createCircle: function createCircle(t) {
      var e = new c(t.x + this.distance, t.y);this.segList.addPt(e), this.addFilletArc(t, 0, 2 * Math.PI, -1, this.distance), this.segList.closeRing();
    }, addBevelJoin: function addBevelJoin(t, e) {
      this.segList.addPt(t.p1), this.segList.addPt(e.p0);
    }, init: function init(t) {
      this.distance = t, this.maxCurveSegmentError = t * (1 - Math.cos(this.filletAngleQuantum / 2)), this.segList = new Zi(), this.segList.setPrecisionModel(this.precisionModel), this.segList.setMinimumVertexDistance(t * Qi.CURVE_VERTEX_SNAP_DISTANCE_FACTOR);
    }, addCollinear: function addCollinear(t) {
      this.li.computeIntersection(this.s0, this.s1, this.s1, this.s2), this.li.getIntersectionNum() >= 2 && (this.bufParams.getJoinStyle() === Xi.JOIN_BEVEL || this.bufParams.getJoinStyle() === Xi.JOIN_MITRE ? (t && this.segList.addPt(this.offset0.p1), this.segList.addPt(this.offset1.p0)) : this.addFilletCorner(this.s1, this.offset0.p1, this.offset1.p0, oe.CLOCKWISE, this.distance));
    }, closeRing: function closeRing() {
      this.segList.closeRing();
    }, hasNarrowConcaveAngle: function hasNarrowConcaveAngle() {
      return this._hasNarrowConcaveAngle;
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return Qi;
    } }), Qi.OFFSET_SEGMENT_SEPARATION_FACTOR = .001, Qi.INSIDE_TURN_VERTEX_SNAP_DISTANCE_FACTOR = .001, Qi.CURVE_VERTEX_SNAP_DISTANCE_FACTOR = 1e-6, Qi.MAX_CLOSING_SEG_LEN_FACTOR = 80, Ws(Ji.prototype, { getOffsetCurve: function getOffsetCurve(t, e) {
      if (this.distance = e, 0 === e) return null;var n = e < 0,
          i = Math.abs(e),
          r = this.getSegGen(i);t.length <= 1 ? this.computePointCurve(t[0], r) : this.computeOffsetCurve(t, n, r);var s = r.getCoordinates();return n && Y.reverse(s), s;
    }, computeSingleSidedBufferCurve: function computeSingleSidedBufferCurve(t, e, n) {
      var i = this.simplifyTolerance(this.distance);if (e) {
        n.addSegments(t, !0);var r = Ki.simplify(t, -i),
            s = r.length - 1;n.initSideSegments(r[s], r[s - 1], an.LEFT), n.addFirstSegment();for (var o = s - 2; o >= 0; o--) {
          n.addNextSegment(r[o], !0);
        }
      } else {
        n.addSegments(t, !1);var a = Ki.simplify(t, i),
            u = a.length - 1;n.initSideSegments(a[0], a[1], an.LEFT), n.addFirstSegment();for (var o = 2; o <= u; o++) {
          n.addNextSegment(a[o], !0);
        }
      }n.addLastSegment(), n.closeRing();
    }, computeRingBufferCurve: function computeRingBufferCurve(t, e, n) {
      var i = this.simplifyTolerance(this.distance);e === an.RIGHT && (i = -i);var r = Ki.simplify(t, i),
          s = r.length - 1;n.initSideSegments(r[s - 1], r[0], e);for (var o = 1; o <= s; o++) {
        var a = 1 !== o;n.addNextSegment(r[o], a);
      }n.closeRing();
    }, computeLineBufferCurve: function computeLineBufferCurve(t, e) {
      var n = this.simplifyTolerance(this.distance),
          i = Ki.simplify(t, n),
          r = i.length - 1;e.initSideSegments(i[0], i[1], an.LEFT);for (var s = 2; s <= r; s++) {
        e.addNextSegment(i[s], !0);
      }e.addLastSegment(), e.addLineEndCap(i[r - 1], i[r]);var o = Ki.simplify(t, -n),
          a = o.length - 1;e.initSideSegments(o[a], o[a - 1], an.LEFT);for (var s = a - 2; s >= 0; s--) {
        e.addNextSegment(o[s], !0);
      }e.addLastSegment(), e.addLineEndCap(o[1], o[0]), e.closeRing();
    }, computePointCurve: function computePointCurve(t, e) {
      switch (this.bufParams.getEndCapStyle()) {case Xi.CAP_ROUND:
          e.createCircle(t);break;case Xi.CAP_SQUARE:
          e.createSquare(t);}
    }, getLineCurve: function getLineCurve(t, e) {
      if (this.distance = e, e < 0 && !this.bufParams.isSingleSided()) return null;if (0 === e) return null;var n = Math.abs(e),
          i = this.getSegGen(n);if (t.length <= 1) this.computePointCurve(t[0], i);else if (this.bufParams.isSingleSided()) {
        var r = e < 0;this.computeSingleSidedBufferCurve(t, r, i);
      } else this.computeLineBufferCurve(t, i);return i.getCoordinates();
    }, getBufferParameters: function getBufferParameters() {
      return this.bufParams;
    }, simplifyTolerance: function simplifyTolerance(t) {
      return t * this.bufParams.getSimplifyFactor();
    }, getRingCurve: function getRingCurve(t, e, n) {
      if (this.distance = n, t.length <= 2) return this.getLineCurve(t, n);if (0 === n) return Ji.copyCoordinates(t);var i = this.getSegGen(n);return this.computeRingBufferCurve(t, e, i), i.getCoordinates();
    }, computeOffsetCurve: function computeOffsetCurve(t, e, n) {
      var i = this.simplifyTolerance(this.distance);if (e) {
        var r = Ki.simplify(t, -i),
            s = r.length - 1;n.initSideSegments(r[s], r[s - 1], an.LEFT), n.addFirstSegment();for (var o = s - 2; o >= 0; o--) {
          n.addNextSegment(r[o], !0);
        }
      } else {
        var a = Ki.simplify(t, i),
            u = a.length - 1;n.initSideSegments(a[0], a[1], an.LEFT), n.addFirstSegment();for (var o = 2; o <= u; o++) {
          n.addNextSegment(a[o], !0);
        }
      }n.addLastSegment();
    }, getSegGen: function getSegGen(t) {
      return new Qi(this.precisionModel, this.bufParams, t);
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return Ji;
    } }), Ji.copyCoordinates = function (t) {
    for (var e = new Array(t.length).fill(null), n = 0; n < e.length; n++) {
      e[n] = new c(t[n]);
    }return e;
  }, Ws($i.prototype, { findStabbedSegments: function findStabbedSegments() {
      if (1 === arguments.length) {
        for (var t = arguments[0], e = new x(), n = this.subgraphs.iterator(); n.hasNext();) {
          var i = n.next(),
              r = i.getEnvelope();t.y < r.getMinY() || t.y > r.getMaxY() || this.findStabbedSegments(t, i.getDirectedEdges(), e);
        }return e;
      }if (3 === arguments.length) if (Zs(arguments[2], m) && arguments[0] instanceof c && arguments[1] instanceof vn) for (var s = arguments[0], o = arguments[1], a = arguments[2], u = o.getEdge().getCoordinates(), n = 0; n < u.length - 1; n++) {
        this.seg.p0 = u[n], this.seg.p1 = u[n + 1], this.seg.p0.y > this.seg.p1.y && this.seg.reverse();var l = Math.max(this.seg.p0.x, this.seg.p1.x);if (!(l < s.x) && !(this.seg.isHorizontal() || s.y < this.seg.p0.y || s.y > this.seg.p1.y || oe.computeOrientation(this.seg.p0, this.seg.p1, s) === oe.RIGHT)) {
          var h = o.getDepth(an.LEFT);this.seg.p0.equals(u[n]) || (h = o.getDepth(an.RIGHT));var f = new tr(this.seg, h);a.add(f);
        }
      } else if (Zs(arguments[2], m) && arguments[0] instanceof c && Zs(arguments[1], m)) for (var g = arguments[0], d = arguments[1], p = arguments[2], n = d.iterator(); n.hasNext();) {
        var v = n.next();v.isForward() && this.findStabbedSegments(g, v, p);
      }
    }, getDepth: function getDepth(t) {
      var e = this.findStabbedSegments(t);return 0 === e.size() ? 0 : uo.min(e).leftDepth;
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return $i;
    } }), Ws(tr.prototype, { compareTo: function compareTo(t) {
      var e = t;if (this.upwardSeg.minX() >= e.upwardSeg.maxX()) return 1;if (this.upwardSeg.maxX() <= e.upwardSeg.minX()) return -1;var n = this.upwardSeg.orientationIndex(e.upwardSeg);return 0 !== n ? n : (n = -1 * e.upwardSeg.orientationIndex(this.upwardSeg), 0 !== n ? n : this.upwardSeg.compareTo(e.upwardSeg));
    }, compareX: function compareX(t, e) {
      var n = t.p0.compareTo(e.p0);return 0 !== n ? n : t.p1.compareTo(e.p1);
    }, toString: function toString() {
      return this.upwardSeg.toString();
    }, interfaces_: function interfaces_() {
      return [r];
    }, getClass: function getClass() {
      return tr;
    } }), $i.DepthSegment = tr, Ws(er.prototype, { addPoint: function addPoint(t) {
      if (this.distance <= 0) return null;var e = t.getCoordinates(),
          n = this.curveBuilder.getLineCurve(e, this.distance);this.addCurve(n, S.EXTERIOR, S.INTERIOR);
    }, addPolygon: function addPolygon(t) {
      var e = this.distance,
          n = an.LEFT;this.distance < 0 && (e = -this.distance, n = an.RIGHT);var i = t.getExteriorRing(),
          r = Y.removeRepeatedPoints(i.getCoordinates());if (this.distance < 0 && this.isErodedCompletely(i, this.distance)) return null;if (this.distance <= 0 && r.length < 3) return null;this.addPolygonRing(r, e, n, S.EXTERIOR, S.INTERIOR);for (var s = 0; s < t.getNumInteriorRing(); s++) {
        var o = t.getInteriorRingN(s),
            a = Y.removeRepeatedPoints(o.getCoordinates());this.distance > 0 && this.isErodedCompletely(o, -this.distance) || this.addPolygonRing(a, e, an.opposite(n), S.INTERIOR, S.EXTERIOR);
      }
    }, isTriangleErodedCompletely: function isTriangleErodedCompletely(t, e) {
      var n = new Ei(t[0], t[1], t[2]),
          i = n.inCentre();return oe.distancePointLine(i, n.p0, n.p1) < Math.abs(e);
    }, addLineString: function addLineString(t) {
      if (this.distance <= 0 && !this.curveBuilder.getBufferParameters().isSingleSided()) return null;var e = Y.removeRepeatedPoints(t.getCoordinates()),
          n = this.curveBuilder.getLineCurve(e, this.distance);this.addCurve(n, S.EXTERIOR, S.INTERIOR);
    }, addCurve: function addCurve(t, e, n) {
      if (null === t || t.length < 2) return null;var i = new Xe(t, new ln(0, S.BOUNDARY, e, n));this.curveList.add(i);
    }, getCurves: function getCurves() {
      return this.add(this.inputGeom), this.curveList;
    }, addPolygonRing: function addPolygonRing(t, e, n, i, r) {
      if (0 === e && t.length < Rt.MINIMUM_VALID_SIZE) return null;var s = i,
          o = r;t.length >= Rt.MINIMUM_VALID_SIZE && oe.isCCW(t) && (s = r, o = i, n = an.opposite(n));var a = this.curveBuilder.getRingCurve(t, n, e);this.addCurve(a, s, o);
    }, add: function add(t) {
      if (t.isEmpty()) return null;if (t instanceof wt) this.addPolygon(t);else if (t instanceof It) this.addLineString(t);else if (t instanceof Ct) this.addPoint(t);else if (t instanceof Lt) this.addCollection(t);else if (t instanceof ht) this.addCollection(t);else if (t instanceof Tt) this.addCollection(t);else {
        if (!(t instanceof lt)) throw new UnsupportedOperationException(t.getClass().getName());this.addCollection(t);
      }
    }, isErodedCompletely: function isErodedCompletely(t, e) {
      var n = t.getCoordinates();if (n.length < 4) return e < 0;if (4 === n.length) return this.isTriangleErodedCompletely(n, e);var i = t.getEnvelopeInternal(),
          r = Math.min(i.getHeight(), i.getWidth());return e < 0 && 2 * Math.abs(e) > r;
    }, addCollection: function addCollection(t) {
      for (var e = 0; e < t.getNumGeometries(); e++) {
        var n = t.getGeometryN(e);this.add(n);
      }
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return er;
    } }), Ws(nr.prototype, { isTrivialIntersection: function isTrivialIntersection(t, e, n, i) {
      if (t === n && 1 === this.li.getIntersectionNum()) {
        if (nr.isAdjacentSegments(e, i)) return !0;if (t.isClosed()) {
          var r = t.size() - 1;if (0 === e && i === r || 0 === i && e === r) return !0;
        }
      }return !1;
    }, getProperIntersectionPoint: function getProperIntersectionPoint() {
      return this.properIntersectionPoint;
    }, hasProperInteriorIntersection: function hasProperInteriorIntersection() {
      return this.hasProperInterior;
    }, getLineIntersector: function getLineIntersector() {
      return this.li;
    }, hasProperIntersection: function hasProperIntersection() {
      return this.hasProper;
    }, processIntersections: function processIntersections(t, e, n, i) {
      if (t === n && e === i) return null;this.numTests++;var r = t.getCoordinates()[e],
          s = t.getCoordinates()[e + 1],
          o = n.getCoordinates()[i],
          a = n.getCoordinates()[i + 1];this.li.computeIntersection(r, s, o, a), this.li.hasIntersection() && (this.numIntersections++, this.li.isInteriorIntersection() && (this.numInteriorIntersections++, this.hasInterior = !0), this.isTrivialIntersection(t, e, n, i) || (this._hasIntersection = !0, t.addIntersections(this.li, e, 0), n.addIntersections(this.li, i, 1), this.li.isProper() && (this.numProperIntersections++, this.hasProper = !0, this.hasProperInterior = !0)));
    }, hasIntersection: function hasIntersection() {
      return this._hasIntersection;
    }, isDone: function isDone() {
      return !1;
    }, hasInteriorIntersection: function hasInteriorIntersection() {
      return this.hasInterior;
    }, interfaces_: function interfaces_() {
      return [en];
    }, getClass: function getClass() {
      return nr;
    } }), nr.isAdjacentSegments = function (t, e) {
    return 1 === Math.abs(t - e);
  }, Ws(ir.prototype, { setWorkingPrecisionModel: function setWorkingPrecisionModel(t) {
      this.workingPrecisionModel = t;
    }, insertUniqueEdge: function insertUniqueEdge(t) {
      var e = this.edgeList.findEqualEdge(t);if (null !== e) {
        var n = e.getLabel(),
            i = t.getLabel();e.isPointwiseEqual(t) || (i = new ln(t.getLabel()), i.flip()), n.merge(i);var r = ir.depthDelta(i),
            s = e.getDepthDelta(),
            o = s + r;e.setDepthDelta(o);
      } else this.edgeList.add(t), t.setDepthDelta(ir.depthDelta(t.getLabel()));
    }, buildSubgraphs: function buildSubgraphs(t, e) {
      for (var n = new x(), i = t.iterator(); i.hasNext();) {
        var r = i.next(),
            s = r.getRightmostCoordinate(),
            o = new $i(n),
            a = o.getDepth(s);r.computeDepth(a), r.findResultEdges(), n.add(r), e.add(r.getDirectedEdges(), r.getNodes());
      }
    }, createSubgraphs: function createSubgraphs(t) {
      for (var e = new x(), n = t.getNodes().iterator(); n.hasNext();) {
        var i = n.next();if (!i.isVisited()) {
          var r = new ji();r.create(i), e.add(r);
        }
      }return uo.sort(e, uo.reverseOrder()), e;
    }, createEmptyResultGeometry: function createEmptyResultGeometry() {
      return this.geomFact.createPolygon();
    }, getNoder: function getNoder(t) {
      if (null !== this.workingNoder) return this.workingNoder;var e = new Je(),
          n = new ie();return n.setPrecisionModel(t), e.setSegmentIntersector(new nr(n)), e;
    }, buffer: function buffer(t, e) {
      var n = this.workingPrecisionModel;null === n && (n = t.getPrecisionModel()), this.geomFact = t.getFactory();var i = new Ji(n, this.bufParams),
          r = new er(t, e, i),
          s = r.getCurves();if (s.size() <= 0) return this.createEmptyResultGeometry();this.computeNodedEdges(s, n), this.graph = new xn(new Rn()), this.graph.addEdges(this.edgeList.getEdges());var o = this.createSubgraphs(this.graph),
          a = new En(this.geomFact);this.buildSubgraphs(o, a);var u = a.getPolygons();return u.size() <= 0 ? this.createEmptyResultGeometry() : this.geomFact.buildGeometry(u);
    }, computeNodedEdges: function computeNodedEdges(t, e) {
      var n = this.getNoder(e);n.computeNodes(t);for (var i = n.getNodedSubstrings(), r = i.iterator(); r.hasNext();) {
        var s = r.next(),
            o = s.getCoordinates();if (2 !== o.length || !o[0].equals2D(o[1])) {
          var a = s.getData(),
              u = new jn(s.getCoordinates(), new ln(a));this.insertUniqueEdge(u);
        }
      }
    }, setNoder: function setNoder(t) {
      this.workingNoder = t;
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return ir;
    } }), ir.depthDelta = function (t) {
    var e = t.getLocation(0, an.LEFT),
        n = t.getLocation(0, an.RIGHT);return e === S.INTERIOR && n === S.EXTERIOR ? 1 : e === S.EXTERIOR && n === S.INTERIOR ? -1 : 0;
  }, ir.convertSegStrings = function (t) {
    for (var e = new $t(), n = new x(); t.hasNext();) {
      var i = t.next(),
          r = e.createLineString(i.getCoordinates());n.add(r);
    }return e.buildGeometry(n);
  }, Ws(rr.prototype, { checkEndPtVertexIntersections: function checkEndPtVertexIntersections() {
      if (0 === arguments.length) for (var t = this.segStrings.iterator(); t.hasNext();) {
        var e = t.next(),
            n = e.getCoordinates();this.checkEndPtVertexIntersections(n[0], this.segStrings), this.checkEndPtVertexIntersections(n[n.length - 1], this.segStrings);
      } else if (2 === arguments.length) for (var i = arguments[0], r = arguments[1], t = r.iterator(); t.hasNext();) {
        for (var e = t.next(), n = e.getCoordinates(), s = 1; s < n.length - 1; s++) {
          if (n[s].equals(i)) throw new u("found endpt/interior pt intersection at index " + s + " :pt " + i);
        }
      }
    }, checkInteriorIntersections: function checkInteriorIntersections() {
      if (0 === arguments.length) for (var t = this.segStrings.iterator(); t.hasNext();) {
        for (var e = t.next(), n = this.segStrings.iterator(); n.hasNext();) {
          var i = n.next();this.checkInteriorIntersections(e, i);
        }
      } else if (2 === arguments.length) for (var r = arguments[0], s = arguments[1], o = r.getCoordinates(), a = s.getCoordinates(), l = 0; l < o.length - 1; l++) {
        for (var h = 0; h < a.length - 1; h++) {
          this.checkInteriorIntersections(r, l, s, h);
        }
      } else if (4 === arguments.length) {
        var c = arguments[0],
            f = arguments[1],
            g = arguments[2],
            d = arguments[3];if (c === g && f === d) return null;var p = c.getCoordinates()[f],
            m = c.getCoordinates()[f + 1],
            v = g.getCoordinates()[d],
            y = g.getCoordinates()[d + 1];if (this.li.computeIntersection(p, m, v, y), this.li.hasIntersection() && (this.li.isProper() || this.hasInteriorIntersection(this.li, p, m) || this.hasInteriorIntersection(this.li, v, y))) throw new u("found non-noded intersection at " + p + "-" + m + " and " + v + "-" + y);
      }
    }, checkValid: function checkValid() {
      this.checkEndPtVertexIntersections(), this.checkInteriorIntersections(), this.checkCollapses();
    }, checkCollapses: function checkCollapses() {
      if (0 === arguments.length) for (var t = this.segStrings.iterator(); t.hasNext();) {
        var e = t.next();this.checkCollapses(e);
      } else if (1 === arguments.length) for (var n = arguments[0], i = n.getCoordinates(), t = 0; t < i.length - 2; t++) {
        this.checkCollapse(i[t], i[t + 1], i[t + 2]);
      }
    }, hasInteriorIntersection: function hasInteriorIntersection(t, e, n) {
      for (var i = 0; i < t.getIntersectionNum(); i++) {
        var r = t.getIntersection(i);if (!r.equals(e) && !r.equals(n)) return !0;
      }return !1;
    }, checkCollapse: function checkCollapse(t, e, n) {
      if (t.equals(n)) throw new u("found non-noded collapse at " + rr.fact.createLineString([t, e, n]));
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return rr;
    } }), rr.fact = new $t(), Ws(sr.prototype, { intersectsScaled: function intersectsScaled(t, e) {
      var n = Math.min(t.x, e.x),
          i = Math.max(t.x, e.x),
          r = Math.min(t.y, e.y),
          s = Math.max(t.y, e.y),
          o = this.maxx < n || this.minx > i || this.maxy < r || this.miny > s;if (o) return !1;var a = this.intersectsToleranceSquare(t, e);return h.isTrue(!(o && a), "Found bad envelope test"), a;
    }, initCorners: function initCorners(t) {
      this.minx = t.x - .5, this.maxx = t.x + .5, this.miny = t.y - .5, this.maxy = t.y + .5, this.corner[0] = new c(this.maxx, this.maxy), this.corner[1] = new c(this.minx, this.maxy), this.corner[2] = new c(this.minx, this.miny), this.corner[3] = new c(this.maxx, this.miny);
    }, intersects: function intersects(t, e) {
      return 1 === this.scaleFactor ? this.intersectsScaled(t, e) : (this.copyScaled(t, this.p0Scaled), this.copyScaled(e, this.p1Scaled), this.intersectsScaled(this.p0Scaled, this.p1Scaled));
    }, scale: function scale(t) {
      return Math.round(t * this.scaleFactor);
    }, getCoordinate: function getCoordinate() {
      return this.originalPt;
    }, copyScaled: function copyScaled(t, e) {
      e.x = this.scale(t.x), e.y = this.scale(t.y);
    }, getSafeEnvelope: function getSafeEnvelope() {
      if (null === this.safeEnv) {
        var t = sr.SAFE_ENV_EXPANSION_FACTOR / this.scaleFactor;this.safeEnv = new I(this.originalPt.x - t, this.originalPt.x + t, this.originalPt.y - t, this.originalPt.y + t);
      }return this.safeEnv;
    }, intersectsPixelClosure: function intersectsPixelClosure(t, e) {
      return this.li.computeIntersection(t, e, this.corner[0], this.corner[1]), !!this.li.hasIntersection() || (this.li.computeIntersection(t, e, this.corner[1], this.corner[2]), !!this.li.hasIntersection() || (this.li.computeIntersection(t, e, this.corner[2], this.corner[3]), !!this.li.hasIntersection() || (this.li.computeIntersection(t, e, this.corner[3], this.corner[0]), !!this.li.hasIntersection())));
    }, intersectsToleranceSquare: function intersectsToleranceSquare(t, e) {
      var n = !1,
          i = !1;return this.li.computeIntersection(t, e, this.corner[0], this.corner[1]), !!this.li.isProper() || (this.li.computeIntersection(t, e, this.corner[1], this.corner[2]), !!this.li.isProper() || (this.li.hasIntersection() && (n = !0), this.li.computeIntersection(t, e, this.corner[2], this.corner[3]), !!this.li.isProper() || (this.li.hasIntersection() && (i = !0), this.li.computeIntersection(t, e, this.corner[3], this.corner[0]), !!this.li.isProper() || !(!n || !i) || !!t.equals(this.pt) || !!e.equals(this.pt))));
    }, addSnappedNode: function addSnappedNode(t, e) {
      var n = t.getCoordinate(e),
          i = t.getCoordinate(e + 1);return !!this.intersects(n, i) && (t.addIntersection(this.getCoordinate(), e), !0);
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return sr;
    } }), sr.SAFE_ENV_EXPANSION_FACTOR = .75, Ws(or.prototype, { snap: function snap() {
      if (1 === arguments.length) {
        var t = arguments[0];return this.snap(t, null, -1);
      }if (3 === arguments.length) {
        var e = arguments[0],
            n = arguments[1],
            i = arguments[2],
            r = e.getSafeEnvelope(),
            s = new ar(e, n, i);return this.index.query(r, { interfaces_: function interfaces_() {
            return [Oe];
          }, visitItem: function visitItem(t) {
            t.select(r, s);
          } }), s.isNodeAdded();
      }
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return or;
    } }), js(ar, oi), Ws(ar.prototype, { isNodeAdded: function isNodeAdded() {
      return this._isNodeAdded;
    }, select: function select() {
      if (2 !== arguments.length) return oi.prototype.select.apply(this, arguments);var t = arguments[0],
          e = arguments[1],
          n = t.getContext();if (null !== this.parentEdge && n === this.parentEdge && e === this.hotPixelVertexIndex) return null;this._isNodeAdded = this.hotPixel.addSnappedNode(n, e);
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return ar;
    } }), or.HotPixelSnapAction = ar, Ws(ur.prototype, { processIntersections: function processIntersections(t, e, n, i) {
      if (t === n && e === i) return null;var r = t.getCoordinates()[e],
          s = t.getCoordinates()[e + 1],
          o = n.getCoordinates()[i],
          a = n.getCoordinates()[i + 1];if (this.li.computeIntersection(r, s, o, a), this.li.hasIntersection() && this.li.isInteriorIntersection()) {
        for (var u = 0; u < this.li.getIntersectionNum(); u++) {
          this.interiorIntersections.add(this.li.getIntersection(u));
        }t.addIntersections(this.li, e, 0), n.addIntersections(this.li, i, 1);
      }
    }, isDone: function isDone() {
      return !1;
    }, getInteriorIntersections: function getInteriorIntersections() {
      return this.interiorIntersections;
    }, interfaces_: function interfaces_() {
      return [en];
    }, getClass: function getClass() {
      return ur;
    } }), Ws(lr.prototype, { checkCorrectness: function checkCorrectness(t) {
      var e = Xe.getNodedSubstrings(t),
          n = new rr(e);try {
        n.checkValid();
      } catch (t) {
        if (!(t instanceof N)) throw t;t.printStackTrace();
      } finally {}
    }, getNodedSubstrings: function getNodedSubstrings() {
      return Xe.getNodedSubstrings(this.nodedSegStrings);
    }, snapRound: function snapRound(t, e) {
      var n = this.findInteriorIntersections(t, e);this.computeIntersectionSnaps(n), this.computeVertexSnaps(t);
    }, findInteriorIntersections: function findInteriorIntersections(t, e) {
      var n = new ur(e);return this.noder.setSegmentIntersector(n), this.noder.computeNodes(t), n.getInteriorIntersections();
    }, computeVertexSnaps: function computeVertexSnaps() {
      if (Zs(arguments[0], d)) for (var t = arguments[0], e = t.iterator(); e.hasNext();) {
        var n = e.next();this.computeVertexSnaps(n);
      } else if (arguments[0] instanceof Xe) for (var i = arguments[0], r = i.getCoordinates(), s = 0; s < r.length; s++) {
        var o = new sr(r[s], this.scaleFactor, this.li),
            a = this.pointSnapper.snap(o, i, s);a && i.addIntersection(r[s], s);
      }
    }, computeNodes: function computeNodes(t) {
      this.nodedSegStrings = t, this.noder = new Je(), this.pointSnapper = new or(this.noder.getIndex()), this.snapRound(t, this.li);
    }, computeIntersectionSnaps: function computeIntersectionSnaps(t) {
      for (var e = t.iterator(); e.hasNext();) {
        var n = e.next(),
            i = new sr(n, this.scaleFactor, this.li);this.pointSnapper.snap(i);
      }
    }, interfaces_: function interfaces_() {
      return [Ze];
    }, getClass: function getClass() {
      return lr;
    } }), Ws(hr.prototype, { bufferFixedPrecision: function bufferFixedPrecision(t) {
      var e = new ki(new lr(new Qt(1)), t.getScale()),
          n = new ir(this.bufParams);n.setWorkingPrecisionModel(t), n.setNoder(e), this.resultGeometry = n.buffer(this.argGeom, this.distance);
    }, bufferReducedPrecision: function bufferReducedPrecision() {
      if (0 === arguments.length) {
        for (var t = hr.MAX_PRECISION_DIGITS; t >= 0; t--) {
          try {
            this.bufferReducedPrecision(t);
          } catch (t) {
            if (!(t instanceof tn)) throw t;this.saveException = t;
          } finally {}if (null !== this.resultGeometry) return null;
        }throw this.saveException;
      }if (1 === arguments.length) {
        var e = arguments[0],
            n = hr.precisionScaleFactor(this.argGeom, this.distance, e),
            i = new Qt(n);this.bufferFixedPrecision(i);
      }
    }, computeGeometry: function computeGeometry() {
      if (this.bufferOriginalPrecision(), null !== this.resultGeometry) return null;var t = this.argGeom.getFactory().getPrecisionModel();t.getType() === Qt.FIXED ? this.bufferFixedPrecision(t) : this.bufferReducedPrecision();
    }, setQuadrantSegments: function setQuadrantSegments(t) {
      this.bufParams.setQuadrantSegments(t);
    }, bufferOriginalPrecision: function bufferOriginalPrecision() {
      try {
        var t = new ir(this.bufParams);this.resultGeometry = t.buffer(this.argGeom, this.distance);
      } catch (t) {
        if (!(t instanceof u)) throw t;this.saveException = t;
      } finally {}
    }, getResultGeometry: function getResultGeometry(t) {
      return this.distance = t, this.computeGeometry(), this.resultGeometry;
    }, setEndCapStyle: function setEndCapStyle(t) {
      this.bufParams.setEndCapStyle(t);
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return hr;
    } }), hr.bufferOp = function () {
    if (2 === arguments.length) {
      var t = arguments[0],
          e = arguments[1],
          n = new hr(t),
          i = n.getResultGeometry(e);return i;
    }if (3 === arguments.length) {
      if (Number.isInteger(arguments[2]) && arguments[0] instanceof F && "number" == typeof arguments[1]) {
        var r = arguments[0],
            s = arguments[1],
            o = arguments[2],
            a = new hr(r);a.setQuadrantSegments(o);var i = a.getResultGeometry(s);return i;
      }if (arguments[2] instanceof Xi && arguments[0] instanceof F && "number" == typeof arguments[1]) {
        var u = arguments[0],
            l = arguments[1],
            h = arguments[2],
            a = new hr(u, h),
            i = a.getResultGeometry(l);return i;
      }
    } else if (4 === arguments.length) {
      var c = arguments[0],
          f = arguments[1],
          g = arguments[2],
          d = arguments[3],
          a = new hr(c);a.setQuadrantSegments(g), a.setEndCapStyle(d);var i = a.getResultGeometry(f);return i;
    }
  }, hr.precisionScaleFactor = function (t, e, n) {
    var i = t.getEnvelopeInternal(),
        r = w.max(Math.abs(i.getMaxX()), Math.abs(i.getMaxY()), Math.abs(i.getMinX()), Math.abs(i.getMinY())),
        s = e > 0 ? e : 0,
        o = r + 2 * s,
        a = Math.trunc(Math.log(o) / Math.log(10) + 1),
        u = n - a;return Math.pow(10, u);
  }, hr.CAP_ROUND = Xi.CAP_ROUND, hr.CAP_BUTT = Xi.CAP_FLAT, hr.CAP_FLAT = Xi.CAP_FLAT, hr.CAP_SQUARE = Xi.CAP_SQUARE, hr.MAX_PRECISION_DIGITS = 12;var No = Object.freeze({ BufferOp: hr, BufferParameters: Xi });Ws(cr.prototype, { filter: function filter(t) {
      t instanceof wt && this.comps.add(t);
    }, interfaces_: function interfaces_() {
      return [at];
    }, getClass: function getClass() {
      return cr;
    } }), cr.getPolygons = function () {
    if (1 === arguments.length) {
      var t = arguments[0];return cr.getPolygons(t, new x());
    }if (2 === arguments.length) {
      var e = arguments[0],
          n = arguments[1];return e instanceof wt ? n.add(e) : e instanceof lt && e.apply(new cr(n)), n;
    }
  }, Ws(fr.prototype, { isInsideArea: function isInsideArea() {
      return this.segIndex === fr.INSIDE_AREA;
    }, getCoordinate: function getCoordinate() {
      return this.pt;
    }, getGeometryComponent: function getGeometryComponent() {
      return this.component;
    }, getSegmentIndex: function getSegmentIndex() {
      return this.segIndex;
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return fr;
    } }), fr.INSIDE_AREA = -1, Ws(gr.prototype, { filter: function filter(t) {
      t instanceof Ct && this.pts.add(t);
    }, interfaces_: function interfaces_() {
      return [at];
    }, getClass: function getClass() {
      return gr;
    } }), gr.getPoints = function () {
    if (1 === arguments.length) {
      var t = arguments[0];return t instanceof Ct ? uo.singletonList(t) : gr.getPoints(t, new x());
    }if (2 === arguments.length) {
      var e = arguments[0],
          n = arguments[1];return e instanceof Ct ? n.add(e) : e instanceof lt && e.apply(new gr(n)), n;
    }
  }, Ws(dr.prototype, { filter: function filter(t) {
      (t instanceof Ct || t instanceof It || t instanceof wt) && this.locations.add(new fr(t, 0, t.getCoordinate()));
    }, interfaces_: function interfaces_() {
      return [at];
    }, getClass: function getClass() {
      return dr;
    } }), dr.getLocations = function (t) {
    var e = new x();return t.apply(new dr(e)), e;
  }, Ws(pr.prototype, { computeContainmentDistance: function computeContainmentDistance() {
      if (0 === arguments.length) {
        var t = new Array(2).fill(null);if (this.computeContainmentDistance(0, t), this.minDistance <= this.terminateDistance) return null;this.computeContainmentDistance(1, t);
      } else if (2 === arguments.length) {
        var e = arguments[0],
            n = arguments[1],
            i = 1 - e,
            r = cr.getPolygons(this.geom[e]);if (r.size() > 0) {
          var s = dr.getLocations(this.geom[i]);if (this.computeContainmentDistance(s, r, n), this.minDistance <= this.terminateDistance) return this.minDistanceLocation[i] = n[0], this.minDistanceLocation[e] = n[1], null;
        }
      } else if (3 === arguments.length) if (arguments[2] instanceof Array && Zs(arguments[0], m) && Zs(arguments[1], m)) {
        for (var o = arguments[0], a = arguments[1], u = arguments[2], l = 0; l < o.size(); l++) {
          for (var h = o.get(l), c = 0; c < a.size(); c++) {
            if (this.computeContainmentDistance(h, a.get(c), u), this.minDistance <= this.terminateDistance) return null;
          }
        }
      } else if (arguments[2] instanceof Array && arguments[0] instanceof fr && arguments[1] instanceof wt) {
        var f = arguments[0],
            g = arguments[1],
            d = arguments[2],
            p = f.getCoordinate();if (S.EXTERIOR !== this.ptLocator.locate(p, g)) return this.minDistance = 0, d[0] = f, d[1] = new fr(g, p), null;
      }
    }, computeMinDistanceLinesPoints: function computeMinDistanceLinesPoints(t, e, n) {
      for (var i = 0; i < t.size(); i++) {
        for (var r = t.get(i), s = 0; s < e.size(); s++) {
          var o = e.get(s);if (this.computeMinDistance(r, o, n), this.minDistance <= this.terminateDistance) return null;
        }
      }
    }, computeFacetDistance: function computeFacetDistance() {
      var t = new Array(2).fill(null),
          e = qn.getLines(this.geom[0]),
          n = qn.getLines(this.geom[1]),
          i = gr.getPoints(this.geom[0]),
          r = gr.getPoints(this.geom[1]);return this.computeMinDistanceLines(e, n, t), this.updateMinDistance(t, !1), this.minDistance <= this.terminateDistance ? null : (t[0] = null, t[1] = null, this.computeMinDistanceLinesPoints(e, r, t), this.updateMinDistance(t, !1), this.minDistance <= this.terminateDistance ? null : (t[0] = null, t[1] = null, this.computeMinDistanceLinesPoints(n, i, t), this.updateMinDistance(t, !0), this.minDistance <= this.terminateDistance ? null : (t[0] = null, t[1] = null, this.computeMinDistancePoints(i, r, t), void this.updateMinDistance(t, !1))));
    }, nearestLocations: function nearestLocations() {
      return this.computeMinDistance(), this.minDistanceLocation;
    }, updateMinDistance: function updateMinDistance(t, e) {
      if (null === t[0]) return null;e ? (this.minDistanceLocation[0] = t[1], this.minDistanceLocation[1] = t[0]) : (this.minDistanceLocation[0] = t[0], this.minDistanceLocation[1] = t[1]);
    }, nearestPoints: function nearestPoints() {
      return this.computeMinDistance(), [this.minDistanceLocation[0].getCoordinate(), this.minDistanceLocation[1].getCoordinate()];
    }, computeMinDistance: function computeMinDistance() {
      if (0 === arguments.length) {
        if (null !== this.minDistanceLocation) return null;if (this.minDistanceLocation = new Array(2).fill(null), this.computeContainmentDistance(), this.minDistance <= this.terminateDistance) return null;this.computeFacetDistance();
      } else if (3 === arguments.length) if (arguments[2] instanceof Array && arguments[0] instanceof It && arguments[1] instanceof Ct) {
        var t = arguments[0],
            e = arguments[1],
            n = arguments[2];if (t.getEnvelopeInternal().distance(e.getEnvelopeInternal()) > this.minDistance) return null;for (var i = t.getCoordinates(), r = e.getCoordinate(), s = 0; s < i.length - 1; s++) {
          var o = oe.distancePointLine(r, i[s], i[s + 1]);if (o < this.minDistance) {
            this.minDistance = o;var a = new ae(i[s], i[s + 1]),
                u = a.closestPoint(r);n[0] = new fr(t, s, u), n[1] = new fr(e, 0, r);
          }if (this.minDistance <= this.terminateDistance) return null;
        }
      } else if (arguments[2] instanceof Array && arguments[0] instanceof It && arguments[1] instanceof It) {
        var l = arguments[0],
            h = arguments[1],
            c = arguments[2];if (l.getEnvelopeInternal().distance(h.getEnvelopeInternal()) > this.minDistance) return null;for (var i = l.getCoordinates(), f = h.getCoordinates(), s = 0; s < i.length - 1; s++) {
          for (var g = 0; g < f.length - 1; g++) {
            var o = oe.distanceLineLine(i[s], i[s + 1], f[g], f[g + 1]);if (o < this.minDistance) {
              this.minDistance = o;var d = new ae(i[s], i[s + 1]),
                  p = new ae(f[g], f[g + 1]),
                  m = d.closestPoints(p);c[0] = new fr(l, s, m[0]), c[1] = new fr(h, g, m[1]);
            }if (this.minDistance <= this.terminateDistance) return null;
          }
        }
      }
    }, computeMinDistancePoints: function computeMinDistancePoints(t, e, n) {
      for (var i = 0; i < t.size(); i++) {
        for (var r = t.get(i), s = 0; s < e.size(); s++) {
          var o = e.get(s),
              a = r.getCoordinate().distance(o.getCoordinate());if (a < this.minDistance && (this.minDistance = a, n[0] = new fr(r, 0, r.getCoordinate()), n[1] = new fr(o, 0, o.getCoordinate())), this.minDistance <= this.terminateDistance) return null;
        }
      }
    }, distance: function distance() {
      if (null === this.geom[0] || null === this.geom[1]) throw new n("null geometries are not supported");return this.geom[0].isEmpty() || this.geom[1].isEmpty() ? 0 : (this.computeMinDistance(), this.minDistance);
    }, computeMinDistanceLines: function computeMinDistanceLines(t, e, n) {
      for (var i = 0; i < t.size(); i++) {
        for (var r = t.get(i), s = 0; s < e.size(); s++) {
          var o = e.get(s);if (this.computeMinDistance(r, o, n), this.minDistance <= this.terminateDistance) return null;
        }
      }
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return pr;
    } }), pr.distance = function (t, e) {
    return new pr(t, e).distance();
  }, pr.isWithinDistance = function (t, e, n) {
    return new pr(t, e, n).distance() <= n;
  }, pr.nearestPoints = function (t, e) {
    return new pr(t, e).nearestPoints();
  };var Co = Object.freeze({ DistanceOp: pr });Ws(mr.prototype, { getCoordinates: function getCoordinates() {
      if (null === this.coordinates) {
        for (var t = 0, e = 0, n = new E(), i = this.directedEdges.iterator(); i.hasNext();) {
          var r = i.next();r.getEdgeDirection() ? t++ : e++, n.add(r.getEdge().getLine().getCoordinates(), !1, r.getEdgeDirection());
        }this.coordinates = n.toCoordinateArray(), e > t && Y.reverse(this.coordinates);
      }return this.coordinates;
    }, toLineString: function toLineString() {
      return this.factory.createLineString(this.getCoordinates());
    }, add: function add(t) {
      this.directedEdges.add(t);
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return mr;
    } }), Ws(vr.prototype, { setVisited: function setVisited(t) {
      this._isVisited = t;
    }, isMarked: function isMarked() {
      return this._isMarked;
    }, setData: function setData(t) {
      this.data = t;
    }, getData: function getData() {
      return this.data;
    }, setMarked: function setMarked(t) {
      this._isMarked = t;
    }, getContext: function getContext() {
      return this.data;
    }, isVisited: function isVisited() {
      return this._isVisited;
    }, setContext: function setContext(t) {
      this.data = t;
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return vr;
    } }), vr.getComponentWithVisitedState = function (t, e) {
    for (; t.hasNext();) {
      var n = t.next();if (n.isVisited() === e) return n;
    }return null;
  }, vr.setVisited = function (t, e) {
    for (; t.hasNext();) {
      t.next().setVisited(e);
    }
  }, vr.setMarked = function (t, e) {
    for (; t.hasNext();) {
      t.next().setMarked(e);
    }
  }, js(yr, vr), Ws(yr.prototype, { isRemoved: function isRemoved() {
      return null === this.parentEdge;
    }, compareDirection: function compareDirection(t) {
      return this.quadrant > t.quadrant ? 1 : this.quadrant < t.quadrant ? -1 : oe.computeOrientation(t.p0, t.p1, this.p1);
    }, getCoordinate: function getCoordinate() {
      return this.from.getCoordinate();
    }, print: function print(t) {
      var e = this.getClass().getName(),
          n = e.lastIndexOf("."),
          i = e.substring(n + 1);t.print("  " + i + ": " + this.p0 + " - " + this.p1 + " " + this.quadrant + ":" + this.angle);
    }, getDirectionPt: function getDirectionPt() {
      return this.p1;
    }, getAngle: function getAngle() {
      return this.angle;
    }, compareTo: function compareTo(t) {
      var e = t;return this.compareDirection(e);
    }, getFromNode: function getFromNode() {
      return this.from;
    }, getSym: function getSym() {
      return this.sym;
    }, setEdge: function setEdge(t) {
      this.parentEdge = t;
    }, remove: function remove() {
      this.sym = null, this.parentEdge = null;
    }, getEdge: function getEdge() {
      return this.parentEdge;
    }, getQuadrant: function getQuadrant() {
      return this.quadrant;
    }, setSym: function setSym(t) {
      this.sym = t;
    }, getToNode: function getToNode() {
      return this.to;
    }, getEdgeDirection: function getEdgeDirection() {
      return this.edgeDirection;
    }, interfaces_: function interfaces_() {
      return [r];
    }, getClass: function getClass() {
      return yr;
    } }), yr.toEdges = function (t) {
    for (var e = new x(), n = t.iterator(); n.hasNext();) {
      e.add(n.next().parentEdge);
    }return e;
  }, js(xr, yr), Ws(xr.prototype, { getNext: function getNext() {
      return 2 !== this.getToNode().getDegree() ? null : this.getToNode().getOutEdges().getEdges().get(0) === this.getSym() ? this.getToNode().getOutEdges().getEdges().get(1) : (h.isTrue(this.getToNode().getOutEdges().getEdges().get(1) === this.getSym()), this.getToNode().getOutEdges().getEdges().get(0));
    },
    interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return xr;
    } }), js(Er, vr), Ws(Er.prototype, { isRemoved: function isRemoved() {
      return null === this.dirEdge;
    }, setDirectedEdges: function setDirectedEdges(t, e) {
      this.dirEdge = [t, e], t.setEdge(this), e.setEdge(this), t.setSym(e), e.setSym(t), t.getFromNode().addOutEdge(t), e.getFromNode().addOutEdge(e);
    }, getDirEdge: function getDirEdge() {
      if (Number.isInteger(arguments[0])) {
        var t = arguments[0];return this.dirEdge[t];
      }if (arguments[0] instanceof Nr) {
        var e = arguments[0];return this.dirEdge[0].getFromNode() === e ? this.dirEdge[0] : this.dirEdge[1].getFromNode() === e ? this.dirEdge[1] : null;
      }
    }, remove: function remove() {
      this.dirEdge = null;
    }, getOppositeNode: function getOppositeNode(t) {
      return this.dirEdge[0].getFromNode() === t ? this.dirEdge[0].getToNode() : this.dirEdge[1].getFromNode() === t ? this.dirEdge[1].getToNode() : null;
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return Er;
    } }), Ws(Ir.prototype, { getNextEdge: function getNextEdge(t) {
      var e = this.getIndex(t);return this.outEdges.get(this.getIndex(e + 1));
    }, getCoordinate: function getCoordinate() {
      var t = this.iterator();return t.hasNext() ? t.next().getCoordinate() : null;
    }, iterator: function iterator() {
      return this.sortEdges(), this.outEdges.iterator();
    }, sortEdges: function sortEdges() {
      this.sorted || (uo.sort(this.outEdges), this.sorted = !0);
    }, remove: function remove(t) {
      this.outEdges.remove(t);
    }, getEdges: function getEdges() {
      return this.sortEdges(), this.outEdges;
    }, getNextCWEdge: function getNextCWEdge(t) {
      var e = this.getIndex(t);return this.outEdges.get(this.getIndex(e - 1));
    }, getIndex: function getIndex() {
      if (arguments[0] instanceof Er) {
        var t = arguments[0];this.sortEdges();for (var e = 0; e < this.outEdges.size(); e++) {
          var n = this.outEdges.get(e);if (n.getEdge() === t) return e;
        }return -1;
      }if (arguments[0] instanceof yr) {
        var i = arguments[0];this.sortEdges();for (var e = 0; e < this.outEdges.size(); e++) {
          var n = this.outEdges.get(e);if (n === i) return e;
        }return -1;
      }if (Number.isInteger(arguments[0])) {
        var r = arguments[0],
            s = r % this.outEdges.size();return s < 0 && (s += this.outEdges.size()), s;
      }
    }, add: function add(t) {
      this.outEdges.add(t), this.sorted = !1;
    }, getDegree: function getDegree() {
      return this.outEdges.size();
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return Ir;
    } }), js(Nr, vr), Ws(Nr.prototype, { isRemoved: function isRemoved() {
      return null === this.pt;
    }, addOutEdge: function addOutEdge(t) {
      this.deStar.add(t);
    }, getCoordinate: function getCoordinate() {
      return this.pt;
    }, getOutEdges: function getOutEdges() {
      return this.deStar;
    }, remove: function remove() {
      if (0 === arguments.length) this.pt = null;else if (1 === arguments.length) {
        var t = arguments[0];this.deStar.remove(t);
      }
    }, getIndex: function getIndex(t) {
      return this.deStar.getIndex(t);
    }, getDegree: function getDegree() {
      return this.deStar.getDegree();
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return Nr;
    } }), Nr.getEdgesBetween = function (t, e) {
    var n = yr.toEdges(t.getOutEdges().getEdges()),
        i = new K(n),
        r = yr.toEdges(e.getOutEdges().getEdges());return i.retainAll(r), i;
  }, js(Cr, Er), Ws(Cr.prototype, { getLine: function getLine() {
      return this.line;
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return Cr;
    } }), Ws(Sr.prototype, { find: function find(t) {
      return this.nodeMap.get(t);
    }, iterator: function iterator() {
      return this.nodeMap.values().iterator();
    }, remove: function remove(t) {
      return this.nodeMap.remove(t);
    }, values: function values() {
      return this.nodeMap.values();
    }, add: function add(t) {
      return this.nodeMap.put(t.getCoordinate(), t), t;
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return Sr;
    } }), Ws(wr.prototype, { findNodesOfDegree: function findNodesOfDegree(t) {
      for (var e = new x(), n = this.nodeIterator(); n.hasNext();) {
        var i = n.next();i.getDegree() === t && e.add(i);
      }return e;
    }, dirEdgeIterator: function dirEdgeIterator() {
      return this.dirEdges.iterator();
    }, edgeIterator: function edgeIterator() {
      return this.edges.iterator();
    }, remove: function remove() {
      if (arguments[0] instanceof Er) {
        var t = arguments[0];this.remove(t.getDirEdge(0)), this.remove(t.getDirEdge(1)), this.edges.remove(t), t.remove();
      } else if (arguments[0] instanceof yr) {
        var e = arguments[0],
            n = e.getSym();null !== n && n.setSym(null), e.getFromNode().remove(e), e.remove(), this.dirEdges.remove(e);
      } else if (arguments[0] instanceof Nr) {
        for (var i = arguments[0], r = i.getOutEdges().getEdges(), s = r.iterator(); s.hasNext();) {
          var o = s.next(),
              n = o.getSym();null !== n && this.remove(n), this.dirEdges.remove(o);var a = o.getEdge();null !== a && this.edges.remove(a);
        }this.nodeMap.remove(i.getCoordinate()), i.remove();
      }
    }, findNode: function findNode(t) {
      return this.nodeMap.find(t);
    }, getEdges: function getEdges() {
      return this.edges;
    }, nodeIterator: function nodeIterator() {
      return this.nodeMap.iterator();
    }, contains: function contains() {
      if (arguments[0] instanceof Er) {
        var t = arguments[0];return this.edges.contains(t);
      }if (arguments[0] instanceof yr) {
        var e = arguments[0];return this.dirEdges.contains(e);
      }
    }, add: function add() {
      if (arguments[0] instanceof Nr) {
        var t = arguments[0];this.nodeMap.add(t);
      } else if (arguments[0] instanceof Er) {
        var e = arguments[0];this.edges.add(e), this.add(e.getDirEdge(0)), this.add(e.getDirEdge(1));
      } else if (arguments[0] instanceof yr) {
        var n = arguments[0];this.dirEdges.add(n);
      }
    }, getNodes: function getNodes() {
      return this.nodeMap.values();
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return wr;
    } }), js(Lr, wr), Ws(Lr.prototype, { addEdge: function addEdge(t) {
      if (t.isEmpty()) return null;var e = Y.removeRepeatedPoints(t.getCoordinates());if (e.length <= 1) return null;var n = e[0],
          i = e[e.length - 1],
          r = this.getNode(n),
          s = this.getNode(i),
          o = new xr(r, s, e[1], !0),
          a = new xr(s, r, e[e.length - 2], !1),
          u = new Cr(t);u.setDirectedEdges(o, a), this.add(u);
    }, getNode: function getNode(t) {
      var e = this.findNode(t);return null === e && (e = new Nr(t), this.add(e)), e;
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return Lr;
    } }), Ws(Rr.prototype, { buildEdgeStringsForUnprocessedNodes: function buildEdgeStringsForUnprocessedNodes() {
      for (var t = this.graph.getNodes().iterator(); t.hasNext();) {
        var e = t.next();e.isMarked() || (h.isTrue(2 === e.getDegree()), this.buildEdgeStringsStartingAt(e), e.setMarked(!0));
      }
    }, buildEdgeStringsForNonDegree2Nodes: function buildEdgeStringsForNonDegree2Nodes() {
      for (var t = this.graph.getNodes().iterator(); t.hasNext();) {
        var e = t.next();2 !== e.getDegree() && (this.buildEdgeStringsStartingAt(e), e.setMarked(!0));
      }
    }, buildEdgeStringsForObviousStartNodes: function buildEdgeStringsForObviousStartNodes() {
      this.buildEdgeStringsForNonDegree2Nodes();
    }, getMergedLineStrings: function getMergedLineStrings() {
      return this.merge(), this.mergedLineStrings;
    }, buildEdgeStringsStartingAt: function buildEdgeStringsStartingAt(t) {
      for (var e = t.getOutEdges().iterator(); e.hasNext();) {
        var n = e.next();n.getEdge().isMarked() || this.edgeStrings.add(this.buildEdgeStringStartingWith(n));
      }
    }, merge: function merge() {
      if (null !== this.mergedLineStrings) return null;vr.setMarked(this.graph.nodeIterator(), !1), vr.setMarked(this.graph.edgeIterator(), !1), this.edgeStrings = new x(), this.buildEdgeStringsForObviousStartNodes(), this.buildEdgeStringsForIsolatedLoops(), this.mergedLineStrings = new x();for (var t = this.edgeStrings.iterator(); t.hasNext();) {
        var e = t.next();this.mergedLineStrings.add(e.toLineString());
      }
    }, buildEdgeStringStartingWith: function buildEdgeStringStartingWith(t) {
      var e = new mr(this.factory),
          n = t;do {
        e.add(n), n.getEdge().setMarked(!0), n = n.getNext();
      } while (null !== n && n !== t);return e;
    }, add: function add() {
      if (arguments[0] instanceof F) {
        arguments[0].apply({ interfaces_: function interfaces_() {
            return [A];
          }, filter: function filter(t) {
            t instanceof It && this.add(t);
          } });
      } else if (Zs(arguments[0], d)) {
        var t = arguments[0];this.mergedLineStrings = null;for (var e = t.iterator(); e.hasNext();) {
          var n = e.next();this.add(n);
        }
      } else if (arguments[0] instanceof It) {
        var i = arguments[0];null === this.factory && (this.factory = i.getFactory()), this.graph.addEdge(i);
      }
    }, buildEdgeStringsForIsolatedLoops: function buildEdgeStringsForIsolatedLoops() {
      this.buildEdgeStringsForUnprocessedNodes();
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return Rr;
    } });var So = Object.freeze({ LineMerger: Rr }),
      wo = Object.freeze({ OverlayOp: $n });js(Tr, yr), Ws(Tr.prototype, { getNext: function getNext() {
      return this.next;
    }, isInRing: function isInRing() {
      return null !== this.edgeRing;
    }, setRing: function setRing(t) {
      this.edgeRing = t;
    }, setLabel: function setLabel(t) {
      this.label = t;
    }, getLabel: function getLabel() {
      return this.label;
    }, setNext: function setNext(t) {
      this.next = t;
    }, getRing: function getRing() {
      return this.edgeRing;
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return Tr;
    } }), js(Pr, Er), Ws(Pr.prototype, { getLine: function getLine() {
      return this.line;
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return Pr;
    } }), Ws(br.prototype, { visitInteriorRing: function visitInteriorRing(t, e) {
      var n = t.getCoordinates(),
          i = n[0],
          r = br.findDifferentPoint(n, i),
          s = e.findEdgeInSameDirection(i, r),
          o = e.findEdgeEnd(s),
          a = null;o.getLabel().getLocation(0, an.RIGHT) === S.INTERIOR ? a = o : o.getSym().getLabel().getLocation(0, an.RIGHT) === S.INTERIOR && (a = o.getSym()), h.isTrue(null !== a, "unable to find dirEdge with Interior on RHS"), this.visitLinkedDirectedEdges(a);
    }, visitShellInteriors: function visitShellInteriors(t, e) {
      if (t instanceof wt) {
        var n = t;this.visitInteriorRing(n.getExteriorRing(), e);
      }if (t instanceof Tt) for (var i = t, r = 0; r < i.getNumGeometries(); r++) {
        var n = i.getGeometryN(r);this.visitInteriorRing(n.getExteriorRing(), e);
      }
    }, getCoordinate: function getCoordinate() {
      return this.disconnectedRingcoord;
    }, setInteriorEdgesInResult: function setInteriorEdgesInResult(t) {
      for (var e = t.getEdgeEnds().iterator(); e.hasNext();) {
        var n = e.next();n.getLabel().getLocation(0, an.RIGHT) === S.INTERIOR && n.setInResult(!0);
      }
    }, visitLinkedDirectedEdges: function visitLinkedDirectedEdges(t) {
      var e = t,
          n = t;do {
        h.isTrue(null !== n, "found null Directed Edge"), n.setVisited(!0), n = n.getNext();
      } while (n !== e);
    }, buildEdgeRings: function buildEdgeRings(t) {
      for (var e = new x(), n = t.iterator(); n.hasNext();) {
        var i = n.next();if (i.isInResult() && null === i.getEdgeRing()) {
          var r = new fn(i, this.geometryFactory);r.linkDirectedEdgesForMinimalEdgeRings();var s = r.buildMinimalRings();e.addAll(s);
        }
      }return e;
    }, hasUnvisitedShellEdge: function hasUnvisitedShellEdge(t) {
      for (var e = 0; e < t.size(); e++) {
        var n = t.get(e);if (!n.isHole()) {
          var i = n.getEdges(),
              r = i.get(0);if (r.getLabel().getLocation(0, an.RIGHT) === S.INTERIOR) for (var s = 0; s < i.size(); s++) {
            if (r = i.get(s), !r.isVisited()) return this.disconnectedRingcoord = r.getCoordinate(), !0;
          }
        }
      }return !1;
    }, isInteriorsConnected: function isInteriorsConnected() {
      var t = new x();this.geomGraph.computeSplitEdges(t);var e = new xn(new Rn());e.addEdges(t), this.setInteriorEdgesInResult(e), e.linkResultDirectedEdges();var n = this.buildEdgeRings(e.getEdgeEnds());return this.visitShellInteriors(this.geomGraph.getGeometry(), e), !this.hasUnvisitedShellEdge(n);
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return br;
    } }), br.findDifferentPoint = function (t, e) {
    for (var n = 0; n < t.length; n++) {
      if (!t[n].equals(e)) return t[n];
    }return null;
  }, Ws(Or.prototype, { createEdgeEndForNext: function createEdgeEndForNext(t, e, n, i) {
      var r = n.segmentIndex + 1;if (r >= t.getNumPoints() && null === i) return null;var s = t.getCoordinate(r);null !== i && i.segmentIndex === n.segmentIndex && (s = i.coord);var o = new mn(t, n.coord, s, new ln(t.getLabel()));e.add(o);
    }, createEdgeEndForPrev: function createEdgeEndForPrev(t, e, n, i) {
      var r = n.segmentIndex;if (0 === n.dist) {
        if (0 === r) return null;r--;
      }var s = t.getCoordinate(r);null !== i && i.segmentIndex >= r && (s = i.coord);var o = new ln(t.getLabel());o.flip();var a = new mn(t, n.coord, s, o);e.add(a);
    }, computeEdgeEnds: function computeEdgeEnds() {
      if (1 === arguments.length) {
        for (var t = arguments[0], e = new x(), n = t; n.hasNext();) {
          var i = n.next();this.computeEdgeEnds(i, e);
        }return e;
      }if (2 === arguments.length) {
        var r = arguments[0],
            s = arguments[1],
            o = r.getEdgeIntersectionList();o.addEndpoints();var a = o.iterator(),
            u = null,
            l = null;if (!a.hasNext()) return null;var h = a.next();do {
          u = l, l = h, h = null, a.hasNext() && (h = a.next()), null !== l && (this.createEdgeEndForPrev(r, s, l, u), this.createEdgeEndForNext(r, s, l, h));
        } while (null !== l);
      }
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return Or;
    } }), js(_r, mn), Ws(_r.prototype, { insert: function insert(t) {
      this.edgeEnds.add(t);
    }, print: function print(t) {
      t.println("EdgeEndBundle--> Label: " + this.label);for (var e = this.iterator(); e.hasNext();) {
        e.next().print(t), t.println();
      }
    }, iterator: function iterator() {
      return this.edgeEnds.iterator();
    }, getEdgeEnds: function getEdgeEnds() {
      return this.edgeEnds;
    }, computeLabelOn: function computeLabelOn(t, e) {
      for (var n = 0, i = !1, r = this.iterator(); r.hasNext();) {
        var s = r.next(),
            o = s.getLabel().getLocation(t);o === S.BOUNDARY && n++, o === S.INTERIOR && (i = !0);
      }var o = S.NONE;i && (o = S.INTERIOR), n > 0 && (o = Kn.determineBoundary(e, n)), this.label.setLocation(t, o);
    }, computeLabelSide: function computeLabelSide(t, e) {
      for (var n = this.iterator(); n.hasNext();) {
        var i = n.next();if (i.getLabel().isArea()) {
          var r = i.getLabel().getLocation(t, e);if (r === S.INTERIOR) return this.label.setLocation(t, e, S.INTERIOR), null;r === S.EXTERIOR && this.label.setLocation(t, e, S.EXTERIOR);
        }
      }
    }, getLabel: function getLabel() {
      return this.label;
    }, computeLabelSides: function computeLabelSides(t) {
      this.computeLabelSide(t, an.LEFT), this.computeLabelSide(t, an.RIGHT);
    }, updateIM: function updateIM(t) {
      jn.updateIM(this.label, t);
    }, computeLabel: function computeLabel(t) {
      for (var e = !1, n = this.iterator(); n.hasNext();) {
        n.next().getLabel().isArea() && (e = !0);
      }this.label = e ? new ln(S.NONE, S.NONE, S.NONE) : new ln(S.NONE);for (var i = 0; i < 2; i++) {
        this.computeLabelOn(i, t), e && this.computeLabelSides(i);
      }
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return _r;
    } }), js(Mr, wn), Ws(Mr.prototype, { updateIM: function updateIM(t) {
      for (var e = this.iterator(); e.hasNext();) {
        e.next().updateIM(t);
      }
    }, insert: function insert(t) {
      var e = this.edgeMap.get(t);null === e ? (e = new _r(t), this.insertEdgeEnd(t, e)) : e.insert(t);
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return Mr;
    } }), js(Dr, dn), Ws(Dr.prototype, { updateIMFromEdges: function updateIMFromEdges(t) {
      this.edges.updateIM(t);
    }, computeIM: function computeIM(t) {
      t.setAtLeastIfValid(this.label.getLocation(0), this.label.getLocation(1), 0);
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return Dr;
    } }), js(Ar, yn), Ws(Ar.prototype, { createNode: function createNode(t) {
      return new Dr(t, new Mr());
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return Ar;
    } }), Ws(Fr.prototype, { insertEdgeEnds: function insertEdgeEnds(t) {
      for (var e = t.iterator(); e.hasNext();) {
        var n = e.next();this.nodes.add(n);
      }
    }, getNodeIterator: function getNodeIterator() {
      return this.nodes.iterator();
    }, copyNodesAndLabels: function copyNodesAndLabels(t, e) {
      for (var n = t.getNodeIterator(); n.hasNext();) {
        var i = n.next();this.nodes.addNode(i.getCoordinate()).setLabel(e, i.getLabel().getLocation(e));
      }
    }, build: function build(t) {
      this.computeIntersectionNodes(t, 0), this.copyNodesAndLabels(t, 0);var e = new Or(),
          n = e.computeEdgeEnds(t.getEdgeIterator());this.insertEdgeEnds(n);
    }, computeIntersectionNodes: function computeIntersectionNodes(t, e) {
      for (var n = t.getEdgeIterator(); n.hasNext();) {
        for (var i = n.next(), r = i.getLabel().getLocation(e), s = i.getEdgeIntersectionList().iterator(); s.hasNext();) {
          var o = s.next(),
              a = this.nodes.addNode(o.coord);r === S.BOUNDARY ? a.setLabelBoundary(e) : a.getLabel().isNull(e) && a.setLabel(e, S.INTERIOR);
        }
      }
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return Fr;
    } }), Ws(Gr.prototype, { isNodeEdgeAreaLabelsConsistent: function isNodeEdgeAreaLabelsConsistent() {
      for (var t = this.nodeGraph.getNodeIterator(); t.hasNext();) {
        var e = t.next();if (!e.getEdges().isAreaLabelsConsistent(this.geomGraph)) return this.invalidPoint = e.getCoordinate().copy(), !1;
      }return !0;
    }, getInvalidPoint: function getInvalidPoint() {
      return this.invalidPoint;
    }, hasDuplicateRings: function hasDuplicateRings() {
      for (var t = this.nodeGraph.getNodeIterator(); t.hasNext();) {
        for (var e = t.next(), n = e.getEdges().iterator(); n.hasNext();) {
          var i = n.next();if (i.getEdgeEnds().size() > 1) return this.invalidPoint = i.getEdge().getCoordinate(0), !0;
        }
      }return !1;
    }, isNodeConsistentArea: function isNodeConsistentArea() {
      var t = this.geomGraph.computeSelfNodes(this.li, !0, !0);return t.hasProperIntersection() ? (this.invalidPoint = t.getProperIntersectionPoint(), !1) : (this.nodeGraph.build(this.geomGraph), this.isNodeEdgeAreaLabelsConsistent());
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return Gr;
    } }), Ws(qr.prototype, { buildIndex: function buildIndex() {
      this.index = new qe();for (var t = 0; t < this.rings.size(); t++) {
        var e = this.rings.get(t),
            n = e.getEnvelopeInternal();this.index.insert(n, e);
      }
    }, getNestedPoint: function getNestedPoint() {
      return this.nestedPt;
    }, isNonNested: function isNonNested() {
      this.buildIndex();for (var t = 0; t < this.rings.size(); t++) {
        for (var e = this.rings.get(t), n = e.getCoordinates(), i = this.index.query(e.getEnvelopeInternal()), r = 0; r < i.size(); r++) {
          var s = i.get(r),
              o = s.getCoordinates();if (e !== s && e.getEnvelopeInternal().intersects(s.getEnvelopeInternal())) {
            var a = zr.findPtNotNode(n, s, this.graph);if (null !== a) {
              var u = oe.isPointInRing(a, o);if (u) return this.nestedPt = a, !1;
            }
          }
        }
      }return !0;
    }, add: function add(t) {
      this.rings.add(t), this.totalEnv.expandToInclude(t.getEnvelopeInternal());
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return qr;
    } }), Ws(Br.prototype, { getErrorType: function getErrorType() {
      return this.errorType;
    }, getMessage: function getMessage() {
      return Br.errMsg[this.errorType];
    }, getCoordinate: function getCoordinate() {
      return this.pt;
    }, toString: function toString() {
      var t = "";return null !== this.pt && (t = " at or near point " + this.pt), this.getMessage() + t;
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return Br;
    } }), Br.ERROR = 0, Br.REPEATED_POINT = 1, Br.HOLE_OUTSIDE_SHELL = 2, Br.NESTED_HOLES = 3, Br.DISCONNECTED_INTERIOR = 4, Br.SELF_INTERSECTION = 5, Br.RING_SELF_INTERSECTION = 6, Br.NESTED_SHELLS = 7, Br.DUPLICATE_RINGS = 8, Br.TOO_FEW_POINTS = 9, Br.INVALID_COORDINATE = 10, Br.RING_NOT_CLOSED = 11, Br.errMsg = ["Topology Validation Error", "Repeated Point", "Hole lies outside shell", "Holes are nested", "Interior is disconnected", "Self-intersection", "Ring Self-intersection", "Nested shells", "Duplicate Rings", "Too few distinct points in geometry component", "Invalid Coordinate", "Ring is not closed"], Ws(zr.prototype, { checkInvalidCoordinates: function checkInvalidCoordinates() {
      if (arguments[0] instanceof Array) {
        for (var t = arguments[0], e = 0; e < t.length; e++) {
          if (!zr.isValid(t[e])) return this.validErr = new Br(Br.INVALID_COORDINATE, t[e]), null;
        }
      } else if (arguments[0] instanceof wt) {
        var n = arguments[0];if (this.checkInvalidCoordinates(n.getExteriorRing().getCoordinates()), null !== this.validErr) return null;for (var e = 0; e < n.getNumInteriorRing(); e++) {
          if (this.checkInvalidCoordinates(n.getInteriorRingN(e).getCoordinates()), null !== this.validErr) return null;
        }
      }
    }, checkHolesNotNested: function checkHolesNotNested(t, e) {
      for (var n = new qr(e), i = 0; i < t.getNumInteriorRing(); i++) {
        var r = t.getInteriorRingN(i);n.add(r);
      }n.isNonNested() || (this.validErr = new Br(Br.NESTED_HOLES, n.getNestedPoint()));
    }, checkConsistentArea: function checkConsistentArea(t) {
      var e = new Gr(t);if (!e.isNodeConsistentArea()) return this.validErr = new Br(Br.SELF_INTERSECTION, e.getInvalidPoint()), null;e.hasDuplicateRings() && (this.validErr = new Br(Br.DUPLICATE_RINGS, e.getInvalidPoint()));
    }, isValid: function isValid() {
      return this.checkValid(this.parentGeometry), null === this.validErr;
    }, checkShellInsideHole: function checkShellInsideHole(t, e, n) {
      var i = t.getCoordinates(),
          r = e.getCoordinates(),
          s = zr.findPtNotNode(i, e, n);if (null !== s) {
        if (!oe.isPointInRing(s, r)) return s;
      }var o = zr.findPtNotNode(r, t, n);if (null !== o) {
        return oe.isPointInRing(o, i) ? o : null;
      }return h.shouldNeverReachHere("points in shell and hole appear to be equal"), null;
    }, checkNoSelfIntersectingRings: function checkNoSelfIntersectingRings(t) {
      for (var e = t.getEdgeIterator(); e.hasNext();) {
        var n = e.next();if (this.checkNoSelfIntersectingRing(n.getEdgeIntersectionList()), null !== this.validErr) return null;
      }
    }, checkConnectedInteriors: function checkConnectedInteriors(t) {
      var e = new br(t);e.isInteriorsConnected() || (this.validErr = new Br(Br.DISCONNECTED_INTERIOR, e.getCoordinate()));
    }, checkNoSelfIntersectingRing: function checkNoSelfIntersectingRing(t) {
      for (var e = new rt(), n = !0, i = t.iterator(); i.hasNext();) {
        var r = i.next();if (n) n = !1;else {
          if (e.contains(r.coord)) return this.validErr = new Br(Br.RING_SELF_INTERSECTION, r.coord), null;e.add(r.coord);
        }
      }
    }, checkHolesInShell: function checkHolesInShell(t, e) {
      for (var n = t.getExteriorRing(), i = new vi(n), r = 0; r < t.getNumInteriorRing(); r++) {
        var s = t.getInteriorRingN(r),
            o = zr.findPtNotNode(s.getCoordinates(), n, e);if (null === o) return null;if (!i.isInside(o)) return this.validErr = new Br(Br.HOLE_OUTSIDE_SHELL, o), null;
      }
    }, checkTooFewPoints: function checkTooFewPoints(t) {
      if (t.hasTooFewPoints()) return this.validErr = new Br(Br.TOO_FEW_POINTS, t.getInvalidPoint()), null;
    }, getValidationError: function getValidationError() {
      return this.checkValid(this.parentGeometry), this.validErr;
    }, checkValid: function checkValid() {
      if (arguments[0] instanceof Ct) {
        var t = arguments[0];this.checkInvalidCoordinates(t.getCoordinates());
      } else if (arguments[0] instanceof Lt) {
        var e = arguments[0];this.checkInvalidCoordinates(e.getCoordinates());
      } else if (arguments[0] instanceof Rt) {
        var n = arguments[0];if (this.checkInvalidCoordinates(n.getCoordinates()), null !== this.validErr) return null;if (this.checkClosedRing(n), null !== this.validErr) return null;var i = new Kn(0, n);if (this.checkTooFewPoints(i), null !== this.validErr) return null;var r = new ie();i.computeSelfNodes(r, !0, !0), this.checkNoSelfIntersectingRings(i);
      } else if (arguments[0] instanceof It) {
        var s = arguments[0];if (this.checkInvalidCoordinates(s.getCoordinates()), null !== this.validErr) return null;var i = new Kn(0, s);this.checkTooFewPoints(i);
      } else if (arguments[0] instanceof wt) {
        var o = arguments[0];if (this.checkInvalidCoordinates(o), null !== this.validErr) return null;if (this.checkClosedRings(o), null !== this.validErr) return null;var i = new Kn(0, o);if (this.checkTooFewPoints(i), null !== this.validErr) return null;if (this.checkConsistentArea(i), null !== this.validErr) return null;if (!this.isSelfTouchingRingFormingHoleValid && (this.checkNoSelfIntersectingRings(i), null !== this.validErr)) return null;if (this.checkHolesInShell(o, i), null !== this.validErr) return null;if (this.checkHolesNotNested(o, i), null !== this.validErr) return null;this.checkConnectedInteriors(i);
      } else if (arguments[0] instanceof Tt) {
        for (var a = arguments[0], u = 0; u < a.getNumGeometries(); u++) {
          var l = a.getGeometryN(u);if (this.checkInvalidCoordinates(l), null !== this.validErr) return null;if (this.checkClosedRings(l), null !== this.validErr) return null;
        }var i = new Kn(0, a);if (this.checkTooFewPoints(i), null !== this.validErr) return null;if (this.checkConsistentArea(i), null !== this.validErr) return null;if (!this.isSelfTouchingRingFormingHoleValid && (this.checkNoSelfIntersectingRings(i), null !== this.validErr)) return null;for (var u = 0; u < a.getNumGeometries(); u++) {
          var l = a.getGeometryN(u);if (this.checkHolesInShell(l, i), null !== this.validErr) return null;
        }for (var u = 0; u < a.getNumGeometries(); u++) {
          var l = a.getGeometryN(u);if (this.checkHolesNotNested(l, i), null !== this.validErr) return null;
        }if (this.checkShellsNotNested(a, i), null !== this.validErr) return null;this.checkConnectedInteriors(i);
      } else if (arguments[0] instanceof lt) for (var h = arguments[0], u = 0; u < h.getNumGeometries(); u++) {
        var c = h.getGeometryN(u);if (this.checkValid(c), null !== this.validErr) return null;
      } else if (arguments[0] instanceof F) {
        var f = arguments[0];if (this.validErr = null, f.isEmpty()) return null;if (f instanceof Ct) this.checkValid(f);else if (f instanceof Lt) this.checkValid(f);else if (f instanceof Rt) this.checkValid(f);else if (f instanceof It) this.checkValid(f);else if (f instanceof wt) this.checkValid(f);else if (f instanceof Tt) this.checkValid(f);else {
          if (!(f instanceof lt)) throw new UnsupportedOperationException(f.getClass().getName());this.checkValid(f);
        }
      }
    }, setSelfTouchingRingFormingHoleValid: function setSelfTouchingRingFormingHoleValid(t) {
      this.isSelfTouchingRingFormingHoleValid = t;
    }, checkShellNotNested: function checkShellNotNested(t, e, n) {
      var i = t.getCoordinates(),
          r = e.getExteriorRing(),
          s = r.getCoordinates(),
          o = zr.findPtNotNode(i, r, n);if (null === o) return null;if (!oe.isPointInRing(o, s)) return null;if (e.getNumInteriorRing() <= 0) return this.validErr = new Br(Br.NESTED_SHELLS, o), null;for (var a = null, u = 0; u < e.getNumInteriorRing(); u++) {
        var l = e.getInteriorRingN(u);if (null === (a = this.checkShellInsideHole(t, l, n))) return null;
      }this.validErr = new Br(Br.NESTED_SHELLS, a);
    }, checkClosedRings: function checkClosedRings(t) {
      if (this.checkClosedRing(t.getExteriorRing()), null !== this.validErr) return null;for (var e = 0; e < t.getNumInteriorRing(); e++) {
        if (this.checkClosedRing(t.getInteriorRingN(e)), null !== this.validErr) return null;
      }
    }, checkClosedRing: function checkClosedRing(t) {
      if (!t.isClosed()) {
        var e = null;t.getNumPoints() >= 1 && (e = t.getCoordinateN(0)), this.validErr = new Br(Br.RING_NOT_CLOSED, e);
      }
    }, checkShellsNotNested: function checkShellsNotNested(t, e) {
      for (var n = 0; n < t.getNumGeometries(); n++) {
        for (var i = t.getGeometryN(n), r = i.getExteriorRing(), s = 0; s < t.getNumGeometries(); s++) {
          if (n !== s) {
            var o = t.getGeometryN(s);if (this.checkShellNotNested(r, o, e), null !== this.validErr) return null;
          }
        }
      }
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return zr;
    } }), zr.findPtNotNode = function (t, e, n) {
    for (var i = n.findEdge(e), r = i.getEdgeIntersectionList(), s = 0; s < t.length; s++) {
      var o = t[s];if (!r.isIntersection(o)) return o;
    }return null;
  }, zr.isValid = function () {
    if (arguments[0] instanceof F) {
      return new zr(arguments[0]).isValid();
    }if (arguments[0] instanceof c) {
      var t = arguments[0];return !i.isNaN(t.x) && !i.isInfinite(t.x) && !i.isNaN(t.y) && !i.isInfinite(t.y);
    }
  }, Ws(Vr.prototype, { isIncluded: function isIncluded() {
      return this._isIncluded;
    }, getCoordinates: function getCoordinates() {
      if (null === this.ringPts) {
        for (var t = new E(), e = this.deList.iterator(); e.hasNext();) {
          var n = e.next(),
              i = n.getEdge();Vr.addEdge(i.getLine().getCoordinates(), n.getEdgeDirection(), t);
        }this.ringPts = t.toCoordinateArray();
      }return this.ringPts;
    }, isIncludedSet: function isIncludedSet() {
      return this._isIncludedSet;
    }, isValid: function isValid() {
      return this.getCoordinates(), !(this.ringPts.length <= 3) && (this.getRing(), zr.isValid(this.ring));
    }, build: function build(t) {
      var e = t;do {
        this.add(e), e.setRing(this), e = e.getNext(), h.isTrue(null !== e, "found null DE in ring"), h.isTrue(e === t || !e.isInRing(), "found DE already in ring");
      } while (e !== t);
    }, isOuterHole: function isOuterHole() {
      return !!this._isHole && !this.hasShell();
    }, getPolygon: function getPolygon() {
      var t = null;if (null !== this.holes) {
        t = new Array(this.holes.size()).fill(null);for (var e = 0; e < this.holes.size(); e++) {
          t[e] = this.holes.get(e);
        }
      }return this.factory.createPolygon(this.ring, t);
    }, isHole: function isHole() {
      return this._isHole;
    }, isProcessed: function isProcessed() {
      return this._isProcessed;
    }, addHole: function addHole() {
      if (arguments[0] instanceof Rt) {
        var t = arguments[0];null === this.holes && (this.holes = new x()), this.holes.add(t);
      } else if (arguments[0] instanceof Vr) {
        var e = arguments[0];e.setShell(this);var n = e.getRing();null === this.holes && (this.holes = new x()), this.holes.add(n);
      }
    }, setIncluded: function setIncluded(t) {
      this._isIncluded = t, this._isIncludedSet = !0;
    }, getOuterHole: function getOuterHole() {
      if (this.isHole()) return null;for (var t = 0; t < this.deList.size(); t++) {
        var e = this.deList.get(t),
            n = e.getSym().getRing();if (n.isOuterHole()) return n;
      }return null;
    }, computeHole: function computeHole() {
      var t = this.getRing();this._isHole = oe.isCCW(t.getCoordinates());
    }, hasShell: function hasShell() {
      return null !== this.shell;
    }, isOuterShell: function isOuterShell() {
      return null !== this.getOuterHole();
    }, getLineString: function getLineString() {
      return this.getCoordinates(), this.factory.createLineString(this.ringPts);
    }, toString: function toString() {
      return ee.toLineString(new Dt(this.getCoordinates()));
    }, getShell: function getShell() {
      return this.isHole() ? this.shell : this;
    }, add: function add(t) {
      this.deList.add(t);
    }, getRing: function getRing() {
      if (null !== this.ring) return this.ring;this.getCoordinates(), this.ringPts.length < 3 && _.out.println(this.ringPts);try {
        this.ring = this.factory.createLinearRing(this.ringPts);
      } catch (t) {
        if (!(t instanceof N)) throw t;_.out.println(this.ringPts);
      } finally {}return this.ring;
    }, updateIncluded: function updateIncluded() {
      if (this.isHole()) return null;for (var t = 0; t < this.deList.size(); t++) {
        var e = this.deList.get(t),
            n = e.getSym().getRing().getShell();if (null !== n && n.isIncludedSet()) return this.setIncluded(!n.isIncluded()), null;
      }
    }, setShell: function setShell(t) {
      this.shell = t;
    }, setProcessed: function setProcessed(t) {
      this._isProcessed = t;
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return Vr;
    } }), Vr.findDirEdgesInRing = function (t) {
    var e = t,
        n = new x();do {
      n.add(e), e = e.getNext(), h.isTrue(null !== e, "found null DE in ring"), h.isTrue(e === t || !e.isInRing(), "found DE already in ring");
    } while (e !== t);return n;
  }, Vr.addEdge = function (t, e, n) {
    if (e) for (var i = 0; i < t.length; i++) {
      n.add(t[i], !1);
    } else for (var i = t.length - 1; i >= 0; i--) {
      n.add(t[i], !1);
    }
  }, Vr.findEdgeRingContaining = function (t, e) {
    for (var n = t.getRing(), i = n.getEnvelopeInternal(), r = n.getCoordinateN(0), s = null, o = null, a = e.iterator(); a.hasNext();) {
      var u = a.next(),
          l = u.getRing(),
          h = l.getEnvelopeInternal();if (!h.equals(i) && h.contains(i)) {
        r = Y.ptNotInList(n.getCoordinates(), l.getCoordinates());var c = !1;oe.isPointInRing(r, l.getCoordinates()) && (c = !0), c && (null === s || o.contains(h)) && (s = u, o = s.getRing().getEnvelopeInternal());
      }
    }return s;
  }, Ws(kr.prototype, { compare: function compare(t, e) {
      var n = t,
          i = e;return n.getRing().getEnvelope().compareTo(i.getRing().getEnvelope());
    }, interfaces_: function interfaces_() {
      return [o];
    }, getClass: function getClass() {
      return kr;
    } }), Vr.EnvelopeComparator = kr, js(Yr, wr), Ws(Yr.prototype, { findEdgeRing: function findEdgeRing(t) {
      var e = new Vr(this.factory);return e.build(t), e;
    }, computeDepthParity: function computeDepthParity() {
      if (0 === arguments.length) for (;;) {
        return null;
      } else if (1 === arguments.length) {
        arguments[0];
      }
    }, computeNextCWEdges: function computeNextCWEdges() {
      for (var t = this.nodeIterator(); t.hasNext();) {
        var e = t.next();Yr.computeNextCWEdges(e);
      }
    }, addEdge: function addEdge(t) {
      if (t.isEmpty()) return null;var e = Y.removeRepeatedPoints(t.getCoordinates());if (e.length < 2) return null;var n = e[0],
          i = e[e.length - 1],
          r = this.getNode(n),
          s = this.getNode(i),
          o = new Tr(r, s, e[1], !0),
          a = new Tr(s, r, e[e.length - 2], !1),
          u = new Pr(t);u.setDirectedEdges(o, a), this.add(u);
    }, deleteCutEdges: function deleteCutEdges() {
      this.computeNextCWEdges(), Yr.findLabeledEdgeRings(this.dirEdges);for (var t = new x(), e = this.dirEdges.iterator(); e.hasNext();) {
        var n = e.next();if (!n.isMarked()) {
          var i = n.getSym();if (n.getLabel() === i.getLabel()) {
            n.setMarked(!0), i.setMarked(!0);var r = n.getEdge();t.add(r.getLine());
          }
        }
      }return t;
    }, getEdgeRings: function getEdgeRings() {
      this.computeNextCWEdges(), Yr.label(this.dirEdges, -1);var t = Yr.findLabeledEdgeRings(this.dirEdges);this.convertMaximalToMinimalEdgeRings(t);for (var e = new x(), n = this.dirEdges.iterator(); n.hasNext();) {
        var i = n.next();if (!i.isMarked() && !i.isInRing()) {
          var r = this.findEdgeRing(i);e.add(r);
        }
      }return e;
    }, getNode: function getNode(t) {
      var e = this.findNode(t);return null === e && (e = new Nr(t), this.add(e)), e;
    }, convertMaximalToMinimalEdgeRings: function convertMaximalToMinimalEdgeRings(t) {
      for (var e = t.iterator(); e.hasNext();) {
        var n = e.next(),
            i = n.getLabel(),
            r = Yr.findIntersectionNodes(n, i);if (null !== r) for (var s = r.iterator(); s.hasNext();) {
          var o = s.next();Yr.computeNextCCWEdges(o, i);
        }
      }
    }, deleteDangles: function deleteDangles() {
      for (var t = this.findNodesOfDegree(1), e = new K(), n = new ce(), i = t.iterator(); i.hasNext();) {
        n.push(i.next());
      }for (; !n.isEmpty();) {
        var r = n.pop();Yr.deleteAllEdges(r);for (var s = r.getOutEdges().getEdges(), i = s.iterator(); i.hasNext();) {
          var o = i.next();o.setMarked(!0);var a = o.getSym();null !== a && a.setMarked(!0);var u = o.getEdge();e.add(u.getLine());var l = o.getToNode();1 === Yr.getDegreeNonDeleted(l) && n.push(l);
        }
      }return e;
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return Yr;
    } }), Yr.findLabeledEdgeRings = function (t) {
    for (var e = new x(), n = 1, i = t.iterator(); i.hasNext();) {
      var r = i.next();if (!r.isMarked() && !(r.getLabel() >= 0)) {
        e.add(r);var s = Vr.findDirEdgesInRing(r);Yr.label(s, n), n++;
      }
    }return e;
  }, Yr.getDegreeNonDeleted = function (t) {
    for (var e = t.getOutEdges().getEdges(), n = 0, i = e.iterator(); i.hasNext();) {
      i.next().isMarked() || n++;
    }return n;
  }, Yr.deleteAllEdges = function (t) {
    for (var e = t.getOutEdges().getEdges(), n = e.iterator(); n.hasNext();) {
      var i = n.next();i.setMarked(!0);var r = i.getSym();null !== r && r.setMarked(!0);
    }
  }, Yr.label = function (t, e) {
    for (var n = t.iterator(); n.hasNext();) {
      n.next().setLabel(e);
    }
  }, Yr.computeNextCWEdges = function (t) {
    for (var e = t.getOutEdges(), n = null, i = null, r = e.getEdges().iterator(); r.hasNext();) {
      var s = r.next();if (!s.isMarked()) {
        if (null === n && (n = s), null !== i) {
          var o = i.getSym();o.setNext(s);
        }i = s;
      }
    }if (null !== i) {
      var o = i.getSym();o.setNext(n);
    }
  }, Yr.computeNextCCWEdges = function (t, e) {
    for (var n = t.getOutEdges(), i = null, r = null, s = n.getEdges(), o = s.size() - 1; o >= 0; o--) {
      var a = s.get(o),
          u = a.getSym(),
          l = null;a.getLabel() === e && (l = a);var c = null;u.getLabel() === e && (c = u), null === l && null === c || (null !== c && (r = c), null !== l && (null !== r && (r.setNext(l), r = null), null === i && (i = l)));
    }null !== r && (h.isTrue(null !== i), r.setNext(i));
  }, Yr.getDegree = function (t, e) {
    for (var n = t.getOutEdges().getEdges(), i = 0, r = n.iterator(); r.hasNext();) {
      r.next().getLabel() === e && i++;
    }return i;
  }, Yr.findIntersectionNodes = function (t, e) {
    var n = t,
        i = null;do {
      var r = n.getFromNode();Yr.getDegree(r, e) > 1 && (null === i && (i = new x()), i.add(r)), n = n.getNext(), h.isTrue(null !== n, "found null DE in ring"), h.isTrue(n === t || !n.isInRing(), "found DE already in ring");
    } while (n !== t);return i;
  }, Ws(Ur.prototype, { getGeometry: function getGeometry() {
      return null === this.geomFactory && (this.geomFactory = new $t()), this.polygonize(), this.extractOnlyPolygonal ? this.geomFactory.buildGeometry(this.polyList) : this.geomFactory.createGeometryCollection($t.toGeometryArray(this.polyList));
    }, getInvalidRingLines: function getInvalidRingLines() {
      return this.polygonize(), this.invalidRingLines;
    }, findValidRings: function findValidRings(t, e, n) {
      for (var i = t.iterator(); i.hasNext();) {
        var r = i.next();r.isValid() ? e.add(r) : n.add(r.getLineString());
      }
    }, polygonize: function polygonize() {
      if (null !== this.polyList) return null;if (this.polyList = new x(), null === this.graph) return null;this.dangles = this.graph.deleteDangles(), this.cutEdges = this.graph.deleteCutEdges();var t = this.graph.getEdgeRings(),
          e = new x();this.invalidRingLines = new x(), this.isCheckingRingsValid ? this.findValidRings(t, e, this.invalidRingLines) : e = t, this.findShellsAndHoles(e), Ur.assignHolesToShells(this.holeList, this.shellList), uo.sort(this.shellList, new Vr.EnvelopeComparator());var n = !0;this.extractOnlyPolygonal && (Ur.findDisjointShells(this.shellList), n = !1), this.polyList = Ur.extractPolygons(this.shellList, n);
    }, getDangles: function getDangles() {
      return this.polygonize(), this.dangles;
    }, getCutEdges: function getCutEdges() {
      return this.polygonize(), this.cutEdges;
    }, getPolygons: function getPolygons() {
      return this.polygonize(), this.polyList;
    }, add: function add() {
      if (Zs(arguments[0], d)) for (var t = arguments[0], e = t.iterator(); e.hasNext();) {
        var n = e.next();this.add(n);
      } else if (arguments[0] instanceof It) {
        var i = arguments[0];this.geomFactory = i.getFactory(), null === this.graph && (this.graph = new Yr(this.geomFactory)), this.graph.addEdge(i);
      } else if (arguments[0] instanceof F) {
        var r = arguments[0];r.apply(this.lineStringAdder);
      }
    }, setCheckRingsValid: function setCheckRingsValid(t) {
      this.isCheckingRingsValid = t;
    }, findShellsAndHoles: function findShellsAndHoles(t) {
      this.holeList = new x(), this.shellList = new x();for (var e = t.iterator(); e.hasNext();) {
        var n = e.next();n.computeHole(), n.isHole() ? this.holeList.add(n) : this.shellList.add(n);
      }
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return Ur;
    } }), Ur.findOuterShells = function (t) {
    for (var e = t.iterator(); e.hasNext();) {
      var n = e.next(),
          i = n.getOuterHole();null === i || i.isProcessed() || (n.setIncluded(!0), i.setProcessed(!0));
    }
  }, Ur.extractPolygons = function (t, e) {
    for (var n = new x(), i = t.iterator(); i.hasNext();) {
      var r = i.next();(e || r.isIncluded()) && n.add(r.getPolygon());
    }return n;
  }, Ur.assignHolesToShells = function (t, e) {
    for (var n = t.iterator(); n.hasNext();) {
      var i = n.next();Ur.assignHoleToShell(i, e);
    }
  }, Ur.assignHoleToShell = function (t, e) {
    var n = Vr.findEdgeRingContaining(t, e);null !== n && n.addHole(t);
  }, Ur.findDisjointShells = function (t) {
    Ur.findOuterShells(t);var e = null;do {
      e = !1;for (var n = t.iterator(); n.hasNext();) {
        var i = n.next();i.isIncludedSet() || (i.updateIncluded(), i.isIncludedSet() || (e = !0));
      }
    } while (e);
  }, Ws(Xr.prototype, { filter: function filter(t) {
      t instanceof It && this.p.add(t);
    }, interfaces_: function interfaces_() {
      return [A];
    }, getClass: function getClass() {
      return Xr;
    } }), Ur.LineStringAdder = Xr;var Lo = Object.freeze({ Polygonizer: Ur });Ws(Hr.prototype, { insertEdgeEnds: function insertEdgeEnds(t) {
      for (var e = t.iterator(); e.hasNext();) {
        var n = e.next();this.nodes.add(n);
      }
    }, computeProperIntersectionIM: function computeProperIntersectionIM(t, e) {
      var n = this.arg[0].getGeometry().getDimension(),
          i = this.arg[1].getGeometry().getDimension(),
          r = t.hasProperIntersection(),
          s = t.hasProperInteriorIntersection();2 === n && 2 === i ? r && e.setAtLeast("212101212") : 2 === n && 1 === i ? (r && e.setAtLeast("FFF0FFFF2"), s && e.setAtLeast("1FFFFF1FF")) : 1 === n && 2 === i ? (r && e.setAtLeast("F0FFFFFF2"), s && e.setAtLeast("1F1FFFFFF")) : 1 === n && 1 === i && s && e.setAtLeast("0FFFFFFFF");
    }, labelIsolatedEdges: function labelIsolatedEdges(t, e) {
      for (var n = this.arg[t].getEdgeIterator(); n.hasNext();) {
        var i = n.next();i.isIsolated() && (this.labelIsolatedEdge(i, e, this.arg[e].getGeometry()), this.isolatedEdges.add(i));
      }
    }, labelIsolatedEdge: function labelIsolatedEdge(t, e, n) {
      if (n.getDimension() > 0) {
        var i = this.ptLocator.locate(t.getCoordinate(), n);t.getLabel().setAllLocations(e, i);
      } else t.getLabel().setAllLocations(e, S.EXTERIOR);
    }, computeIM: function computeIM() {
      var t = new ue();if (t.set(S.EXTERIOR, S.EXTERIOR, 2), !this.arg[0].getGeometry().getEnvelopeInternal().intersects(this.arg[1].getGeometry().getEnvelopeInternal())) return this.computeDisjointIM(t), t;this.arg[0].computeSelfNodes(this.li, !1), this.arg[1].computeSelfNodes(this.li, !1);var e = this.arg[0].computeEdgeIntersections(this.arg[1], this.li, !1);this.computeIntersectionNodes(0), this.computeIntersectionNodes(1), this.copyNodesAndLabels(0), this.copyNodesAndLabels(1), this.labelIsolatedNodes(), this.computeProperIntersectionIM(e, t);var n = new Or(),
          i = n.computeEdgeEnds(this.arg[0].getEdgeIterator());this.insertEdgeEnds(i);var r = n.computeEdgeEnds(this.arg[1].getEdgeIterator());return this.insertEdgeEnds(r), this.labelNodeEdges(), this.labelIsolatedEdges(0, 1), this.labelIsolatedEdges(1, 0), this.updateIM(t), t;
    }, labelNodeEdges: function labelNodeEdges() {
      for (var t = this.nodes.iterator(); t.hasNext();) {
        t.next().getEdges().computeLabelling(this.arg);
      }
    }, copyNodesAndLabels: function copyNodesAndLabels(t) {
      for (var e = this.arg[t].getNodeIterator(); e.hasNext();) {
        var n = e.next();this.nodes.addNode(n.getCoordinate()).setLabel(t, n.getLabel().getLocation(t));
      }
    }, labelIntersectionNodes: function labelIntersectionNodes(t) {
      for (var e = this.arg[t].getEdgeIterator(); e.hasNext();) {
        for (var n = e.next(), i = n.getLabel().getLocation(t), r = n.getEdgeIntersectionList().iterator(); r.hasNext();) {
          var s = r.next(),
              o = this.nodes.find(s.coord);o.getLabel().isNull(t) && (i === S.BOUNDARY ? o.setLabelBoundary(t) : o.setLabel(t, S.INTERIOR));
        }
      }
    }, labelIsolatedNode: function labelIsolatedNode(t, e) {
      var n = this.ptLocator.locate(t.getCoordinate(), this.arg[e].getGeometry());t.getLabel().setAllLocations(e, n);
    }, computeIntersectionNodes: function computeIntersectionNodes(t) {
      for (var e = this.arg[t].getEdgeIterator(); e.hasNext();) {
        for (var n = e.next(), i = n.getLabel().getLocation(t), r = n.getEdgeIntersectionList().iterator(); r.hasNext();) {
          var s = r.next(),
              o = this.nodes.addNode(s.coord);i === S.BOUNDARY ? o.setLabelBoundary(t) : o.getLabel().isNull(t) && o.setLabel(t, S.INTERIOR);
        }
      }
    }, labelIsolatedNodes: function labelIsolatedNodes() {
      for (var t = this.nodes.iterator(); t.hasNext();) {
        var e = t.next(),
            n = e.getLabel();h.isTrue(n.getGeometryCount() > 0, "node with empty label found"), e.isIsolated() && (n.isNull(0) ? this.labelIsolatedNode(e, 0) : this.labelIsolatedNode(e, 1));
      }
    }, updateIM: function updateIM(t) {
      for (var e = this.isolatedEdges.iterator(); e.hasNext();) {
        e.next().updateIM(t);
      }for (var n = this.nodes.iterator(); n.hasNext();) {
        var i = n.next();i.updateIM(t), i.updateIMFromEdges(t);
      }
    }, computeDisjointIM: function computeDisjointIM(t) {
      var e = this.arg[0].getGeometry();e.isEmpty() || (t.set(S.INTERIOR, S.EXTERIOR, e.getDimension()), t.set(S.BOUNDARY, S.EXTERIOR, e.getBoundaryDimension()));var n = this.arg[1].getGeometry();n.isEmpty() || (t.set(S.EXTERIOR, S.INTERIOR, n.getDimension()), t.set(S.EXTERIOR, S.BOUNDARY, n.getBoundaryDimension()));
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return Hr;
    } }), Ws(Wr.prototype, { isContainedInBoundary: function isContainedInBoundary(t) {
      if (t instanceof wt) return !1;if (t instanceof Ct) return this.isPointContainedInBoundary(t);if (t instanceof It) return this.isLineStringContainedInBoundary(t);for (var e = 0; e < t.getNumGeometries(); e++) {
        var n = t.getGeometryN(e);if (!this.isContainedInBoundary(n)) return !1;
      }return !0;
    }, isLineSegmentContainedInBoundary: function isLineSegmentContainedInBoundary(t, e) {
      if (t.equals(e)) return this.isPointContainedInBoundary(t);if (t.x === e.x) {
        if (t.x === this.rectEnv.getMinX() || t.x === this.rectEnv.getMaxX()) return !0;
      } else if (t.y === e.y && (t.y === this.rectEnv.getMinY() || t.y === this.rectEnv.getMaxY())) return !0;return !1;
    }, isLineStringContainedInBoundary: function isLineStringContainedInBoundary(t) {
      for (var e = t.getCoordinateSequence(), n = new c(), i = new c(), r = 0; r < e.size() - 1; r++) {
        if (e.getCoordinate(r, n), e.getCoordinate(r + 1, i), !this.isLineSegmentContainedInBoundary(n, i)) return !1;
      }return !0;
    }, isPointContainedInBoundary: function isPointContainedInBoundary() {
      if (arguments[0] instanceof Ct) {
        var t = arguments[0];return this.isPointContainedInBoundary(t.getCoordinate());
      }if (arguments[0] instanceof c) {
        var e = arguments[0];return e.x === this.rectEnv.getMinX() || e.x === this.rectEnv.getMaxX() || e.y === this.rectEnv.getMinY() || e.y === this.rectEnv.getMaxY();
      }
    }, contains: function contains(t) {
      return !!this.rectEnv.contains(t.getEnvelopeInternal()) && !this.isContainedInBoundary(t);
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return Wr;
    } }), Wr.contains = function (t, e) {
    return new Wr(t).contains(e);
  }, Ws(jr.prototype, { intersects: function intersects(t, e) {
      var n = new I(t, e);if (!this.rectEnv.intersects(n)) return !1;if (this.rectEnv.intersects(t)) return !0;if (this.rectEnv.intersects(e)) return !0;if (t.compareTo(e) > 0) {
        var i = t;t = e, e = i;
      }var r = !1;return e.y > t.y && (r = !0), r ? this.li.computeIntersection(t, e, this.diagDown0, this.diagDown1) : this.li.computeIntersection(t, e, this.diagUp0, this.diagUp1), !!this.li.hasIntersection();
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return jr;
    } }), Ws(Kr.prototype, { applyTo: function applyTo(t) {
      for (var e = 0; e < t.getNumGeometries() && !this._isDone; e++) {
        var n = t.getGeometryN(e);if (n instanceof lt) this.applyTo(n);else if (this.visit(n), this.isDone()) return this._isDone = !0, null;
      }
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return Kr;
    } }), Ws(Zr.prototype, { intersects: function intersects(t) {
      if (!this.rectEnv.intersects(t.getEnvelopeInternal())) return !1;var e = new Qr(this.rectEnv);if (e.applyTo(t), e.intersects()) return !0;var n = new Jr(this.rectangle);if (n.applyTo(t), n.containsPoint()) return !0;var i = new $r(this.rectangle);return i.applyTo(t), !!i.intersects();
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return Zr;
    } }), Zr.intersects = function (t, e) {
    return new Zr(t).intersects(e);
  }, js(Qr, Kr), Ws(Qr.prototype, { isDone: function isDone() {
      return this._intersects === !0;
    }, visit: function visit(t) {
      var e = t.getEnvelopeInternal();return this.rectEnv.intersects(e) ? this.rectEnv.contains(e) ? (this._intersects = !0, null) : e.getMinX() >= this.rectEnv.getMinX() && e.getMaxX() <= this.rectEnv.getMaxX() ? (this._intersects = !0, null) : e.getMinY() >= this.rectEnv.getMinY() && e.getMaxY() <= this.rectEnv.getMaxY() ? (this._intersects = !0, null) : void 0 : null;
    }, intersects: function intersects() {
      return this._intersects;
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return Qr;
    } }), js(Jr, Kr), Ws(Jr.prototype, { isDone: function isDone() {
      return this._containsPoint === !0;
    }, visit: function visit(t) {
      if (!(t instanceof wt)) return null;var e = t.getEnvelopeInternal();if (!this.rectEnv.intersects(e)) return null;for (var n = new c(), i = 0; i < 4; i++) {
        if (this.rectSeq.getCoordinate(i, n), e.contains(n) && Sn.containsPointInPolygon(n, t)) return this._containsPoint = !0, null;
      }
    }, containsPoint: function containsPoint() {
      return this._containsPoint;
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return Jr;
    } }), js($r, Kr), Ws($r.prototype, { intersects: function intersects() {
      return this.hasIntersection;
    }, isDone: function isDone() {
      return this.hasIntersection === !0;
    }, visit: function visit(t) {
      var e = t.getEnvelopeInternal();if (!this.rectEnv.intersects(e)) return null;var n = qn.getLines(t);this.checkIntersectionWithLineStrings(n);
    }, checkIntersectionWithLineStrings: function checkIntersectionWithLineStrings(t) {
      for (var e = t.iterator(); e.hasNext();) {
        var n = e.next();if (this.checkIntersectionWithSegments(n), this.hasIntersection) return null;
      }
    }, checkIntersectionWithSegments: function checkIntersectionWithSegments(t) {
      for (var e = t.getCoordinateSequence(), n = 1; n < e.size(); n++) {
        if (e.getCoordinate(n - 1, this.p0), e.getCoordinate(n, this.p1), this.rectIntersector.intersects(this.p0, this.p1)) return this.hasIntersection = !0, null;
      }
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return $r;
    } }), js(ts, Zn), Ws(ts.prototype, { getIntersectionMatrix: function getIntersectionMatrix() {
      return this._relate.computeIM();
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return ts;
    } }), ts.covers = function (t, e) {
    return !!t.getEnvelopeInternal().covers(e.getEnvelopeInternal()) && (!!t.isRectangle() || ts.relate(t, e).isCovers());
  }, ts.intersects = function (t, e) {
    return !!t.getEnvelopeInternal().intersects(e.getEnvelopeInternal()) && (t.isRectangle() ? Zr.intersects(t, e) : e.isRectangle() ? Zr.intersects(e, t) : ts.relate(t, e).isIntersects());
  }, ts.touches = function (t, e) {
    return !!t.getEnvelopeInternal().intersects(e.getEnvelopeInternal()) && ts.relate(t, e).isTouches(t.getDimension(), e.getDimension());
  }, ts.within = function (t, e) {
    return e.contains(t);
  }, ts.coveredBy = function (t, e) {
    return ts.covers(e, t);
  }, ts.relate = function () {
    if (2 === arguments.length) {
      var t = arguments[0],
          e = arguments[1],
          n = new ts(t, e),
          i = n.getIntersectionMatrix();return i;
    }if (3 === arguments.length) {
      if ("string" == typeof arguments[2] && arguments[0] instanceof F && arguments[1] instanceof F) {
        var r = arguments[0],
            s = arguments[1],
            o = arguments[2];return ts.relateWithCheck(r, s).matches(o);
      }if (Zs(arguments[2], q) && arguments[0] instanceof F && arguments[1] instanceof F) {
        var a = arguments[0],
            u = arguments[1],
            l = arguments[2],
            n = new ts(a, u, l),
            i = n.getIntersectionMatrix();return i;
      }
    }
  }, ts.overlaps = function (t, e) {
    return !!t.getEnvelopeInternal().intersects(e.getEnvelopeInternal()) && ts.relate(t, e).isOverlaps(t.getDimension(), e.getDimension());
  }, ts.disjoint = function (t, e) {
    return !t.intersects(e);
  }, ts.relateWithCheck = function (t, e) {
    return t.checkNotGeometryCollection(t), t.checkNotGeometryCollection(e), ts.relate(t, e);
  }, ts.crosses = function (t, e) {
    return !!t.getEnvelopeInternal().intersects(e.getEnvelopeInternal()) && ts.relate(t, e).isCrosses(t.getDimension(), e.getDimension());
  }, ts.contains = function (t, e) {
    return !!t.getEnvelopeInternal().contains(e.getEnvelopeInternal()) && (t.isRectangle() ? Wr.contains(t, e) : ts.relate(t, e).isContains());
  };var Ro = Object.freeze({ RelateOp: ts });Ws(es.prototype, { extractElements: function extractElements(t, e) {
      if (null === t) return null;for (var n = 0; n < t.getNumGeometries(); n++) {
        var i = t.getGeometryN(n);this.skipEmpty && i.isEmpty() || e.add(i);
      }
    }, combine: function combine() {
      for (var t = new x(), e = this.inputGeoms.iterator(); e.hasNext();) {
        var n = e.next();this.extractElements(n, t);
      }return 0 === t.size() ? null !== this.geomFactory ? this.geomFactory.createGeometryCollection(null) : null : this.geomFactory.buildGeometry(t);
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return es;
    } }), es.combine = function () {
    if (1 === arguments.length) {
      var t = arguments[0],
          e = new es(t);return e.combine();
    }if (2 === arguments.length) {
      var n = arguments[0],
          i = arguments[1],
          e = new es(es.createList(n, i));return e.combine();
    }if (3 === arguments.length) {
      var r = arguments[0],
          s = arguments[1],
          o = arguments[2],
          e = new es(es.createList(r, s, o));return e.combine();
    }
  }, es.extractFactory = function (t) {
    return t.isEmpty() ? null : t.iterator().next().getFactory();
  }, es.createList = function () {
    if (2 === arguments.length) {
      var t = arguments[0],
          e = arguments[1],
          n = new x();return n.add(t), n.add(e), n;
    }if (3 === arguments.length) {
      var i = arguments[0],
          r = arguments[1],
          s = arguments[2],
          n = new x();return n.add(i), n.add(r), n.add(s), n;
    }
  }, Ws(ns.prototype, { union: function union() {
      for (var t = new Se(), e = new rt(), n = 0; n < this.pointGeom.getNumGeometries(); n++) {
        var i = this.pointGeom.getGeometryN(n),
            r = i.getCoordinate();t.locate(r, this.otherGeom) === S.EXTERIOR && e.add(r);
      }if (0 === e.size()) return this.otherGeom;var s = null,
          o = Y.toCoordinateArray(e);return s = 1 === o.length ? this.geomFact.createPoint(o[0]) : this.geomFact.createMultiPointFromCoords(o), es.combine(s, this.otherGeom);
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return ns;
    } }), ns.union = function (t, e) {
    return new ns(t, e).union();
  }, Ws(is.prototype, { filter: function filter(t) {
      this.sortIndex !== -1 && t.getSortIndex() !== this.sortIndex || this.comps.add(t);
    }, interfaces_: function interfaces_() {
      return [at];
    }, getClass: function getClass() {
      return is;
    } }), is.extract = function () {
    if (2 === arguments.length) {
      var t = arguments[0],
          e = arguments[1];return is.extract(t, e, new x());
    }if (3 === arguments.length) {
      var n = arguments[0],
          i = arguments[1],
          r = arguments[2];return n.getSortIndex() === i ? r.add(n) : n instanceof lt && n.apply(new is(i, r)), r;
    }
  }, Ws(rs.prototype, { reduceToGeometries: function reduceToGeometries(t) {
      for (var e = new x(), n = t.iterator(); n.hasNext();) {
        var i = n.next(),
            r = null;Zs(i, m) ? r = this.unionTree(i) : i instanceof F && (r = i), e.add(r);
      }return e;
    }, extractByEnvelope: function extractByEnvelope(t, e, n) {
      for (var i = new x(), r = 0; r < e.getNumGeometries(); r++) {
        var s = e.getGeometryN(r);s.getEnvelopeInternal().intersects(t) ? i.add(s) : n.add(s);
      }return this.geomFactory.buildGeometry(i);
    }, unionOptimized: function unionOptimized(t, e) {
      var n = t.getEnvelopeInternal(),
          i = e.getEnvelopeInternal();if (!n.intersects(i)) {
        return es.combine(t, e);
      }if (t.getNumGeometries() <= 1 && e.getNumGeometries() <= 1) return this.unionActual(t, e);var r = n.intersection(i);return this.unionUsingEnvelopeIntersection(t, e, r);
    }, union: function union() {
      if (null === this.inputPolys) throw new IllegalStateException("union() method cannot be called twice");if (this.inputPolys.isEmpty()) return null;this.geomFactory = this.inputPolys.iterator().next().getFactory();for (var t = new qe(rs.STRTREE_NODE_CAPACITY), e = this.inputPolys.iterator(); e.hasNext();) {
        var n = e.next();t.insert(n.getEnvelopeInternal(), n);
      }this.inputPolys = null;var i = t.itemsTree();return this.unionTree(i);
    }, binaryUnion: function binaryUnion() {
      if (1 === arguments.length) {
        var t = arguments[0];return this.binaryUnion(t, 0, t.size());
      }if (3 === arguments.length) {
        var e = arguments[0],
            n = arguments[1],
            i = arguments[2];if (i - n <= 1) {
          var r = rs.getGeometry(e, n);return this.unionSafe(r, null);
        }if (i - n == 2) return this.unionSafe(rs.getGeometry(e, n), rs.getGeometry(e, n + 1));var s = Math.trunc((i + n) / 2),
            r = this.binaryUnion(e, n, s),
            o = this.binaryUnion(e, s, i);return this.unionSafe(r, o);
      }
    }, repeatedUnion: function repeatedUnion(t) {
      for (var e = null, n = t.iterator(); n.hasNext();) {
        var i = n.next();e = null === e ? i.copy() : e.union(i);
      }return e;
    }, unionSafe: function unionSafe(t, e) {
      return null === t && null === e ? null : null === t ? e.copy() : null === e ? t.copy() : this.unionOptimized(t, e);
    }, unionActual: function unionActual(t, e) {
      return rs.restrictToPolygons(t.union(e));
    }, unionTree: function unionTree(t) {
      var e = this.reduceToGeometries(t);return this.binaryUnion(e);
    }, unionUsingEnvelopeIntersection: function unionUsingEnvelopeIntersection(t, e, n) {
      var i = new x(),
          r = this.extractByEnvelope(n, t, i),
          s = this.extractByEnvelope(n, e, i),
          o = this.unionActual(r, s);return i.add(o), es.combine(i);
    }, bufferUnion: function bufferUnion() {
      if (1 === arguments.length) {
        var t = arguments[0],
            e = t.get(0).getFactory(),
            n = e.buildGeometry(t),
            i = n.buffer(0);return i;
      }if (2 === arguments.length) {
        var r = arguments[0],
            s = arguments[1],
            e = r.getFactory(),
            n = e.createGeometryCollection([r, s]),
            i = n.buffer(0);return i;
      }
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return rs;
    } }), rs.restrictToPolygons = function (t) {
    if (Zs(t, St)) return t;var e = cr.getPolygons(t);return 1 === e.size() ? e.get(0) : t.getFactory().createMultiPolygon($t.toPolygonArray(e));
  }, rs.getGeometry = function (t, e) {
    return e >= t.size() ? null : t.get(e);
  }, rs.union = function (t) {
    return new rs(t).union();
  }, rs.STRTREE_NODE_CAPACITY = 4, Ws(ss.prototype, { unionNoOpt: function unionNoOpt(t) {
      var e = this.geomFact.createPoint();return ei.overlayOp(t, e, $n.UNION);
    }, unionWithNull: function unionWithNull(t, e) {
      return null === t && null === e ? null : null === e ? t : null === t ? e : t.union(e);
    }, extract: function extract() {
      if (Zs(arguments[0], d)) for (var t = arguments[0], e = t.iterator(); e.hasNext();) {
        var n = e.next();this.extract(n);
      } else if (arguments[0] instanceof F) {
        var i = arguments[0];null === this.geomFact && (this.geomFact = i.getFactory()), is.extract(i, F.SORTINDEX_POLYGON, this.polygons), is.extract(i, F.SORTINDEX_LINESTRING, this.lines), is.extract(i, F.SORTINDEX_POINT, this.points);
      }
    }, union: function union() {
      if (null === this.geomFact) return null;var t = null;if (this.points.size() > 0) {
        var e = this.geomFact.buildGeometry(this.points);t = this.unionNoOpt(e);
      }var n = null;if (this.lines.size() > 0) {
        var i = this.geomFact.buildGeometry(this.lines);n = this.unionNoOpt(i);
      }var r = null;this.polygons.size() > 0 && (r = rs.union(this.polygons));var s = this.unionWithNull(n, r),
          o = null;return o = null === t ? s : null === s ? t : ns.union(t, s), null === o ? this.geomFact.createGeometryCollection() : o;
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return ss;
    } }), ss.union = function () {
    if (1 === arguments.length) {
      if (Zs(arguments[0], d)) {
        var t = arguments[0],
            e = new ss(t);return e.union();
      }if (arguments[0] instanceof F) {
        var n = arguments[0],
            e = new ss(n);return e.union();
      }
    } else if (2 === arguments.length) {
      var i = arguments[0],
          r = arguments[1],
          e = new ss(i, r);return e.union();
    }
  };var To = Object.freeze({ UnaryUnionOp: ss }),
      Po = Object.freeze({ IsValidOp: zr, ConsistentAreaTester: Gr }),
      bo = Object.freeze({ BoundaryOp: ct, IsSimpleOp: Yi, buffer: No, distance: Co, linemerge: So, overlay: wo, polygonize: Lo, relate: Ro, union: To, valid: Po });js(os, Pt.CoordinateOperation), Ws(os.prototype, { editCoordinates: function editCoordinates(t, e) {
      if (0 === t.length) return null;for (var n = new Array(t.length).fill(null), i = 0; i < t.length; i++) {
        var r = new c(t[i]);this.targetPM.makePrecise(r), n[i] = r;
      }var s = new E(n, !1),
          o = s.toCoordinateArray(),
          a = 0;e instanceof It && (a = 2), e instanceof Rt && (a = 4);var u = n;return this.removeCollapsed && (u = null), o.length < a ? u : o;
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return os;
    } }), Ws(as.prototype, { fixPolygonalTopology: function fixPolygonalTopology(t) {
      var e = t;this.changePrecisionModel || (e = this.changePM(t, this.targetPM));var n = e.buffer(0),
          i = n;return this.changePrecisionModel || (i = this.changePM(n, t.getPrecisionModel())), i;
    }, reducePointwise: function reducePointwise(t) {
      var e = null;if (this.changePrecisionModel) {
        e = new Pt(this.createFactory(t.getFactory(), this.targetPM));
      } else e = new Pt();var n = this.removeCollapsed;return t.getDimension() >= 2 && (n = !0), e.edit(t, new os(this.targetPM, n));
    }, changePM: function changePM(t, e) {
      return this.createEditor(t.getFactory(), e).edit(t, new Pt.NoOpGeometryOperation());
    }, setRemoveCollapsedComponents: function setRemoveCollapsedComponents(t) {
      this.removeCollapsed = t;
    }, createFactory: function createFactory(t, e) {
      return new $t(e, t.getSRID(), t.getCoordinateSequenceFactory());
    }, setChangePrecisionModel: function setChangePrecisionModel(t) {
      this.changePrecisionModel = t;
    }, reduce: function reduce(t) {
      var e = this.reducePointwise(t);return this.isPointwise ? e : Zs(e, St) ? e.isValid() ? e : this.fixPolygonalTopology(e) : e;
    }, setPointwise: function setPointwise(t) {
      this.isPointwise = t;
    }, createEditor: function createEditor(t, e) {
      return t.getPrecisionModel() === e ? new Pt() : new Pt(this.createFactory(t, e));
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return as;
    } }), as.reduce = function (t, e) {
    return new as(e).reduce(t);
  }, as.reducePointwise = function (t, e) {
    var n = new as(e);return n.setPointwise(!0), n.reduce(t);
  };var Oo = Object.freeze({ GeometryPrecisionReducer: as });Ws(us.prototype, { simplifySection: function simplifySection(t, e) {
      if (t + 1 === e) return null;this.seg.p0 = this.pts[t], this.seg.p1 = this.pts[e];for (var n = -1, i = t, r = t + 1; r < e; r++) {
        var s = this.seg.distance(this.pts[r]);s > n && (n = s, i = r);
      }if (n <= this.distanceTolerance) for (var r = t + 1; r < e; r++) {
        this.usePt[r] = !1;
      } else this.simplifySection(t, i), this.simplifySection(i, e);
    }, setDistanceTolerance: function setDistanceTolerance(t) {
      this.distanceTolerance = t;
    }, simplify: function simplify() {
      this.usePt = new Array(this.pts.length).fill(null);for (var t = 0; t < this.pts.length; t++) {
        this.usePt[t] = !0;
      }this.simplifySection(0, this.pts.length - 1);for (var e = new E(), t = 0; t < this.pts.length; t++) {
        this.usePt[t] && e.add(new c(this.pts[t]));
      }return e.toCoordinateArray();
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return us;
    } }), us.simplify = function (t, e) {
    var n = new us(t);return n.setDistanceTolerance(e), n.simplify();
  }, Ws(ls.prototype, { setEnsureValid: function setEnsureValid(t) {
      this.isEnsureValidTopology = t;
    }, getResultGeometry: function getResultGeometry() {
      return this.inputGeom.isEmpty() ? this.inputGeom.copy() : new hs(this.isEnsureValidTopology, this.distanceTolerance).transform(this.inputGeom);
    }, setDistanceTolerance: function setDistanceTolerance(t) {
      if (t < 0) throw new n("Tolerance must be non-negative");this.distanceTolerance = t;
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return ls;
    } }), ls.simplify = function (t, e) {
    var n = new ls(t);return n.setDistanceTolerance(e), n.getResultGeometry();
  }, js(hs, pe), Ws(hs.prototype, { transformPolygon: function transformPolygon(t, e) {
      if (t.isEmpty()) return null;var n = pe.prototype.transformPolygon.call(this, t, e);return e instanceof Tt ? n : this.createValidArea(n);
    }, createValidArea: function createValidArea(t) {
      return this.isEnsureValidTopology ? t.buffer(0) : t;
    }, transformCoordinates: function transformCoordinates(t, e) {
      var n = t.toCoordinateArray(),
          i = null;return i = 0 === n.length ? new Array(0).fill(null) : us.simplify(n, this.distanceTolerance), this.factory.getCoordinateSequenceFactory().create(i);
    }, transformMultiPolygon: function transformMultiPolygon(t, e) {
      var n = pe.prototype.transformMultiPolygon.call(this, t, e);return this.createValidArea(n);
    }, transformLinearRing: function transformLinearRing(t, e) {
      var n = e instanceof wt,
          i = pe.prototype.transformLinearRing.call(this, t, e);return !n || i instanceof Rt ? i : null;
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return hs;
    } }), ls.DPTransformer = hs, js(cs, ae), Ws(cs.prototype, { getIndex: function getIndex() {
      return this.index;
    }, getParent: function getParent() {
      return this.parent;
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return cs;
    } }), Ws(fs.prototype, { addToResult: function addToResult(t) {
      this.resultSegs.add(t);
    }, asLineString: function asLineString() {
      return this.parentLine.getFactory().createLineString(fs.extractCoordinates(this.resultSegs));
    }, getResultSize: function getResultSize() {
      var t = this.resultSegs.size();return 0 === t ? 0 : t + 1;
    }, getParent: function getParent() {
      return this.parentLine;
    }, getSegment: function getSegment(t) {
      return this.segs[t];
    }, getParentCoordinates: function getParentCoordinates() {
      return this.parentLine.getCoordinates();
    }, getMinimumSize: function getMinimumSize() {
      return this.minimumSize;
    }, asLinearRing: function asLinearRing() {
      return this.parentLine.getFactory().createLinearRing(fs.extractCoordinates(this.resultSegs));
    }, getSegments: function getSegments() {
      return this.segs;
    }, init: function init() {
      var t = this.parentLine.getCoordinates();this.segs = new Array(t.length - 1).fill(null);for (var e = 0; e < t.length - 1; e++) {
        var n = new cs(t[e], t[e + 1], this.parentLine, e);this.segs[e] = n;
      }
    }, getResultCoordinates: function getResultCoordinates() {
      return fs.extractCoordinates(this.resultSegs);
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return fs;
    } }), fs.extractCoordinates = function (t) {
    for (var e = new Array(t.size() + 1).fill(null), n = null, i = 0; i < t.size(); i++) {
      n = t.get(i), e[i] = n.p0;
    }return e[e.length - 1] = n.p1, e;
  }, Ws(gs.prototype, { remove: function remove(t) {
      this.index.remove(new I(t.p0, t.p1), t);
    }, add: function add() {
      if (arguments[0] instanceof fs) for (var t = arguments[0], e = t.getSegments(), n = 0; n < e.length; n++) {
        var i = e[n];this.add(i);
      } else if (arguments[0] instanceof ae) {
        var r = arguments[0];this.index.insert(new I(r.p0, r.p1), r);
      }
    }, query: function query(t) {
      var e = new I(t.p0, t.p1),
          n = new ds(t);return this.index.query(e, n), n.getItems();
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return gs;
    } }), Ws(ds.prototype, { visitItem: function visitItem(t) {
      var e = t;I.intersects(e.p0, e.p1, this.querySeg.p0, this.querySeg.p1) && this.items.add(t);
    }, getItems: function getItems() {
      return this.items;
    }, interfaces_: function interfaces_() {
      return [Oe];
    }, getClass: function getClass() {
      return ds;
    } }), Ws(ps.prototype, { flatten: function flatten(t, e) {
      var n = this.linePts[t],
          i = this.linePts[e],
          r = new ae(n, i);return this.remove(this.line, t, e), this.outputIndex.add(r), r;
    }, hasBadIntersection: function hasBadIntersection(t, e, n) {
      return !!this.hasBadOutputIntersection(n) || !!this.hasBadInputIntersection(t, e, n);
    }, setDistanceTolerance: function setDistanceTolerance(t) {
      this.distanceTolerance = t;
    }, simplifySection: function simplifySection(t, e, n) {
      n += 1;var i = new Array(2).fill(null);if (t + 1 === e) {
        var r = this.line.getSegment(t);return this.line.addToResult(r), null;
      }var s = !0;if (this.line.getResultSize() < this.line.getMinimumSize()) {
        n + 1 < this.line.getMinimumSize() && (s = !1);
      }var o = new Array(1).fill(null),
          a = this.findFurthestPoint(this.linePts, t, e, o);o[0] > this.distanceTolerance && (s = !1);var u = new ae();if (u.p0 = this.linePts[t], u.p1 = this.linePts[e], i[0] = t, i[1] = e, this.hasBadIntersection(this.line, i, u) && (s = !1), s) {
        var r = this.flatten(t, e);return this.line.addToResult(r), null;
      }this.simplifySection(t, a, n), this.simplifySection(a, e, n);
    }, hasBadOutputIntersection: function hasBadOutputIntersection(t) {
      for (var e = this.outputIndex.query(t), n = e.iterator(); n.hasNext();) {
        var i = n.next();if (this.hasInteriorIntersection(i, t)) return !0;
      }return !1;
    }, findFurthestPoint: function findFurthestPoint(t, e, n, i) {
      var r = new ae();r.p0 = t[e], r.p1 = t[n];for (var s = -1, o = e, a = e + 1; a < n; a++) {
        var u = t[a],
            l = r.distance(u);l > s && (s = l, o = a);
      }return i[0] = s, o;
    }, simplify: function simplify(t) {
      this.line = t, this.linePts = t.getParentCoordinates(), this.simplifySection(0, this.linePts.length - 1, 0);
    }, remove: function remove(t, e, n) {
      for (var i = e; i < n; i++) {
        var r = t.getSegment(i);this.inputIndex.remove(r);
      }
    }, hasInteriorIntersection: function hasInteriorIntersection(t, e) {
      return this.li.computeIntersection(t.p0, t.p1, e.p0, e.p1), this.li.isInteriorIntersection();
    }, hasBadInputIntersection: function hasBadInputIntersection(t, e, n) {
      for (var i = this.inputIndex.query(n), r = i.iterator(); r.hasNext();) {
        var s = r.next();if (this.hasInteriorIntersection(s, n)) {
          if (ps.isInLineSection(t, e, s)) continue;return !0;
        }
      }return !1;
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return ps;
    } }), ps.isInLineSection = function (t, e, n) {
    if (n.getParent() !== t.getParent()) return !1;var i = n.getIndex();return i >= e[0] && i < e[1];
  }, Ws(ms.prototype, { setDistanceTolerance: function setDistanceTolerance(t) {
      this.distanceTolerance = t;
    }, simplify: function simplify(t) {
      for (var e = t.iterator(); e.hasNext();) {
        this.inputIndex.add(e.next());
      }for (var e = t.iterator(); e.hasNext();) {
        var n = new ps(this.inputIndex, this.outputIndex);n.setDistanceTolerance(this.distanceTolerance), n.simplify(e.next());
      }
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return ms;
    } }), Ws(vs.prototype, { getResultGeometry: function getResultGeometry() {
      return this.inputGeom.isEmpty() ? this.inputGeom.copy() : (this.linestringMap = new Zt(), this.inputGeom.apply(new xs(this)), this.lineSimplifier.simplify(this.linestringMap.values()), new ys(this.linestringMap).transform(this.inputGeom));
    }, setDistanceTolerance: function setDistanceTolerance(t) {
      if (t < 0) throw new n("Tolerance must be non-negative");this.lineSimplifier.setDistanceTolerance(t);
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return vs;
    } }), vs.simplify = function (t, e) {
    var n = new vs(t);return n.setDistanceTolerance(e), n.getResultGeometry();
  }, js(ys, pe), Ws(ys.prototype, { transformCoordinates: function transformCoordinates(t, e) {
      if (0 === t.size()) return null;if (e instanceof It) {
        var n = this.linestringMap.get(e);return this.createCoordinateSequence(n.getResultCoordinates());
      }return pe.prototype.transformCoordinates.call(this, t, e);
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return ys;
    } }), Ws(xs.prototype, { filter: function filter(t) {
      if (t instanceof It) {
        var e = t;if (e.isEmpty()) return null;var n = e.isClosed() ? 4 : 2,
            i = new fs(e, n);this.tps.linestringMap.put(e, i);
      }
    }, interfaces_: function interfaces_() {
      return [A];
    }, getClass: function getClass() {
      return xs;
    } }), vs.LineStringTransformer = ys, vs.LineStringMapBuilderFilter = xs;var _o = Object.freeze({ DouglasPeuckerSimplifier: ls, TopologyPreservingSimplifier: vs });Ws(Es.prototype, { splitAt: function splitAt() {
      if (1 === arguments.length) {
        var t = arguments[0],
            e = this.minimumLen / this.segLen;if (t.distance(this.seg.p0) < this.minimumLen) return this.splitPt = this.seg.pointAlong(e), null;if (t.distance(this.seg.p1) < this.minimumLen) return this.splitPt = Es.pointAlongReverse(this.seg, e), null;this.splitPt = t;
      } else if (2 === arguments.length) {
        var n = arguments[0],
            i = arguments[1],
            r = this.getConstrainedLength(n),
            s = r / this.segLen;i.equals2D(this.seg.p0) ? this.splitPt = this.seg.pointAlong(s) : this.splitPt = Es.pointAlongReverse(this.seg, s);
      }
    }, setMinimumLength: function setMinimumLength(t) {
      this.minimumLen = t;
    }, getConstrainedLength: function getConstrainedLength(t) {
      return t < this.minimumLen ? this.minimumLen : t;
    }, getSplitPoint: function getSplitPoint() {
      return this.splitPt;
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return Es;
    } }), Es.pointAlongReverse = function (t, e) {
    var n = new c();return n.x = t.p1.x - e * (t.p1.x - t.p0.x), n.y = t.p1.y - e * (t.p1.y - t.p0.y), n;
  }, Ws(Is.prototype, { findSplitPoint: function findSplitPoint(t, e) {}, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return Is;
    } }), Ws(Ns.prototype, { findSplitPoint: function findSplitPoint(t, e) {
      var n = t.getLineSegment(),
          i = n.getLength(),
          r = i / 2,
          s = new Es(n),
          o = Ns.projectedSplitPoint(t, e),
          a = 2 * o.distance(e) * .8,
          u = a;return u > r && (u = r), s.setMinimumLength(u), s.splitAt(o), s.getSplitPoint();
    }, interfaces_: function interfaces_() {
      return [Is];
    }, getClass: function getClass() {
      return Ns;
    } }), Ns.projectedSplitPoint = function (t, e) {
    return t.getLineSegment().project(e);
  }, Ws(Cs.prototype, { interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return Cs;
    } }), Cs.triArea = function (t, e, n) {
    return (e.x - t.x) * (n.y - t.y) - (e.y - t.y) * (n.x - t.x);
  }, Cs.isInCircleDDNormalized = function (t, e, n, i) {
    var r = P.valueOf(t.x).selfSubtract(i.x),
        s = P.valueOf(t.y).selfSubtract(i.y),
        o = P.valueOf(e.x).selfSubtract(i.x),
        a = P.valueOf(e.y).selfSubtract(i.y),
        u = P.valueOf(n.x).selfSubtract(i.x),
        l = P.valueOf(n.y).selfSubtract(i.y),
        h = r.multiply(a).selfSubtract(o.multiply(s)),
        c = o.multiply(l).selfSubtract(u.multiply(a)),
        f = u.multiply(s).selfSubtract(r.multiply(l)),
        g = r.multiply(r).selfAdd(s.multiply(s)),
        d = o.multiply(o).selfAdd(a.multiply(a)),
        p = u.multiply(u).selfAdd(l.multiply(l));return g.selfMultiply(c).selfAdd(d.selfMultiply(f)).selfAdd(p.selfMultiply(h)).doubleValue() > 0;
  }, Cs.checkRobustInCircle = function (t, e, n, i) {
    var r = Cs.isInCircleNonRobust(t, e, n, i),
        s = Cs.isInCircleDDSlow(t, e, n, i),
        o = Cs.isInCircleCC(t, e, n, i),
        a = Ei.circumcentre(t, e, n);_.out.println("p radius diff a = " + Math.abs(i.distance(a) - t.distance(a)) / t.distance(a)), r === s && r === o || (_.out.println("inCircle robustness failure (double result = " + r + ", DD result = " + s + ", CC result = " + o + ")"), _.out.println(ee.toLineString(new Dt([t, e, n, i]))), _.out.println("Circumcentre = " + ee.toPoint(a) + " radius = " + t.distance(a)), _.out.println("p radius diff a = " + Math.abs(i.distance(a) / t.distance(a) - 1)), _.out.println("p radius diff b = " + Math.abs(i.distance(a) / e.distance(a) - 1)), _.out.println("p radius diff c = " + Math.abs(i.distance(a) / n.distance(a) - 1)), _.out.println());
  }, Cs.isInCircleDDFast = function (t, e, n, i) {
    var r = P.sqr(t.x).selfAdd(P.sqr(t.y)).selfMultiply(Cs.triAreaDDFast(e, n, i)),
        s = P.sqr(e.x).selfAdd(P.sqr(e.y)).selfMultiply(Cs.triAreaDDFast(t, n, i)),
        o = P.sqr(n.x).selfAdd(P.sqr(n.y)).selfMultiply(Cs.triAreaDDFast(t, e, i)),
        a = P.sqr(i.x).selfAdd(P.sqr(i.y)).selfMultiply(Cs.triAreaDDFast(t, e, n));return r.selfSubtract(s).selfAdd(o).selfSubtract(a).doubleValue() > 0;
  }, Cs.isInCircleCC = function (t, e, n, i) {
    var r = Ei.circumcentre(t, e, n),
        s = t.distance(r);return i.distance(r) - s <= 0;
  }, Cs.isInCircleNormalized = function (t, e, n, i) {
    var r = t.x - i.x,
        s = t.y - i.y,
        o = e.x - i.x,
        a = e.y - i.y,
        u = n.x - i.x,
        l = n.y - i.y;return (r * r + s * s) * (o * l - u * a) + (o * o + a * a) * (u * s - r * l) + (u * u + l * l) * (r * a - o * s) > 0;
  }, Cs.isInCircleDDSlow = function (t, e, n, i) {
    var r = P.valueOf(i.x),
        s = P.valueOf(i.y),
        o = P.valueOf(t.x),
        a = P.valueOf(t.y),
        u = P.valueOf(e.x),
        l = P.valueOf(e.y),
        h = P.valueOf(n.x),
        c = P.valueOf(n.y),
        f = o.multiply(o).add(a.multiply(a)).multiply(Cs.triAreaDDSlow(u, l, h, c, r, s)),
        g = u.multiply(u).add(l.multiply(l)).multiply(Cs.triAreaDDSlow(o, a, h, c, r, s)),
        d = h.multiply(h).add(c.multiply(c)).multiply(Cs.triAreaDDSlow(o, a, u, l, r, s)),
        p = r.multiply(r).add(s.multiply(s)).multiply(Cs.triAreaDDSlow(o, a, u, l, h, c));return f.subtract(g).add(d).subtract(p).doubleValue() > 0;
  }, Cs.isInCircleNonRobust = function (t, e, n, i) {
    return (t.x * t.x + t.y * t.y) * Cs.triArea(e, n, i) - (e.x * e.x + e.y * e.y) * Cs.triArea(t, n, i) + (n.x * n.x + n.y * n.y) * Cs.triArea(t, e, i) - (i.x * i.x + i.y * i.y) * Cs.triArea(t, e, n) > 0;
  }, Cs.isInCircleRobust = function (t, e, n, i) {
    return Cs.isInCircleNormalized(t, e, n, i);
  }, Cs.triAreaDDSlow = function (t, e, n, i, r, s) {
    return n.subtract(t).multiply(s.subtract(e)).subtract(i.subtract(e).multiply(r.subtract(t)));
  }, Cs.triAreaDDFast = function (t, e, n) {
    var i = P.valueOf(e.x).selfSubtract(t.x).selfMultiply(P.valueOf(n.y).selfSubtract(t.y)),
        r = P.valueOf(e.y).selfSubtract(t.y).selfMultiply(P.valueOf(n.x).selfSubtract(t.x));return i.selfSubtract(r);
  }, Ws(Ss.prototype, { circleCenter: function circleCenter(t, e) {
      var n = new Ss(this.getX(), this.getY()),
          i = this.bisector(n, t),
          r = this.bisector(t, e),
          s = new M(i, r),
          o = null;try {
        o = new Ss(s.getX(), s.getY());
      } catch (i) {
        if (!(i instanceof C)) throw i;_.err.println("a: " + n + "  b: " + t + "  c: " + e), _.err.println(i);
      } finally {}return o;
    }, dot: function dot(t) {
      return this.p.x * t.getX() + this.p.y * t.getY();
    }, magn: function magn() {
      return Math.sqrt(this.p.x * this.p.x + this.p.y * this.p.y);
    }, getZ: function getZ() {
      return this.p.z;
    }, bisector: function bisector(t, e) {
      var n = e.getX() - t.getX(),
          i = e.getY() - t.getY();return new M(new M(t.getX() + n / 2, t.getY() + i / 2, 1), new M(t.getX() - i + n / 2, t.getY() + n + i / 2, 1));
    }, equals: function equals() {
      if (1 === arguments.length) {
        var t = arguments[0];return this.p.x === t.getX() && this.p.y === t.getY();
      }if (2 === arguments.length) {
        var e = arguments[0],
            n = arguments[1];return this.p.distance(e.getCoordinate()) < n;
      }
    }, getCoordinate: function getCoordinate() {
      return this.p;
    }, isInCircle: function isInCircle(t, e, n) {
      return Cs.isInCircleRobust(t.p, e.p, n.p, this.p);
    }, interpolateZValue: function interpolateZValue(t, e, n) {
      var i = t.getX(),
          r = t.getY(),
          s = e.getX() - i,
          o = n.getX() - i,
          a = e.getY() - r,
          u = n.getY() - r,
          l = s * u - o * a,
          h = this.getX() - i,
          c = this.getY() - r,
          f = (u * h - o * c) / l,
          g = (-a * h + s * c) / l;return t.getZ() + f * (e.getZ() - t.getZ()) + g * (n.getZ() - t.getZ());
    }, midPoint: function midPoint(t) {
      return new Ss((this.p.x + t.getX()) / 2, (this.p.y + t.getY()) / 2, (this.p.z + t.getZ()) / 2);
    }, rightOf: function rightOf(t) {
      return this.isCCW(t.dest(), t.orig());
    }, isCCW: function isCCW(t, e) {
      return (t.p.x - this.p.x) * (e.p.y - this.p.y) - (t.p.y - this.p.y) * (e.p.x - this.p.x) > 0;
    }, getX: function getX() {
      return this.p.x;
    }, crossProduct: function crossProduct(t) {
      return this.p.x * t.getY() - this.p.y * t.getX();
    }, setZ: function setZ(t) {
      this.p.z = t;
    }, times: function times(t) {
      return new Ss(t * this.p.x, t * this.p.y);
    }, cross: function cross() {
      return new Ss(this.p.y, -this.p.x);
    }, leftOf: function leftOf(t) {
      return this.isCCW(t.orig(), t.dest());
    }, toString: function toString() {
      return "POINT (" + this.p.x + " " + this.p.y + ")";
    }, sub: function sub(t) {
      return new Ss(this.p.x - t.getX(), this.p.y - t.getY());
    }, getY: function getY() {
      return this.p.y;
    }, classify: function classify(t, e) {
      var n = this,
          i = e.sub(t),
          r = n.sub(t),
          s = i.crossProduct(r);return s > 0 ? Ss.LEFT : s < 0 ? Ss.RIGHT : i.getX() * r.getX() < 0 || i.getY() * r.getY() < 0 ? Ss.BEHIND : i.magn() < r.magn() ? Ss.BEYOND : t.equals(n) ? Ss.ORIGIN : e.equals(n) ? Ss.DESTINATION : Ss.BETWEEN;
    }, sum: function sum(t) {
      return new Ss(this.p.x + t.getX(), this.p.y + t.getY());
    }, distance: function distance(t, e) {
      return Math.sqrt(Math.pow(e.getX() - t.getX(), 2) + Math.pow(e.getY() - t.getY(), 2));
    }, circumRadiusRatio: function circumRadiusRatio(t, e) {
      var n = this.circleCenter(t, e),
          i = this.distance(n, t),
          r = this.distance(this, t),
          s = this.distance(t, e);return s < r && (r = s), s = this.distance(e, this), s < r && (r = s), i / r;
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return Ss;
    } }), Ss.interpolateZ = function () {
    if (3 === arguments.length) {
      var t = arguments[0],
          e = arguments[1],
          n = arguments[2],
          i = e.distance(n),
          r = t.distance(e),
          s = n.z - e.z;return e.z + s * (r / i);
    }if (4 === arguments.length) {
      var o = arguments[0],
          a = arguments[1],
          u = arguments[2],
          l = arguments[3],
          h = a.x,
          c = a.y,
          f = u.x - h,
          g = l.x - h,
          d = u.y - c,
          p = l.y - c,
          m = f * p - g * d,
          v = o.x - h,
          y = o.y - c,
          x = (p * v - g * y) / m,
          E = (-d * v + f * y) / m;return a.z + x * (u.z - a.z) + E * (l.z - a.z);
    }
  }, Ss.LEFT = 0, Ss.RIGHT = 1, Ss.BEYOND = 2, Ss.BEHIND = 3, Ss.BETWEEN = 4, Ss.ORIGIN = 5, Ss.DESTINATION = 6, js(ws, Ss), Ws(ws.prototype, { getConstraint: function getConstraint() {
      return this.constraint;
    }, setOnConstraint: function setOnConstraint(t) {
      this._isOnConstraint = t;
    }, merge: function merge(t) {
      t._isOnConstraint && (this._isOnConstraint = !0, this.constraint = t.constraint);
    }, isOnConstraint: function isOnConstraint() {
      return this._isOnConstraint;
    }, setConstraint: function setConstraint(t) {
      this._isOnConstraint = !0, this.constraint = t;
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return ws;
    } }), Ws(Ls.prototype, { equalsNonOriented: function equalsNonOriented(t) {
      return !!this.equalsOriented(t) || !!this.equalsOriented(t.sym());
    }, toLineSegment: function toLineSegment() {
      return new ae(this.vertex.getCoordinate(), this.dest().getCoordinate());
    }, dest: function dest() {
      return this.sym().orig();
    }, oNext: function oNext() {
      return this.next;
    }, equalsOriented: function equalsOriented(t) {
      return !(!this.orig().getCoordinate().equals2D(t.orig().getCoordinate()) || !this.dest().getCoordinate().equals2D(t.dest().getCoordinate()));
    }, dNext: function dNext() {
      return this.sym().oNext().sym();
    }, lPrev: function lPrev() {
      return this.next.sym();
    }, rPrev: function rPrev() {
      return this.sym().oNext();
    }, rot: function rot() {
      return this._rot;
    }, oPrev: function oPrev() {
      return this._rot.next._rot;
    }, sym: function sym() {
      return this._rot._rot;
    }, setOrig: function setOrig(t) {
      this.vertex = t;
    }, lNext: function lNext() {
      return this.invRot().oNext().rot();
    }, getLength: function getLength() {
      return this.orig().getCoordinate().distance(this.dest().getCoordinate());
    }, invRot: function invRot() {
      return this._rot.sym();
    }, setDest: function setDest(t) {
      this.sym().setOrig(t);
    }, setData: function setData(t) {
      this.data = t;
    }, getData: function getData() {
      return this.data;
    }, delete: function _delete() {
      this._rot = null;
    }, orig: function orig() {
      return this.vertex;
    }, rNext: function rNext() {
      return this._rot.next.invRot();
    }, toString: function toString() {
      var t = this.vertex.getCoordinate(),
          e = this.dest().getCoordinate();return ee.toLineString(t, e);
    }, isLive: function isLive() {
      return null !== this._rot;
    }, getPrimary: function getPrimary() {
      return this.orig().getCoordinate().compareTo(this.dest().getCoordinate()) <= 0 ? this : this.sym();
    }, dPrev: function dPrev() {
      return this.invRot().oNext().invRot();
    }, setNext: function setNext(t) {
      this.next = t;
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return Ls;
    } }), Ls.makeEdge = function (t, e) {
    var n = new Ls(),
        i = new Ls(),
        r = new Ls(),
        s = new Ls();n._rot = i, i._rot = r, r._rot = s, s._rot = n, n.setNext(n), i.setNext(s), r.setNext(r), s.setNext(i);var o = n;return o.setOrig(t), o.setDest(e), o;
  }, Ls.swap = function (t) {
    var e = t.oPrev(),
        n = t.sym().oPrev();Ls.splice(t, e), Ls.splice(t.sym(), n), Ls.splice(t, e.lNext()), Ls.splice(t.sym(), n.lNext()), t.setOrig(e.dest()), t.setDest(n.dest());
  }, Ls.splice = function (t, e) {
    var n = t.oNext().rot(),
        i = e.oNext().rot(),
        r = e.oNext(),
        s = t.oNext(),
        o = i.oNext(),
        a = n.oNext();t.setNext(r), e.setNext(s), n.setNext(o), i.setNext(a);
  }, Ls.connect = function (t, e) {
    var n = Ls.makeEdge(t.dest(), e.orig());return Ls.splice(n, t.lNext()), Ls.splice(n.sym(), e), n;
  }, Ws(Rs.prototype, { insertSite: function insertSite(t) {
      var e = this.subdiv.locate(t);if (this.subdiv.isVertexOfEdge(e, t)) return e;this.subdiv.isOnEdge(e, t.getCoordinate()) && (e = e.oPrev(), this.subdiv.delete(e.oNext()));var n = this.subdiv.makeEdge(e.orig(), t);Ls.splice(n, e);var i = n;do {
        n = this.subdiv.connect(e, n.sym()), e = n.oPrev();
      } while (e.lNext() !== i);for (;;) {
        var r = e.oPrev();if (r.dest().rightOf(e) && t.isInCircle(e.orig(), r.dest(), e.dest())) Ls.swap(e), e = e.oPrev();else {
          if (e.oNext() === i) return n;e = e.oNext().lPrev();
        }
      }
    }, insertSites: function insertSites(t) {
      for (var e = t.iterator(); e.hasNext();) {
        var n = e.next();this.insertSite(n);
      }
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return Rs;
    } }), Ws(Ts.prototype, { locate: function locate(t) {}, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return Ts;
    } }), Ws(Ps.prototype, { init: function init() {
      this.lastEdge = this.findEdge();
    }, locate: function locate(t) {
      this.lastEdge.isLive() || this.init();var e = this.subdiv.locateFromEdge(t, this.lastEdge);return this.lastEdge = e, e;
    }, findEdge: function findEdge() {
      return this.subdiv.getEdges().iterator().next();
    }, interfaces_: function interfaces_() {
      return [Ts];
    }, getClass: function getClass() {
      return Ps;
    } }), js(bs, u), Ws(bs.prototype, { getSegment: function getSegment() {
      return this.seg;
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return bs;
    } }), bs.msgWithSpatial = function (t, e) {
    return null !== e ? t + " [ " + e + " ]" : t;
  }, Ws(Os.prototype, { visit: function visit(t) {}, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return Os;
    } }), Ws(_s.prototype, { getTriangleVertices: function getTriangleVertices(t) {
      var e = new As();return this.visitTriangles(e, t), e.getTriangleVertices();
    }, isFrameVertex: function isFrameVertex(t) {
      return !!t.equals(this.frameVertex[0]) || !!t.equals(this.frameVertex[1]) || !!t.equals(this.frameVertex[2]);
    }, isVertexOfEdge: function isVertexOfEdge(t, e) {
      return !(!e.equals(t.orig(), this.tolerance) && !e.equals(t.dest(), this.tolerance));
    }, connect: function connect(t, e) {
      var n = Ls.connect(t, e);return this.quadEdges.add(n), n;
    }, getVoronoiCellPolygon: function getVoronoiCellPolygon(t, e) {
      var n = new x(),
          i = t;do {
        var r = t.rot().orig().getCoordinate();n.add(r), t = t.oPrev();
      } while (t !== i);var s = new E();s.addAll(n, !1), s.closeRing(), s.size() < 4 && (_.out.println(s), s.add(s.get(s.size() - 1), !0));var o = s.toCoordinateArray(),
          a = e.createPolygon(e.createLinearRing(o), null),
          u = i.orig();return a.setUserData(u.getCoordinate()), a;
    }, setLocator: function setLocator(t) {
      this.locator = t;
    }, initSubdiv: function initSubdiv() {
      var t = this.makeEdge(this.frameVertex[0], this.frameVertex[1]),
          e = this.makeEdge(this.frameVertex[1], this.frameVertex[2]);Ls.splice(t.sym(), e);var n = this.makeEdge(this.frameVertex[2], this.frameVertex[0]);return Ls.splice(e.sym(), n), Ls.splice(n.sym(), t), t;
    }, isFrameBorderEdge: function isFrameBorderEdge(t) {
      var e = new Array(3).fill(null);_s.getTriangleEdges(t, e);var n = new Array(3).fill(null);_s.getTriangleEdges(t.sym(), n);var i = t.lNext().dest();if (this.isFrameVertex(i)) return !0;var r = t.sym().lNext().dest();return !!this.isFrameVertex(r);
    }, makeEdge: function makeEdge(t, e) {
      var n = Ls.makeEdge(t, e);return this.quadEdges.add(n), n;
    }, visitTriangles: function visitTriangles(t, e) {
      this.visitedKey++;var n = new ce();n.push(this.startingEdge);for (var i = new K(); !n.empty();) {
        var r = n.pop();if (!i.contains(r)) {
          var s = this.fetchTriangleToVisit(r, n, e, i);null !== s && t.visit(s);
        }
      }
    }, isFrameEdge: function isFrameEdge(t) {
      return !(!this.isFrameVertex(t.orig()) && !this.isFrameVertex(t.dest()));
    }, isOnEdge: function isOnEdge(t, e) {
      return this.seg.setCoordinates(t.orig().getCoordinate(), t.dest().getCoordinate()), this.seg.distance(e) < this.edgeCoincidenceTolerance;
    }, getEnvelope: function getEnvelope() {
      return new I(this.frameEnv);
    }, createFrame: function createFrame(t) {
      var e = t.getWidth(),
          n = t.getHeight(),
          i = 0;i = e > n ? 10 * e : 10 * n, this.frameVertex[0] = new Ss((t.getMaxX() + t.getMinX()) / 2, t.getMaxY() + i), this.frameVertex[1] = new Ss(t.getMinX() - i, t.getMinY() - i), this.frameVertex[2] = new Ss(t.getMaxX() + i, t.getMinY() - i), this.frameEnv = new I(this.frameVertex[0].getCoordinate(), this.frameVertex[1].getCoordinate()), this.frameEnv.expandToInclude(this.frameVertex[2].getCoordinate());
    }, getTriangleCoordinates: function getTriangleCoordinates(t) {
      var e = new Fs();return this.visitTriangles(e, t), e.getTriangles();
    }, getVertices: function getVertices(t) {
      for (var e = new K(), n = this.quadEdges.iterator(); n.hasNext();) {
        var i = n.next(),
            r = i.orig();!t && this.isFrameVertex(r) || e.add(r);var s = i.dest();!t && this.isFrameVertex(s) || e.add(s);
      }return e;
    }, fetchTriangleToVisit: function fetchTriangleToVisit(t, e, n, i) {
      var r = t,
          s = 0,
          o = !1;do {
        this.triEdges[s] = r, this.isFrameEdge(r) && (o = !0);var a = r.sym();i.contains(a) || e.push(a), i.add(r), s++, r = r.lNext();
      } while (r !== t);return o && !n ? null : this.triEdges;
    }, getEdges: function getEdges() {
      if (0 === arguments.length) return this.quadEdges;if (1 === arguments.length) {
        for (var t = arguments[0], e = this.getPrimaryEdges(!1), n = new Array(e.size()).fill(null), i = 0, r = e.iterator(); r.hasNext();) {
          var s = r.next();n[i++] = t.createLineString([s.orig().getCoordinate(), s.dest().getCoordinate()]);
        }return t.createMultiLineString(n);
      }
    }, getVertexUniqueEdges: function getVertexUniqueEdges(t) {
      for (var e = new x(), n = new K(), i = this.quadEdges.iterator(); i.hasNext();) {
        var r = i.next(),
            s = r.orig();n.contains(s) || (n.add(s), !t && this.isFrameVertex(s) || e.add(r));var o = r.sym(),
            a = o.orig();n.contains(a) || (n.add(a), !t && this.isFrameVertex(a) || e.add(o));
      }return e;
    }, getTriangleEdges: function getTriangleEdges(t) {
      var e = new Ds();return this.visitTriangles(e, t), e.getTriangleEdges();
    }, getPrimaryEdges: function getPrimaryEdges(t) {
      this.visitedKey++;var e = new x(),
          n = new ce();n.push(this.startingEdge);for (var i = new K(); !n.empty();) {
        var r = n.pop();if (!i.contains(r)) {
          var s = r.getPrimary();!t && this.isFrameEdge(s) || e.add(s), n.push(r.oNext()), n.push(r.sym().oNext()), i.add(r), i.add(r.sym());
        }
      }return e;
    }, delete: function _delete(t) {
      Ls.splice(t, t.oPrev()), Ls.splice(t.sym(), t.sym().oPrev());var e = t.sym(),
          n = t.rot(),
          i = t.rot().sym();this.quadEdges.remove(t), this.quadEdges.remove(e), this.quadEdges.remove(n), this.quadEdges.remove(i), t.delete(), e.delete(), n.delete(), i.delete();
    }, locateFromEdge: function locateFromEdge(t, e) {
      for (var n = 0, i = this.quadEdges.size(), r = e;;) {
        if (++n > i) throw new bs(r.toLineSegment());if (t.equals(r.orig()) || t.equals(r.dest())) break;if (t.rightOf(r)) r = r.sym();else if (t.rightOf(r.oNext())) {
          if (t.rightOf(r.dPrev())) break;r = r.dPrev();
        } else r = r.oNext();
      }return r;
    }, getTolerance: function getTolerance() {
      return this.tolerance;
    }, getVoronoiCellPolygons: function getVoronoiCellPolygons(t) {
      this.visitTriangles(new Ms(), !0);for (var e = new x(), n = this.getVertexUniqueEdges(!1), i = n.iterator(); i.hasNext();) {
        var r = i.next();e.add(this.getVoronoiCellPolygon(r, t));
      }return e;
    }, getVoronoiDiagram: function getVoronoiDiagram(t) {
      var e = this.getVoronoiCellPolygons(t);return t.createGeometryCollection($t.toGeometryArray(e));
    }, getTriangles: function getTriangles(t) {
      for (var e = this.getTriangleCoordinates(!1), n = new Array(e.size()).fill(null), i = 0, r = e.iterator(); r.hasNext();) {
        var s = r.next();n[i++] = t.createPolygon(t.createLinearRing(s), null);
      }return t.createGeometryCollection(n);
    }, insertSite: function insertSite(t) {
      var e = this.locate(t);if (t.equals(e.orig(), this.tolerance) || t.equals(e.dest(), this.tolerance)) return e;var n = this.makeEdge(e.orig(), t);Ls.splice(n, e);var i = n;do {
        n = this.connect(e, n.sym()), e = n.oPrev();
      } while (e.lNext() !== i);return i;
    }, locate: function locate() {
      if (1 === arguments.length) {
        if (arguments[0] instanceof Ss) {
          var t = arguments[0];return this.locator.locate(t);
        }if (arguments[0] instanceof c) {
          var e = arguments[0];return this.locator.locate(new Ss(e));
        }
      } else if (2 === arguments.length) {
        var n = arguments[0],
            i = arguments[1],
            r = this.locator.locate(new Ss(n));if (null === r) return null;var s = r;r.dest().getCoordinate().equals2D(n) && (s = r.sym());var o = s;do {
          if (o.dest().getCoordinate().equals2D(i)) return o;o = o.oNext();
        } while (o !== s);return null;
      }
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return _s;
    } }), _s.getTriangleEdges = function (t, e) {
    if (e[0] = t, e[1] = e[0].lNext(), e[2] = e[1].lNext(), e[2].lNext() !== e[0]) throw new n("Edges do not form a triangle");
  }, Ws(Ms.prototype, { visit: function visit(t) {
      for (var e = t[0].orig().getCoordinate(), n = t[1].orig().getCoordinate(), i = t[2].orig().getCoordinate(), r = Ei.circumcentre(e, n, i), s = new Ss(r), o = 0; o < 3; o++) {
        t[o].rot().setOrig(s);
      }
    }, interfaces_: function interfaces_() {
      return [Os];
    }, getClass: function getClass() {
      return Ms;
    } }), Ws(Ds.prototype, { getTriangleEdges: function getTriangleEdges() {
      return this.triList;
    }, visit: function visit(t) {
      this.triList.add(t.clone());
    }, interfaces_: function interfaces_() {
      return [Os];
    }, getClass: function getClass() {
      return Ds;
    } }), Ws(As.prototype, { visit: function visit(t) {
      this.triList.add([t[0].orig(), t[1].orig(), t[2].orig()]);
    }, getTriangleVertices: function getTriangleVertices() {
      return this.triList;
    }, interfaces_: function interfaces_() {
      return [Os];
    }, getClass: function getClass() {
      return As;
    } }), Ws(Fs.prototype, { checkTriangleSize: function checkTriangleSize(t) {
      t.length >= 2 ? ee.toLineString(t[0], t[1]) : t.length >= 1 && ee.toPoint(t[0]);
    }, visit: function visit(t) {
      this.coordList.clear();for (var e = 0; e < 3; e++) {
        var n = t[e].orig();this.coordList.add(n.getCoordinate());
      }if (this.coordList.size() > 0) {
        this.coordList.closeRing();var i = this.coordList.toCoordinateArray();if (4 !== i.length) return null;this.triCoords.add(i);
      }
    }, getTriangles: function getTriangles() {
      return this.triCoords;
    }, interfaces_: function interfaces_() {
      return [Os];
    }, getClass: function getClass() {
      return Fs;
    } }), _s.TriangleCircumcentreVisitor = Ms, _s.TriangleEdgesListVisitor = Ds, _s.TriangleVertexListVisitor = As, _s.TriangleCoordinatesVisitor = Fs, _s.EDGE_COINCIDENCE_TOL_FACTOR = 1e3, Ws(Gs.prototype, { getLineSegment: function getLineSegment() {
      return this.ls;
    }, getEndZ: function getEndZ() {
      return this.ls.getCoordinate(1).z;
    }, getStartZ: function getStartZ() {
      return this.ls.getCoordinate(0).z;
    }, intersection: function intersection(t) {
      return this.ls.intersection(t.getLineSegment());
    }, getStart: function getStart() {
      return this.ls.getCoordinate(0);
    }, getEnd: function getEnd() {
      return this.ls.getCoordinate(1);
    }, getEndY: function getEndY() {
      return this.ls.getCoordinate(1).y;
    }, getStartX: function getStartX() {
      return this.ls.getCoordinate(0).x;
    }, equalsTopo: function equalsTopo(t) {
      return this.ls.equalsTopo(t.getLineSegment());
    }, getStartY: function getStartY() {
      return this.ls.getCoordinate(0).y;
    }, setData: function setData(t) {
      this.data = t;
    }, getData: function getData() {
      return this.data;
    }, getEndX: function getEndX() {
      return this.ls.getCoordinate(1).x;
    }, toString: function toString() {
      return this.ls.toString();
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return Gs;
    } }), Ws(qs.prototype, { visit: function visit(t) {}, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return qs;
    } }), Ws(Bs.prototype, { isRepeated: function isRepeated() {
      return this.count > 1;
    }, getRight: function getRight() {
      return this.right;
    }, getCoordinate: function getCoordinate() {
      return this.p;
    }, setLeft: function setLeft(t) {
      this.left = t;
    }, getX: function getX() {
      return this.p.x;
    }, getData: function getData() {
      return this.data;
    }, getCount: function getCount() {
      return this.count;
    }, getLeft: function getLeft() {
      return this.left;
    }, getY: function getY() {
      return this.p.y;
    }, increment: function increment() {
      this.count = this.count + 1;
    }, setRight: function setRight(t) {
      this.right = t;
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return Bs;
    } }), Ws(zs.prototype, { insert: function insert() {
      if (1 === arguments.length) {
        var t = arguments[0];return this.insert(t, null);
      }if (2 === arguments.length) {
        var e = arguments[0],
            n = arguments[1];if (null === this.root) return this.root = new Bs(e, n), this.root;if (this.tolerance > 0) {
          var i = this.findBestMatchNode(e);if (null !== i) return i.increment(), i;
        }return this.insertExact(e, n);
      }
    }, query: function query() {
      if (1 === arguments.length) {
        var t = arguments[0],
            e = new x();return this.query(t, e), e;
      }if (2 === arguments.length) if (arguments[0] instanceof I && Zs(arguments[1], m)) {
        var n = arguments[0],
            i = arguments[1];this.queryNode(this.root, n, !0, { interfaces_: function interfaces_() {
            return [qs];
          }, visit: function visit(t) {
            i.add(t);
          } });
      } else if (arguments[0] instanceof I && Zs(arguments[1], qs)) {
        var r = arguments[0],
            s = arguments[1];this.queryNode(this.root, r, !0, s);
      }
    }, queryNode: function queryNode(t, e, n, i) {
      if (null === t) return null;var r = null,
          s = null,
          o = null;n ? (r = e.getMinX(), s = e.getMaxX(), o = t.getX()) : (r = e.getMinY(), s = e.getMaxY(), o = t.getY());var a = r < o,
          u = o <= s;a && this.queryNode(t.getLeft(), e, !n, i), e.contains(t.getCoordinate()) && i.visit(t), u && this.queryNode(t.getRight(), e, !n, i);
    }, findBestMatchNode: function findBestMatchNode(t) {
      var e = new Vs(t, this.tolerance);return this.query(e.queryEnvelope(), e), e.getNode();
    }, isEmpty: function isEmpty() {
      return null === this.root;
    }, insertExact: function insertExact(t, e) {
      for (var n = this.root, i = this.root, r = !0, s = !0; null !== n;) {
        if (null !== n) {
          if (t.distance(n.getCoordinate()) <= this.tolerance) return n.increment(), n;
        }s = r ? t.x < n.getX() : t.y < n.getY(), i = n, n = s ? n.getLeft() : n.getRight(), r = !r;
      }this.numberOfNodes = this.numberOfNodes + 1;var o = new Bs(t, e);return s ? i.setLeft(o) : i.setRight(o), o;
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return zs;
    } }), zs.toCoordinates = function () {
    if (1 === arguments.length) {
      var t = arguments[0];return zs.toCoordinates(t, !1);
    }if (2 === arguments.length) {
      for (var e = arguments[0], n = arguments[1], i = new E(), r = e.iterator(); r.hasNext();) {
        for (var s = r.next(), o = n ? s.getCount() : 1, a = 0; a < o; a++) {
          i.add(s.getCoordinate(), !0);
        }
      }return i.toCoordinateArray();
    }
  }, Ws(Vs.prototype, { visit: function visit(t) {
      var e = this.p.distance(t.getCoordinate());if (!(e <= this.tolerance)) return null;var n = !1;(null === this.matchNode || e < this.matchDist || null !== this.matchNode && e === this.matchDist && t.getCoordinate().compareTo(this.matchNode.getCoordinate()) < 1) && (n = !0), n && (this.matchNode = t, this.matchDist = e);
    }, queryEnvelope: function queryEnvelope() {
      var t = new I(this.p);return t.expandBy(this.tolerance), t;
    }, getNode: function getNode() {
      return this.matchNode;
    }, interfaces_: function interfaces_() {
      return [qs];
    }, getClass: function getClass() {
      return Vs;
    } }), zs.BestMatchVisitor = Vs, Ws(ks.prototype, { getInitialVertices: function getInitialVertices() {
      return this.initialVertices;
    }, getKDT: function getKDT() {
      return this.kdt;
    }, enforceConstraints: function enforceConstraints() {
      this.addConstraintVertices();var t = 0,
          e = 0;do {
        e = this.enforceGabriel(this.segments), t++;
      } while (e > 0 && t < ks.MAX_SPLIT_ITER);
    }, insertSites: function insertSites(t) {
      for (var e = t.iterator(); e.hasNext();) {
        var n = e.next();this.insertSite(n);
      }
    }, getVertexFactory: function getVertexFactory() {
      return this.vertexFactory;
    }, getPointArray: function getPointArray() {
      for (var t = new Array(this.initialVertices.size() + this.segVertices.size()).fill(null), e = 0, n = this.initialVertices.iterator(); n.hasNext();) {
        var i = n.next();t[e++] = i.getCoordinate();
      }for (var r = this.segVertices.iterator(); r.hasNext();) {
        var i = r.next();t[e++] = i.getCoordinate();
      }return t;
    }, setConstraints: function setConstraints(t, e) {
      this.segments = t, this.segVertices = e;
    }, computeConvexHull: function computeConvexHull() {
      var t = new $t(),
          e = this.getPointArray(),
          n = new ge(e, t);this.convexHull = n.getConvexHull();
    }, addConstraintVertices: function addConstraintVertices() {
      this.computeConvexHull(), this.insertSites(this.segVertices);
    }, findNonGabrielPoint: function findNonGabrielPoint(t) {
      var e = t.getStart(),
          n = t.getEnd(),
          r = new c((e.x + n.x) / 2, (e.y + n.y) / 2),
          s = e.distance(r),
          o = new I(r);o.expandBy(s);for (var a = this.kdt.query(o), u = null, l = i.MAX_VALUE, h = a.iterator(); h.hasNext();) {
        var f = h.next(),
            g = f.getCoordinate();if (!g.equals2D(e) && !g.equals2D(n)) {
          var d = r.distance(g);if (d < s) {
            var p = d;(null === u || p < l) && (u = g, l = p);
          }
        }
      }return u;
    }, getConstraintSegments: function getConstraintSegments() {
      return this.segments;
    }, setSplitPointFinder: function setSplitPointFinder(t) {
      this.splitFinder = t;
    }, getConvexHull: function getConvexHull() {
      return this.convexHull;
    }, getTolerance: function getTolerance() {
      return this.tolerance;
    }, enforceGabriel: function enforceGabriel(t) {
      for (var e = new x(), n = 0, i = new x(), r = t.iterator(); r.hasNext();) {
        var s = r.next(),
            o = this.findNonGabrielPoint(s);if (null !== o) {
          this.splitPt = this.splitFinder.findSplitPoint(s, o);var a = this.createVertex(this.splitPt, s),
              u = (this.insertSite(a), new Gs(s.getStartX(), s.getStartY(), s.getStartZ(), a.getX(), a.getY(), a.getZ(), s.getData())),
              l = new Gs(a.getX(), a.getY(), a.getZ(), s.getEndX(), s.getEndY(), s.getEndZ(), s.getData());e.add(u), e.add(l), i.add(s), n += 1;
        }
      }return t.removeAll(i), t.addAll(e), n;
    }, createVertex: function createVertex() {
      if (1 === arguments.length) {
        var t = arguments[0],
            e = null;return e = null !== this.vertexFactory ? this.vertexFactory.createVertex(t, null) : new ws(t);
      }if (2 === arguments.length) {
        var n = arguments[0],
            i = arguments[1],
            e = null;return e = null !== this.vertexFactory ? this.vertexFactory.createVertex(n, i) : new ws(n), e.setOnConstraint(!0), e;
      }
    }, getSubdivision: function getSubdivision() {
      return this.subdiv;
    }, computeBoundingBox: function computeBoundingBox() {
      var t = ks.computeVertexEnvelope(this.initialVertices),
          e = ks.computeVertexEnvelope(this.segVertices),
          n = new I(t);n.expandToInclude(e);var i = .2 * n.getWidth(),
          r = .2 * n.getHeight(),
          s = Math.max(i, r);this.computeAreaEnv = new I(n), this.computeAreaEnv.expandBy(s);
    }, setVertexFactory: function setVertexFactory(t) {
      this.vertexFactory = t;
    }, formInitialDelaunay: function formInitialDelaunay() {
      this.computeBoundingBox(), this.subdiv = new _s(this.computeAreaEnv, this.tolerance), this.subdiv.setLocator(new Ps(this.subdiv)), this.incDel = new Rs(this.subdiv), this.insertSites(this.initialVertices);
    }, insertSite: function insertSite() {
      if (arguments[0] instanceof ws) {
        var t = arguments[0],
            e = this.kdt.insert(t.getCoordinate(), t);if (e.isRepeated()) {
          var n = e.getData();return n.merge(t), n;
        }return this.incDel.insertSite(t), t;
      }if (arguments[0] instanceof c) {
        var i = arguments[0];this.insertSite(this.createVertex(i));
      }
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return ks;
    } }), ks.computeVertexEnvelope = function (t) {
    for (var e = new I(), n = t.iterator(); n.hasNext();) {
      var i = n.next();e.expandToInclude(i.getCoordinate());
    }return e;
  }, ks.MAX_SPLIT_ITER = 99, Ws(Ys.prototype, { create: function create() {
      if (null !== this.subdiv) return null;var t = Ys.envelope(this.siteCoords),
          e = Ys.toVertices(this.siteCoords);this.subdiv = new _s(t, this.tolerance), new Rs(this.subdiv).insertSites(e);
    }, setTolerance: function setTolerance(t) {
      this.tolerance = t;
    }, setSites: function setSites() {
      if (arguments[0] instanceof F) {
        var t = arguments[0];this.siteCoords = Ys.extractUniqueCoordinates(t);
      } else if (Zs(arguments[0], d)) {
        var e = arguments[0];this.siteCoords = Ys.unique(Y.toCoordinateArray(e));
      }
    }, getEdges: function getEdges(t) {
      return this.create(), this.subdiv.getEdges(t);
    }, getSubdivision: function getSubdivision() {
      return this.create(), this.subdiv;
    }, getTriangles: function getTriangles(t) {
      return this.create(), this.subdiv.getTriangles(t);
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return Ys;
    } }), Ys.extractUniqueCoordinates = function (t) {
    if (null === t) return new E();var e = t.getCoordinates();return Ys.unique(e);
  }, Ys.envelope = function (t) {
    for (var e = new I(), n = t.iterator(); n.hasNext();) {
      var i = n.next();e.expandToInclude(i);
    }return e;
  }, Ys.unique = function (t) {
    var e = Y.copyDeep(t);return st.sort(e), new E(e, !1);
  }, Ys.toVertices = function (t) {
    for (var e = new x(), n = t.iterator(); n.hasNext();) {
      var i = n.next();e.add(new Ss(i));
    }return e;
  }, Ws(Us.prototype, { createSiteVertices: function createSiteVertices(t) {
      for (var e = new x(), n = t.iterator(); n.hasNext();) {
        var i = n.next();this.constraintVertexMap.containsKey(i) || e.add(new ws(i));
      }return e;
    }, create: function create() {
      if (null !== this.subdiv) return null;var t = Ys.envelope(this.siteCoords),
          e = new x();null !== this.constraintLines && (t.expandToInclude(this.constraintLines.getEnvelopeInternal()), this.createVertices(this.constraintLines), e = Us.createConstraintSegments(this.constraintLines));var n = this.createSiteVertices(this.siteCoords),
          i = new ks(n, this.tolerance);i.setConstraints(e, new x(this.constraintVertexMap.values())), i.formInitialDelaunay(), i.enforceConstraints(), this.subdiv = i.getSubdivision();
    }, setTolerance: function setTolerance(t) {
      this.tolerance = t;
    }, setConstraints: function setConstraints(t) {
      this.constraintLines = t;
    }, setSites: function setSites(t) {
      this.siteCoords = Ys.extractUniqueCoordinates(t);
    }, getEdges: function getEdges(t) {
      return this.create(), this.subdiv.getEdges(t);
    }, getSubdivision: function getSubdivision() {
      return this.create(), this.subdiv;
    }, getTriangles: function getTriangles(t) {
      return this.create(), this.subdiv.getTriangles(t);
    }, createVertices: function createVertices(t) {
      for (var e = t.getCoordinates(), n = 0; n < e.length; n++) {
        var i = new ws(e[n]);this.constraintVertexMap.put(e[n], i);
      }
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return Us;
    } }), Us.createConstraintSegments = function () {
    if (1 === arguments.length) {
      for (var t = arguments[0], e = qn.getLines(t), n = new x(), i = e.iterator(); i.hasNext();) {
        var r = i.next();Us.createConstraintSegments(r, n);
      }return n;
    }if (2 === arguments.length) for (var s = arguments[0], o = arguments[1], a = s.getCoordinates(), i = 1; i < a.length; i++) {
      o.add(new Gs(a[i - 1], a[i]));
    }
  }, Ws(Xs.prototype, { create: function create() {
      if (null !== this.subdiv) return null;var t = Ys.envelope(this.siteCoords);this.diagramEnv = t;var e = Math.max(this.diagramEnv.getWidth(), this.diagramEnv.getHeight());this.diagramEnv.expandBy(e), null !== this.clipEnv && this.diagramEnv.expandToInclude(this.clipEnv);var n = Ys.toVertices(this.siteCoords);this.subdiv = new _s(t, this.tolerance), new Rs(this.subdiv).insertSites(n);
    }, getDiagram: function getDiagram(t) {
      this.create();var e = this.subdiv.getVoronoiDiagram(t);return Xs.clipGeometryCollection(e, this.diagramEnv);
    }, setTolerance: function setTolerance(t) {
      this.tolerance = t;
    }, setSites: function setSites() {
      if (arguments[0] instanceof F) {
        var t = arguments[0];this.siteCoords = Ys.extractUniqueCoordinates(t);
      } else if (Zs(arguments[0], d)) {
        var e = arguments[0];this.siteCoords = Ys.unique(Y.toCoordinateArray(e));
      }
    }, setClipEnvelope: function setClipEnvelope(t) {
      this.clipEnv = t;
    }, getSubdivision: function getSubdivision() {
      return this.create(), this.subdiv;
    }, interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return Xs;
    } }), Xs.clipGeometryCollection = function (t, e) {
    for (var n = t.getFactory().toGeometry(e), i = new x(), r = 0; r < t.getNumGeometries(); r++) {
      var s = t.getGeometryN(r),
          o = null;e.contains(s.getEnvelopeInternal()) ? o = s : e.intersects(s.getEnvelopeInternal()) && (o = n.intersection(s), o.setUserData(s.getUserData())), null === o || o.isEmpty() || i.add(o);
    }return t.getFactory().createGeometryCollection($t.toGeometryArray(i));
  };var Mo = Object.freeze({ Vertex: Ss }),
      Do = Object.freeze({ ConformingDelaunayTriangulationBuilder: Us, DelaunayTriangulationBuilder: Ys, VoronoiDiagramBuilder: Xs, quadedge: Mo });Ws(Hs.prototype, { interfaces_: function interfaces_() {
      return [];
    }, getClass: function getClass() {
      return Hs;
    } }), Hs.union = function (t, e) {
    if (t.isEmpty() || e.isEmpty()) {
      if (t.isEmpty() && e.isEmpty()) return $n.createEmptyResult($n.UNION, t, e, t.getFactory());if (t.isEmpty()) return e.copy();if (e.isEmpty()) return t.copy();
    }return t.checkNotGeometryCollection(t), t.checkNotGeometryCollection(e), ei.overlayOp(t, e, $n.UNION);
  }, Ws(F.prototype, { equalsTopo: function equalsTopo(t) {
      return !!this.getEnvelopeInternal().equals(t.getEnvelopeInternal()) && ts.relate(this, t).isEquals(this.getDimension(), t.getDimension());
    }, union: function union() {
      if (0 === arguments.length) return ss.union(this);if (1 === arguments.length) {
        var t = arguments[0];return Hs.union(this, t);
      }
    }, isValid: function isValid() {
      return zr.isValid(this);
    }, intersection: function intersection(t) {
      if (this.isEmpty() || t.isEmpty()) return $n.createEmptyResult($n.INTERSECTION, this, t, this.factory);if (this.isGeometryCollection()) {
        var e = t;return on.map(this, { interfaces_: function interfaces_() {
            return [MapOp];
          }, map: function map(t) {
            return t.intersection(e);
          } });
      }return this.checkNotGeometryCollection(this), this.checkNotGeometryCollection(t), ei.overlayOp(this, t, $n.INTERSECTION);
    }, covers: function covers(t) {
      return ts.covers(this, t);
    }, coveredBy: function coveredBy(t) {
      return ts.coveredBy(this, t);
    }, touches: function touches(t) {
      return ts.touches(this, t);
    }, intersects: function intersects(t) {
      return ts.intersects(this, t);
    }, within: function within(t) {
      return ts.within(this, t);
    }, overlaps: function overlaps(t) {
      return ts.overlaps(this, t);
    }, disjoint: function disjoint(t) {
      return ts.disjoint(this, t);
    }, crosses: function crosses(t) {
      return ts.crosses(this, t);
    }, buffer: function buffer() {
      if (1 === arguments.length) {
        var t = arguments[0];return hr.bufferOp(this, t);
      }if (2 === arguments.length) {
        var e = arguments[0],
            n = arguments[1];return hr.bufferOp(this, e, n);
      }if (3 === arguments.length) {
        var i = arguments[0],
            r = arguments[1],
            s = arguments[2];return hr.bufferOp(this, i, r, s);
      }
    }, convexHull: function convexHull() {
      return new ge(this).getConvexHull();
    }, relate: function relate() {
      for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) {
        e[n] = arguments[n];
      }return ts.relate.apply(ts, [this].concat(e));
    }, getCentroid: function getCentroid() {
      if (this.isEmpty()) return this.factory.createPoint();var t = le.getCentroid(this);return this.createPointFromInternalCoord(t, this);
    }, getInteriorPoint: function getInteriorPoint() {
      if (this.isEmpty()) return this.factory.createPoint();var t = null,
          e = this.getDimension();if (0 === e) {
        var n = new si(this);t = n.getInteriorPoint();
      } else if (1 === e) {
        var n = new ri(this);t = n.getInteriorPoint();
      } else {
        var n = new ni(this);t = n.getInteriorPoint();
      }return this.createPointFromInternalCoord(t, this);
    }, symDifference: function symDifference(t) {
      if (this.isEmpty() || t.isEmpty()) {
        if (this.isEmpty() && t.isEmpty()) return $n.createEmptyResult($n.SYMDIFFERENCE, this, t, this.factory);if (this.isEmpty()) return t.copy();if (t.isEmpty()) return this.copy();
      }return this.checkNotGeometryCollection(this), this.checkNotGeometryCollection(t), ei.overlayOp(this, t, $n.SYMDIFFERENCE);
    }, createPointFromInternalCoord: function createPointFromInternalCoord(t, e) {
      return e.getPrecisionModel().makePrecise(t), e.getFactory().createPoint(t);
    }, toText: function toText() {
      return new ee().write(this);
    }, toString: function toString() {
      this.toText();
    }, contains: function contains(t) {
      return ts.contains(this, t);
    }, difference: function difference(t) {
      return this.isEmpty() ? $n.createEmptyResult($n.DIFFERENCE, this, t, this.factory) : t.isEmpty() ? this.copy() : (this.checkNotGeometryCollection(this), this.checkNotGeometryCollection(t), ei.overlayOp(this, t, $n.DIFFERENCE));
    }, isSimple: function isSimple() {
      return new Yi(this).isSimple();
    }, isWithinDistance: function isWithinDistance(t, e) {
      return !(this.getEnvelopeInternal().distance(t.getEnvelopeInternal()) > e) && pr.isWithinDistance(this, t, e);
    }, distance: function distance(t) {
      return pr.distance(this, t);
    }, isEquivalentClass: function isEquivalentClass(t) {
      return this.getClass() === t.getClass();
    } });t.version = "1.4.0 (1ba5f4e)", t.algorithm = lo, t.densify = ho, t.dissolve = co, t.geom = ao, t.geomgraph = fo, t.index = mo, t.io = Eo, t.noding = Io, t.operation = bo, t.precision = Oo, t.simplify = _o, t.triangulate = Do, Object.defineProperty(t, "__esModule", { value: !0 });
});
//# sourceMappingURL=jsts.min.js.map

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(8);

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jsts) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by Svend on 2017/4/10.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _Buffer = __webpack_require__(9);

var _Buffer2 = _interopRequireDefault(_Buffer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

GL.Polygon.include({
    getCentroid: function getCentroid() {
        var latlngs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.getLngLats();

        if (Array.isArray(latlngs[0])) {
            return this.getCentroid(latlngs.map(this.getCentroid));
        }
        return latlngs.reduce(function (a, b, i) {
            var lat = (a.lat * i + b.lat) / (i + 1);
            var lng = (a.lng * i + b.lng) / (i + 1);
            return new GL.LngLat(lng, lat);
        });
    }
});

GL.Circle.include({
    getCentroid: function getCentroid() {
        return this.getCenter();
    }
});

GL.BufferTool = function () {
    function _class() {
        _classCallCheck(this, _class);
    }

    _createClass(_class, null, [{
        key: "activate",
        value: function activate(shape, callback, context, bufferStyle) {

            if (shape instanceof GL.Point) {
                throw new Error('Point object cannot drag buffer');
            }

            if (GL.BufferTool._handler) GL.BufferTool.deactivate();

            GL.BufferTool._handler = new _Buffer2.default(shape, callback, context, bufferStyle);
            GL.BufferTool._handler.enable();

            return GL.BufferTool._handler;
        }
    }, {
        key: "deactivate",
        value: function deactivate() {
            if (!GL.BufferTool._handler) return;

            GL.BufferTool._handler.disable();
            delete GL.BufferTool._handler;
        }
    }, {
        key: "buffer",
        value: function buffer(overlay) {
            var distance = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;

            if (!overlay) return;
            var lngLats = [];

            if (!GL.BufferTool._reader) {
                GL.BufferTool._reader = new jsts.io.GeoJSONReader();
                GL.BufferTool._writer = new jsts.io.GeoJSONWriter();
            }

            distance /= 111120; // converts meter distance to degrees

            var geometry = GL.BufferTool._reader.read(overlay.toGeoJSON().geometry);
            var bufGeo = jsts.operation.buffer.BufferOp.bufferOp(geometry, distance);
            var newGeo = GL.BufferTool._writer.write(bufGeo);

            var coordinates = newGeo.coordinates;
            for (var i = 0, len = coordinates.length; i < len; i++) {
                var arr = coordinates[i].map(function (geoJson) {
                    return new GL.LngLat(geoJson[0], geoJson[1]);
                });
                lngLats.push(arr);
            }
            return lngLats;
        }
    }]);

    return _class;
}();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Created by Svend on 2017/4/11.
 */

var BufferHandler = function (_GL$Handler) {
    _inherits(BufferHandler, _GL$Handler);

    function BufferHandler(shape, callback, context, style) {
        _classCallCheck(this, BufferHandler);

        var _this = _possibleConstructorReturn(this, (BufferHandler.__proto__ || Object.getPrototypeOf(BufferHandler)).call(this, shape._map));

        _this._style = style || new GL.Style.Fill({}, true);

        _this._shape = shape;

        _this._callback = callback;
        _this._callbackContext = context;
        return _this;
    }

    _createClass(BufferHandler, [{
        key: 'enable',
        value: function enable() {
            if (this._enabled) {
                return;
            }

            _get(BufferHandler.prototype.__proto__ || Object.getPrototypeOf(BufferHandler.prototype), 'enable', this).call(this);
        }
    }, {
        key: 'disable',
        value: function disable() {
            if (!this._enabled) {
                return;
            }

            _get(BufferHandler.prototype.__proto__ || Object.getPrototypeOf(BufferHandler.prototype), 'disable', this).call(this);
        }
    }, {
        key: 'addHooks',
        value: function addHooks() {

            var radius = this._shape instanceof GL.Circle ? this._shape.getRadius() : 0;
            this._bufferData = {
                size: 0,
                temp_size: 0,
                radius: radius,
                temp_radius: radius
            };

            var map = this._map;
            if (map) {

                map.getContainer().focus();
                this._mapDraggable = map.dragging.enabled();
                if (this._mapDraggable) {
                    map.dragging.disable();
                }

                if (!this._layer) {
                    this._layer = new GL.VectorLayer();
                    this._map.addLayer(this._layer);
                }

                this._enableLayerBuffer();

                this._tooltip = new GL.DrawTooltip(this._map);
                this._setTooltip('拖动图形边缘进行缓冲。');
                this._map.on('mousemove', this._onMouseMove, this);
            }
        }
    }, {
        key: 'removeHooks',
        value: function removeHooks() {
            if (this._map) {

                this._disableLayerBuffer();

                this._map.removeLayer(this._layer);
                delete this._layer;

                if (this._mapDraggable) {
                    this._map.dragging.enable();
                }

                this._tooltip.dispose();
                this._tooltip = null;

                this._map.off('mousemove', this._onMouseMove, this);
            }
        }
    }, {
        key: '_enableLayerBuffer',
        value: function _enableLayerBuffer() {

            this._layer.clear();
            delete this._bufferShape;

            if (this._shape instanceof GL.Circle) {
                this._bufferShape = new GL.Circle(this._shape.getCenter(), this._shape.getRadius() + 0.1);
            } else {
                var latLngs = this._buffer(this._shape, 0.1);
                this._bufferShape = new GL.Polygon(latLngs);
            }

            this._bufferShape.setStyle(this._style);

            this._layer.addOverlay(this._bufferShape);

            this._bufferData.centroid = this._bufferShape.getCentroid();

            if (!(this._bufferShape instanceof GL.Point)) {
                this._bufferShape.buffered = true;
                this._bufferShape.on('mousedown', this._onLayerDragStart, this);
                this._map.on('mouseup', this._onLayerDragEnd, this);
            }
        }
    }, {
        key: '_disableLayerBuffer',
        value: function _disableLayerBuffer() {
            this._bufferShape.buffered = false;

            this._bufferShape.off('mousedown', this._onLayerDragStart, this);
            this._map.off('mouseup', this._onLayerDragEnd, this);

            this._layer.clear();
        }
    }, {
        key: '_onLayerDragStart',
        value: function _onLayerDragStart(e) {

            this._bufferData.orig_distanceToCenter = this._bufferData.centroid.distanceTo(e.latlng);

            this._map.on('mousemove', this._onLayerDrag, this);

            this._setTooltip(0);
        }
    }, {
        key: '_onLayerDrag',
        value: function _onLayerDrag(e) {
            var data = this._bufferData;
            var distance = data.centroid.distanceTo(e.latlng) - data.orig_distanceToCenter;
            data.temp_radius = data.radius + distance;

            this._setTooltip(distance);

            if (this._bufferShape instanceof GL.Circle) {
                this._bufferShape.setRadius(data.temp_radius);
            } else {

                data.temp_size = data.size + distance;

                var newGeo = this._buffer(this._shape, data.temp_size);

                this._bufferShape.setLngLats(newGeo);
            }
        }
    }, {
        key: '_onLayerDragEnd',
        value: function _onLayerDragEnd() {

            this._bufferData.size = this._bufferData.temp_size;
            this._bufferData.radius = this._bufferData.temp_radius;

            this._map.off('mousemove', this._onLayerDrag, this);

            this._fireCompileFeature();

            this._setTooltip('拖动图形边缘进行缓冲。');
        }
    }, {
        key: '_onMouseMove',
        value: function _onMouseMove(e) {
            this._tooltip.updatePosition(e.latlng);
        }
    }, {
        key: '_setTooltip',
        value: function _setTooltip(radiusOrMessage) {
            var text = void 0;
            if (typeof radiusOrMessage === 'string') {
                text = radiusOrMessage;
            } else {
                var radiusM = radiusOrMessage;

                var isPositive = radiusM >= 0;

                var radiusKm = Math.abs(radiusM) / 1000;
                var metricUnit = radiusKm >= 1 ? '千米' : '米';
                var metricValue = (radiusKm >= 1 ? radiusKm : radiusM).toFixed(2);
                if (!isPositive) metricValue = -metricValue;
                text = '\u7F13\u51B2\u8DDD\u79BB: ' + (metricValue + metricUnit);
            }
            if (this._tooltip) this._tooltip.updateContent({ text: text });
        }
    }, {
        key: '_fireCompileFeature',
        value: function _fireCompileFeature() {
            if (!this._callback) return;
            var feature = void 0,
                shape = this._bufferShape;
            if (shape instanceof GL.Circle) feature = new GL.Circle(shape.getCenter(), shape.getRadius());else feature = new GL.Polygon(shape.getLngLats());
            this._callback.call(this._callbackContext || this, feature);
        }
    }, {
        key: '_buffer',
        value: function _buffer(shape, distance) {
            return GL.BufferTool.buffer(shape, distance);
        }
    }]);

    return BufferHandler;
}(GL.Handler);

exports.default = BufferHandler;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RoadService = function () {
    function RoadService() {
        _classCallCheck(this, RoadService);
    }

    _createClass(RoadService, [{
        key: 'searchRoadsByKw',
        value: function searchRoadsByKw(restURL, keyword, callback) {
            GL.Http({
                method: 'post',
                url: restURL,
                timeout: 5000,
                params: { keyword: keyword }
            }).then(function (response) {
                var data = response.data;
                if (callback) callback(data.data);
            }).catch(function (error) {
                console.error(error);
            });
        }
    }, {
        key: 'searchSingleRoadByLngLat',
        value: function searchSingleRoadByLngLat(restURL, location, callback) {
            GL.Http({
                method: 'post',
                url: restURL,
                timeout: 5000,
                params: { coord: location.toString() }
            }).then(function (response) {
                var data = response.data;
                var polyline = new GL.Polyline(data.data.coords, new GL.Style({
                    weight: 5
                }), true);
                polyline.attr = data.data;
                if (callback) callback(polyline);
            }).catch(function (error) {
                console.error(error);
            });
        }
    }, {
        key: 'getPedal',
        value: function getPedal(restURL, nodes, callback) {
            GL.Http({
                method: 'post',
                url: restURL,
                timeout: 5000,
                params: { nodes: nodes }
            }).then(function (response) {
                var data = response.data;
                if (callback) callback(data.data);
            }).catch(function (error) {
                console.error(error);
            });
        }
    }, {
        key: 'getRoute',
        value: function getRoute(restURL, sourceLngLat, targetLngLat, callback) {
            GL.Http({
                method: 'post',
                url: restURL,
                timeout: 5000,
                params: { sourceLonlat: sourceLngLat, targetLonlat: targetLngLat }
            }).then(function (response) {
                var data = response.data;
                if (callback) callback(data.data);
            }).catch(function (error) {
                console.error(error);
            });
        }
    }, {
        key: 'getRoutes',
        value: function getRoutes(restURL, nodes, callback) {
            GL.Http({
                method: 'post',
                url: restURL,
                timeout: 5000,
                params: { nodes: nodes }
            }).then(function (response) {
                var data = response.data;
                if (callback) callback(data.data);
            }).catch(function (error) {
                console.error(error);
            });
        }
    }]);

    return RoadService;
}();

exports.default = RoadService;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _GL = __webpack_require__(10);

var _GL2 = _interopRequireDefault(_GL);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RouteServiceProxy = function () {
    function RouteServiceProxy() {
        _classCallCheck(this, RouteServiceProxy);
    }

    _createClass(RouteServiceProxy, null, [{
        key: "_init",
        value: function _init() {
            RouteServiceProxy._roadService = new _GL2.default();
            RouteServiceProxy.SEARCH_ROAD_BY_KW_URL = "rest/index/queryRoadByKeyWord";
            RouteServiceProxy.SEARCH_SINGLE_ROAD_BY_LOCATION_URL = "rest/route/getRoadByCoord";
            RouteServiceProxy.GET_PEDAL_URL = "rest/route/getPedal";
            RouteServiceProxy.GET_ROUTE_URL = "rest/route/getRoute";
            RouteServiceProxy.GET_ROUTES_URL = "rest/route/getRoutes";
        }
    }, {
        key: "searchRoadsByKw",
        value: function searchRoadsByKw(keyword, callback) {
            RouteServiceProxy._roadService.searchRoadsByKw(GL.H.getRestUrl(RouteServiceProxy.SEARCH_ROAD_BY_KW_URL), keyword, callback);
        }
    }, {
        key: "searchSingleRoadByLngLat",
        value: function searchSingleRoadByLngLat(location, callback) {
            RouteServiceProxy._roadService.searchSingleRoadByLngLat(GL.H.getRestUrl(RouteServiceProxy.SEARCH_SINGLE_ROAD_BY_LOCATION_URL), location, callback);
        }
    }, {
        key: "getPedal",
        value: function getPedal(nodes, callback) {
            RouteServiceProxy._roadService.getPedal(GL.H.getRestUrl(RouteServiceProxy.GET_PEDAL_URL), nodes, callback);
        }
    }, {
        key: "getRoute",
        value: function getRoute(sourceLngLat, targetLngLat, callback) {
            RouteServiceProxy._roadService.getRoute(GL.H.getRestUrl(RouteServiceProxy.GET_ROUTE_URL), sourceLngLat, targetLngLat, callback);
        }
    }, {
        key: "getRoutes",
        value: function getRoutes(nodes, callback) {
            RouteServiceProxy._roadService.getRoutes(GL.H.getRestUrl(RouteServiceProxy.GET_ROUTES_URL), nodes, callback);
        }
    }]);

    return RouteServiceProxy;
}();

RouteServiceProxy._init();
GL.RouteService = RouteServiceProxy;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _GL = __webpack_require__(13);

var _GL2 = _interopRequireDefault(_GL);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * 常用数据查询服务代理类
 * @module service
 * @namespace GL
 * @class Service
 */
var SearchProxy = function () {
    function SearchProxy() {
        _classCallCheck(this, SearchProxy);
    }

    _createClass(SearchProxy, null, [{
        key: "_init",
        value: function _init() {
            SearchProxy._searchService = new _GL2.default();

            /**
             * 根据 ID 查询 feature 配置的业务信息、属性 URL
             * @type {string}
             */
            SearchProxy.SEARCH_FEATURE_BY_ID_URL = "rest/dic/queryById";
            /**
             * 根据关键字查询 POI URL
             * @type {string}
             */
            SearchProxy.SEARCH_POI_BY_KW_URL = "rest/index/searchByKeyword";
            /**
             * 根据经纬度查询最近的基础 POI URL
             * @type {string}
             */
            SearchProxy.SEARCH_POI_BY_LNGLAT_URL = "rest/index/queryByBuffer";
            /**
             * 根据选择的范围去后台查询范围内数据类型 URL
             * @type {string}
             */
            SearchProxy.QUERY_FEATURETYPES_BY_GEOMETRY_URL = "rest/dic/queryByGeometry";
            /**
             * 根据选择的范围和数据类型去后台查询范围内数据 URL
             * @type {string}
             */
            SearchProxy.QUERY_FEATURES_BY_GEOMETRYANDTYPE_URL = "rest/dic/queryFeatureByTreeNodeId";
            /**
             * 动态图层查询数据 URL
             * @type {string}
             */
            SearchProxy.QUERY_DYNAMIC_BY_FILTER_URL = "rest/dic/queryDynamicByFilter";
            /**
             * 获取业务图层树 URL
             * @type {string}
             */
            SearchProxy.SEARCH_LAYER_TREE_URL = "rest/dic/queryLayerTree";

            /**
             * 根据关键字联想查询（属性查询） URL
             * @type {string}
             */
            SearchProxy.QUERY_ATTRIBUTE_SUGGEST_URL = "rest/dic/queryByAttributeSuggest";

            /**
             * 根据关键字查询（属性查询） URL
             * @type {string}
             */
            SearchProxy.QUERY_ATTRIBUTE_URL = "rest/dic/queryByAttribute";

            SearchProxy.QUERY_BY_ATTRANDGEOMETRY_URL = "rest/dic/queryByAttributeAndGeometry";
        }
    }, {
        key: "searchFeatureInfoById",
        value: function searchFeatureInfoById(id, objectTypeId, callback) {
            SearchProxy._searchService.searchFeatureInfoById(GL.H.getRestUrl(SearchProxy.SEARCH_FEATURE_BY_ID_URL), id, objectTypeId, callback);
        }
    }, {
        key: "searchPoiByKw",
        value: function searchPoiByKw(keyword, callback) {
            SearchProxy._searchService.searchPoiByKw(GL.H.getRestUrl(SearchProxy.SEARCH_POI_BY_KW_URL), keyword, callback);
        }
    }, {
        key: "searchSingleFeatureByLngLat",
        value: function searchSingleFeatureByLngLat(map, serverURL, lngLat, callback) {
            var precision = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 6;

            SearchProxy._searchService.searchSingleFeatureByLngLat(map, serverURL, lngLat, callback, precision);
        }
    }, {
        key: "searchSinglePoiByLngLat",
        value: function searchSinglePoiByLngLat(location, callback) {
            var distance = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;

            SearchProxy._searchService.searchSinglePoiByLngLat(GL.H.getRestUrl(SearchProxy.SEARCH_POI_BY_LNGLAT_URL), location, callback, distance);
        }
    }, {
        key: "queryDynamicByFilter",
        value: function queryDynamicByFilter(layerId, objectTypeIds, bounds, callback) {
            SearchProxy._searchService.queryDynamicByFilter(GL.H.getRestUrl(SearchProxy.QUERY_DYNAMIC_BY_FILTER_URL), layerId, objectTypeIds.join(','), bounds, callback);
        }
    }, {
        key: "searchLayerTree",
        value: function searchLayerTree(callback) {
            SearchProxy._searchService.searchLayerTree(GL.H.getRestUrl(SearchProxy.SEARCH_LAYER_TREE_URL), callback);
        }
    }, {
        key: "queryByAttributeSuggest",
        value: function queryByAttributeSuggest(kw, callback) {
            var suggestSize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;

            SearchProxy._searchService.queryByAttributeSuggest(GL.H.getRestUrl(SearchProxy.QUERY_ATTRIBUTE_SUGGEST_URL), kw, callback, suggestSize);
        }
    }, {
        key: "queryByAttribute",
        value: function queryByAttribute(kw, callback) {
            SearchProxy._searchService.queryByAttribute(GL.H.getRestUrl(SearchProxy.QUERY_ATTRIBUTE_URL), kw, callback);
        }
    }, {
        key: "queryFeatureTypesByGeometry",
        value: function queryFeatureTypesByGeometry(type, lnglats, radius, callback) {
            SearchProxy._searchService.queryFeatureTypesByGeometry(GL.H.getRestUrl(SearchProxy.QUERY_FEATURETYPES_BY_GEOMETRY_URL), type, lnglats, radius, callback);
        }
    }, {
        key: "queryFeaturesByGeometryAndType",
        value: function queryFeaturesByGeometryAndType(layerId, id, type, lnglats, radius, callback) {
            SearchProxy._searchService.queryFeaturesByGeometryAndType(GL.H.getRestUrl(SearchProxy.QUERY_FEATURES_BY_GEOMETRYANDTYPE_URL), layerId, id, type, lnglats, radius, callback);
        }
    }, {
        key: "queryByAttributeAndGeometry",
        value: function queryByAttributeAndGeometry(params, callback) {
            SearchProxy._searchService.queryByAttributeAndGeometry(GL.H.getRestUrl(SearchProxy.QUERY_BY_ATTRANDGEOMETRY_URL), params, callback);
        }
    }]);

    return SearchProxy;
}();

SearchProxy._init();
GL.Service = SearchProxy;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var defaultQueryFields = ["NAME", "TYPE", "POI_ID"];

var SearchService = function () {
    function SearchService() {
        _classCallCheck(this, SearchService);
    }

    _createClass(SearchService, [{
        key: "searchFeatureInfoById",
        value: function searchFeatureInfoById(restURL, id, objectTypeId, callback) {
            GL.Http({
                method: 'post',
                url: restURL,
                timeout: 5000,
                params: { id: id, objectTypeId: objectTypeId }
            }).then(function (response) {
                var data = response.data;
                if (callback) callback(data.data);
            }).catch(function (error) {
                console.error(error);
            });
        }
    }, {
        key: "searchPoiByKw",
        value: function searchPoiByKw(restURL, keyword, callback) {
            GL.Http({
                method: 'post',
                url: restURL,
                timeout: 5000,
                params: { keyword: keyword }
            }).then(function (response) {
                var data = response.data;
                var results = data.data || [];
                if (callback) callback(results);
            }).catch(function (error) {
                console.error(error);
            });
        }
    }, {
        key: "searchSingleFeatureByLngLat",
        value: function searchSingleFeatureByLngLat(map, serverURL, location, callback) {
            var precision = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 6;


            if (!GL.esri) {
                throw new Error('The service relies on the ESRI Library');
            }

            map = map && map._delegate || map;
            location = location && location._delegate || location;

            GL.esri.identifyFeatures({
                url: serverURL
            }).on(map).at(location).tolerance(precision).run(function (error, featureCollection, response) {
                var results = response.results;
                var overlay = null;

                var overlays = SearchService._esriResultToOverlay(results);

                if (overlays.length === 1) {
                    overlay = overlays[0];
                } else {
                    var minDis = Number.MAX_VALUE;
                    var _iteratorNormalCompletion = true;
                    var _didIteratorError = false;
                    var _iteratorError = undefined;

                    try {
                        for (var _iterator = overlays[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                            var o = _step.value;

                            var dis = SearchService.calculateLatLngToOverlayDistance(location, o);
                            if (dis < minDis) {
                                overlay = o;
                                minDis = dis;
                            }
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return) {
                                _iterator.return();
                            }
                        } finally {
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }
                }
                if (callback) callback(overlay);
            });
        }
    }, {
        key: "searchSinglePoiByLngLat",
        value: function searchSinglePoiByLngLat(restURL, location, callback) {
            var distance = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 10;

            GL.Http({
                method: 'post',
                url: restURL,
                timeout: 5000,
                params: { center: location.toString(), distance: distance }
            }).then(function (response) {
                var data = response.data;
                var results = data.data;
                var overlay = null;
                if (results.length > 0) {
                    var item = results[0];
                    overlay = new GL.Point([item.lng, item.lat], null, {
                        title: item.name
                    });
                    overlay.attr = item;
                }
                if (callback) callback(overlay);
            }).catch(function (error) {
                console.error(error);
            });
        }
    }, {
        key: "queryDynamicByFilter",
        value: function queryDynamicByFilter(restURL, layerId, objectTypeIds, bounds, callback) {
            GL.Http({
                method: 'post',
                url: restURL,
                timeout: 5000,
                params: { layerId: layerId, objectTypeIds: objectTypeIds, lnglats: bounds }
            }).then(function (response) {
                var data = response.data;
                if (callback) callback(data.data);
            }).catch(function (error) {
                console.error(error);
            });
        }
    }, {
        key: "searchLayerTree",
        value: function searchLayerTree(restURL, callback) {
            GL.Http({
                method: 'get',
                url: restURL,
                timeout: 5000
            }).then(function (response) {
                var data = response.data;
                if (callback) callback(data.data);
            }).catch(function (error) {
                console.error(error);
            });
        }
    }, {
        key: "queryByAttributeSuggest",
        value: function queryByAttributeSuggest(restURL, kw, callback) {
            var suggestSize = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 10;

            GL.Http({
                method: 'post',
                url: restURL,
                timeout: 5000,
                params: { keyword: kw, size: suggestSize }
            }).then(function (response) {
                var data = response.data;
                if (callback) callback(data.data);
            }).catch(function (error) {
                console.error(error);
            });
        }
    }, {
        key: "queryByAttribute",
        value: function queryByAttribute(restURL, kw, callback) {
            GL.Http({
                method: 'post',
                url: restURL,
                timeout: 5000,
                params: { keyword: kw }
            }).then(function (response) {
                var data = response.data;
                if (callback) callback(data.data);
            }).catch(function (error) {
                console.error(error);
            });
        }
    }, {
        key: "queryFeatureTypesByGeometry",
        value: function queryFeatureTypesByGeometry(restURL, type, lnglats, radius, callback) {
            GL.Http({
                method: 'post',
                url: restURL,
                timeout: 5000,
                params: { type: type, lnglats: lnglats, radius: radius }
            }).then(function (response) {
                var data = response.data;
                if (callback) callback(data.data);
            }).catch(function (error) {
                console.error(error);
            });
        }
    }, {
        key: "queryFeaturesByGeometryAndType",
        value: function queryFeaturesByGeometryAndType(restURL, layerId, id, type, lnglats, radius, callback) {
            GL.Http({
                method: 'post',
                url: restURL,
                timeout: 5000,
                params: { layerId: layerId, id: id, type: type, lnglats: lnglats, radius: radius }
            }).then(function (response) {
                var data = response.data;
                if (callback) callback(data.data);
            }).catch(function (error) {
                console.error(error);
            });
        }

        /**
         *
         * @param restURL
         * @param params
         * @param params.keyword
         * @param params.type
         * @param params.lnglats
         * @param params.radius
         * @param callback
         */

    }, {
        key: "queryByAttributeAndGeometry",
        value: function queryByAttributeAndGeometry(restURL, params, callback) {
            GL.Http({
                method: 'post',
                url: restURL,
                timeout: 5000,
                params: { keyword: params.keyword || '', type: params.type || '', lnglats: params.lnglats || '', radius: params.radius || '' }
            }).then(function (response) {
                var data = response.data;
                if (callback) callback(data.data, null);
            }).catch(function (error) {
                if (callback) callback(null, error);
            });
        }
    }], [{
        key: "calculateLatLngToOverlayDistance",
        value: function calculateLatLngToOverlayDistance(latLng, overlay) {
            var minDis = Infinity;
            var overlayType = overlay.type;
            if (overlayType === GL.Point.type) {
                minDis = latLng.distanceTo(overlay.getLngLat());
            } else {
                minDis = GL.H.Geometry.calculateDistanceOfLngLatToPoly(latLng, overlay);
            }
            return minDis;
        }
    }, {
        key: "_esriResultToOverlay",
        value: function _esriResultToOverlay(response) {
            var features = response.features;
            var geometryType = response.geometryType;

            var overlays = [];
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = features[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var feature = _step2.value;

                    var attributes = feature.attributes;
                    var geometry = feature.geometry;
                    var overlay = null;
                    var lngLats = SearchService._gemetryToLngLats(geometry, geometryType);
                    if (geometryType === 'esriGeometryPoint') {
                        var icon = GL.Proxy.getIcon(attributes.TYPE);
                        overlay = new GL.Point(lngLats, icon);
                    } else if (geometryType === 'esriGeometryPolyline') {
                        overlay = new GL.Polyline(lngLats);
                    } else if (geometryType === 'esriGeometryPolygon') {
                        overlay = new GL.Polygon(lngLats);
                    }
                    if (overlay) {
                        overlay.attr = attributes;
                        overlays.push(overlay);
                    }
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }

            return overlays;
        }
    }, {
        key: "_gemetryToLngLats",
        value: function _gemetryToLngLats(geometry, geometryType) {
            if (!geometry || !geometryType) return geometry;
            if (geometryType === 'esriGeometryPoint') {
                return [geometry.x, geometry.y];
            } else if (geometryType === 'esriGeometryPolyline') {
                var nPaths = [];
                var _iteratorNormalCompletion3 = true;
                var _didIteratorError3 = false;
                var _iteratorError3 = undefined;

                try {
                    for (var _iterator3 = geometry.paths[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                        var path = _step3.value;

                        var nPath = [];
                        var _iteratorNormalCompletion4 = true;
                        var _didIteratorError4 = false;
                        var _iteratorError4 = undefined;

                        try {
                            for (var _iterator4 = path[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                                var lnglat = _step4.value;

                                nPath.push(lnglat);
                            }
                        } catch (err) {
                            _didIteratorError4 = true;
                            _iteratorError4 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion4 && _iterator4.return) {
                                    _iterator4.return();
                                }
                            } finally {
                                if (_didIteratorError4) {
                                    throw _iteratorError4;
                                }
                            }
                        }

                        nPaths.push(nPath);
                    }
                } catch (err) {
                    _didIteratorError3 = true;
                    _iteratorError3 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion3 && _iterator3.return) {
                            _iterator3.return();
                        }
                    } finally {
                        if (_didIteratorError3) {
                            throw _iteratorError3;
                        }
                    }
                }

                return nPaths;
            } else if (geometryType === 'esriGeometryPolygon') {
                var _nPaths = [];
                var _iteratorNormalCompletion5 = true;
                var _didIteratorError5 = false;
                var _iteratorError5 = undefined;

                try {
                    for (var _iterator5 = geometry.rings[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                        var _path = _step5.value;

                        var _nPath = [];
                        var _iteratorNormalCompletion6 = true;
                        var _didIteratorError6 = false;
                        var _iteratorError6 = undefined;

                        try {
                            for (var _iterator6 = _path[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                                var _lnglat = _step6.value;

                                _nPath.push(_lnglat);
                            }
                        } catch (err) {
                            _didIteratorError6 = true;
                            _iteratorError6 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion6 && _iterator6.return) {
                                    _iterator6.return();
                                }
                            } finally {
                                if (_didIteratorError6) {
                                    throw _iteratorError6;
                                }
                            }
                        }

                        _nPaths.push(_nPath);
                    }
                } catch (err) {
                    _didIteratorError5 = true;
                    _iteratorError5 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion5 && _iterator5.return) {
                            _iterator5.return();
                        }
                    } finally {
                        if (_didIteratorError5) {
                            throw _iteratorError5;
                        }
                    }
                }

                return _nPaths;
            }
            return geometry;
        }
    }]);

    return SearchService;
}();

exports.default = SearchService;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(12);

__webpack_require__(11);

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Event = function () {
    function Event() {
        _classCallCheck(this, Event);
    }

    _createClass(Event, null, [{
        key: 'Show',
        get: function get() {
            return function () {
                return 'contextmenu:show';
            }();
        }
    }, {
        key: 'Hide',
        get: function get() {
            return function () {
                return 'contextmenu:hide';
            }();
        }
    }]);

    return Event;
}();

exports.default = Event;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Map Options:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *      - contextmenu : true/false ,是否开启右键菜单功能，default:true
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *      - contextmenuWidth : 右键菜单宽度，不设置将为undefined，将以最宽的一个为准
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *      - contextmenuAnchor ： 控制上下文菜单位置的偏移量。
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *      - contextmenuItems: 上下文菜单项的规范。查看单个菜单项的下列选项。也可以添加一个分隔符的分隔符“-”。
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *          - text : 上下文显示的标题，必须
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *          - icon : 显示在标题左边的图标URL，大小为16 X 16
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *          - iconCls： 一个CSS类为图标设置背景图像（专属图标的选项）
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *          - callback ：单击菜单项时调用的回调函数。回调传递一个对象与属性识别的位置菜单打开：latlng，layerpoint和containerpoint。
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *          - context：回调的范围，default ： map对象
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *          - disabled ： 如果 true 菜单项将最初处于禁用状态，将不会响应单击事件。 default：false
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *          - separator： 如果 true 分隔符将被创建，而不是一个菜单项.default:false
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *          - hideOnSelect: 如果 true 上下文菜单中会自动隐藏当前选择的菜单项.default : true
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *  Mixin Options ：
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *      - contextmenu : true/false ,是否开启右键菜单功能，default:false
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *      - contextmenuInheritItems : 如果为 true ，上下文菜单将会加到 Map contextmenu中，default：true
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *      - contextmenuItems: 上下文菜单项的规范。查看单个菜单项的下列选项。也可以添加一个分隔符的分隔符“-”。
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

__webpack_require__(35);

var _Event = __webpack_require__(15);

var _Event2 = _interopRequireDefault(_Event);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CLASS_NAME = 'gaea-contextmenu';

var GAEA_ITEMS = ['-', {
    text: '数字地图信息科技股份有限公司',
    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAd9JREFUeNqcVN0rg1EY/80+fKTXkgsXlnFDlqykXSjGBe8VQsqNTdy4W3Jv/gHcuVnsyoWopdRyobXSrmRbkSjR8pELve98RZjnvHbmGGM89XvPec95zu95zvNxdKlUCt/J9CmspmcNMBI8NoSQQ3TZJFOXcJte4KWD1YyAk9CoEgI097ocOPmWZEKBmZRCpNREJPygSCLOR4db4eckBewzdgszDczdJuQnS6thuD+RkPhFgkQ4mBfR+hasbGJwPcBpAHr5jnK4h7hvFiXFZaissUE9S+BFTcJIVzQQLBYbTIUSV/cS3HQefSL91U4ETzdJXOxGNJKbywSuj/ahf4WG0iIJUpWNq7uCm/DoRu5TIbLQLgbueNmHxoHxnwKreZZe62AxsWdf1lgq4S/CrqMQysTF440V1HcPvc+3g4it+VBAlfB4m0RDiwy5f/ILCSuc6lxWaltl1DlkzfXzaASJeOSLDrtOAP8XVe5CyJAmmcve3V2czWSEg2WqvMIiqs1nyp4q1kvuTvPo3x3s4VVJanXBsqBPj7xOJKoT+j8lfXtPJxSxd/y06NJS+HvvqETiHGxDVCx7LJi1XpjJIw4xQoYg11NgJU88ZNFOFtvT1pnrUfYUjDd/dC+XNwEGAK3k0eLwqNp9AAAAAElFTkSuQmCC",
    callback: gaeainfo
}];

function gaeainfo() {
    window.open('http://www.gaeainfo.com', "_blank");
}

var Contextmenu = function () {
    function Contextmenu() {
        _classCallCheck(this, Contextmenu);

        GL.Hub.on(_Event2.default.Show, this._show, this);
        GL.Hub.on(_Event2.default.Hide, this.hide, this);
    }

    _createClass(Contextmenu, [{
        key: "_show",
        value: function _show(args) {
            this.show(args[0], args[1]);
        }
    }, {
        key: "show",
        value: function show(point, data) {
            var L = GL.getNamespace().L;
            if (data && data.length) this._createItems(data);

            if (point) this._setPosition(point);

            if (!this._visible) {
                this._container.style.display = 'block';
                this._visible = true;
            }
        }
    }, {
        key: "hide",
        value: function hide() {
            var L = GL.getNamespace().L;
            if (this._visible) {
                this._visible = false;
                this._container.style.display = 'none';
            }
        }
    }, {
        key: "_createContainer",
        value: function _createContainer() {
            var L = GL.getNamespace().L;
            this._items = [];
            var container = this._container = L.DomUtil.create('div', CLASS_NAME, document.body);
            container.style.zIndex = 10000;
            container.style.position = 'absolute';

            L.DomEvent.on(container, 'click', L.DomEvent.stop).on(container, 'mousedown', L.DomEvent.stop).on(container, 'dblclick', L.DomEvent.stop).on(container, 'contextmenu', L.DomEvent.stop);
        }
    }, {
        key: "_removeContainer",
        value: function _removeContainer() {
            var L = GL.getNamespace().L;
            this._items = [];
            L.DomUtil.remove(this._container);
        }
    }, {
        key: "_createItems",
        value: function _createItems(itemOptions) {

            if (!this._container) this._createContainer();

            this._removeAllItem();

            itemOptions = itemOptions.concat(GAEA_ITEMS);

            for (var i = 0, l = itemOptions.length; i < l; i++) {
                this._items.push(this._createItem(this._container, itemOptions[i]));
            }
        }
    }, {
        key: "_createItem",
        value: function _createItem(container, options, index) {

            var L = GL.getNamespace().L;

            if (options.separator || options === '-') {
                return this._createSeparator(container, index);
            }

            var cls = CLASS_NAME + '-item',
                el = this._insertElementAt('a', cls, container, index),
                callback = this._createEventHandler(el, options.callback, options.context, options.hideOnSelect),
                html = '';

            if (options.icon) {
                html = '<img class="' + CLASS_NAME + '-icon" src="' + options.icon + '"/>';
            } else if (options.iconCls) {
                html = '<span class="' + CLASS_NAME + '-icon ' + options.iconCls + '"></span>';
            }

            el.innerHTML = html + options.text;
            el.href = '#';

            L.DomEvent.on(el, 'mousedown', L.DomEvent.stopPropagation).on(el, 'click', callback);

            return {
                id: L.Util.stamp(el),
                el: el,
                callback: callback
            };
        }
    }, {
        key: "_removeAllItem",
        value: function _removeAllItem() {
            var L = GL.getNamespace().L;
            var item = void 0;

            while (this._container.children.length) {
                item = this._container.children[0];
                this._removeItem(L.Util.stamp(item));
            }
        }
    }, {
        key: "_removeItem",
        value: function _removeItem(id) {
            var L = GL.getNamespace().L;
            var item = void 0,
                el = void 0,
                i = void 0,
                l = void 0,
                callback = void 0;

            for (i = 0, l = this._items.length; i < l; i++) {
                item = this._items[i];

                if (item.id === id) {
                    el = item.el;
                    callback = item.callback;

                    if (callback) {
                        L.DomEvent.off(el, 'mousedown', L.DomEvent.stopPropagation).off(el, 'click', callback);
                    }

                    this._container.removeChild(el);
                    this._items.splice(i, 1);

                    return item;
                }
            }
            return null;
        }
    }, {
        key: "_createSeparator",
        value: function _createSeparator(container, index) {
            var L = GL.getNamespace().L;
            var el = this._insertElementAt('div', CLASS_NAME + '-separator', container, index);

            return {
                id: L.Util.stamp(el),
                el: el
            };
        }
    }, {
        key: "_createEventHandler",
        value: function _createEventHandler(el, func, context, hideOnSelect) {
            var me = this;
            hideOnSelect = hideOnSelect !== undefined ? hideOnSelect : true;

            return function (e) {
                if (hideOnSelect) {
                    me.hide();
                }

                if (func) {
                    func.call(context || null, me._showLocation);
                }
            };
        }
    }, {
        key: "_insertElementAt",
        value: function _insertElementAt(tagName, className, container, index) {
            var refEl = void 0,
                el = document.createElement(tagName);

            el.className = className;

            if (index !== undefined) {
                refEl = container.children[index];
            }

            if (refEl) {
                container.insertBefore(el, refEl);
            } else {
                container.appendChild(el);
            }

            return el;
        }
    }, {
        key: "_setPosition",
        value: function _setPosition(pt) {

            var bodySize = {
                x: document.body.clientWidth || 0,
                y: document.body.clientHeight || 0
            },
                container = this._container,
                containerSize = this._getElementSize(container);

            container._leaflet_pos = pt;

            if (pt.x + containerSize.x > bodySize.x) {
                container.style.left = 'auto';
                container.style.right = Math.max(bodySize.x - pt.x, 0) + 'px';
            } else {
                container.style.left = Math.max(pt.x, 0) + 'px';
                container.style.right = 'auto';
            }

            if (pt.y + containerSize.y > bodySize.y) {
                container.style.top = 'auto';
                container.style.bottom = Math.max(bodySize.y - pt.y, 0) + 'px';
            } else {
                container.style.top = Math.max(pt.y, 0) + 'px';
                container.style.bottom = 'auto';
            }
        }
    }, {
        key: "_getElementSize",
        value: function _getElementSize(el) {
            var size = this._size,
                initialDisplay = el.style.display;

            if (!size || this._sizeChanged) {
                size = {};

                el.style.left = '-999999px';
                el.style.right = 'auto';
                el.style.display = 'block';

                size.x = el.offsetWidth;
                size.y = el.offsetHeight;

                el.style.left = 'auto';
                el.style.display = initialDisplay;

                this._sizeChanged = false;
            }

            return size;
        }
    }]);

    return Contextmenu;
}();

GL.E.Contextmenu = _Event2.default;
GL.Contextmenu = new Contextmenu();

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(16);

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _TocUtil = __webpack_require__(1);

var _TocUtil2 = _interopRequireDefault(_TocUtil);

var _TocEvent = __webpack_require__(0);

var _TocEvent2 = _interopRequireDefault(_TocEvent);

var _TocItemType = __webpack_require__(2);

var _TocItemType2 = _interopRequireDefault(_TocItemType);

var _TocItemOtFieldType = __webpack_require__(3);

var _TocItemOtFieldType2 = _interopRequireDefault(_TocItemOtFieldType);

var _VectorLayerInfo = __webpack_require__(21);

var _VectorLayerInfo2 = _interopRequireDefault(_VectorLayerInfo);

var _EsriLayerInfo = __webpack_require__(20);

var _EsriLayerInfo2 = _interopRequireDefault(_EsriLayerInfo);

var _TocControl = __webpack_require__(19);

var _TocControl2 = _interopRequireDefault(_TocControl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Svend on 2017/4/18.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var defaultOpts = {
    layerInfo: {
        default: {
            interval: 60000,
            autoRefresh: true,
            state: 'cluster',
            displayKeyLabel: {
                'name': '名称',
                'address': '地址',
                'categoryName': '类别',
                'regionName': '所属辖区'
            },
            clusterOptions: {},
            callback: null
        }
    },
    staticService: [],
    exclude: []
};

var Toc = function (_GL$Module) {
    _inherits(Toc, _GL$Module);

    function Toc(map) {
        _classCallCheck(this, Toc);

        var _this = _possibleConstructorReturn(this, (Toc.__proto__ || Object.getPrototypeOf(Toc)).call(this, Toc.id, map));

        _this.layerInfos = {};

        _this.config();
        return _this;
    }

    _createClass(Toc, [{
        key: 'activate',
        value: function activate() {
            this.requestTreeData();

            this._control = new _TocControl2.default(this, this.options);
            this._control.addTo(this._map);
        }
    }, {
        key: 'inactivate',
        value: function inactivate() {
            this._map.removeControl(this._control);
            delete this._control;
            this.clear();
        }
    }, {
        key: 'config',
        value: function config(options) {
            options = options || {};
            GL.H.extend(defaultOpts.layerInfo, options.layerInfo || {});
            options = GL.H.extend({}, defaultOpts, options);
            GL.H.setOptions(this, options);

            this.resetLayerInfoOptions();
        }
    }, {
        key: 'resetLayerInfoOptions',
        value: function resetLayerInfoOptions() {
            for (var layerName in this.layerInfos) {
                var opts = this.options.layerInfo[layerName] || this.options.layerInfo['default'];
                this.layerInfos[layerName].config(opts);
            }
        }

        /**
         * 请求图层树结构数据
         */

    }, {
        key: 'requestTreeData',
        value: function requestTreeData() {
            var _this2 = this;

            GL.Service.searchLayerTree(function (data) {
                _TocUtil2.default.initData(data);
                _this2._createLayerInfo();
            });
        }
    }, {
        key: 'stateChange',
        value: function stateChange(items, state) {
            //改变数据源中 item 的 checkField 状态
            _TocUtil2.default.changeItemsCheck(state, items);

            var layerItems = [];

            items.forEach(function (item) {
                var layerItem = _TocUtil2.default.getLayerItemByItem(item);
                layerItem ? layerItems.push(layerItem) : _TocUtil2.default.getAllLayerItem(item.children, layerItems);
            });

            var dynamicLayerNames = [];
            var staticLayerNames = [];

            layerItems.forEach(function (layerItem) {
                if (layerItem.objectTypeField === _TocItemOtFieldType2.default.OBJECTTYPE_DYNAMIC) dynamicLayerNames.push(layerItem.name);else if (layerItem.objectTypeField === _TocItemOtFieldType2.default.OBJECTTYPE_TYPE) staticLayerNames.push(layerItem.name);
            });

            dynamicLayerNames.length > 0 && this.requestDynamicLayerData(dynamicLayerNames);

            staticLayerNames.length > 0 && this.requestStaticLayerData();

            return this;
        }
    }, {
        key: 'requestDynamicLayerData',
        value: function requestDynamicLayerData(layerNames) {
            if (!layerNames) return;
            var layerInfos = this.layerInfos;
            layerNames.forEach(function (layerName) {
                var layerInfo = layerInfos[layerName];
                if (layerInfo && layerInfo instanceof _VectorLayerInfo2.default) layerInfo.requester.restart();
            });

            return this;
        }
    }, {
        key: 'requestStaticLayerData',
        value: function requestStaticLayerData() {
            var _this3 = this;

            this.options.staticService.forEach(function (service) {
                var layerInfo = _this3.layerInfos[service.serviceName];
                if (layerInfo && layerInfo instanceof _EsriLayerInfo2.default) layerInfo.update();
            });
            return this;
        }
    }, {
        key: 'getOverlay',
        value: function getOverlay(layerName, overlayId) {
            if (!layerName || !overlayId) return null;
            var layerInfo = this.getLayerInfoByLayerName(layerName);
            if (!layerInfo || !layerInfo instanceof _VectorLayerInfo2.default) return null;
            return layerInfo.requester.resultRender.getOverlay(overlayId);
        }
    }, {
        key: 'getLayerInfoByLayerName',
        value: function getLayerInfoByLayerName(layerName) {
            if (!layerName) return;
            return this.layerInfos[layerName];
        }
    }, {
        key: 'getArcgisLayerInfoByServiceUrl',
        value: function getArcgisLayerInfoByServiceUrl(serviceUrl) {
            for (var k in this.layerInfos) {
                var layerInfo = this.layerInfos[k];
                if (!layerInfo instanceof _EsriLayerInfo2.default || layerInfo.serviceUrl !== serviceUrl) continue;
                return layerInfo;
            }
            return null;
        }
    }, {
        key: 'clear',
        value: function clear() {
            for (var k in this.layerInfos) {
                var layerInfo = this.layerInfos[k];
                layerInfo.destroy();
            }
            this.layerInfos = {};
        }
    }, {
        key: '_createLayerInfo',
        value: function _createLayerInfo() {
            var _this4 = this;

            this.clear();

            var layerItems = [];

            var visArr = _TocUtil2.default.getVisibleDataArr();

            _TocUtil2.default.getAllLayerItem(visArr, layerItems);

            layerItems.forEach(function (layerItem) {
                if (layerItem.objectTypeField !== _TocItemOtFieldType2.default.OBJECTTYPE_DYNAMIC) return true;
                var opts = _this4.options.layerInfo[layerItem.name] || _this4.options.layerInfo['default'];
                _this4.layerInfos[layerItem.name] = new _VectorLayerInfo2.default(_this4._map, layerItem.name, opts);
            });

            GL.Hub.on(_TocEvent2.default.ItemChildrenChanged, this._onTocItemChildrenChange, this);

            if (GL.EsriMapServerLayer) {
                this.options.staticService.forEach(function (service) {
                    var opts = _this4.options.layerInfo[service.serviceName] || _this4.options.layerInfo['default'];
                    _this4.layerInfos[service.serviceName] = new _EsriLayerInfo2.default(_this4._map, service.serviceName, service.serviceUrl, opts);
                });

                this.requestStaticLayerData();
            }
        }
    }, {
        key: '_onTocItemChildrenChange',
        value: function _onTocItemChildrenChange(eventParams) {
            var param = eventParams ? eventParams[0] : {};
            if (!param || !param.item) return;
            var item = param.item;
            if (item.type !== _TocItemType2.default.TYPE_LAYER && item.objectTypeField !== _TocItemOtFieldType2.default.OBJECTTYPE_DYNAMIC) return;
            var opts = param.item.options || this.options.layerInfo['default'];
            this.layerInfos[param.item.name] = new _VectorLayerInfo2.default(this._map, param.item.name, opts);
        }
    }]);

    return Toc;
}(GL.Module);

Toc.id = 'layerTree';

GL.Toc = Toc;
GL.TocUtil = _TocUtil2.default;
GL.TocItemType = _TocItemType2.default;
GL.TocItemOtFieldType = _TocItemOtFieldType2.default;
GL.E.Toc = _TocEvent2.default;

GL.Map.addInitHook(function () {
    this.on(GL.E.MapLoaded, function () {
        new Toc(this);
    }, this);
});

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(36);

var _TocUtil = __webpack_require__(1);

var _TocUtil2 = _interopRequireDefault(_TocUtil);

var _TocEvent = __webpack_require__(0);

var _TocEvent2 = _interopRequireDefault(_TocEvent);

var _TocItemType = __webpack_require__(2);

var _TocItemType2 = _interopRequireDefault(_TocItemType);

var _TocItemOtFieldType = __webpack_require__(3);

var _TocItemOtFieldType2 = _interopRequireDefault(_TocItemOtFieldType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Svend on 2017/4/18.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var defaultOptions = {
    position: "topright",
    exclude: []
};

var TocControl = function (_GL$Control) {
    _inherits(TocControl, _GL$Control);

    function TocControl(toc) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

        _classCallCheck(this, TocControl);

        options = GL.H.extend({}, defaultOptions, options);

        var _this = _possibleConstructorReturn(this, (TocControl.__proto__ || Object.getPrototypeOf(TocControl)).call(this, options, callback));

        _this.toc = toc;
        return _this;
    }

    _createClass(TocControl, [{
        key: 'onAdd',
        value: function onAdd(map) {
            var _this2 = this;

            this._map = map;

            var L = GL.getNamespace().L;

            var container = this._container = L.DomUtil.create('div', 'leaflet-control layer-tree-closed');
            L.DomEvent.disableClickPropagation(container);
            L.DomEvent.on(container, "wheel", L.DomEvent.stopPropagation);

            L.DomUtil.create('div', 'layer-tree-btn', container);

            var contentContainer = L.DomUtil.create('div', 'layer-tree-content', container);
            var treeContent = L.DomUtil.create('div', 'layer-tree-tree', contentContainer);

            GL.Hub.on(_TocEvent2.default.DataInitFinish, function () {
                _this2.addTree(treeContent);
                _this2.addEvent();
            }, this);
            return container;
        }
    }, {
        key: 'addTree',
        value: function addTree(parent) {
            var items = this.getVisibleTreeData(this.options.exclude);
            this.layerTree = new dhtmlXTreeView({
                parent: parent,
                checkboxes: true,
                items: items
            });
            this.layerTree._control = this;
            this.layerTree.setSizes();

            this.layerTree.attachEvent("onCheck", this._onCheck.bind(this));
        }
    }, {
        key: 'addEvent',
        value: function addEvent() {
            var L = GL.getNamespace().L;
            L.DomEvent.on(this._container, 'mouseenter', this._onContainerMouseEnter, this);

            L.DomEvent.on(this._container, 'mouseleave', this._onContainerMouseLeave, this);

            GL.Hub.on(_TocEvent2.default.ItemCheckChanged, this._onTocItemCheck, this);

            GL.Hub.on(_TocEvent2.default.ItemChildrenChanged, this._onTocItemChildrenChange, this);
        }
    }, {
        key: '_onContainerMouseEnter',
        value: function _onContainerMouseEnter() {
            var L = GL.getNamespace().L;
            L.DomUtil.removeClass(this._container, 'layer-tree-closed');
            this.layerTree.setSizes();
        }
    }, {
        key: '_onContainerMouseLeave',
        value: function _onContainerMouseLeave() {
            var L = GL.getNamespace().L;
            L.DomUtil.addClass(this._container, 'layer-tree-closed');
        }
    }, {
        key: '_onTocItemCheck',
        value: function _onTocItemCheck(event) {
            if (!event || !event.target) return;
            if (event.state) this.layerTree.checkItem(event.target.id);else this.layerTree.uncheckItem(event.target.id);
        }
    }, {
        key: '_onTocItemChildrenChange',
        value: function _onTocItemChildrenChange() {
            this.layerTree.loadStruct(this.getVisibleTreeData(this.options.exclude));
        }
    }, {
        key: '_onCheck',
        value: function _onCheck(id, state) {
            if (this._checking) return;
            this._checking = true;

            var currentItem = _TocUtil2.default.getItemById(id, _TocUtil2.default.getVisibleDataArr());
            if (currentItem) {
                this._changeSubState.call(this.layerTree, id, state);
                this._changeParentState.call(this.layerTree, currentItem.id, state);

                this.toc.stateChange([currentItem], state);
            }

            this._checking = false;
        }
    }, {
        key: '_changeParentState',
        value: function _changeParentState(id, state) {
            var parentId = this.getParentId(id);
            if (!parentId) return;

            if (state) this.checkItem(parentId);else {
                var subItemIds = this.getSubItems(parentId);
                for (var i = 0, len = subItemIds.length; i < len; i++) {
                    if (this.isItemChecked(subItemIds[i])) return;
                }
                this.uncheckItem(parentId);
            }
        }
    }, {
        key: '_changeSubState',
        value: function _changeSubState(id, state) {
            var subIds = this.getSubItems(id) || [];
            for (var i = 0, len = subIds.length; i < len; i++) {
                state ? this.checkItem(subIds[i]) : this.uncheckItem(subIds[i]);
            }
        }
    }, {
        key: 'getVisibleTreeData',
        value: function getVisibleTreeData(exclude) {
            var _this3 = this;

            var treeItems = [];
            var items = _TocUtil2.default.getVisibleDataArr();
            items.forEach(function (item) {
                var treeItem = _this3.parseTocItem2TreeItem(item);
                if (exclude.indexOf(treeItem.id) !== -1) {
                    treeItem.items = treeItem.items || [];
                    treeItem.items.forEach(function (t) {
                        treeItems.push(t);
                    });
                } else {
                    treeItems.push(treeItem);
                }
            });
            return treeItems;
        }
    }, {
        key: 'parseTocItem2TreeItem',
        value: function parseTocItem2TreeItem(item) {
            var _this4 = this;

            var treeItem = {
                id: item.id,
                text: item.displayName,
                checked: item.checkField || false,
                icons: {
                    file: 'tree_icon_' + item.name
                },
                userdata: {
                    id: item.id,
                    layerId: item.layerId,
                    type: item.type,
                    name: item.name,
                    displayName: item.displayName,
                    featureType: item.featureType,
                    objectTypeField: item.objectTypeField,
                    check: item.checkField,
                    visible: item.visible,
                    query: item.query,
                    edit: item.edit
                }
            };

            if (item.type === _TocItemType2.default.TYPE_LAYER_GROUP) treeItem.open = 1;
            if (item.children.length > 0) {
                treeItem.items = [];
                item.children.forEach(function (t) {
                    treeItem.items.push(_this4.parseTocItem2TreeItem(t));
                });
            }

            return treeItem;
        }
    }]);

    return TocControl;
}(GL.Control);

exports.default = TocControl;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by Svend on 2017/4/18.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _TocUtil = __webpack_require__(1);

var _TocUtil2 = _interopRequireDefault(_TocUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var defaultOpts = {
    popupOptions: {}
};

var ArcgisLayerInfo = function () {
    function ArcgisLayerInfo(map, serviceName, serviceUrl, options) {
        _classCallCheck(this, ArcgisLayerInfo);

        this.config(options);

        this._map = map;
        this.layerName = serviceName;
        this.serviceUrl = serviceUrl;

        this._defineMap = new Map();

        this._setDefLayerDefs();

        this._layer = this.createLayer();
    }

    _createClass(ArcgisLayerInfo, [{
        key: 'config',
        value: function config(options) {
            options = GL.H.extend({}, defaultOpts, options);
            GL.H.setOptions(this, options);
            if (this._layer) GL.H.setOptions(this._layer, options);
        }
    }, {
        key: 'createLayer',
        value: function createLayer() {
            var arcgisLayer = new GL.EsriMapServerLayer(this.serviceUrl, this.options);
            arcgisLayer.id = this.layerName;
            arcgisLayer.bindPopup(this.defaultCallback, this.options.popupOptions, this);
            this._map.addLayer(arcgisLayer);
            return arcgisLayer;
        }
    }, {
        key: '_setDefLayerDefs',
        value: function _setDefLayerDefs() {
            var allDefines = {};
            for (var i = 0; i <= 100; i++) {
                allDefines[i] = '1!=1';
            }
            this.options.layerDefs = allDefines;
        }
    }, {
        key: 'update',
        value: function update() {

            this._defineMap.clear();

            var layers = this._layer._layers;
            if (Object.keys(layers).length === 0) {
                return;
            }

            for (var name in layers) {
                var layerId = layers[name].id;

                var layerItem = _TocUtil2.default.getItemByName(name, _TocUtil2.default.getVisibleDataArr());
                layerItem = _TocUtil2.default.getLayerItemByItem(layerItem);
                var leafNames = [];
                _TocUtil2.default.getAllLeafItemName([layerItem], leafNames);

                this._defineMap.set(parseInt(layerId), {
                    objectTypeField: layerItem.objectTypeField,
                    objectTypes: leafNames
                });
            }

            var allDefines = {};
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this._defineMap[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var _step$value = _slicedToArray(_step.value, 2),
                        _layerId = _step$value[0],
                        define = _step$value[1];

                    var defines = '';
                    if (define.objectTypes.length === 0) {
                        defines = '1!=1';
                    } else {
                        var _iteratorNormalCompletion2 = true;
                        var _didIteratorError2 = false;
                        var _iteratorError2 = undefined;

                        try {
                            for (var _iterator2 = define.objectTypes[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                                var type = _step2.value;

                                var exp = define.objectTypeField + "='" + type + "'";
                                defines += defines !== '' ? " or " + exp : exp;
                            }
                        } catch (err) {
                            _didIteratorError2 = true;
                            _iteratorError2 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                                    _iterator2.return();
                                }
                            } finally {
                                if (_didIteratorError2) {
                                    throw _iteratorError2;
                                }
                            }
                        }
                    }
                    allDefines[_layerId] = defines;
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            this._layer.setLayerDefs(allDefines);
        }
    }, {
        key: 'defaultCallback',
        value: function defaultCallback(error, results, response) {
            if (!response || !response.results || response.results.length === 0) return null;
            for (var i = 0, len = response.results.length; i < len; i++) {
                var result = response.results[i];

                var define = this._defineMap.get(result.layerId);
                if (!define || define.objectTypes.length === 0) continue;

                var att = result.attributes;
                if (define.objectTypes.indexOf(att.TYPE) === -1) continue;

                if (this.options.callback) return att.NAME;
                this.options.callback(result);
                return null;
            }

            return null;
        }
    }, {
        key: 'destroy',
        value: function destroy() {
            this._map.removeLayer(this._layer);
        }
    }]);

    return ArcgisLayerInfo;
}();

exports.default = ArcgisLayerInfo;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by Svend on 2017/4/18.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _VectorResultRenderer = __webpack_require__(23);

var _VectorResultRenderer2 = _interopRequireDefault(_VectorResultRenderer);

var _VectorRequester = __webpack_require__(22);

var _VectorRequester2 = _interopRequireDefault(_VectorRequester);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var defaultOpts = {
    interval: 60000,
    state: 'cluster'
};

var VectorLayerInfo = function () {
    /**
     * 动态图层对象
     * @param map {GL.Map}
     * @param layerName {String} 图层名称
     * @param options {Object} layerInfo options
     * @param options.interval {Number} 定时请求器的间隔时间，单位：毫秒。默认：60000
     * @param options.state {String} 'normal'、'cluster'、'heat' 图层的状态
     */
    function VectorLayerInfo(map, layerName, options) {
        _classCallCheck(this, VectorLayerInfo);

        options = GL.H.extend({}, defaultOpts, options);
        GL.H.setOptions(this, options);

        this.layerName = layerName;
        this._map = map;
        this._layer = this.createLayer();
        var resultRender = this.createRenderer();
        this.requester = new _VectorRequester2.default(map, this._layer, resultRender, options);
    }

    _createClass(VectorLayerInfo, [{
        key: 'createLayer',
        value: function createLayer() {
            var layer = new GL.VectorLayer(this.layerName).addTo(this._map);
            var state = this.options.state;
            if (state !== 'normal') {
                layer.cluster(this.options.clusterOptions);
            }
            return layer;
        }
    }, {
        key: 'createRenderer',
        value: function createRenderer() {
            return new _VectorResultRenderer2.default(this._layer, this.options);
        }
    }, {
        key: 'config',
        value: function config(options) {
            options = GL.H.extend({}, defaultOpts, options);
            GL.H.setOptions(this, options);

            this.requester.config(options);
        }
    }, {
        key: 'destroy',
        value: function destroy() {
            this.requester.stopTimer();
            this._layer.clear();
            if (this._layer._cluster) this._map.removeLayer(this._layer._cluster);
            this._map.removeLayer(this._layer);
            delete this._map;
            delete this._layer;
            delete this.requester;
        }
    }]);

    return VectorLayerInfo;
}();

exports.default = VectorLayerInfo;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _TocUtil = __webpack_require__(1);

var _TocUtil2 = _interopRequireDefault(_TocUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * 动态图层数据请求器
 * @author svend
 * @since  16-11-1
 */
var VectorRequester = function () {
    /**
     * 动态图层数据请求器
     *
     * @param map {GL.Map}
     * @param layer {GL.VectorLayer}
     * @param resultRender {VectorResultRenderer} 图层结果渲染器
     * @param options {Object}
     */
    function VectorRequester(map, layer, resultRender, options) {
        _classCallCheck(this, VectorRequester);

        this._map = map;

        this._layer = layer;

        this.config(options);

        this.resultRender = resultRender;

        if (this.interval > 0 && !this.timer) {
            this.invokeMethods();
        }
    }

    _createClass(VectorRequester, [{
        key: 'config',
        value: function config(options) {
            this.interval = options.interval || this.interval || 60000;
            this.autoRefresh = options.autoRefresh;
            if (this.autoRefresh === undefined) this.autoRefresh = true;

            if (this.autoRefresh) this.startTimer();else this.stopTimer();
        }

        /**
         * 开启请求定时器
         */

    }, {
        key: 'startTimer',
        value: function startTimer() {
            var _this = this;

            this.invokeMethods();
            this.timer = setInterval(function () {
                _this.invokeMethods();
            }, this.interval);
        }

        /**
         * 停止请求定时器
         */

    }, {
        key: 'stopTimer',
        value: function stopTimer() {
            if (this.timer) {
                clearInterval(this.timer);
            }
            this.timer = null;
        }

        /**
         * 重新启动请求定时器
         */

    }, {
        key: 'restart',
        value: function restart() {
            this.stopTimer();
            if (this.autoRefresh) this.startTimer();else this.invokeMethods();
        }

        /**
         * 定时器执行函数
         */

    }, {
        key: 'invokeMethods',
        value: function invokeMethods() {
            this.search();
        }

        /**
         * 查询图层数据
         */

    }, {
        key: 'search',
        value: function search() {
            var _this2 = this;

            var visibleItems = _TocUtil2.default.getVisibleDataArr();
            var layerItem = _TocUtil2.default.getItemByName(this._layer.id, visibleItems);
            if (!layerItem) return;
            var itemIds = [];
            _TocUtil2.default.getAllLeafItemId(layerItem.children, itemIds);

            this._layer.clear();

            if (itemIds.length === 0) return;
            // let bounds = this._map.getBounds();
            // let boundStr = bounds.toString();

            GL.Service.queryDynamicByFilter(layerItem.id, itemIds, '', function (data) {
                if (_this2.resultRender) {
                    _this2.resultRender.resultRenderer(data);
                }
            });
        }
    }]);

    return VectorRequester;
}();

exports.default = VectorRequester;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var defaultOpts = {
    displayKeyLabel: {
        'name': '名称',
        'address': '地址',
        'categoryName': '类别',
        'regionName': '所属辖区'
    }
};

/**
 * 动态图层渲染器
 * @author svend
 * @since  16-11-1
 */

var VectorResultRenderer = function () {
    /**
     * 动态图层渲染器
     * @param layer {*} 图层对象
     * @param options {object}
     */
    function VectorResultRenderer(layer) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, VectorResultRenderer);

        options = options || {};
        options = GL.H.extend({}, defaultOpts, options);
        this._overlayCallback = options.callback;

        GL.H.setOptions(this, options);

        this._cache = [];
        this._layer = layer;
    }

    /**
     * 将 JSON 渲染到图层
     * @param data {Object} JSON 数据对象
     */


    _createClass(VectorResultRenderer, [{
        key: 'resultRenderer',
        value: function resultRenderer(data) {
            this.clear();
            if (!data) return;
            for (var i = 0, len = data.length; i < len; i++) {
                var record = data[i];
                var overlay = this.buildOverlay(record);
                this.renderOverlay(overlay);
            }
        }

        /**
         * 清空缓存数据和高亮效果
         */

    }, {
        key: 'clear',
        value: function clear() {
            this._layer.clear();
            this._cache = [];
        }
    }, {
        key: 'buildOverlay',
        value: function buildOverlay(record) {
            var id = record.id;
            var name = record.name;
            var coord = record.coord;
            var overlay = void 0;

            if (record.featureType === GL.Point.type) {
                var iconKey = record.icon || record.objectTypeCode;
                if (iconKey && !GL.H.startWith(iconKey, 'icons.')) {
                    iconKey = 'icons.' + iconKey;
                }

                var icon = GL.Cache.getIcon(iconKey);
                overlay = new GL.Point(coord, icon, {
                    title: name
                });
            } else if (record.featureType === GL.Polyline.type) {
                overlay = new GL.Polyline(coord);
            } else if (record.featureType === GL.Polygon.type) {
                overlay = new GL.Polygon(coord);
            }

            overlay.id = id;
            overlay.attr = record;
            return overlay;
        }
    }, {
        key: 'renderOverlay',
        value: function renderOverlay(overlay) {
            this._cache.push(overlay);
            this._layer.addOverlay(overlay);
            this.renderOverlayPopup(overlay);
            this.renderOverlayLabel(overlay);
        }
    }, {
        key: 'renderOverlayLabel',
        value: function renderOverlayLabel(overlay) {
            var att = overlay.attr;
            if (att.hasOwnProperty('isLabel') && (att.isLabel === true || att.isLabel === '1')) overlay.bindLabel(att.name);
        }
    }, {
        key: 'renderOverlayPopup',
        value: function renderOverlayPopup(overlay) {

            overlay.on('popupclose popupopen', function (e) {
                if (e.type === "popupclose") {
                    overlay.clearHighlight();
                }
            }, this);

            overlay.on('click', function () {
                var _this = this;

                if (this._overlayCallback) {
                    this._overlayCallback(overlay);
                    return;
                }

                overlay.highlight();

                var att = overlay.attr;
                GL.Service.searchFeatureInfoById(att.id, att.objectTypeId, function (data) {
                    GL.H.extend(overlay.attr, data);
                    _this.showPopup(overlay, overlay.attr);
                });
            }, this);
        }
    }, {
        key: 'showPopup',
        value: function showPopup(overlay, data) {
            var content = '';
            if (data) {
                if (data instanceof Object) {
                    content = this.parseObjectToHTML(data);
                } else {
                    content = data.toString();
                }
            }
            overlay.unbindPopup();
            overlay.bindPopup(content);
            overlay.openPopup();
        }
    }, {
        key: 'parseObjectToHTML',
        value: function parseObjectToHTML(data) {
            var html = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

            var p = '<p><strong>[KEY]：</strong>[VALUE]</p>';
            for (var key in data) {
                if (!data.hasOwnProperty(key)) continue;
                var includeKeys = Object.keys(this.options.displayKeyLabel);
                if (includeKeys.indexOf(key) === -1) continue;
                var label = this.options.displayKeyLabel[key];

                var value = data[key];
                if (!GL.H.isNumber(value) && !value) continue;
                if (value instanceof Object) {
                    html = this.parseObjectToHTML(value, html);
                } else {
                    html += p.replace('[KEY]', label).replace('[VALUE]', value);
                }
            }
            return html;
        }

        /**
         * 清除图层高亮效果
         */

    }, {
        key: 'clearHighlight',
        value: function clearHighlight() {
            this._layer.clearHighlight();
        }
    }, {
        key: 'selectOverlay',
        value: function selectOverlay(overlay) {
            if (!overlay) return;
            overlay.fire('click');
        }
    }, {
        key: 'getOverlay',
        value: function getOverlay(id) {
            return this._layer.getOverlay(id);
        }
    }]);

    return VectorResultRenderer;
}();

exports.default = VectorResultRenderer;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _TocEvent = __webpack_require__(0);

var _TocEvent2 = _interopRequireDefault(_TocEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @author Svend
 * @since  16-10-31
 */
var TocItem = function () {
  function TocItem() {
    _classCallCheck(this, TocItem);

    this.id = '';
    /**
     * 所属 layerId
     * @type {string}
     */
    this.layerId = '';
    /**
     * 类型：layergroup,layer,LogicObjectType,objecttype
     * @type {string}
     */
    this.type = '';
    /**
     * 图层名称
     * @type {string}
     */
    this.name = '';
    /**
     * 显示名称
     * @type {string}
     */
    this.displayName = '';
    /**
     * Point、Polyline、Polygon
     * @type {string}
     */
    this.featureType = '';
    /**
     * TYPE:静态图层,DYNAMIC:动态图层，INDEX:索引图层
     * @type {string}
     */
    this.objectTypeField = '';
    /**
     * 是否选中
     * @type {boolean}
     */
    this.checkField = false;
    /**
     * 是否显示
     * @type {boolean}
     */
    this.visible = false;
    /**
     * 是否可以查询
     * @type {boolean}
     */
    this.query = false;
    /**
     * 是否可以编辑
     * @type {boolean}
     */
    this.edit = false;
    /**
     * 父节点
     * @type {TocItem}
     */
    this.parentItem = null;
    /**
     * 子节点
     * @type {Array}
     */
    this.children = [];

    /**
     * 选中状态是否改变过
     * @type {boolean}
     */
    this.checkChanged = false;
  }

  /**
   * 改变选中状态
   * @param state
   */


  _createClass(TocItem, [{
    key: 'check',
    value: function check(state) {
      this.checkField = state;
      this.checkChanged = true;
      GL.Hub.fire(_TocEvent2.default.ItemCheckChanged, { target: this, state: state });
      return this;
    }

    /**
     * 添加子节点
     * @param item {TocItem} 子节点
     */

  }, {
    key: 'addChildItem',
    value: function addChildItem(item) {
      if (!item || !item instanceof TocItem) return;
      item.parentItem = this;
      this.children.push(item);
      GL.Hub.fire(_TocEvent2.default.ItemChildrenChanged, { target: this, item: item });
      return this;
    }
  }]);

  return TocItem;
}();

exports.default = TocItem;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by Svend on 2017/5/22.
 */
GL.E.SingleQuery = function () {
    function _class() {
        _classCallCheck(this, _class);
    }

    _createClass(_class, null, [{
        key: 'Active',
        get: function get() {
            return function () {
                return '_SingleQuery_Active';
            }();
        }
    }, {
        key: 'Destroy',
        get: function get() {
            return function () {
                return '_SingleQuery_Destroy';
            }();
        }
    }]);

    return _class;
}();

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(25);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultOpt = {
    serviceUrl: '',
    isPoiSearchEnable: false,
    isRouteSearchEnable: false,
    queryType: '1',
    callback: null,
    displayKeyLabel: {
        'name': '名称',
        'address': '地址',
        'categoryName': '类别',
        'regionName': '所属辖区'
    }
};

var GLSingleQuery = function (_GL$Module) {
    _inherits(GLSingleQuery, _GL$Module);

    function GLSingleQuery(map) {
        _classCallCheck(this, GLSingleQuery);

        var _this = _possibleConstructorReturn(this, (GLSingleQuery.__proto__ || Object.getPrototypeOf(GLSingleQuery)).call(this, GLSingleQuery.id, map));

        _this.singleLngLat = null;
        _this.isActive = false;
        _this.queryTimer = null;
        _this.identifyVectorLayer = new GL.VectorLayer('identifyVectorLayer');

        _this.config();
        return _this;
    }

    _createClass(GLSingleQuery, [{
        key: 'activate',
        value: function activate() {
            this._map.addLayer(this.identifyVectorLayer);
            GL.Hub.on(GL.E.SingleQuery.Active, this.active, this);
            GL.Hub.on(GL.E.SingleQuery.Destroy, this.destroy, this);
        }
    }, {
        key: 'inactivate',
        value: function inactivate() {
            GL.Hub.off(GL.E.SingleQuery.Active, this.active, this);
            GL.Hub.off(GL.E.SingleQuery.Destroy, this.destroy, this);
            this.destroy();
            this._map.removeLayer(this.identifyVectorLayer);
        }
    }, {
        key: 'config',
        value: function config(options) {
            options = GL.H.extend({}, defaultOpt, options);
            GL.H.setOptions(this, options);
            this._setTooltip();
        }

        /**
         * 激活单点查询
         */

    }, {
        key: 'active',
        value: function active() {
            if (this.isActive) return;
            this.isActive = true;
            this.addEvents();
            this._tooltip = new GL.DrawTooltip(this._map);
            this._tooltip.updateContent({ text: this._tooltipText });
        }

        /**
         * 注销单点查询
         */

    }, {
        key: 'destroy',
        value: function destroy() {
            if (this.isActive) {
                this.clear();
                this.removeEvents();
                this.isActive = false;
                this._tooltip.dispose();
                delete this._tooltip;
            }
        }

        /**
         * 监听单点查询事件
         */

    }, {
        key: 'addEvents',
        value: function addEvents() {
            this._map.on('mousemove', this._onMouseMove, this);
            if (this.options.queryType === '1') this._map.on('click', this.mapClickHandler, this);else {
                this._map.on('mousemove', this.mapMouseMoveHandler, this);
            }
        }

        /**
         * 移除单点查询事件
         */

    }, {
        key: 'removeEvents',
        value: function removeEvents() {
            this._map.off('mousemove', this._onMouseMove, this);
            if (this.options.queryType === '1') this._map.off('click', this.mapClickHandler);else {
                if (this.queryTimer) clearInterval(this.queryTimer);
                this._map.on('mousemove', this.mapMouseMoveHandler);
            }
        }
    }, {
        key: '_onMouseMove',
        value: function _onMouseMove(e) {
            this._tooltip.updatePosition(e.latlng);
        }
    }, {
        key: '_setTooltip',
        value: function _setTooltip() {
            var text = void 0;

            if (this.options.queryType === '1') text = "点击地图进行单点查询。";else text = "移动鼠标进行单点查询。";

            this._tooltipText = text;
        }

        /**
         * 地图点击事件回调
         * @param e {Object} 回调参数
         */

    }, {
        key: 'mapClickHandler',
        value: function mapClickHandler(e) {

            if (!this.isActive) return;
            var latlng = e.latlng;
            this.singleLngLat = latlng.clone();
            this.serviceDataSearch();
        }

        /**
         * 地图上鼠标移动事件回调
         * @param e {Object} 回调参数
         */

    }, {
        key: 'mapMouseMoveHandler',
        value: function mapMouseMoveHandler(e) {
            var _this2 = this;

            var latlng = e.latlng;
            if (!this.isActive) return;
            if (this.isMouseInFeature(latlng)) return;

            if (this.singleLngLat) {
                var sourcePixel = this.singleLngLat.toPixel(this._map);
                var targetPixel = latlng.toPixel(this._map);
                var distance = sourcePixel.distanceTo(targetPixel);
                if (distance < 10) return;
            }

            this.singleLngLat = latlng.clone();
            if (this.queryTimer) clearInterval(this.queryTimer);
            this.queryTimer = setInterval(function () {
                _this2.serviceDataSearch();
                clearInterval(_this2.queryTimer);
            }, 750);
        }

        /**
         * 查询静态图层数据
         */

    }, {
        key: 'serviceDataSearch',
        value: function serviceDataSearch() {
            var _this3 = this;

            if (!this.singleLngLat || !this.options.serviceUrl) return;
            GL.Service.searchSingleFeatureByLngLat(this._map, this.options.serviceUrl, this.singleLngLat, function (overlay) {
                if (overlay) {
                    _this3.clear();
                    _this3.showServiceFeature(overlay);
                } else if (_this3.options.isPoiSearchEnable || _this3.options.isRouteSearchEnable) {
                    _this3.baseDataSearch();
                }
            });
        }

        /**
         * 查询基础数据
         */

    }, {
        key: 'baseDataSearch',
        value: function baseDataSearch() {
            var _this4 = this;

            if (!this.options.isPoiSearchEnable) {
                this.baseRouteSearch();
                return;
            }

            GL.Service.searchSinglePoiByLngLat(this.singleLngLat, function (overlay) {
                if (overlay) {
                    _this4.clear();
                    _this4.showBasePoi(overlay);
                } else {
                    _this4.baseRouteSearch();
                }
            });
        }

        /**
         * 查询道路数据
         */

    }, {
        key: 'baseRouteSearch',
        value: function baseRouteSearch() {
            var _this5 = this;

            if (!this.options.isRouteSearchEnable) return;

            GL.RouteService.searchSingleRoadByLngLat(this.singleLngLat, function (overlay) {
                if (overlay) {
                    _this5.clear();
                    _this5.showBaseRoad(overlay);
                }
            });
        }

        /**
         * 展示静态图层数据查询结果
         */

    }, {
        key: 'showServiceFeature',
        value: function showServiceFeature(overlay) {
            overlay.off('click', this.serviceFeatureClickHandler);
            overlay.on('click', this.serviceFeatureClickHandler, this);
            this.identifyVectorLayer.addOverlay(overlay);
            if (this.options.queryType === "1") {
                overlay.fire('click');
            }
        }

        /**
         * 静态图层数据结果点击事件回调
         * @param e {Object} 回调参数
         */

    }, {
        key: 'serviceFeatureClickHandler',
        value: function serviceFeatureClickHandler(e) {
            var _this6 = this;

            var overlay = e.target;
            overlay.unbindPopup();
            var att = overlay.attr;
            GL.Service.searchFeatureInfoById(att.POI_ID, att.OBJECTID, function (data) {
                _this6.showPopup(overlay, data);
            });
        }

        /**
         * 展示基础 POI 查询结果
         */

    }, {
        key: 'showBasePoi',
        value: function showBasePoi(overlay) {
            overlay.off('click', this.basePoiClickHandler);
            overlay.on('click', this.basePoiClickHandler, this);
            this.identifyVectorLayer.addOverlay(overlay);
            if (this.options.queryType === "1") {
                overlay.fire('click');
            }
        }

        /**
         * 展示基础 POI 查询结果点击事件回调
         * @param e {Object} 回调参数
         */

    }, {
        key: 'basePoiClickHandler',
        value: function basePoiClickHandler(e) {
            var overlay = e.target;
            this.showPopup(overlay, overlay.attr);
        }

        /**
         * 展示道路查询结果
         */

    }, {
        key: 'showBaseRoad',
        value: function showBaseRoad(overlay) {
            overlay.off('click', this.baseRoadClickHandler);
            overlay.on('click', this.baseRoadClickHandler, this);
            this.identifyVectorLayer.addOverlay(overlay);
            if (this.options.queryType === "1") {
                overlay.fire('click');
            }
        }

        /**
         * 道路查询结果点击事件回调
         * @param e {Object} 回调参数
         */

    }, {
        key: 'baseRoadClickHandler',
        value: function baseRoadClickHandler(e) {
            var overlay = e.target;
            this.showPopup(overlay);
        }

        /**
         * 显示 Popup
         */

    }, {
        key: 'showPopup',
        value: function showPopup(overlay) {
            if (this.options.callback) return this.options.callback(overlay);
            var content = '',
                data = overlay.attr;
            if (data) {
                if (data instanceof Object) {
                    content = this.parseObjectToHTML(data);
                } else {
                    content = data.toString();
                }
            }
            overlay.setPopup(new GL.Popup().setContent(content)).openPopup();

            var L = GL.getNamespace().L;

            L.DomEvent.on(overlay.getPopup().getElement(), 'mousemove', function (ev) {
                L.DomEvent.stopPropagation(ev);
            });
        }

        /**
         * 解析 overlay 属性为 HTML 节点
         * @param data {Object} overlay 属性
         * @param html {String} 初始字符串。默认：''
         * @return {string} 解析完成的 HTML 字符串
         */

    }, {
        key: 'parseObjectToHTML',
        value: function parseObjectToHTML(data) {
            var html = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

            var p = '<p><strong>[KEY]：</strong>[VALUE]</p>';
            for (var key in data) {
                if (!(key in displayKeyLabel)) continue;
                var label = displayKeyLabel[key];
                var value = data[key];
                if (!value) continue;
                if (value instanceof Object) {
                    html = this.parseObjectToHTML(value, html);
                } else {
                    html += p.replace('[KEY]', label).replace('[VALUE]', value);
                }
            }
            return html;
        }

        /**
         * 清空单点查询临时图层
         */

    }, {
        key: 'clear',
        value: function clear() {
            this.identifyVectorLayer.clear();
        }

        /**
         * 判断当前鼠标位置是否在当前查询结果 Feature 附近
         * @param latlng {LatLng} 鼠标位置
         * @return {boolean} 是否在当前 Feature 附近
         */

    }, {
        key: 'isMouseInFeature',
        value: function isMouseInFeature(latlng) {
            var array = this.identifyVectorLayer.getOverlays();
            if (array.length < 1) return false;
            var flag = false;
            var overlay = array[0];

            switch (overlay.type) {
                case GL.Point.type:
                    {
                        var sourcePixel = overlay.getLatLng().toPixel(this._map);
                        var targetPixel = latlng.toPixel(this._map);
                        var distance = sourcePixel.distanceTo(targetPixel);
                        flag = distance < 10;
                        break;
                    }
                case GL.Polyline.type:
                case GL.Polygon.type:
                    {
                        var _distance = GL.H.Geometry.calculateDistanceOfLngLatToPoly(latlng, overlay, 'px');
                        flag = _distance < 10;
                        break;
                    }
            }
            return flag;
        }
    }]);

    return GLSingleQuery;
}(GL.Module);

GLSingleQuery.id = 'singleQuery';

GL.Map.addInitHook(function () {
    this.on(GL.E.MapLoaded, function () {
        new GLSingleQuery(this);
    }, this);
});

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Event = __webpack_require__(29);

var _Event2 = _interopRequireDefault(_Event);

var _Track = __webpack_require__(30);

var _Track2 = _interopRequireDefault(_Track);

var _TrackController = __webpack_require__(31);

var _TrackController2 = _interopRequireDefault(_TrackController);

var _TrackStates = __webpack_require__(32);

var _TrackStates2 = _interopRequireDefault(_TrackStates);

var _PlayControl = __webpack_require__(28);

var _PlayControl2 = _interopRequireDefault(_PlayControl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by svend on 17-3-23.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * global options
 *
 * @type {{speed: number, marker: null, startMarker: null, endMarker: null, trajectory: boolean, trajectoryStyle: null}}
 */
var defOpts = {
    speed: 1,
    marker: null, // Use default icon for null
    startMarker: null, // start Marker icon , When null does not draw
    endMarker: null, // end Marker icon , When null does not draw
    trajectory: true, // show trajectory
    trajectoryStyle: null, // GL.Style
    playControl: null, // custom control instance
    showControl: true
};

var Playback = function (_GL$Module) {
    _inherits(Playback, _GL$Module);

    function Playback(map, tracks, callback, options) {
        _classCallCheck(this, Playback);

        var playback = GL.ModuleManager.getModule(GL.Playback.id, map.id);
        if (playback) {
            playback.destroy();
            playback = null;
        }

        var _this = _possibleConstructorReturn(this, (Playback.__proto__ || Object.getPrototypeOf(Playback)).call(this, GL.Playback.id, map));

        _this._stepInterva = 100;

        _this._tracks = tracks;

        _this.config(options);

        _this._trackController = new _TrackController2.default(map, null, options);
        _this._callbacksArry = [];
        if (callback) _this.addCallback(callback);
        return _this;
    }

    _createClass(Playback, [{
        key: "activate",
        value: function activate() {
            this.setData(this._tracks);

            if (this.options.showControl) {
                this.playControl = this.options.playControl || new _PlayControl2.default(this);
                this.playControl.addTo(map);
            }
        }
    }, {
        key: "inactivate",
        value: function inactivate() {
            this.destroy();
        }
    }, {
        key: "config",
        value: function config(options) {
            options = GL.H.extend({}, defOpts, options);
            GL.H.setOptions(this, options);
        }
    }, {
        key: "getTrack",
        value: function getTrack(id) {
            var tracks = this._trackController.getTracks();
            if (!tracks) return null;
            return tracks[id];
        }
    }, {
        key: "getTracks",
        value: function getTracks() {
            return this._trackController.getTracks();
        }
    }, {
        key: "addCallback",
        value: function addCallback(fn) {
            this._callbacksArry.push(fn);
            return this;
        }
    }, {
        key: "start",
        value: function start() {
            if (this._intervalID) return;

            if (this._playState === _TrackStates2.default.complete) this.stop();

            this._intervalID = window.setInterval(this._tick, this._stepInterva, this);
            this._setPlayState(_TrackStates2.default.playing);
            return this;
        }
    }, {
        key: "pause",
        value: function pause() {
            if (!this._intervalID) return;
            clearInterval(this._intervalID);
            this._intervalID = null;
            this._setPlayState(_TrackStates2.default.pause);
            return this;
        }
    }, {
        key: "stop",
        value: function stop() {
            this.pause();
            this._trackController.clean();
            this._setPlayState(_TrackStates2.default.stop);
            this._callbacks();
            return this;
        }
    }, {
        key: "isPlaying",
        value: function isPlaying() {
            return this._playState === _TrackStates2.default.playing;
        }
    }, {
        key: "getSpeed",
        value: function getSpeed() {
            return this.options.speed;
        }
    }, {
        key: "setSpeed",
        value: function setSpeed(speed) {
            var oldSpeed = this.options.speed;
            var oldSteps = this.getSteps();
            this.options.speed = speed;
            this._trackController.setSpeed(speed);
            GL.Hub.fire(_Event2.default.SpeedChanged, { target: this, speed: speed, oldSpeed: oldSpeed });
            GL.Hub.fire(_Event2.default.StepsChanged, { target: this, steps: this.getSteps(), oldSteps: oldSteps });
            return this;
        }
    }, {
        key: "getSteps",
        value: function getSteps() {
            return this._trackController.getSteps();
        }
    }, {
        key: "getCursor",
        value: function getCursor() {
            return this._trackController.getCursor();
        }
    }, {
        key: "setCursor",
        value: function setCursor(cursor) {
            cursor = +cursor;
            clearInterval(this._intervalID);
            this._intervalID = null;
            this._trackController.setCursor(cursor);
            if (!this.isPlaying()) this.start();
            return this;
        }
    }, {
        key: "getPlayState",
        value: function getPlayState() {
            return this._playState;
        }
    }, {
        key: "clearData",
        value: function clearData() {
            this._trackController.clearTracks();
            return this;
        }
    }, {
        key: "setData",
        value: function setData(tracks) {
            this.clearData();
            this.addData(tracks);
            this._setPlayState(_TrackStates2.default.ready);

            return this;
        }
    }, {
        key: "addData",
        value: function addData(tracks) {
            if (!tracks) {
                return this;
            }

            tracks = Array.isArray(tracks) ? tracks : [tracks];

            var oldTracks = void 0;
            for (var i = 0, len = tracks.length; i < len; i++) {
                oldTracks = this._trackController.getTracks();
                var item = tracks[i];
                if (item.id in oldTracks) {
                    var track = oldTracks[item.id];
                    track.addData(item.lngLats);
                } else {
                    this._trackController.addTrack(new _Track2.default(item, this.options));
                }
            }
            return this;
        }
    }, {
        key: "destroy",
        value: function destroy() {
            this.stop();
            this.clearData();
            if (this.playControl) {
                this._map.removeControl(this.playControl);
            }

            return this;
        }
    }, {
        key: "_callbacks",
        value: function _callbacks() {
            var cursor = this.getCursor();
            var arry = this._callbacksArry;
            for (var i = 0, len = arry.length; i < len; i++) {
                arry[i](cursor, this.getTracks());
            }
        }
    }, {
        key: "_tick",
        value: function _tick(self) {
            if (self._trackController.playIsFinish()) {
                clearInterval(self._intervalID);
                self._intervalID = null;
                self._setPlayState(_TrackStates2.default.complete);
                return;
            } else {
                self._trackController.tock();
            }
            self._callbacks();
        }
    }, {
        key: "_setPlayState",
        value: function _setPlayState(state) {
            this._playState = state;
            GL.Hub.fire(_Event2.default.StateChanged, { target: this, state: state });
        }
    }]);

    return Playback;
}(GL.Module);

Playback.id = 'playback';

GL.Playback = Playback;
GL.E.Playback = _Event2.default;
GL.Playback.Track = _Track2.default;
GL.Playback.TrackController = _TrackController2.default;
GL.Playback.TrackStates = _TrackStates2.default;
GL.Playback.PlayControl = _PlayControl2.default;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Created by Svend on 2017/3/28.
 */

var defOpt = {
    position: 'bottomright'
};

var PlayControl = function (_GL$Control) {
    _inherits(PlayControl, _GL$Control);

    function PlayControl(playback) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, PlayControl);

        options = GL.H.extend({}, defOpt, options);

        var _this = _possibleConstructorReturn(this, (PlayControl.__proto__ || Object.getPrototypeOf(PlayControl)).call(this, options, null));

        _this.playback = playback;
        return _this;
    }

    _createClass(PlayControl, [{
        key: 'onAdd',
        value: function onAdd(map) {
            this._map = map;

            var L = GL.getNamespace().L;
            this._container = L.DomUtil.create('div', 'leaflet-control-layers leaflet-control-layers-expanded');

            var self = this;
            var playback = this.playback;

            var playControl = L.DomUtil.create('div', 'playControl', this._container);

            this._playBtn = L.DomUtil.create('button', '', playControl);
            this._playBtn.innerHTML = '播放';

            this._stopBtn = L.DomUtil.create('button', '', playControl);
            this._stopBtn.innerHTML = '停止';

            this._slider = L.DomUtil.create('input', 'slider', this._container);
            this._slider.type = 'range';
            this._slider.min = 0;
            this._slider.max = playback.getSteps();
            this._slider.value = playback.getCursor();

            var stopPro = L.DomEvent.stopPropagation;

            L.DomEvent.on(this._container, 'click', stopPro).on(this._container, 'mousedown', stopPro).on(this._container, 'dblclick', stopPro).on(this._container, 'click', L.DomEvent.preventDefault).on(this._playBtn, 'click', play, this).on(this._stopBtn, 'click', stop, this).on(this._slider, 'click', L.DomEvent.preventDefault).on(this._slider, 'change', onSliderChange, this).on(this._slider, 'mousedown', onMouseDown, this).on(this._slider, 'mouseup', onMouseUp, this);

            function onMouseDown(e) {
                L.DomEvent.on(this._slider, 'mousemove', onSliderChange, this);
            }
            function onMouseUp(e) {
                L.DomEvent.off(this._slider, 'mousemove', onSliderChange, this);
            }

            function onSliderChange(e) {
                var val = Number(e.target.value);
                playback.setCursor(val);
            }

            playback.addCallback(function (ms) {
                self._slider.value = ms;
            });

            function play() {
                if (playback.isPlaying()) {
                    playback.pause();
                    self._playBtn.innerHTML = '播放';
                } else {
                    playback.start();
                    self._playBtn.innerHTML = '暂停';
                }
            }

            function stop() {
                playback.stop();
            }

            GL.Hub.on(GL.E.Playback.StateChanged, function (e) {
                if (e.target !== self.playback) return;
                if (e.state === GL.Playback.TrackStates.complete || e.state === GL.Playback.TrackStates.stop) self._playBtn.innerHTML = '播放';
            });

            GL.Hub.on(GL.E.Playback.StepsChanged, function (e) {
                if (e.target !== self.playback) return;
                self._slider.max = e.steps;
            });

            return this._container;
        }
    }]);

    return PlayControl;
}(GL.Control);

exports.default = PlayControl;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by Svend on 2017/3/28.
 */
var Event = function () {
    function Event() {
        _classCallCheck(this, Event);
    }

    _createClass(Event, null, [{
        key: 'StateChanged',
        get: function get() {
            return function () {
                return 'PLAYBACK_STATE_CHANGED';
            }();
        }
    }, {
        key: 'StepsChanged',
        get: function get() {
            return function () {
                return 'PLAYBACK_STEPS_CHANGED';
            }();
        }
    }, {
        key: 'SpeedChanged',
        get: function get() {
            return function () {
                return 'PLAYBACK_SPEED_CHANGED';
            }();
        }
    }]);

    return Event;
}();

exports.default = Event;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by svend on 17-3-23.
 */

/**
 * track:
 *      {
 *          lngLats:[],//require
 *          id:'',
 *          marker:null,
 *          startMarker:null,
 *          endMarker:null,
 *          trajectory:true,
 *          trajectoryStyle:null,
 *
 *      }
 */
var Track = function () {
    function Track(track, options) {
        _classCallCheck(this, Track);

        options = GL.H.extend({}, options || {}, track);
        delete options.id;
        delete options.lngLats;

        GL.H.setOptions(this, options);

        this._track = track;
        this.lngLats = track.lngLats;
        this.id = track.id || GL.H.uuid();
        this._uuid = GL.H.stamp(this);

        this.distance = GL.H.Geometry.distance(this.lngLats);

        this.setSpeed(this.options.speed || 1);

        this.clean();
    }

    _createClass(Track, [{
        key: 'playForward',
        value: function playForward() {
            var lngLats = [];

            if (this._tempLngLat) {
                this.playedLngLats.pop();
            }

            this.countNextLngLats(lngLats, this._stepLength);

            for (var i = 0, len = lngLats.length; i < len; i++) {
                this.playedLngLats.push(lngLats[i]);
                this.trackLngLats.push(lngLats[i]);
            }

            if (this._tempLngLat) {
                this.playedLngLats.push(this._tempLngLat);
                this.trackLngLats.push(this._tempLngLat);
            }

            var moveLngLat = this.trackLngLats[this.trackLngLats.length - 1];
            this.setMarker(moveLngLat);
            this.setTrajectory(this.trackLngLats);
        }
    }, {
        key: 'countNextLngLats',
        value: function countNextLngLats(lngLats, distance) {
            var currentLngLat = void 0,
                nextLngLat = void 0,
                countStepLength = void 0;

            if (this.playIsFinished()) return;

            currentLngLat = this._tempLngLat || this.lngLats[this._playedIndex];

            nextLngLat = this.lngLats[this._playedIndex + 1];

            countStepLength = this.countLatLngDistance(currentLngLat, nextLngLat, distance);

            if (countStepLength < 0) return;

            this._playedIndex++;
            lngLats.push(nextLngLat);

            this.countNextLngLats(lngLats, countStepLength);
        }
    }, {
        key: 'playIsFinished',
        value: function playIsFinished() {
            return this._playedIndex >= this.lngLats.length - 1;
        }
    }, {
        key: 'countLatLngDistance',
        value: function countLatLngDistance(latLng, latLng2, distance) {

            var dis = latLng.distanceTo(latLng2);

            this._tempLngLat = null;

            if (dis > distance) {
                var percent = distance / dis;
                var lat1 = latLng2.lat * percent;
                var lng1 = latLng2.lng * percent;
                var lat2 = latLng.lat * (1 - percent);
                var lng2 = latLng.lng * (1 - percent);
                this._tempLngLat = new GL.LngLat(lng1 + lng2, lat1 + lat2);
            }

            return distance - dis;
        }
    }, {
        key: 'setSpeed',
        value: function setSpeed(speed) {
            this._stepLength = 45 * speed;
            this._steps = Math.ceil(this.distance / this._stepLength);
        }
    }, {
        key: 'getCursor',
        value: function getCursor() {
            var playedDis = GL.H.Geometry.distance(this.trackLngLats);
            return Math.ceil(playedDis / this.distance * this._steps);
        }
    }, {
        key: 'setCursor',
        value: function setCursor(cursor) {
            var dis = cursor / this._steps * this.distance;
            if (dis >= this.distance) {
                this.playedLngLats = this.lngLats.slice(0);
                this.trackLngLats = [].concat(this.playedLngLats);
                this._playedIndex = this.lngLats.length - 1;
            } else {
                //找到当前设置的进度属于哪一个主节点后面
                var preDis = void 0;
                var lengths = GL.H.Geometry.accumulatedDistances(this.lngLats);
                for (var i = 0, len = lengths.length; i < len - 1; i++) {
                    if (dis >= lengths[i] && dis < lengths[i + 1]) {
                        preDis = lengths[i];
                        this.playedLngLats = this.lngLats.slice(0, i + 1);
                        this._playedIndex = i;
                    }
                }

                //如果当前进度在主节点后面，根据距离算出还需要走的每一步的坐标
                var tempLatLngs = [],
                    lackDis = dis - preDis;
                if (lackDis > 0 && this._playedIndex < this.lngLats.length - 1) {
                    var countStepLength = 0;
                    this._tempLngLat = this.lngLats[this._playedIndex];
                    var nextLatLng = this.lngLats[this._playedIndex + 1];
                    while (countStepLength < lackDis) {
                        this.countLatLngDistance(this._tempLngLat, nextLatLng, this._stepLength);
                        tempLatLngs.push(this._tempLngLat);
                        countStepLength += this._stepLength;
                    }
                }
                this.trackLngLats = [].concat(this.playedLngLats, tempLatLngs);
            }

            this.setMarker(this.trackLngLats[this.trackLngLats.length - 1]);
            this.setTrajectory(this.trackLngLats);
        }
    }, {
        key: 'getSteps',
        value: function getSteps() {
            return this._steps;
        }
    }, {
        key: 'clean',
        value: function clean() {
            this.playedLngLats = [];
            this.trackLngLats = [];
            this._playedIndex = 0;
            this._tempLngLat = null;

            this.setMarker(this.lngLats[0]);

            this._track.trajectory = typeof this._track.trajectory === 'boolean' ? this._track.trajectory : this.options.trajectory;
            if (this._track.trajectory) this.setTrajectory([this.lngLats[0], this.lngLats[0]]);

            if (this._track.startMarker || this.options.startMarker) this.setStartMarker(this.lngLats[0]);

            if (this._endMarker && this._endMarker._layer && this._endMarker._layer.hasOverlay(this)) {
                this._endMarker._layer.removeOverlay(this);
                this._endMarker = null;
            }
        }

        //------------------ overlay ------------------------

    }, {
        key: 'setStartMarker',
        value: function setStartMarker(latLng) {
            if (!latLng) return;
            if (this._startMarker) {
                this._startMarker.setLngLat(latLng);
                return this._startMarker;
            }

            var icon = this._track.startMarker || this.options.startMarker;
            this._startMarker = new GL.Point(latLng, icon);
            return this._startMarker;
        }
    }, {
        key: 'getStartMarker',
        value: function getStartMarker() {
            return this._startMarker;
        }
    }, {
        key: 'setEndMarker',
        value: function setEndMarker(latLng) {
            if (!latLng) return;
            if (this._endMarker) {
                this._endMarker.setLngLat(latLng);
                return this._endMarker;
            }

            var icon = this._track.endMarker || this.options.endMarker;
            this._endMarker = new GL.Point(latLng, icon);

            if (this._marker._layer) this._marker._layer.addOverlay(this._endMarker);

            return this._endMarker;
        }
    }, {
        key: 'getEndMarker',
        value: function getEndMarker() {
            return this._endMarker;
        }
    }, {
        key: 'setMarker',
        value: function setMarker(lngLat) {
            if (!lngLat) return;
            if (this._marker) {
                this._marker.setLngLat(lngLat);
                return this._marker;
            }
            var icon = this._track.marker || this.options.marker;
            this._marker = new GL.Point(lngLat, icon);
            if (this.options.mouseOverCallback) {
                this._marker.on('mouseover', this.options.mouseOverCallback);
            }
            if (this.options.clickCallback) {
                this._marker.on('click', this.options.clickCallback);
            }
            return this._marker;
        }
    }, {
        key: 'getMarker',
        value: function getMarker() {
            return this._marker;
        }
    }, {
        key: 'setTrajectory',
        value: function setTrajectory(lngLats) {
            if (!lngLats) return;
            if (this._trajectory) {
                this._trajectory.setLngLats(lngLats);
                return this._trajectory;
            }
            var lStyle = this._track.trajectoryStyle || this.options.trajectoryStyle;
            this._trajectory = new GL.Polyline(lngLats, lStyle);
            return this._trajectory;
        }
    }, {
        key: 'getTrajectory',
        value: function getTrajectory() {
            return this._trajectory;
        }
    }]);

    return Track;
}();

exports.default = Track;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by svend on 17-3-23.
 */

var TrackController = function () {
    function TrackController(map, tracks, options) {
        _classCallCheck(this, TrackController);

        this.options = options || {};

        this._map = map;

        this.tracksLayer = new GL.VectorLayer('tracks');
        map.addLayer(this.tracksLayer);

        this._tracks = {};

        this.setTracks(tracks);
    }

    _createClass(TrackController, [{
        key: 'clearTracks',
        value: function clearTracks() {
            for (var k in this._tracks) {
                var track = this._tracks[k];
                var marker = track.getMarker();
                var startMarker = track.getStartMarker();
                var endMarker = track.getEndMarker();
                var trajectory = track.getTrajectory();

                if (marker) this.tracksLayer.removeOverlay(marker);
                if (startMarker) this.tracksLayer.removeOverlay(startMarker);
                if (endMarker) this.tracksLayer.removeOverlay(endMarker);
                if (trajectory) this.tracksLayer.removeOverlay(trajectory);

                delete this._tracks[k];
            }
            this._tracks = {};
        }
    }, {
        key: 'setTracks',
        value: function setTracks(tracks) {
            // reset current tracks
            this.clearTracks();

            this.addTracks(tracks);
        }
    }, {
        key: 'addTracks',
        value: function addTracks(tracks) {
            if (!tracks) {
                return;
            }

            if (tracks instanceof Array) {
                for (var i = 0, len = tracks.length; i < len; i++) {
                    this.addTrack(tracks[i]);
                }
            } else {
                this.addTrack(tracks);
            }
        }
    }, {
        key: 'addTrack',
        value: function addTrack(track) {
            if (!track) return;

            var marker = track.getMarker();
            if (!marker) return;
            this.tracksLayer.addOverlay(marker);

            this._tracks[track.id] = track;

            var startMarker = track.getStartMarker();
            if (startMarker) this.tracksLayer.addOverlay(startMarker);

            var trajectory = track.getTrajectory();
            if (trajectory) this.tracksLayer.addOverlay(trajectory);
        }
    }, {
        key: 'playIsFinish',
        value: function playIsFinish() {
            for (var k in this._tracks) {
                var track = this._tracks[k];
                if (!track.playIsFinished()) return false;
            }
            return true;
        }
    }, {
        key: 'tock',
        value: function tock() {
            for (var k in this._tracks) {
                var track = this._tracks[k];
                if (!track.playIsFinished()) track.playForward();
            }
            return this;
        }
    }, {
        key: 'clean',
        value: function clean() {
            for (var k in this._tracks) {
                var track = this._tracks[k];
                track.clean();
            }
            return this;
        }
    }, {
        key: 'getTracks',
        value: function getTracks() {
            return this._tracks;
        }
    }, {
        key: 'setSpeed',
        value: function setSpeed(speed) {
            for (var k in this._tracks) {
                var track = this._tracks[k];
                track.setSpeed(speed);
            }
            return this;
        }
    }, {
        key: 'getSteps',
        value: function getSteps() {
            var steps = 0;
            for (var k in this._tracks) {
                var track = this._tracks[k];
                if (track.getSteps() > steps) steps = track.getSteps();
            }
            return steps;
        }
    }, {
        key: 'getCursor',
        value: function getCursor() {
            var steps = 0,
                t = void 0;

            for (var k in this._tracks) {
                var track = this._tracks[k];
                if (track.getSteps() <= steps) continue;
                steps = track.getSteps();
                t = track;
            }
            return t ? t.getCursor() : 0;
        }
    }, {
        key: 'setCursor',
        value: function setCursor(cursor) {
            for (var k in this._tracks) {
                var track = this._tracks[k];
                track.setCursor(cursor);
            }
            return this;
        }
    }]);

    return TrackController;
}();

exports.default = TrackController;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by Svend on 2017/3/28.
 */
var TrackStates = function () {
    function TrackStates() {
        _classCallCheck(this, TrackStates);
    }

    _createClass(TrackStates, null, [{
        key: 'ready',
        get: function get() {
            return function () {
                return 'ready';
            }();
        }
    }, {
        key: 'playing',
        get: function get() {
            return function () {
                return 'playing';
            }();
        }
    }, {
        key: 'pause',
        get: function get() {
            return function () {
                return 'pause';
            }();
        }
    }, {
        key: 'stop',
        get: function get() {
            return function () {
                return 'stop';
            }();
        }
    }, {
        key: 'complete',
        get: function get() {
            return function () {
                return 'complete';
            }();
        }
    }]);

    return TrackStates;
}();

exports.default = TrackStates;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(27);

__webpack_require__(18);

__webpack_require__(26);

/***/ }),
/* 34 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 35 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 36 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(4);
module.exports = __webpack_require__(5);


/***/ })
/******/ ]);
//# sourceMappingURL=plugin.js.map