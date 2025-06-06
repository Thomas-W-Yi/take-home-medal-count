import { useQuery } from 'react-query';
import api, { RequestError } from '@/app/api/api';
import medalData from '@/app/data/medals.json';

// data, error, loading, retry and cache logic is handled by react query
export const useGetMedalList = ({
  params,
  requestKey,
}: {
  params: string;
  requestKey: string;
}) =>
  useQuery<any, RequestError>(
    [requestKey, params],
    async () => {
      // TODO: Uncomment the API call when the backend is ready
      // const response = await api.get('/api/medals', {
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   params,
      // });
      // console.log({ requestKey, params, response });
      return medalData;
    },
    {
      refetchOnWindowFocus: false,
      retry: 3,
      enabled: !!params,
    }
  );
