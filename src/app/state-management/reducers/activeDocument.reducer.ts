
// https://github.com/bbottema/ng2-simple-page-scroll/issues
//

import {ActionTypes} from './action.types'

import {Document} from '../interfaces/document.interface'
import {initialDocument} from '../interfaces/document.interface'
import {ActionReducer, Action} from '@ngrx/store';

const identity = (text) => text
const prepareSimplePageScroll = (text) => text.replace(/<a href="#/g, '<a simplePageScroll href="#')

const process_document = (document) =>
  Object.assign(document,  { rendered_text: prepareSimplePageScroll(document.rendered_text) })

export const activeDocumentReducer: ActionReducer<Document> = (state: Document = initialDocument, action: Action) => {

  switch (action.type) {
    case ActionTypes.SELECT_DOCUMENT:
      console.log(`PROCESSED PAYLOAD=${process_document(action.payload).rendered_text}`)
      return process_document(action.payload);
    case ActionTypes.UPDATE_DOCUMENT:
      return Object.assign (state, process_document(action.payload))
    default:
      return state;
  }

};

