window.addEventListener("wheel", (dets) => {
  console.log(dets.deltaY);

  if (dets.deltaY > 0) {
    gsap.to("#marque", {
      transform: "translateX(-200%)",
      duration: 12,
      ease:"none",
      repeat:-1
    });

    gsap.to("i",{
        rotate:180
    })
  } else{
    gsap.to("#marque", {
        transform: "translateX(-0%)",
        duration:12,
        ease:"none",
        repeat:-1
      });
  
      gsap.to("i",{
          rotate:0
      })
  }
});
