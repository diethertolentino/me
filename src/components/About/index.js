import React from 'react'
import { AboutContainer, AboutCard, AboutH1, AboutH2, AboutH3, ImgWrap, Img, AboutP, AboutName } from './aboutElements'

function AboutMe() {
    return (
        <section id="about-me">
            <AboutContainer>
                
            <AboutH1 data-aos="fade-up" data-aos-duration="3000">About Me</AboutH1>
                <AboutCard>
                    <AboutH2 data-aos="fade-up" data-aos-duration="2000">“Talent is something you make bloom, instinct is something you polish.”</AboutH2>
                    <AboutH3 data-aos="fade-up" data-aos-duration="2000">-Oikawa Tooru</AboutH3>
                </AboutCard>
                <AboutCard>
                    <ImgWrap>
                        <Img data-aos="fade-up" data-aos-duration="500" src={require('C:/Users/dieth/my-portfolio/src/images/Me.jpg')} />
                    </ImgWrap>
                </AboutCard>
                <AboutCard></AboutCard>
                <AboutCard>
                    <AboutName data-aos="fade-up" data-aos-duration="2000">Diether M. Tolentino</AboutName>
                    <hr data-aos="fade-down" data-aos-duration="2000" style={{ float:"left", width: "30%" }}></hr>
                    <AboutP data-aos="fade-up" data-aos-duration="2000">Hello. My name is Diether. I am currently a freelance Graphic Designer/Illustrator. I have good and deep knowledge of good designs and principles. I work as a Graphic Designer/Illustrator and build knowledge in multimedia arts specializing in Vector Illustration. During my free time, I am practicing programming.</AboutP>
                    <AboutP data-aos="fade-up" data-aos-duration="2000">As a Computer Engineering graduate and Graphic Designer, I like designing and developing stuff. I have a strong will to learn and develop my skills to create elegant and professional-looking user interfaces and enhance the human experience. I also have an interest in artificial intelligence, machine learning, robotics, and data science.</AboutP>
                    <AboutP data-aos="fade-up" data-aos-duration="2000">I am from The Philippines, I graduated Bachelor's Degree in Computer Engineering from Mindoro State University. I started designing and drawing at a young age and most of my design skills are self-taught. I got into programming later when I entered college. I was amazed at the things that I can do with programming, from robotics and software development. Combining my love of arts and design with my programming knowledge, I continue learning and enhancing myself to build professional and interactive user interfaces.</AboutP>      
                    <hr data-aos="fade-down" style={{ float:"right", width: "30%" }}></hr>
                    </AboutCard>
            </AboutContainer>

        </section>
    )
}

export default AboutMe
