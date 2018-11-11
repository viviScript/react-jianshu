import React, { Component } from 'react';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper,
    SearchInfo,
    SearchTitle,
    SearchInfoSwitch,
    SearchInfoList,
    SearchItem
} from './style'
import { CSSTransition } from 'react-transition-group'
import {connect} from 'react-redux';
import { actionCreators } from './store';

class Header extends Component {
    getLIstArea = () => {
        const { focused, list, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage}  = this.props;
        const newList = list.toJS();
        const pageList = []
        if (newList.length) {
            for (let i = (page - 1) * 10; i < page * 10; i++) {
                pageList.push(
                    <SearchItem key={newList[i]} >{newList[i]}</SearchItem>
                )
            }
        }
        
        if (focused || mouseIn) {
            return (
                <SearchInfo 
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                    <SearchTitle>
                        热门搜索
                        <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage)}>换一批</SearchInfoSwitch>
                    </SearchTitle>
                    <SearchInfoList>
                        {
                            pageList
                            // list.map((item, index) => {
                            //     return  <SearchItem key={item} >{item}</SearchItem>
                            // })
                        }
                        
                    </SearchInfoList>
                </SearchInfo>
            )
        } else {
            return null;
        }
    }
    render () {
        const { focused, handleInputBlur, handleInputFocus} = this.props;
        return (
            <HeaderWrapper>
                <Logo href='/' /> 
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载</NavItem>
                    <NavItem className='right'>登陆</NavItem>
                    <NavItem className='right'>
                        <i className='iconfont'>&#xe636;</i>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={200}
                            classNames='slide'
                        >
                        <NavSearch
                            onBlur={handleInputBlur}
                            onFocus={handleInputFocus}
                            className={focused ? 'focused' : ''}
                        ></NavSearch>
                        
                        </CSSTransition>
                        <i 
                        className={focused ? 'focused iconfont' : 'iconfont'}
                        >&#xe636;</i>
                        {this.getLIstArea()}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className='writting'>
                        <i className='iconfont'>&#xe615;</i>
                        写文章
                    </Button>
                    <Button className='reg'>注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        // focused: state.header.get('focused') redux
        focused: state.getIn(['header', 'focused']),
        // focused: state.get('header').get('focused') // redux-immutable
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        totalPage: state.getIn(['header', 'totalPage']), 
        mouseIn: state.getIn(['header', 'mouseIn'])
    }
}
const mapActionToProps = (dispatch) => {
    return {
        handleInputFocus () {
            dispatch(actionCreators.getList());
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur () {
            dispatch(actionCreators.searchBlur());
        },
        handleMouseEnter () {
            dispatch(actionCreators.mouseEnter());
        },
        handleMouseLeave () {
            dispatch(actionCreators.mouseLeave()); 
        },
        handleChangePage (page, totalPage) {
            if (page < totalPage) {
                dispatch(actionCreators.changePage(page + 1))
            } else {
                dispatch(actionCreators.changePage(1)) 
            }
            
        }
    }   
}
export default connect(mapStateToProps, mapActionToProps)(Header);