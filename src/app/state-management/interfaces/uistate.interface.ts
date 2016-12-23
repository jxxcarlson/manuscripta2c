export interface UIState {

  activeNavSection: string
  searchScope: string // alldocs | mydocs | publicdocs

};

export const initialUIState =  {

  activeNavSection: 'read',
  searchScope: 'alldocs'

}
