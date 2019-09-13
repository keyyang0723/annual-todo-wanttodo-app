export type TodoType = {
    index: number;
    title: string;
    description: string;
    todoCategory: todoCategory;
    isTodo: boolean;
    deleteFlg:boolean;
}
export enum todoCategory {
    Annual,
    Monthly,
    Weekly,
    Daily,
    ALL
}

export type Action = 
{
    type: 'ADD_TODO',
    todoCategory: todoCategory;
    isTodo: boolean;
} | {
    type: 'DELETE_TODO',
    todoCategory: todoCategory;
    isTodo: boolean;
} | {
    type: 'EDIT_TODO_TITLE',
    index: number,
    title: string,
} |
{
    type: 'EDIT_TODO_DESCRIPTION',
    index: number,
    description: string
} | 
{
    type: 'CHANGE_DETELE_FLG',
    index: number,
    deleteFlg: boolean
} |
{
    type: 'SHOW_MODE_CHANGE'
    mode: todoCategory,
}

export function addTodo(todoCategory: todoCategory,isTodo: boolean): Action {
    return {
        type: 'ADD_TODO',
        todoCategory,
        isTodo
    };
}

export function deleteTodo(todoCategory: todoCategory,isTodo: boolean): Action {
    return{
        type: 'DELETE_TODO',
        todoCategory,
        isTodo
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

export function changeDeleteFlg(index:number, deleteFlg:boolean): Action{
    return{
        type: 'CHANGE_DETELE_FLG',
        index,
        deleteFlg
    }
}

export function changeMode(mode:todoCategory):Action{
    return{
        type: 'SHOW_MODE_CHANGE',
        mode
    }
}