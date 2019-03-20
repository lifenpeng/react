import React,{ Component } from 'react';
import { HomeWrapper,HomeLeft,HomeRight } from './style';
import List from './components/List';
import TopPic from './components/TopPic';
import Recommond from './components/Recommond';
import Writer from './components/Writer';

class Home extends Component{
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
            </HomeWrapper>
        );
    }
}

export default Home;