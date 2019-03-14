import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import {
   HeaderWrapper,
   Logo,
   Nav,
   NavItem,
   SearchBody,
   NavSearch,
   SearchInfo,
   SearchInfoTitle,
   SearchInfoSwitch,
   SearchUl,
   SearchLi,
   AddTion,
   Button
} from './style';


const searchShow = (show)=>{
    if(show){
        return (
            <SearchInfo>
                <SearchInfoTitle>热门搜索</SearchInfoTitle>
                <SearchInfoSwitch>换一批</SearchInfoSwitch>
                <SearchUl>
                    <SearchLi>react-redux</SearchLi>
                    <SearchLi>react-redux</SearchLi>
                    <SearchLi>react-redux</SearchLi>
                    <SearchLi>react-redux</SearchLi>
                    <SearchLi>react-redux</SearchLi>
                    <SearchLi>react-redux</SearchLi>
                    <SearchLi>react-redux</SearchLi>
                    <SearchLi>react-redux</SearchLi>
                    <SearchLi>react-redux</SearchLi>
                    <SearchLi>react-redux</SearchLi>
                </SearchUl>
            </SearchInfo>
        )
    }else{
        return null;
    }
}

function Header(props){
    return(<HeaderWrapper>
    <Logo href='/'></Logo>
    <Nav>
        <NavItem className='left active'>首页</NavItem>
        <NavItem className='left'>下载App</NavItem>
        <NavItem className='right'>登录</NavItem>
        <NavItem className='right'><i className='iconfont'>&#xe602;</i></NavItem>
        <SearchBody>
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
            {searchShow(props.focused)}
            <i className='iconfont'>&#xe615;</i>
        </SearchBody>
    </Nav>
    <AddTion>
        <Button className='art'><i className='iconfont'>&#xe703;</i>写文章</Button>
        <Button className='reg'>注册</Button>
    </AddTion>
</HeaderWrapper>)
}

const mapStateToProps = (state)=>{
    return {
        //getIn 传入一个数组 表示获取state中 header 下 focused 的值 等价于下面写法
        focused:state.getIn(['header','focused'])
        //focused:state.get('header').get('focused')
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