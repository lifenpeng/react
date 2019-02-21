import React,{Component} from 'react';
import PropTypes from 'prop-types';

class Todoitem extends Component{

    constructor(props){
        super(props);
        this.delitem = this.delitem.bind(this);
    }

    //当一个组件从父组件接收了参数 否则不会执行
    //只有父组件render函数被重新执行，子组件的这个生命周期函数就会被执行
    componentWillReceiveProps(){
        console.log('componentWillReceiveProps');
    }

    //当这个页面即将被从这个页面剔除的时候会被自动执行
    componentWillUnmount(){
        console.log('componentWillUnmount');
    }

    //避免子组件重复渲染
    shouldComponentUpdate(nextProps,nextState){
        if(nextProps.content!==this.props.content){
            return true;
        }else{
            return false;
        }
    }

    render(){
        const { content } = this.props;
        return <li onClick={this.delitem}>{content}</li>
    }

    delitem(){
       const { delli,index } = this.props;
       delli(index);
    }
}

//变量类型校验  如果不加isRequired 只有从父组件传过来的值才会被校验 isRequired表示父组件必须传test这个值 否则会警告
//PropTypes.oneOfType 校验多个值 满足一个即可  还有更多其他方法  可以看react官方文档
Todoitem.propTypes = {
    content:PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
    delli:PropTypes.func,
    index:PropTypes.number.isRequired
}

Todoitem.defaultProps ={
    test:'hello'
}

export default Todoitem;