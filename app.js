console.log("jsloaded")
let tween = gsap.to("#heading" ,{
text :  {value:"Welcome to Our Foodie's Hub Restaurant"},
duration: 3,
delay: 1,
ease:SteppedEase.config(24),
})
console.log("jsloaded")

 gsap.to("#heading2" ,{
text :  {value:"Delicious Food Made With Passion"},
duration: 3,
delay: 4,
ease:SteppedEase.config(24),
})

//   gsap.to("#foodcard" ,{
//     text :  {value:""},
//     duration: 3,
//     delay: 1,
//     ease:SteppedEase.config(24),
//     })
    gsap.to("#foodcard1" ,{
        text :  {value:"Cheese Burger"},
        duration: 3,
        delay: 7,
        ease:SteppedEase.config(24),
        })
        gsap.to("#foodcard2" ,{
            text :  {value:"Italian Pizza"},
            duration: 3,
            delay: 7,
            ease:SteppedEase.config(24),
            })
            gsap.to("#foodcard3" ,{
                text :  {value:"Grilled Steak"},
                duration: 3,
                delay: 7,
                ease:SteppedEase.config(24),
                })
                gsap.to("#foodcard4" ,{
                    text :  {value:"Creamy Pasta"},
                    duration: 3,
                    delay: 7,
                    ease:SteppedEase.config(24),
                    })
                    gsap.to("#foodcard5" ,{
                        text :  {value:"Fried Chicken"},
                        duration: 3,
                        delay: 7,
                        ease:SteppedEase.config(24),
                        })
                        gsap.to("#foodcard6" ,{
                            text :  {value:"Healthy Salad"},
                            duration: 3,
                            delay: 7,
                            ease:SteppedEase.config(24),
                            })
                            gsap.to("#card36",{
                                x:300,
                                opacity: 0,
                                duration: 1,
                                delay:10
                            })
                             gsap.to("#card14",{
                                x:-300,
                                opacity: 0,
                                duration: 1,
                                delay:10

                            })
                            gsap.to("#btn", {
  scale: 1.1,
  duration: 0.8,
  repeat: -1,
  yoyo: true,
  ease: "power1.inOut"
});
gsap.from("#btn", {
  y: 50,
  opacity: 0,
  duration: 1,
  ease: "back.out(1.7)"
});
gsap.from("#card123", {
  scale: 1.3,
  duration: 1,
  ease: "power2.out"
});
gsap.from("#ocard1", {
  x: -300,
  duration: 1,
  ease: "power2.out"
});

gsap.from("#ocard2", {
  x: 300,
  duration: 1,
  ease: "power2.out"
});
gsap.from("#hzoom", {
  scale: 0.5,
  opacity: 0,
  duration: 1
});
gsap.from("#hslide", {
  x: -100,
  opacity: 0,
  duration: 1
});
gsap.to("body", {
  backgroundColor: "#222",
  duration: 2
});
gsap.to("body", {
  backgroundColor: "black",
  duration: 2,
  repeat: -1,
  yoyo: true
});