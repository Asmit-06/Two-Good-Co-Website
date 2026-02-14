import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/all"
gsap.registerPlugin(ScrollTrigger)
export function Impact(){

  useGSAP(()=>{
    gsap.timeline({
      scrollTrigger:{
        trigger:'#impact',
        start:"top 35%"
      }
    }).from(".right img",{
      opacity:0,
       scale:1.1,
      duration:0.5,
      ease:"power1.inOut",
      stagger:0.14
    })
  },[])
  return(
    <section id="impact" className="px-6 pt-96 pb-20
     flex gap-56 ">
       <div className="left w-[22%]  flex flex-col ">
          <h1 className="uppercase font-bold text-2xl mb-6">Our impact.</h1>
          <p className="tracking-tight font-light mb-6">The thing is, we don't save anyone.</p>
          <p className="tracking-tight font-light mb-6">What we do is provide a safe space for women to change the course of their own lives.</p>
          <p className="tracking-tight font-light mb-6">After many years of living in crisis, abuse and complex trauma, restoring self-worth is foundational for independence. We believe that through experiences that promote love and respect, we can spark and nurture a sense of self-worth for those on the path of healing.</p>
          <p className="font-light text-[12px] tracking-wide">HERE'S HOW WE DO IT</p>
          <div
              className="line bg-black w-[7.3vw] h-[1px] mt-2"
            
            ></div>
       </div>
       <div className="right flex gap-6  w-[32%]">
          <img className="w-full h-full " src="https://cdn.sanity.io/images/w8f1ak3c/production/84da7b8b510e006ce0ca22769d93bb6c044945f6-5504x8256.jpg/Patricia-Work-Work-Good-Stories-Two-Good-Co.jpg?rect=0,56,5504,8144&w=640&h=947&fit=min&auto=format" alt="" />
          <img className="w-full h-full  " src="https://cdn.sanity.io/images/w8f1ak3c/production/c361b79ee29066d538713b1304dc94babf233c96-5504x8256.jpg/JSB_5798.jpg?rect=0,56,5504,8144&w=640&h=947&fit=min&auto=format" alt="" />

         
       </div>
    </section>
  )
}