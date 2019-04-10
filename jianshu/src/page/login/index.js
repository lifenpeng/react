import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import {  LoginMain,LoginBox,LoginTitle,LoginInput,LoginButton,Logo } from './style';

class Login extends Component{
    render(){
        return(
            <LoginMain>
                <Link to='/'>
                    <Logo>
                        <img src="//cdn2.jianshu.io/assets/web/logo-58fd04f6f0de908401aa561cda6a0688.png" alt="Logo" />
                    </Logo>
                </Link>
                <LoginBox>
                    <LoginTitle>登录</LoginTitle>
                    <LoginInput></LoginInput>
                    <LoginInput></LoginInput>
                    <LoginButton>登录</LoginButton>
                </LoginBox>
            </LoginMain>
        )
    }
}

export default Login;