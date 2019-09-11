import * as React from 'react'
import { SimpleButton }  from '../button'
import { InputTodo } from '../inputTodo'
import Header from './header/main'
import Main from './main/main'
import BaseStyle from './baseStyle'

const App:React.FC = () => {
    return(
        <React.Fragment>
            <BaseStyle />
            <Header />
            <Main />
        </React.Fragment>)
}

export default App