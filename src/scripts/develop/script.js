var w = $(window).width();
function burger() {
    var menu = $('.active-list');
    $('.burger').on('click', function (e) {
        if (menu.is(':hidden')) {
            e.preventDefault();
            $(menu).toggleClass('active');

            if ($('.burger').hasClass('active')) {
                menu.slideUp('fast');
                $(this).removeClass('active');
                $('.user-button').removeClass('active');
            } else {
                menu.slideDown('fast');
                $(this).addClass('active');
                $('.user-button').addClass('active');
            }
        } else {
            $(menu).toggleClass('active');
            if ($('.burger').hasClass('active')) {
                menu.slideUp('fast');
                $(this).removeClass('active');
                $('.user-button').removeClass('active');
            } else {
                menu.slideDown('fast');
                $(this).addClass('active');
                $('.user-button').addClass('active');
            }
        }
    });
    $('.user-button').on('click', function () {
        $('.burger').trigger('click');
    });

    $(window).resize(function () {
        var menu = $('.nav-list');
        var w = $(window).width();
        if (w > 766) {
            menu.removeAttr('style');
            $('.burger').removeClass('active');
        } else {
            $('.burger').removeClass('active');
        }
    });
};

function activeForm() {
    var item = $('.tabs__item');
    var form = $('.tabs-shape');
    var tabsLogin = $('.tabs__log-in');
    var tabAkkCreation = $('.tabs__account-creation');
    var login = $('.log-in');
    var akkCreation = $('.account-creation');
    $(item).on('click', function () {
        var itemIndex = $(this).index();
        var formIndex = $(form).eq(itemIndex);
        $(this).add(formIndex).addClass('active').siblings().removeClass('active');
    });
    $('.sign-up').on('click', function (evt) {
        $(login).add(tabsLogin).add('.burger').removeClass('active');
        $(akkCreation).add(tabAkkCreation).addClass('active');
    });
    $('.log').on('click', function (evt) {
        $(akkCreation).add(tabAkkCreation).add('.burger').removeClass('active');
        $(login).add(tabsLogin).addClass('active');
    });
}
function navListActiveForm() {
    var tabsLogin = $('.tabs__log-in');
    var tabAkkCreation = $('.tabs__account-creation');
    var login = $('.log-in');
    var akkCreation = $('.account-creation');
    $('.before-logged-in a').on('click', function() {
        $('.before-logged-in').css('display', 'none')
        .add('.burger').removeClass('active');
    })
    $('.sign-up').on('click', function (evt) {
        $(login).add(tabsLogin).removeClass('active');
        $(akkCreation).add(tabAkkCreation).addClass('active');
    });
    $('.log').on('click', function (evt) {
        $(akkCreation).add(tabAkkCreation).removeClass('active');
        $(login).add(tabsLogin).addClass('active');
    });
}

$(document).ready(function () {
    burger();
    activeForm();
    if (w <= 720) {
        navListActiveForm();
    }
    $('.footer_placeholder').height($('.footer').outerHeight());
});

$(window).resize(function () {
    var w = $(window).width();
    if (w > 720) {
        $('.before-logged-in').css('display', 'flex');
        $('.before-logged-in a').on('click', function() {
            $('.before-logged-in').css('display', 'flex');
        })
    } else {
        $('.before-logged-in').css('display', 'none');
        navListActiveForm();
    }
    $('.footer_placeholder').height($('.footer').outerHeight());
});

$(window).load(function () {

});
