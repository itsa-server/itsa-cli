require('assets/css/index.scss');

const image = require('assets/images/acceletrial-arrow-43.png');
const React = require('react'),
    PropTypes = require('prop-types'),
    appModule = require('app');

class Body extends React.Component {

    componentDidMount() {
        this.app = appModule.getApp();
    }
    login() {
        this.app.login();
    }
    logout() {
        this.app.logout();
    }
    zoomin() {
        this.app.zoomin();
    }
    zoomout() {
        this.app.zoomout();
    }
    render() {
        let loggedIn = this.props.__appProps.loggedIn ? 'LOGGED IN' : 'NOT LOGGEDIN';
        return (
            <div>
                <h1>INDEX</h1>
                <h2>zoomlevel: {this.props.zoomLevel}</h2>
                <div>{loggedIn}</div>
                <a href="/information">Goto page Information</a>
                <img src="/assets/images/acceletrial-arrow-43.png" />
                <img src={image} />
                <div>
                    <button className="pure-button" onClick={this.login.bind(this)}>login</button>
                    <button className="pure-button" onClick={this.logout.bind(this)}>logout</button>
                </div>
                <div>
                    <button className="pure-button" onClick={this.zoomin.bind(this)}>zoomin</button>
                    <button className="pure-button" onClick={this.zoomout.bind(this)}>zoomout</button>
                </div>
            </div>
        );
    }
}

Body.propTypes = {
    /**
     * the app and page specific props
     *
     * @property __appProps
     * @type String
     * @protected
     * @private
     * @since 2.0.0
    */
    __appProps: PropTypes.object.isRequired,
    zoomLevel: PropTypes.number
};

module.exports = Body;
