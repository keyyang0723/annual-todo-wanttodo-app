import { Action,TodoType, todoCategory } from '../actions/action';

export interface TodoAppState {
    index: number;
    todos: TodoType[];
    showMode:todoCategory;
}


const initTodo:TodoType = {
        index:0,
        title: "",
        description : "",
        todoCategory: todoCategory.Daily,
        isTodo: true,
        deleteFlg: false
    }
    


export const initState: TodoAppState = {
    index:1,
    todos: [],
    showMode:todoCategory.Daily
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
                    ...state.todos.filter((todo:TodoType) => 
                        todo.deleteFlg != true 
                        || todo.todoCategory != action.todoCategory 
                        || todo.isTodo != action.isTodo 
                        )
                        ]
            });
        case 'EDIT_TODO_TITLE':
            let index = GetIndexNumber(action.index,state.todos)
            return Object.assign({},state, {
                todos: <TodoType[]>[
                    ...state.todos.slice(0,index),
                    {
                        ...state.todos[index],
                        title: action.title,
                    },
                    ...state.todos.slice(index + 1)
                ]
            });
        case 'EDIT_TODO_DESCRIPTION':
            index = GetIndexNumber(action.index,state.todos)
            return Object.assign({},state, {
                todos: <TodoType[]>[
                    ...state.todos.slice(0,index),
                    {
                        ...state.todos[index],
                        description: action.description,
                    },
                    ...state.todos.slice(index + 1)
                ]
            });
        case 'CHANGE_DETELE_FLG':
            index = GetIndexNumber(action.index,state.todos)
            return Object.assign({},state, {
                todos: <TodoType[]>[
                    ...state.todos.slice(0,index),
                    {
                        ...state.todos[index],
                        deleteFlg: action.deleteFlg,
                    },
                    ...state.todos.slice(index + 1)
                ]
            });
        case 'SHOW_MODE_CHANGE':
            return Object.assign({},state, {
                showMode:action.mode
            });
        default:
            return state;
    }
}

function GetIndexNumber(id:number,todos:TodoType[]):number {
    let ret = -1;
    todos.map((x:TodoType,index:number) => {if(x.index == id)ret = index})
    return ret;
}