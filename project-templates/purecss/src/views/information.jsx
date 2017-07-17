/* eslint react/no-danger: 0 */
require('assets/css/information.scss');

const React = require('react'),
    PropTypes = require('prop-types'),
    appModule = require('app');
// appStore = require('../redux/app-store'),
// store = appStore.createStore(),
// actionIncrement = require('../redux/actions/increment-counter'),
// actionDecrement = require('../redux/actions/decrement-counter');

class Body extends React.Component {
    componentDidMount() {
        this.app = appModule.getApp();
    }

    incrementCounter() {
        // store.dispatch(actionIncrement());
    }

    decrementCounter() {
        // store.dispatch(actionDecrement());
    }

    logout() {
        this.app.logout();
    }

    render() {
        return (
            <div>
                <h1>INFORMATION</h1>
                <h2>{this.props.hello}</h2>
                <a href="/">Go back to Home</a>
                <div dangerouslySetInnerHTML={this.props.pagecontent} />
                <br />

                <br />
                <button className="pure-button" onClick={this.decrementCounter}>Decrement</button>
                <button className="pure-button" onClick={this.incrementCounter}>Increment</button>
                <button className="pure-button" onClick={this.logout.bind(this)}>logout</button>
            </div>
        );
    }
}

Body.propTypes = {
    hello: PropTypes.string,
    pagecontent: PropTypes.object
};

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
    __appProps: PropTypes.object.isRequired
};

module.exports = Body;
