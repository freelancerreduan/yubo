
$(document).ready(function() {
    // è‡ªå®šä¹‰å¤šé€‰
    $('[role=checkbox]').each(function() {
        var input = $(this).find('input[type="checkbox"]');
        input.each(function() {
            if ($(this).attr('checked')) {
                $(this).parents('label').addClass('checked');
                $(this).prop("checked", true)
            }
        })
        input.change(function() {
            $(this).parents('label').toggleClass('checked').siblings('.con').stop().slideToggle();
        });
    })
    // è‡ªå®šä¹‰å•é€‰
    $('[role=radio]').each(function() {
        var input = $(this).find('input[type="radio"]'),
            label = $(this).find('label');
        input.each(function() {
            if ($(this).attr('checked')) {
                $(this).parents('label').addClass('checked');
                $(this).prop("checked", true)
            }
        })
        input.change(function() {
            label.removeClass('checked');
            $(this).parents('label').addClass('checked');
            input.removeAttr('checked');
            $(this).prop("checked", true)
        })
    })


    // å¼¹å‡ºæ¡†
    $('.myfancy').click(function() {
        var _id = $(this).attr('href');
        $(_id).fadeIn("normal");
    });
    $('.pop-bg,.close,.close2,.mob-pop1 .btn,.g-close,.g-close_b').click(function() {
        $(this).parents('.m-pop').fadeOut("normal");
    });
    $('.js-win1').click(function() {
        $('#win1').fadeIn("normal");
    });
    $('.js-win4').click(function() {
        $('#win4').fadeIn("normal");
    });
    $(".m-commodity .top .look").click(function() {
        $(this).slideUp('fast');
        $(this).parent('.txt').siblings('.whole').slideDown('fast');
    })

    $(".m-win .ification dd a").click(function() {
        $(this).parents('.m-win .ification').find("dd").stop().removeClass('on');
        $(this).parent('dd').stop().addClass('on');
    })


    $(".TAB_CLICK_b li").click(function() {
        var tab = $(this).parent(".TAB_CLICK_b");
        var con = tab.attr("id");
        var on = tab.find("li").index(this);
        $(this).addClass('on').siblings(tab.find("li")).removeClass('on');
        $(con).eq(on).addClass('show').siblings(con).removeClass('show');
    });
    //å¤´éƒ¨æ—¶é—´
    $('.header .time1 dt').click(function(e) {
        $(this).siblings('dd').slideToggle('fast');
        e.stopPropagation();
    });
    $(document).click(function() {
        $('.js-dd').hide();
    })
    // å¯¼èˆª

    var snav = $('.snav'),
        mask = $('.snav .mask'),
        snavCon = $('.snav .con');

    $('.menuBtn').on('click', function(e) {
        snavCon.addClass('ok');
        snav.addClass('ok');
        snavCon.addClass('ok');
        mask.show();
        e.stopPropagation();
    });

    mask.on('click', function(e) {
        snavCon.removeClass('ok');
        snav.removeClass('ok');
        mask.hide();
        e.stopPropagation();
    });

    //å…¨é€‰
    $('.js-total').click(function() {
        $('.js-eliminate').removeClass('checked')
        if ($(this).hasClass('checked')) {
            $('.lab-box label').removeClass('checked');
        } else {
            $('.lab-box label').addClass('checked');
        };
    })
    $('.js-eliminate').click(function() {
        $('.js-total').removeClass('checked')
        $('.lab-box label').removeClass('checked');
    })
    //åŽ†å²ç»Ÿè®¡
    $('.ul-icon-h1 li').click(function() {

        $('.lab-box label').removeClass('checked');
    });
    // é€‰é¡¹å¡ é¼ æ ‡ç‚¹å‡»
    $(".TAB_CLICK li").click(function() {
        var tab = $(this).parent(".TAB_CLICK");
        var con = tab.attr("id");
        var on = tab.find("li").index(this);
        $(this).addClass('on').siblings(tab.find("li")).removeClass('on');
        $(con).eq(on).show().siblings(con).hide();
    });
    $('.js-zd').click(function() {
        $(this).toggleClass('on')
        $(this).parents('li').find('.dn').stop().slideToggle();
    })


    //ä»£ç†ç”³è¯·
    $('.js-sqdl').click(function(event) {
        /* Act on the event */
        $('.m-popl1').show();
    });
    $('.js-close').click(function(event) {
        /* Act on the event */
        $('.m-popl1').hide();
    });
});