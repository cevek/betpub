import {BaseModel} from './BaseModel';
import {BaseStore} from './BaseStore';
export class ContestType extends BaseModel {
    name;
    maxEntries;
    entryFee;

    constructor(json) {
        super();
        this.id = json.id;
        this.name = json.name;
        this.maxEntries = json.maxEntries;
        this.entryFee = json.entryFee;
    }
}

export class ContestTypeStore extends BaseStore {}
