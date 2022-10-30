import React from 'react'
import { ContactCard, ContactContainer, ContactWrapper, ContactH1, ContactH2, ContactH3, A, ContactIcon } from './contactElements'
import './contact.css';

function Contact() {
  return (
    <section id="contact">
      <ContactContainer>
        <ContactWrapper>
          <ContactH1 data-aos="fade-up" data-aos-duration="3000">Contact</ContactH1>
          <ContactCard>
            <ContactH2 data-aos="flip-up" data-aos-duration="1000" data-aos-delay="1000" >Hello there, thank you for visiting my website.</ContactH2>
            <ContactH3 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000">Let us work together!</ContactH3>
            <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="4000"  style={{ textAlign: "center", paddingTop: "30px" }}>
              <A href="mailto:diethertolentino2324@gmail.com">diethertolentino2324@gmail.com</A>
            </div>
            <ContactIcon>
              <a class="icon-link" href="https://instagram.com/istdeedeets" target="_blank" onclick="window.open('https://instagram.com/istdeedeets', '_self');">
                <div class="icon-wrap">
                <svg style={{ marginLeft: "30px", marginRight: "30px" }} data-aos="zoom-in" data-aos-duration="500" data-aos-delay="2000" class="imedia" fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="50px" height="50px">    <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z" /></svg>
                </div>
              </a>
              <a class="icon-link" href="https://www.linkedin.com/in/diether-tolentino-3ba123167/" target="_blank" onclick="window.open('https://www.linkedin.com/in/diether-tolentino-3ba123167/', '_self');">
                <svg style={{ marginLeft: "30px", marginRight: "30px" }} data-aos="zoom-in" data-aos-duration="500" data-aos-delay="2500" class="imedia" fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="50px" height="50px">    <path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M10.496,8.403 c0.842,0,1.403,0.561,1.403,1.309c0,0.748-0.561,1.309-1.496,1.309C9.561,11.022,9,10.46,9,9.712C9,8.964,9.561,8.403,10.496,8.403z M12,20H9v-8h3V20z M22,20h-2.824v-4.372c0-1.209-0.753-1.488-1.035-1.488s-1.224,0.186-1.224,1.488c0,0.186,0,4.372,0,4.372H14v-8 h2.918v1.116C17.294,12.465,18.047,12,19.459,12C20.871,12,22,13.116,22,15.628V20z" /></svg>
              </a>
              <a class="icon-link"  href="https://twitter.com/deedeets024" target="_blank" onclick="window.open('https://twitter.com/deedeets024', '_self');">
                <svg style={{ marginLeft: "30px", marginRight: "30px" }} data-aos="zoom-in" data-aos-duration="500" data-aos-delay="3000" class="imedia" fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="50px" height="50px">    <path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z" /></svg>
              </a>
            </ContactIcon>
          </ContactCard>
        </ContactWrapper>
      </ContactContainer>
    </section>
  )
}

export default Contact
