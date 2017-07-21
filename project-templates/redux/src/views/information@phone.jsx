/* eslint react/no-danger: 0 */
require('assets/css/information.scss');

var React = require('react');
var PropTypes =require('prop-types');
// appStore = require('../redux/app-store'),
// store = appStore.createStore(),
// actionIncrement = require('../redux/actions/increment-counter'),
// actionDecrement = require('../redux/actions/decrement-counter');

class Body extends React.Component {
    // componentDidMount: function() {
    //     this.unSubscribeStore = store.subscribe(this.forceUpdate.bind(this));
    // },

    // componentWillUnmount: function() {
    //     this.unSubscribeStore();
    // },

    incrementCounter() {
        // store.dispatch(actionIncrement());
    }

    decrementCounter() {
        // store.dispatch(actionDecrement());
    }

    render() {
        return (
            <div>
                <h1>{this.props.hello}</h1>
                <a href="/">Goto page Home</a>
                <div dangerouslySetInnerHTML={this.props.pagecontent} />
                <br />

                <br />
                <button className="pure-button" onClick={this.decrementCounter}>Decrement</button>
                <button className="pure-button" onClick={this.incrementCounter}>Increment</button>
            </div>
        );
    }
}

Body.propTypes = {
    hello: PropTypes.string,
    pagecontent: PropTypes.object
};

module.exports = Body;
