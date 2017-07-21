require('assets/css/index.scss');

const React = require('react'),
    appModule = require('app');

class Body extends React.Component {

    componentDidMount() {
        this.app = appModule.getApp();
    }
    login() {
        this.app.login();
    }
    render() {
        return (
            <div>
                <h1>LOGIN PAGE</h1>
                <button className="pure-button" onClick={this.login.bind(this)}>login</button>
                <a href="/">goto home</a>
            </div>
        );
    }
}

module.exports = Body;
