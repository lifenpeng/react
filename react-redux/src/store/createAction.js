import { CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DEL_TODO_ITEM } from './actionTypes';

//store.dispatch
export const mapDispatchToProps = (dispatch)=>{
    return {
        handleChange(e){
            const action = {
                type:CHANGE_INPUT_VALUE,
                value:e.target.value
            }
            dispatch(action);
        },
        
        handleClick(v){
            const action = {
                type:ADD_TODO_ITEM
            }
            dispatch(action);
        },
        
        handleDel(index){
            const action = {
                type:DEL_TODO_ITEM,
                index:index
            }
            dispatch(action);
        }
    }
}
