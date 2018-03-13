import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
    return (
        <header>
            <h1>{props.title}</h1>
        </header>
    );
};

Header.propTypes = {
    title : PropTypes.string.isRequired,
};

Header.defaultProps = {
    title : "Redux!!!"
}

export default Header;