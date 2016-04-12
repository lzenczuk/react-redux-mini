import React, { PropTypes } from 'react'

const Entry = ({ onClick, id, content }) => {
    console.log("========> Entry");
    return (
        <li onClick={onClick}>
            {content}
        </li>
    );
}

Entry.propTypes = {
    id: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    edit: PropTypes.bool.isRequired
};

export default Entry
