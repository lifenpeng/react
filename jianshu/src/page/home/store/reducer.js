import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
    toPicList : [],
    articleList:[],
    recommendList:[],
    WriterList:[],
    scrollShow:false
})

export default (state=defaultState,action)=>{
    switch(action.type){
        case actionTypes.CHANGE_HOME_DATA:
            return state.merge({
                toPicList:fromJS(action.toPicList),
                articleList:fromJS(action.articleList),
                recommendList:fromJS(action.recommendList),
                WriterList:fromJS(action.WriterList)
            })
        case actionTypes.ADD_HOME_LIST:
            return state.set('articleList',state.get('articleList').concat(action.list))  
        case actionTypes.CHNAGE_SCROLL_TOP:
            return state.set('scrollShow',action.show)      
        default:
            return state;
    }
}