import client from '../../client';
import { handleRequestError, handleRequestSuccess } from '../../handler';

const get = async (username: string, repository: string) => {
  return await client
    .get<UserRepository>(`repos/${username}/${repository}`)
    .then(response => {
      return handleRequestSuccess<UserRepository>(response);
    })
    .catch(error => {
      return handleRequestError(error);
    });
};

export const repos = {
  get,
};
