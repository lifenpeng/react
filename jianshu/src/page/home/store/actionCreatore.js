import axios  from 'axios';
import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const changeHomeData = (result)=>({
    type:actionTypes.CHANGE_HOME_DATA,
    toPicList:result.toPicList,
    articleList:result.articleList,
    recommendList:result.recommendList,
    WriterList:result.WriterList
})

const addHomeList = (result) => ({
    type:actionTypes.ADD_HOME_LIST,
    list:fromJS(result)
})

export const getchangeHomeData = ()=>{
    return (dispatch)=>{
        axios.get('/api/home.json').then((res)=>{
            if(res.status===200){
                const result = res.data.data;
                dispatch(changeHomeData(result));
            }
        }).catch(()=>{
            console.log('err');
        })
    }
}

export const getMoreList = ()=>{
    return (dispatch)=>{
        axios.get('/api/homeList.json').then((res)=>{
            if(res.status===200){
                const result = res.data.data;
                dispatch(addHomeList(result));
            }
        }).catch(()=>{
            console.log('err');
        })
    }
}

export const changScrollTop = (show)=>({
    type:actionTypes.CHNAGE_SCROLL_TOP,
    show:show
})