console.log("Welcome to the main module")

import { createPlan } from './plan.js'
import { createCorn } from './seeds/corn.js';
import { createAsparagus } from "./seeds/asparagus.js";
import { addPlant } from './field.js';
import { usePlants } from'./field.js';
import { plantSeeds } from './tractor.js';
import { harvestPlants } from './harvester.js';
import { catalog, catalogTable } from './catalog.js';


const yearlyPlan=createPlan();

const planted = plantSeeds(yearlyPlan);
const plantedField = usePlants();

// console.log("log planted seeds", plantedField)


const harvest = harvestPlants(plantedField);
console.log("log harvest", harvest)
// harvest.forEach((pla, index) => pla.id = index + 1);
// console.log("with ids?", harvest)
    // seedArray.forEach(function(item, index, array) {
    //     console.log("index test", item, index)
    // });

// catalog(harvest);
catalogTable(harvest)

