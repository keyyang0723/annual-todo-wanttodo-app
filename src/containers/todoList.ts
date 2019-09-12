import { 
    Action, 
    TodoType, 
    editTodoTitle, 
    editTodoDescruption, 
    addTodo, 
    deleteTodo, 
    todoCategory ,
    changeDeleteFlg
} from '../actions/action'
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { TodoList } from '../components/main/TodoList/todoList'
import { TodoAppState } from '../reducers/todo'

export type TodoListState = {
    todos: TodoType[],
    shwoMode: todoCategory,
    isTodoList:Boolean
}


function mapStateToProps(state: TodoAppState){
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
        onClickAddButton(shwoMode: todoCategory,isTodoList:boolean){
            dispatch(addTodo(shwoMode, isTodoList))
        },
        onClickDeleteButton(shwoMode: todoCategory,isTodoList:boolean){
            dispatch(deleteTodo(shwoMode, isTodoList))
        },
        changedDeleteFlg(deleteFlg:boolean, index:number){
            dispatch(changeDeleteFlg(index,deleteFlg))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);