import './App.css'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import { Nav } from './components/Nav'
import { Page1 } from './components/Page1'
import { Page2 } from './components/Page2';
import { Page3 } from './components/Page3';
import { Messages } from './components/Messages';
import { Impact } from './components/Impact';
function App() {

  const navRef = useRef(null);
  const page1Ref = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    const words = gsap.utils.toArray('.word')
    
    tl.from(navRef.current, {
      y: -40,
      opacity: 0,
      duration: 0.8,
      
    })
    .from(
      words,
      {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger:0.2
      },
      
    ).from('.imgDiv',{
      opacity:0,
      ease:'power1.inOut',
      duration:0.4
    })
    .fromTo('.img',{
      
      scale:1.1
    },{
      scale:1,
      ease:"power1.inOut",
      duration:0.3
    },"-=0.3" )
  }, []);

 return(
  <>
  <Nav  navRef={navRef}/>
  <Page1 page1Ref={page1Ref}/>
  <Page2/>
  <Page3/>
  <Messages/>
  <Impact/>
  </>
 
 )
}

export default App
