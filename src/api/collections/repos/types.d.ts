import { Endpoints } from '@octokit/types';

export {};

declare global {
  type UserRepository = Endpoints['GET /repos/{owner}/{repo}']['response']['data'];
}
