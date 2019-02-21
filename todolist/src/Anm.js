import React,{Component,Fragment} from 'react';
import {CSSTransition,TransitionGroup} from 'react-transition-group';
import './anm.css';

class Anm extends Component{

     constructor(props){
         super(props);
         this.state = {
             list:[]
         }
         this.handleAddItem = this.handleAddItem.bind(this);
     }

    render(){
        return <Fragment>
                    <TransitionGroup>
                        {
                            this.state.list.map((item,index)=>{
                                return (
                                    <CSSTransition
                                        in={this.state.show}//触发条件
                                        timeout={2000}//执行时间
                                        classNames="fade"
                                        unmountOnExit
                                        onEntered={(el)=>{el.style.color='blue'}}
                                        appear={true}
                                    >
                                        <div className={this.state.show?'show':'hide'}>hello</div>
                                    </CSSTransition>
                                    );
                            })
                        }
                    </TransitionGroup> 
                    <button onClick={this.handleAddItem}>toggole</button>       
                </Fragment>
    }
    
    handleAddItem(){
      this.setState((prevState)=>{
          return {list:[...prevState.list,'item']} 
      })
    }
    
}

export default Anm;