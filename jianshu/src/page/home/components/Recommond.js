import React,{ PureComponent } from 'react';
import { connect } from 'react-redux';
import { RecommondInfo,RecommondItem } from '../style';

class Recommend extends PureComponent{
    render(){
        return(
            <RecommondInfo>
                {
                    this.props.list.map((item)=>{
                        return (
                            <RecommondItem key={item.get('id')}>
                                <img alt="" src={item.get('url')} />
                            </RecommondItem> 
                        )
                    })
                }
            </RecommondInfo>
        );
    }
}

const mapState = (state)=>({
    list:state.get('home').get('recommendList')
})

export default connect(mapState,null)(Recommend);