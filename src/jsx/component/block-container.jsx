
import { connect } from 'react-redux'
import {editEntry, changeEntry, cancelEditEntry, newEntry, dropEntryOnOtherEntry, dropEntryOnBlock} from '../actions';

import Block from "./block";

const mapStateToProps = (state, { block }) => {
    return {
        entries: state.canvas[block].entries,
        block: block
    };

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

const BlockContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Block);

export default BlockContainer
