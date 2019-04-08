import React,{ PureComponent } from 'react';
import { connect } from 'react-redux';
import { TopPicWrapper,TopPicItem } from '../style';

class TopPic extends PureComponent{
    render(){
        return(
            <TopPicWrapper>
                {
                    this.props.list.map((item)=>{
                        return(
                            <TopPicItem key={item.get('id')}>
                                <img src={item.get('url')} alt=''/>
                                {item.get('title')}
                            </TopPicItem>
                        )
                    })
                }
            </TopPicWrapper>
        );
    }
}

const mapState = (state)=>({
    list:state.get('home').get('toPicList')
})

export default connect(mapState,null)(TopPic);