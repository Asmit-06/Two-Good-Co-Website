import gsap from "gsap"
import { useEffect } from "react"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/all"
import { useRef } from "react"
import { useMediaQuery } from "react-responsive"
gsap.registerPlugin(ScrollTrigger)
export function Page3(){
 const page3Ref = useRef(null)
 const isMobile = useMediaQuery({maxWidth:425})
  useGSAP(()=>{
   gsap.timeline({
    scrollTrigger:{
      trigger:page3Ref.current,
      start:isMobile?"top 160%":"top 45%",
      
    }
   }).from('.prodDiv1',{
    yPercent:20,
    opacity:0,
    stagger:0.15,
    duration:0.7,
    ease:"power3.out"
   })
  },[isMobile])
  useGSAP(()=>{
   gsap.timeline({
    scrollTrigger:{
      trigger:page3Ref.current,
      start:"top -45%",
      
    }
   }).from('.prodDiv2',{
    yPercent:20,
    opacity:0,
    stagger:0.15,
    duration:0.7,
    ease:"power3.out"
   })
  },[])

  useEffect(()=>{
    const cur = document.querySelector("#cursor")
  const page3 = document.querySelector("#page3")

  const showCursor = () => {
    gsap.to(cur, {
      opacity: 1,
      scale: 1,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  const hideCursor = ()=>{
    gsap.to(cursor, {
      opacity: 0,
      scale: 0,
      duration: 0.5,
      ease: "power2.out",
    });
  }
  const moveCursor = (e) => {
    gsap.to(cursor, {
      x: e.clientX - cursor.offsetWidth / 2,
      y: e.clientY - cursor.offsetHeight / 2,
      duration: 0.1,
      ease: "power2.out",
    });
  };

    

  page3.addEventListener("mouseenter", showCursor);
  page3.addEventListener("mouseleave", hideCursor);
  page3.addEventListener("mousemove", moveCursor);


  })
  return(
    <section id="page3" className="px-6 py-48 flex items-center justify-center relative" ref={page3Ref}>
      <div id="cursor" className="fixed top-0 left-0 pointer-events-none z-[-1] w-60 h-60 bg-[#f7f7f7] rounded-[50%]" />

      <div className="container  grid   lg:grid-cols-2 gap-44">
        <div className="prodDiv1 flex flex-col items-center" >
          <img className="w-full h-full" src="https://cdn.sanity.io/images/w8f1ak3c/production/6e756f1fb46baa494c240edfc85ccbf3a1b2f14f-2000x3000.png/AB5I5869_Sweet_mem_book_NikkiTo-LoRes.png?rect=0,485,2000,2104&fp-x=0.5404411764705882&fp-y=0.5355036764705883&w=1024&h=1077&fit=crop&crop=focalpoint&auto=format" alt="" />
          <p className="text-[13px] font-light">Sweet Memories Cookbook</p>
          <p className="font-extralight text-[12px]">$75</p>
        </div>
        <div className="prodDiv1 flex flex-col  items-center">
          <img className="w-full h-full" src="https://cdn.sanity.io/images/w8f1ak3c/production/eff054cb9dbd394a446ca9ddcadca3c097d1adf5-3635x5453.png/AB5I6014_Nostolgia_Ceramic_Set__NikkiTo.png?rect=0,1589,3635,3530&fp-x=0.5&fp-y=0.6150808823529413&w=1024&h=994&fit=crop&crop=focalpoint&auto=format" alt="" />
          <p className="text-[13px] font-light">Pepe Saya x Two Good Nostalgia Ceramics Set</p>
          <p className="font-extralight text-[12px]">$100</p>
        </div>
        <div className="prodDiv2 flex flex-col items-center"> 
          <img className="w-full h-full object-contain" src="https://cdn.sanity.io/images/w8f1ak3c/production/8fbaadb4a5ccf9db25c26b50adb1fe3cdb039278-3497x5245.png/AB5I5928_Togetherness_At_Our_Table_Set_NikkiTo.png?rect=0,1233,3497,4012&fp-x=0.5&fp-y=0.6175294117647059&w=1024&h=1175&fit=crop&crop=focalpoint&auto=format" alt="" />
          <p className="text-[13px] font-light">Hunter x Two Good Togetherness At Our Table Set</p>
          <p className="font-extralight text-[12px]">$180</p>
        </div>
        <div className="prodDiv2 flex flex-col items-center">
          <img className="w-full h-full object-contain" src="https://cdn.sanity.io/images/w8f1ak3c/production/356bed90c7ff2f4b694a55324cff871e807c900e-3000x2328.png/DD%20Always%20Celebrate%20With%20Cake%20TGC%20(1).png?rect=1,0,2999,2328&w=1024&h=795&auto=format" alt="" />
          <p className="text-[13px] font-light">Dinosaur Designs x Two Good Always Celebrate With Cake Set</p>
          <p className="font-extralight text-[12px]">$480</p>
        </div>
        
      </div>
    </section>
  )
}