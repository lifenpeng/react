import React,{Component,Fragment} from 'react';
import 'antd/dist/antd.css';
import { Input,Button,List } from 'antd';
import store from './store';

class Todoa extends Component {
    constructor(props){
        super(props);
        this.state = store.getState();
    }

    render(){
        return <Fragment>
            <Input value={this.state.inputValue} placeholder="search" style={{width:'300px',margin:'15px'}}/>
            <Button type="primary">Primary</Button>
            <List
            style={{width:'390px', margin:'0px 15px'}}
            bordered
            dataSource={this.state.list}
            renderItem={item => (<List.Item>{item}</List.Item>)}
            />
        </Fragment>
    }
}

export default Todoa;