import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
    return (
        <button className={props.className} onClick ={props.onClick}>
            <i className="material-icons">{props.icon}</i>    
        </button>
    );
};

Button.propTypes = {
    className : PropTypes.string,
    icon : PropTypes.string,
    onClick : PropTypes.func,
}

export default Button;