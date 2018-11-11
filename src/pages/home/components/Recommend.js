import React, { Component } from 'react';
import {
    RecommendWrapper,
    RecommendItem
} from '../style'
import { connect } from 'react-redux';
class Reacommend extends Component {
    render() {
        return (
            <RecommendWrapper>
                {
                    this.props.list.map((item) => {
                        return <RecommendItem key={item.get('id')} imgUrl={item.get('imgUrl')}></RecommendItem>
                    })
                }
            </RecommendWrapper>
        )
    }
}
const mapStateToProps = (state) => ({
    list: state.getIn(['home', 'recommendList'])
})

export default connect(mapStateToProps)(Reacommend);