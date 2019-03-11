import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import {
   HeaderWrapper,
   Logo,
   Nav,
   NavItem,
   NavSearch,
   AddTion,
   Button
} from './style';

function Header(props){
    return(<HeaderWrapper>
    <Logo href='/'></Logo>
    <Nav>
        <NavItem className='left active'>首页</NavItem>
        <NavItem className='left'>下载App</NavItem>
        <NavItem className='right'>登录</NavItem>
        <NavItem className='right'><i className='iconfont'>&#xe602;</i></NavItem>
        <CSSTransition
            in={props.focused}
            timeout={200}
            classNames='slide'
        >
            <NavSearch
                className={props.focused?'focused':''}
                onFocus={props.handleinputfocuse}
                onBlur={props.handleinputblur}
            ></NavSearch>
        </CSSTransition>
        <i className='iconfont'>&#xe615;</i>
    </Nav>
    <AddTion>
        <Button className='art'><i className='iconfont'>&#xe703;</i>写文章</Button>
        <Button className='reg'>注册</Button>
    </AddTion>
</HeaderWrapper>)
}

const mapStateToProps = (state)=>{
    return {
        focused:state.header.focused
    }
}

const mapDispatchToProps = (dispatch)=>{
   return {
        handleinputfocuse(){
            dispatch(actionCreators.searchFoucs());
        },
        handleinputblur(){
            dispatch(actionCreators.searchBlur());
        }
   }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);