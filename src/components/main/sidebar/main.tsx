import * as React from 'react';
import styled from 'styled-components';
import { todoCategory } from '../../../actions/action';
import ModeChangeButton,{ modeChangeButtonProps} from './modeChangeButton'

const Bar = styled.div`
  color: red;
  background-color: Black;
  min-width:30px;
  max-width:30px;
  color: white;
    font-size:1rem;
    font-weight:bold;
    opacity:0.8;
    display:flex;
    flex-direction:column;
`


const SideBar:React.FC = () => {
    return(
        <Bar>
          <ModeChangeButton modeChange = {todoCategory.ALL} selectedMode = {todoCategory.Daily}/>
          <ModeChangeButton modeChange = {todoCategory.Annual} selectedMode = {todoCategory.Daily}/>
          <ModeChangeButton modeChange = {todoCategory.Monthly} selectedMode = {todoCategory.Daily}/>
          <ModeChangeButton modeChange = {todoCategory.Weekly} selectedMode = {todoCategory.Daily}/>
          <ModeChangeButton modeChange = {todoCategory.Daily} selectedMode = {todoCategory.Daily}/>
        </Bar>
        )
}

export default SideBar