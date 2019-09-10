export type Action = 
{
    type: 'ADD_TODO',
} | {
    type: 'DELETE_TODO'
} | {
    type: 'EDIT_TODO',
    index: number,
    title: string,
    description: string
}

export function addTodo(): Action {
    return {
        type: 'ADD_TODO'
    };
}

export function deleteTodo(): Action {
    return{
        type: 'DELETE_TODO'
    };
}

export function edit_Todo(index:number, title:string, description:string): Action{
    return{
        type: 'EDIT_TODO',
        index,
        title,
        description
    }
}