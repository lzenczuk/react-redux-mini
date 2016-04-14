import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import { connect } from 'react-redux'
import {editEntry, changeEntry, cancelEditEntry, newEntry, dropEntryOnOtherEntry, dropEntryOnBlock} from '../actions';

import BusinessCanvas from './business-canvas';

const mapStateToProps = (state) => {
    return Object.assign({}, state)
};

const mapDispatchToProps = (dispatch) => {
    return {}
};

const BusinessCanvasContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(DragDropContext(HTML5Backend)(BusinessCanvas))

export default BusinessCanvasContainer
