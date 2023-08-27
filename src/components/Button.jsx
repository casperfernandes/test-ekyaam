import React from 'react';

const Button = props => {
    const { children, isPrimary, width = '100%', height = '100%' } = props;

    return (
        <button style={{ width, height }} className={`${isPrimary ? 'primary' : 'not-primary'}`}>{children}</button>
    );
};

export default Button;
