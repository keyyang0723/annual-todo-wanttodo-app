import * as React from 'react';
import styled from 'styled-components';
import { todoCategory } from '../../../actions/action';
import ModeChangeButton,{ modeChangeButtonProps} from './modeChangeButton'

const Bar = styled.div`
  color: red;
  background-color:#2a2a2a;
  min-width:30px;
  max-width:30px;
  color: white;
    font-size:1rem;
    font-weight:bold;
    display:flex;
    flex-direction:column;
    overflow:visible;
    z-index:2;
`
interface SideBarProps{
  showMode:todoCategory
  onClick:(mode:todoCategory) => void
}

const SideBar:React.FC<SideBarProps> = (props:SideBarProps) => {
    return(
        <Bar>
          <ModeChangeButton modeChange = {todoCategory.ALL} selectedMode = {props.showMode} onClick={() => props.onClick(todoCategory.ALL)}/>
          <ModeChangeButton modeChange = {todoCategory.Annual} selectedMode = {props.showMode} onClick={() => props.onClick(todoCategory.Annual)}/>
          <ModeChangeButton modeChange = {todoCategory.Monthly} selectedMode = {props.showMode} onClick={() => props.onClick(todoCategory.Monthly)}/>
          <ModeChangeButton modeChange = {todoCategory.Weekly} selectedMode = {props.showMode} onClick={() => props.onClick(todoCategory.Weekly)}/>
          <ModeChangeButton modeChange = {todoCategory.Daily} selectedMode = {props.showMode} onClick={() => props.onClick(todoCategory.Daily)}/>
        </Bar>
        )
}

export default SideBar