// let idNum = 0
export const harvestPlants = (plantsArray) => {
    const seedArray = [];
    // let idNum = 0
    for (const plant of plantsArray) {
        const plantYield = plant.output;
        if (plant.type !== "Corn") {
            for(let i=0; i<plantYield; i++) { 
                // debugger;      
                // let idPlant = { }
                // idPlant.id = idNum  
                // console.log(idPlant)  
                // let newPlant = Object.assign(plant, idPlant)
                // console.log("newplant", newPlant)
                // idNum ++
                seedArray.push(plant)
                console.log("seedarray after new plant push", seedArray)

                // const currentId = 1 +idNum
                // newPlant.id = currentId
                //
                
            }
        } else { 
            for(let i=0; i<plantYield/2; i++) {
                // let idPlant = { }
                // idPlant.id = idNum  
                // console.log(idPlant)  
                // let newPlant = Object.assign(plant, idPlant)
                // console.log("newplant", newPlant)
                // idNum ++
                seedArray.push(plant)

                // const currentId = 1 + idNum
                // newPlant.id = currentId
                // idNum ++
                
            }

        }      
    }
    // for (let i=0; i<seedArray.length; i++) {
    //     let plant = seedArray[i];
    //     plant.id = seedArray[i].indexOf
    // }
    // debugger;
    seedArray.forEach((pla, index) => pla.id = index + 1);


    console.log("check id value", seedArray);
    return seedArray;
}



//other index number options
//-new iteration of objects with a basic for loop using i to create the value
//-