import React,{ PureComponent } from 'react';
import { HomeWrapper,HomeLeft,HomeRight } from './style';
import { connect } from 'react-redux';
import List from './components/List';
import TopPic from './components/TopPic';
import Recommond from './components/Recommond';
import Writer from './components/Writer';
import { actionCreatore } from './store';
import { BackTop } from './style';

//PureComponent（要结合immutable使用 否则会有一些坑） 避免组件无意义的渲染 可以手写shouldComponentUpdate声明周期函数代替  

class Home extends PureComponent{

    // shouldComponentUpdate(){
    //     return false;
    // }

    handleScrollTop(){
        window.scrollTo(0,0);
    }

    render(){
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className='img_banner' src="//upload.jianshu.io/admin_banners/web_images/4621/745bdffc3682829d902af056d54e4f8f34614f48.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="540" />
                    <TopPic></TopPic>
                    <List></List>
                </HomeLeft>
                <HomeRight>
                    <Recommond></Recommond>
                    <Writer></Writer>
                </HomeRight>
                { this.props.scrollShow?<BackTop onClick={this.handleScrollTop}>返回顶部</BackTop>:null }
            </HomeWrapper>
        );
    }

    componentDidMount(){
        this.props.changeHomeData();
        this.bindEvents();
    }

    componentWillUnmount(){
        window.removeEventListener('scroll',this.props.changScrollTopShow);
    }

    bindEvents(){
        window.addEventListener('scroll',this.props.changScrollTopShow)
    }
}

const mapDispatch = (dispatch)=>{
    return {
        changeHomeData(){
            dispatch(actionCreatore.getchangeHomeData());
        },
        changScrollTopShow(){
            if(document.documentElement.scrollTop>200){
                dispatch(actionCreatore.changScrollTop(true));
            }else{
                dispatch(actionCreatore.changScrollTop(false));
            }
        }
    };
}

const mapState = (state)=>({
    scrollShow:state.get('home').get('scrollShow')
})

export default connect(mapState,mapDispatch)(Home);