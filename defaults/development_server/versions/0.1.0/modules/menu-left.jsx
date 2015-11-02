require('../assets/css/purecss/menus.css');
require('../assets/css/left-menu.scss');

const React = require('react'),
      Reflux = require('reflux'),
      store = require('../reflux/stores/app-store'),
      actions = require('../reflux/actions/app-actions'),
      menuitems_first = [
        'installation',
        'configuration'
      ],
      menuitems_second = [
        'pages',
        'models',
        'async-models',
        'controller',
        'router',
        'appfile',
        'different-devices',
        'markdown',
        'i18n',
        'databases'
      ],
      menuitems_third = [
        'developing',
        'production',
        'gulp'
      ],
      PURE_MENU_ = 'pure-menu-',
      PURE_MENU_LINK = PURE_MENU_+'link',
      PURE_MENU_ITEM = PURE_MENU_+'item',
      PURE_MENU_HEADING = PURE_MENU_+'heading',
      PURE_MENU_LIST = PURE_MENU_+'list',
      PURE_MENU_SELECTED = ' '+PURE_MENU_+'selected'; // with leading space

const Menu = React.createClass({
    mixins: [Reflux.connect(store)],
    render() {
        let classname = {},
            link = {};
        const hamburgerClass = 'menu-link' + (this.state.menuActivated ? ' active' : '');
        return (
            <div>
                <a className={hamburgerClass} onClick={actions.toggleMenu}>
                    <span />
                </a>
                <div id="leftmenu">
                    <div className="pure-menu">
                        <a className={PURE_MENU_HEADING}>{this.props.messages.setup}</a>
                        <ul className={PURE_MENU_LIST}>
                            {menuitems_first.map(menuitem => {
                                let classname = PURE_MENU_ITEM + ((this.props.__path==='/'+menuitem) ? PURE_MENU_SELECTED: ''),
                                    link = this.props.__langprefix+'/'+menuitem,
                                    label = this.props.messages[menuitem];
                                return (
                                    <li key={menuitem} className={classname}><a href={link} className={PURE_MENU_LINK}>{label}</a></li>
                                );
                            })}
                       </ul>
                        <a className={PURE_MENU_HEADING}>{this.props.messages.create}</a>
                        <ul className={PURE_MENU_LIST}>
                            {menuitems_second.map(menuitem => {
                                let classname = PURE_MENU_ITEM + ((this.props.__path==='/'+menuitem) ? PURE_MENU_SELECTED : ''),
                                    link = this.props.__langprefix+'/'+menuitem,
                                    label = this.props.messages[menuitem];
                                return (
                                    <li key={menuitem} className={classname}><a href={link} className={PURE_MENU_LINK}>{label}</a></li>
                                );
                            })}
                       </ul>
                        <a className={PURE_MENU_HEADING}>{this.props.messages.build}</a>
                        <ul className={PURE_MENU_LIST}>
                            {menuitems_third.map(menuitem => {
                                let classname = PURE_MENU_ITEM + ((this.props.__path==='/'+menuitem) ? PURE_MENU_SELECTED : ''),
                                    link = this.props.__langprefix+'/'+menuitem,
                                    label = this.props.messages[menuitem];
                                return (
                                    <li key={menuitem} className={classname}><a href={link} className={PURE_MENU_LINK}>{label}</a></li>
                                );
                            })}
                       </ul>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Menu;