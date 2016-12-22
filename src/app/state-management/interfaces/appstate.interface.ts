import {Document} from './document.interface';
import {User} from './user.interface';
import {UIState} from './uistate.interface';
import {Editor} from './editor.interface';

export interface AppState{

  user: User
  uistate: UIState

  documents: Document[]
  documentHistory: Document[]
  activeDocument: Document

  editor: Editor

};

import {initialUser} from './user.interface'
import {initialUIState} from './uistate.interface'
import {initialDocument} from './document.interface'
import {initialEditState} from './editor.interface'


export const initialAppState = {

  user: initialUser,
  uistate: initialUIState,
  documents: [],
  documentHistory: [],
  activeDocument: initialDocument,
  editor: initialEditState

}

// editor: Editor
