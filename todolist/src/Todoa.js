import React,{Component,Fragment} from 'react';
import 'antd/dist/antd.css';
import { Input,Button,List } from 'antd';
import store from './store';
import { changeInputAction,addTodoItemAction,delTodoItemAction } from './store/actionCreator';

class Todoa extends Component {
    constructor(props){
        super(props);
        this.state = store.getState();
        this.handleChange = this.handleChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        //只要store里的值发生变化 subscribe() 传入一个方法  就会执行这个方法 
        store.subscribe(this.handleStoreChange);
    }

    render(){
        return <Fragment>
            <Input 
            value={this.state.inputValue} 
            placeholder="search" 
            style={{width:'300px',margin:'15px'}}
            onChange={this.handleChange}
            />
            <Button 
            type="primary"
            onClick = {this.handleBtnClick}
            >Primary</Button>
            <List
            style={{width:'390px', margin:'0px 15px'}}
            bordered
            dataSource={this.state.list}
            renderItem={(item,index) => (<List.Item onClick={this.handleDel.bind(this,index)}>{item}</List.Item>)}
            />
        </Fragment>
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