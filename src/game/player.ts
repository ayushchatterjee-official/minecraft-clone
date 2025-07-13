class Player {
    position: { x: number; y: number; z: number };
    health: number;

    constructor() {
        this.position = { x: 0, y: 0, z: 0 };
        this.health = 100;
    }

    move(dx: number, dy: number, dz: number) {
        this.position.x += dx;
        this.position.y += dy;
        this.position.z += dz;
    }

    interact() {
        // Interaction logic with the world
    }
}

export default Player;