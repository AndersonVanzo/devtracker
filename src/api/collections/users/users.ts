import client from '../../client';
import { handleRequestError, handleRequestSuccess } from '../../handler';

const get = async (username: string) => {
  return await client
    .get<UserData>(`users/${username}`)
    .then(response => {
      return handleRequestSuccess<UserData>(response);
    })
    .catch(error => {
      return handleRequestError(error);
    });
};

const repos = async (username: string) => {
  return await client
    .get<UserRepositoryList>(`users/${username}/repos`)
    .then(response => {
      return handleRequestSuccess<UserRepositoryList>(response);
    })
    .catch(error => {
      return handleRequestError(error);
    });
};

export const users = {
  get,
  repos,
};
