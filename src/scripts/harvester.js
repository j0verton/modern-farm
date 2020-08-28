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
                const newPlant = {};
                newPlant.type = plant.type;
                newPlant.height = plant.height;
                newPlant.output = plant.output;
                newPlant.icon = plant.icon;
                newPlant.id = idNum + i;
                seedArray.push(newPlant);
                
                
                // const newPlant = plant;
                // newPlant.id= idNum + i + 1;
                // seedArray.push(newPlant);


                // let idPlant = {}
                // idPlant.id = idNum  
                // console.log(idPlant)  
                // idNum ++

                // const newPlant = Object.assign(plant, idPlant)
                // console.log("newplant", newPlant)
                // idNum ++
                 // debugger;
                // const currentId = 1 + idNum
                // idNum ++
                // newPlant.id = currentId
                //
               
                // console.log("seedArray after new plant push", seedArray)              
            }
            idNum = idNum+plantYield
        } else { 
            const plantYield = plant.output/2;
            for(let i=1; i<=plantYield; i++) {
               
                const newPlant = {};
                newPlant.type = plant.type;
                newPlant.height = plant.height;
                newPlant.output = plant.output;
                newPlant.icon = plant.icon;
                newPlant.id = idNum + i;
                seedArray.push(newPlant);
               
                // const newPlant = plant;
                // newPlant.id= idNum + i + 1;
                // seedArray.push(newPlant);
                
                // let idPlant = { }
                // idPlant.id = idNum  
                // console.log(idPlant)  
                // idNum ++
                // let newPlant = Object.assign(plant, idPlant)
                // console.log("newplant", newPlant)
                // idNum ++
                // const currentId = 1 + idNum
                // newPlant.id = currentId
                // idNum ++
                
            }
            idNum = idNum+plantYield

        }      
    }
    // for (let i=0; i<seedArray.length; i++) {
    //     let plant = seedArray[i];
    //     console.log(plant, i)
    //     plant.id = i + 1
    // }
    // debugger;

    // seedArray.forEach((taco, index) => taco.id = index+1);

    // seedArray.forEach(function(item, index) {
    //     console.log("index test", item, index)
    // });


    // console.log("check id value", seedArray);
    return seedArray;
}



//other index number options
//-new iteration of objects with a basic for loop using i to create the value
//-

//-via mori, build an additional for loop inside the others to itterate each type of plant and add(something like)  the yield to the counter