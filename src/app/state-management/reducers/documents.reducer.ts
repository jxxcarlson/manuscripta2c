// https://github.com/ngrx/store
//
export const SET_DOCUMENTS =  'SET_DOCUMENTS'
export const ADD_DOCUMENT =  'ADD_DOCUMENT'

import { Document } from '../interfaces/document.interface'
import { ActionReducer, Action } from '@ngrx/store';

// <a href="# => <a pageScroll href="#
const process = (document: Document) => Object.assign(document, {rendered_text: document.rendered_text.replace(/<a href="#/g, '<a pageScroll href="#')})

export const documentsReducer: ActionReducer<Document[]> =
  (state: Document[] = [], action: Action) => {
  switch (action.type) {
    case SET_DOCUMENTS:
      return action.payload
    case ADD_DOCUMENT:
      return [ ...state, process(action.payload)]

    default:
      return state;
  }
};
