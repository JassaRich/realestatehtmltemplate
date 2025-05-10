if ($(".tf-sw-mobile").length > 0) {
    let swiperMb;
    let screenWidth = $(".tf-sw-mobile").data("screen");
    function initSwiperMb() {
        if (
            matchMedia(`only screen and (max-width: ${screenWidth}px)`).matches
        ) {
            if (!swiperMb) {
                let preview = $(".tf-sw-mobile").data("preview");
                let spacing = $(".tf-sw-mobile").data("space");
                swiperMb = new Swiper(".tf-sw-mobile", {
                    slidesPerView: preview,
                    spaceBetween: spacing,
                    speed: 1000,
                    pagination: {
                        el: ".sw-pagination-mb",
                        clickable: true,
                    },
                });
            }
        } else {
            if (swiperMb) {
                swiperMb.destroy(true, true);
                swiperMb = null;
                $(".tf-sw-mobile .swiper-wrapper").removeAttr("style");
                $(".tf-sw-mobile .swiper-slide").removeAttr("style");
            }
        }
    }

    initSwiperMb();
    window.addEventListener("resize", function () {
        initSwiperMb();
    });
}

if ($(".tf-sw-mobile-1").length > 0) {
    let swiperMb;
    let screenWidth = $(".tf-sw-mobile-1").data("screen");
    function initSwiperMb() {
        if (
            matchMedia(`only screen and (max-width: ${screenWidth}px)`).matches
        ) {
            if (!swiperMb) {
                let preview = $(".tf-sw-mobile-1").data("preview");
                let spacing = $(".tf-sw-mobile-1").data("space");
                swiperMb = new Swiper(".tf-sw-mobile-1", {
                    slidesPerView: preview,
                    spaceBetween: spacing,
                    speed: 1000,
                    pagination: {
                        el: ".sw-pagination-mb-1",
                        clickable: true,
                    },
                    navigation: {
                        clickable: true,
                        nextEl: ".nav-prev-mb-1",
                        prevEl: ".nav-next-mb-1",
                    },
                });
            }
        } else {
            if (swiperMb) {
                swiperMb.destroy(true, true);
                swiperMb = null;
                $(".tf-sw-mobile-1 .swiper-wrapper").removeAttr("style");
                $(".tf-sw-mobile-1 .swiper-slide").removeAttr("style");
            }
        }
    }

    initSwiperMb();
    window.addEventListener("resize", function () {
        initSwiperMb();
    });
}

if ($(".tf-sw-mobile-2").length > 0) {
    let swiperMb;
    let screenWidth = $(".tf-sw-mobile-2").data("screen");
    function initSwiperMb() {
        if (
            matchMedia(`only screen and (max-width: ${screenWidth}px)`).matches
        ) {
            if (!swiperMb) {
                let preview = $(".tf-sw-mobile-2").data("preview");
                let spacing = $(".tf-sw-mobile-2").data("space");
                swiperMb = new Swiper(".tf-sw-mobile-2", {
                    slidesPerView: preview,
                    spaceBetween: spacing,
                    speed: 1000,
                    pagination: {
                        el: ".sw-pagination-mb-2",
                        clickable: true,
                    },
                    navigation: {
                        clickable: true,
                        nextEl: ".nav-prev-mb-2",
                        prevEl: ".nav-next-mb-2",
                    },
                });
            }
        } else {
            if (swiperMb) {
                swiperMb.destroy(true, true);
                swiperMb = null;
                $(".tf-sw-mobile-2 .swiper-wrapper").removeAttr("style");
                $(".tf-sw-mobile-2 .swiper-slide").removeAttr("style");
            }
        }
    }

    initSwiperMb();
    window.addEventListener("resize", function () {
        initSwiperMb();
    });
}

if ($(".sw-fipcard").length > 0) {
    $(".sw-fipcard").each(function () {
        var $this = $(this);
        var slidedirection = $this.data("direction") || "horizontal";
        var init = $this.data("init-slide") || 0;
        var spacing = $this.data("spacing") || "8";
        var rotateSlide = $this.data("rotate-slide") || "0";
        var slideChange = $this.data("change-slide") || "0";
        var slidedirection = $this.data("direction") || "horizontal";
        var swiper = new Swiper(this, {
            centeredSlides: true,
            effect: "cards",
            grabCursor: true,
            initialSlide: init,
            direction: slidedirection,
            cardsEffect: {
                slideShadows: false,
                rotate: slideChange,
                perSlideOffset: spacing,
                perSlideRotate: rotateSlide,
            },
            pagination: {
                el: $this.find(".sw-pagination-fipcard")[0],
                clickable: true,
            },
            navigation: {
                nextEl: $this.siblings(".sw-fipcard-next")[0],
                prevEl: $this.siblings(".sw-fipcard-prev")[0],
            },
        });
    });
}

if ($(".sw-thumbs-sigle").length > 0) {
    var preview = $(".sw-thumbs-sigle").data("preview");
    var spacing = $(".sw-thumbs-sigle").data("space");
    var speed = $(".sw-thumbs-sigle").data("speed");
    var swiper = new Swiper(".sw-thumbs-sigle", {
        slidesPerView: preview,
        spaceBetween: spacing,
        speed: speed,
        navigation: {
            clickable: true,
            nextEl: ".sw-thumbs-next",
            prevEl: ".sw-thumbs-prev",
        },
    });
}

if ($(".thumbs-sw-pagi").length > 0) {
    var preview = $(".thumbs-sw-pagi").data("preview");
    var spacing = $(".thumbs-sw-pagi").data("space");
    var mobile = $(".thumbs-sw-pagi").data("mobile");
    var mobileSm = $(".thumbs-sw-pagi").data("mobile-sm");

    var pagithumbs = new Swiper(".thumbs-sw-pagi", {
        spaceBetween: spacing,
        slidesPerView: preview,
        freeMode: true,
        watchSlidesProgress: true,
        navigation: {
            clickable: true,
            nextEl: ".sw-pagi-next",
            prevEl: ".sw-pagi-prev",
        },
        breakpoints: {
            375: {
                slidesPerView: 3,
                spaceBetween: spacing,
            },
            500: {
                slidesPerView: mobileSm,
            },
        },
    });
}

if ($(".sw-single-2").length > 0) {
    var loop = $(".sw-single-2").data("loop") || false;
    var swiperSingle = new Swiper(".sw-single-2", {
        spaceBetween: 16,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        speed: 500,
        effect: "fade",
        fadeEffect: {
            crossFade: true,
        },
        thumbs: {
            swiper: pagithumbs,
        },
        navigation: {
            clickable: true,
            nextEl: ".sw-thumbs-next-2",
            prevEl: ".sw-thumbs-prev-2",
        },
    });
}

if ($(".sw-single").length > 0) {
    var loop = $(".sw-single").data("loop") || false;
    var swiperSingle = new Swiper(".sw-single", {
        spaceBetween: 16,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        speed: 500,
        effect: "fade",
        fadeEffect: {
            crossFade: true,
        },
        thumbs: {
            swiper: pagithumbs,
        },
        navigation: {
            clickable: true,
            nextEl: ".sw-thumbs-next",
            prevEl: ".sw-thumbs-prev",
        },
    });
}

if ($(".thumbs-sw-pagi-2").length > 0) {
    const thSlider = $(".thumbs-sw-pagi-2");
    const preview = thSlider.data("preview") || 1;
    const spacing = thSlider.data("space") || 16;
    const mobileSm = thSlider.data("mobile-sm") || 1;
    var effect = thSlider.data("effect");
    var swiperConfig = {
        spaceBetween: spacing,
        slidesPerView: preview,
        breakpoints: {
            375: {
                slidesPerView: mobileSm,
                spaceBetween: spacing,
            },
            500: {
                slidesPerView: preview,
                spaceBetween: spacing,
            },
        },
    };
    var swiper = new Swiper(".thumbs-sw-pagi-2", swiperConfig);
}

if ($(".thumbs-sw-pagi-2").length > 0) {
    var swiper = new Swiper(".hero-thumbs-1", {
        spaceBetween: 10,
        speed: 1000,
        effect: "fade",
        fadeEffect: {
            crossFade: true,
        },
        thumbs: {
            swiper: swiper,
        },
        grabCursor: true,
    });

    const tfSwCategories = $(".hero-thumbs-2");
    var effect = tfSwCategories.data("effect");
    var loop = tfSwCategories.data("loop") || false;

    var swiper2 = {
        spaceBetween: 10,
        speed: 1000,
        navigation: {
            nextEl: ".sw-thumbs-next-2",
            prevEl: ".sw-thumbs-prev-2",
        },
        thumbs: {
            swiper: swiper,
        },
    };

    if (effect === "fade") {
        swiper2.effect = "fade";
        swiper2.fadeEffect = {
            crossFade: true,
        };
    }

    if (effect === "creative") {
        swiper2.effect = "creative";
        swiper2.creativeEffect = {
            prev: {
                shadow: true,
                translate: [0, 0, -400],
            },
            next: {
                translate: ["100%", 0, 0],
            },
        };
    }

    var swiper2 = new Swiper(".hero-thumbs-2", swiper2);

    swiper.on("slideChange", function () {
        swiper2.slideTo(swiper.activeIndex);
    });

    swiper2.on("slideChange", function () {
        swiper.slideTo(swiper2.activeIndex);
    });
}

if ($(".thumbs-sw-pagi-3").length > 0) {
    var swiperConfig = new Swiper(".thumbs-sw-pagi-3", {
        effect: "cards",
        grabCursor: true,
        direction: "vertical",
        cardsEffect: {
            perSlideOffset: 11.2,
        },
        on: {
            setTranslate: function () {
                this.slides.forEach((slide) => {
                    let transform = slide.style.transform;
                    if (transform.includes("rotateZ")) {
                        transform = transform.replace(
                            /rotateZ\([^)]+\)/,
                            "rotateZ(0deg)"
                        );
                    } else {
                        transform += " rotateZ(0deg)";
                    }
                    slide.style.transform = transform;
                });
            },
            init: function () {
                if (this.slides[0]) {
                    this.slides[0].classList.add("swiper-slide-thumb-active");
                    this.slides[0].classList.add("swiper-slide-fully-visible");
                }
            },
            transitionStart: function () {
                this.slides.forEach((slide) => {
                    slide.classList.remove("swiper-slide-thumb-active");
                    slide.classList.remove("swiper-slide-fully-visible");
                });
            },
            transitionEnd: function () {
                if (this.slides[this.activeIndex]) {
                    this.slides[this.activeIndex].classList.add(
                        "swiper-slide-thumb-active"
                    );
                    this.slides[this.activeIndex].classList.add(
                        "swiper-slide-fully-visible"
                    );
                }
                if (swiperMain1) {
                    swiperMain1.slideTo(this.activeIndex);
                }
                if (swiperMain2) {
                    swiperMain2.slideTo(this.activeIndex);
                }
            },
        },
    });
}

if ($(".thumbs-sw-pagi-3").length > 0) {
    var swiperMain1 = new Swiper(".hero-thumbs-1", {
        spaceBetween: 10,
        speed: 1000,
        thumbs: {
            swiper: swiperConfig,
        },
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        grabCursor: true,
        on: {
            slideChange: function () {
                if (swiperConfig) {
                    swiperConfig.slideTo(this.activeIndex);
                }
                if (swiperMain2) {
                    swiperMain2.slideTo(this.activeIndex);
                }
            },
        },
    });

    var swiperMain2 = new Swiper(".hero-thumbs-2", {
        spaceBetween: 10,
        speed: 1000,
        navigation: {
            nextEl: ".sw-thumbs-next-3",
            prevEl: ".sw-thumbs-prev-3",
        },
        thumbs: {
            swiper: swiperConfig,
        },
        grabCursor: true,
        effect: "creative",
        creativeEffect: {
            prev: {
                shadow: true,
                translate: ["-20%", 0, -1],
            },
            next: {
                translate: ["100%", 0, 0],
            },
        },
        on: {
            slideChange: function () {
                if (swiperConfig) {
                    swiperConfig.slideTo(this.activeIndex);
                }
                if (swiperMain1) {
                    swiperMain1.slideTo(this.activeIndex);
                }
            },
        },
    });
}

if ($(".sw-layout").length > 0) {
    $(".sw-layout").each(function () {
        var tfSwCategories = $(this);
        var preview = tfSwCategories.data("preview");
        var tablet = tfSwCategories.data("tablet");
        var mobile = tfSwCategories.data("mobile");
        var screenXl = tfSwCategories.data("screen-xl") || preview;
        var mobileSm =
            tfSwCategories.data("mobile-sm") !== undefined
                ? tfSwCategories.data("mobile-sm")
                : mobile;
        var spacingLg = tfSwCategories.data("space-lg");
        var spacingMd = tfSwCategories.data("space-md");
        var spacing = tfSwCategories.data("space");
        var perGroup = tfSwCategories.data("pagination") || 1;
        var perGroupMd = tfSwCategories.data("pagination-md") || 1;
        var perGroupLg = tfSwCategories.data("pagination-lg") || 1;
        var grid = tfSwCategories.data("grid") || 1;
        var mdGrid = tfSwCategories.data("mdgrid") || 1;
        var lgGrid = tfSwCategories.data("lggrid") || 1;
        var loop = tfSwCategories.data("loop") || false;
        var center = tfSwCategories.data("slide-center") || false;
        var intitSlide = tfSwCategories.data("init-slide") || 0;
        var swiperInstance;
        function initSwiper() {
            if (swiperInstance) swiperInstance.destroy(true, true);
            swiperInstance = new Swiper(tfSwCategories[0], {
                slidesPerView: mobile,
                spaceBetween: spacing,
                speed: 1000,
                centeredSlides: center,
                initialSlide: intitSlide,
                pagination: {
                    el: tfSwCategories.find(".sw-pagination-layout")[0],
                    clickable: true,
                },
                slidesPerGroup: perGroup,
                observer: true,
                observeParents: true,
                navigation: {
                    clickable: true,
                    nextEl: tfSwCategories.find(".nav-next-layout")[0],
                    prevEl: tfSwCategories.find(".nav-prev-layout")[0],
                },
                loop: loop,
                breakpoints: {
                    575: {
                        slidesPerView: mobileSm,
                        spaceBetween: spacing,
                        slidesPerGroup: perGroup,
                    },
                    768: {
                        slidesPerView: tablet,
                        spaceBetween: spacingMd,
                        slidesPerGroup: perGroupMd,
                    },
                    992: {
                        slidesPerView: preview,
                        spaceBetween: spacingLg,
                        slidesPerGroup: perGroupLg,
                    },
                    1200: {
                        slidesPerView: screenXl,
                        spaceBetween: spacingLg,
                        slidesPerGroup: perGroupLg,
                    },
                },
            });
        }
        initSwiper();
        window.addEventListener("resize", function () {
            initSwiper();
        });
    });
}

$(document).ready(function () {
    $(".categorySlider").each(function () {
        const multiplier = {
            translate: 0.1,
            rotate: 0.01,
        };

        new Swiper(".categorySlider", {
            slidesPerView: 5,
            spaceBetween: 60,
            speed: 1000,
            centeredSlides: true,
            loop: true,
            grabCursor: true,
            pagination: {
                el: ".swiper-pagination-categorySlider",
                clickable: true,
            },
            navigation: {
                clickable: true,
                nextEl: ".nav-next-categorySlider",
                prevEl: ".nav-prev-categorySlider",
            },
            breakpoints: {
                300: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                991: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                },
            },
        });

        function calculateWheel() {
            const slides = document.querySelectorAll(".single");
            slides.forEach((slide, i) => {
                const rect = slide.getBoundingClientRect();
                const r = window.innerWidth * 0.5 - (rect.x + rect.width * 0.5);
                let ty =
                    Math.abs(r) * multiplier.translate -
                    rect.width * multiplier.translate;

                if (ty < 0) {
                    ty = 0;
                }
                const transformOrigin = r < 0 ? "left top" : "right top";
                slide.style.transform = `translate(0, ${ty}px) rotate(${
                    -r * multiplier.rotate
                }deg)`;
                slide.style.transformOrigin = transformOrigin;
            });
        }

        function raf() {
            requestAnimationFrame(raf);
            calculateWheel();
        }

        raf();
    });
});
