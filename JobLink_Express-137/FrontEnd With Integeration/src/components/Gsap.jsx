// import Home from "../pages/HomePage";
// import NavBar from "./NavBar";

// function GsapAnim() {
//     let tl = new gsap.timeline();
//     let ease = Power3.easeOut;
//     return ( <>
//      <div className="hero">
//         <div className="gsap_container">
//         <Home timeline = {tl}/>
//         </div>
//     </div>
//     </> );
// }

// export default GsapAnim;
import { useEffect } from 'react';
import gsap from 'gsap';

const GsapAnim = ({ elements, timelineOptions }) => {
    useEffect(() => {
        const tl = gsap.timeline(timelineOptions);

        tl.from(elements, {
            opacity: 0,
            y: '100',
            skewY: 10,
            stagger: {
                amount: .4
            }
        });
    }, [elements, timelineOptions]);
    return null;
};

export default GsapAnim;
