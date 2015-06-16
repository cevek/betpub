import {BaseStore} from './BaseStore';
import {BaseModel} from './BaseModel';
import {playerStore} from './Player';
import {contestTypeStore} from './ContestType';
export class Contest extends BaseModel {
    type;
    prizes;
    entries;
    myLineUp;
    myPoints;
    myPlace;

    constructor(json) {
        super();
        this.id = json.id;
        this.type = contestTypeStore.getById(json.typeId);
        this.prizes = json.prizes;
        this.entries = json.entries;
        this.myLineUp = [];//json.myLineUp.map(playerJsonId => playerStore.getById(playerJsonId));
        this.myPoints = json.myPoints;
        this.myPlace = json.myPlace;
    }
}

class ContestStore extends BaseStore {}

export let contestStore = new ContestStore();
