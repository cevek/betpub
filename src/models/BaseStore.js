export default class BaseModel {
    data = [];

    getById(id:string) {
        for (var i = 0; i < this.data.length; i++) {
            var item = this.data[i];
            if (item.id === id) {
                return item;
            }
        }
        throw new Error('Item not found');
        return null;
    }
}