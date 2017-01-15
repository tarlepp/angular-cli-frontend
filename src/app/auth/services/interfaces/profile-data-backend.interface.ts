import { UserGroupDataBackendInterface } from './user-group-data-backend.interface';

export interface ProfileDataBackendInterface {
  id: string;
  username: string;
  firstname: string;
  surname: string;
  email: string;
  userGroups: UserGroupDataBackendInterface[];
  createdAt: string;
  updatedAt: string;
}
