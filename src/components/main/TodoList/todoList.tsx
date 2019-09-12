import * as React from 'react';
import  Todo  from '../../../containers/todo';
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
    width: 80%;
    max-width: 1000px;
    min-width;650px
`


export const TodoList:React.FC<TodoListProps> = (props: TodoListProps) => {
    return(
        <TodoWrapper>
            {props.TodoListArr.map( (todo:TodoType ,index:number ) => {
            console.log(props.showMode)
            if((props.showMode == todoCategory.ALL || todo.todoCategory == props.showMode) && todo.isTodo == props.isTodoList){
            return(
                <div>
                {(() => {
                    if(props.showMode != todoCategory.ALL) return (
                        <input type="checkbox" checked={todo.deleteFlg} onChange = {() => props.changedDeleteFlg(!todo.deleteFlg,todo.index)} />
                    )})()}
                        
                    <Todo　
                    {...todo}
                    key = { index }
                    onChangeTitle = { (title) => props.onChangeTitle(title,todo.index)}
                    onChangeDescription = { (description) => props.onChangeDescription(description,todo.index)}
                    />
                </div>
            )}})}
            {(() => {
                if(props.showMode != todoCategory.ALL) return (
                <React.Fragment>
                    <button onClick = { () => props.onClickAddButton(props.showMode,props.isTodoList)} > Add </button>
                    <button onClick = { () => props.onClickDeleteButton(props.showMode,props.isTodoList)} > Delete </button>
                </React.Fragment>
                )
                
            })()}
            
        </TodoWrapper>
        )
}
