export class BaseStore {
    data = [];
    hash = {};

    addAll(items) {
        for (var i = 0; i < items.length; i++) {
            this.add(items[i]);
        }
    }

    add(item){
        if (this.hash[item.id] == null) {
            this.hash[item.id] = item;
            this.data.push(item);
        }
        else {
            this.data[this.hash[item.id]] = item;
        }
    }

    getById(id) {
        for (let i = 0; i < this.data.length; i++) {
            let item = this.data[i];
            if (item.id == id) {
                return item;
            }
        }
        throw new Error('Item not found');
    }
}