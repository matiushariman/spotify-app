import { useQuery } from 'react-query';

import { GET_USER_PROFILE } from './constants';
import { fetchProfile } from './fetchProfile';

export const useGetProfile = () => {
  return useQuery(GET_USER_PROFILE, fetchProfile);
};
