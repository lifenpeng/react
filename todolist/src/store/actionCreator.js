import { CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DEL_TODO_ITEM,INIT_LIST_ACTION,GET_INIT_LIST } from './actionTypes';

export const changeInputAction = (value)=>({
    type:CHANGE_INPUT_VALUE,
    value
})

export const addTodoItemAction = (value)=>({
    type:ADD_TODO_ITEM,
    value
})

export const delTodoItemAction = (index)=>({
    type:DEL_TODO_ITEM,
    index
})

export const initListAction = (data)=>({
    type:INIT_LIST_ACTION,
    data
})

export const getInitList = ()=>({
    type:GET_INIT_LIST
})