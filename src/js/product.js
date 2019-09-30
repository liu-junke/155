(function() {
    var small = $('.small'),
        movebox = $('.movebox'),
        big = $('.big'),
        smallbox = $('.smallbox'),
        smallerpic = $('.smallerpic'),
        bigpic = $('.bigpic');
    bigpic.src = '../img/1.jpg';
    smallerpic.on('mouseover', function(ev) {
        smallpic.src = ev.target.src;
        bigpic1.src = smallpic.src;
    });
    small.on('mouseover', function() {
        movebox.addClass('show');
        big.addClass('show');

        movebox.css({
            'width': 338 + 'px',
            'height': 338 + 'px'
        });

        small.on('mousemove', function(ev) {
            var top = ev.pageY - small.offset().top - (movebox.offset().height / 2);
            var left = ev.pageX - small.offset().left - (movebox.offset().width / 2);

            var ratio = 1.5;
            if (left <= 0) {
                left = 0;
            } else if (left > small.offset().width - movebox.offset().width) {
                left = small.offset().width - movebox.offset().width - 2;
            }

            if (top <= 0) {
                top = 0;
            } else if (top > small.offset().height - movebox.offset().height) {
                top = small.offset().height - movebox.offset().height - 2;
            }
            movebox.css({
                left: left + 'px',
                top: top + 'px'
            });
            bigpic.css({
                left: -left * ratio + 'px',
                top: -top * ratio + 'px',
            });
        });
    });

    small.on('mouseout', function() {
        movebox.removeClass('show');
        big.removeClass('show');
    });

});