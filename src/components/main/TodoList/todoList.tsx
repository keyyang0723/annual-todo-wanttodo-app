import * as React from 'react';
// import  Todo  from '../../../containers/todo';
import { Todo, TodoProps } from './todo';
import { TodoType, todoCategory } from '../../../actions/action';
import styled from 'styled-components';

export interface TodoListProps {
    TodoListArr: TodoType[]
    onChangeTitle: (value:string, index:number) => void;
    onChangeDescription: (value: string, index: number) => void;
    onClickAddButton: (shwoMode: todoCategory, isTodoList: boolean) => void;
    onClickDeleteButton: (shwoMode: todoCategory, isTodoList: boolean) => void;
    changedDeleteFlg: (deleteFlg: boolean, index: number) => void;
    showMode: todoCategory,
    isTodoList:boolean
}


const TodoWrapper = styled.div`
    height:92%;
    overflow: auto;
    border-top: solid 1px rgba(0,0,0,0.3);
    border-bottom: solid 1px rgba(0,0,0,0.3);
    position:relative;
`

const AddButton = styled.button`
    position:absolute; top:80%; right:47px;
    border-radius: 4px;
    background-color:#ffa500;
    opacity:0.8;
    font-weight:bold;
`

const DeleteButton = styled.button`
    position:absolute; top:80%; right:10px;
    border-radius: 4px;
    background-color:#ffa500;
    opacity:0.8;
    font-weight:bold;
`


export const TodoList:React.FC<TodoListProps> = (props: TodoListProps) => {
    return(
        <TodoWrapper>
            {props.TodoListArr.map( (todo:TodoType ,index:number ) => {
            const changetodo = {
                ...todo,
                key:index
            }
            if((props.showMode == todoCategory.ALL || todo.todoCategory == props.showMode) && todo.isTodo == props.isTodoList){
            return(
                <div key = { index }>
                {(() => {
                    if(props.showMode != todoCategory.ALL) return (
                        <input type="checkbox" checked={todo.deleteFlg} onChange = {() => props.changedDeleteFlg(!todo.deleteFlg,todo.index)} />
                    )})()}
                        
                    <Todo　
                    {...todo}
                    onChangeTitle = { (title) => props.onChangeTitle(title,todo.index)}
                    onChangeDescription = { (description) => props.onChangeDescription(description,todo.index)}
                    />
                </div>
            )}})}
            {(() => {
                if(props.showMode != todoCategory.ALL) return (
                <React.Fragment>
                    <AddButton onClick = { () => props.onClickAddButton(props.showMode,props.isTodoList)} > Add </AddButton>
                    <DeleteButton onClick = { () => props.onClickDeleteButton(props.showMode,props.isTodoList)} > Del </DeleteButton>
                </React.Fragment>
                )
                
            })()}
            
        </TodoWrapper>
        )
}
