

export interface User {
  id: number
  username: string
  password: string
  email: string
  token: string
  signedIn: boolean
  last_document_id: number
  last_document_title: string,
  action: string
};

export const initialUser:User = {
  id: -1,
  username: 'nobody',
  email: 'nobody@nowhere.io',
  password: '',
  token: '',
  signedIn: false,
  last_document_id: -1,
  last_document_title: 'Whatever',
  action: 'none'

}
