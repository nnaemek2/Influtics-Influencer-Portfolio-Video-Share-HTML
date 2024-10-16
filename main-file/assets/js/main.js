document.addEventListener("DOMContentLoaded", (event) => {
    // SIDEBAR JS START
    const etSidebar = document.querySelector(".jo-sidebar");
    const etSidebarOpenBtn = document.querySelector(".jo-header-sidebar-open-btn");
    const etSidebarCloseBtn = document.querySelector(".jo-sidebar-close-btn");
    // const etMobileMenuOpenBtn = document.querySelector(".jo-mobile-menu-open-btn");
    const etMobileMenuContent = document.querySelector(".to-go-to-sidebar-in-mobile");
    const etMobileMenuContainer = document.querySelector(".jo-header-nav-in-mobile");
    const etHeaderNav = document.querySelectorAll(".jo-header-nav nav > *");
    const etHeaderNavContainer = document.querySelector(".jo-header-nav");

    if (window.innerWidth < 992) {
        etMobileMenuContainer.appendChild(etMobileMenuContent);
        etHeaderNav.forEach(etHeaderNavItem => {
            etHeaderNavItem.addEventListener("click", () => {
                etHeaderNavItem.classList.toggle("active");
            });
        });
    };

    window.addEventListener("resize", () => {
        if (window.innerWidth < 992) {
            etMobileMenuContainer.appendChild(etMobileMenuContent);
        }
        else if (window.innerWidth > 992) {
            etHeaderNavContainer.appendChild(etMobileMenuContent);
        };
    });
    etSidebarOpenBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        etSidebar.classList.add("active");
    });
    etSidebarCloseBtn.addEventListener("click", () => {
        etSidebar.classList.remove("active");
    });
    // MOBILE MENU SIDEBAR

    const reelPlayers = document.querySelectorAll(".jo-reel-video video");
    reelPlayers.forEach(player => {
        new Plyr(player, {
            // controls: ['play-large', 'mute', 'captions', 'airplay', 'fullscreen'],
            controls: ['play-large'],
        });
    })

    new Swiper(".jo-reels-slider", {
        // slidesPerView: 5,
        // spaceBetween: 30,
        loop: true,
        navigation: {
            nextEl: ".jo-reels-slider-next",
            prevEl: ".jo-reels-slider-prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            480: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            576: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            1200: {
                slidesPerView: 5,
                spaceBetween: 20,
            },
            1400: {
                slidesPerView: 5,
                spaceBetween: 30,
            }
        }
    });

    // tabs
    const tabButtons = document.querySelectorAll(".tab-nav");
    const tabs = document.querySelectorAll(".tt-tab");

    if (tabButtons) {
        tabButtons.forEach(button => {
            button.addEventListener("click", () => {
                const tabId = button.getAttribute("data-tab");

                tabs.forEach(tab => {
                    if (tab.id === tabId) {
                        tab.classList.add("active");
                    } else {
                        tab.classList.remove("active");
                    }
                });

                tabButtons.forEach(btn => {
                    btn.classList.remove("active");
                });
                button.classList.add("active");
            });
        });
    };

    // video slider
    if (document.querySelector(".jo-videos-slider")) {
        new Splide('.jo-videos-slider', {
            arrows: false,
            pagination: false,
            type: 'loop',
            drag: 'free',
            focus: 'center',
            perPage: 2,
            autoWidth: true,
            gap: 30,
            autoScroll: {
                speed: 2,
            },
        }).mount(window.splide.Extensions);
    }
    if (document.querySelector(".jo-videos-slider-2")) {
        new Splide('.jo-videos-slider-2', {
            arrows: false,
            pagination: false,
            type: 'loop',
            drag: 'free',
            focus: 'center',
            perPage: 2,
            autoWidth: true,
            gap: 30,
            autoScroll: {
                speed: -2,
            },
        }).mount(window.splide.Extensions);
    };

    new Swiper(".jo-partners-slider", {
        // slidesPerView: 4,
        // spaceBetween: 130,
        loop: true,
        pagination: {
            el: ".jo-partners-slider-pagination",
            clickable: true
        },
        breakpoints: {
            0: {
                slidesPerView: 3,
                spaceBetween: 50,
            },
            480: {
                slidesPerView: 4,
                spaceBetween: 60,
            },
            768: {
                slidesPerView: 5,
                spaceBetween: 60,
            },
            992: {
                slidesPerView: 4,
                spaceBetween: 60,
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 70,
            },
            1400: {
                slidesPerView: 4,
                spaceBetween: 80,
            },
            1600: {
                slidesPerView: 5,
                spaceBetween: 60,
            }
        }
    });

    new Swiper(".jo-related-services-slider", {
        // slidesPerView: 3,
        // spaceBetween: 30,
        slidesPerView: 1,
        spaceBetween: 15,
        breakpoints: {
            480: {
                slidesPerView: 2
            },
            768: {
                spaceBetween: 30,
                slidesPerView: 3
            }
        },
        navigation: {
            prevEl: ".jo-related-services-slider-nav .prev",
            nextEl: ".jo-related-services-slider-nav .next"
        }
    });

    // inner videos slider
    new Swiper(".jo-inner-videos-slider", {
        slidesPerView: "auto",
        centeredSlides: true,
        loop: true,
        autoplay: true,
        navigation: {
            prevEl: ".jo-inner-videos-slider-nav .prev",
            nextEl: ".jo-inner-videos-slider-nav .next"
        },
        breakpoints: {
            0: {
                spaceBetween: 15,
            },
            992: {
                spaceBetween: 20,
            },
            1200: {
                spaceBetween: 30,
            }
        }
    });

    new Swiper(".jo-related-videos-slider", {
        // slidesPerView: 3,
        // spaceBetween: 30,
        slidesPerView: 1,
        spaceBetween: 15,
        breakpoints: {
            480: {
                slidesPerView: 2
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            }
        },
        navigation: {
            prevEl: ".jo-related-videos-slider-nav .prev",
            nextEl: ".jo-related-videos-slider-nav .next"
        },
    });

    // price filter 
    var priceFilterSlider = document.getElementById('jo-video-shop-price-filter-slider');

    if (priceFilterSlider) {
        noUiSlider.create(priceFilterSlider, {
            start: [20, 80],
            connect: true,
            range: {
                'min': 0,
                'max': 100
            }
        });
    }

    if (document.querySelector("#jo-contact-subject")) {
        new SlimSelect({
            select: '#jo-contact-subject',
            settings: {
                showSearch: false,
            }
        })
    }

    new Swiper(".jo-shop-related-videos-slider", {
        slidesPerView: 1,
        spaceBetween: 15,
        breakpoints: {
            480: {
                slidesPerView: 2
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            992: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 25
            },
            1600: {
                slidesPerView: 4,
                spaceBetween: 30
            }
        },
        navigation: {
            prevEl: ".jo-shop-related-videos-slider-nav .prev",
            nextEl: ".jo-shop-related-videos-slider-nav .next"
        },
    });
});
