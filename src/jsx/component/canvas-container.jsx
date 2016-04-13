import { connect } from 'react-redux'
import {editEntry, changeEntry, cancelEditEntry, newEntry} from '../actions';

import BusinessCanvas from './business-canvas';

const mapStateToProps = (state) => {
    console.log("========> mapStateToProps");
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
        }
    }
};

const CanvasContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(BusinessCanvas)

export default CanvasContainer
