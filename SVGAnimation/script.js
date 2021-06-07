let tl = new TimelineMax();

gsap.set(".logo-letters", { visibility: "hidden" });

function starColouring() {
    tl.staggerFromTo("#svg_1", 1, { drawSVG: "0% 0%" }, { drawSVG: "0% 100%" }, 0.1);
    tl.staggerTo("#svg_1", 0.5, { fill: "#005DAA", stroke: "transparent" }, 0.1);
}

function textAppear() {
    tl.to(".logo-letters", { autoAlpha: 1, ease: "none", visibility: "visible" });
}

function starChangeColour() {
    tl.to("#svg_1", { duration: 1, fill: "#BA55D3" });
}

function starRotate() {
    TweenMax.set("#svg_1", { z: 0.01, transformOrigin: "50% 50%" })
    TweenMax.to("#svg_1", 2, { rotation: "+=360" });
}

starRotate();
starColouring();
starChangeColour();
textAppear();