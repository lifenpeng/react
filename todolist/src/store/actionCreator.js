import { CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DEL_TODO_ITEM } from './actionTypes';
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