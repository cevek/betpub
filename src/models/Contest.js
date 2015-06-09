import BaseModel from './BaseModel';
export default class Contest extends BaseModel {
    type: ContestType;
    name: string;
    game: Game;
    entryFee: number;
    prizes: number;
    maxEntries: number;
    currEntries: number;
    winType: ContestWinType;
    myLineup: Array<Player>;
}