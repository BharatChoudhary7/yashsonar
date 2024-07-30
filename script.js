
  
  function loader() {
    var tl = gsap.timeline();
  
    tl.from(".loader span", {
      x: 100,
      duration: 1.2,
      stagger: 0.03,
      delay: 0.1,
    });
    tl.to(".loader span", {
      x: -100,
      duration: 0.6,
      opacity: 0,
      stagger: 0.03,
    });
    tl.to(".loader", {
      duration: 0.5,
      opacity: 0,
      display: "none",
    });
  
    tl.from("#hero #content h1 span", {
      y: 120,
      opacity: 0,
      stagger: 0.2,
      duration: 0.5,
    });
  }

  loader();


  gsap.fromTo('#problem1', 
  {
    y:120,
    opacity:0,
    duration:3

  }, {
    y:30,
    opacity:1,
    stagger:1,
    duration:2,
    scrollTrigger: {
        
        trigger: "#Problems",
        start: " 30px top",
        end: "top 89%",
        duration: 5,
        scrub: 1,
        
      },
  })
  


