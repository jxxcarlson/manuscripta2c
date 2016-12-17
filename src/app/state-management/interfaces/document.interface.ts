export interface Document {
  id: number
  owner_id: number
  title: string
  author: string
  text: string
  rendered_text: string
  has_subdocuments: boolean
  public: boolean
  links: {
    parent: {id: number, title: string}
  }
  documents: Document[]
}

export const initialDocument: Document = {

  id: 0,
  owner_id: 0,
  title: 'Dummy document',
  author: 'No one',
  text: 'Dummy text',
  rendered_text: 'Dummy text',
  has_subdocuments: false,
  public: false,
  documents: [],
  links: { parent: { id: -1, title: 'Nonexistent'}}
}
