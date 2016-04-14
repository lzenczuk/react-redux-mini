
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
        onEntryClick: (id) => {
            dispatch(editEntry(id))
        },
        onEntryChange: (id, content) => {
            dispatch(changeEntry(id, content))
        },
        onEntryEditCancel: () => {
            dispatch(cancelEditEntry())
        },
        onNewEntryClick: (block) => {
            dispatch(newEntry(block))
        },
        onDrop: (dragId,  dropId) => {
            dispatch(dropEntryOnOtherEntry(dragId, dropId))
        },
        onDropEntryToBlock: (dragId, dropBlock) => {
            dispatch(dropEntryOnBlock(dragId, dropBlock))
        }
    }
};

const BlockContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Block);

export default BlockContainer
