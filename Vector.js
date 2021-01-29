class Vector 
{
    constructor(x = 0, y = 0, z = 0)
    {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    add(vector) {
        this.x += vector.x;
        this.y += vector.y;
        this.z += vector.z;
    }

    sub(vector) {
        this.x -= vector.x;
        this.y -= vector.y;
        this.z -= vector.z;
    }

    mult(factor) {
        this.x *= factor;
        this.y *= factor;
        this.z *= factor;
    }

    mag() {
        return Math.sqrt(Math.pow(this.z, 2) + (Math.pow(this.x, 2) + Math.pow(this.y, 2)));
    }

    set(vector) {
        this.x = vector.x;
        this.y = vector.y;
        this.z = vector.z;
    }

    dist(vector) {
        return Math.sqrt(Math.pow(vector.x - this.x, 2) + Math.pow(vector.y - this.y, 2) + Math.pow(vector.z - this.z, 2));
    }
}
