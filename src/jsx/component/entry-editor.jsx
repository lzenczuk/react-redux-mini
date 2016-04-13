import React, { PropTypes } from 'react'
import _ from 'lodash'

const EntryEditor = ({ id, content, onEntryEditCancel, onEntryChange }) => {
    let input;

    return (
        <li>
            <input ref={node => input=node} type="text" defaultValue={content}/>
            <button onClick={() => onEntryChange(id, input.value)}>Save</button>
            <button onClick={onEntryEditCancel}>Cancel</button>
        </li>
    );
};

EntryEditor.propTypes = {
    id: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    onEntryChange: PropTypes.func.isRequired,
    onEntryEditCancel: PropTypes.func.isRequired,
    edit: PropTypes.bool.isRequired
};

export default EntryEditor
