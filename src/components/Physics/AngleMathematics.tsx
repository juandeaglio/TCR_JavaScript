const normalizeAngle = (angle: number): number => {
    let normalizedAngle = angle % (Math.PI * 2);
    if (normalizedAngle < 0) {
        normalizedAngle += (Math.PI * 2);
    }
    return normalizedAngle;
}
export default normalizeAngle;