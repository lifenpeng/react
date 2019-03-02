import { CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DEL_TODO_ITEM } from './actionTypes';

const defaultState = {
    inputValue:'',
    list:[]
}

export default (state = defaultState,action)=>{
    
    if(action.type===CHANGE_INPUT_VALUE){
        const newsState = JSON.parse(JSON.stringify(state));
        newsState.inputValue = action.value;
        return newsState;
    }
    if(action.type===ADD_TODO_ITEM){
        const newsState = JSON.parse(JSON.stringify(state));
        newsState.list.push(newsState.inputValue);
        newsState.inputValue = '';
        return newsState;
    }
    if(action.type===DEL_TODO_ITEM){
        const newsState = JSON.parse(JSON.stringify(state));
        newsState.list.splice(action.index,1);
        return newsState;
    }
    return state;
}