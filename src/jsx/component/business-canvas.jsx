import React, { PropTypes } from 'react';

import Block from './block';

const BusinessCanvas = ({canvas, onEntryClick, onEntryChange, onEntryEditCancel}) => {
    console.log("========> BusinessCanvas");
    return (
        <div>
            <Block key='customers'
                   block='customers'
                   entries={canvas.customers.entries}
                   onEntryClick={onEntryClick}
                   onEntryChange={onEntryChange}
                   onEntryEditCancel={onEntryEditCancel}
            />
            <Block key='values'
                   block='values'
                   entries={canvas.values.entries}
                   onEntryClick={onEntryClick}
                   onEntryChange={onEntryChange}
                   onEntryEditCancel={onEntryEditCancel}
            />
            <Block key='problems'
                   block='problems'
                   entries={canvas.problems.entries}
                   onEntryClick={onEntryClick}
                   onEntryChange={onEntryChange}
                   onEntryEditCancel={onEntryEditCancel}
            />
        </div>
    );
}

BusinessCanvas.propTypes = {
    canvas: PropTypes.shape({
        values: PropTypes.shape(PropTypes.shape({
            entries: PropTypes.arrayOf(PropTypes.shape({
                id: PropTypes.string.isRequired,
                content: PropTypes.string.isRequired,
                edit: PropTypes.bool.isRequired
            }).isRequired).isRequired,
            block: PropTypes.string.isRequired,
        })),
        customers: PropTypes.shape(PropTypes.shape({
            entries: PropTypes.arrayOf(PropTypes.shape({
                id: PropTypes.string.isRequired,
                content: PropTypes.string.isRequired,
                edit: PropTypes.bool.isRequired
            }).isRequired).isRequired,
            block: PropTypes.string.isRequired
        })),
        problems: PropTypes.shape(PropTypes.shape({
            entries: PropTypes.arrayOf(PropTypes.shape({
                id: PropTypes.string.isRequired,
                content: PropTypes.string.isRequired,
                edit: PropTypes.bool.isRequired
            }).isRequired).isRequired,
            block: PropTypes.string.isRequired
        }))
    }),
    onEntryClick: PropTypes.func.isRequired,
    onEntryChange: PropTypes.func.isRequired,
    onEntryEditCancel: PropTypes.func.isRequired
};

export default BusinessCanvas;
