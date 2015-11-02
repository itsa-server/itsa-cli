require('../assets/css/main.scss');
// Because we need to highlight the code, we make use of highlightjs
require('../assets/css/highlights/github.css');
require('../assets/css/code.css');

// require('../assets/css/style1.css');
const React = require('react'),
      MenuTop = require('./menu-top.jsx'),
      MenuLeft = require('./menu-left.jsx'),
      Reflux = require('reflux'),
      store = require('../reflux/store');

const Body = React.createClass({
    mixins: [Reflux.connect(store)],
    render() {
        const activeClass = this.state.menuActivated ? 'active' : '';
        return (
            <div className={activeClass}>
                <MenuTop {...this.props}/>
                <MenuLeft {...this.props}/>
                <div className="main">
                    <div className="header" dangerouslySetInnerHTML={this.props.pageheader} />
                    <div className="content" dangerouslySetInnerHTML={this.props.pagecontent} />
                </div>
            </div>
        );
    }
});
// global.xxx = Body;
module.exports = Body;