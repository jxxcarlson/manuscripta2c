// https://github.com/ngrx/store
//
export const UPDATE_EDIT_TEXT =  'UPDATE_EDIT_TEXT'
export const SET_EDIT_TEXT =  'SET_EDIT_TEXT'


import { Editor } from '../interfaces/editor.interface'
import { ActionReducer, Action } from '@ngrx/store';

const process = (document: Document) => Object.assign(document, {rendered_text: document.rendered_text.replace(/<a href="#/g, '<a pageScroll href="#')})

export const initialState: Editor = {
  text: '',
}

export const editorReducer: ActionReducer<Editor> =
  (state: Editor = initialState, action: Action) => {
    switch (action.type) {
      case UPDATE_EDIT_TEXT:
        return process(action.payload)
      case SET_EDIT_TEXT:
        return action.payload
      default:
        return initialState;
    }
  };
