require('../assets/css/purecss/buttons.css');
require('../assets/css/main.scss');

const React = require('react'),
      Reflux = require('reflux'),
      store = require('../reflux/stores/app-store');

const Body = React.createClass({
    mixins: [Reflux.connect(store)],
    render() {
        return (
            <div>
                <h1>{this.props.hello}</h1>
                <div dangerouslySetInnerHTML={this.props.pagecontent} />
            </div>
        );
    }
});

module.exports = Body;