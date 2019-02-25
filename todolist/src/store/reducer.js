const defaultState = {
    inputValue:'111',
    list:['123','456']
};
//reducer 可以接收state  但是不可以绝不能修改state的值
export default (state = defaultState,action)=>{
    if(action.type==='change_input_value'){
        var newState = JSON.parse(JSON.stringify(state));//简单的深拷贝
        newState.inputValue = action.value;
        return newState;
    }
    if(action.type==='add_todo_item'){
        var newState = JSON.parse(JSON.stringify(state));
        newState.list.push(action.value);
        return newState;
    }
    return state;//存储的所有数据
}