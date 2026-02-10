import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);
export function Page2() {
  const sectionRef = useRef(null);
  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
        },
      })
      .from(".imgdiv", {
        opacity: 0,
        duration: 0.4,
        ease: "power1.inOut",
        stagger: 0.13,
      })
      .from(
        ".imgdiv img",
        {
          scale: 1.1,
          duration: 0.4,
          stagger: 0.13,
        },
        "<"
      );
  });

   useGSAP(()=>{
    gsap
      .timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 30%",
          end:"bottom center",
          scrub:true
        },
      }).to('.shop',{
        yPercent:300,
        
      })
   })
   const lineRef = useRef(null);

  useGSAP(() => {
    gsap.set(lineRef.current, { xPercent: -100 });
  }, []);



  const handleEnter = () => {
    gsap.to(lineRef.current, {
      xPercent: 0,
      duration: 0.4,
      ease: "power2.out",
    });
  };

  const handleLeave = () => {
    gsap.to(lineRef.current, {
      xPercent: -100,
      duration: 0.4,
      ease: "power2.out",
    });
  };

  return (
    <section id="page2" className="px-6 py-6" ref={sectionRef}>
      {/* HEADLINE */}
      <div className="headline flex flex-col">
        <div className="paras text-[13px] font-extralight flex justify-between">
          <p>BUY GOOD</p>
          <p>DO GOOD</p>
        </div>
        <div className="w-full bg-black h-[1px]" />
      </div>

      {/* IMAGES ROW */}
      <div className="images flex gap-4 mt-4">
        {/* IMAGE WITH OVERLAY CARD */}
        <div className="imgdiv flex-1 overflow-hidden h-[110vh] relative">
          <img
            className="w-full h-full object-cover"
            src="https://cdn.sanity.io/images/w8f1ak3c/production/436dc55529165898c0ecc8299c9ef541252d38dc-3490x5236.jpg/EDITED-AB5I5446_PhotoCredit-Nikki-To.jpg?rect=0,1090,3490,4146&fp-x=0.5&fp-y=0.6040625&w=640&h=1067&fit=crop&crop=focalpoint&auto=format"
            alt=""
          />
          <div className="shop absolute flex items-center gap-4 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 px-7 py-4 rounded-full cursor-pointer bg-white">
            <span className="text-[14px]">&bull;</span>
            <p className="text-[12px] font-light">SHOP</p>
            <p className="text-[12px] font-medium">HOME + KITCHEN</p>
            <span className="text-[12px]">&gt;</span>
          </div>
        </div>

        <div className="imgdiv flex-1 overflow-hidden h-[110vh] relative">
          <img
            className="w-full h-full object-cover"
            src="https://cdn.sanity.io/images/w8f1ak3c/production/3b7505a10fa639d6496e673996e333930257f5f8-786x1106.png/Screenshot%202025-09-04%20at%201.59.42%E2%80%AFPM.png?rect=62,0,663,1106&w=640&h=1067&fit=min&auto=format"
            alt=""
          />
           <div className="shop absolute flex items-center gap-4 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 px-10 py-4 rounded-full cursor-pointer bg-white">
            <span className="text-[14px]">&bull;</span>
            <p className="text-[12px] font-light">SHOP</p>
            <p className="text-[12px] font-medium">BATH</p>
            <span className="text-[12px]">&gt;</span>
          </div>
        </div>

        <div className=" imgdiv flex-1 overflow-hidden h-[110vh] relative">
          <img
            className="w-full h-full object-cover"
            src="https://cdn.sanity.io/images/w8f1ak3c/production/9917c06d3f69596fba7a68f571f4691df5e40028-1778x1912.png/Screenshot%202025-06-18%20at%204.26.53%E2%80%AFPM.png?rect=316,0,1147,1912&w=640&h=1067&fit=min&auto=format"
            alt=""
          />
           <div className="shop absolute flex items-center gap-4 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 px-7 py-4 rounded-full cursor-pointer bg-white">
            <span className="text-[14px]">&bull;</span>
            <p className="text-[12px] font-light">SHOP</p>
            <p className="text-[12px] font-medium">DONATE</p>
            <span className="text-[12px]">&gt;</span>
          </div>
        </div>
      </div>

      <div className="extra mt-12 flex justify-between pr-44">
        <h1 className="font-bold text-6xl uppercase tracking-tight">
          We believe in people, <br /> until they believe in <br />
          themselves again.
        </h1>
        <div className="flex flex-col w-[20vw] ">
          <p className="tracking-tight font-light mb-5">
            Everything we do is designed to rebuild self worth and independence,
            in order to break free from the cycle of disadvantage.
          </p>
          <p className="tracking-tight font-light mb-5">
            With every purchase you make with us, you're helping to change the
            course of someone's life; you're walking alongside vulnerable women
            as they find their way home again.
          </p>
          <p className="text-[12px] font-extralight tracking-tight">
            SHOP TO SUPPORT
          </p>
          <div
            className=" cursor-pointer overflow-hidden"
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
          >
            <div
              className="line bg-black w-[6vw] h-[1px] mt-2"
              ref={lineRef}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
