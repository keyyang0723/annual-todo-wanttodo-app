import * as React from 'react';
import styled from "styled-components";
import HeaderLogo from './logo'

const HeaderMain = styled.div`
    height : 50px;
    display: flex;
    align-items:center;
    justify-content:center;
    
    background-color:#ffa500;
    opacity:0.8;
`

const Header:React.FC = () => {
    return(
        <HeaderMain>
            <HeaderLogo />
        </HeaderMain>)
}

export default Header