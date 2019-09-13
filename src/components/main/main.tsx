import * as React from 'react';
import styled from 'styled-components';

import TodoMain from './TodoList/main'
import TitleBar, {TitlebarProps} from './titlebar'
import Sidebar from './sidebar/main';

const props:TitlebarProps = {
    title :"Daily",
}

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

const Main:React.FC = () => {
    return(
        <MainWrapper>
            <Sidebar />
            <ContentsWrapper >
                <TitleBar {...props}/>
                <TodoMain />
            </ContentsWrapper>
        </MainWrapper>
        )
}

export default Main