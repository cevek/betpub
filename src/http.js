import {HTTP} from './lib/HTTP';
import {storage} from './storage';
//export let http = new HTTP('/api/v1/');

import json from 'json!./mock.json';


class MockHTTP {
    get(url) {
        return new Promise((resolve, reject)=> {
            var m;
            if (m = url.match(/^\/game\/(\d+)$/)) {
                setTimeout(()=> {
                    resolve(generateGame(m[1]));
                }, 500);
            }
            if (url.match(/^\/gamelist$/)) {
                setTimeout(()=> {
                    var games = [];
                    for (var i = 0; i < 10; i++) {
                        games.push(generateGame());
                    }
                    resolve(games);
                }, 500);
            }
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
        "id": id++,
        "generated": true,
        "date": new Date(2015, 5, id, 17).toISOString(),
        "team1Id": (id * 14) % 6 + 1,
        "team2Id": (id * 11) % 6 + 1,
        "eventTypeId": id % 2 + 1,
        "contests": generateContests()
    };
}


let contestId = 100;
function generateContests() {
    let entries = (contestId + 7) % 20;
    return storage.contestTypes.data.map((type, k) => ({
        id: contestId++,
        typeId: type.id,
        entries: entries,
        myPoints: contestId * (k + 1) % 36,
        myPlace: (contestId + k) % 5 + 1,
        prizes: entries * type.entryFee
    }));
}