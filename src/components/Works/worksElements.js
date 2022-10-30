import styled from "styled-components";

export const WorksContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: black;
    padding: 3rem calc((90vw - 1000px) /2);

    @media screen and (max-width: 768px) {
        
        padding: 3rem 35px;    
        margin-right: auto;
        margin-left: auto;
        }
    
`
export const WorksWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(2,minmax(0,1fr));
    grid-gap: 1.5rem;
    grid-row-gap: 30px;
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
    height: 100%;
    max-width: 2000px;
    padding-top: 2rem;
    padding-bottom: 50px;
    padding-left: 15px;
    padding-right: 15px;
    
    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding-left: 0;
        padding-right: 0;
        
    }
`
export const WorksCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    height: auto;
    width: 100%;
    transition: all 0.5s ease-in-out;
    box-sizing: border-box;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`
export const WorksImage = styled.img`
    height: auto;
    width: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
`
export const WorksH1 = styled.h1`
    font-size: 2.2rem;
    color: #fff;
    margin-bottom: 50px;
    font-weight: Bold;
    margin-right: auto;
    margin-top: 50px;
    position: relative;
    padding: 0 15px;
    @media screen and (max-width: 768px) {
        font-size 2.5rem;
        padding: 0;
    }
`

export const WorksH2 = styled.h2`
    text-decoration: none;
    padding-top: 1.5rem;
    font-size: 2rem;
    margin-right: auto;
    padding-right: 1rem;
    margin-bottom: 10px;    
    color: #fff;
`

export const WorksP = styled.p`
    font-size: 1rem;
    font-weight: 500;
    margin-right: auto;
    padding-right: 1rem;
    padding-bottom: 1rem;
    color: #fff;
`