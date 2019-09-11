import { Action, TodoType, editTodoTitle,editTodoDescruption } from '../actions/action'
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { TodoList } from '../components/main/TodoList/todoList'
import { TodoAppState } from '../reducers/todo'

export type TodoListArr = {
    todos: TodoType[]
}


function mapStateToProps(state: TodoAppState){
    console.log(state)
    return{
        TodoListArr: state.todos
    }
}

function mapDispatchToProps(dispatch:Dispatch<Action>){
    return{
        onChangeTitle(title: string, index: number){
            dispatch(editTodoTitle(index,title))
        },
        onChangeDescription(description: string, index: number){
            dispatch(editTodoDescruption(index,description))
        },
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);