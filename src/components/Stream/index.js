import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Stream from './presenter';

function mapStateToProps(state) {
    const tracks = state.track;

    return {
        tracks
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onAuth: bindActionCreators(actions.auth, dispatch)
    }
}

//the connect function returns a function which takes
//the stream component as argument to return
//a higher order component.
//this higher order component is able to access
//the redux store while the stream component itself
//is only presenting our data
export default connect(mapStateToProps, mapDispatchToProps) (Stream);