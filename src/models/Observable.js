export class Observable {
    listeners = [];

    listen(callback) {
        this.listeners.push(callback);
    }

    unlisten(callback) {
        var pos = this.listeners.indexOf(callback);
        if (pos > -1) {
            this.listeners.splice(pos, 1);
        }
    }

    update() {
        for (var i = 0; i < this.listeners.length; i++) {
            var listener = this.listeners[i];
            listener();
        }
    }
}