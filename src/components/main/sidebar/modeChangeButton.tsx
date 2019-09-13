import * as React from 'react';
import styled from 'styled-components';
import { todoCategory } from '../../../actions/action'

export interface modeChangeButtonProps{
    modeChange:todoCategory;
    selectedMode:todoCategory;
}

const Button = styled.span`
    width:25px;
    height:25px;
    font-size:1.4rem;
    font-weight:bold;
    color:white;
    background-color:black;
    
    border-radius:3px;
    margin :1px;
    
    display:block;
    text-align:center;
    user-select: none;
    
    ${((props: modeChangeButtonProps) => ( getBorder(props.modeChange,props.selectedMode) ))}
`
const getBorder = (mode:todoCategory,selected:todoCategory) => {
    let ret:string = "order:0;";
    if(mode != selected) ret =  "border:1px solid white;order:1;";
    return ret;
}


const ModeChangeButton:React.FC<modeChangeButtonProps> = (props:modeChangeButtonProps) => {
    let text : string = "A";
    switch(props.modeChange){
        case todoCategory.ALL:
            text = "Al"
            break;
        case todoCategory.Annual:
            text = "A"
            break;
        case todoCategory.Monthly:
            text = "M"
            break;
        case todoCategory.Weekly:
            text = "W"
            break;
        case todoCategory.Daily:
            text = "D"
            break;
            
    }
    
    
    return(
        <Button {...props}>{text}</Button>
        )
}

export default ModeChangeButton