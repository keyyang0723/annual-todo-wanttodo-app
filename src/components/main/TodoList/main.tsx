import * as React from 'react';
import styled from "styled-components";
import TodoList  from '../../../containers/todoList';
import { todoCategory } from '../../../actions/action'


const MainWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items:start;
    flex-direction:column;
    flex-grow:1;
`

const TodoListWrapper = styled.div`
    height:50%;
    text-align: center;
    width: 100%;
    
`
const TitleWrapper = styled.div`
    height:7%;
    color: Black;
    font-size:0.8rem;
    font-weight:bold;
    font-style:italic;
    opacity:0.8;
    
    display: flex;
    align-items: flex-end;
    justify-content: center;
`

interface TodoMainProps{
    showMode:todoCategory
}

const ToDoListMain:React.FC<TodoMainProps> = (props:TodoMainProps) => {

    return(
        <MainWrapper>
            <TodoListWrapper>
                <TitleWrapper><span>Todo</span></TitleWrapper>
                <TodoList 
                    showMode = { props.showMode }
                    isTodoList = {true}
                />
            </TodoListWrapper>
            <TodoListWrapper>
                <TitleWrapper><span>WantTodo</span></TitleWrapper>
                <TodoList
                    showMode = { props.showMode }
                    isTodoList = {false}
                />
            </TodoListWrapper>
        </MainWrapper>
        )
}

export default ToDoListMain;