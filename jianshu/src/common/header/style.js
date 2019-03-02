import styled from 'styled-components';
import logoPic from '../../static/logo.png'

export const HeaderWrapper = styled.div`
    position: relative;
    height: 58px;
    border-bottom:1px solid #f0f0f0;
`

export const Logo = styled.a`
    position: absolute;
    top:0;
    left:0;
    width:100px;
    height:58px;
    background:url(${logoPic});
    background-size:contain;
`

export const Nav = styled.div`
    width:960px;
    height:100%;
    margin:0 auto;
`

export const NavItem = styled.div`
    &.left {
        float:left;
    }
    &.right {
        float:right;
        color:#969696;
    }
    &.active {
        color:#ea6f5a;
    }
    height:58px;
    line-height:58px;
    font-size:17px;
    padding:0px 15px;
    color:#333;
`

export const NavSearch = styled.input.attrs({
    placeholder:'搜索'
})`
    width:160px;
    height:38px;
    border:none;
    outline:none;
    box-sizing:border-box;
    border-radius:19px;
    background:#eee;
    margin-top:9px;
    margin-left:20px;
    padding:0px 20px;
    font-size:14px;
    &::placeholder {
        color:#999;
    }
`

export const AddTion = styled.div`
    position:absolute;
    right:0px;
    top:0px;
    height:58px;
`

export const Button = styled.div`
    float:right;
    line-height:38px;
    margin-top:9px;
    border-radius:19px;
    border:1px solid #ec6149;
    margin-right:20px;
    padding:0px 20px;
    font-size:14px;
    &.reg {
        background:#ec6149;
        color:#fff;
    }
    &.art {
        color:#ec6149;
    }
`
