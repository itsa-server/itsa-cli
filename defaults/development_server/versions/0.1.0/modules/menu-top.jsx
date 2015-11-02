require('../assets/css/purecss/menus.css');
require('../assets/css/purecss/grids.css');

require('../assets/css/top-menu.scss');

const LangMenuList = require('./__language_menulist');

const React = require('react'),
      menuURIs = [
        '/'
      ],
      logo = require('../assets/images/itsa-small.png');

const Menu = React.createClass({
    render() {
        let classname = {},
            link = {};
        menuURIs.forEach(menuURI => {
            classname[menuURI] = 'pure-menu-item' + ((this.props.__path===menuURI) ? ' menu-item-invisible' : '');
            link[menuURI] = this.props.__langprefix+menuURI;
        });
        return (
            <div className="top-menu pure-g pure-menu pure-menu-horizontal pure-menu-fixed">
                <div className="pure-u-5-12">
                    <img src={logo} />
                </div>
                <div className="pure-u-1-6 center">
                    <div className={classname['/']}><a href={link['/']} className="pure-menu-link">&laquo; home</a></div>
                </div>
                <div className="pure-u-5-12 right">
                    <LangMenuList {...this.props}/>
                </div>
            </div>
        );
    }
});

module.exports = Menu;

