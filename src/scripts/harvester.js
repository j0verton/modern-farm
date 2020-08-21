export const harvestPlants = (plantsArray) => {
    const seedArray = [];
    for (plant of plantsArray) {
        const plantYield = plant.output;
        if (plant.type !== "Corn") {
            for(let i=0; i<plantYield; i++) {
                seedArray.push(plant)
            }
        } else { for(let i=0; i<plantYield/2; i++) {
            seedArray.push(plant)
        }

        }      
    }

    return seedArray
}