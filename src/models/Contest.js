import BaseModel from './BaseModel';
export default class Contest extends BaseModel {
    /** @type {ContestType} */
    type;
    /** @type {string} */
    name;
    /** @type {Game} */
    game;
    /** @type {number} */
    entryFee;
    /** @type {number} */
    prizes;
    /** @type {number} */
    maxEntries;
    /** @type {number} */
    currEntries;
    /** @type {ContestWinType} */
    winType;
    /** @type {Player[]} */
    myLineup;
}