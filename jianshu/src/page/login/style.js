import styled from 'styled-components';

export const Logo = styled.div`
    width:100px;
    height:46px;
    position:absolute;
    left:50px;
    top:50px;
    cursor:pointer;
    img {
        width:100px;
        height:46px; 
    }
`

export const LoginMain = styled.div`
    width:100%;
    height:100%;
    background:#f1f1f1;
    padding:0;
    margin:0px;
    position:absolute;
    left:0;
    top:0px;
`

export const LoginBox = styled.div`
    width:400px;
    height:300px;
    background:#fff;
    box-shadow:0 0 8px rgba(0,0,0,.1);
    margin:0 auto;
    position:absolute;
    left:50%;
    top:50%;
    margin:-175px -200px;
`

export const LoginTitle = styled.h3`
    text-align:center;
    font-weight: 700;
    font-size:20px;
    color: #ea6f5a;
    line-height:60px;
`

export const LoginInput = styled.input`
    display:block;
    width:280px;
    height:35px;
    margin:15px auto;
    padding-left:10px;
    font-size:16px;
    border-radius:3px;
    border:1px solid #c8c8c8
`

export const LoginButton = styled.div`
    width:300px;
    height:35px;
    margin:30px auto;
    background:#3194d0;
    border-radius:15px;
    color:#fff;
    line-height:35px;
    text-align:center;
    cursor:pointer;
`