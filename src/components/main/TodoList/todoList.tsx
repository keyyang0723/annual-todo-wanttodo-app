import * as React from 'react';
import  Todo  from '../../../containers/todo';
import { TodoType, todoCategory } from '../../../actions/action';

export interface TodoListProps {
    TodoListArr: TodoType[]
    onChangeTitle: (value:string, index:number) => void;
    onChangeDescription: (value:string, index:number) => void;
}

export const TodoList:React.FC<TodoListProps> = (props: TodoListProps) => {
    return(
        <React.Fragment>
        {props.TodoListArr.map( (todo:TodoType ,index:number ) => (
            <Todo　
            {...todo}
            key = { index }
            onChangeTitle = { (title) => props.onChangeTitle(title,todo.index)}
            onChangeDescription = { (description) => props.onChangeTitle(description,todo.index)}
            />
        ))}
        </React.Fragment>
        )
}
