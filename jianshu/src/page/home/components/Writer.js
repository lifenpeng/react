import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { 
    WriterInfo,
    WriterItem,
    WriterPhoto,
    WriterInformation,
    WriterNav,
    WriterTitle,
    WriterChange,
    WriterFlow,
    WriterAll
} from '../style';

class Writer extends Component{
    render(){
        return(
            <WriterInfo>
                <WriterNav>
                    <WriterTitle>推荐作者</WriterTitle>
                    <WriterChange><i className='iconfont'>&#xe606;</i>换一批</WriterChange>
                </WriterNav>
                {
                    this.props.list.map((item)=>{
                        return (
                        <WriterItem key={item.get('id')}>
                            <WriterPhoto>
                                <img alt="" src={item.get('url')} />
                            </WriterPhoto>
                            <WriterInformation>
                                <h5>{item.get('auth')}</h5>
                                <p>{item.get('desc')}</p>
                            </WriterInformation>
                            <WriterFlow>+关注</WriterFlow>
                        </WriterItem>
                        )
                    })
                }
                <WriterAll>查看全部 ></WriterAll>
            </WriterInfo>
        );
    }
}

const mapState = (state)=>({
    list:state.get('home').get('WriterList')
})

export default connect(mapState,null)(Writer);