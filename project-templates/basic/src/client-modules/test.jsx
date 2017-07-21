const React = require('react'),
    PropTypes = require('prop-types');

class Test extends React.Component {

    render() {
        return (
            <div>
                {this.props.content}
            </div>
        );
    }
}

Test.propTypes = {
    /**
     * The pagecontent
     *
     * @property pagecontent
     * @type Object
     * @since 2.0.0
    */
    content: PropTypes.string
};

Test.defaultProps = {
    content: 'test'
};

export default Test;
