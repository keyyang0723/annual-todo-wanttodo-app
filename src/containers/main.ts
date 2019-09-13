import { connect } from 'react-redux';
import  Main, {mainProps} from '../components/main/main'
import { TodoAppState } from '../reducers/todo'

function mapStateToProps(state: TodoAppState){
    return{
        showMode:state.showMode
    }
}


export default connect(mapStateToProps)(Main);