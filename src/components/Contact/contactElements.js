import styled from "styled-components";


export const ContactContainer = styled.div`
    display: flex;
    padding: 3rem calc((90vw - 1000px) /2);
    width: 100%;
    margin-top: 50px;
    position: relative;

    @media screen and (max-width: 768px) {
        
    padding: 3rem 35px;    
}

`
export const ContactCard = styled.div`

`
export const ContactWrapper = styled.div`

    float: left;
    width: 100%;
    margin-bottom: 20px;

    @media screen and (max-width: 768px) {
        
    width: 100%;    
    }
`
export const ContactH1 = styled.h1`

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
export const ContactH2 = styled.h2`
    text-align: center;
    font-size: 32px;
    font-width: Bold;
    
    @media screen and (max-width: 768px) {
        font-size: 24px;
    }
`
export const ContactH3 = styled.h3`
    text-align: center;
    padding-top: 200px;
    font-size: 24px;

`
export const A = styled.a`
    text-align: center;
    padding-top: 20px;
    font-weight: 600;
    color: #000;
    font-size: 24px;
    @media screen and (max-width: 768px) {
        font-size: 18px;
    }

`
export const ContactIcon = styled.div`
    justify-content: center;
    display: flex;
    position: relative;
    padding-top: 60px;
`