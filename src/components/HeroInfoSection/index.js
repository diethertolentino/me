import React from 'react'
import { Button1, Button2, Column1, Column2, HeroBtnWrapper, HeroContainer, HeroH1, HeroP, HeroRow, HeroWrapper, TextWrapper, Span, ImgWrap, Img } from './infoElements'
import Anchorlink from "react-anchor-link-smooth-scroll";
import './info.css';
import Pdf from 'C:/Users/dieth/my-portfolio/src/files/DietherTolentino.pdf'


const HeroInfo = () => {
    return (
        <section id="Hero">
            <HeroContainer>
                <HeroWrapper>
                    <HeroRow>
                        <Column1>
                            <ImgWrap>
                                <Img id="my-image" data-aos="zoom-in"  data-aos-duration="2000" data-aos-delay="1000" src={require('C:/Users/dieth/my-portfolio/src/images/Me.jpg')} />

                            </ImgWrap>
                        </Column1>
                        <Column2>
                            <TextWrapper>
                                <Span data-aos="fade-up" data-aos-duration="2000" data-aos-delay="1000">Hello there! I am</Span>
                                <HeroH1 data-aos="fade-up" data-aos-duration="2000" data-aos-delay="5000">
                                    <span data-aos="fade-up" data-aos-duration="2000" data-aos-delay="1000" style={{ color: "#808080" }}>Diether </span>Tolentino
                                </HeroH1>
                                <HeroP data-aos="fade-up" data-aos-duration="2000" data-aos-delay="500">Graduate of Bachelor of Science in Computer Engineering in
                                    Mindoro State University. Currently a freelance Graphic Designer.
                                    I love creating and designing stuff.
                                </HeroP>
                                <HeroBtnWrapper>
                                    <Anchorlink  style={{ textDecoration: "none" }} href="/contact">
                                    <Button1 data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="2500" ><span style={{ margin: "auto" }}>Get in touch</span></Button1>
                                    </Anchorlink>
                                    <Anchorlink   data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="3000" style={{ textDecoration: "none" }} href= {Pdf} target="_blank">
                                    <Button2><span style={{ margin: "auto" }}>Resume</span></Button2>
                                    </Anchorlink>
                                </HeroBtnWrapper>
                            </TextWrapper>

                        </Column2>

                    </HeroRow>
                </HeroWrapper>
            </HeroContainer>

        </section>
    )
}

export default HeroInfo