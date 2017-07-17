require('../assets/css/main.scss');

var React = require('react');
// SubApp = require('../pageapps/index.js');

class Page extends React.Component {
    // componentDidMount: function() {
    //     this.subapp = new SubApp();
    // },
    // componentWillUnmount: function() {
    //     this.subapp.destroy();
    // },
    render() {
        return (
            <div>
                <h1>Hello submodule!</h1>
            </div>
        );
    }
}

module.exports = Page;
