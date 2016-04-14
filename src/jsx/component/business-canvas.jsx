import React, { PropTypes } from 'react';

import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';

import Block from './block-container';

const BusinessCanvas = () => {
    return (
        <div>
            <Block key='customers'
                   block='customers'
            />
            <Block key='values'
                   block='values'
            />
            <Block key='problems'
                   block='problems'

            />
        </div>
    );
};

export default DragDropContext(HTML5Backend)(BusinessCanvas);
