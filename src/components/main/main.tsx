import * as React from 'react';
import styled from 'styled-components';

import { todoCategory } from '../../actions/action'

import TodoMain from './TodoList/main'
import TitleBar, {TitlebarProps} from './titlebar'
import Sidebar from '../../containers/sidebar';

const MainWrapper = styled.div`
    width: 100%;
    margin:auto;
    display: flex;
    align-items:stretch;
    flex-direction:row;
    height: 95%;
`

const ContentsWrapper = styled.div`
    display: flex;
    flex-direction:column;
    width: 100%;
`

export interface mainProps{
    showMode: todoCategory
}

const Main:React.FC<mainProps> = (props:mainProps) => {
    return(
        <MainWrapper>
            <Sidebar showMode={props.showMode}/>
            <ContentsWrapper >
                <TitleBar showMode={props.showMode}/>
                <TodoMain showMode={props.showMode}/>
            </ContentsWrapper>
        </MainWrapper>
        )
}

export default Main