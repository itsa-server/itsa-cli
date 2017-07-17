require('assets/css/index.scss');

var React = require('react');
var Test = require('modules/test.jsx');

class Body extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello world on phone!</h1>
                <a href="/information">Goto page Information</a>
                <Test />
            </div>
        );
    }
}

module.exports = Body;
