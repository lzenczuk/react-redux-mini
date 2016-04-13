import { combineReducers } from 'redux';
import _ from 'lodash';
import {ADD_ENTRY, MOVE_ENTRY, REMOVE_ENTRY, EDIT_ENTRY, CANCEL_EDIT_ENTRY, CHANGE_ENTRY, NEW_ENTRY, CANCEL_NEW_ENTRY} from './actions';

const initialState = {
    canvas: {
        values: {
            entries: [
                {
                    id: "lkj",
                    content: "value 1",
                    edit: false
                },
                {
                    id: "mnvb",
                    content: "value 2",
                    edit: false
                }
            ]
        },
        customers: {
            entries: []
        },
        problems: {
            entries: []
        }
    },
    newEntry: {
        visible: false,
        block: null
    }
};

function canvasApp(state = initialState, action) {

    switch (action.type) {
        case ADD_ENTRY:
            var tmpState = _.cloneDeep(state);
            tmpState.canvas[action.block].entries.push({
                id: new Date().getTime(),
                content: action.content,
                edit: false
            });
            tmpState.newEntry.visible = false;
            tmpState.newEntry.block = null;
            return tmpState;
        case REMOVE_ENTRY:
            var tmpState = _.cloneDeep(state);
            tmpState.canvas[action.block] = tmpState.canvas[action.block].filter((content => content.id != action.id))
            return tmpState;
        case EDIT_ENTRY:
            var tmpState = _.cloneDeep(state);
            tmpState.canvas[action.block].entries = tmpState.canvas[action.block].entries.map((entry => {
                if (entry.id == action.id) {
                    entry.edit = true;
                } else {
                    entry.edit = false;
                }

                return entry
            }));

            return tmpState;
        case CANCEL_EDIT_ENTRY:
            var tmpState = _.cloneDeep(state);

            _.mapValues(tmpState.canvas, (block) => {
                block.entries = block.entries.map(entry => {
                    entry.edit = false;
                    return entry
                });

                return block;
            });
            return tmpState;
        case CHANGE_ENTRY:
            var tmpState = _.cloneDeep(state);
            tmpState.canvas[action.block].entries = tmpState.canvas[action.block].entries.map((entry => {
                if (entry.id == action.id) {
                    entry.content = action.content;
                }

                entry.edit = false;

                return entry
            }));
            return tmpState;
        case NEW_ENTRY:
            var tmpState = _.cloneDeep(state);
            tmpState.newEntry.visible = true;
            tmpState.newEntry.block = action.block;
            return tmpState;
        case CANCEL_NEW_ENTRY:
            var tmpState = _.cloneDeep(state);
            tmpState.newEntry.visible = false;
            tmpState.newEntry.block = null;
            return tmpState;
        default:
            return state;
    }
}

export default canvasApp;

