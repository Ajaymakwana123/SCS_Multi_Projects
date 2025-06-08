var tl = gsap.timeline();

//timeline 1 by 1 animation show krva
//gsap.set mtlb saru thy tai kevu dekhase
//scale mtlb size .6 mt 60% nani
gsap.set(".a", {
  opacity: 0,
  y: 10,
});
gsap.set("#right img", {opacity: 0, y: 10, scale: 1.6} )

tl.from("#left", {
  width: 0,
  duration: 1.5,
  ease: Expo.easeInOut,
})

  .from("#right", {
    width: 0,
    duration: 1.5,
    ease: Expo.easeInOut,
  })

  //stagger ek jese jitne bhi elemet hai un par delay set krta hai
  .to(".a", {
    delay : -2,
    stagger : .2,
    opacity: 1,
    duration: 2,
    y: 0,
    ease: Expo.easeInOut,
  })
  .to("#right img", {
    scale: 1,
    delay : -2.5,
    stagger : 1,
    opacity: 1,
    duration: 2,
    y: 0,
    ease: Expo.easeInOut,
    onComplete: () => {
        gsap.to("#right img", {
          y: -5, // Image ko thoda upar le jane ke liye
          duration: 1,
          repeat: -1, // Infinite loop
          yoyo: true, // Wapas niche aayega
          ease: "power1.inOut",
        });
    },
  });
