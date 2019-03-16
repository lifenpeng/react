import * as headerActionType from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    focused:false,
    mouseIn:false,
    list:[],
    page:1,
    totalPage:0
})

export default (state = defaultState,action)=>{
    switch(action.type){
        case headerActionType.SEARCH_FOCUS:
            return state.set('focused',true);
        case headerActionType.SEARCH_BLUR:
            return state.set('focused',false);   
        case headerActionType.PUSH_LIST_VALUE:
            return state.merge({
                list:action.data,
                totalPage:action.totalPage
            });
        case headerActionType.MOUSE_ENTER:
            return state.set('mouseIn',true); 
        case headerActionType.MOUSE_LEAVE:
            return state.set('mouseIn',false);
        case headerActionType.CHANGE_PAGE:
            return state.set('page',action.page);          
        default:
            return state;    
    }
} 