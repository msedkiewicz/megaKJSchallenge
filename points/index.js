class Point2D {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    getMyLocation() {
        console.log(`I am located here (${this.x}, ${this.y}).`);
    }
}

class Point3D extends Point2D {
    constructor(x, y, z) {
        super(x, y);
        this.z = z;
    }
    getMyLocation() {
        super.getMyLocation();
        console.log(`I am located here (${this.x}, ${this.y}, ${this.z}).`);
    }
}

const point2d = new Point2D(10,20);
console.log(point2d);
console.log(point2d.getMyLocation());


const point3d = new Point3D(10,20,30);
console.log(point3d);
console.log(point3d.getMyLocation());
