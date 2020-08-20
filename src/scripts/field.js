const plants =[];

export const addPlant = (seed) => {
    if (!Array.isArray) {
        plants.push(seed);
    } else {
        plants.push(seed[0]);
    }
}

export const usePlants = () => {
    return plants
}

// use Array.isArray to check if corn got passed in