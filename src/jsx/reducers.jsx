import { combineReducers } from 'redux';

import Model from './model'
import {ADD_ENTRY,
    MOVE_ENTRY,
    REMOVE_ENTRY,
    EDIT_ENTRY,
    CANCEL_EDIT_ENTRY,
    CHANGE_ENTRY,
    NEW_ENTRY,
    CANCEL_NEW_ENTRY,
    DROP_ENTRY_ON_ENTRY,
    DROP_ENTRY_ON_BLOCK} from './actions';


function _dragEntryOnEntry(action, state) {
    let dragEntryId = action.dragEntryId;
    let dropEntryId = action.dropEntryId;

    let entryIndex = Model.getEntryIndex(state, dropEntryId);
    let entry = Model.getEntry(state, dragEntryId);
    let block = Model.getEntryBlock(state, dropEntryId);

    return Model.insertEntryAt(Model.removeEntry(state, dragEntryId), block, entryIndex, entry.id, entry.content);
}

function _dragEntryOnBlock(action, state) {
    let dragEntryId = action.dragEntryId;
    let dropBlock = action.dropBlock;

    let entry = Model.getEntry(state, dragEntryId);

    return Model.appendEntry(Model.removeEntry(state, dragEntryId), dropBlock, entry.id, entry.content);
}

function canvasApp(state = Model.getInitialState(), action) {

    switch (action.type) {
        case ADD_ENTRY:
            return Model.hideNewEntryPopup(Model.appendEntry(state, action.block, new Date().getTime(), action.content));
        case REMOVE_ENTRY:
            return Model.removeEntry(state, action.id);
        case EDIT_ENTRY:
            return Model.switchEntryToEdit(state, action.id);
        case CANCEL_EDIT_ENTRY:
            return Model.cancelEntriesEdit(state);
        case CHANGE_ENTRY:
            return Model.updateEntry(state, action.id, action.content);
        case NEW_ENTRY:
            return Model.showNewEntryPopup(state, action.block);
        case CANCEL_NEW_ENTRY:
            return Model.hideNewEntryPopup(state);
        case DROP_ENTRY_ON_ENTRY:
            return _dragEntryOnEntry(action, state);
        case DROP_ENTRY_ON_BLOCK:
            return _dragEntryOnBlock(action, state);
        default:
            return state;
    }
}

export default canvasApp;

