import React, { Component,Fragment } from 'react';
import './todolist.css';
import Todoitem from './Todoitem';
import axios from 'axios';

class Todolist extends Component {

  constructor(props){
    super(props);
    //当组件state 或则 props 值发生变化 render函数就会重新执行
    //当父组件的render重新执行 子组件render也会被重新执行
    this.state = {
      inputValue:'',
      list:[]
    }
    //初始化时声明函数 绑定this 有利于性能
    this.inputChange = this.inputChange.bind(this);
    this.btnClick = this.btnClick.bind(this);
    this.liDel = this.liDel.bind(this);
  }

  //在组件即将被挂载到页面时自动执行
  componentWillMount(){
    console.log('componentWillMount');
  }

  //在组件挂载完成后自动执行
  componentDidMount(){
    //可用于发送ajax请求
    axios.get('/api/todolist').then((res)=>{
        console.log(res);
    }).catch(()=>{
        console.log('error');
    })
    console.log('componentDidMount');
  }

  //组件被更新之前它会被自动执行
  shouldComponentUpdate(){
    console.log('shouldComponentUpdate');
    return true;
  }

  //组件被更新之前它会被自动执行 但是会在shouldComponentUpdata 返回 true时执行 如果返回false 则不会执行
  componentWillUpdate(){
    console.log('componentWillUpdate');
  }

  //组件在更新完成后,它会自动被执行
  componentDidUpdate(){
    console.log('componentDidUpdate');
  }

  render() {
    console.log('render');
    return (
      <Fragment>
        {/*这里是注释内容 */}
         <div className='input_b'>
           <label htmlFor='insert'>待办事项：</label>
           <input 
            id='insert' 
            value={this.state.inputValue} 
            onChange={this.inputChange} 
            ref={(input)=>{this.input = input}}
           />
           <button onClick={this.btnClick}>提交</button>
          </div>
         <ul>
           {this.getTodoitem()}
         </ul>
      </Fragment>
    );
  }

  getTodoitem(){
    const item =this.state.list.map((item,index)=>{
      return(
        <Todoitem key={index} content={item} index={index} delli={this.liDel} />
      ) 
    })
    return item;
  }

  inputChange(e){
    //es6 语法  ()=>({}) 箭头函数  第二个() 表示 返回值 相当于return
    //老的写法
    //  this.setState({
    //    inputValue:e.target.value
    //  })
    //const value = e.target.value;
    const value = this.input.value;
    this.setState(()=>({
        inputValue:value
    }));
    //通过一个函数返回一个对象 会变成异步 e.target.value 会获取不到 需要在外部声明value
  }
  btnClick(){
    //prevState 之前的数据 可以防止误修改数据 =this.state
    this.setState((prevState)=>({
      list:[...prevState.list,prevState.inputValue], 
      //list:[...this.state.list,this.state.inputValue]
      //es6语法 ...表示展开当前this.state.list并且与this.state.inputValue 合并 形成新的数组
      inputValue:''
    }));
  }
  liDel(index){
    //immutable
    //state 不允许直接修改 可以通过中间值 使用setState修改
    this.setState((prevState)=>{
      const list = [...prevState.list];
      list.splice(index,1);
      //list:list  这里也可以用 this.state.list 但是不推荐 性能优化时会有问题
      return {list:list};
    });
  }
}

export default Todolist;
