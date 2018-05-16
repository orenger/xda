(function ($) {
    function calcNotificatonWidth() {
        var $headerNotificationButton = $('.dash_header button.contact_flash');

        if (!$headerNotificationButton || !$headerNotificationButton.offset()) {
            return;
        }

        var width = $headerNotificationButton.offset().left + $headerNotificationButton.innerWidth() + 5;

        if (width < 300) {
            $('.flashes_div').width(null);

            return;
        }

        $('.flashes_div').width(width);
    }

    var $doc = $(document);
    var $win = $(window);

    $doc.ready(function () {
        var $menu = $('#dash_asaid');
        var $notifications = $('.flashes_div');
        var menuActive = false;
        var notificationsActive = false;
        $('.tab_select').on('change', function (e) {
            changeTab($(this).val());
        });

        $('.tab_link').click(function (e) {
            e.preventDefault();
            $('.tab_link').removeClass('font-color').removeClass('text-decoration-color').removeClass('display');

            $(this).addClass('font-color').addClass('text-decoration-color').addClass('display');
            var target = $(this).attr("href");

            changeTab(target);
        });

        function changeTab(target) {
            $('.tab_block').removeClass('display');
            $(target).addClass("display");
        }

        $('.slider.items').slick({
            rtl: true,
            dots: true,
            arrows: false,
            adaptiveHeight: true,
            autoplay: true,
            autoplaySpeed: 2000,
        });

        $('#pause_play').on('click', function () {
            var state = jQuery(this).attr('data-action');
            jQuery(this).attr('data-action', state === 'slickPause' ? 'slickPlay' : 'slickPause');
            $('.slider.items').slick(state);
        });

        $('.menu_toggle').click(function (e) {
            e.preventDefault();
            $menu.toggleClass("is_active");

            setTimeout(function () {
                menuActive = !menuActive;
            }, 0);
        });

        $('#dash_asaid .text-header').click(function (e) {
            $('#dash_asaid .header_nenu').slideToggle();

        });

        $win.on("click.Bst", function (event) {
            if (notificationsActive && $notifications.has(event.target).length === 0 && !$notifications.is(event.target)) {
                event.preventDefault();
                $notifications.removeClass("is_active");
                notificationsActive = false;

                return;
            }

            if (menuActive && $menu.has(event.target).length === 0 && !$menu.is(event.target)) {
                event.preventDefault();
                $menu.removeClass("is_active");
                menuActive = false;
            }
        });


    });

    $win.resize(function () {
        calcNotificatonWidth();
    });

})(jQuery);

