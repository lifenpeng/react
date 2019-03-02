import React,{ Component } from 'react';
import {
   HeaderWrapper,
   Logo,
   Nav,
   NavItem,
   NavSearch,
   AddTion,
   Button
} from './style';

class Header extends Component{
    render(){
        return <HeaderWrapper>
            <Logo href='/'></Logo>
            <Nav>
                <NavItem className='left active'>首页</NavItem>
                <NavItem className='left'>下载App</NavItem>
                <NavItem className='right'>登录</NavItem>
                <NavItem className='right'><i className='iconfont'>&#xe615;</i></NavItem>
                <NavSearch></NavSearch>
            </Nav>
            <AddTion>
                <Button className='art'><i className='iconfont'>&#xe703;</i>写文章</Button>
                <Button className='reg'>注册</Button>
            </AddTion>
        </HeaderWrapper>
    }
}

export default Header;