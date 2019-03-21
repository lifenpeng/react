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
    .slide-enter {
        width:160px;
        transition:all .2s ease-out;
    }
    .slide-enter-active {
        width:200px;
    }
    .slide-exit {
        width:240px;
        transition:all .2s ease-out;
    }
    .slide-exit-active {
        width:  160px;
    }
`

export const NavItem = styled.div`
    &.left {
        float:left;
    }
    &.right {
        float:right;
        color:#969696;
        cursor:pointer;
        i{
            font-size:24px;
        }
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

export const SearchBody = styled.div`
    min-width:160px;
    height:38px;
    margin-left:20px;
    float:left;
    position:relative;
    i{
        position: absolute;
        right:10px;
        top:20px;
    }
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
    padding:0px 20px;
    font-size:14px;
    padding-right:35px;
    &::placeholder {
        color:#999;
    }
    &.focused {
        width:240px;
    }
`

export const SearchInfo = styled.div`
    width:250px;
    height:auto;
    position: absolute;
    top:60px;
    left:0px;
    background-color: #fff;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
    padding-bottom:20px;
    border-radius:5px;
`

export const SearchInfoTitle = styled.div`
    margin-top:20px;
    margin-left:20px;
    font-size:14px;
    color:#969696;
    float:left;
`

export const SearchInfoSwitch = styled.div`
    margin-top:20px;
    margin-right:20px;
    font-size:14px;
    color:#969696;
    float:right;
    cursor:pointer;
    position:relative;
    i{
        position:absolute;
        display:block;
        top:0px;
        right:50px;  
        transition:all .2s ease-in;
        transform-origin:center center;
    }
`

export const SearchUl = styled.ul`
    float:left;
    width:100%;
    line-height:20px;
    height:auto;
`
export const SearchLi = styled.li`
    float:left;
    font-size: 12px;
    color: #787878;
    border: 1px solid #ddd;
    border-radius: 3px;
    padding:0px 5px;
    font-size:12px;
    margin-left:15px;
    margin-top:10px;
    cursor:pointer;
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
        cursor:pointer;
    }
    &.art {
        color:#ec6149;
        cursor:pointer;
        i{
            padding-right:5px;
            padding-top:5px;
        }
    }
`
