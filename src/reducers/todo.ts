import { Action,TodoType, todoCategory } from '../actions/action';

export interface TodoAppState {
    index: number;
    todos: TodoType[];
}


const initTodo:TodoType = {
        index:0,
        title: "",
        description : "",
        todoCategory: todoCategory.Daily,
        isTodo: true
    }
    


export const initState: TodoAppState = {
    index:1,
    todos: [
        initTodo
    ]
}

export function todoApp(state: TodoAppState = initState, action: Action){
    switch(action.type){
        case 'ADD_TODO':
            return Object.assign({},state, {
                todos: <TodoType[]>[
                    ...state.todos,{
                        ...initTodo,
                        index:state.index++,
                        todoCategory: action.todoCategory,
                        isTodo: action.isTodo
                    }]
            });
        case 'DELETE_TODO':
            return Object.assign({},state, {
                todos: <TodoType[]>[
                    ...state.todos.slice(0,action.index)]
            });
        case 'EDIT_TODO_TITLE':
            console.log(action.title)
            return Object.assign({},state, {
                todos: <TodoType[]>[
                    ...state.todos.slice(0,action.index),
                    {
                        ...state.todos[action.index],
                        title: action.title,
                    },
                    ...state.todos.slice(action.index + 1)
                ]
            });
        case 'EDIT_TODO_DESCRIPTION':
            return Object.assign({},state, {
                todos: <TodoType[]>[
                    ...state.todos.slice(0,action.index),
                    {
                        ...state.todos[action.index],
                        description: action.description,
                    },
                    ...state.todos.slice(action.index + 1)
                ]
            });
        default:
            return state;
    }
}