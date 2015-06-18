import {BaseStore} from './BaseStore';
import {BaseModel} from './BaseModel';
import {Player} from './Player';
import {storage} from '../storage';
import {http} from '../http';

export class Team extends BaseModel {
    name;
    players = [];

    static url = '/team/';

    static fetch(id) {
        return http.get(Team.url + id).then(teamJson=> new Team(teamJson));
    }

    constructor(json) {
        super();
        this.id = json.id;
        this.name = json.name;
        if (json.players) {
            this.players = json.players.map(playerJson => new Player(playerJson));
            this.players.forEach(player => player.team = this);
        }
    }
}

export class TeamStore extends BaseStore {}