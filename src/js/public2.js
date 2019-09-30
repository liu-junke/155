(function() {
    var base = function(selector) {
        if (typeof selector === 'function') {
            ready(selector);
            return; //终止函数执行
        }
        // 执行构造函数
        return new Base(selector);
    }

    /**
     * 构造函数
     * @param {string} selector 
     * @param {element} context 
     */
    function Base(selector, context) {
        var elms;
        if (selector.nodeType === 1) { //判断传入的是否是元素
            // 如果传入的是元素  就将这个元素 放入新创建的对象中
            this[0] = selector;
            Object.defineProperty(this, 'length', { value: 1 });
        } else {
            elms = context ? context.querySelectorAll(selector) : document.querySelectorAll(selector); // 类数组对象
            Object.assign(this, elms); // 合并对象的属性
            Object.defineProperty(this, 'length', { value: elms.length }); //设置不可枚举的lnegth属性
        }
    }


    Base.prototype = {
        constructor: Base,
        each: function(callback) { // 遍历实例对象
            for (var i = 0; i < this.length; i++) {
                callback(this[i], i);
            }
            return this;
        },
        on: function(type, callback) { // 事件绑定
            if (typeof type === "string" && callback) {
                this.each(function(elm, i) {
                    elm.addEventListener(type, callback);
                });
            } else if (typeof type === "object" && this[0]) { //传入的是对象并且选择到了元素
                this.each(function(elm, i) { // 遍历选择到的元素
                    Base.each(type, function(key, value) { // 遍历传入的对象
                        elm.addEventListener(key, value); //遍历绑定多次事件
                    });
                });
            }
            return this;
        },
        css: function(style, value) {
            var str = ""; // 拼接多个样式属性字符串
            if (typeof style === 'string' && value) { // 单个样式设置
                this.each(function(elm, i) { // 遍历每个元素
                    elm.style = `${elm.style.cssText}${style}:${value};`; // 为每个元素添加样式
                });
            } else if (typeof style === "object" && this[0]) { //传入的是对象
                Base.each(style, function(key, value) { // 遍历对象 拼接字符串
                    str += `${key}:${value};`;
                });
                this.each(function(elm) { // 遍历每个元素
                    elm.style = elm.style.cssText + str; //为每个元素设置样式
                });
            }
            return this;
        },
        addClass: function(className) { //添加类名
            this.each(function(elm) {
                elm.classList.add(className);
            });
            // 链式调用
            return this; //返回当前对象
        },
        removeClass: function(className) { //删除类名
            this.each(function(elm) {
                elm.classList.remove(className);
            });
            return this; //返回当前对象
        },
        index: function(elm) {
            var arr = Array.from(this);
            return arr.findIndex(val => val == elm);
            // var index = arr.findIndex(function(val) {
            //     return val == elm;
            // });
            // return index;
        },
        tabs: function(options) {
            var defaluts = { //默认参数
                ev: 'click',
                actived: 'actived',
                show: 'show'
            };
            Object.assign(defaluts, options); //合并参数

            var btns = $('#' + this[0].id + '>ul>li', this[0]);
            var oDiv = $('#' + this[0].id + '>div[data-type="tabs"]', this[0]);

            btns.on(defaluts.ev, function() {
                var index = btns.index(this);
                btns.removeClass(defaluts.actived); //给所有按钮删除类名
                $(this).addClass(defaluts.actived); //给点击的按钮加类名

                // 切换DIV
                oDiv.removeClass(defaluts.show);
                $(oDiv[index]).addClass(defaluts.show);
            });
        },
        animate: function(style, callback) {
            // 想要改变元素的位置 先获得当前元素的位置(样式)
            // 需要目标的位置(样式)
            this.each(function(elm) {
                clearInterval(elm.timer);
                elm.timer = setInterval(function() {
                    var flag = true; // 开关 用于判断动画是否可以停止 为true时才可以停止动画
                    var current = 0;

                    for (var attr in style) {
                        if (attr === 'opacity') {
                            current = Math.ceil(getStyle(elm, attr) * 100);
                        } else {
                            current = parseInt(getStyle(elm, attr));
                        }

                        var speed = (style[attr] - current) / 10;
                        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

                        if (current != style[attr]) {
                            //没有到达目标
                            flag = false;
                        }

                        if (attr === 'opacity') {
                            elm.style[attr] = (current + speed) / 100;
                        } else {
                            elm.style[attr] = current + speed + 'px';
                        }

                        if (flag) {
                            clearInterval(elm.timer);
                            callback && callback();
                        }
                    }
                }, 30);
            });
        },
        html: function(html) { //用于设置html内容
            if (typeof html === 'function') {
                this.each(function(elm, i) {
                    elm.innerHTML = html(elm.innerHTML, i);
                });
            } else {
                this.each(function(elm, i) {
                    elm.innerHTML = html;
                });
            }
        },
        offset: function() {
            // 获取第一个被选元素的offset值
            return {
                left: this[0].offsetLeft,
                top: this[0].offsetTop,
                width: this[0].offsetWidth,
                height: this[0].offsetHeight
            }
        }
    }


    // 用于对象的遍历
    Base.each = function(obj, callback) {
        for (var key in obj) {
            callback(key, obj[key]);
        }
    }

    // 就绪事件
    function ready(callback) {
        document.addEventListener('DOMContentLoaded', function() {
            document.removeEventListener('DOMContentloaded', arguments.callee);
            callback();
        });
    }

    // 获得当前样式
    function getStyle(elm, style) {
        if (typeof getComputedStyle === 'function') {
            return getComputedStyle(elm)[style];
        } else {
            return elm.currentStyle[style];
        }
    }


    window.$ = base; //将base函数暴露给全局属性$
})();