export function addVectors(v1: { x: number; y: number }, v2: { x: number; y: number }): { x: number; y: number } {
    return { x: v1.x + v2.x, y: v1.y + v2.y };
}

export function subtractVectors(v1: { x: number; y: number }, v2: { x: number; y: number }): { x: number; y: number } {
    return { x: v1.x - v2.x, y: v1.y - v2.y };
}

export function multiplyVector(v: { x: number; y: number }, scalar: number): { x: number; y: number } {
    return { x: v.x * scalar, y: v.y * scalar };
}

export function dotProduct(v1: { x: number; y: number }, v2: { x: number; y: number }): number {
    return v1.x * v2.x + v1.y * v2.y;
}

export function lerp(start: number, end: number, t: number): number {
    return start + (end - start) * t;
}