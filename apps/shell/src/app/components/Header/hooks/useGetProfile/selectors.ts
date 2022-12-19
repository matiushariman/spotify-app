import { useQueryClient } from 'react-query';
import { GetCurrentUserProfileResponse } from '@spotify-app/api-client';
import { GET_USER_PROFILE } from './constants';

export const useSelectProfile = () => {
  const queryClient = useQueryClient();

  return queryClient.getQueryData<GetCurrentUserProfileResponse>(
    GET_USER_PROFILE
  );
};
