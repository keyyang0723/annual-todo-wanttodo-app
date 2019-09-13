import * as React from 'react';
import styled from "styled-components"; 

const HeaderLogo = styled.span`
    color: Black;
    font-size:1.5rem;
    font-weight:bold;
    font-style:italic;
    opacity:0.8;
    span{
        color:red;
    }
`

const Logo:React.FC = () => {
    return(
        <div>
            <HeaderLogo>Annual Todo WantTodo<span>.</span></HeaderLogo>
        </div>
        )
}

export default Logo