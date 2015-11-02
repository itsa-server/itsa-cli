const React = require('react'),
      classList = 'pure-menu-list',
      classMenuItem = 'pure-menu-item',
      classMenuItemSelected = 'pure-menu-selected',
      classMenuItemLink = 'pure-menu-link';

const LanguageMenu = React.createClass({
    render() {
        // because this.props.__languages is an object, we need to transform it into an array first:
        let languages = [];
        const keys = Object.keys(this.props.__languages);
        keys.forEach(lang => {
            if (this.props.__languages[lang]!==false) {
                languages.push(lang);
            }
        });
        return (
            <ul className={classList}>
                {languages.map(lang => {
                    let classname = classMenuItem + ((this.props.__lang===lang) ? ' '+classMenuItemSelected : ''),
                        link = '/'+lang+this.props.__uri,
                        label = lang.toUpperCase(); // <-- you can specify another label here, perhaps countryflags
                    return (
                        <li key={lang} className={classname}><a href={link} data-setlang={lang} className={classMenuItemLink}>{label}</a></li>
                    );
                })}
           </ul>
        );
    }
});

module.exports = LanguageMenu;