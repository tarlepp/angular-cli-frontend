import { ProfileDataJwtInterface, ProfileDataBackendInterface } from '../../services/interfaces/';

export interface ProfileComponentResolveInterface {
  profileLocal: ProfileDataJwtInterface;
  profileRemote: ProfileDataBackendInterface;
}
