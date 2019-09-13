import { Action, changeMode, todoCategory, TodoType } from '../actions/action'
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import  SideBar from '../components/main/sidebar/main'
import  { modeChangeButtonProps } from '../components/main/sidebar/modeChangeButton'

function mapStateToProps(state: modeChangeButtonProps){
    return{
        ...state,
    }
}

function mapStateToDispathch(dispatch:Dispatch<Action>){
    return{
        onClick(mode:todoCategory){
            dispatch(changeMode(mode))
        }
    }
}

export default connect(mapStateToProps,mapStateToDispathch)(SideBar);