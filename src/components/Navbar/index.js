import React from 'react'
import { Nav, NavMenu } from './NavbarElements';
import './navbar.css';
import Anchorlink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
    return (
        <Nav>
            <Anchorlink class="anchor-link" data-aos="fade-down" data-aos-duration="3000" data-aos-delay="20" href="#Hero">
            <svg width="50px" height="50px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100.22 95.67"><path d="M0,59.23v9.11A27.34,27.34,0,0,0,27.33,95.67h0V31.89h0A27.34,27.34,0,0,0,0,59.23Z" transform="translate(0 0)"/><path d="M100.22,31.89H63.78V27.33A27.34,27.34,0,0,0,36.44,0h0V68.34A27.34,27.34,0,0,0,63.78,95.67h0V59.23h9.11A27.34,27.34,0,0,0,100.22,31.89Z" transform="translate(0 0)"/><path d="M72.89,95.67h0a27.34,27.34,0,0,0,27.33-27.33H72.89Z" transform="translate(0 0)"/></svg>
            </Anchorlink>
            <NavMenu>
                {/* <Anchorlink class="anchorLink" style={{ textDecoration: "none" }} href="#Works"> */}
                <Anchorlink class="anchor-link" data-aos="fade-down" data-aos-duration="3000" data-aos-delay="100" activeStyle href="#Works">
                    <span class="link pad underline-hover">works</span>
                </Anchorlink>
                {/* </Anchorlink> */}
                <Anchorlink class="anchor-link" data-aos="fade-down" data-aos-duration="3000" data-aos-delay="200" activeStyle href="#my-skills">
                    <span class="link underline-hover">skills</span>
                </Anchorlink>
                <Anchorlink class="anchor-link" data-aos="fade-down" data-aos-duration="3000" data-aos-delay="400" href="/about-me" activeStyle>
                    <span class="link underline-hover">about me</span>
                </Anchorlink>
                <Anchorlink class="anchor-link" data-aos="fade-down" data-aos-duration="3000" data-aos-delay="600" href="/contact" activeStyle>
                    <span class="link underline-hover">contact</span>
                </Anchorlink>
            </NavMenu>
            <div class="relative soc-med">
                <a class="icon-link" href='https://www.instagram.com/istdeedeets' target="_blank" onclick="window.open('https://instagram.com/istdeedeets', '_self');">
                    <svg data-aos="zoom-in" data-aos-duration="500" data-aos-delay="2000" class="imedia" fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" >    <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z" /></svg>
                </a>
                <a class="icon-link" href='https://www.linkedin.com/in/diether-tolentino-3ba123167/' target="_blank">
                    <svg data-aos="zoom-in" data-aos-duration="500" data-aos-delay="2500" class="imedia" fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="60px" height="60px">    <path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M10.496,8.403 c0.842,0,1.403,0.561,1.403,1.309c0,0.748-0.561,1.309-1.496,1.309C9.561,11.022,9,10.46,9,9.712C9,8.964,9.561,8.403,10.496,8.403z M12,20H9v-8h3V20z M22,20h-2.824v-4.372c0-1.209-0.753-1.488-1.035-1.488s-1.224,0.186-1.224,1.488c0,0.186,0,4.372,0,4.372H14v-8 h2.918v1.116C17.294,12.465,18.047,12,19.459,12C20.871,12,22,13.116,22,15.628V20z" /></svg>
                </a>
                <a class="icon-link"  href='https://twitter.com/deedeets024' target="_blank">
                    <svg data-aos="zoom-in" data-aos-duration="500" data-aos-delay="3000" class="imedia" fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="60px" height="60px">    <path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z" /></svg>
                </a>
            </div>
        </Nav>
    )
}

export default Navbar