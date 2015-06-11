export function getOrdinal(n:number):string {
    var s = ['th', 'st', 'nd', 'rd'];
    var v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

export function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var amPm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return hours + ':' + minutes + ' ' + amPm;
}

Date.prototype.getDayInt = function () {
    return this.getFullYear() * 10000 + (this.getMonth() + 1) * 100 + this.getDate();
};

Array.prototype.groupBy = function (groupFn) {
    var map = new Map();
    for (var i = 0; i < this.length; i++) {
        var item = this[i];
        var group = groupFn(item);
        var items = map.get(group);
        if (!items) {
            items = [];
            map.set(group, items);
        }
        items.push(item);
    }

    var ret = [];
    map.forEach((value, key)=>{
        ret.push({group: key, items: value});
    });
    return ret;
};