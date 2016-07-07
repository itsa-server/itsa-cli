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
            <div>
                <h1>Hello world!</h1>
                <a href="/information">Goto page Information</a>
            </div>
        );
    }
});

module.exports = Body;