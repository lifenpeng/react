import React,{Component} from 'react';
import TodoaUI from './TodoaUI';
import store from './store';
import { changeInputAction,addTodoItemAction,delTodoItemAction } from './store/actionCreator';

class Todoa extends Component {
    constructor(props){
        super(props);
        this.state = store.getState();
        this.handleChange = this.handleChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleDel = this.handleDel.bind(this);
        //只要store里的值发生变化 subscribe() 传入一个方法  就会执行这个方法 
        store.subscribe(this.handleStoreChange);
    }

    render(){
        return <TodoaUI
            inputValue = {this.state.inputValue}
            handleChange = {this.handleChange}
            handleBtnClick = {this.handleBtnClick}
            list = {this.state.list}
            handleDel = {this.handleDel}
        />;
    }

    handleChange(e){
        const action = changeInputAction(e.target.value);
        store.dispatch(action);
    }

    handleStoreChange(){
        this.setState(store.getState());
    }

    handleBtnClick(e){
        const action = addTodoItemAction(this.state.inputValue);
        store.dispatch(action);
    }

    handleDel(index){
        const action = delTodoItemAction(index);
        store.dispatch(action);
    }

}

export default Todoa;