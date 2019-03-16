import React,{ Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import {
   HeaderWrapper,
   Logo,
   Nav,
   NavItem,
   SearchBody,
   NavSearch,
   SearchInfo,
   SearchInfoTitle,
   SearchInfoSwitch,
   SearchUl,
   SearchLi,
   AddTion,
   Button
} from './style';


class Header extends Component{

    SearchShow = ()=>{
        const { focused,list,page,totalPage,handleMouseEnter,handleMouseLeave,mouseIn,handleChangePage } = this.props;
        //list为immutable对象  需要用toJS转换成普通js对象
        const newList = list.toJS();
        const pageList = [];
        if(newList.length>0){
            for(let i = (page-1) * 10;i< page * 10; i++){
                pageList.push(
                    <SearchLi key={i}>{newList[i]}</SearchLi>
                );
            }
        }
        if(focused||mouseIn){
            return (
                <SearchInfo 
                    onMouseEnter={handleMouseEnter} 
                    onMouseLeave={handleMouseLeave}
                >
                    <SearchInfoTitle>热门搜索</SearchInfoTitle>
                    <SearchInfoSwitch onClick={()=>handleChangePage(page,totalPage,this.spinIcon)}>
                        <i ref={ (icon)=>{ this.spinIcon = icon } } className='iconfont'>&#xe606;</i>换一批
                    </SearchInfoSwitch>
                    <SearchUl>
                        { pageList }
                    </SearchUl>
                </SearchInfo>
            )
        }else{
            return null;
        }
    }

    render(){
        const { focused,handleinputfocuse,handleinputblur,list } = this.props;
        return(
            <HeaderWrapper>
                <Logo href='/'></Logo>
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载App</NavItem>
                    <NavItem className='right'>登录</NavItem>
                    <NavItem className='right'><i className='iconfont'>&#xe602;</i></NavItem>
                    <SearchBody>
                        <CSSTransition
                            in={focused}
                            timeout={200}
                            classNames='slide'
                        >
                            <NavSearch
                                className={focused?'focused':''}
                                onFocus={()=>handleinputfocuse(list)}
                                onBlur={handleinputblur}
                            ></NavSearch>
                        </CSSTransition>
                        {this.SearchShow()}
                        <i className='iconfont'>&#xe615;</i>
                    </SearchBody>
                </Nav>
                <AddTion>
                    <Button className='art'><i className='iconfont'>&#xe703;</i>写文章</Button>
                    <Button className='reg'>注册</Button>
                </AddTion>
            </HeaderWrapper>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        //getIn 传入一个数组 表示获取state中 header 下 focused 的值 等价于下面写法
        focused:state.getIn(['header','focused']),
        list:state.getIn(['header','list']),
        page:state.getIn(['header','page']),
        mouseIn:state.getIn(['header','mouseIn']),
        totalPage:state.getIn(['header','totalPage'])
        //focused:state.get('header').get('focused')
    }
}

const mapDispatchToProps = (dispatch)=>{
   return {
        handleinputfocuse(list){
            if(list.size===0){
                dispatch(actionCreators.getList());
            }
            dispatch(actionCreators.searchFoucs());
        },
        handleinputblur(){
            dispatch(actionCreators.searchBlur());
        },
        handleMouseEnter(){
            dispatch(actionCreators.mouseEnter());
        },
        handleMouseLeave(){
            dispatch(actionCreators.mouseLeave());
        },
        handleChangePage(page,totalPage,spin){
            let angle = spin.style.transform.replace(/[^0-9]/ig,'');
            if(angle){
                angle = parseInt(angle,10);
            }else{
                angle = 0;
            }
            spin.style.transform = 'rotate('+(360+angle)+'deg)';
            if(page<totalPage){
                dispatch(actionCreators.changePage(page+1));
            }else{
                dispatch(actionCreators.changePage(1));
            }
        } 
   }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header); 