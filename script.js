// to method
// gsap.to("#box1",{
//     x:900,
//     y:500,
//     duration:2,
//     delay:1,
//     backgroundColor:"blue",
//     rotate:360,
//     scale:.5
// })
// from method
// gsap.from("#box1",{
//     x:900,
//     y:500,
//     duration:2,
//     delay:1,
//     backgroundColor:"blue",
//     rotate:360,
//     scale:.5
// })
// gsap.to("h1",{
//     x:500,
//     color:"yellow",
//     duration:2,
//     delay:1,
    // stagger:3,
    // repeat:-1,
    // yoyo:true
// })
// gsap.to("h2",{
//     x:600,
//     color:"salmon",
//     duration:2,
//     delay:3
// })
// gsap.to("h3",{
//     x:600,
//     color:"black",
//     duration:2,
//     delay:4
// })
var t1 = gsap.timeline()
t1.to("h1",{
    x:700,
    stagger:2,
    duration:1
})
t1.to("h2",{
    x:600,
    duration:1
})
t1.to("h3",{
    x:500,
    duration:1
})