import * as React from 'react'
import { SimpleButton }  from '../button'
import { InputTodo } from '../inputTodo'
import Header from './header/main'
import BaseStyle from './baseStyle'

const App:React.FC = () => {
    return(
        <React.Fragment>
            <BaseStyle />
            <Header />
            <SimpleButton
            onClick={ () => {console.log("test")}}
            main={"#000fff"}
            />
            
            <InputTodo 
            />
        </React.Fragment>)
}

export default App