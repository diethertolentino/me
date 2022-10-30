import styled from "styled-components"

export const Nav = styled.nav`
    background: #fff;
    height: 150px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem calc((90vw - 1000px) /2);
    z-index: 10;
    position: relative;
    
    @media screen and (max-width: 768px) {
        
    height: 100px;
    padding: 0 20px;    
    margin-right: auto;
    margin-left: auto;
    }
        

`
export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;
    justify-content: flex-end;
    padding: auto;

    @media screen and (max-width: 768px) {
        display: none
    }

`