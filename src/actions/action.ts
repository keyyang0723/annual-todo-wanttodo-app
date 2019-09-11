export type TodoType = {
    index: number;
    title: string;
    description: string;
    todoCategory: todoCategory;
    isTodo: boolean;
}
export enum todoCategory {
    Annual,
    Monthly,
    Daily
}

export type Action = 
{
    type: 'ADD_TODO',
    todoCategory: todoCategory;
    isTodo: boolean;
} | {
    type: 'DELETE_TODO',
    index: number
} | {
    type: 'EDIT_TODO_TITLE',
    index: number,
    title: string,
} |
{
    type: 'EDIT_TODO_DESCRIPTION',
    index: number,
    description: string
}

export function addTodo(todoCategory: todoCategory,isTodo: boolean): Action {
    return {
        type: 'ADD_TODO',
        todoCategory,
        isTodo
    };
}

export function deleteTodo(index:number): Action {
    return{
        type: 'DELETE_TODO',
        index
    };
}

export function editTodoTitle(index:number, title:string): Action{
    return{
        type: 'EDIT_TODO_TITLE',
        index,
        title,
    }
}

export function editTodoDescruption(index:number, description:string): Action{
    return{
        type: 'EDIT_TODO_DESCRIPTION',
        index,
        description
    }
}