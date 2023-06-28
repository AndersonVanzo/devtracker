import { Endpoints } from '@octokit/types';

export {};

declare global {
  type UserData = Endpoints['GET /users']['response']['data'];
  type UserRepositoryList = Endpoints['GET /users/{username}/repos']['response']['data'];
}
