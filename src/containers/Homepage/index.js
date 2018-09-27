import React, { Component } from 'react'
import { connect } from 'react-redux'
import Home from '../../screens'

import { 
 
 } from '../../actions/homepage';

const style = {
    width: '100%'
} 

class HomeContainer extends Component {
    constructor (props) {
        super(props)

        this.state = {
           
        }
    }

    
    render () {
        return (
            <div className="" style={style}>
                <Home />
            </div>
        )
    }

}

const mapStateToProps = (state, ownProps) => {
    return {
        
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeContainer);