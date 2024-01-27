// gsap.to("#box",{
//     x:900,
//     rotate:360,
//     duration:2,
//     delay:1,
//     backgroundColor:"red",
//     repeat:-1,
//     yoyo:true
// })

gsap.from("#page1 #box",{
    scale:0,
    delay:0,
    duration:1,
    rotate:360
})
gsap.from("#page2                                                                            #box",{
    scale:0,
    delay:0,
    duration:1,
    rotate:360,
    // scrollTrigger:"#page2 #box"
    scrollTrigger:{
        trigger:"#page2 #box",
        scroller:"body",
        markers:true,
        start:"top 60%",
        end:"top 30%",
        scrub:5
    }
})