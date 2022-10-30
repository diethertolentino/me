import React from 'react'
import './sideBar.css'


const { useState, useEffect } = React;

function Sidebar() {
    const [isVisible, setIsVisible] = useState(true);
    const [height, setHeight] = useState(0);
    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
        return () =>
            window.removeEventListener("scroll", listenToScroll);
    }, [])

    const listenToScroll = () => {
        let heightToHideFrom = 850;
        const winScroll = document.body.scrollTop ||
            document.documentElement.scrollTop;
        setHeight(winScroll);

        if (winScroll <= heightToHideFrom) {
            isVisible && setIsVisible(false);
        }
        else {
            setIsVisible(true);
        }
    };
    return (

        isVisible &&
        <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" id="container">
            {/* <div id="height">
                <b>height: {height} - {isVisible ? "show" : "hide"}</b>
            </div> */}
            {
                <div  id="hide side-container">
                    <nav id="nav-wrapper">
                    <a data-aos="fade-up" data-aos-duration="800" class="link-right anchor-link" activeStyle href="#Works">
                         <span class="link pad underline-hover">works</span>
                     </a>
                     <a data-aos="fade-up" data-aos-duration="800" class="link-right anchor-link" activeStyle href="#my-skills">
                         <span class="link underline-hover">skills</span>
                     </a>
                     <a class="link-right anchor-link" href="#about-me" activeStyle>
                         <span class="link underline-hover">about me</span>
                     </a>
                     <a class="link-right anchor-link" href="#contact" activeStyle>
                         <span class="link underline-hover">contact</span>
                     </a>
                 </nav>
                </div>
            }
        </div>
        // <div class="height side-container" >
        //     <div class="side-wrapper">
        //         <nav>
        //             <a class="anchor-link" data-aos="fade-down" data-aos-duration="3000" data-aos-delay="100" activeStyle href="#Works">
        //                 <span class="hey link pad underline-hover">works</span>
        //             </a>
        //             <a class="anchor-link" data-aos="fade-down" data-aos-duration="3000" data-aos-delay="200" activeStyle href="#my-skills">
        //                 <span class="hey link underline-hover">skills</span>
        //             </a>
        //             <a class="anchor-link" data-aos="fade-down" data-aos-duration="3000" data-aos-delay="400" href="#about-me" activeStyle>
        //                 <span class="hey link underline-hover">about me</span>
        //             </a>
        //             <a class="anchor-link" data-aos="fade-down" data-aos-duration="3000" data-aos-delay="600" href="#contact" activeStyle>
        //                 <span class="link underline-hover">contact</span>
        //             </a>
        //         </nav>
        //     </div>

        // </div >

    )
}

export default Sidebar
