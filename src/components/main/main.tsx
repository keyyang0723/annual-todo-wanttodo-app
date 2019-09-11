import * as React from 'react';
import styled from "styled-components";
//import { TodoList }  from './TodoList/todoList'
import TodoList  from '../../containers/todoList'
import { initState }  from '../../reducers/todo'


const MainWrapper = styled.div`
    width: 100%;
    max-width: 1000px;
    margin:auto;
`

const Main:React.FC = () => {

    return(
        <MainWrapper>
            <TodoList />
        </MainWrapper>
        )
}

export default Main;