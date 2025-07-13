export class Block {
    type: string;
    position: { x: number; y: number; z: number };

    constructor(type: string, position: { x: number; y: number; z: number }) {
        this.type = type;
        this.position = position;
    }

    render() {
        // Logic to render the block in the game world
    }

    interact() {
        // Logic for interaction with the block
    }
}