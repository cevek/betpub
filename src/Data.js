import {PlayerPosition, playerPositionStore} from './models/PlayerPosition';
import {Game, gameStore} from './models/Game';
import {Team, teamStore} from './models/Team';
import {Contest, contestStore} from './models/Contest';
import {Player, playerStore} from './models/Player';
import {League, leagueStore} from './models/League';
import {LeagueEventType, leagueEventTypeStore} from './models/LeagueEventType';
import json from 'json!./mock.json';


//positions
json.positions.forEach(positionJson => {
    let position = new PlayerPosition(positionJson);
    playerPositionStore.data.push(position);
});

//player
json.players.forEach(playerJson => {
    playerJson.positionId = 1;
    let player = new Player(playerJson);
    playerStore.data.push(player);
});

console.log(playerStore);

//teams
json.teams.forEach(teamJson => {
    teamStore.data.push(new Team(teamJson));
});

//games
let k = 100;
json.leagues.forEach(leagueJson => {
    leagueJson.events.forEach(eventJson => {
        for (let i = 0; i < 100; i++) {
            eventJson.games.push({
                "id": ++k,
                "generated": true,
                "date": new Date(2015, 5, i, 17).toISOString(),
                "team1Id": (i * 14) % 6 + 1,
                "team2Id": (i * 11) % 6 + 1,
                "contests": []
            });
        }
        eventJson.games.forEach(gameJson => {
            let game = new Game(gameJson);
            gameStore.data.push(game);
        });
    });
});


//events
json.leagues.forEach(leagueJson => {
    leagueJson.events.forEach(eventJson => {
        let leagueEventType = new LeagueEventType(eventJson);
        leagueEventType.games.forEach((game:Game) => game.eventType = leagueEventType);
        leagueEventTypeStore.data.push(leagueEventType);
    });
});

//leagues
json.leagues.forEach(leagueJson => {
    let league = new League(leagueJson);
    league.events.forEach((event:LeagueEventType) => event.league = league);
    leagueStore.data.push(league);
});

//console.log(leagueStore);
