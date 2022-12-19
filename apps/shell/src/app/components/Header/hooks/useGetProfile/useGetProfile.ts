import { useQuery, useQueryClient } from 'react-query';
import {
  UsersApi,
  GetCurrentUserProfileResponse,
} from '@spotify-app/api-client';
import { AuthUtils } from '@spotify-app/auth-utils';

import { GET_USER_PROFILE } from './constants';

export const fetchProfile = async () => {
  const authUtils = new AuthUtils();
  const usersApi = new UsersApi({
    token: authUtils.getToken(process.env['NX_PRIVATE_KEY'] as string),
  });

  const { data } = await usersApi.getCurrentUserProfile();

  return data;
};

export const useGetProfile = () => {
  return useQuery(GET_USER_PROFILE, fetchProfile);
};

export const useSelectProfile = () => {
  const queryClient = useQueryClient();

  return queryClient.getQueryData<GetCurrentUserProfileResponse>(
    GET_USER_PROFILE
  );
};
