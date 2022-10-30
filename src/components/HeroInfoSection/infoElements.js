import styled from "styled-components";

export const HeroContainer = styled.div`
    color: #fff;
    
    position: relative;
    padding: 0.5rem calc((90vw - 1000px) /2);
    
    @media screen and (max-width: 768px) {
        
        padding: 0 20px;    
        margin-right: auto;
        margin-left: auto;
        }
    
`
export const HeroWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 650px;
    width: 100%;
    max-width: 2000px;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    align-items: center;
    
    @media screen and (max-width: 768px) {
       
    margin-bottom: none;
    align-items: end;
    justify-content: flex-start;
    height: 580px;
    }
    
`
export const HeroRow = styled.div`
    display: grid;
    grid-column-gap: 50px;
    grid-auto-columns: minmax(auto, 1fr);   
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)}

    }
`
export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`
export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`
export const TextWrapper = styled.div`
    max-width: 540px;
    padding-bottom: 50px;
    margin: auto;

`

export const Span = styled.span`
    color: black;
    font-size: 20px;
    font-weight: Bold;
    letter-spacing: .5px;
    

`
export const HeroH1 = styled.h1`
    color: #101010;
    font-size: 60px;
    text-align: left;
    font-weight: 800;
    position: relative;

    @media screen and (max-width: 768px) {
        font-size: 41px;
    }

`
export const HeroP = styled.p`
    margin-top: 20px;
    color: #202020;
    font-size: 16px;
    text-align: left;
    max-width: 600;
    letter-spacing: .8px;
    font-weight: 600;
    line-height: 1.25em;
    margin-bottom: .5rem;

    @media screen and (max-width: 768px) {
        font-size: 15px;
        margin-top: 20px;
    }
    
`
export const HeroBtnWrapper = styled.div`

    justify-content: flex-start;
    display: flex;
    height: 60px;
    align-items: center;
`
export const Button1 = styled.div`

    margin-right: 10px;
    margin-left: 0px;
    margin-top: auto;
    display: flex;
    flex-direction: center;
    align-items: flex-end;
    height: 46px;
    width: 135px;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    outline: none;
    color: #000;
    border: 1.5px solid #000;
    border-radius: 5px;

    &:hover {
        background-color: #303030;
        color: #fff;
    }

    &:active {
    background-color: #000;
    color: #fff;
    }
`
export const Button2 = styled.div`

    margin-right: 10px;
    margin-left: 0px;
    margin-top: auto;
    display: flex;
    flex-direction: center;
    align-items: flex-end;
    height: 46px;
    width: 135px;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    outline: none;
    color: #fff;
    background-color: #000;
    border-radius: 5px;

    &:hover {
        
        transform: translateY(-5px);
        background-color: #303030;
        box-shadow: 0 5px #50505080;
        color: #fff;
    }

    &:active {
        background-color: #000;
        box-shadow: 0 0px #000;
        transform: translateY(5px);
        transition: 0.2s;
        color: #fff;
    }
`
export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%; 
    display: flex;
    align-items: center;
    
    @media screen and (max-width: 768px) {
        display: none;
`

export const Img = styled.img`
    width: 70%;
    margin: auto;
    border-radius: 250px;
    padding-bottom: 50px;
`