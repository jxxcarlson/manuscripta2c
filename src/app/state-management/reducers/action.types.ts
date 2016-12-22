import {Action} from '@ngrx/store'

export const ActionTypes = {

  SET_DOCUMENTS_AND_SELECT:  'SET_DOCUMENTS_AND_SELECT',
  CLEAR_ALL: 'CLEAR_ALL',

  SELECT_DOCUMENT:  'SELECT_DOCUMENT',
  UPDATE_DOCUMENT:  'UPDATE_DOCUMENT',

  SET_DOCUMENTS:  'SET_DOCUMENTS',
  CLEAR_DOCUMENTS:  'CLEAR_DOCUMENTS',
  ADD_DOCUMENT:  'ADD_DOCUMENT',
  LOAD_PARENT: 'LOAD_PARENT',
  DELETE_DOCUMENT: 'DELETE_DOCUMENT',
  GET_DOCUMENTS:  'GET_DOCUMENTS',

  PUSH_DOCUMENT_ON_HISTORY: 'PUSH_DOCUMENT_ON_HISTORY',
  CLEAR_HISTORY: 'CLEAR_HISTORY',

  UPDATE_EDIT_TEXT: 'UPDATE_EDIT_TEXT',
  SET_EDIT_TEXT:  'SET_EDIT_TEXT',

  UPDATE_NAV_STATE:  'UPDATE_NAV_STATE',

  AUTHORIZE_USER:  'AUTHORIZE_USER',

}

/***

 Not currently used:
 SET_DOCUMENTS_AND_SELECT
 UPDATE_EDIT_TEXT

***/

// UNUSED //


export function setDocumentsAndSelect(payload): Action {

  return { type: ActionTypes.SET_DOCUMENTS_AND_SELECT, payload: payload }

}

// APP //

export function clearAll(): Action {

  return { type: ActionTypes.CLEAR_ALL }

}


// DOCUMENTS //

export function selectDocument(payload): Action {

  return { type: ActionTypes.SELECT_DOCUMENT, payload: payload }

}

export function updateDocument(payload): Action {

  return { type: ActionTypes.UPDATE_DOCUMENT, payload: payload }

}

export function setDocuments(payload): Action {

  return { type: ActionTypes.SET_DOCUMENTS, payload: payload }

}

export function clearDocuments(): Action {

  return { type: ActionTypes.CLEAR_DOCUMENTS }

}

export function addDocument(payload): Action {

  return { type: ActionTypes.ADD_DOCUMENT, payload: payload }

}

export function loadParent(payload): Action {

  return { type: ActionTypes.LOAD_PARENT, payload: payload }

}

export function deleteDocument(payload): Action {

  return { type: ActionTypes.DELETE_DOCUMENT, payload: payload }

}

export function getDocuments(): Action {

  return { type: ActionTypes.GET_DOCUMENTS }

}


// EDITOR ??

export function updateEditText(payload): Action {

  return { type: ActionTypes.UPDATE_EDIT_TEXT, payload: payload }

}

export function setEditText(payload): Action {

  return { type: ActionTypes.SET_EDIT_TEXT, payload: payload }

}


// UISTATE //

export function updateNavState(payload): Action {

  return { type: ActionTypes.UPDATE_NAV_STATE, payload: payload }

}

// AUTHORIZATION //

export function authorizeUser(payload): Action {

  return { type: ActionTypes.AUTHORIZE_USER, payload: payload }

}


// HISTORY //


export function pushDocumentOnHistory(payload): Action {

  return { type: ActionTypes.PUSH_DOCUMENT_ON_HISTORY, payload: payload }

}

export function clearHistory(payload): Action {

  return { type: ActionTypes.CLEAR_HISTORY }

}


