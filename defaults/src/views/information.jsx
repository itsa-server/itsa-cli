/* eslint react/no-danger: 0 */

require('../assets/css/purecss/buttons.css');
require('../assets/css/main.scss');

var React = require('react'),
    PropTypes = React.PropTypes,
    appStore = require('../redux/app-store'),
    store = appStore.createStore(),
    actionIncrement = require('../redux/actions/increment-counter'),
    actionDecrement = require('../redux/actions/decrement-counter');

var Body = React.createClass({

    propTypes: {
        hello: PropTypes.string,
        pagecontent: PropTypes.object
    },

    componentDidMount: function() {
        this.unSubscribeStore = store.subscribe(this.forceUpdate.bind(this));
    },

    componentWillUnmount: function() {
        this.unSubscribeStore();
    },

    incrementCounter: function() {
        store.dispatch(actionIncrement());
    },

    decrementCounter: function() {
        store.dispatch(actionDecrement());
    },

    render: function() {
        return (
            <div>
                <h1>{this.props.hello}</h1>
                <a href="/">Goto page Home</a>
                <div dangerouslySetInnerHTML={this.props.pagecontent} />
                <br />
                Count: {store.getState().count}
                <br />
                <button className="pure-button" onClick={this.decrementCounter}>Decrement</button>
                <button className="pure-button" onClick={this.incrementCounter}>Increment</button>
            </div>
        );
    }
});

module.exports = Body;