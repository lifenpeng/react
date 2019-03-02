import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { mapDispatchToProps } from './store/createAction';

const Todolist = (props)=>{

  const { inputValue,handleChange,handleClick,list,handleDel } = props;

  return(
      <Fragment>
      <input value={inputValue} onChange={handleChange} />
      <button onClick={handleClick}>提交</button>
      <ul>
        {
          list.map((item,index)=>{
            return (
              <li onClick={handleDel.bind(this,index)} key={index}>{item}</li>
            )
          }) 
        }
      </ul>
    </Fragment>
  )
}

const mapStateToProps = (state)=>{
  return {
     inputValue:state.inputValue,
     list:state.list
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Todolist);
