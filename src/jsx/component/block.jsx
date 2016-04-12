import React, { PropTypes } from 'react'
import Entry from './entry'
import EntryEditor from './entry-editor'

const Block = ({ block, entries, onEntryClick, onEntryChange, onEntryEditCancel }) => {
    console.log("=======> block");
    return (
    <ul>
        {entries.map(entry => {
                if (entry.edit==false) {
                    return <Entry
                        key={entry.id}
                        onClick={() => onEntryClick(block, entry.id)}
                        {...entry}
                    />
                } else {
                    return <EntryEditor
                        key={entry.id}
                        onEntryChange={(id, content) => onEntryChange(block, id, content)}
                        onEntryEditCancel={onEntryEditCancel}
                        {...entry}
                    />
                }
            }
        )}
    </ul>
)};

Block.propTypes = {
    entries: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        edit: PropTypes.bool.isRequired
    }).isRequired).isRequired,
    block: PropTypes.string.isRequired,
    onEntryClick: PropTypes.func.isRequired,
    onEntryChange: PropTypes.func.isRequired,
    onEntryEditCancel: PropTypes.func.isRequired
};

export default Block
