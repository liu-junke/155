(function($) {
    $.fn.extend({
        slider1: function(options) {
            var main = null, //主函数
                that = this, //保存执行上下文对象
                init = null, //初始化
                stop = null, //停止
                start = null, //开始
                next = null, //下一张
                prev = null, //上一张
                timer = null, //计时器
                elms = {}, //存储元素  命名空间
                defaults = {
                    speed: 600, //动画时间
                    delay: 3000 //展示时间
                }; //默认参数

            defaults = $.extend(defaults, options); //合并参数

            // 1. 初始化
            init = function() {
                // 将元素选择 放在这个函数中
                elms._index = 1; //初始化 播放张数
                elms.sliderDiv = that.children('div').children('div'); // 获取要进行动画的DIV元素
                elms.btn = that.children('span'); //获取左右按钮
                // elms.targets = that.children('p').children('a');
                elms.sliderDiv.append(elms.sliderDiv.children('img').first().clone()); //克隆第一张图片

                // 点击事件绑定
                elms.btn.on('click', function() {
                    if (elms.btn.index(this)) {
                        next();
                    } else {
                        prev();
                    }
                });
                // 悬停事件
                that.hover(function() {
                    stop();
                }, function() {
                    timer = setInterval(start.bind(null, 1), defaults.delay + defaults.speed);
                });
            }

            // elms.targets.on('click', function() { //圆点 的点击事件
            //     switch (elms.targets.index(this)) {
            //         case 0:
            //             elms._index = 1;
            //             elms.sliderDiv.css('left', '0px');
            //             break;
            //         case 1:
            //             elms._index = 2;
            //             elms.sliderDiv.css('left', '-1170px');
            //             break;
            //         case 2:
            //             elms._index = 3;
            //             elms.sliderDiv.css('left', '-2340px');
            //             break;
            //     }

            // });


            // 2. 开始动画
            start = function(fx) {
                var left = "-=1170px";

                if (!fx) {
                    left = "+=1170px";
                    if (elms._index <= 1) {
                        elms._index = 4;
                        var divLeft = that.offset().left,
                            imgLeft = elms.sliderDiv.children('img').last().offset().left;
                        elms.sliderDiv.css('left', '-' + (imgLeft - divLeft) + 'px');
                    }
                }


                elms.sliderDiv.animate({
                    left: left
                }, defaults.speed, function() {
                    if (fx) elms._index++;
                    else elms._index--;

                    if (elms._index === 4) {
                        elms._index = 1;
                        elms.sliderDiv.css('left', 0);
                    }
                });
            }

            // 3. 方向控制
            next = function() {
                stop();
                start(1);
            }

            prev = function() {
                stop();
                start(0);
            }

            // 4. 停止动画
            stop = function() {
                elms.sliderDiv.stop(true, true);
                clearInterval(timer);
            }



            main = function() {
                init();
                timer = setInterval(start.bind(null, 1), defaults.delay + defaults.speed);
            }

            main();

        }
    });
})(jQuery);