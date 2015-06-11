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

Array.prototype.groupBy = function (groupFn) {
    let map = new Map();
    for (let i = 0; i < this.length; i++) {
        let item = this[i];
        let group = groupFn(item);
        let items = map.get(group);
        if (!items) {
            items = [];
            map.set(group, items);
        }
        items.push(item);
    }

    let ret = [];
    map.forEach((value, key)=>{
        ret.push({group: key, items: value});
    });
    return ret;
};