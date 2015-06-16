import {BaseStore} from './models/BaseStore';
import {playerPositionStore} from './models/PlayerPosition';
import {Game, gameStore} from './models/Game';
import {Team, teamStore} from './models/Team';
import {Contest, contestStore} from './models/Contest';
import {Player, playerStore} from './models/Player';
import {ContestType, contestTypeStore} from './models/ContestType';
import {League, leagueStore} from './models/League';
import {LeagueEventType, leagueEventTypeStore} from './models/LeagueEventType';

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