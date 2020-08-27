// let idNum = 0
export const harvestPlants = (plantsArray) => {
    const seedArray = [];
    let idNum = 0
    let plantYield = 0;
    for (const plant of plantsArray) {
        idNum = idNum + plantYield
        if (plant.type !== "Corn") {
            const plantYield = plant.output;
            for(let i=1; i<=plantYield; i++) { 
                const newPlant = plant;
                newPlant.id = idNum + i;
                seedArray.push(newPlant);                    
            }
            idNum = idNum+plantYield
        } else { 
            const plantYield = plant.output/2;
            for(let i=1; i<=plantYield; i++) {
                const newPlant = plant;
                newPlant.id = idNum + i;
                seedArray.push(newPlant);        
            }
            idNum = idNum+plantYield

        }      
    }
    return seedArray;
}



//other index number options
//-new iteration of objects with a basic for loop using i to create the value
//-

//-via mori, build an additional for loop inside the others to itterate each type of plant and add(something like)  the yield to the counter