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
    height:92%;
    overflow: auto;
    border-top: solid 1px rgba(0,0,0,0.3);
    border-bottom: solid 1px rgba(0,0,0,0.3);
    position:relative;
`

const AddButton = styled.button`
    position:absolute; top:80%; right:47px;
`

const DeleteButton = styled.button`
    position:absolute; top:80%; right:10px;
`


export const TodoList:React.FC<TodoListProps> = (props: TodoListProps) => {
    return(
        <TodoWrapper>
            {props.TodoListArr.map( (todo:TodoType ,index:number ) => {
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
                    <AddButton onClick = { () => props.onClickAddButton(props.showMode,props.isTodoList)} > Add </AddButton>
                    <DeleteButton onClick = { () => props.onClickDeleteButton(props.showMode,props.isTodoList)} > Del </DeleteButton>
                </React.Fragment>
                )
                
            })()}
            
        </TodoWrapper>
        )
}
