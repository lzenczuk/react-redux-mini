export const NEW_ENTRY = 'NEW_ENTRY';
export const CANCEL_NEW_ENTRY = 'CANCEL_NEW_ENTRY';
export const ADD_ENTRY = 'ADD_ENTRY';
export const REMOVE_ENTRY = 'REMOVE_ENTRY';
export const MOVE_ENTRY = 'MOVE_ENTRY';
export const EDIT_ENTRY = 'EDIT_ENTRY';
export const CHANGE_ENTRY = 'CHANGE_ENTRY';
export const CANCEL_EDIT_ENTRY = 'CANCEL_EDIT_ENTRY';
export const DROP_ENTRY_ON_ENTRY = 'DROP_ENTRY_ON_ENTRY';
export const DROP_ENTRY_ON_BLOCK = 'DROP_ENTRY_ON_BLOCK';

export function addEntry(block, content){
    return {
        type: ADD_ENTRY,
        block: block,
        content: content
    }
}

export function newEntry(block){
    return {
        type: NEW_ENTRY,
        block: block
    }
}

export function cancelNewEntry(){
    return {
        type: CANCEL_NEW_ENTRY
    }
}

export function editEntry(block, id){
    return {
        type: EDIT_ENTRY,
        block: block,
        id: id
    }
}

export function cancelEditEntry(block, id){
    return {
        type: CANCEL_EDIT_ENTRY,
        block: block,
        id: id
    }
}

export function changeEntry(block, id, content){
    return {
        type: CHANGE_ENTRY,
        block: block,
        id: id,
        content: content
    }
}

export function removeEntry(block, id){
    return {
        type: REMOVE_ENTRY,
        block: block,
        id: id
    }
}

export function moveEntry(srcBlock, id, desBlock){
    return {
        type: MOVE_ENTRY,
        srcBlock: srcBlock,
        desBlock: desBlock,
        id: id
    }
}

export function dropEntryOnOtherEntry(dragEntryId, dragEntryContent, dropEntryId){
    return {
        type: DROP_ENTRY_ON_ENTRY,
        dragEntryId: dragEntryId,
        dragEntryContent: dragEntryContent,
        dropEntryId: dropEntryId
    }
}



