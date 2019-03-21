import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { ListInfo,ListItem,ListItemLeft,ListItemMore } from '../style';

class List extends Component{
    render(){
        return(
            <ListInfo>
                {
                    this.props.list.map((item)=>{
                        return(
                            <ListItem key={item.get('id')}>
                                <ListItemLeft>
                                    <a>{item.get('title')}</a>
                                    <p>{item.get('desc')}</p>
                                </ListItemLeft>
                                <img  alt="" src={item.get('url')} />
                            </ListItem>
                        )
                    })
                }
                <ListItemMore>阅读更多</ListItemMore>
            </ListInfo>
        );
    }
}

const mapState = (state)=>({
    list:state.get('home').get('articleList')
})

export default connect(mapState,null)(List);