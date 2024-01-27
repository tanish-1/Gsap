var t1 = gsap.timeline()

t1.from("nav img , nav h3,nav h4,nav button",{
    y:-100,
    duratin:1,
    delay:1,
    opacity:0,
    stagger:0.5
})
t1.from("#main h1",{
    y:120,
    opacity:0,
    stagger:0.3
})
t1.from("#main>img",{
    scale:0,
    opacity:0,
    stagger:0.3
})
t1.from("h5",{
    scale:0,
    opacity:0
})
t1.to("h5",{
    y:30,
    repeat:-1,
    duratin:.7,
    yoyo:true
})