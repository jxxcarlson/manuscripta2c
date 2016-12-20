import {Action} from '@ngrx/store'

export const ActionTypes = {

  DELETE_ACTIVE_DOCUMENT: 'DELETE_ACTIVE_DOCUMENT',
  SET_DOCUMENTS_AND_SELECT:  'SET_DOCUMENTS_AND_SELECT',
  ADD_DOCUMENT_AND_SELECT: 'ADD_DOCUMENT_AND_SELECT',

  SELECT_DOCUMENT:  'SELECT_DOCUMENT',
  UPDATE_DOCUMENT:  'UPDATE_DOCUMENT',

  SET_DOCUMENTS:  'SET_DOCUMENTS',
  ADD_DOCUMENT:  'ADD_DOCUMENT',
  DELETE_DOCUMENT: 'DELETE_DOCUMENT',
  GET_DOCUMENTS:  'GET_DOCUMENTS',

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


export function deleteActiveDocument(): Action {

  console.log(`Executing: deleteActiveDocument`)

  return { type: ActionTypes.DELETE_ACTIVE_DOCUMENT, payload: { } }

}

export function setDocumentsAndSelect(payload): Action {

  return { type: ActionTypes.SET_DOCUMENTS_AND_SELECT, payload: payload }

}

export function addDocumentsAndSelect(payload): Action {

  console.log(`Executing: addDocumentsAndSelect`)

  return { type: ActionTypes.ADD_DOCUMENT_AND_SELECT, payload: payload }

}


export function selectDocument(payload): Action {

  return { type: ActionTypes.SELECT_DOCUMENT, payload: payload }

}

export function updateDocument(payload): Action {

  return { type: ActionTypes.UPDATE_DOCUMENT, payload: payload }

}

export function setDocuments(payload): Action {

  return { type: ActionTypes.SET_DOCUMENTS, payload: payload }

}

export function addDocument(payload): Action {

  return { type: ActionTypes.ADD_DOCUMENT, payload: payload }

}

export function deleteDocument(payload): Action {

  return { type: ActionTypes.DELETE_DOCUMENT, payload: payload }

}

export function getDocuments(): Action {

  return { type: ActionTypes.GET_DOCUMENTS }

}

export function updateEditText(payload): Action {

  return { type: ActionTypes.UPDATE_EDIT_TEXT, payload: payload }

}

export function setEditText(payload): Action {

  return { type: ActionTypes.SET_EDIT_TEXT, payload: payload }

}

export function updateNavState(payload): Action {

  return { type: ActionTypes.UPDATE_NAV_STATE, payload: payload }

}

export function authorizeUser(payload): Action {

  return { type: ActionTypes.AUTHORIZE_USER, payload: payload }

}




