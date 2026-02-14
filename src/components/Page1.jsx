import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export function Page1({ page1Ref }) {
  useGSAP(() => {
    gsap.set(lineRef.current, { xPercent: -100 });
   
  }, []);
  
  const lineRef = useRef(null);
 
  const handleEnter = () => {
    gsap.to(lineRef.current, {
      xPercent: 0,
      duration: 0.4,
      ease: "power2.out",
    });
  
  
  };

  const handleLeave = ()=>{
    gsap.to(lineRef.current, {
      xPercent: -100,
      duration: 0.4,
      ease: "power2.out",
    });
  }
  


  return (
    <section
      id="page1"
      className="px-6 py-6 mt-38 flex flex-col items-center"
      ref={page1Ref}
    >
      <h1 className="page1h1 font-bold text-[33vh] tracking-tighter leading-[26vh] mb-1.5">
        {["CHANGE", "THE", "COURSE"].map((word, i) => (
          <span key={i} className="word inline-block mr-6">
            {word}
          </span>
        ))}
      </h1>
      <div className="imgDiv overflow-hidden h-[120vh]">
        <img
          src="https://cdn.sanity.io/images/w8f1ak3c/production/4762aea084d2536f58a2c3725f35f9b8a860f498-2000x3000.jpg/Anjali-XDN_1530%20copy.jpg?rect=0,654,2000,1509&fp-x=0.5&fp-y=0.4351139705882352&w=1920&h=1042&fit=crop&crop=focalpoint&auto=format"
          alt=""
          className="img"
        />
      </div>

      <div className="page1text text flex flex-col items-center">
        <h2 className="font-bold text-5xl mb-5">LATHER. RINSE. REBUILD.</h2>
        <p className="text-[13px] tracking-tight mb-5">
          Nourishes the skin. Promotes healing. Supports women living in crisis.
        </p>
        <p className="text-[13px] tracking-tight font-extralight cursor-pointer">
          SHOP SOAPS TODAY.
        </p>
        <div className=" cursor-pointer overflow-hidden" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
          <div
            className="line bg-black w-[7vw] h-[1px] mt-2"
            ref={lineRef}
           
          ></div>
         
        </div>
      </div>
    </section>
  );
}
