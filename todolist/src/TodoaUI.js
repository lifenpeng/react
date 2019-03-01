import React,{Fragment} from 'react';
import 'antd/dist/antd.css';
import { Input,Button,List } from 'antd';

const TodoaUI = (props)=>{
    return (
        <Fragment>
        <Input 
        value={props.inputValue} 
        placeholder="search" 
        style={{width:'300px',margin:'15px'}}
        onChange={props.handleChange}
        />
        <Button 
        type="primary"
        onClick = {props.handleBtnClick}
        >Primary</Button>
        <List
        style={{width:'390px', margin:'0px 15px'}}
        bordered
        dataSource={props.list}
        renderItem={(item,index) => (<List.Item onClick={()=>{props.handleDel(index)}}>{item}</List.Item>)}
        />
    </Fragment>
    )
}

export default TodoaUI;