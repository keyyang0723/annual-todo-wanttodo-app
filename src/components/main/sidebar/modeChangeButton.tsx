import * as React from 'react';
import styled from 'styled-components';
import { todoCategory } from '../../../actions/action'

export interface modeChangeButtonProps{
    modeChange:todoCategory;
    selectedMode:todoCategory;
    onClick:() => void;
}

const Button = styled.span`
    width:25px;
    height:25px;
    font-size:1.4rem;
    font-weight:bold;
    color:white;
    background-color:#2a2a2a;
     transition: 0.1s
    
    border-radius:3px;
    margin :1px;
    
    display:block;
    text-align:center;
    
    
    ${((props: modeChangeButtonProps) => ( getBorder(props.modeChange,props.selectedMode) ))}
    
    &:active{
        font-size:1.2rem;
        box-shadow: -1px -1px 1px 1px #606060 inset;
    }
`
const getBorder = (mode:todoCategory,selected:todoCategory) => {
    let ret:string = "order:0;";
    if(mode != selected) ret =  `
        border:1px solid white;
        order:1;
        cursor:pointer;`;
    return ret;
}

const ModeChangeButton:React.FC<modeChangeButtonProps> = (props:modeChangeButtonProps) => {
    const text : string = GetText(props.modeChange,props.selectedMode);
    return(
        <Button {...props} onClick={()=>props.onClick()}>{text}</Button>
        )
}

export default ModeChangeButton

const GetText = (mode:todoCategory, selected:todoCategory) => {
    let text : string = "A";
        switch(mode){
        case todoCategory.ALL:
            if(mode == selected){
                text = "ALL"
            } else {
                text = "A"
            }
            break;
        case todoCategory.Annual:
            if(mode == selected){
                text = "Year"
            } else {
                text = "Y"
            }
            break;
        case todoCategory.Monthly:
            if(mode == selected){
                text = "Month"
            } else {
                text = "M"
            }
            break;
        case todoCategory.Weekly:
            if(mode == selected){
                text = "Week"
            } else {
                text = "W"
            }
            break;
        case todoCategory.Daily:
            if(mode == selected){
                text = "Daily"
            } else {
                text = "D"
            }
            break;
    }
    return text;
}