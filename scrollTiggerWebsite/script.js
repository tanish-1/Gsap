var t1 = gsap.timeline()
t1.from("#nav",{
    opacity:0,
    delay:0.5
})
t1.from("#nav h1,#nav h4, #nav h3",{
    y:-80,
    opacity:0,
    duration:1,
    // delay:0.5,
    stagger:0.3
})
t1.from("#left h1",{
    x:-500,
    opacity:0,
    duration:0.5,
    stagger:0.5
})
t1.from("#right img",{
    scale:2,
    opacity:0,
    duration:0.5,
})

gsap.from("#page2 .box",{
    scale:0,
    opacity:0,
    duration:1,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#page2 .box",
        scroller:"body",
        start:"top 70%",
        end:"top 50%",
        markers:true,
        scrub:5
    }
})