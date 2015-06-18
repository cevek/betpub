import {Route} from './lib/Router.js';
export let routes = {
    index: new Route('/'),
    game: new Route('/game/:id'),
    gameContests: new Route('/game/:id/contests'),
    gameContestItem: new Route('/game/:id/contest/:contestId')
};