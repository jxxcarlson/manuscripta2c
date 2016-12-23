export interface UIState {

  activeNavSection: string
  searchScope: string // alldocs | mydocs | otherdocs

};

export const initialUIState =  {

  activeNavSection: 'read',
  searchScope: 'alldocs'

}
