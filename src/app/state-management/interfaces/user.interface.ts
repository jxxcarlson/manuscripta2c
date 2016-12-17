export interface User {
  id: number
  username: string
  password: string
  email: string
  token: string
  signedIn: boolean
};

export const initialUser:User = {id: -1,
  username: 'nobody',
  email: 'nobody@nowhere.io',
  password: '',
  token: '',
  signedIn: false}
