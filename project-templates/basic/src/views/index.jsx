import 'assets/css/index.scss';

import React from 'react';
import PropTypes from 'prop-types';
import appModule from 'app';

class Body extends React.Component {

    componentDidMount() {
        this.app = appModule.getApp();
    }
    zoomin() {
        this.app.zoomin();
    }
    zoomout() {
        this.app.zoomout();
    }
    render() {
        const appProps = this.props.__appProps;
        return (
            <div>
                <h1>Hello world!</h1>
                <a href="/information">Goto page Information</a>
                <h2>zoomlevel: {appProps.bodyattrcookie.zoom}</h2>
                <div>
                    <button className="zoomBtn" onClick={this.zoomout.bind(this)}>zoomout</button>
                    <button className="zoomBtn" onClick={this.zoomin.bind(this)}>zoomin</button>
                </div>
            </div>
        );
    }
}

Body.propTypes = {
    __appProps: PropTypes.object
};

export default Body;
