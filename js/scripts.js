/*
    Visual by TEMPLATE STOCK
    templatestock.co @templatestock
    Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/

var imagesGIF = [];
(function ($) {
    "use strict";

    /* -------------------
    Revolution Sliders
    ---------------------*/
    $('.tp-banner').show().revolution({
        delay: 16000,
        startwidth: 1170,
        startheight: 700,
        hideThumbs: 200,
        dottedOverlay: "none",
        hideTimerBar: "on",
        thumbWidth: 100,
        thumbHeight: 50,
        thumbAmount: 5,
        navigationType: "none",
        navigationArrows: "solo",
        navigationStyle: "preview4",
        touchenabled: "on",
        swipe_velocity: 0.7,
        swipe_min_touches: 1,
        swipe_max_touches: 1,
        drag_block_vertical: false,
        keyboardNavigation: "off",
        navigationHAlign: "center",
        navigationVAlign: "bottom",
        navigationVOffset: 20,
        soloArrowLeftHalign: "left",
        soloArrowLeftValign: "center",
        soloArrowLeftHOffset: 20,
        soloArrowRightHalign: "right",
        soloArrowRightValign: "center",
        soloArrowRightHOffset: 20,
        fullWidth: "off",
        fullScreen: "on",
        spinner: "spinner1",
        stopLoop: "off",
        stopAfterLoops: -1,
        stopAtSlide: -1,
        shuffle: "off",
        autoHeight: "off",
        forceFullWidth: "off",
        hideThumbsOnMobile: "off",
        hideNavDelayOnMobile: 1500,
        hideBulletsOnMobile: "off",
        hideArrowsOnMobile: "off"
    });
    $('.tp-banner-video').show().revolution({
        dottedOverlay: "none",
        delay: 9000,
        startheight: 700,
        hideTimerBar: "on",
        navigationType: "none",
        navigationStyle: "preview4",
        touchenabled: "on",
        swipe_velocity: 0.7,
        swipe_min_touches: 1,
        swipe_max_touches: 1,
        drag_block_vertical: false,
        keyboardNavigation: "on",
        fullScreen: "on",
        spinner: "spinner1",
        stopLoop: "off",
        stopAfterLoops: -1,
        stopAtSlide: -1,
        forceFullWidth: "off",
        fullScreenAlignForce: "off",
        minFullScreenHeight: "400",
        hideThumbsOnMobile: "off",
        hideNavDelayOnMobile: 1500,
        hideBulletsOnMobile: "off",
        hideArrowsOnMobile: "off"
    });

    /* -------------------
    Owl Slider callings
    ---------------------*/

    $("#client-slider").owlCarousel({
        autoPlay: true,
        minSlides: 1,
        maxSlides: 6,
        moveSlides: 1,
        responsive: true,
        controls: false,
        pagination: false,
        navigation: false
    });
    $("#quote-slider").owlCarousel({
        autoPlay: false,
        singleItem: true,
        pagination: false,
        navigation: false
    });
    $("#owl-testimonials").owlCarousel({
        autoPlay: true,
        singleItem: true,
        pagination: true,
        navigation: false
    });
    // AJAX project slider
    $(document).ajaxComplete(function () {
        $("#project-slider").owlCarousel({
            autoPlay: true,
            singleItem: true,
            pagination: true,
            navigation: false,
        });
    });
    $("#owl-slider").owlCarousel({
        autoPlay: true,
        singleItem: true,
        pagination: true,
        navigation: false,
        navigationText: ['<i class="icon ion-chevron-left"></i>', '<i class="icon ion-chevron-right"></i>'],
    });
    /* -------------------
    Parallax Sections
    ---------------------*/
    if (!Modernizr.touch) {
        $('#home-parallax-fullscreen').parallax("50%", 0.5);
        $('#home-parallax-fullwidth').parallax("50%", 0.5);
        $('.parallax-section-1').parallax("50%", 0.5);
        $('.parallax-section-2').parallax("50%", 0.5);
        $('.parallax-section-3').parallax("50%", 0.5);
        $('.parallax-section-4').parallax("50%", 0.5);
        $('.parallax-section-5').parallax("50%", 0.5);
        $('.parallax-section-6').parallax("50%", 0.5);
        $('.parallax-section-7').parallax("50%", 0.5);
        $('.parallax-section-8').parallax("50%", 0.5);
        $('.parallax-section-9').parallax("50%", 0.5);
        $('#home-landing').parallax("50%", 0.5);

        /* -------------------
        Animation.css calling
        ---------------------*/
        new WOW().init();
    }
    /* -------------------
    Animated progress bars
    ---------------------*/
    $('.progress-bars').waypoint(function () {
        $('.progress').each(function () {
            $(this).find('.progress-bar').animate({
                width: $(this).attr('data-percent')
            }, 800);
        });
    }, {
        offset: '100%',
        triggerOnce: true
    });
    /* -------------------
    Fun facts counter
    ---------------------*/
    $('.counter').counterUp({
        delay: 8,
        time: 1400
    });
    /* -------------------
    Video section lightbox
    ---------------------*/
    $('#video-lightbox').cubeportfolio({
        gridAdjustment: 'alignCenter',
        lightboxDelegate: '.cbp-lightbox',
        lightboxGallery: true,
        lightboxShowCounter: false
    });
    /* -------------------
    Scroll functions
    ---------------------*/
    $(window).scroll(function () {
        parallax();
        /* -------------------
        Header Animation
        ---------------------*/
        var homeToggles = document.getElementById("homeToggle");
        if ($(this).scrollTop() > 2) {
            $('nav').addClass("navbar-small");
            $('nav').removeClass("inv");
            for (let i = 1; i < homeToggles.childNodes.length; i += 2) {
                document.getElementById("homeToggle").childNodes[i].style.background = "#91DA32"
            }
        }
        else {
            $('nav').removeClass("navbar-small");
            $('nav').addClass("inv");
            for (let i = 1; i < homeToggles.childNodes.length; i += 2) {
                document.getElementById("homeToggle").childNodes[i].style.background = "white"
            }
        }
        /* -------------------
        Back to top button popup
        ---------------------*/
        if ($(window).scrollTop() > 400) {
            $("#back-to-top").stop().animate({ bottom: '16px' }, 300, 'easeInOutCubic')
        }
        else {
            $("#back-to-top").stop().animate({ bottom: '-50px' }, 300, 'easeInOutCubic')
        }
    });
    /* -------------------
    Preloader
    ---------------------*/
    $(window).load(async function () {
        // Preloader 
        $('#loader').fadeOut('slow');
        $('.spinner').fadeOut('slow');
    }); // End Window Load
    /* -------------------
    Page Hero Parallax
    ---------------------*/
    function parallax() {
        var scrolled = $(window).scrollTop();
        $('.hero').css('top', -(scrolled * 0.0515) + 'rem');
        $('.home-container').css('bottom', -(scrolled * 0.0515) + 'rem');
        $('.op-1,.op-2,.op-3').css('opacity', 1 - (scrolled * .00110));
    };
    /* -------------------
    Smooth scrolling to anchor
    ---------------------*/
    $('.to-section a,.btn-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 54
        }, 1000, 'easeInOutExpo');
        event.preventDefault();
    });
    /* -------------------
    Back to top button function
    ---------------------*/
    $('#back-to-top,.to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1000, 'easeInOutExpo');
        return false;
    });
    /* -------------------
    Active menu item on page scroll
    ---------------------*/
    var sections = $('section')
        , nav = $('nav')
        , nav_height = nav.outerHeight();
    $(window).on('scroll', function () {
        var cur_pos = $(this).scrollTop();
        sections.each(function () {
            var top = $(this).offset().top - nav_height,
                bottom = top + $(this).outerHeight();
            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('a').removeClass('current');
                sections.removeClass('current');
                $(this).addClass('current');
                nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('current');
            }
        });
    });
    /* -------------------
    Auto-close responsive navbar
    ---------------------*/
    function close_toggle() {
        if ($(window).width() <= 992) {
            $('.navbar-collapse a').on('click', function () {
                $('.navbar-collapse').collapse('hide')
            });
        }
        else {
            $('.navbar .navbar-default a').off('click')
        }
    }
    close_toggle();
    $(window).resize(close_toggle);
    $(".navbar-collapse").css({ maxHeight: $(window).height() - $(".navbar-header").height() + "px" });
    /* -------------------
    Contact form
    ---------------------*/
    $('#contactform').submit(function () {
        var action = $(this).attr('action');
        $("#message").slideUp(250, function () {
            $('#message').hide();
            $('#submit')
                .after('<img src="../img/assets/contact-form-loader.gif" class="loader" />')
                .attr('disabled', 'disabled');
            $.post(action, {
                name: $('#name').val(),
                email: $('#email').val(),
                subject: $('#subject').val(),
                comments: $('#comments').val(),
            },
                function (data) {
                    document.getElementById('message').innerHTML = data;
                    $('#message').slideDown(250);
                    $('#contactform img.loader').fadeOut('slow', function () { $(this).remove() });
                    $('#submit').removeAttr('disabled');
                    if (data.match('success') != null) $('#contactform').slideUp(850, 'easeInOutExpo');
                }
            );
        });
        return false;
    });
    /* -------------------
    Subscribe form
    ---------------------*/
    $(document).on('ready', function () {
        $('#subscribe-form').on('submit', function (e) {
            e.preventDefault();
            var $el = $(this),
                $alert = $el.find('.form-validation'),
                $submit = $el.find('button'),
                action = $el.attr('action');
            $submit.button('loading');
            $alert.removeClass('alert-danger alert-success');
            $alert.html('');
            $.ajax({
                type: 'POST',
                url: action,
                data: $el.serialize() + '&ajax=1',
                dataType: 'JSON',
                success: function (response) {
                    if (response.status == 'error') {
                        $alert.html(response.message);
                        $alert.addClass('alert-danger').fadeIn(500);
                    }
                    else {
                        $el.trigger('reset');
                        $alert.html(response.message);
                        $alert.addClass('alert-success').fadeIn(500);
                    }
                    $submit.button('reset');
                },
            })
        });
    });
    /* -------------------
    Bootstrap Tooltip, Alert, Tabs
    ---------------------*/
    $(function () {
        $("[data-toggle='tooltip']").tooltip();
        $(".alert").alert()
    });
    $(function () {
        var active = true;
        $('#collapse-init').click(function () {
            if (active) {
                active = false;
                $('.panel-collapse').collapse('show');
                $('.panel-title').attr('data-toggle', '');
                $(this).text('Close All');
            } else {
                active = true;
                $('.panel-collapse').collapse('hide');
                $('.panel-title').attr('data-toggle', 'collapse');
                $(this).text('Open All');
            }
        });
        $('#accordion').on('show.bs.collapse', function () {
            if (active) $('#accordion .in').collapse('hide');
        });
    });
    $('#myTab a').click(function (e) {
        e.preventDefault()
        $(this).tab('show')
    })

})(jQuery);


/* -------------------
Portfolio
 ---------------------*/
(function ($, window, document, undefined) {
    "use strict";

    var gridContainer = $('#grid-container-fullwidth'),
        filtersContainer = $('#filters-container-fullwidth'),
        wrap, filtersCallback;

    gridContainer.cubeportfolio({
        defaultFilter: '*',
        animationType: 'fadeOut',
        gapHorizontal: 0,
        gapVertical: 0,
        gridAdjustment: 'responsive',
        caption: 'zoom',
        displayType: 'lazyLoading',
        displayTypeSpeed: 100,
        // lightbox
        lightboxDelegate: '.cbp-lightbox',
        lightboxGallery: true,
        lightboxTitleSrc: 'data-title',
        lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',
        // singlePage popup
        singlePageDelegate: '.cbp-singlePage',
        singlePageDeeplinking: true,
        singlePageStickyNavigation: true,
        singlePageCounter: '<div class="cbp-popup-singlePage-counter">{{current}} of {{total}}</div>',
        singlePageCallback: function (url, element) {
            // to update singlePage content use the following method: this.updateSinglePage(yourContent)
            var t = this;
            $.ajax({
                url: url,
                type: 'GET',
                dataType: 'html',
                timeout: 5000
            })
                .done(function (result) {
                    t.updateSinglePage(result);
                })
                .fail(function () {
                    t.updateSinglePage("Error! Please refresh the page!");
                });
        },
        // single page inline
        singlePageInlineDelegate: '.cbp-singlePageInline',
        singlePageInlinePosition: 'above',
        singlePageInlineInFocus: true,
        singlePageInlineCallback: function (url, element) {
            // to update singlePage Inline content use the following method: this.updateSinglePageInline(yourContent)
        }
    });
    /* add listener for filters */
    if (filtersContainer.hasClass('cbp-l-filters-dropdown')) {
        wrap = filtersContainer.find('.cbp-l-filters-dropdownWrap');
        wrap.on({
            'mouseover.cbp': function () {
                wrap.addClass('cbp-l-filters-dropdownWrap-open');
            },
            'mouseleave.cbp': function () {
                wrap.removeClass('cbp-l-filters-dropdownWrap-open');
            }
        });
        filtersCallback = function (me) {
            wrap.find('.cbp-filter-item').removeClass('cbp-filter-item-active');
            wrap.find('.cbp-l-filters-dropdownHeader').text(me.text());
            me.addClass('cbp-filter-item-active');
            wrap.trigger('mouseleave.cbp');
        };
    } else {
        filtersCallback = function (me) {
            me.addClass('cbp-filter-item-active').siblings().removeClass('cbp-filter-item-active');
        };
    }
    filtersContainer.on('click.cbp', '.cbp-filter-item', function () {
        var me = $(this);
        if (me.hasClass('cbp-filter-item-active')) {
            return;
        }
        // get cubeportfolio data and check if is still animating (reposition) the items.
        if (!$.data(gridContainer[0], 'cubeportfolio').isAnimating) {
            filtersCallback.call(null, me);
        }
        // filter the items
        gridContainer.cubeportfolio('filter', me.data('filter'), function () { });
    });
    /* activate counter for filters */
    gridContainer.cubeportfolio('showCounter', filtersContainer.find('.cbp-filter-item'), function () {
        // read from url and change filter active
        var match = /#cbpf=(.*?)([#|?&]|$)/gi.exec(location.href),
            item;
        if (match !== null) {
            item = filtersContainer.find('.cbp-filter-item').filter('[data-filter="' + match[1] + '"]');
            if (item.length) {
                filtersCallback.call(null, item);
            }
        }
    });
    /* add listener for load more */
    $('.cbp-l-loadMore-button-link').on('click.cbp', function (e) {
        e.preventDefault();
        var clicks, me = $(this),
            oMsg;
        if (me.hasClass('cbp-l-loadMore-button-stop')) {
            return;
        }
        // get the number of times the loadMore link has been clicked
        clicks = $.data(this, 'numberOfClicks');
        clicks = (clicks) ? ++clicks : 1;
        $.data(this, 'numberOfClicks', clicks);
        // set loading status
        oMsg = me.text();
        me.text('LOADING...');
        // perform ajax request
        $.ajax({
            url: me.attr('href'),
            type: 'GET',
            dataType: 'HTML'
        }).done(function (result) {
            var items, itemsNext;
            // find current container
            items = $(result).filter(function () {
                return $(this).is('div' + '.cbp-loadMore-block' + clicks);
            });
            gridContainer.cubeportfolio('appendItems', items.html(),
                function () {
                    // put the original message back
                    me.text(oMsg);
                    // check if we have more works
                    itemsNext = $(result).filter(function () {
                        return $(this).is('div' + '.cbp-loadMore-block' + (clicks + 1));
                    });

                    if (itemsNext.length === 0) {
                        me.text('NO MORE WORKS');
                        me.addClass('cbp-l-loadMore-button-stop');
                    }
                });
        }).fail(function () {
            // error
        });
    });
})(jQuery, window, document);

const answersTrackerContainer = document.querySelector(".answers-tracker")
const options = document.querySelector(".options").children
const questionNumberSpan = document.querySelector(".question-num-value")
const question = document.querySelector(".question")
const totalQuestionsSpan = document.querySelector(".total-questions")
const correctAnswersSpan = document.querySelector(".correct-answers")
const totalQuestionsSpan2 = document.querySelector(".total-questions2")
const percentageSpan = document.querySelector(".percentage")

let currentIndex;
let index = 0;
let answeredQuestions = []; // array of anwered question indexes
let score = 0;

const opt1 = document.querySelector(".option1")
const opt2 = document.querySelector(".option2")
const opt3 = document.querySelector(".option3")
const opt4 = document.querySelector(".option4")

const questions = [
    {
        q: 'Nhà thờ Hồi giáo Hassan II là một nhà thờ Hồi giáo nằm ở quốc gia nào?',
        options: ['Việt Nam', 'Maroc', 'Nam Phi', 'Pakistan'],
        answer: 1
    },
    {
        q: 'Nhà thờ Hồi giáo Hassan II là nhà thờ Hồi giáo lớn nhất mấy trên thế giới?',
        options: ['Thứ ba', 'Thứ tư', 'Thứ hai', 'Thứ năm'],
        answer: 2
    },
    {
        q: 'Nhà thờ đã được xây dựng nhân dịp nào?',
        options: ['Kỷ niệm ngày Vua Hassan II lên ngôi', 'Kỷ niệm 10 năm ngày Vua Hassan II lấy vợ', 'Kỷ niệm 60 năm ngày sinh vua Hassan II', 'getElementByCssKỷ niệm ngày vua Hassan II qua đời'],
        answer: 2
    },
    {
        q: 'Khoảng chi phí để xây dựng nhà thờ là?',
        options: ['10 triệu USD', '100 triệu USD', '350 triệu USD', '800 triệu USD'],
        answer: 3
    },
    {
        q: 'Nhà thờ Hồi giáo Hassan II được thiết kế bởi người của quốc gia nào?',
        options: ['Người Pháp', 'Người Việt', 'Người Mỹ', 'Người Maroc'],
        answer: 0
    },
    {
        q: 'Thung lũng của các vị vua là gì?',
        options: ['Là nơi các Pharaoh của Ai Cập cổ đại sinh sống', 'Là nơi chôn cất các Pharaoh hàng trăm năm', 'Một thung lũng tuyệt đẹp nơi người Ai Cập cổ đại đi nghỉ mát', 'Một thung lũng nơi người Ai Cập chiến thắng trong trận chiến lịch sử chống lại người Hy Lạp'],
        answer: 1
    },
    {
        q: 'Điều gì đã xảy ra với phần lớn kho báu được chôn cùng các Pharaoh?',
        options: ['Các thầy tu Ai Cập đã tháo nó ra để bán và mua thức ăn cho người nghèo', 'Người La Mã đã lấy nó và trưng bày ở Rome', 'Nó đã được gỡ bỏ và đưa vào các viện bảo tàng trên khắp thế giới', 'Nó đã bị đánh cắp bởi những tên trộm hàng ngàn năm trước'],
        answer: 3
    },
    {
        q: 'Ngôi mộ của Pharaoh nào được tìm thấy ở Thung lũng các vị vua với phần lớn kho báu còn nguyên vẹn?',
        options: ['Tutankhamun', 'Thutmose IV', 'Hatshepsut', 'Amenhotep II'],
        answer: 0
    },
    {
        q: 'Có bao nhiêu ngôi mộ được tìm thấy trong Thung lũng các vị vua?',
        options: ['300', '12', '63', '7'],
        answer: 2
    },
    {
        q: 'Tại sao các nhà khảo cổ học cho rằng lăng mộ của Vua Tut không bị những kẻ trộm mộ đánh cắp?',
        options: ['Vì nó được chôn dưới những túp lều của công nhân', 'Bởi vì nó đã bị chôn vùi hàng trăm mét dưới mặt đất', 'Bởi vì không ai có thể ăn cắp từ một khu chôn cất', 'Vì những cạm bẫy phức tạp và những lối đi bí mật'],
        answer: 0
    },
    {
        q: 'Ai là Pharaoh đầu tiên bắt đầu truyền thống được chôn cất trong Thung lũng của các vị vua?',
        options: ['Hatshepsut', 'Tutankhamun', ' Amenhotep I', 'Tuthmosis I'],
        answer: 3
    },
    {
        q: 'Thung lũng các vị vua là nơi chôn cất chính của các Pharaoh Ai Cập trong khoảng thời gian bao lâu?',
        options: ['100 năm', '3000 năm', '500 năm', '2000 năm'],
        answer: 2
    },
    {
        q: 'Ai được biết đến với việc tìm thấy lăng mộ của Vua Tut?',
        options: ['Kathleen Ken-nơ-đi', 'Mary Leakey', 'Lara Croft', 'Howard Carter'],
        answer: 3
    },
    {
        q: 'Đặc điểm nào của các lăng mộ đã cho phép các nhà khảo cổ học tìm hiểu nhiều về cuộc đời của các Pharaoh?',
        options: ['Papyrus ghi lại rằng những kẻ trộm mộ để lại', 'Các tác phẩm nghệ thuật trên tường', 'Những đống bia đá chứa đầy chữ tượng hình', 'Không câu nào ở trên'],
        answer: 1
    },
    {
        q: 'Đại kim tự tháp được xây dựng cho pharaoh nào?',
        options: ['Djoser', 'Tutankhamen', 'Khufu', 'Cleopatra VII'],
        answer: 2
    },
    {
        q: 'Có bao nhiêu kim tự tháp lớn tại Giza Necropolis?',
        options: ['3', '1', '16', '36'],
        answer: 0
    },
    {
        q: 'Phải mất bao lâu để xây dựng Đại kim tự tháp?',
        options: ['36 năm', '63 năm', '2 năm', '20 năm'],
        answer: 3
    },
    {
        q: 'Ba kim tự tháp nhỏ bên cạnh Kim tự tháp lớn được xây dựng để làm gì?',
        options: ['Họ là khu nô lệ', 'Những con mèo cưng yêu thích của pharaoh', 'Con cái của pharaoh', 'Vợ của Khufu'],
        answer: 3
    },
    {
        q: 'Đại kim tự tháp Giza bao nhiêu tuổi?',
        options: ['Hơn 4000 tuổi', 'Hơn 2000 tuổi', 'Hơn 3600 tuổi', 'Hơn 63000 tuổi'],
        answer: 0
    },
    {
        q: 'Kim tự tháp Giza cao bao nhiêu khi nó được xây dựng ban đầu?',
        options: ['481 feet', '360 feet', '603 feet', '493 feet'],
        answer: 0
    }
]

totalQuestionsSpan.innerHTML = 10

function load() {
    questionNumberSpan.innerHTML = index + 1
    question.innerHTML = questions[currentIndex].q;
    opt1.innerHTML = questions[currentIndex].options[0]
    opt2.innerHTML = questions[currentIndex].options[1]
    opt3.innerHTML = questions[currentIndex].options[2]
    opt4.innerHTML = questions[currentIndex].options[3]
    index++
}

//Check if selected answer is correct or wrong
function check(element) {
    if (element.id == questions[currentIndex].answer) {
        element.className = "correct"
        updateAnswersTracker("correct")
        score++
    }
    else {
        element.className = "wrong"
        updateAnswersTracker("wrong")
    }
    disableClick();
}

//Make sure the user selected an item before clicking on the Next button
function validate() {
    if (!options[0].classList.contains("disabled")) {
        alert("Please select an option")
    }
    else {
        randomQuestion();
        enableClick();
    }
}

//Listener function for click event on Next button
function next() {
    validate();
}

//Function to disable click for the options
function disableClick() {
    for (let i = 0; i < options.length; i++) {
        options[i].classList.add("disabled")

        if (options[i].id == questions[currentIndex].answer) {
            options[i].classList.add('correct');
        }
    }
}

//Function to reanable click in the options
function enableClick() {
    for (let i = 0; i < options.length; i++) {
        options[i].classList.remove("disabled", "correct", "wrong")

    }
}

//Function to select a random question
function randomQuestion() {
    let randomNumber = Math.floor(Math.random() * questions.length);
    if (index == 10) {
        quizOver();
    }
    else {
        if (answeredQuestions.length > 0) {
            if (answeredQuestions.includes(randomNumber)) {
                randomQuestion();
            }
            else {
                currentIndex = randomNumber;
                load();
            }
        }
        if (answeredQuestions.length == 0) {
            currentIndex = randomNumber
            load()
        }
        //add the question to list of anwered questions
        answeredQuestions.push(randomNumber)
    }
}

//Restart the quiz
window.onload = function () {
    this.randomQuestion();
    this.answersTracker();
    this.gifloader();
    this.gifplayer();
}

//Set up answers tracker elements
async function answersTracker() {
    for (let i = 0; i < 10; i++) {
        const div = document.createElement("div")
        answersTrackerContainer.appendChild(div);
    }
}

//Update the answers tracker elements
async function updateAnswersTracker(newClass) {
    answersTrackerContainer.children[index - 1].classList.add(newClass)
}

//Displays the quiz-over page if quiz is over
function quizOver() {
    document.querySelector(".quiz-over").classList.add("show")
    correctAnswersSpan.innerHTML = score;
    totalQuestionsSpan2.innerHTML = 10
    percentageSpan.innerHTML = Math.round((score / questions.length) * 100) + "%"
}

function tryAgain() {
    window.location.reload();
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

var imagesloaded = [];
let imagesloadedcount = 0;
let imagesClass = 0;

async function gifplayer() {
    await sleep(1500);
    let firstload = true;
    while(imagesClass != imageTotal);
    while (true) {
        if (!firstload) { await sleep(2000); } else firstload = false;
        for (let i = 0; i < imageTotal; i++) {
            if (imagesloaded[i] != imagesGIF[i].complete) {
                imagesloadedcount += (imagesGIF[i].complete) ? 1 : -1;
                imagesloaded[i] = imagesGIF[i].complete;
            }
        }
        if (imageTotal != imagesloadedcount) continue;
        console.log("ඞ"); 
        for (let i = 0; i < imageTotal; i++) {
            document.getElementsByClassName("tp-bgimg").item(0).style.backgroundImage = "url(\"" + imagesGIF[i].src + "\")";
            await sleep(100);
        }
        firstload = true;
    }
}

let imageTotal = 117;
async function gifloader() {
    for (let i = 0; i < imageTotal; i++) {
        imagesGIF[i] = new Image();
        imagesloaded[i] = new Boolean();
        imagesGIF[i].src = "testgif\/vid_" + ((i < 10) ? "00" : ((i < 100) ? "0" : "")) + i + ".webp";
        imagesloaded[i] = false;
        imagesClass++;
    }
}