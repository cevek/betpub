export function getOrdinal(n:number):string {
    let s = ['th', 'st', 'nd', 'rd'];
    let v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

export function formatAMPM(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let amPm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return hours + ':' + minutes + ' ' + amPm;
}

Date.prototype.getDayInt = function () {
    return this.getFullYear() * 10000 + (this.getMonth() + 1) * 100 + this.getDate();
};

Array.prototype.groupBy = function (groupFn, idProp) {
    let map = {};
    for (let i = 0; i < this.length; i++) {
        let item = this[i];
        let group = groupFn(item);
        let data = map[group[idProp]];
        if (!data) {
            data = {group: group, items: []};
            map[group[idProp]] = data;
        }
        data.items.push(item);
    }

    let ret = [];
    for (var key in map){
        ret.push({group: map[key].group, key: key, items: map[key].items});
    }
    return ret;
};