import React, { PropTypes } from 'react'
import { DragSource, DropTarget } from 'react-dnd';
import { pipe } from 'ramda'

const source = {
    beginDrag(props, monitor, component) {

        // dragged item description ###1>

        // we don't need content, id should be enough but because of primitive
        // model we sending it to have less work
        const item = { id: props.id, content: props.content};
        return item;
    }
};

const target = {
    drop(props, monitor, component) {

        // >###1 monitor item: description from beginDrag
        let dragEntryId =  monitor.getItem().id;
        let dragEntryContent =  monitor.getItem().content;
        let dropEntryId = component.props.id;

        // call on drop method that will dispatch event
        props.onDrop(dragEntryId, dragEntryContent, dropEntryId)
    }
}

function collectDrag(connect, monitor) {
    return {
        // Call this function inside render()
        // to let React DnD handle the drag events:
        connectDragSource: connect.dragSource(),
        // You can ask the monitor about the current drag state:
        isDragging: monitor.isDragging()
    };
}

function collectDrop(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop()
    }
}


const Entry = ({ onClick, id, content, connectDragSource, connectDropTarget, isDragging, isOver }) => {
    let cn;

    if(isDragging){
        cn = "dragging"
    }else{
        if(isOver){
            cn = "dragOver"
        }else{
            cn = ""
        }
    }

    return connectDropTarget(connectDragSource(
        <li onClick={onClick} className={cn}>
            {content}
        </li>
    ));
};

Entry.propTypes = {
    id: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    onDrop: PropTypes.func.isRequired,
    edit: PropTypes.bool.isRequired
};

export default pipe(
    DragSource("ENTRY_DND_TYPE", source, collectDrag),
    DropTarget("ENTRY_DND_TYPE", target, collectDrop)
)(Entry)
