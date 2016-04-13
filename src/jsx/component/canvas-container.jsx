import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import { connect } from 'react-redux'
import {editEntry, changeEntry, cancelEditEntry, newEntry, dropEntryOnOtherEntry, dropEntryOnBlock} from '../actions';

import BusinessCanvas from './business-canvas';

const mapStateToProps = (state) => {
    return Object.assign({}, state)
};

const mapDispatchToProps = (dispatch) => {
    return {
        onEntryClick: (block, id) => {
            dispatch(editEntry(block, id))
        },
        onEntryChange: (block, id, content) => {
            dispatch(changeEntry(block, id, content))
        },
        onEntryEditCancel: () => {
            dispatch(cancelEditEntry())
        },
        onNewEntryClick: (block) => {
            dispatch(newEntry(block))
        },
        onDrop: (dragId, dragContent,  dropId) => {
            dispatch(dropEntryOnOtherEntry(dragId, dragContent, dropId))
        },
        onDropEntryToBlock: (dragId, dragContent, dropBlock) => {
            dispatch(dropEntryOnBlock(dragId, dragContent, dropBlock))
        }
    }
};

const CanvasContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(DragDropContext(HTML5Backend)(BusinessCanvas))

export default CanvasContainer
