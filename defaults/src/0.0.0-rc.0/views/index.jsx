require('../assets/css/main.scss');

var React = require('react'),
    SubApp = require('../pageapps/index.js');

var Body = React.createClass({
    componentDidMount: function() {
        this.subapp = new SubApp();
    },
    componentWillUnmount: function() {
        this.subapp.destroy();
    },
    render: function() {
        return (
            <h1>Hello world!</h1>
        );
    }
});

module.exports = Body;