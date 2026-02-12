import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger)

export function Footer() {

  useGSAP(()=>{
    gsap.timeline(
      {
        scrollTrigger:{
          trigger:"#footer",
          start:"top 80%",
        }
      }
    ).from("h1",{
      opacity:0,
      xPercent:-100,
      ease:"power3.out",
      duration:0.6
    }).from("span",{
      opacity:0,
      ease:"power3.out",
      duration:0.6
    },"<")
  },[])


  useGSAP(()=>{
    gsap.timeline(
      {
        scrollTrigger:{
          trigger:"#footer",
          start:"top 65%",
        }
      }
    ).from("svg path",{
      opacity:0,
    
      ease:"power3.out",
      stagger:0.13
    })
  },[])

  
  return (
    <footer id="footer" className="px-6 py-6 flex flex-col ">
      <div className="email ">
        <div className="flex justify-between items-center">
          <h1 className="uppercase font-bold text-5xl tracking-tight">
            enter your email address for good
          </h1>
          <span className="text-2xl">&#10132;</span>
        </div>
        <div className="emailLine w-full h-px bg-gray-800 mt-3"></div>
      </div>

      <div className="links mt-46 mb-18">
        <div className="flex items-center justify-between">
          <div className="left text-[13px]">
            <p className="uppercase text-gray-400 text-[12px] mb-4">connect with us</p>
            <p>Facebook</p>
            <p>Youtube</p>
            <p>Twitter</p>
            <p>Linkedin</p>
            <p>Instagram</p>
          </div>
          <div className="svg">
            <svg
              width="216"
              height="215"
              viewBox="0 0 216 215"
              fill="black"
              xmlns="http://www.w3.org/2000/svg"
              style={{ overflow: "visible" }}
            >
              <path
                d="M51.7757 0C38.0521 0 24.8906 5.43423 15.1866 15.1072C5.48261 24.7802 0.0309982 37.8997 0.0309982 51.5794C0.0309982 65.2591 5.48261 78.3785 15.1866 88.0515C24.8906 97.7245 38.0521 103.159 51.7757 103.159C65.4992 103.159 78.6607 97.7245 88.3647 88.0515C98.0687 78.3785 103.52 65.2591 103.52 51.5794C103.52 37.8997 98.0687 24.7802 88.3647 15.1072C78.6607 5.43423 65.4992 0 51.7757 0Z"
                fill="var(--foreground)"
                transform="matrix(1,0,0,1,0,0)"
                style={{ transformOrigin: "0px 0px", opacity: 1 }}
              />

              <path
                d="M163.911 0C150.187 0 137.026 5.43423 127.322 15.1072C117.618 24.7802 112.166 37.8997 112.166 51.5794C112.166 65.2591 117.618 78.3785 127.322 88.0515C137.026 97.7245 150.187 103.159 163.911 103.159C177.634 103.159 190.796 97.7245 200.5 88.0515C210.204 78.3785 215.655 65.2591 215.655 51.5794C215.655 37.8997 210.204 24.7802 200.5 15.1072C190.796 5.43423 177.634 0 163.911 0Z"
                fill="var(--foreground)"
                transform="matrix(1,0,0,1,0,0)"
                style={{ transformOrigin: "0px 0px", opacity: 1 }}
              />

              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 129.002L17.3035 111.753L51.795 146.135L86.2649 111.775L103.568 129.023L69.0982 163.383L103.562 197.737L86.2586 214.985L51.7947 180.631L17.3099 215.006L0.00634766 197.758L34.4914 163.383L0 129.002Z"
                fill="var(--foreground)"
                transform="matrix(1,0,0,1,0,0)"
                style={{ transformOrigin: "0px 0px", opacity: 1 }}
              />

              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M112.128 128.988L129.431 111.739L163.923 146.121L198.393 111.761L215.696 129.009L181.226 163.369L215.69 197.722L198.386 214.971L163.923 180.617L129.438 214.992L112.134 197.744L146.619 163.369L112.128 128.988Z"
                fill="var(--foreground)"
                transform="matrix(1,0,0,1,0,0)"
                style={{ transformOrigin: "0px 0px", opacity: 1 }}
              />
            </svg>
          </div>
          <div className="right text-[13px]">
         
            <p className="uppercase text-gray-400 text-[12px] mb-4">The nitty gritties</p>
            <p>Good Things FAQs</p>
            <p>Good Food FAQ</p>
            <p>Good Places</p>
            <p>Pathways</p>
            <p>Careers</p>
            <p>WholeSale</p>
          </div>
        </div>
      </div>

      <div className="flex gap-6 text-[12px] font-light uppercase tracking-tight text-gray-400 mx-auto">
        <p>© Two Good Co. 2026</p>
        <p>Terms of Use</p>
        <p>privacy policy</p>
      </div>

      <div className="mx-auto text-center text-[13px] w-6xl mt-10">
        <p>We are proud and privileged to have our home on this land, and to be able to continue the long tradition of community coming together around food, begun thousands of years ago by First Nations peoples. As we stand together on this unceded land, we acknowledge our First Nations people, are the original custodians of this land, and we recognise their deep connection to land, water, sky and community which continues today. We pay our deep respects to community elders, past, present and emerging, for they hold the memories, the traditions, the culture and hopes of Aboriginal and Torres Strait Islander peoples. Always was, always will be Aboriginal land.</p>
      </div>
    </footer>
  );
}
