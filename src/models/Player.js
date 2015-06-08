import BaseModel from './BaseModel';
export default class Player extends BaseModel {
    /** @type {string} */
    name;
    /** @type {number} */
    points;
    /** @type {PlayerPosition} */
    position;
    /** @type {number} */
    FPPG;
    /** @type {number} */
    salary;
    /** @type {Team} */
    team;
}