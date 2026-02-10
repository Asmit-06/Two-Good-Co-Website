import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export function Nav() {
  const ulRef = useRef(null);

  useGSAP(() => {
    gsap.to(ulRef.current, {
      scrollTrigger: {
        trigger: document.body,
        start: "top -20",
        end: "top -140",
        scrub: true,
      },
      y: -20,
      opacity: 0,
      ease: "power2.out",
    });
  }, []);

  return (
    <>
    
      <div className="fixed top-6 left-6 z-50 font-bold text-4xl leading-[0.8] tracking-tighter">
        <h2>
          TWO <br /> GOOD <br /> CO.
        </h2>
      </div>

    
      <div className="fixed top-5 right-6 z-50 flex gap-14 text-lg bg-white rounded-[50px] px-2 py-1">
        <span className="cursor-pointer">&#9776;</span>
        <span className="cursor-pointer">&#128722;</span>
      </div>

      <ul
        ref={ulRef}
        className="fixed top-6 right-48 flex uppercase font-light text-[12px] gap-16 cursor-pointer"
      >
        <li>Shop</li>
        <li>Wholesale</li>
        <li>Catering</li>
        <li>Donate</li>
      </ul>
    </>
  );
}
