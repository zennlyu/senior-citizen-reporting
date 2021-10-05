"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var size_sensor_1 = require("size-sensor");
var pick_1 = require("./helper/pick");
var is_function_1 = require("./helper/is-function");
var is_string_1 = require("./helper/is-string");
var is_equal_1 = require("./helper/is-equal");
/**
 * core component for echarts binding
 */
var EChartsReactCore = /** @class */ (function (_super) {
    tslib_1.__extends(EChartsReactCore, _super);
    function EChartsReactCore(props) {
        var _this = _super.call(this, props) || this;
        _this.echarts = props.echarts;
        _this.ele = null;
        return _this;
    }
    EChartsReactCore.prototype.componentDidMount = function () {
        this.renderNewEcharts();
    };
    // update
    EChartsReactCore.prototype.componentDidUpdate = function (prevProps) {
        /**
         * if shouldSetOption return false, then return, not update echarts options
         * default is true
         */
        var shouldSetOption = this.props.shouldSetOption;
        if (is_function_1.isFunction(shouldSetOption) && !shouldSetOption(prevProps, this.props)) {
            return;
        }
        // 以下属性修改的时候，需要 dispose 之后再新建
        // 1. 切换 theme 的时候
        // 2. 修改 opts 的时候
        // 3. 修改 onEvents 的时候，这样可以取消所有之前绑定的事件 issue #151
        if (!is_equal_1.isEqual(prevProps.theme, this.props.theme) ||
            !is_equal_1.isEqual(prevProps.opts, this.props.opts) ||
            !is_equal_1.isEqual(prevProps.onEvents, this.props.onEvents)) {
            this.dispose();
            this.renderNewEcharts(); // 重建
            return;
        }
        // when thoes props isEqual, do not update echarts
        var pickKeys = ['option', 'notMerge', 'lazyUpdate', 'showLoading', 'loadingOption'];
        if (is_equal_1.isEqual(pick_1.pick(this.props, pickKeys), pick_1.pick(prevProps, pickKeys))) {
            return;
        }
        var echartsInstance = this.updateEChartsOption();
        /**
         * when style or class name updated, change size.
         */
        if (!is_equal_1.isEqual(prevProps.style, this.props.style) || !is_equal_1.isEqual(prevProps.className, this.props.className)) {
            try {
                echartsInstance.resize();
            }
            catch (e) {
                console.warn(e);
            }
        }
    };
    EChartsReactCore.prototype.componentWillUnmount = function () {
        this.dispose();
    };
    /**
     * return the echart object
     * 1. if exist, return the existed instance
     * 2. or new one instance
     */
    EChartsReactCore.prototype.getEchartsInstance = function () {
        return this.echarts.getInstanceByDom(this.ele) || this.echarts.init(this.ele, this.props.theme, this.props.opts);
    };
    /**
     * dispose echarts and clear size-sensor
     */
    EChartsReactCore.prototype.dispose = function () {
        if (this.ele) {
            try {
                size_sensor_1.clear(this.ele);
            }
            catch (e) {
                console.warn(e);
            }
            // dispose echarts instance
            this.echarts.dispose(this.ele);
        }
    };
    /**
     * render a new echarts instance
     */
    EChartsReactCore.prototype.renderNewEcharts = function () {
        var _a = this.props, onEvents = _a.onEvents, onChartReady = _a.onChartReady;
        // 1. new echarts instance
        var echartsInstance = this.updateEChartsOption();
        // 2. bind events
        this.bindEvents(echartsInstance, onEvents || {});
        // 3. on chart ready
        if (is_function_1.isFunction(onChartReady))
            onChartReady(echartsInstance);
        // 4. on resize
        if (this.ele) {
            size_sensor_1.bind(this.ele, function () {
                try {
                    echartsInstance.resize();
                }
                catch (e) {
                    console.warn(e);
                }
            });
        }
    };
    // bind the events
    EChartsReactCore.prototype.bindEvents = function (instance, events) {
        function _bindEvent(eventName, func) {
            // ignore the event config which not satisfy
            if (is_string_1.isString(eventName) && is_function_1.isFunction(func)) {
                // binding event
                instance.on(eventName, function (param) {
                    func(param, instance);
                });
            }
        }
        // loop and bind
        for (var eventName in events) {
            if (Object.prototype.hasOwnProperty.call(events, eventName)) {
                _bindEvent(eventName, events[eventName]);
            }
        }
    };
    /**
     * render the echarts
     */
    EChartsReactCore.prototype.updateEChartsOption = function () {
        var _a = this.props, option = _a.option, _b = _a.notMerge, notMerge = _b === void 0 ? false : _b, _c = _a.lazyUpdate, lazyUpdate = _c === void 0 ? false : _c, showLoading = _a.showLoading, _d = _a.loadingOption, loadingOption = _d === void 0 ? null : _d;
        // 1. get or initial the echarts object
        var echartInstance = this.getEchartsInstance();
        // 2. set the echarts option
        echartInstance.setOption(option, notMerge, lazyUpdate);
        // 3. set loading mask
        if (showLoading)
            echartInstance.showLoading(loadingOption);
        else
            echartInstance.hideLoading();
        return echartInstance;
    };
    EChartsReactCore.prototype.render = function () {
        var _this = this;
        var _a = this.props, style = _a.style, _b = _a.className, className = _b === void 0 ? '' : _b;
        // default height = 300
        var newStyle = tslib_1.__assign({ height: 300 }, style);
        return (react_1.default.createElement("div", { ref: function (e) {
                _this.ele = e;
            }, style: newStyle, className: "echarts-for-react " + className }));
    };
    return EChartsReactCore;
}(react_1.PureComponent));
exports.default = EChartsReactCore;
//# sourceMappingURL=core.js.map