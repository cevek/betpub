let {Game, gameStore} = require('./models/Game');
let {Team, teamStore} = require('./models/Team');
let {Contest, contestStore} = require('./models/Contest');
let {League, leagueStore} = require('./models/League');
let {LeagueEventType, leagueEventTypeStore} = require('./models/LeagueEventType');
let json = require('json!./mock.json');

json.teams.forEach(teamJson => {
    teamStore.data.push(new Team(teamJson));
});

//games
var k = 100;
json.leagues.forEach(leagueJson => {
    leagueJson.events.forEach(eventJson => {
        for (var i = 0; i < 100; i++) {
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
            var game = new Game(gameJson);
            gameStore.data.push(game);
        });
    });
});


//events
json.leagues.forEach(leagueJson => {
    leagueJson.events.forEach(eventJson => {
        var leagueEventType = new LeagueEventType(eventJson);
        leagueEventType.games.forEach((game:Game) => game.eventType = leagueEventType);
        leagueEventTypeStore.data.push(leagueEventType);
    });
});

//leagues
json.leagues.forEach(leagueJson => {
    var league = new League(leagueJson);
    league.events.forEach((event:LeagueEventType) => event.league = league);
    leagueStore.data.push(league);
});

console.log(leagueStore);
