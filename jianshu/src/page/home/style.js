import styled from 'styled-components';

export const HomeWrapper = styled.div`
    width:960px;
    height:auto;
    margin:0 auto;
    overflow:hidden;
`;

export const HomeLeft = styled.div`
    width:625px;
    background:#fff;
    padding-top:30px;
    float:left;
    .img_banner {
        width:625px;
        height:270px;
    }
`;

export const HomeRight = styled.div`
    width:305px;
    background:pink;
    padding-top:30px;
    float:left;
    margin-left:30px;
`;

export const TopPicWrapper = styled.div`
    width:100%;
    height:auto;
    overflow:hidden;
    margin-top:10px;
    margin-left:-10px;
`;

export const TopPicItem = styled.div`
    float:left;
    height:32px;
    background:#f7f7f7;
    line-height:32px;
    font-size:14px;
    padding-right:10px;
    border:1px solid #dcdcdc;
    border-radius:4px;
    cursor:pointer;
    margin-left:10px;
    margin-top:20px;
    img {
        width:32px;
        height:32px;
        display:block;
        float:left;
        margin-right:10px;
    }
`;

export const ListInfo = styled.div`
    width:100%;
    height:auto;
    overflow:hidden;
    margin-top:20px;
`;

export const ListItem = styled.div`
    width:100%;
    height:160px;
    overflow:hidden;
    border-top:1px solid #f0f0f0;
    margin-bottom:10px;
    img {
        width:125px;
        height:80px;
        float:right;
        margin:40px 0px;
    }
`;

export const ListItemLeft = styled.div`
    width:500px;
    height:160px;
    float:left;
    font-size:14px;
    padding:15px 0px;
    a {
        font-size:18px;
        color:#000;
        font-size: 18px;
        font-weight: 700;
        display:block;
        margin-bottom:15px;
    }
    p {
        font-size:14px;
        color:#ccc;
        line-height:25px;
    }
`;