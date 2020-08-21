console.log("Welcome to the main module")

import {createPlan} from './plan.js'
import { createCorn } from './seeds/corn.js';
import { createAsparagus } from "./seeds/asparagus.js";
import { addPlant } from './field.js';
import { usePlants } from'./field.js';
import { plantSeeds } from './tractor.js';
import { harvestPlants } from './harvester.js';


const yearlyPlan=createPlan();
console.log(yearlyPlan);

// const cornSeed = createCorn();
// const asparagusSeed = createAsparagus();

// addPlant(asparagusSeed);
// addPlant (cornSeed)
// debugger
console.log("log new plants",newPlants);
// const plan = createPlan()
// console.log("log plan", plan)
const planted = plantSeeds(yearlyPlan);
console.log(planted);
const plantedField = usePlants();

const harvest = harvestPlants(plantedField);
console.log(harvest)