import {PlayerPosition} from './models/PlayerPosition';
import {Game} from './models/Game';
import {Team} from './models/Team';
import {Contest} from './models/Contest';
import {Player} from './models/Player';
import {ContestType} from './models/ContestType';
import {League} from './models/League';
import {LeagueEventType} from './models/LeagueEventType';
import {storage} from './storage';
import json from 'json!./mock.json';

var gameId = 100;
let contestK = 100;


storage.contestTypes.addAll(json.contestTypes.map(contestTypeJson => new ContestType(contestTypeJson)));
storage.playerPositions.addAll(json.positions.map(positionJson => new PlayerPosition(positionJson)));
storage.players.addAll(json.players.map(playerJson => new Player(playerJson)));
storage.teams.addAll(json.teams.map(teamJson => new Team(teamJson)));
storage.leagues.addAll(json.leagues.map(leagueJson => new League(leagueJson)));
storage.leagueEventTypes.addAll(json.leagueEvents.map(eventJson => new LeagueEventType(eventJson)));
/*

        return new LeagueEventType(eventJson);
        eventJson.games = eventJson.games.concat(generateGames());
        eventJson.games.forEach(game => game.contests = generateContests());
        storage.games.addAll(eventJson.games.map(gameJson => {
            storage.contests.addAll(gameJson.contests.map(contestJson => new Contest(contestJson)));
            return new Game(gameJson);
        }));
    }));
}));
*/


console.log(storage);


function generateGames() {
    let games = [];
    for (let i = 0; i < 10; i++) {
        games.push({
            "id": gameId++,
            "generated": true,
            "date": new Date(2015, 5, i, 17).toISOString(),
            "team1Id": (i * 14) % 6 + 1,
            "team2Id": (i * 11) % 6 + 1,
            "contests": []
        });
    }
    return games;
}

function generateContests() {
    let entries = (contestK + 7) % 20;
    return storage.contestTypes.data.map((type, k) => ({
        id: contestK++,
        typeId: type.id,
        entries: entries,
        myPoints: contestK * (k + 1) % 36,
        myPlace: (contestK + k) % 5 + 1,
        prizes: entries * type.entryFee
    }));
}