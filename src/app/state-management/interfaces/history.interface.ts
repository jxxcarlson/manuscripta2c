

export interface HistoryItem {

  title: string
  id: number
}

export interface DocumentHistory {

  historyList: HistoryItem[];
}

export const initialHistoryItem: HistoryItem = {

   title: 'foo',
   id: 666

};

export const initialHistoryState: DocumentHistory = {
  historyList: [initialHistoryItem]
};
