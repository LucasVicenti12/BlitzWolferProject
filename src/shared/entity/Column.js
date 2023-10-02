export class Column {
    /**
     * This class is used for create the columns of all tables
     * @param {String} label
     * @param {String} key
     * @param {String} width
     * @param {String} type
     * @param {Boolean} isFilter
     * @param {Boolean} isOrder
     */
    constructor(label, key, width, type, isFilter, isOrder) {
        this.label = label;
        this.key = key;
        this.width = width;
        this.type = type;
        this.isFilter = isFilter;
        this.isOrder = isOrder;
    }
}