gsap.registerPlugin(ScrollTrigger);

const pageContainer = document.querySelector(".container");

/* SMOOTH SCROLL */
const scroller = new LocomotiveScroll({
    el: pageContainer,
    smooth: true,
});

scroller.on("scroll", (item) => {
    callThrottle();
    ScrollTrigger.update();
});

const $cursorIcon = document.querySelector("#cursor .cursor_arrow i");
const scroll_level_1 = 900;
const scroll_level_2 = 9400;
let beforeY = 0;
let scrollY = 0;

const throttle = (cb, delay) => {
    let timerId;
    return () => {
        if (timerId) {
            return;
        }
        timerId = setTimeout(() => {
            cb();
            timerId = null;
        }, delay);
    };
};

const callThrottle = throttle(() => {
    let direction = "down";
    if (scrollY < beforeY) {
        direction = "up";
    }
    beforeY = scrollY;
    console.log(direction);
    if (direction === "down") {
        //스크롤 아래 방향
        if (scrollY <= scroll_level_1) {
            $cursorIcon.className = "fa-solid fa-chevron-down";
        } else if (scrollY <= scroll_level_2) {
            $cursorIcon.className = "fa-solid fa-chevron-right";
        } else {
            $cursorIcon.className = "fa-solid fa-chevron-down";
        }
    } else {
        //스크롤 위 방향

        if (scrollY <= scroll_level_1) {
            $cursorIcon.className = "fa-solid fa-chevron-up";
        } else if (scrollY <= scroll_level_2) {
            $cursorIcon.className = "fa-solid fa-chevron-left";
        } else {
            $cursorIcon.className = "fa-solid fa-chevron-up";
        }
    }
}, 100);

ScrollTrigger.scrollerProxy(pageContainer, {
    scrollTop(value) {
        scrollY = scroller.scroll.instance.scroll.y;

        return arguments.length
            ? scroller.scrollTo(value, 0, 0)
            : scroller.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return {
            left: 0,
            top: 0,
            width: window.innerWidth,
            height: window.innerHeight,
        };
    },
    pinType: pageContainer.style.transform ? "transform" : "fixed",
});

////////////////////////////////////
////////////////////////////////////
window.addEventListener("load", function () {
    let pinBoxes = document.querySelectorAll(".pin-wrap > *");
    let pinWrap = document.querySelector(".pin-wrap");
    let pinWrapWidth = pinWrap.offsetWidth;
    let horizontalScrollLength = pinWrapWidth - window.innerWidth;

    // Pinning and horizontal scrolling

    gsap.to(".pin-wrap", {
        scrollTrigger: {
            scroller: pageContainer, //locomotive-scroll
            scrub: true,
            trigger: "#sectionPin",
            pin: true,
            // anticipatePin: 1,
            start: "top top",
            end: pinWrapWidth,
        },
        x: -horizontalScrollLength,
        ease: "none",
    });

    ScrollTrigger.addEventListener("refresh", () => scroller.update()); //locomotive-scroll

    ScrollTrigger.refresh();
});

// // 마우스 효과
// const $mouseEffectList = document.querySelectorAll("cursor__circle");
// $mouseEffectList.forEach((item) => {
//     item.addEventListener("mouseover", (e) => {
//         _onrollOver(true);
//     });

//     item.addEventListener("mouseout", (e) => {
//         _onrollOver(false);
//     });
// });
