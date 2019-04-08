import React,{ PureComponent } from 'react';
import { connect } from 'react-redux';
import { ListInfo,ListItem,ListItemLeft,ListItemMore } from '../style';
import { actionCreatore } from '../store';
import { Link } from 'react-router-dom';

class List extends PureComponent{
    render(){
        const { list,getMoreList } = this.props;
        return(
            <ListInfo>
                {
                    list.map((item,index)=>{
                        return(
                            <Link key={index} to='/detail'> 
                                <ListItem>
                                    <ListItemLeft>
                                        <div href={item.get('id')}>{item.get('title')}</div>
                                        <p>{item.get('desc')}</p>
                                    </ListItemLeft>
                                    <img  alt="" src={item.get('url')} />
                                </ListItem>
                            </Link>
                        )
                    })
                }
                <ListItemMore onClick={getMoreList}>阅读更多</ListItemMore>
            </ListInfo>
        );
    }
}

const mapState = (state)=>({
    list:state.get('home').get('articleList')
})

const mapDispatch = (dispatch)=>({
    getMoreList(){
        dispatch(actionCreatore.getMoreList());
    }
})

export default connect(mapState,mapDispatch)(List);