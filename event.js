(function () {
    const scroll = new LocomotiveScroll({
        el: document.querySelector("[data-scroll-container]"),
        smooth: true,
        direction: "horizontal",
    });

    scroll.on("scroll", (info) => {
        //console.log(info);
        const eles = info.currentElements;
        for (const item in eles) {
            const ele = eles[item];
            const target = ele.target;
            if (target.classList.contains("item")) {
                console.log(ele.progress);

                if (ele.progress > 0.75 && target.classList.contains("show")) {
                    target.classList.remove("show");
                } else if (
                    ele.progress <= 0.75 &&
                    !target.classList.contains("show")
                ) {
                    target.classList.add("show");
                }
            }
        }
    });
})();
function show() {
    document.querySelector(".sidebar").classList.toggle("active-right");
}
