import {BaseStore} from './models/BaseStore';

export let storage = {
    games: new BaseStore(),
    playerPositions: new BaseStore(),
    teams: new BaseStore(),
    contests: new BaseStore(),
    players: new BaseStore(),
    contestTypes: new BaseStore(),
    leagues: new BaseStore(),
    leagueEventTypes: new BaseStore()
};