var React = require('react'),
      classList = 'pure-menu-list',
      classMenuItem = 'pure-menu-item',
      classMenuItemSelected = 'pure-menu-selected',
      classMenuItemLink = 'pure-menu-link';

var LanguageMenu = React.createClass({
    render: function() {
        // because this.props.__languages is an object, we need to transform it into an array first:
        var languages = [];
        var keys = Object.keys(this.props.__languages),
            that = this;
        keys.forEach(function(lang) {
            if (that.props.__languages[lang]!==false) {
                languages.push(lang);
            }
        });
        return (
            <ul className={classList}>
                {languages.map(function(lang) {
                    var classname = classMenuItem + ((that.props.__lang===lang) ? ' '+classMenuItemSelected : ''),
                        link = '/'+lang+that.props.__uri,
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