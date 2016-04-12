export const ADD_ENTRY = 'ADD_ENTRY';
export const REMOVE_ENTRY = 'REMOVE_ENTRY';
export const MOVE_ENTRY = 'MOVE_ENTRY';
export const EDIT_ENTRY = 'EDIT_ENTRY';
export const CHANGE_ENTRY = 'CHANGE_ENTRY';
export const CANCEL_EDIT_ENTRY = 'CANCEL_EDIT_ENTRY';

export function addEntry(block, content){
    return {
        type: ADD_ENTRY,
        block: block,
        content: content
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



