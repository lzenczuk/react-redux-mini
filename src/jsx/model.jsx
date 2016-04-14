import _ from 'lodash';

function getInitialState() {
    return {
        canvas: {
            values: {
                entries: [
                    {
                        id: 1,
                        content: "value 1",
                        edit: false
                    },
                    {
                        id: 2,
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
    }
};

function getEntryBlock(model, entryId) {
    let blockName;

    _.mapValues(model.canvas, (block, key) => {

        block.entries.forEach(entry => {

            if (entry.id == entryId) {
                blockName = key;
            }
        });
    });

    return blockName;
}

function getEntry(model, entryId) {
    let block = getEntryBlock(model, entryId);

    return model.canvas[block].entries.find((entry) => entry.id == entryId);
}

function getEntryIndex(model, entryId) {
    let block = getEntryBlock(model, entryId);

    return model.canvas[block].entries.findIndex((entry) => entry.id == entryId);
}

function appendEntry(model, block, id, content) {
    var tmpState = _.cloneDeep(model);
    tmpState.canvas[block].entries.push({
        id: id,
        content: content,
        edit: false
    });
    return tmpState;
}

function insertEntryAt(model, block, index, id, content) {
    var tmpState = _.cloneDeep(model);

    let newEntries = [];
    tmpState.canvas[block].entries.forEach((entry, entryIndex) => {
        if (entryIndex == index) {
            newEntries.push({
                id: id,
                content: content,
                edit: false
            })
        }

        newEntries.push(entry);
    });

    tmpState.canvas[block].entries = newEntries;

    return tmpState;
}

function updateEntry(model, id, content) {

    let block = getEntryBlock(model, id);

    var tmpState = _.cloneDeep(model);
    tmpState.canvas[block].entries = tmpState.canvas[block].entries.map((entry => {
        if (entry.id == id) {
            entry.content = content;
        }
        entry.edit = false;
        return entry
    }));
    return tmpState;
}

function removeEntry(model, entryId) {

    let block = getEntryBlock(model, entryId);

    var tmpState = _.cloneDeep(model);
    tmpState.canvas[block].entries = tmpState.canvas[block].entries.filter((entry => entry.id != entryId));
    return tmpState;
}

function showNewEntryPopup(model, relatedBlock) {
    var tmpState = _.cloneDeep(model);
    tmpState.newEntry.visible = true;
    tmpState.newEntry.block = relatedBlock;
    return tmpState;
}

function hideNewEntryPopup(model) {
    var tmpState = _.cloneDeep(model);
    tmpState.newEntry.visible = false;
    tmpState.newEntry.block = null;
    return tmpState;
}

function switchEntryToEdit(model, id) {

    let block = getEntryBlock(model,id);

    var tmpState = _.cloneDeep(model);
    tmpState.canvas[block].entries = tmpState.canvas[block].entries.map((entry => {
        if (entry.id == id) {
            entry.edit = true;
        } else {
            entry.edit = false;
        }

        return entry
    }));
    return tmpState;
}

function cancelEntriesEdit(model) {
    var tmpState = _.cloneDeep(model);

    _.mapValues(tmpState.canvas, (block) => {
        block.entries = block.entries.map(entry => {
            entry.edit = false;
            return entry
        });

        return block;
    });
    return tmpState;
}

/*function insertEntryBeforOther(model, dragEntryId, dropEntryId, dragEntryContent) {
 var tmpState = _.cloneDeep(model);

 var dragBlock;
 var dropBlock;

 _.mapValues(tmpState.canvas, (block, key) => {
 block.entries.forEach(entry => {
 if (entry.id == dragEntryId) {
 dragBlock = key;
 }

 if (entry.id == dropEntryId) {
 dropBlock = key;
 }
 });
 });

 tmpState.canvas[dragBlock].entries = tmpState.canvas[dragBlock].entries.filter((content => content.id != dragEntryId))

 let newEntries = [];
 tmpState.canvas[dropBlock].entries.forEach(entry => {
 if (entry.id == dropEntryId) {
 newEntries.push({
 id: dragEntryId,
 content: dragEntryContent,
 edit: false
 })
 }

 newEntries.push(entry);
 });

 tmpState.canvas[dropBlock].entries = newEntries;

 return tmpState;
 }
 function appendEntryToBlock(model, dragEntryId, dropBlock, dragEntryContent) {
 var tmpState = _.cloneDeep(model);

 var dragBlock;

 _.mapValues(tmpState.canvas, (block, key) => {
 block.entries.forEach(entry => {
 if (entry.id == dragEntryId) {
 dragBlock = key;
 }
 });
 });

 tmpState.canvas[dragBlock].entries = tmpState.canvas[dragBlock].entries.filter((content => content.id != dragEntryId))

 tmpState.canvas[dropBlock].entries.push({
 id: dragEntryId,
 content: dragEntryContent,
 edit: false
 });

 return tmpState;
 }*/

export default {
    getEntry: getEntry,
    getEntryIndex: getEntryIndex,
    getEntryBlock: getEntryBlock, 
    getInitialState: getInitialState,
    appendEntry: appendEntry,
    removeEntry: removeEntry,
    updateEntry: updateEntry,
    insertEntryAt: insertEntryAt,
    hideNewEntryPopup: hideNewEntryPopup,
    showNewEntryPopup: showNewEntryPopup,
    switchEntryToEdit: switchEntryToEdit,
    cancelEntriesEdit: cancelEntriesEdit
}