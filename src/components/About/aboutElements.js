import styled from "styled-components";

export const AboutContainer = styled.div`
    content: "";
    display: table;
    clear: both;
    padding: 3rem calc((90vw - 1000px) /2);
    width: 100%;
    margin-top: 50px;
    background: #000;
    color: #fff;
    position: relative;

    @media screen and (max-width: 768px) {
        
    padding: 3rem 35px;    
    }

`
export const AboutCard = styled.div`
    float: left;
    width: 50%;
    margin-bottom: 50px;
    height: auto;
    padding: 0 15px;

    @media screen and (max-width: 768px) {
    padding: 0;    
    width: 100%;    
    }
`
export const AboutH1 = styled.h1`
    font-size: 2.2rem;
    color: #fff;
    margin-bottom: 50px;
    font-weight: Bold;
    margin-right: auto;
    margin-top: 50px;
    position: relative;
    padding: 0 15px;

    @media screen and (max-width: 768px) {
        font-size: 2.5rem;
        padding: 0;
    }
`
export const AboutH2 = styled.h2`
    color: #fff;
    font-size: 30px;
    letter-spacing: 1px;
    float: left;
    margin: auto;
    padding-top: 5rem;
    line-height: 60px;
    
    @media screen and (max-width: 768px) {
        padding-top: 2.5rem;
    }
`
export const AboutH3 = styled.h3`
    color: #aaa;
    text-align: right;
    font-size: 15px;
    font-weight: 400;
    margin-top: 20px;

`
export const ImgWrap = styled.div`
    width: 100%;
    height: 100%; 
    float: right;
    align-items: right;
    

`

export const Img = styled.img`
    width: 50%;
    margin: auto;
    padding-bottom: 50px;
    float: right;    
    @media screen and (max-width: 768px) {
        width: 100%;
    }
`
export const AboutP = styled.p`
    font-size: 16px;
    letter-spacing: 1px;
    line-height: 30px;
    padding-top: 20px;
    
    @media screen and (max-width: 768px) {
        padding-left: 0;
    }
`
export const AboutName = styled.h1`
    font-size: 50px;
    color: #fff;
    padding-bottom: 20px;
    padding-top: 50px;
    
    @media screen and (max-width: 768px) {
        padding-left: 0;      
        font-size: 35px;
        padding-top: 0px;
    }
`