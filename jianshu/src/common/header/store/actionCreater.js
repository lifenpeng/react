import * as headerActionType from './actionTypes';
import { fromJS } from 'immutable';
import axios from 'axios';

const changeList = (data)=>({
    type:headerActionType.PUSH_LIST_VALUE,
    data:fromJS(data),
    totalPage:Math.ceil(data.length / 10)
})

export const searchFoucs = ()=>({
    type:headerActionType.SEARCH_FOCUS
});

export const searchBlur = ()=>({
    type:headerActionType.SEARCH_BLUR
});

export const mouseEnter = ()=>({
    type:headerActionType.MOUSE_ENTER
})

export const mouseLeave = ()=>({
    type:headerActionType.MOUSE_LEAVE
})

export const changePage = (page)=>({
    type:headerActionType.CHANGE_PAGE,
    page
})

export const getList = ()=>{
    return (dispatch)=>{
        axios.get('/api/list.json').then(function(res){
            if(res.status===200){
                const list = res.data.list;
                dispatch(changeList(list));
            }
        }).catch(function(err){
              console.log(err);
        });
    }
}