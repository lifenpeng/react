import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DEL_TODO_ITEM,INIT_LIST_ACTION} from './actionTypes';
const defaultState = {
    inputValue:'',
    list:[]
};
//reducer 可以接收state  但是不可以绝不能修改state的值
export default (state = defaultState,action)=>{
    if(action.type===CHANGE_INPUT_VALUE){
        const newState = JSON.parse(JSON.stringify(state));//简单的深拷贝
        newState.inputValue = action.value;
        return newState;
    }
    if(action.type===ADD_TODO_ITEM){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(action.value);
        newState.inputValue = '';
        return newState;
    }
    if(action.type===DEL_TODO_ITEM){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index,1);
        return newState;
    }
    if(action.type===INIT_LIST_ACTION){
        const newState = JSON.parse(JSON.stringify(state));//简单的深拷贝
        const arr = [];
        for(let i in action.data){
            arr.push(action.data[i].title);
        }
        newState.list = arr;
        return newState;
    }
    return state;//存储的所有数据
}