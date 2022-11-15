export const choice = <T extends any>(arr: T[]) => {
    const randIdx = Math.floor(Math.random() * arr.length);

    return arr[randIdx];
};
