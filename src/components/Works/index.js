import React from 'react'
import "aos/dist/aos.css"
import { WorksContainer, WorksH1, WorksWrapper, WorksCard, WorksImage, WorksH2, WorksP } from './worksElements'
import Aos from 'aos'
import Sidebar from '../Sidebar'
import { useEffect } from 'react'
import "./work.css"



const Works = () => {
    useEffect(() => {
        Aos.init({duration: 5000});
    }, []);
  return (
    <>
    <section id="Works">  
    
        <WorksContainer >   
            
            <WorksH1 data-aos="fade-up" data-aos-duration="3000" >Works <br /><span style={{marginLeft: "15px" }}>& Projects</span></WorksH1>
            <WorksWrapper>
                <WorksCard > <a class="work-link underline-effect" href='https://www.behance.net/deets' target='_blank'>
                    <WorksImage data-aos="fade-up" data-aos-duration="800" src={ require('C:/Users/dieth/my-portfolio/src/images/minsu.png')}/>
                    <WorksH2>Behance.net Portfolio</WorksH2>                  
                    <WorksP>I create vector Illustrations and 3D Vectors and lots of Graphics Design.</WorksP>
                    </a>
                </WorksCard>
            </WorksWrapper>
        </WorksContainer>
    </section>
    </>
  )
}

export default Works