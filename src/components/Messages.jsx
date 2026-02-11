import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useRef, useState } from "react";
gsap.registerPlugin(ScrollTrigger);
export function Messages() {
  const msgs = [
    "HOW GOOD IS YOUR COOKBOOK!? OH MY, OH MY; I AM GOING TO HAVE NO ISSUES WORKING MY WAY THROUGH IT THIS YEAR, IT’S ALL SO BLOODY DELICIOUS.",
    "AN IMMENSELY GREAT COMPANY... AND WHAT A GREAT CAUSE DRIVING THE BUSINESS.",
    "THANK YOU SO MUCH FOR THE BEAUTIFUL MEALS - IT HAS MADE A GREAT DIFFERENCE TO US!",
    "BEST SHAMPOO + CONDITIONER - VERY HAPPY!",
    "THANK YOU SO MUCH FOR THE BEAUTIFUL CATERING; IT MEANS A LOT WORKING WITH A COMPANY SUCH AS TWO GOOD CO.",
  ];

  const [isActive, setisActive] = useState(0);

  const handleActive = (index) => {
    setisActive(index);

    gsap.from('.peopleMsg p',{
      opacity:0,
      yPercent:50,
      ease:"power3.out",
      duration:0.6
    })
  };
  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#messages",
          start: "top 80%",
        },
      })
      .from(".msgLine", {
        width: "0%",
        opacity: 0,
        duration: 0.7,
        ease: "power1.inOut",
      })
      .from(
        ".testimonials div",
        {
          opacity: 0,
          ease: "power1.inOut",
        },
        "<"
      );
  }, []);
  return (
    <section id="messages" className="px-6 py-6 flex flex-col gap-18 ">
      <div className="msg flex flex-col">
        <div className="flex justify-between text-[12px] font-extralight tracking-tight">
          <p>WORDS OF GOODNESS</p>
          <p>MESSAGES OF LOVE & SUPPORT</p>
        </div>
        <div className="msgLine w-full h-[1px] bg-black"></div>
      </div>

      <div className="testimonials flex justify-between px-10">
        <div className="flex flex-col gap-6">
          <div
            onClick={() => handleActive(0)}
            className={`w-4 h-4 border rounded-full cursor-pointer ${
              isActive === 0 ? "bg-black" : ""
            }`}
          ></div>
          <p className="leading-6  text-2xl">
            m// 0023 <br />
            Annbel.
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <div
            onClick={() => handleActive(1)}
            className={`w-4 h-4 border rounded-full cursor-pointer ${
              isActive === 1 ? "bg-black" : ""
            }`}
          ></div>
          <p className="leading-6  text-2xl">
            m// 0024 <br />
            Lukus W.
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <div
            onClick={() => handleActive(2)}
            className={`w-4 h-4 border rounded-full cursor-pointer ${
              isActive === 2 ? "bg-black" : ""
            }`}
          ></div>
          <p className="leading-6  text-2xl">
            m// 0025 <br />
            Claire M.
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <div
            onClick={() => handleActive(3)}
            className={`w-4 h-4 border rounded-full cursor-pointer ${
              isActive === 3 ? "bg-black" : ""
            }`}
          ></div>
          <p className="leading-6  text-2xl">
            m// 001 <br />
            Chrissy Nolan.
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <div
            onClick={() => handleActive(4)}
            className={`w-4 h-4 border rounded-full cursor-pointer ${
              isActive === 4 ? "bg-black" : ""
            }`}
          ></div>
          <p className="leading-6  text-2xl">
            m// 002 <br />
            Cartier.
          </p>
        </div>
      </div>

      <div className="peopleMsg mx-auto flex flex-col gap-8 items-center w-[85rem]">
        {isActive !== null && (
          <p className="font-bold text-7xl uppercase tracking-tight text-center mt-4 mb-10">
            {msgs[isActive]}
          </p>
        )}

        <button className="text-white text-[13px] bg-black px-20 py-6 rounded-[50px] cursor-pointer">
          SEND YOUR OWN MESSAGE
        </button>
        <p className="leading-4 text-center font-light">
          Sometimes it’s the smallest actions <br /> that can make the biggest
          impact.
        </p>
      </div>
    </section>
  );
}
