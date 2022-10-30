import styled from "styled-components";

export const SkillsContainer = styled.div`
    content: "";
    display: table;
    clear: both;
    padding: 3rem calc((90vw - 1000px) /2);
    width: 100%;
    margin-top: 50px;

    @media screen and (max-width: 768px) {
        
    padding: 3rem 35px;    
    }
    
`
export const SkillsCard = styled.div`
    background: #fff;
    float: left;
    width: 50%;
    margin-bottom: 20px;
    
    @media screen and (max-width: 768px) {
        
    width: 100%;    
    }
`
export const SkillsH1 = styled.h1`
    font-size: 2.2rem;
    color: #000;
    margin-bottom: 64px;
    font-weight: Bold;
    margin-right: auto;
    position: relative;
    text-align: left;
    padding: 0 15px;
    @media screen and (max-width: 768px) {
        font-size 2.5rem;
        padding: 0;
    }
`
export const SkillsWrapper = styled.div`
    content: "";
    display: table;
    clear: both;
`

export const SkillsList = styled.div`  
    float: left;
    width: 25%;
    padding: 10px;
    margin-bottom: 10px;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    filter: grayscale(100%);
&:hover {
    filter: grayscale(0%);
}
    @media screen and (max-width: 768px) {
            
        width: 33.33%;    
        }
`
export const SkillsH2 = styled.h2`
    margin: 15px 0;
    color: #000;
    font-size: 20px;
    text-align: left;
    }
`
export const SkillsH3 = styled.h3`
    margin: 15px 0;
    color: #000;
    font-size: 16px;
    text-align: center;
    }
`