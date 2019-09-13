import * as React from 'react';
import styled from 'styled-components';

const Bar = styled.div`
    background-color: Black;
    color: white;
    font-size:1rem;
    font-weight:bold;
    opacity:0.8;
    height:4%
    min-height:25px;

    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
  
  };
`
export interface TitlebarProps {
  title: string;
}



const TitleBar:React.FC<TitlebarProps> = (props:TitlebarProps) => {
    return(
        <Bar>
            {/*<span>props.title</span>*/}
        </Bar>
        )
}

export default TitleBar