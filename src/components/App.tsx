import * as React from 'react'
import { SimpleButton }  from '../button'
import { InputTodo } from '../inputTodo'

const App:React.FC = () => {
    return(
        <div>
            <h1>Todo WantTodo</h1>
            <SimpleButton
            onClick={ () => {console.log("test")}}
            main={"#000fff"}
            />
            
            <InputTodo 
                main={"#000000"}
            />
        </div>)
}

export default App