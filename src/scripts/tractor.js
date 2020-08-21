import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"
import { addPlant, usePlants } from "./field.js"

const plants =[];

export const plantSeeds = (plan) => {
    // console.log("log argument at top of for loop",plan)
    for (let taco of plan) {
        // console.log("log row",taco)
        for (let plant of taco) {
            // debugger;
            // console.log("log plant",plant)
            if (plant === "Asparagus" ){
                const asparagusSeed = createAsparagus();
                addPlant(asparagusSeed);
                // console.log(asparagusSeed)
            } else if (plant === "Potato" ){
                const potatoSeed = createPotato();
                addPlant(potatoSeed);
                // console.log(potatoSeed)
            } else if (plant === "Soybean" ){
                const soybeanSeed = createSoybean();
                addPlant(soybeanSeed);
                // console.log(soybeanSeed)
            } else if(plant === "Sunflower" ){
                const sunflowerSeed = createSunflower();
                addPlant(sunflowerSeed);
            } else if(plant === "Wheat" ){
                const wheatSeed = createWheat();
                addPlant(wheatSeed);
            } else if(plant === "Corn" ){
                const cornSeed = createCorn();
                addPlant(cornSeed[0]);
            }
            // console.log("log plants in for loop", plants) 
        }
        // usePlants();
        
    }
    return "field planted"

}