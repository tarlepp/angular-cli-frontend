export interface ProfileDataJwtInterface {
  username: string,
  exp: number,
  ip: string,
  agent: string,
  checksum: string,
  roles: Array<string>,
  firstname: string
  surname: string,
  email: string,
  iat: string,
}
