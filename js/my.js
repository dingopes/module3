   $(document).ready(function () {
        function CloseNav() {
            $(".navbar-collapse").stop().animate({ 'height': 0 }, 300, function () {
                $('.navbar-collapse').removeClass('in').addClass("collapse");
            });
            $(".navbar-toggle").stop().addClass('collapsed');
        }

        $('html').click(function (event) {
            var clickover = $(event.target);
            var _opened = $(".navbar-collapse").hasClass("navbar-collapse in");
            if (_opened === true && !clickover.hasClass("navbar-toggle")) {
                CloseNav();
            }

        });
    });