import React,{ Component } from 'react';
import { connect } from 'react-redux';
import {  actionCreatore } from './store';
import { DetailInfo, Header,Center,CenterPhoto,Auth,AuthName,ArticleTime,Nname,Flow,Article } from './style';

class Detail extends Component{

    componentDidMount(){
        this.props.getDetail(this.props.match.params.id);
    }

    render(){
        const { title,content } = this.props
        return (
            <DetailInfo>
                <Header>{title}</Header>
                <Center>
                    <CenterPhoto>
                        <img alt='' src='//upload.jianshu.io/users/upload_avatars/15206224/7b4a960c-8a30-4c91-9808-9b46a34714e5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96' />
                    </CenterPhoto>
                    <Auth>
                        <AuthName>
                            <Nname>中二阿姨</Nname>
                            <Flow>关注</Flow>
                        </AuthName>
                        <ArticleTime>
                            2019.02.15 10:23* 字数 362 阅读 1730评论 11喜欢 24
                        </ArticleTime>
                    </Auth>
                </Center>
                <Article dangerouslySetInnerHTML={{__html:content}}></Article>
            </DetailInfo>
        );
    }
}

const mapState = (state)=>({
    title:state.getIn(['detail','title']),
    content:state.getIn(['detail','content'])
})

const mapDispatch = (dispatch)=>({
    getDetail(id){
        dispatch(actionCreatore.getDetail(id));
    }
})

export default connect(mapState,mapDispatch)(Detail);