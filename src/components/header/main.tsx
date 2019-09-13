import * as React from 'react';
import styled from "styled-components";
import HeaderLogo from './logo'

const HeaderWrapper = styled.div`
    height : 5%;
    display: flex;
    align-items:center;
    justify-content:center;
    width:100%;
    
    background-color:#ffa500;
    opacity:0.8;
`

const Header:React.FC = () => {
    return(
        <HeaderWrapper>
            <HeaderLogo />
        </HeaderWrapper>)
}

export default Header