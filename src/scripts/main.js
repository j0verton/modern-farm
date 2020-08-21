console.log("Welcome to the main module")

import {createPlan} from './plan.js'
const yearlyPlan=createPlan();
// console.log(createPlan);

import { createCorn } from './seeds/corn.js';
// const cornSeed = createCorn();
// console.log(cornSeed)

import { createAsparagus } from "./seeds/asparagus.js";
import { addPlant } from './field.js';
import { usePlants } from'./field.js';
import { plantSeeds } from './tractor.js';




// const asparagusSeed = createAsparagus();

// addPlant(asparagusSeed);
// addPlant (cornSeed)
// debugger
const newPlants = usePlants();
console.log(newPlants);
debugger
// const plan = createPlan()
// console.log("log plan", plan)
const plantedField = plantSeeds(yearlyPlan);
console.log("log planted field", plantedField)
