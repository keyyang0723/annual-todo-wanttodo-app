import * as React from 'react';
import styled from "styled-components";
import TodoList  from '../../containers/todoList';
import { todoCategory } from '../../actions/action'


const MainWrapper = styled.div`
    width: 100%;
    max-width: 1000px;
    margin:auto;
    display: flex;
    align-items:center;
`

const Main:React.FC = () => {

    return(
        <MainWrapper>
            <TodoList 
                showMode = { todoCategory.Daily }
                isTodoList = {true}
            />
            <TodoList
                showMode = { todoCategory.Monthly }
                isTodoList = {true}
            />
                        <TodoList
                showMode = { todoCategory.ALL }
                isTodoList = {true}
            />
        </MainWrapper>
        )
}

export default Main;