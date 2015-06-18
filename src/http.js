import {HTTP} from './lib/HTTP';
import {storage} from './storage';
//export let http = new HTTP('/api/v1/');

import {json} from './mock.js';


class MockHTTP {
    get(url) {
        return new Promise((resolve, reject)=> {
            console.log(url);
            setTimeout(()=> {
                var m;
                if (m = url.match(/^\/game\/(\d+)$/)) {
                    let id = m[1];
                    resolve(generateGame(id));
                }
                if (m = url.match(/^\/team\/(\d+)$/)) {
                    let id = m[1];
                    resolve(json.teams.filter(team => {
                        team.players = team.playerIds.map(playerId => json.players.filter(p => p.id == playerId).pop());
                        return team.id == id
                    }).pop());
                }
                if (url === '/games') {
                    var games = [];
                    for (var i = 0; i < 10; i++) {
                        games.push(generateGame());
                    }
                    resolve(games);
                }
                if (url === '/teams') {
                    resolve(json.teams);
                }
                if (url === '/leagues') {
                    resolve(json.leagues);
                }
                if (url === '/events') {
                    resolve(json.leagueEvents);
                }
                if (url === '/contest-types') {
                    resolve(json.contestTypes);
                }
                if (url === '/player-positions') {
                    resolve(json.positions);
                }
                if (url === '/league-events') {
                    resolve(json.leagueEvents);
                }
            }, 500);
        });

    }
}

export let http = new MockHTTP();

let gameId = 100;
function generateGame(id) {
    if (!id) {
        id = gameId++;
    }
    return {
        "id": id,
        "generated": true,
        "date": new Date(2015, 5, id, 17).toISOString(),
        "team1Id": (id * 14) % 6 + 1,
        "team2Id": (id * 11) % 6 + 1,
        "eventTypeId": id % 2 + 1,
        "contests": generateContests(id)
    };
}


function generateContests(gameId) {
    return storage.contestTypes.data.map((type, k) => {
        var contestId = +gameId + k * 100;
        let entries = (contestId + 7) % 20;
        return {
            id: contestId,
            typeId: type.id,
            entries: entries,
            myPoints: contestId * (k + 1) % 36,
            myPlace: (contestId + k) % 5 + 1,
            prizes: entries * type.entryFee
        }
    });
}