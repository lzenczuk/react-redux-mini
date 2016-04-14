import React, { PropTypes } from 'react'
import { DropTarget } from 'react-dnd';
import Entry from './entry'
import EntryEditor from './entry-editor'

const target = {
    drop(props, monitor, component) {

        // Nested drop targets. Check is dropped already in child
        const hasDroppedOnChild = monitor.didDrop();
        if (hasDroppedOnChild) {
            return;
        }

        // >###1 monitor item: description from beginDrag

        let dragEntryId =  monitor.getItem().id;
        let dropBlock = props.block;

        // call on drop method that will dispatch event
        props.onDropEntryToBlock(dragEntryId, dropBlock)
    }
};

function collectDrop(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop()
    }
}

const Block = ({ block, entries, onEntryClick, onEntryChange, onEntryEditCancel, onNewEntryClick, onDrop, connectDropTarget }) => {
    return connectDropTarget(
        <div className="block">
            <ul>
                {entries.map(entry => {
                        if (entry.edit == false) {
                            return <Entry
                                key={entry.id}
                                onClick={() => onEntryClick(entry.id)}
                                onDrop={onDrop}
                                {...entry}
                            />
                        } else {
                            return <EntryEditor
                                key={entry.id}
                                onEntryChange={(id, content) => onEntryChange(id, content)}
                                onEntryEditCancel={onEntryEditCancel}
                                {...entry}
                            />
                        }
                    }
                )}
            </ul>
            <span onClick ={ () => onNewEntryClick(block)}>+</span>
        </div>

    )
};

Block.propTypes = {
    entries: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        content: PropTypes.string.isRequired,
        edit: PropTypes.bool.isRequired
    }).isRequired).isRequired,
    block: PropTypes.string.isRequired,
    onEntryClick: PropTypes.func.isRequired,
    onEntryChange: PropTypes.func.isRequired,
    onEntryEditCancel: PropTypes.func.isRequired,
    onNewEntryClick: PropTypes.func.isRequired,
    onDrop: PropTypes.func.isRequired,
    onDropEntryToBlock: PropTypes.func.isRequired
};

export default DropTarget("ENTRY_DND_TYPE", target, collectDrop)(Block)
