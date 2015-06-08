import BaseModel from './BaseModel';
export default class Game extends BaseModel {
    /** @type {Date} */
    date;
    /** @type {EventType} */
    eventType;
    /** @type {Team} */
    team1;
    /** @type {Team} */
    team2;
    /** @type {number} */
    team1Score;
    /** @type {number} */
    team2Score;
    /** @type {number} */
    periods;
    /** @type {number} */
    activePeriod;
    /** @type {Contest[]} */
    contests;
}