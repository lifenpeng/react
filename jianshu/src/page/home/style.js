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
    border-bottom:1px solid #f0f0f0;
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
    margin-bottom:30px;
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
    border-bottom:1px solid #f0f0f0;
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
        cursor:pointer;
    }
    p {
        font-size:14px;
        color:#ccc;
        line-height:25px;
    }
`;

export const ListItemMore = styled.div`
    width:100%;
    height:40px;
    background-color: #9b9b9b;
    border-radius:20px;
    font-size:16px;
    line-height:40px;
    text-align:center;
    color:#fff;
    cursor:pointer;
    margin: 30px 0px;
`;

export const RecommondInfo = styled.div`
    width:305px;
    height:auto;
    overflow:hidden;
`;

export const RecommondItem = styled.div`
    width:305px;
    height:50px;
    font-size:16px;
    line-height:50px;
    overflow:hidden;
    margin-bottom:10px;
    img {
        width:305px;
        height:50px;
        cursor:pointer;
    }
`;

export const WriterInfo = styled.div`
    width:305px;
    height:auto;
    margin-top:20px;
    overflow:hidden;
`;

export const WriterNav = styled.div`
    width:100%;
    height:20px;
    font-size:14px;
    color:#969696;
    line-height:20px;
    margin-bottom:15px;
`;

export const WriterTitle = styled.div`
    width:50%;
    height:20px;
    float:left;
`;

export const WriterChange = styled.div`
    width:50%;
    height:20px;
    float:right;
    text-align:right;
    cursor:pointer;
    .iconfont {
        margin-right:10px;
    }
`;

export const WriterItem = styled.div`
    width:305px;
    height:47px;
    position:relative;
    overflow:hidden;
    margin-bottom:15px;
`;

export const WriterPhoto = styled.div`
    width:47px;
    height:47px;
    float:left;
    border-radius:47px;
    overflow:hidden;
    img {
        width:47px;
        height:47px;
    }
`;

export const WriterInformation = styled.div`
    float:left;
    padding:0px 10px;
    overflow:hidden;
    h5 {
        font-size:16px;
        margin:5px 0px;
    }
    p {
        color:#969696;
        font-size:14px;
    }
`; 

export const WriterFlow = styled.div`
    position:absolute;
    right:0px;
    top:5px;
    color:#42c02e;
    font-size:14px;
    cursor:pointer;
`;

export const WriterAll = styled.div`
    width:303px;
    height:35px;
    font-size: 13px;
    color: #787878;
    border-radius: 4px;
    background-color: #f7f7f7;
    border: 1px solid #dcdcdc;
    text-align:center;
    line-height:35px;
    cursor:pointer;
`;
