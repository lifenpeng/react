import * as headerActionType from './actionTypes';
//import { fromJS } from 'immutable';

const defaultState = {
    focused:false
}

export default (state = defaultState,action)=>{
    if(action.type===headerActionType.SEARCH_FOCUS){
        const temp =  JSON.parse(JSON.stringify(state));
        temp.focused = true;
        return temp;
    }
    if(action.type===headerActionType.SEARCH_BLUR){
        const temp = JSON.parse(JSON.stringify(state));
        temp.focused = false;
        return temp;
    }
    return state;
} 