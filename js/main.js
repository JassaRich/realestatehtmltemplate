/**
 * headerFixed
 * reaction
 * footer
 * changeValue
 * action_click
 * showform
 * video
 * tabs
 * filterTab
 * datePicker
 * showPass
 * deleteImg
 * parallaxImage
 * loademore
 * showHideDashboard
 * goTop
 * animationtext
 * preloader
 **/

(function ($) {
    ("use strict");

    /* headerFixed
  -------------------------------------------------------------------------------------*/
    var headerFixed = function () {
        if ($(".header-sticky").length) {
            const $header = $(".header-sticky");
            let didScroll = false;
            const navbarHeight = $header.outerHeight();
            $(window).on("scroll", function () {
                didScroll = true;
                const scrollTop = $(this).scrollTop();
                if (scrollTop < 350) {
                    $header.removeClass("is-sticky");
                } else {
                    $header.addClass("is-sticky");
                }
            });
        }
    };

    /* reaction
  -------------------------------------------------------------------------------------*/
    var reaction = function () {
        if ($(".action-button-list").length > 0) {
            $(".action-button").click(function () {
                $(this)
                    .closest(".action-button-list")
                    .find(".active")
                    .removeClass("active");
                $(this).toggleClass("active");
            });
        }
    };

    /* footer
  -------------------------------------------------------------------------------------*/
    var footer = function () {
        function checkScreenSize() {
            if (window.matchMedia("(max-width: 767px)").matches) {
                $(".tf-collapse-content").css("display", "none");
            } else {
                $(".footer-menu-list").siblings().removeClass("open");
                $(".tf-collapse-content").css("display", "unset");
            }
        }
        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);
        var args = { duration: 250 };
        $(".title-mobile").on("click", function () {
            $(this).parent(".footer-col-block").toggleClass("open");
            if (!$(this).parent(".footer-col-block").is(".open")) {
                $(this).next().slideUp(args);
            } else {
                $(this).next().slideDown(args);
            }
        });
    };

    /* changeValue
  -------------------------------------------------------------------------------------*/
    var changeValue = function () {
        if ($(".tf-dropdown-sort").length > 0) {
            $(".select-item").click(function (event) {
                $(this)
                    .closest(".tf-dropdown-sort")
                    .find(".text-sort-value")
                    .text($(this).find(".text-value-item").text());
                $(this)
                    .closest(".dropdown-menu")
                    .find(".select-item.active")
                    .removeClass("active");
                $(this).addClass("active");
            });
        }
    };

    /* action_click
  -------------------------------------------------------------------------------------*/
    var action_click = function () {
        if ($(".tf-action-btns").length > 0) {
            $(".tf-action-btns").on("click", function () {
                $(this).toggleClass("active");
            });
        }
    };

    /* showform
  -------------------------------------------------------------------------------------*/
    var showform = function () {
        if ($(".show-form").length > 0) {
            $(".show-form").on("click", function (e) {
                e.preventDefault();
                $(this).toggleClass("click");
                $(".wd-search-form").toggleClass("show");
            });
        }
    };

    /* video
  -------------------------------------------------------------------------------------*/
    var video = function () {
        if ($("div").hasClass("widget-video")) {
            $(".popup-youtube").magnificPopup({
                type: "iframe",
            });
        }
    };

    /* tabs
  -------------------------------------------------------------------------------------*/
    var tabs = function () {
        $(".widget-tabs").each(function () {
            $(this).find(".widget-content-tab").children().hide();
            $(this).find(".widget-content-tab").children(".active").show();
            $(this)
                .find(".widget-menu-tab")
                .children(".item-title")
                .on("click", function () {
                    var liActive = $(this).index();
                    var contentActive = $(this)
                        .siblings()
                        .removeClass("active")
                        .parents(".widget-tabs")
                        .find(".widget-content-tab")
                        .children()
                        .eq(liActive);
                    contentActive.addClass("active").fadeIn("slow");
                    contentActive.siblings().removeClass("active");
                    $(this)
                        .addClass("active")
                        .parents(".widget-tabs")
                        .find(".widget-content-tab")
                        .children()
                        .eq(liActive)
                        .siblings()
                        .hide();
                });
        });
    };

    /* filterTab
  -------------------------------------------------------------------------------------*/
    var filterTab = function () {
        if ($(".tf-btns-filter").length > 0) {
            var $btnFilter = $(".tf-btns-filter").click(function () {
                if (this.id == "all") {
                    $("#parent > div").show();
                } else {
                    var $el = $("." + this.id).show();
                    $("#parent > div").not($el).hide();
                }
                $btnFilter.removeClass("is--active");
                $(this).addClass("is--active");
            });
        }
    };

    /* datePicker
  -------------------------------------------------------------------------------------*/
    var datePicker = function () {
        if ($("#datepicker1").length > 0) {
            $("#datepicker1").datepicker({
                firstDay: 1,
                dateFormat: "dd/mm/yy",
            });
        }
        if ($("#datepicker2").length > 0) {
            $("#datepicker2").datepicker({
                firstDay: 1,
                dateFormat: "dd/mm/yy",
            });
        }
        if ($("#datepicker3").length > 0) {
            $("#datepicker3").datepicker({
                firstDay: 1,
                dateFormat: "dd/mm/yy",
            });
        }
        if ($("#datepicker4").length > 0) {
            $("#datepicker4").datepicker({
                firstDay: 1,
                dateFormat: "dd/mm/yy",
            });
        }
    };

    /* Show Pass
  -------------------------------------------------------------------------------------*/
    var showPass = function () {
        if ($(".show-pass").length > 0) {
            $(".show-pass").on("click", function () {
                $(this).toggleClass("active");
                if ($(".password-field").attr("type") == "password") {
                    $(".password-field").attr("type", "text");
                } else if ($(".password-field").attr("type") == "text") {
                    $(".password-field").attr("type", "password");
                }
            });
        }
        if ($(".show-pass2").length > 0) {
            $(".show-pass2").on("click", function () {
                $(this).toggleClass("active");
                if ($(".password-field2").attr("type") == "password") {
                    $(".password-field2").attr("type", "text");
                } else if ($(".password-field2").attr("type") == "text") {
                    $(".password-field2").attr("type", "password");
                }
            });
        }
        if ($(".show-pass3").length > 0) {
            $(".show-pass3").on("click", function () {
                $(this).toggleClass("active");
                if ($(".password-field3").attr("type") == "password") {
                    $(".password-field3").attr("type", "text");
                } else if ($(".password-field3").attr("type") == "text") {
                    $(".password-field3").attr("type", "password");
                }
            });
        }
    };

    /* Delete image 
  -------------------------------------------------------------------------------------*/
    var deleteImg = function (e) {
        if ($(".remove-file").length > 0) {
            $(".remove-file").on("click", function (e) {
                e.preventDefault();
                var $this = $(this);
                $this.closest(".file-delete").remove();
            });
        }
    };

    /* parallaxImage 
  -------------------------------------------------------------------------------------*/
    var parallaxImage = function () {
        if ($(".parallax-img").length > 0) {
            $(".parallax-img").each(function () {
                new SimpleParallax(this, {
                    delay: 0.6,
                    orientation: "up",
                    scale: 1.3,
                    transition: "cubic-bezier(0,0,0,1)",
                    customContainer: "",
                    customWrapper: "",
                });
            });
        }
    };

    /* loademore
  -------------------------------------------------------------------------------------*/
    var loademore = function () {
        $(".fl-item").slice(0, 3).show();
        $(".fl-item-1").slice(0, 3).show();
        $(".fl-item-2").slice(0, 3).show();
        $(".fl-item-3").slice(0, 3).show();
        $(".fl-item-4").slice(0, 3).show();
        $(".fl-item-5").slice(0, 3).show();
        $(".fl-item-6").slice(0, 12).show();
        $(".fl-item-7").slice(0, 12).show().css("display", "flex");

        if ($(".loadmore-item").length > 0) {
            $(".btn-loadmore").on("click", function () {
                setTimeout(() => {
                    $(".fl-item:hidden").slice(0, 3).show();
                    if ($(".fl-item:hidden").length == 0) {
                        $(".view-more-button").hide();
                    }
                }, 600);
            });
        }

        if ($(".loadmore-item-1").length > 0) {
            $(".btn-loadmore-1").on("click", function () {
                setTimeout(() => {
                    $(".fl-item-1:hidden").slice(0, 3).show();
                    if ($(".fl-item-1:hidden").length == 0) {
                        $(".view-more-button-1").hide();
                    }
                }, 600);
            });
        }

        if ($(".loadmore-item-2").length > 0) {
            $(".btn-loadmore-2").on("click", function () {
                setTimeout(() => {
                    $(".fl-item-2:hidden").slice(0, 3).show();
                    if ($(".fl-item-2:hidden").length == 0) {
                        $(".view-more-button-2").hide();
                    }
                }, 600);
            });
        }

        if ($(".loadmore-item-3").length > 0) {
            $(".btn-loadmore-3").on("click", function () {
                setTimeout(() => {
                    $(".fl-item-3:hidden").slice(0, 3).show();
                    if ($(".fl-item-3:hidden").length == 0) {
                        $(".view-more-button-3").hide();
                    }
                }, 600);
            });
        }

        if ($(".loadmore-item-4").length > 0) {
            $(".btn-loadmore-4").on("click", function () {
                setTimeout(() => {
                    $(".fl-item-4:hidden").slice(0, 3).show();
                    if ($(".fl-item-4:hidden").length == 0) {
                        $(".view-more-button-4").hide();
                    }
                }, 600);
            });
        }

        if ($(".loadmore-item-5").length > 0) {
            $(".btn-loadmore-5").on("click", function () {
                setTimeout(() => {
                    $(".fl-item-5:hidden").slice(0, 3).show();
                    if ($(".fl-item-5:hidden").length == 0) {
                        $(".view-more-button-5").hide();
                    }
                }, 600);
            });
        }

        if ($(".loadmore-item-6").length > 0) {
            $(".btn-loadmore-6").on("click", function () {
                setTimeout(() => {
                    $(".fl-item-6:hidden").slice(0, 3).show();
                    if ($(".fl-item-6:hidden").length == 0) {
                        $(".view-more-button-6").hide();
                    }
                }, 600);
            });
        }

        if ($(".loadmore-item-7").length > 0) {
            $(".btn-loadmore-7").on("click", function () {
                setTimeout(() => {
                    $(".fl-item-7:hidden")
                        .slice(0, 2)
                        .show()
                        .css("display", "flex");
                    if ($(".fl-item-7:hidden").length == 0) {
                        $(".view-more-button-7").hide();
                    }
                }, 600);
            });
        }

        if ($(".loadmore-item-8").length > 0) {
            $(".btn-loadmore").on("click", function () {
                $(".loadmore-item-8").addClass("active");
                $(".view-more-button").hide();
            });
        }
    };

    /* Handle dashboard
  -------------------------------------------------------------------------------------*/
    var showHideDashboard = function () {
        if ($(".button-show-hide").length > 0) {
            $(".button-show-hide").on("click", function () {
                $(".page-layout").toggleClass("full-width");
            });
            $(".mobile-nav-toggler,.overlay-dashboard").on(
                "click",
                function () {
                    $(".page-layout").removeClass("full-width");
                }
            );
        }
    };

    /* animation
  -------------------------------------------------------------------------------------*/
    var animation = function () {
        if ($(".wow").length > 0) {
            var wow = new WOW({
                boxClass: "wow",
                animateClass: "animated",
                offset: 0,
                mobile: false,
                live: true,
            });
            wow.init();
        }
    };

    /* goTop
  -------------------------------------------------------------------------------------*/
    var goTop = function () {
        if ($("div").hasClass("progress-wrap")) {
            var progressPath = document.querySelector(".progress-wrap path");
            var pathLength = progressPath.getTotalLength();
            progressPath.style.transition =
                progressPath.style.WebkitTransition = "none";
            progressPath.style.strokeDasharray = pathLength + " " + pathLength;
            progressPath.style.strokeDashoffset = pathLength;
            progressPath.getBoundingClientRect();
            progressPath.style.transition =
                progressPath.style.WebkitTransition =
                    "stroke-dashoffset 10ms linear";
            var updateprogress = function () {
                var scroll = $(window).scrollTop();
                var height = $(document).height() - $(window).height();
                var progress = pathLength - (scroll * pathLength) / height;
                progressPath.style.strokeDashoffset = progress;
            };
            updateprogress();
            $(window).scroll(updateprogress);
            var offset = 200;
            var duration = 0;
            jQuery(window).on("scroll", function () {
                if (jQuery(this).scrollTop() > offset) {
                    jQuery(".progress-wrap").addClass("active-progress");
                } else {
                    jQuery(".progress-wrap").removeClass("active-progress");
                }
            });
            jQuery(".progress-wrap").on("click", function (event) {
                event.preventDefault();
                jQuery("html, body").animate({ scrollTop: 0 }, duration);
                return false;
            });
        }
    };

    /* animationtext
  -------------------------------------------------------------------------------------*/
    const animationtext = () => {
        if ($(".split-text").length > 0) {
            gsap.registerPlugin(ScrollTrigger);
            var st = $(".split-text");
            if (st.length === 0) return;
            gsap.registerPlugin(SplitText);
            st.each(function (index, el) {
                const $el = $(el);
                const $target =
                    $el.find("p, a").length > 0 ? $el.find("p, a")[0] : el;
                const hasClass = $el.hasClass.bind($el);
                const pxl_split = new SplitText($target, {
                    type: "chars, words",
                    lineThreshold: 0.5,
                });
                let split_type_set = pxl_split.chars;
                gsap.set($target, { perspective: 400 });
                const settings = {
                    scrollTrigger: {
                        trigger: $target,
                        start: "top 86%",
                    },
                    duration: 0.9,
                    stagger: 0.03,
                    ease: "power3.out",
                };
                if (hasClass("effect-fade")) {
                    settings.opacity = 0;
                }
                if (hasClass("effect-right")) {
                    settings.opacity = 0;
                    settings.x = "50";
                }
                if (hasClass("effect-left")) {
                    settings.opacity = 0;
                    settings.x = "-50";
                }
                if (hasClass("effect-up")) {
                    settings.opacity = 0;
                    settings.y = "80";
                }
                if (hasClass("effect-down")) {
                    settings.opacity = 0;
                    settings.y = "-80";
                }
                if (hasClass("effect-rotate")) {
                    settings.opacity = 0;
                    settings.rotateX = "50deg";
                }
                if (hasClass("effect-scale")) {
                    settings.opacity = 0;
                    settings.scale = "0.5";
                }
                if (
                    hasClass("split-lines-transform") ||
                    hasClass("split-lines-rotation-x")
                ) {
                    pxl_split.split({
                        type: "lines",
                        lineThreshold: 0.5,
                        linesClass: "split-line",
                    });
                    split_type_set = pxl_split.lines;
                    settings.opacity = 0;
                    settings.stagger = 0.5;
                    if (hasClass("split-lines-rotation-x")) {
                        settings.rotationX = -120;
                        settings.transformOrigin = "top center -50";
                    } else {
                        settings.yPercent = 100;
                        settings.autoAlpha = 0;
                    }
                }
                if (hasClass("split-words-scale")) {
                    pxl_split.split({ type: "words" });
                    split_type_set = pxl_split.words;
                    split_type_set.forEach((elw, index) => {
                        gsap.set(
                            elw,
                            {
                                opacity: 0,
                                scale: index % 2 === 0 ? 0 : 2,
                                force3D: true,
                                duration: 0.1,
                                ease: "power3.out",
                                stagger: 0.02,
                            },
                            index * 0.01
                        );
                    });

                    gsap.to(split_type_set, {
                        scrollTrigger: {
                            trigger: el,
                            start: "top 86%",
                        },
                        rotateX: "0",
                        scale: 1,
                        opacity: 1,
                    });
                } else {
                    gsap.from(split_type_set, settings);
                }
            });
        }
    };

    var sendmail = function () {
        if ($(".sib-form").length > 0) {
            window.REQUIRED_CODE_ERROR_MESSAGE = "Please choose a country code";
            window.LOCALE = "en";
            window.EMAIL_INVALID_MESSAGE = window.SMS_INVALID_MESSAGE =
                "The information provided is invalid. Please review the field format and try again.";

            window.REQUIRED_ERROR_MESSAGE = "This field cannot be left blank. ";

            window.GENERIC_INVALID_MESSAGE =
                "The information provided is invalid. Please review the field format and try again.";
            window.translation = {
                common: {
                    selectedList: "{quantity} list selected",
                    selectedLists: "{quantity} lists selected",
                },
            };
            var AUTOHIDE = Boolean(0);
        }
    };

    /* preloader
  -------------------------------------------------------------------------------------*/
    var infiniteslide = function () {
        if ($(".infiniteslide").length > 0) {
            $(".infiniteslide").each(function () {
                var $this = $(this);
                var style = $this.data("style") || "left";
                var clone = $this.data("clone") || 4;
                $this.infiniteslide({
                    speed: 30,
                    direction: style,
                    clone: clone,
                });
            });
        }
    };

    /* stackElement
  -------------------------------------------------------------------------*/
    var stackElement = function () {
        if ($(".stack-element").length > 0) {
            let totalHeight;
            let scrollTriggerInstances = [];
            const updateTotalHeight = () => {
                totalHeight = $(".stack-content-wrap").outerHeight();
                scrollTriggerInstances.forEach((instance) => {
                    instance.kill();
                });
                scrollTriggerInstances = [];
                document
                    .querySelectorAll(".element")
                    .forEach((element, index) => {
                        const tabHeight = element.offsetHeight;
                        totalHeight -= tabHeight;
                        const pinTrigger = ScrollTrigger.create({
                            trigger: element,
                            scrub: 1,
                            start: "top 80",
                            end: `+=${totalHeight}`,
                            pin: true,
                            pinSpacing: false,
                        });
                        scrollTriggerInstances.push(pinTrigger);
                    });
            };

            updateTotalHeight();
            window.addEventListener("resize", () => {
                updateTotalHeight();
            });
        }
    };

    /* cursorCustom
    -------------------------------------------------------------------------------------*/
    var hoverImgCursor = function () {
        let offsetX = 0;
        let offsetY = 0;
        $(".area-cursor-custom").on("mousemove", function (e) {
            let cursorCustom = $(this).find(".custom-cursor");
            cursorCustom.css({
                top: e.clientY + offsetY + "px",
                left: e.clientX + offsetX + "px",
            });
        });
        $(".area-cursor-custom").on("mouseenter", function () {
            let cursorCustom = $(this).find(".custom-cursor");
            cursorCustom.css({
                transform: "scale(1)",
                opacity: 1,
            });
        });
        $(".area-cursor-custom").on("mouseleave", function () {
            let cursorCustom = $(this).find(".custom-cursor");
            cursorCustom.css({
                transform: "scale(0)",
                opacity: 0,
            });
        });
    };

    /* animateImgScroll
    -------------------------------------------------------------------------------------*/
    var animateImgScroll = function () {
        if ($("div").hasClass("scroll-tranform")) {
            const scrollTransformElement =
                document.querySelector(".scroll-tranform");
            if (scrollTransformElement) {
                gsap.to(scrollTransformElement, {
                    y: "-10%",
                    scrollTrigger: {
                        trigger: scrollTransformElement,
                        end: "bottom center",
                        scrub: 2,
                    },
                });
            }
        }
    };

    /* changetext
  -------------------------------------------------------------------------*/
    var changetext = function () {
        if ($(".text-change-color").length > 0) {
            const textChanges = $(".text-change-color");
            if (textChanges.length === 0) return;
            textChanges.each((index, textChange) => {
                const split = new SplitText(textChange, {
                    type: "lines",
                    position: "relative",
                    linesClass: "split-line",
                });
                split.lines.forEach((line) => {
                    gsap.to(line, {
                        backgroundPositionX: "0%",
                        ease: "none",
                        scrollTrigger: {
                            trigger: line,
                            start: "top 80%",
                            end: "bottom 80%",
                            scrub: true,
                        },
                    });
                });
            });
        }
    };

    /* dark_light
  -------------------------------------------------------------------------*/
    var dark_light = function () {
        var tflight = $(".logo_header").data("light");
        var tfdark = $(".logo_header").data("dark");
        if (localStorage.toggled === "dark-theme") {
            $("body").addClass("dark-theme");
            $("#theme-toggle").prop("checked", true);
            $(".logo_header").attr({ src: tfdark });
            $("#logo_header_mobile").attr({ src: tfdark });
        } else {
            $("body").removeClass("dark-theme");
            $("#theme-toggle").prop("checked", false);
            $(".logo_header").attr({ src: tflight });
            $("#logo_header_mobile").attr({ src: tflight });
        }
        $("#theme-toggle").on("change", function () {
            if ($(this).prop("checked")) {
                $("body").removeClass("light-theme");
                $("body").addClass("dark-theme");
                localStorage.toggled = "dark-theme";
                $(".logo_header").attr({ src: tfdark });
                $("#logo_header_mobile").attr({ src: tfdark });
            } else {
                $("body").addClass("light-theme");
                $("body").removeClass("dark-theme");
                localStorage.toggled = "light-theme";
                $(".logo_header").attr({ src: tflight });
                $("#logo_header_mobile").attr({ src: tflight });
            }
        });
    };

    /* RTL
  ------------------------------------------------------------------------------------- */
    var RTL = function () {
        if (localStorage.getItem("dir") === "rtl") {
            $("html").attr("dir", "rtl");
            $("body").addClass("rtl");
            $("#toggle-rtl").text("ltr");
            $("wg-pagination")
                .find(".icon-arrow-right")
                .removeClass("icon-arrow-right")
                .addClass("icon-arrow-left");
        } else {
            $("html").attr("dir", "ltr");
            $("body").removeClass("rtl");
            $("#toggle-rtl").text("rtl");
        }
        $("#toggle-rtl").on("click", function () {
            if ($("html").attr("dir") === "rtl") {
                localStorage.setItem("dir", "ltr");
                $("#toggle-rtl").text("rtl");
            } else {
                localStorage.setItem("dir", "rtl");
                $("#toggle-rtl").text("ltr");
            }
            location.reload();
        });
    };

    /* handleSidebarFilter
    -------------------------------------------------------------------------------------*/
    var handleSidebarFilter = function () {
        $(".btn-setting").click(function () {
            $(".popup-setting").toggleClass("show");
        });
    };

    /* Parallaxie js 
    -------------------------------------------------------------------------------------*/

    var parallaxie = function () {
        var $window = $(window);
        if ($(".parallaxie").length && $window.width() > 991) {
            if ($window.width() > 768) {
                $(".parallaxie").parallaxie({
                    speed: 0.55,
                    offset: 0,
                });
            }
        }
    };

    /* scrollBanners
    -------------------------------------------------------------------------------------*/
    var scrollBanners = function () {
        var st = $(".banner-stripe .text-container");
        st.each(function () {
            const settings = {
                scrollTrigger: {
                    trigger: this,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1,
                    markers: false,
                },
                ease: "none",
            };
            if ($(this).hasClass("effect-left")) {
                settings.x = "-7%";
            }
            if ($(this).hasClass("effect-right")) {
                settings.x = "7%";
            }
            gsap.to(this, settings);
        });
    };

    var fadeRight = function () {
        if ($(".fadeRight").length) {
            gsap.set(".fadeRight", { x: 20, opacity: 0 });
            gsap.to(".fadeRight", {
                scrollTrigger: {
                    trigger: ".fadeRight",
                    start: "top center+=300", 
                },
                x: 0,
                opacity: 1,
                ease: "power2.out",
                duration: 1,
                stagger: {
                    each: 0.2,
                },
            });
        }
    };
    var fadeLeft = function () {
        if ($(".fadeLeft").length) {
            gsap.set(".fadeLeft", { x: -20, opacity: 0 });
            gsap.to(".fadeLeft", {
                scrollTrigger: {
                    trigger: ".fadeLeft",
                    start: "top center+=300",
                },
                x: 0,
                opacity: 1,
                ease: "power2.out",
                duration: 1,
                stagger: {
                    each: 0.2,
                },
            });
        }
    };
    /* preloader
  -------------------------------------------------------------------------------------*/
    var preloader = function () {
        $("#loading").fadeOut("slow", function () {
            $(this).remove();
        });
    };

    // Dom Ready
    $(function () {
        headerFixed();
        reaction();
        footer();
        changeValue();
        action_click();
        showform();
        video();
        tabs();
        filterTab();
        datePicker();
        showPass();
        deleteImg();
        parallaxImage();
        loademore();
        showHideDashboard();
        animation();
        goTop();
        animationtext();
        sendmail();
        infiniteslide();
        stackElement();
        hoverImgCursor();
        animateImgScroll();
        changetext();
        RTL();
        dark_light();
        handleSidebarFilter();
        scrollBanners();
        fadeLeft();
        fadeRight();
        parallaxie();
        preloader();
    });
})(jQuery);
