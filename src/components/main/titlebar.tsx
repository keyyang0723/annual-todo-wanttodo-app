import * as React from 'react';
import styled from 'styled-components';
import { todoCategory } from '../../actions/action'

const Bar = styled.div`
    background-color: #2a2a2a;
    color: white;
    height:4%
    min-height:25px;

    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    z-index:1;
  };
`

const Title = styled.span`
    font-size:1.3rem;
    font-weight:bold;
    mergin-left:10px;
`

export interface TitlebarProps {
  showMode: todoCategory;
}



const TitleBar:React.FC<TitlebarProps> = (props:TitlebarProps) => {
        let title : string = GetTitle(props.showMode)
    return(
        <Bar>
            {/*<Title>{title}</Title>*/}
        </Bar>
        )
}

export default TitleBar

const GetTitle = (mode:todoCategory) => {
        let text : string = "A";
        switch(mode){
        case todoCategory.ALL:
            text = ""
            break;
        case todoCategory.Annual:
            text = "ear"
            break;
        case todoCategory.Monthly:
            text = "onth"
            break;
        case todoCategory.Weekly:
            text = "eek"
            break;
        case todoCategory.Daily:
            text = "ay"
            break;
    }
    return text;
}