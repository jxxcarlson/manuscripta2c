

export interface HistoryItem {

  title: string
  id: number
}

export interface DocumentHistory {

  historyList: HistoryItem[];
}

export const initialHistoryState: DocumentHistory = {
  historyList: [{title: 'foo', id: 666}]
};
