import { Action, TodoType, editTodoTitle,editTodoDescruption } from '../actions/action'
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Todo } from '../components/main/TodoList/todo'

function mapStateToProps(state: TodoType){
    return{
        ...state,
    }
}

export default connect(mapStateToProps,null)(Todo);