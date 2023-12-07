export default class Square { // eksport domyślny
    constructor(size) {
        this.size = size;
    }

    getArea() {
        return this.size * this.size;
    }
}

