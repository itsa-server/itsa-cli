require('assets/css/cookies.scss');

const React = require('react'),
    PropTypes = require('prop-types'),
    appModule = require('app');

class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bodyDataAttrCookieName: '',
            bodyDataAttrCookieValue: '',
            propsCookieName: '',
            propsCookieValue: '',
            notExposedCookieName: '',
            notExposedCookieValue: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount() {
        this.appModule = appModule.getApp();
    }
    addCookie(type) {
        let props = {};
        if (type===1) {
            props[this.state.bodyDataAttrCookieName] = this.state.bodyDataAttrCookieValue;
            this.appModule.bodyDataAttrCookie.setProps(props);
        }
        else if (type===2) {
            props[this.state.propsCookieName] = this.state.propsCookieValue;
            this.appModule.propsCookie.setProps(props);
        }
        else if (type===3) {
            props[this.state.notExposedCookieName] = this.state.notExposedCookieValue;
            this.appModule.notExposedCookie.setProps(props);
        }
    }
    handleChange(field, e) {
        let newState = {};
        newState[field] = e.target.value;
        this.setState(newState);
    }
    clearCookieProp(type, key) {
        if (type===1) {
            this.appModule.bodyDataAttrCookie.deleteProp(key);
        }
        else if (type===2) {
            this.appModule.propsCookie.deleteProp(key);
        }
        else if (type===3) {
            this.appModule.notExposedCookie.deleteProp(key);
        }
    }
    generateRows() {
        const propCookie = this.props.__appProps.cookie,
            bodyDataAttrCookie = this.props.bodyDataAttrCookie,
            notExposedCookie = this.props.notExposedcookie;
        let list = [];
        list.push((
            <tr key="data-cookies">
                <td colSpan={3}>data cookies:</td>
            </tr>
        ));
        list.push((
            <tr key="data-cookies-add">
                <td><input onChange={this.handleChange.bind(this, 'bodyDataAttrCookieName')} type="text" value={this.state.bodyDataAttrCookieName} /></td>
                <td><input onChange={this.handleChange.bind(this, 'bodyDataAttrCookieValue')} type="text" value={this.state.bodyDataAttrCookieValue} /></td>
                <td><button className="pure-button" onClick={this.addCookie.bind(this, 1)}>add</button></td>
            </tr>
        ));
        bodyDataAttrCookie.itsa_each((value, key) => list.push(this.renderRow(1, value, key, list.length)));
        list.push((
            <tr key="props-cookies">
                <td colSpan={3}>props cookies:</td>
            </tr>
        ));
        list.push((
            <tr key="props-cookies-add">
                <td><input onChange={this.handleChange.bind(this, 'propsCookieName')} type="text" value={this.state.propsCookieName} /></td>
                <td><input onChange={this.handleChange.bind(this, 'propsCookieValue')} type="text" value={this.state.propsCookieValue} /></td>
                <td><button className="pure-button" onClick={this.addCookie.bind(this, 2)}>add</button></td>
            </tr>
        ));
        propCookie.itsa_each((value, key) => list.push(this.renderRow(2, value, key, list.length)));

        list.push((
            <tr key="not-exposed-cookies">
                <td colSpan={3}>not-exposed cookies:</td>
            </tr>
        ));
        list.push((
            <tr key="notexposed-cookies-add">
                <td><input onChange={this.handleChange.bind(this, 'notExposedCookieName')} type="text" value={this.state.notExposedCookieName} /></td>
                <td><input onChange={this.handleChange.bind(this, 'notExposedCookieValue')} type="text" value={this.state.notExposedCookieValue} /></td>
                <td><button className="pure-button" onClick={this.addCookie.bind(this, 3)}>add</button></td>
            </tr>
        ));
        notExposedCookie.itsa_each((value, key) => list.push(this.renderRow(3, value, key, list.length)));
        return list;
    }

    renderRow(type, value, key, i) {
        return (
            <tr key={type+'-'+i}>
                <td>{key}</td><td>{value}</td><td><button className="pure-button" onClick={this.clearCookieProp.bind(this, type, key)}>delete</button></td>
            </tr>
        );
    }

    render() {
        return (
            <div className="pure-form">
                <h1>Manage app cookies D</h1>
                <div>Aplication cookies can be managed both on the client as well as on the server. Itsa-react-server takes care of that both server and client are taking `life` version of the view.</div>
                <table className="pure-table">
                    <tbody>
                        {this.generateRows()}
                    </tbody>
                </table>
                <a href="/information">Goto page Information</a>
            </div>
        );
    }
}


Body.propTypes = {
    /**
     * the app and page specific props
     *
     * @property __appProps
     * @type String
     * @protected
     * @private
     * @since 2.0.0
    */
    __appProps: PropTypes.object.isRequired,
    bodyDataAttrCookie: PropTypes.object.isRequired,
    notExposedcookie: PropTypes.object.isRequired,
    zoomLevel: PropTypes.number
};

module.exports = Body;
