import { createAsparagus } from "./seeds/asparagus"
import { addPlant, usePlants } from "./field"

export const plantSeeds = (plan) = {
    for (const row of rows) {
        for (const plant of row) {
            if (plant === "Asparagus" ){
                const asparagusSeed = createAsparagus();
                addPlant(asparagusSeed);
            } else if (plant === "Potato" ){
                const potatoSeed = createPotato();
                addPlant(potatoSeed);
            } else if (plant === "Soybean" ){
                const soybeanSeed = createSoybean();
                addPlant(soybeanSeed);
            } else if(plant === "Sunflower" ){
                const sunflowerSeed = createSunflower();
                addPlant(sunflowerSeed);
            } else if(plant === "Wheat" ){
                const wheatSeed = createWheat();
                addPlant(wheat);
            } else if(plant === "Corn" ){
                const cornSeed = createAsparagus();
                addPlant(cornSeed[0]);
            }
            usePlants();          
        }
        usePlants();
    }


}