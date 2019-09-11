import { Action,TodoType, todoCategory } from '../actions/action';

export interface TodoAppState {
    todos: TodoType[];
}


const initTodo:TodoType = {
        index:1,
        title: "",
        description : "",
        todoCategory: todoCategory.Daily,
        isTodo: true
    }
    


export const initState: TodoAppState = {
    todos: [
       initTodo,
       initTodo
    ]
}

export function todoApp(state: TodoAppState = initState, action: Action){
    switch(action.type){
        case 'ADD_TODO':
            return Object.assign({},state, {
                todos: <TodoType[]>[
                    ...state.todos,{}]
            });
        case 'DELETE_TODO':
            return Object.assign({},state, {
                todos: <TodoType[]>[
                    ...state.todos.slice(0,action.index)]
            });
        case 'EDIT_TODO_TITLE':
            return Object.assign({},state, {
                todos: <TodoType[]>[
                    ...state.todos.slice(0,action.index),
                    {
                        ...state.todos[action.index],
                        title: state.todos[action.index].title,
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
                        description: state.todos[action.index].description,
                    },
                    ...state.todos.slice(action.index + 1)
                ]
            });
        default:
            return state;
    }
}