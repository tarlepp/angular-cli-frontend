export interface ProfileDataJwtInterface {
  username: string;
  exp: number;
  ip: string;
  agent: string;
  checksum: string;
  roles: string[];
  firstname: string;
  surname: string;
  email: string;
  iat: string;
}
