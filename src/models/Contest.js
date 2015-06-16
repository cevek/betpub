import {BaseStore} from './BaseStore';
import {BaseModel} from './BaseModel';
import {storage} from '../storage';
export class Contest extends BaseModel {
    type;
    prizes;
    entries;
    myLineUp;
    myPoints;
    myPlace;
    game;

    constructor(json) {
        super();
        this.id = json.id;
        this.type = storage.contestTypes.getById(json.typeId);
        this.prizes = json.prizes;
        this.entries = json.entries;
        this.myLineUp = [];//json.myLineUp.map(playerJsonId => playerStore.getById(playerJsonId));
        this.myPoints = json.myPoints;
        this.myPlace = json.myPlace;
    }
}

export class ContestStore extends BaseStore {}
