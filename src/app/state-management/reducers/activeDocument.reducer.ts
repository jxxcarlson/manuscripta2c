
// https://github.com/ngrx/store
//
export const SELECT_DOCUMENT =  'SELECT_DOCUMENT'
export const UPDATE_DOCUMENT =  'UPDATE_DOCUMENT'

import { Document } from '../interfaces/document.interface'
import { ActionReducer, Action } from '@ngrx/store';

const process = (document: Document) => Object.assign(document, {rendered_text: document.rendered_text.replace(/<a href="#/g, '<a pageScroll href="#')})

const initialDocument: Document = {

  id: 0,
  title: 'Dummy document',
  author: 'No one',
  text: 'Dummy text',
  rendered_text: 'Dummy text',
  has_subdocuments: false,
  public: false,
  documents: [],
  links: { parent: { id: -1, title: 'Nonexistent'}}
}

export const activeDocumentReducer: ActionReducer<Document> = (state: Document = initialDocument, action: Action) => {

  switch (action.type) {
    case SELECT_DOCUMENT:
      return process(action.payload);
    case UPDATE_DOCUMENT:
      return Object.assign (state, process(action.payload))
    default:
      return state;
  }

};

