var tl = gsap.timeline()

tl.from('#nav h3',{
    y:-50,
    duration:0.8,
    opacity:0,
    delay:0.4,
    stagger:0.3
})
tl.from("#center h1",{
    x:-500,
    duration:0.8,
    opacity:0,
    stagger:0.4

})
tl.from("img",{
    x:100,
    opacity:0,
    rotate:45,
    duration:0.5,
    stagger:0.5
})
tl.from('#footer h3',{
    x:-50,
    opacity:0,
    duration:0.8,
    delay:0.4,
    stagger:0.3
})