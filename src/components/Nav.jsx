import gsap from "gsap"
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger)

export function Nav() {
  const ulRef = useRef(null)
  useGSAP(()=>{
    
    gsap.to(ulRef.current,{
      scrollTrigger:{
        trigger:document.body,
        start:"top -60",
        end:"top -140",
        scrub:true,
        
       
      },y:-20,
      opacity:0,
      ease:"power2.out",
    

    })
  },[])
  return (
    <nav className="relative px-6 py-6 pr-48">
      {/* LEFT LOGO */}
      <div className="font-bold text-4xl leading-[0.8] tracking-tighter fixed">
        <h2>
          TWO <br /> GOOD <br />
          CO.
        </h2>
      </div>

      {/* CENTER LINKS (SCROLL NORMALLY) */}
      <ul className="absolute fixed top-6 right-48 flex uppercase font-light text-[12px] gap-16 cursor-pointer" ref={ulRef}>
        <li>Shop</li>
        <li>Wholesale</li>
        <li>Catering</li>
        <li>Donate</li>
      </ul>

      {/* FIXED ICONS */}
      <div className="fixed top-5 right-6 z-50 flex gap-14 text-lg">
        <span className="cursor-pointer">&#9776;</span>
        <span className="cursor-pointer">&#128722;</span>
      </div>
    </nav>
  );
}
