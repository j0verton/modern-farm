const plants =[];

export const addPlant = (seed) => {
    if (!Array.isArray(seed)) {
        plants.push(seed);
    } else {
        plants.push(seed);
        // plants.push(seed[0]);
    }
}

export const usePlants = () => {
    return plants
}
