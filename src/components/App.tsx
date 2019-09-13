import * as React from 'react'
import Header from './header/main'
import Main from '../containers/main'
import BaseStyle from './baseStyle'
import styled from 'styled-components'

const AppWrapper = styled.div`
    display:flex;
    flex-direction:column;
    height: 100%;
`

const App:React.FC = () => {
    return(
        <AppWrapper>
            <BaseStyle />
            <Header />
            <Main />
        </AppWrapper>)
}

export default App