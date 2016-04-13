import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import {addEntry, cancelNewEntry} from '../actions'
import _ from 'lodash'

let NewEntryEditor = ({newEntry, onNewEntrySave, onNewEntryCancel}) => {
    console.log("========> NewEntryEditor " + JSON.stringify(newEntry));

    if (newEntry.visible) {
        let input;

        return (
            <div className="shadow">
                <div className="combo-container">
                    <div className="combo">
                        <input ref={node => input=node} type="text" defaultValue=""/>
                        <button onClick={() => onNewEntrySave(newEntry.block, input.value)}>Save</button>
                        <button onClick={onNewEntryCancel}>Cancel</button>
                    </div>
                </div>
            </div>
        );
    }

    return null;
};

function mapStateToProps(state) {
    console.log("State: " + JSON.stringify(state.newEntry))
    return {newEntry: state.newEntry}
}

const mapDispatchToProps = (dispatch) => {
    return {
        onNewEntrySave: (block, content) => {
            dispatch(addEntry(block, content))
        },
        onNewEntryCancel: () => {
            dispatch(cancelNewEntry())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(NewEntryEditor)
