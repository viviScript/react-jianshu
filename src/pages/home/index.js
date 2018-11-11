import React, { Component } from 'react';
import { 
    HomeWrapper,
    HomeLeft,
    Homeright
 } from './style.js'
import Topic from './components/Topic'
import Recommend from './components/Recommend'
import List from './components/List'
import Writer from './components/Writer'
class Home extends Component {
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img alt=''
                        className='banner-img' 
                        src='https://upload.jianshu.io/admin_banners/web_images/4550/a4aba36241eb146c13892301e486417cbf16af18.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540' 
                        />
                    <Topic />
                    <List /> 
                </HomeLeft>
                <Homeright>
                    <Recommend />
                    <Writer />
                </Homeright>
            </HomeWrapper>
        )
    }
}
export default Home;