import styled from "styled-components";

export const FooterContainer = styled.div`
    display: flex;
    padding: 6rem calc((90vw - 1000px) /2);
    width: 100%;
    margin-top: 50px;
    background-color: #000;
    color: #fff;

    @media screen and (max-width: 768px) {
        
    padding: 3rem 35px;    
    }
`
export const FooterWrapper = styled.div`

`
export const FooterH1 = styled.div`
    font-size: 12px;
    font-weight: Bold;
    letter-spacing: .1rem;
    padding: 0 15px;    

    @media screen and (max-width: 768px) {
        
    padding: 0;    
    }
`