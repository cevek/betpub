export class BaseStore {
    data = [];

    addAll(items) {
        this.data = this.data.concat(items);
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