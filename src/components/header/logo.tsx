import * as React from 'react';
import styled from "styled-components"; 

const HeaderLogo = styled.span`
    color: Black;
    font-size:2rem;
    
    opacity:1;
`

const Logo:React.FC = () => {
    return(
        <div>
            <HeaderLogo>HeaderLogo</HeaderLogo>
        </div>
        )
}

export default Logo