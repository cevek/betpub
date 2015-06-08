import BaseModel from './BaseModel';
export default class EventType extends BaseModel {
    /** @type {string} */
    name;
    /** @type {Game[]} */
    games;
    /** @type {number} */
    salary;
    /** @type {Leage} */
    leage;
}