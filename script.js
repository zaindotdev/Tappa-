let tl = gsap.timeline();
// let nav = document.querySelector(".navbar")
tl.from("#navbar", {
  y: -100,
  duration: 1,
  delay: 0.2,
  stagger: 2,
});

tl.from("#hero h1", {
  x: "-300%",
  duration: 1.5,
  stagger: 0.5,
});
tl.from("#hero h2", {
  scale: 2,
  opacity: 0,
  duration: 1.5,
});

tl.from("#hero button", {
  y: 100,
  duration: 1,
  opacity: 0,
});
tl.from("#img img", {
  y: 100,
  opacity: 0,
  delay: 0.4,
  duration: 1,
});

tl.from("#page2 h1", {
  y: -500,
  opacity: 0,
  scrollTrigger: {
    trigger: "#page2 h1",
    scroller: "body",
    start: "top 10%",
    end: "top 80%",
    scrub: 2,
  },
});
