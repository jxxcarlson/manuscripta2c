/**
 *
 *

import { Action } from '@ngrx/store';
import { type } from './type.utilities';

export const ActionTypes = {
  PUSH_DOCUMENT_ON_HISTORY: type('[History] Push Document On History'),
  CLEAR_HISTORY:   type('[History] Clear History'),
};

export class PushDocumentOnHistory implements Action {

  type = ActionTypes.PUSH_DOCUMENT_ON_HISTORY

}

export class ClearHistory implements Action {

  type = ActionTypes.CLEAR_HISTORY

}



export type Actions
  = PushDocumentOnHistory
  | ClearHistory;



 */
